
import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useCart } from '../../context/CartContext';
import { GlassCard } from './GlassCard';

const CourseCard = ({ course }) => {
    const { addToCart } = useCart();

    const getImageUrl = (path) => {
        if (!path) return 'https://via.placeholder.com/300?text=No+Image'; // Fallback
        return path.startsWith('http') ? path : `http://localhost:5000${path}`;
    };

    const lessonCount = course.modules?.reduce((acc, m) => acc + m.lessons.length, 0) || course.lessons || 0;
    // Mock duration calculation if not present, or parse it
    const duration = course.duration || `${course.modules?.length * 2 || 0}h`;

    return (
        <GlassCard hoverEffect className="p-0 border-white/5 h-full flex flex-col group">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent opacity-60 z-10" />
                <img
                    src={getImageUrl(course.thumbnail || course.image)}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm font-bold text-accent-cyan shadow-lg">
                    ${course.price}
                </div>
                <div className="absolute top-4 left-4 z-20 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {course.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col relative z-20">
                <div className="flex items-center text-xs text-secondary-500 font-semibold mb-3 space-x-2">
                    <div className="flex items-center text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 text-gray-300">4.8 (1.2k)</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-xs">{course.level || "Beginner"}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link to={`/courses/${course._id || course.id}`}>{course.title}</Link>
                </h3>

                <div className="flex items-center text-gray-400 text-sm mb-6 space-x-4">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-primary" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1 text-primary" />
                        <span>{lessonCount} Lessons</span>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex gap-3">
                    <Button variant="ghost" className="flex-1 py-2 text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/30" onClick={() => addToCart(course)}>
                        Add to Cart
                    </Button>
                    <Link to={`/courses/${course._id || course.id}`} className="flex-1">
                        <Button variant="neon" className="w-full py-2 text-sm shadow-none group/btn">
                            Details <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </GlassCard>
    );
};

export default CourseCard;
