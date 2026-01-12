
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { Play, CheckCircle } from 'lucide-react';
import LessonPlayer from './LessonPlayer';

const StudentMyLearning = ({ user }) => {
    const { courses } = useCourses();
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const myCourses = courses.filter(c => c.students.includes(user.id || 3));

    if (selectedCourseId) {
        const course = courses.find(c => c.id === selectedCourseId);
        return <LessonPlayer course={course} onBack={() => setSelectedCourseId(null)} />;
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">My Learning</h2>
                    <p className="text-gray-400">Courses you are currently enrolled in.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myCourses.map(course => (
                    <GlassCard key={course.id} className="flex flex-col h-full group hover:border-primary/30 transition-all">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800">
                            {course.thumbnail ? (
                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">No Image</div>
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div onClick={() => setSelectedCourseId(course.id)} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/50 transform scale-75 group-hover:scale-100 transition-transform cursor-pointer">
                                    <Play className="w-5 h-5 ml-1" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                            <div className="space-y-3 mt-auto">
                                <div className="flex justify-between text-xs font-medium text-gray-400">
                                    <span>Progress</span>
                                    <span>35%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[35%] rounded-full" />
                                </div>
                                <Button onClick={() => setSelectedCourseId(course.id)} className="w-full text-sm">Continue Learning</Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
                {myCourses.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        You haven't enrolled in any courses yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentMyLearning;
