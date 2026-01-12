const express = require('express');
const { getUsers, getUserById, updateUser, deleteUser, getUserProfile } = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(protect, admin, getUsers);
router.get('/profile', protect, getUserProfile);
router.route('/:id')
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

module.exports = router;
