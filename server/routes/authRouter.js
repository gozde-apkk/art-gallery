

const express = require("express");
const router = express.Router();

const { getUsers, createUser } = require("../controllers/auth.js");



router.route("/").get(getUsers).post(createUser);

module.exports = router;
