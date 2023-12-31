const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  loginUse,
  loginUser,
  updateUser,
  updatePhoto,
  getUser,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware2.js");
const { getLoginStatus } = require("../controllers/user.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getLoginStatus", getLoginStatus);
router.get("/getUser", protect, getUser);

router.patch("/updateUser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
