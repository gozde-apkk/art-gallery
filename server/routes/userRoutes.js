const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  loginUser,
  updateUser,
  updatePhoto,
  getUser,
} = require("../controllers/userController.js");
const { protect, requireSignin } = require("../middleware/authMiddleware2.js");
const { getLoginStatus, getUserById } = require("../controllers/user.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getLoginStatus", getLoginStatus);
router.get("/:id", getUserById);

router.patch("/updateUser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);
router
  .route("/profile")
  .post(requireSignin, (req,res) => {
    res.status(200).json({user : 'profile'})
  })
  .put(protect, updateUserProfile);

module.exports = router;
