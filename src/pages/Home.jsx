
import { motion } from 'framer-motion';
import { BookOpen, Video, BarChart, Users, CheckCircle, ArrowRight, Star, Globe, Shield, PlayCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import CourseCard from '../components/ui/CourseCard';
import { GlassCard } from '../components/ui/GlassCard';

// Enhanced Dummy Data
const featuredCourses = [
    {
        id: 1,
        title: 'Full Stack Web Development with React & Node',
        category: 'Development',
        price: 99,
        duration: '40h',
        lessons: 120,
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
        id: 2,
        title: 'Data Science Specialist: Python, SQL & ML',
        category: 'Data Science',
        price: 89,
        duration: '56h',
        lessons: 154,
        level: 'Advanced',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
        id: 3,
        title: 'UI/UX Design Masterclass: From Zero to Hero',
        category: 'Design',
        price: 79,
        duration: '28h',
        lessons: 64,
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
];

const Home = () => {
    return (
        <div className="overflow-hidden bg-background text-gray-200">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                        >
                            <Zap className="w-4 h-4 text-accent-yellow" />
                            <span className="text-sm font-medium text-gray-300">The #1 Learning Management System</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
                        >
                            Welcome to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">
                                SkillForge LMS
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
                        >
                            Empower your future with a comprehensive learning platform. Master new skills, track your progress, and earn industry-recognized certifications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                        >
                            <Link to="/courses">
                                <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg shadow-neon hover:shadow-neon-strong transition-all">
                                    Explore Courses
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg border-white/10 hover:bg-white/5">
                                    Join for Free
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Hero Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 relative max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl -z-10"></div>
                        <GlassCard className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-[#0B1220]/80 backdrop-blur-xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="mx-auto text-xs font-medium text-gray-500">SkillForge Dashboard</div>
                            </div>
                            <div className="p-1 aspect-video relative flex items-center justify-center bg-[#0F172A]">
                                <div className="text-center space-y-4">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary animate-pulse">
                                        <PlayCircle className="w-10 h-10" />
                                    </div>
                                    <p className="text-gray-400 font-medium">Interactive Learning Experience</p>
                                </div>
                                {/* Mock UI Elements */}
                                <div className="absolute top-8 left-8 w-48 h-32 bg-white/5 rounded-lg border border-white/5 animate-pulse-slow"></div>
                                <div className="absolute bottom-8 right-8 w-64 h-16 bg-white/5 rounded-lg border border-white/5"></div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* Platform Stats */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Active Learners', value: '50k+', icon: Users },
                            { label: 'Available Courses', value: '120+', icon: BookOpen },
                            { label: 'Expert Instructors', value: '80+', icon: Globe },
                            { label: 'Course Completion', value: '94%', icon: CheckCircle },
                        ].map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Why Choose SkillForge?</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">The Complete LMS Solution</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Designed for everyone. Whether you are a student, instructor, or an organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="p-8 hover:border-primary/50 transition-colors group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 gro-hover:scale-110 transition-transform">
                                <BookOpen className="w-7 h-7 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">For Students</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Access world-class content, track your progress with detailed analytics, and earn certificates to boost your career.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Self-paced learning
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Interactive quizzes
                                </li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8 hover:border-purple-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 gro-hover:scale-110 transition-transform">
                                <Video className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">For Instructors</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Create engaging courses with our intuitive course builder. Upload videos, create assignments, and track student performance.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Drag-and-drop builder
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Revenue dashboard
                                </li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8 hover:border-cyan-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 gro-hover:scale-110 transition-transform">
                                <BarChart className="w-7 h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">For Organizations</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Upskill your entire workforce. Assign courses, monitor team progress, and generate detailed competency reports.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Team management
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Custom learning paths
                                </li>
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-24 bg-[#0B1220]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Courses</h2>
                            <p className="text-gray-400">Explore our highest-rated learning paths.</p>
                        </div>
                        <Link to="/courses">
                            <Button variant="ghost" className="text-primary hover:text-primary-light">
                                View All Courses <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to start learning?</h2>
                    <p className="text-xl text-gray-400">
                        Join over 50,000 learners on SkillForge today. No credit card required for free courses.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/signup">
                            <Button variant="primary" className="px-10 py-4 text-lg shadow-neon">
                                Create Free Account
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-8">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" /> No hidden fees
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" /> Secure platform
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
