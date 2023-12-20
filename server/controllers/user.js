const asyncHandler = require("express-async-handler");
const  User  = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //Validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Please add a password with 6 or more characters");
  }
  //Check if user exists
//   const userExists = await User.findOne({email});
//   if (!userExists) {
//     res.status(400);
//     throw new Error("Invalid credentials");
//   }

  //Create a new user
  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });

  const generateToken = () => {
    return jwt.sign({ 
      user : {
        id : user._id,
        username : user.username,
        email : user.email,
     
      }
     }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
  };
  
  const token = generateToken(user);

  if (user) {
    const { _id, username, email, role } = user;
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure : true,
      // sameSite : none,
    });

    //Send user data
    res.status(201).json({
      _id,
      username,
      email,
      role,
      token,
    });
  } else {
    res.status(403);
    throw new Error("Invalid user data");
  }
});



// const registerUser = async (req, res , next) => {
//     const {username , email, password} = req.body;
  
//     if(!username || !password || !email) return next(new Error("Please add all fields"));
    
//     const hashPassword = bcrypt.hashSync(password, 10);
//     const data = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password : hashPassword
//     })
//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//         console.log("User created successfuly")
//     }
//     catch (error) {
//         next(error);
//     }
//   }
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all users" });
});

// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
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

const getUser = (req, res) => {
  res.status(200).json({ message: `Get user ${req.params.id}` });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
};

module.exports = {
  registerUser,
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
