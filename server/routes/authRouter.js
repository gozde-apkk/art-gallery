

const express = require("express");
const { signup,  getUser, createUser, signIn } = require("../controllers/auth");
const router = express.Router();


router.post("/signup", createUser);
router.post("/signin", signIn)


module.exports = router;