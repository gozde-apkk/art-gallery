

const express = require("express");
const router = express.Router();

const { createUser, deleteUser, getUser, getUsers, updateUser } = require("../controllers/user.js");



router.route("/").get(getUsers).post(createUser);;
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);


module.exports = router;