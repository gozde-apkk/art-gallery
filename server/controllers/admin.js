const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const signup = (req, res) => {
  User.findOne({ email: req.body.email }).then((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Admin already registered",
      });

    User.estimatedDocumentCount(async (err, count) => {
      if (err) return res.status(400).json({ error });
      let role = "admin";
      if (count === 0) {
        role = "super-admin";
      }

      const { name ,email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
         name,
        email,
        hash_password,
        username: shortid.generate(),
        role,
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          return res.status(201).json({
            message: "Admin created Successfully..!",
          });
        }
      });
    });
  });
};

const signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (
        isPassword &&
        (user.role === "admin" || user.role === "super-admin")
      ) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        const { _id, name, email, role,  } = user;
        res.cookie("token", token, { expiresIn: "1d" });
        res.status(200).json({
          token,
          user: { _id, name, email, role },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};

const signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};


module.exports ={
    signin,signup, signout
}