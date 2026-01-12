const User = require('../models/User');
const Course = require('../models/Course');
const Transaction = require('../models/Transaction');

// @desc    Get Admin Dashboard Stats
// @route   GET /api/analytics/admin
// @access  Private/Admin
const getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalCourses = await Course.countDocuments();
        const transactions = await Transaction.find({ type: 'purchase' });
        const totalRevenue = transactions.reduce((acc, curr) => acc + curr.amount, 0);

        res.json({
            totalUsers,
            totalCourses,
            totalRevenue
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get Instructor Dashboard Stats
// @route   GET /api/analytics/instructor
// @access  Private/Instructor
const getInstructorStats = async (req, res) => {
    try {
        // Find instructor's courses
        const courses = await Course.find({ instructor: req.user._id });
        const courseIds = courses.map(c => c._id);

        const totalStudents = courses.reduce((acc, curr) => acc + curr.studentsEnrolled, 0);
        // Revenue logic would be more complex (commission split etc.), mocking simply here
        const income = await Transaction.aggregate([
            { $match: { course: { $in: courseIds }, type: 'purchase' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        res.json({
            activeCourses: courses.length,
            totalStudents,
            totalEarnings: income[0]?.total || 0
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAdminStats, getInstructorStats };
