const express =require ('express');
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  loginUse,
  loginUser,
} = require( '../controllers/userController.js');
const { protect } = require ('../middleware/authMiddleware.js');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

  module.exports = router;
