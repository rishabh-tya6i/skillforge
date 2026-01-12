const express = require('express');
const { getCourses, getCourseById, createCourse, updateCourse, deleteCourse, getAdminCourses, getMyCourses } = require('../controllers/courseController');
const { protect, instructor, admin } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.route('/')
    .get(getCourses)
    .post(protect, instructor, upload.single('thumbnail'), createCourse);

router.get('/admin', protect, admin, getAdminCourses);
router.get('/my', protect, instructor, getMyCourses);

router.route('/:id')
    .get(getCourseById)
    .put(protect, instructor, upload.single('thumbnail'), updateCourse)
    .delete(protect, instructor, deleteCourse);

module.exports = router;
