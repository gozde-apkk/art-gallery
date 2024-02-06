const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginUser = asyncHandler(async (req, res) => {
  const {
    email,
    password
  } = req.body;

  // Validate Request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  // Check if the user exists
  const user = await User.findOne({
    email
  });
  console.log("user", user)
  if (user) {
    // User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(req.body.password, user.password);
    console.log("passwordIsCorrect", passwordIsCorrect)
    if (passwordIsCorrect) {
      // Generate Token
      const token = generateToken(user);
      console.log(token);

      const newUser = await User.findOne({
        email
      }).select("-password");

      // Set cookie with the generated token
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
      });

      res.status(200).json(newUser);
    } else {
      res.status(403);
      throw new Error("user password is not correct");
    }
  } else {
    res.status(403);
    throw new Error("Invalid email or password");
  }
});

const registerUser = async (req, res, next) => {
  const {
    name,
    email,
    password
  } = req.body;
  if (!name || !password || !email) return next(new Error("Please add all fields"));
   const userExist = await User.findOne({email});
   if(userExist){
    res.status(400);
    throw new Error("User already exist")
   }
    
   const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
   })
   if(user){
    res.status(201).json({
      _id : user.id,
      name : user.name,
      email : user.email  
    })
   }else {
    res.status(400);
    throw new Error("invalid user data")
   }
}

const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({
    message: "Successfully logged out"
  });
});

const getUserById = asyncHandler(async (req, res) => {

  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
})



const createUser = async (req, res, next) => {
  const {
    username,
    email,
    password
  } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const data = new user({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    console.log("User created successfuly");
  } catch (error) {
    next(error);
  }
};

const getLoginStatus = asyncHandler(async (req, res) => {

  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    res.json(false);
  }
  const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
  if (!verified) {
    res.json(false);
  }
  res.json(true);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    const {
      username,
      phone,
      address
    } = user;
    user.username = req.body.username || username;
    user.phone = req.body.phone || phone;
    user.address = req.body.address || address;

    const updateUser = await user.save();
    res.status(200).json(updateUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.send("update user");
})


const updatePhoto = asyncHandler(async (req, res) => {
  const {
    photo
  } = req.body;
  const user = await User.findById(req.user.id);
  user.photo = photo;
  const updateUser = await user.save();
  res.status(200).json(updateUser);
 
})

module.exports = {
  registerUser,
  logout,
  createUser,
  getUserById,
  loginUser,
  getLoginStatus,
  updateUser,
  updatePhoto
};