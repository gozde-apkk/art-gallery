const asyncHandler = require("express-async-handler");
const  User  = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { constructFrom } = require("date-fns");
const { use } = require("../routes/userRouter.js");



const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

//   Validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
    //Check if user exists
  const userExists = await User.findOne({email});
  if(userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Please add a password with 6 or more characters");
  }

  //Create a new user
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
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

const loginUser = asyncHandler (async (req, res) => {

    const {email, password} = req.body;

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

    //Validate Request
    if(!email || !password){
        res.status(400);
        throw new Error("Please add email and password")
    }

    //Check if the user exists
    const user = await User.findOne({email});

    //User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    //Generate Token
    const token = generateToken(user);
    if(user && passwordIsCorrect){
        const  newUser = await User.findOne({email}).select("-password");
       res.cookie("token", token), {
        path : "/",
        httpOnly : true,
        expires : new Date(Date.now() + 1000 * 86400)};

        res.status(200).json(newUser);
    }else{
        res.status(403);
        throw new Error("Invalid email or password")  
    }
    res.send("Welcome")

})

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
const logout = asyncHandler(async (req, res) => {
     res.cookie("token" , "", {
        path: "/",
        httpOnly : true,
        expires : new Date(0),
     });
     return res.status(200).json({message : "Successfully logged out"});
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
})

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

const getLoginStatus = asyncHandler(async (req, res) => {   

    const token = req.cookies.token;
    if(!token) {
        res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified) {
        res.json(false);
    }
    res.json(true);
    res.send("Login successful")
});

 const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if(user ) {
        const {username, phone , address} = user;
        user.username = req.body.username || username;
        user.phone = req.body.phone || phone;
        user.address = req.body.address || address;

        const updateUser = await user.save();
        res.status(200).json(updateUser);
    }else {
        res.status(404);
        throw new Error("User not found");
    }
    res.send("update user");
 })


 const updatePhoto = asyncHandler(async (req, res) => {
    const {photo} = req.body;
    const user = await User.findById(req.user.id);
    user.photo = photo;
    const updateUser = await user.save();
    res.status(200).json(updateUser);
     res.send("update photo");
 })

module.exports = {
  registerUser,
  logout,
  createUser,
  getUser,
  loginUser,
  getLoginStatus,
  updateUser,
  updatePhoto
};
