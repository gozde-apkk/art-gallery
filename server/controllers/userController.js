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

  //   Validation
  if(!email || !password) {
    res.status(400);
    throw new Error('Please add email and password')
  }
    //Check if the user exists
  const user = await User.findOne({ email });
  console.log("user", user)
   //User exists, check if password is correct
   const passwordIsCorrect = await bcrypt.compare(password, user.password);
   
   const generateToken = ( userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  }
   //generate token
   const token = generateToken(user._id);
   console.log(token);
   if (user && passwordIsCorrect) {
    const newUser = await User.findById(user._id).select("-password");
     res.cookie("token", token), {
       path : "/",
       httpOnly : true,
       expires : new Date(Date.now() + 1000 * 86400), // 1 day
       // secure : true,
       // sameSite : none,
     };
      res.json( newUser);
   }else{
    res.status(401);
    throw new Error('Invalid email or password')
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
      console.log("User created successfuly", d)
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
  const { email, password } = req.body;
  const user = {
    email: email,
    password: password,
  }
  console.log(email, password);
  const accessToken = jwt.sign(
    user,
   process.env.API_SECRET
  )
  res.json({ accessToken : accessToken});

});
module.exports ={
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  authUser
};
