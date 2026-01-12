
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { ShoppingCart, Star, BookOpen } from 'lucide-react';

const StudentBrowse = ({ user }) => {
    const { courses, enrollStudent } = useCourses();
    const availableCourses = courses.filter(c => !c.students.includes(user.id || 3) && c.status === 'Active');

    const handleEnroll = (courseId) => {
        enrollStudent(courseId, user.id || 3);
        // Assuming parent component or context handles feedback, or we could add a toast here
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Browse Courses</h2>
                    <p className="text-gray-400">Discover new skills and enroll today.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableCourses.map(course => (
                    <GlassCard key={course.id} className="flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800">
                            {course.thumbnail ? (
                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-600">
                                    <BookOpen className="w-10 h-10 opacity-20" />
                                </div>
                            )}
                            <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur text-xs font-bold text-yellow-400 flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400" /> 4.8
                            </div>
                        </div>

                        <div className="flex-1 mb-4">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2">{course.description || "No description provided."}</p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-xl font-bold text-white">${course.price}</span>
                            <Button onClick={() => handleEnroll(course.id)} variant="gradient" className="text-sm py-2 px-6 shadow-neon">
                                Enroll Now
                            </Button>
                        </div>
                    </GlassCard>
                ))}
                {availableCourses.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        No new active courses available to enroll in.
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentBrowse;
