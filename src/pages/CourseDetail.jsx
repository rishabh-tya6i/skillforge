import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { Clock, BarChart, Monitor, CheckCircle, Book, Calendar, ChevronLeft, Download } from 'lucide-react';

const CourseDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const course = coursesData.find(c => c.id === id) || coursesData.find(c => c.id.toString() === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!course) {
        return (
            <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6">
                <h2 className="text-3xl font-bold text-red-500 mb-4">Course Not Found</h2>
                <p className="text-gray-400 mb-6">The course you are looking for does not exist or has been removed.</p>
                <Link to="/courses">
                    <Button variant="primary">Back to Courses</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Hero Section */}
            <div className="relative bg-[#0F172A] border-b border-white/5 py-16 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Link to="/courses" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Courses
                        </Link>
                        <span className="block text-primary font-bold tracking-widest text-sm uppercase mb-3">{course.category}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{course.title}</h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl">{course.shortDescription}</p>

                        <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <Clock className="w-4 h-4 text-secondary" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <BarChart className="w-4 h-4 text-purple-400" />
                                <span>{course.level}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <Monitor className="w-4 h-4 text-green-400" />
                                <span>{course.mode}</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="primary" className="px-8 py-3 text-lg">Enroll Now</Button>
                            <Button variant="ghost" className="px-6 border border-white/20">Download Syllabus</Button>
                        </div>
                    </div>
                    {/* Course Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 transform rotate-3"></div>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video"
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Book className="w-6 h-6 text-primary" /> Course Overview
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{course.overview}</p>
                    </section>

                    {/* Learning Outcomes */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-green-400" /> What You Will Learn
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.outcomes?.map((outcome, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-gray-300">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Curriculum */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Calendar className="w-6 h-6 text-secondary" /> Curriculum
                        </h2>
                        <div className="space-y-4">
                            {course.curriculum?.map((module, index) => (
                                <div key={index} className="bg-[#0B1220] border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                    <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                                    <p className="text-gray-400 text-sm">{module.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    {course.projects && (
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Hands-on Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {course.projects.map((project, index) => (
                                    <div key={index} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
                                        <h3 className="font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Tools Covered */}
                    <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {course.tools?.map((tool, index) => (
                                <span key={index} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="my-8 h-px bg-white/10" />

                        <h3 className="text-xl font-bold text-white mb-6">Course Information</h3>
                        <div className="space-y-4 mb-8">
                            <div>
                                <h4 className="text-sm text-gray-400 mb-1">Prerequisites</h4>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    {course.prerequisites?.map((prereq, index) => (
                                        <li key={index}>{prereq}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-400 mb-1">Certification</h4>
                                <p className="text-gray-300 text-sm flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    {course.certification}
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-6">Career Benefits</h3>
                        <ul className="space-y-3">
                            {course.careerBenefits?.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3">
                            <Button variant="primary" className="w-full justify-center py-4 text-lg">
                                Enroll Now
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-center py-4 text-lg border-primary text-primary hover:bg-primary/10"
                                onClick={() => addToCart(course)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
