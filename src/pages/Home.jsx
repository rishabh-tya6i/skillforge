import { motion } from 'framer-motion';
import { BookOpen, Video, BarChart, Users, CheckCircle, ArrowRight, Star, Globe, Shield, PlayCircle, Zap, Layers, Award, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import CourseCard from '../components/ui/CourseCard';
import { GlassCard } from '../components/ui/GlassCard';
import { useCourses } from '../context/CourseContext';

// Realistic Featured Courses Data
const featuredCourses = [
    {
        id: 1,
        title: 'Full Stack Web Development with React & Node',
        category: 'Development',
        price: 99,
        duration: '40h',
        lessons: 120,
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        rating: 4.8,
        students: 12500
    },
    {
        id: 2,
        title: 'Data Science Specialist: Python, SQL & ML',
        category: 'Data Science',
        price: 89,
        duration: '56h',
        lessons: 154,
        level: 'Advanced',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        rating: 4.9,
        students: 8300
    },
    {
        id: 3,
        title: 'UI/UX Design Masterclass: From Zero to Hero',
        category: 'Design',
        price: 79,
        duration: '28h',
        lessons: 64,
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        rating: 4.7,
        students: 15000
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Frontend Developer",
        content: "SkillForge completely transformed my career. The project-based learning approach helped me build a portfolio that got me hired in 3 months.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Data Analyst",
        content: "The depth of the data science curriculum is unmatched. The instructors are industry experts who actually care about your progress.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

const Home = () => {
    const { courses } = useCourses();
    const featuredCourses = courses.slice(0, 3);

    return (
        <div className="overflow-hidden bg-[#0A0F1C] text-gray-200 font-sans selection:bg-primary/30 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-accent-purple/10 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-accent-cyan/10 rounded-full blur-[100px] opacity-20 mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                            </span>
                            <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">The Future of EdTech is Here</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]"
                        >
                            Welcome to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                                SkillForge
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-light text-primary/90 mt-2">
                                The Premier Learning Management System
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Unleash your potential with a platform designed for modern learners.
                            Seamlessly combine video lessons, interactive coding environments, and live mentorship.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
                        >
                            <Link to="/courses">
                                <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all transform hover:-translate-y-1">
                                    Start Learning
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 text-lg font-semibold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1">
                                    Get Started Free
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Hero Visual - Code Editor & Curriculum Preview */}
                    <div className="mt-20 relative max-w-5xl mx-auto hidden md:block perspective-1000">
                        {/* Glows */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen opacity-40"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateX: 10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1, delay: 0.5, type: "spring" }}
                            className="relative z-10"
                        >
                            <GlassCard className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#0B1220]/80 backdrop-blur-xl">
                                {/* Editor Header */}
                                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0F172A]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="ml-4 flex text-xs text-gray-400 font-mono gap-4">
                                        <div className="text-white bg-white/5 px-2 py-0.5 rounded border-t border-blue-500">CourseContent.jsx</div>
                                        <div>style.css</div>
                                        <div>api.js</div>
                                    </div>
                                </div>

                                {/* Editor Content */}
                                <div className="p-6 grid grid-cols-5 gap-0 bg-[#0A0F1C] font-mono text-sm leading-relaxed">
                                    {/* Line Numbers */}
                                    <div className="col-span-1 text-gray-600 text-right pr-4 select-none border-r border-white/5 flex flex-col">
                                        {[...Array(12)].map((_, i) => <span key={i}>{i + 1}</span>)}
                                    </div>

                                    {/* Code Area */}
                                    <div className="col-span-4 pl-4 text-gray-300">
                                        <div className="text-purple-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span>;</div>
                                        <div className="text-purple-400">import <span className="text-white">{`{ Course }`}</span> from <span className="text-green-400">'./components'</span>;</div>
                                        <br />
                                        <div className="text-blue-400">const <span className="text-yellow-300">LearningPath</span> = <span className="text-purple-400">()</span> <span className="text-blue-400">={'>'}</span> {`{`}</div>
                                        <div className="pl-4 text-purple-400">return (</div>
                                        <div className="pl-8 text-gray-400">{'<div className="skill-track">'}</div>
                                        <div className="pl-12 text-white">{'<h1>Master Full Stack Development</h1>'}</div>
                                        <div className="pl-12 text-gray-400">{'<ul>'}</div>
                                        <div className="pl-16 text-white">{'<li>React & Next.js Ecosystem</li>'}</div>
                                        <div className="pl-16 text-white">{'<li>Node.js High Performance</li>'}</div>
                                        <div className="pl-16 text-white">{'<li>System Design Architecture</li>'}</div>
                                        <div className="pl-12 text-gray-400">{'</ul>'}</div>
                                        <div className="pl-8 text-gray-400">{'</div>'}</div>
                                        <div className="pl-4 text-purple-400">);</div>
                                        <div className="text-blue-400">{'}'};</div>
                                    </div>
                                </div>

                                {/* Overlay Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="absolute bottom-6 right-6 bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-md shadow-xl"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Live Compilation</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span>Build Real Projects</span>
                                    </div>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trusted By / Stats Section */}
            <section className="py-16 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: 'Learners Worldwide', value: '150,000+', icon: Globe, color: 'text-blue-400' },
                            { label: 'Accredited Courses', value: '350+', icon: Award, color: 'text-yellow-400' },
                            { label: 'Industry Partners', value: '50+', icon: Shield, color: 'text-green-400' },
                            { label: 'Hours of Content', value: '12,000+', icon: PlayCircle, color: 'text-purple-400' },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-3 group hover:transform hover:scale-105 transition-transform duration-300">
                                <div className={`p-4 bg-white/5 rounded-2xl mb-2 ${stat.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <h3 className="text-4xl font-bold text-white tracking-tight">{stat.value}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose SkillForge? (Features) */}
            <section className="py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Unmatched Features</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Why SkillForge is #1</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-2">
                            We have built a comprehensive ecosystem for education. Whether you are teaching or learning, we have the tools you need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Student Card */}
                        <FeatureCard
                            icon={BookOpen}
                            iconColor="text-blue-400"
                            title="For Students"
                            description="Master new skills with our adaptive learning paths. Get instant feedback on quizzes and code challenges."
                            features={['Personalized Dashboard', 'Interactive Code Editors', 'Certification on Completion']}
                        />
                        {/* Instructor Card */}
                        <FeatureCard
                            icon={Video}
                            iconColor="text-purple-400"
                            title="For Instructors"
                            description="Share your expertise with the world. Our tools make it easy to create, manage, and monetize your courses."
                            features={['Advanced Course Builder', 'Revenue Analytics', 'Student Engagement Tools']}
                        />
                        {/* Organization Card */}
                        <FeatureCard
                            icon={Layers}
                            iconColor="text-cyan-400"
                            title="For Organizations"
                            description="Upskill your workforce efficiently. Track employee progress and identify skill gaps with enterprise-grade reporting."
                            features={['Team Management', 'Custom Learning Paths', 'API Integrations']}
                        />
                    </div>
                </div>
            </section>

            {/* Popular Courses Section */}
            <section className="py-24 bg-[#0B1220]/50 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="space-y-2">
                            <span className="text-accent-purple font-bold tracking-widest text-sm uppercase">Featured Content</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Trending Courses</h2>
                        </div>
                        <Link to="/courses">
                            <Button variant="ghost" className="text-gray-300 hover:text-white group">
                                View All Library <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <CourseCard key={course._id || course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Community Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial) => (
                            <GlassCard key={testimonial.id} className="p-8 relative">
                                <div className="absolute top-6 right-8 text-primary/20">
                                    <Users className="w-12 h-12" />
                                </div>
                                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-primary">{testimonial.role}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-[#0A0F1C]"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Ready to Forge Your Future?</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join a global community of learners and instructors. Start your journey with SkillForge today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link to="/signup">
                            <Button variant="primary" className="w-full sm:w-auto px-12 py-5 text-xl font-bold shadow-neon hover:shadow-neon-strong transition-all">
                                Create Free Account
                            </Button>
                        </Link>
                        <Link to="/courses">
                            <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-xl border-white/20 hover:bg-white/5">
                                Browse Catalog
                            </Button>
                        </Link>
                    </div>
                    <div className="pt-8 flex justify-center gap-8 text-sm text-gray-500">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Free 14-day trial</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Cancel anytime</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper Components for this file to keep it self-contained if needed, or better structure
const FeatureCard = ({ icon: Icon, iconColor, title, description, features }) => (
    <GlassCard className="p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2">
        <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
            <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
            {description}
        </p>
        <ul className="space-y-3">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                    {feature}
                </li>
            ))}
        </ul>
    </GlassCard>
);

const LogoIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);


export default Home;
