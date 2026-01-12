const Course = require('../models/Course');

// @desc    Get all courses (Public - Active only)
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
    try {
        const pageSize = 10;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword ? {
            title: {
                $regex: req.query.keyword,
                $options: 'i'
            }
        } : {};

        // Only show active & approved courses to public
        const count = await Course.countDocuments({ ...keyword, status: 'active', approvalStatus: 'approved' });
        const courses = await Course.find({ ...keyword, status: 'active', approvalStatus: 'approved' })
            .populate('instructor', 'name avatar')
            .limit(pageSize)
            .skip(pageSize * (page - 1));

        res.json({ courses, page, pages: Math.ceil(count / pageSize) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get course by ID/Slug (Public)
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor', 'name avatar');
        // Validation: If not active/approved, only easy access for admin or owner
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new course (Instructor/Admin)
// @route   POST /api/courses
// @access  Private/Instructor
const createCourse = async (req, res) => {
    try {
        const { title, description, category, price, thumbnail } = req.body;

        let thumbnailUrl = '';
        if (req.file) {
            thumbnailUrl = `/uploads/${req.file.filename}`;
        } else if (typeof thumbnail === 'string') {
            thumbnailUrl = thumbnail;
        }

        const course = new Course({
            title,
            description,
            category,
            price,
            thumbnail: thumbnailUrl,
            instructor: req.user._id,
        });

        const createdCourse = await course.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update course (Instructor needs ownership)
// @route   PUT /api/courses/:id
// @access  Private/Instructor
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            // Verify ownership or Admin
            if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized to update this course' });
            }

            course.title = req.body.title || course.title;
            course.description = req.body.description || course.description;
            course.price = req.body.price !== undefined ? req.body.price : course.price;
            if (req.file) {
                course.thumbnail = `/uploads/${req.file.filename}`;
            } else if (req.body.thumbnail && typeof req.body.thumbnail === 'string') {
                course.thumbnail = req.body.thumbnail;
            }

            course.modules = req.body.modules || course.modules;
            course.status = req.body.status || course.status;
            course.approvalStatus = req.body.approvalStatus || course.approvalStatus;

            const updatedCourse = await course.save();
            res.json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all courses (Admin)
// @route   GET /api/courses/admin
// @access  Private/Admin
const getAdminCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).populate('instructor', 'name email');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get logged in instructor courses
// @route   GET /api/courses/my
// @access  Private/Instructor
const getMyCourses = async (req, res) => {
    try {
        const courses = await Course.find({ instructor: req.user._id });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete course (Admin/Instructor)
// @route   DELETE /api/courses/:id
// @access  Private/Instructor
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized to delete this course' });
            }
            await course.deleteOne();
            res.json({ message: 'Course removed' });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCourses, getCourseById, createCourse, updateCourse, deleteCourse, getAdminCourses, getMyCourses };
