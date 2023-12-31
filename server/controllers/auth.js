const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const express = require("express");
const generateToken = require("../utils/generateToken");
const expressAsyncHandler = require("express-async-handler");

const loginUser = async (req, res, next) => {
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
        email : user.email,
        password : user.password
      },
    },
    process.env.ACCESS_TOKEN,
    {expiresIn : "1m"}
   
    );

    const {password, ...others} = user._doc
    res.cookie("access_token", accessToken, {httpOnly: true, sameSite: "none", secure: true})
    .status(200).json({others});
    console.log( "access_token" , accessToken)
  }else{
    res.status(401);
    throw new Error("Invalid email or password");
  }

}

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.API_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}


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

module.exports = {
    registerUser,
    loginUser,
    authUser
   }