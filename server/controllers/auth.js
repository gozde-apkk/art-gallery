const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user.js");

const signup = async (req, res, next) => {
  const {username , email, password} = req.body;
  const hashPassword = bcrypt.hashSync(password, 10)
  try{
    const data = new User({
      username: req.body.username,
      email: req.body.email,
      password: ha
    });
  
    user.save((err, user) => {
      if (err) {
        res.status(500)
          .send({
            message: err
          });
        return;
      } else {
        res.status(200)
          .send({
            message: "User Registered successfully"
          })
      }
    });
  }catch(err){
    console.log(err);
  }
};

// const signin = (req, res) => {
//   User.findOne({
//       email: req.body.email
//     })
//     .exec((err, user) => {
//       if (err) {
//         res.status(500)
//           .send({
//             message: err
//           });
//         return;
//       }
//       if (!user) {
//         return res.status(404)
//           .send({
//             message: "User Not found."
//           });
//       }

//       //comparing passwords
//       const passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       // checking if password was valid and send response accordingly
//       if (!passwordIsValid) {
//         return res.status(401)
//           .send({
//             accessToken: null,
//             message: "Invalid Password!"
//           });
//       }
//       //signing token with user id
//       const token = jwt.sign({
//         id: user.id
//       }, process.env.API_SECRET, {
//         expiresIn: 86400
//       });

//       //responding to client request with user profile success message and  access token .
//       res.status(200)
//         .send({
//           user: {
//             id: user._id,
//             email: user.email,
//             fullName: user.fullName,
//           },
//           message: "Login successfull",
//           accessToken: token,
//         });
//     });
// };

const signIn = async (req, res, next) => {
  const {email, password} = req.body;
  try{
     const validateUser = User.findOne({email, password})
     if(!validateUser) return next(err);
     const validPassword = bcrypt.compareSync(password, validateUser.password)
     if(!validPassword) return next(err);
     const token = jwt.sign({id: validateUser._id}, process.env.API_SECRET, {expiresIn: 86400})
     res.status(200).json({user: validateUser, token: token}).cookie("token", token);
    }catch(error){
      next(error);
  }
}

const getUser = (req, res) => {
    res.status(200).json({message : `auth controller i working`})
}

const updateUser = (req, res) => {
    res.status(200).json({message : `Update user ${req.params.id}`})
}

const deleteUser = (req, res) => {
    res.status(200).json({message : `Delete user ${req.params.id}`})
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
    signup,
    updateUser,
    deleteUser}