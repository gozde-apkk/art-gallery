const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user.js");

const signIn = async (req, res, next) => {
  let { email, password } = req.body;
  console.log(email, password);
 
  let existingUser;
  try {
    existingUser = await user.findOne({ email: email });
   console.log("existing user", existingUser);
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
 
  res
    .status(200)
    .json({
      success: true,
      data: {
        userId: existingUser.id,
        email: existingUser.email,
        token: token,
      },
    });
};
const getUser = (req, res) => {
    res.status(200).json({message : `auth controller i working`})
}


const createUser = async (req, res , next) => {

  const {username , email, password} = req.body;
  const hashPassword = bcrypt.hashSync(password, 10)
  const data = new user({
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
    getUser,
    createUser,
    signIn,
   }