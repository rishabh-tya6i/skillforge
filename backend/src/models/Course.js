const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['video', 'text', 'quiz'], default: 'video' },
    contentUrl: { type: String }, // Video URL or PDF link
    textContent: { type: String }, // Markdown text
    duration: { type: Number, default: 0 }, // in seconds
    isFreePreview: { type: Boolean, default: false }
});

const moduleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lessons: [lessonSchema]
});

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    thumbnail: { type: String }, // URL
    price: { type: Number, default: 0 },
    category: { type: String, required: true }, // e.g., 'Development'
    status: { type: String, enum: ['draft', 'active', 'archived'], default: 'draft' },
    approvalStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    modules: [moduleSchema],
    tags: [String],
    studentsEnrolled: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 }
}, { timestamps: true });

// Middleware to create slug from title
courseSchema.pre('save', function (next) {
    if (this.isModified('title')) {
        this.slug = this.title.toLowerCase().split(' ').join('-');
    }
    next();
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
