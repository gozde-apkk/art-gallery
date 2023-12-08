const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const express = require("express");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("loginUser", email, password);
  if(!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }
  const user = await User.findOne({ email});
  console.log("user found", user);
  if( user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({
      user : {
        id : user.id,
        username : user.username,
        email : user.email,
      },
    },
    process.env.API_SECRET,
    );
    res.status(200).send({accessToken});
  }else{
    res.status(401);
    throw new Error("Invalid email or password");
  }

}


const registerUser = async (req, res , next) => {
  const {username , email, password} = req.body;
  if(!username || !password || !email) return next(new Error("Please add all fields"));
  const hashPassword = bcrypt.hashSync(password, 10);
  const data = new User({
      username: req.body.username,
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
   }