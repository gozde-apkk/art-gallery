const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  getUserById,
  getLoginStatus,
  updateUser,
  updatePhoto,
} = require("../controllers/user.js");
const { protect } = require("../middleware/authMiddleware2.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/:id",  getUserById);
router.get("/getLoginStatus", getLoginStatus);
router.patch("/updateUser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);

module.exports = router;
