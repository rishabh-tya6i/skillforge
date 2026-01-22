import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useCart } from '../../context/CartContext';
import { GlassCard } from './GlassCard';
import EnrollmentModal from './EnrollmentModal';

const CourseCard = ({ course }) => {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getImageUrl = (path) => {
        if (!path) return 'https://via.placeholder.com/300?text=No+Image';
        // Check if it's an external URL (starts with http/https) 
        if (path.startsWith('http')) return path;
        // Static frontend assets
        if (path.startsWith('/courses/')) return path;
        // Otherwise assume local backend path
        return `http://localhost:5000${path}`;
    };

    // Handle both dynamic backend data and static data structure
    const lessonCount = course.modules?.reduce((acc, m) => acc + m.lessons.length, 0) || course.curriculum?.length + " Modules" || 0;
    const duration = course.duration || "Self-paced";
    const level = course.level || "All Levels";

    // Use short description from static data, or truncate description from backend
    const description = course.shortDescription || (course.description ? course.description.substring(0, 100) + "..." : "No description available.");

    return (
        <>
            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <GlassCard hoverEffect className="p-0 border-white/5 h-full flex flex-col group overflow-hidden">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent opacity-60 z-10" />
                    <img
                        src={getImageUrl(course.thumbnail || course.image)}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm font-bold text-accent-cyan shadow-lg">
                        {course.price ? `$${course.price}` : 'Free'}
                    </div>
                    <div className="absolute top-4 left-4 z-20 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {course.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col relative z-20">
                    <div className="flex items-center justify-between text-xs text-secondary-500 font-semibold mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-300">{level}</span>
                            <span className="bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-300">{course.mode || "Online"}</span>
                            <span className="bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-300">{course.language || "English"}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link to={`/courses/${course._id || course.id}`}>{course.title}</Link>
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                        {description}
                    </p>

                    <div className="flex items-center text-gray-400 text-sm mb-6 space-x-4 border-t border-white/5 pt-4">
                        <div className="flex items-center gap-2">
                            {course.price === 0 || course.pricingType === 'Free' ? (
                                <span className="text-green-400 font-bold text-lg">Free</span>
                            ) : course.hasDiscount ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-lg">${course.discountPrice}</span>
                                    <span className="text-gray-500 line-through text-xs">${course.price}</span>
                                </div>
                            ) : (
                                <span className="text-white font-bold text-lg">${course.price}</span>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto flex gap-3">
                        <Button
                            variant="primary"
                            className="flex-1 py-2 text-sm justify-center"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Enroll Now
                        </Button>
                        <Link to={`/courses/${course._id || course.id}`} className="flex-1">
                            <Button variant="neon" className="w-full py-2 text-sm shadow-none group/btn justify-center">
                                View Details <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </GlassCard>
        </>
    );
};

export default CourseCard;
