const asyncHandler = require( 'express-async-handler' ) ;
const User = require( '../models/user' ) ;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require('../utils/generateToken');

const getUser = asyncHandler(async (req, res) => { 
    try {
      const user = await User.findOne(req.user._id).select("-password");
      if (user) {
        res.json(user);
      } else {
        res.status(404);
        throw new Error("User not found");
      }
    } catch (error) {
      console.log(error)
    }
})
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
const getLoginStatus = asyncHandler (async (req, res) => {
  const access_token = req.cookies.token
  if(!access_token){
    res.json(false)
  }

  const verified = jwt.verify(access_token, process.env.ACCESS_TOKEN)
  if(verified){
    res.json(true)
  }else{
    res.json(false)
  }
})

// @desc    Auth user & get token
// @route   POST /api/users/LOGİN
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  const user = await User.findOne({ email});
  if( user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({
      user : {
        id : user.id,
        username : user.username,
        email : user.email,
      },
    },
    process.env.ACCESS_TOKEN,
   
    );

    const {password, ...others} = user._doc
    res.cookie("access_token", accessToken, {httpOnly: true, sameSite: "none", secure: true})
    .status(200).json({others});
    console.log( "access_token" , accessToken)
    console.log(  "login succes")
  }else{
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
const registerUser = async (req, res , next) => {
  const {name , email, password, password2} = req.body;

  if(!name || !password || !email || !password2) return next(new Error("Please add all fields"));
  
  const hashPassword = bcrypt.hashSync(password, 10);
  const data = new User({
      name: req.body.name,
      email: req.body.email,
      password : hashPassword
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
      console.log("User created successfuly")
  }
  catch (error) {
      next(error);
  }
}

// @route   POST /api/users
// @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password , confirmPassword } = req.body;

//    if(!name || !password || !email || !password2) return next(new Error("Please add all fields"));
  

//   const userExists = await User.findOne({ email });
//   // const newUser = new User({
//   //   name,
//   //   email,
//   //   password,
//   //   confirmPassword
//   // })
//     // const dataToSave=  await newUser.save();
//     // res.status(201).json(dataToSave);
//     // console.log("User created successfuly")

//   if (userExists) {
//     res.status(400);
//     throw new Error('User already exists');
//   }

//   const user = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//   });

//   if (user) {
//     generateToken(res, user._id);

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role : user.role,

//     });
//   } else {
//     res.status(400);
//     throw new Error('Invalid user data');
//   }
// });

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});






module.exports ={
  loginUser,
  getUser,
  updatePhoto,
  updateUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
