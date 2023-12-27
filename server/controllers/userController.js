const asyncHandler = require( 'express-async-handler' ) ;
const User = require( '../models/user' ) ;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require('../utils/generateToken');





// @desc    Auth user & get token
// @route   POST /api/users/auth
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
const authUser = asyncHandler(async (req, res) => {

  const {email, password} = req.body;

    const user = await User.findOne({ email});
    console.log("user" , user)
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       console.log("password_valid" , password_valid)
       if(password_valid){
           token = jwt.sign({ "id" : user.id,"email" : user.email },process.env.JWT_SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
     
     });



// const generateToken = async (user) => {
//   const payload = {
//       id: user.user_id,
//       name:user.username,
//       role: user.role_name,
//   }
//   const options = {
//       expiresIn: "3h"
//   }
//   const token = jwt.sign(payload, JWT_SECRET, options);
  
//   return token;
// }
const loginUse = asyncHandler(async (req, res) => {
  try{
    const {email , password} = req.body;
    const registeredUser = await User.findOne({email})
    console.log(registeredUser);
    if(registeredUser &&  bcrypt.compareSync(password, registeredUser.password)){
      const token =generateToken(registeredUser)
      console.log("token", token);
     
      res.json({message: `"Welcome back ${registeredUser.name} `, "token": token})
    }else{
      res.status(401).json({status:401, message:"Invalid credentials"})
    }
  }catch(err){
    console.log(err);
  }
})
module.exports ={
  loginUser,
  loginUse,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  authUser
};
