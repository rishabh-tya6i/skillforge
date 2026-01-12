
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Star, CheckCircle, ChevronDown, PlayCircle, Lock, ShieldCheck, Download, Award, Target, Monitor, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';

// Enhanced Course Data
const courseDetails = {
    id: 1,
    title: 'Full Stack Web Development with React & Node',
    category: 'Development',
    price: 99,
    rating: 4.9,
    reviews: 1240,
    duration: '40h',
    lessons: 120,
    level: 'Intermediate',
    students: "15,234",
    lastUpdated: "January 2026",
    language: "English",
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Master the MERN stack (MongoDB, Express, React, Node.js) and build real-world applications. This comprehensive course takes you from the basics of web development to deploying full-scale production apps.',
    whatYouLearn: [
        'Build robust RESTful APIs with Node.js and Express',
        'Create dynamic, responsive frontends with React',
        'Manage databases with MongoDB and Mongoose',
        'Implement authentication and authorization',
        'Deploy applications to cloud platforms like Heroku and Vercel',
        'Master modern JavaScript (ES6+)'
    ],
    curriculum: [
        {
            title: 'Introduction to Web Development',
            lessons: [
                { title: 'Welcome to the Course', duration: '5:00', free: true },
                { title: 'The Modern Web Stack', duration: '15:00', free: true },
                { title: 'Setting up VS Code', duration: '20:00', free: false }
            ]
        },
        {
            title: 'Frontend Mastery with React',
            lessons: [
                { title: 'React Basics & JSX', duration: '45:00', free: false },
                { title: 'Hooks Deep Dive', duration: '30:00', free: false },
                { title: 'State Management with Redux', duration: '50:00', free: false }
            ]
        },
        {
            title: 'Backend with Node.js',
            lessons: [
                { title: 'Node.js Runtime', duration: '40:00', free: false },
                { title: 'Express Middleware', duration: '55:00', free: false }
            ]
        }
    ],
    instructor: {
        name: 'Sarah Johnson',
        role: 'Senior Full Stack Developer @ Google',
        bio: 'Sarah is a tech lead with 10+ years of experience. She has taught over 50k students and loves building scalable web apps.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        students: "50,000+",
        courses: 12
    }
};

const CourseDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [activeAccordion, setActiveAccordion] = useState(0);
    const course = courseDetails;

    return (
        <div className="bg-[#0B1220] min-h-screen pb-20 pt-20">

            {/* Cinematic Hero */}
            <div className="relative overflow-hidden border-b border-white/5">
                {/* Background Mesh */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            {/* Breadcrumbs / Badges */}
                            <div className="flex gap-3">
                                <span className="bg-white/10 backdrop-blur-md text-primary-light px-3 py-1 rounded-full text-xs font-bold border border-white/10 uppercase tracking-wider">{course.category}</span>
                                <span className="bg-white/10 backdrop-blur-md text-yellow-400 px-3 py-1 rounded-full text-xs font-bold border border-white/10 uppercase tracking-wider flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> BESTSELLER
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">{course.title}</h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{course.description}</p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center text-yellow-400 gap-1">
                                    <span className="font-bold text-lg">4.9</span>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-gray-400 hover:text-white underline cursor-pointer ml-1">({course.reviews} ratings)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Target className="w-4 h-4" /> {course.students} students
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> Last updated {course.lastUpdated}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                                <div>
                                    <p className="font-bold text-white">Created by <span className="text-primary hover:underline cursor-pointer">{course.instructor.name}</span></p>
                                    <p className="text-xs text-gray-400">{course.instructor.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Empty column for sticky card spacing on desktop */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* What you'll learn */}
                        <GlassCard className="p-8 space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Target className="w-6 h-6 text-primary" /> What you'll learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.whatYouLearn.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Curriculum */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white">Course Content</h2>
                            <div className="space-y-4">
                                {course.curriculum.map((section, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                        <button
                                            className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors text-left"
                                            onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                                                <span className="font-bold text-white">{section.title}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{section.lessons.length} lectures</span>
                                        </button>
                                        {activeAccordion === idx && (
                                            <div className="border-t border-white/5">
                                                {section.lessons.map((lesson, lIdx) => (
                                                    <div key={lIdx} className="flex items-center justify-between p-4 pl-12 hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors cursor-pointer group">
                                                        <div className="flex items-center gap-3">
                                                            <PlayCircle className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                                                            <span className={`text-sm ${lesson.free ? 'text-white' : 'text-gray-400'}`}>{lesson.title}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                                            {lesson.free && <span className="text-primary text-xs font-bold">Preview</span>}
                                                            <span>{lesson.duration}</span>
                                                            {!lesson.free && <Lock className="w-3 h-3 text-gray-600" />}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <GlassCard className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 marker:text-primary">
                                <li>Basic understanding of HTML & CSS</li>
                                <li>No prior React knowledge required</li>
                                <li>A computer with internet access</li>
                            </ul>
                        </GlassCard>

                        {/* Instructor */}
                        <GlassCard className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Instructor</h2>
                            <div className="flex flex-col md:flex-row gap-6">
                                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-32 h-32 rounded-xl object-cover border-2 border-white/10" />
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary hover:underline cursor-pointer">{course.instructor.name}</h3>
                                        <p className="text-white font-medium">{course.instructor.role}</p>
                                    </div>
                                    <div className="flex gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-1"><Award className="w-4 h-4" /> {course.instructor.students} Students</div>
                                        <div className="flex items-center gap-1"><PlayCircle className="w-4 h-4" /> {course.instructor.courses} Courses</div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{course.instructor.bio}</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Sidebar Column (Sticky) */}
                    <div className="lg:col-span-1 relative">
                        <div className="sticky top-24 z-20">
                            <GlassCard className="p-0 overflow-hidden shadow-2xl border-white/20">
                                {/* Video Preview */}
                                <div className="relative h-48 overflow-hidden group cursor-pointer">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                            <PlayCircle className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="text-white font-bold text-sm">Preview Course</span>
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-bold text-white">${course.price}</span>
                                        <span className="text-lg text-gray-500 line-through mb-1">$199</span>
                                        <span className="text-sm text-green-400 font-bold mb-2">50% OFF</span>
                                    </div>

                                    <div className="space-y-3">
                                        <Button variant="gradient" className="w-full py-4 text-lg font-bold shadow-neon">Enroll Now</Button>
                                        <Button variant="secondary" className="w-full py-4 border-white/10 hover:border-white/30" onClick={() => addToCart(course)}>Add to Cart</Button>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-white/10">
                                        <p className="text-white font-bold text-sm">This course includes:</p>
                                        <div className="space-y-2 text-sm text-gray-400">
                                            <div className="flex items-center gap-3"><Monitor className="w-4 h-4" /> {course.duration} on-demand video</div>
                                            <div className="flex items-center gap-3"><Download className="w-4 h-4" /> 15 downloadable resources</div>
                                            <div className="flex items-center gap-3"><Monitor className="w-4 h-4" /> Access on mobile and TV</div>
                                            <div className="flex items-center gap-3"><Award className="w-4 h-4" /> Certificate of completion</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-4 text-sm font-bold border-t border-white/10 pt-4 cursor-pointer hover:text-primary transition-colors">
                                        <span className="text-center w-full">Share</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
