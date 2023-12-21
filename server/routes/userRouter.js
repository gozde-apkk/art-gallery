

const express = require("express");
const router = express.Router();

const { registerUser, loginUser, logout, getUser, getLoginStatus } = require("../controllers/user.js");
const {protect} = require("../middleware/authMiddleware.js")


// router.route("/").get(getUsers).post(createUser);
// router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getUser" ,protect,  getUser);
router.get("/getLoginStatus", getLoginStatus);
module.exports = router;