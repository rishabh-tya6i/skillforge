
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { Play, CheckCircle } from 'lucide-react';
import LessonPlayer from './LessonPlayer';

import { useEnrollments } from '../../../context/EnrollmentContext';

const StudentMyLearning = ({ user }) => {
    const { fetchCourseById } = useCourses();
    const { myEnrollments } = useEnrollments();
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [fullCourse, setFullCourse] = useState(null);
    const [loadingCourse, setLoadingCourse] = useState(false);

    const handleContinueLearning = async (courseId) => {
        setLoadingCourse(true);
        const result = await fetchCourseById(courseId);
        setLoadingCourse(false);

        if (result.success) {
            setFullCourse(result.course);
            setSelectedCourseId(courseId);
        } else {
            alert(result.message || "Failed to load course content");
        }
    };

    const getImageUrl = (path) => {
        if (!path) return null;
        return path.startsWith('http') ? path : `http://localhost:5000${path}`;
    };

    if (selectedCourseId && fullCourse) {
        return <LessonPlayer course={fullCourse} onBack={() => { setSelectedCourseId(null); setFullCourse(null); }} />;
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
                {myEnrollments.map(({ course, progress, _id }) => (

                    <GlassCard key={_id} className="flex flex-col h-full group hover:border-primary/30 transition-all">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800">
                            {course.thumbnail ? (
                                <img src={getImageUrl(course.thumbnail)} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">No Image</div>
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div onClick={() => handleContinueLearning(course._id)} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/50 transform scale-75 group-hover:scale-100 transition-transform cursor-pointer">
                                    <Play className="w-5 h-5 ml-1" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                            <div className="space-y-3 mt-auto">
                                <div className="flex justify-between text-xs font-medium text-gray-400">
                                    <span>Progress</span>
                                    <span>{progress?.progressPercentage || 0}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full" style={{ width: `${progress?.progressPercentage || 0}%` }} />
                                </div>
                                <Button onClick={() => handleContinueLearning(course._id)} className="w-full text-sm" disabled={loadingCourse}>
                                    {loadingCourse && selectedCourseId === course._id ? 'Loading...' : 'Continue Learning'}
                                </Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
                {myEnrollments.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        You haven't enrolled in any courses yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentMyLearning;
