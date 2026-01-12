const express = require('express');
const { enrollCourse, getMyEnrollments, updateProgress } = require('../controllers/enrollmentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, enrollCourse);
router.get('/my', protect, getMyEnrollments);
router.put('/:courseId/progress', protect, updateProgress);

module.exports = router;
