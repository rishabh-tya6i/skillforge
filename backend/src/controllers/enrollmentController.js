const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// @desc    Enroll in a course
// @route   POST /api/enrollments
// @access  Private/Student
const enrollCourse = async (req, res) => {
    try {
        const { courseId } = req.body;

        // 1. Check if course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // 2. Check if already enrolled
        const existingEnrollment = await Enrollment.findOne({
            student: req.user._id,
            course: courseId
        });

        if (existingEnrollment) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        // 3. Create Enrollment
        // TODO: Integrate Payment Logic here. For now, assume free/direct enrollment.
        const enrollment = new Enrollment({
            student: req.user._id,
            course: courseId
        });

        await enrollment.save();

        // Increment course student count
        course.studentsEnrolled = (course.studentsEnrolled || 0) + 1;
        await course.save();

        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get my enrollments
// @route   GET /api/enrollments/my
// @access  Private/Student
const getMyEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ student: req.user._id })
            .populate('course', 'title thumbnail instructor progress')
            .populate({
                path: 'course',
                populate: { path: 'instructor', select: 'name' }
            });
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update Lesson Progress
// @route   PUT /api/enrollments/:courseId/progress
// @access  Private/Student
const updateProgress = async (req, res) => {
    try {
        const { lessonId } = req.body;
        const enrollment = await Enrollment.findOne({
            student: req.user._id,
            course: req.params.courseId
        });

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        // Add lesson if not already completed
        if (!enrollment.progress.completedLessons.includes(lessonId)) {
            enrollment.progress.completedLessons.push(lessonId);

            // Recalculate percentage (Mock logic: need total lessons count from Course)
            const course = await Course.findById(req.params.courseId);
            let totalLessons = 0;
            course.modules.forEach(m => totalLessons += m.lessons.length);

            if (totalLessons > 0) {
                enrollment.progress.progressPercentage = Math.round((enrollment.progress.completedLessons.length / totalLessons) * 100);
            }

            if (enrollment.progress.progressPercentage === 100) {
                enrollment.isCompleted = true;
                enrollment.completedAt = Date.now();
            }

            await enrollment.save();
        }

        res.json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { enrollCourse, getMyEnrollments, updateProgress };
