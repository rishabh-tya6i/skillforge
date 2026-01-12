const express = require('express');
const { recordPurchase, getMyTransactions } = require('../controllers/paymentController');
const { getAdminStats, getInstructorStats } = require('../controllers/analyticsController');
const { protect, admin, instructor } = require('../middlewares/authMiddleware');
const router = express.Router();

// Payment Routes
router.post('/payments/purchase', protect, recordPurchase);
router.get('/payments/my', protect, getMyTransactions);

// Analytics Routes
router.get('/analytics/admin', protect, admin, getAdminStats);
router.get('/analytics/instructor', protect, instructor, getInstructorStats);

module.exports = router;
