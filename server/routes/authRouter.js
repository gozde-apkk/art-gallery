

const express = require("express");
const { signup,  getUser, createUser } = require("../controllers/auth");
const router = express.Router();


router.post("/signup", createUser);


module.exports = router;