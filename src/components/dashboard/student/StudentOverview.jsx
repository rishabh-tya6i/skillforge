
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useEnrollments } from '../../../context/EnrollmentContext';
import { BookOpen, Clock, Award, TrendingUp, Play } from 'lucide-react';

const StudentOverview = ({ user, setActiveView }) => {
    // const { courses } = useCourses(); // Not needed if we only show enrolled
    const { myEnrollments } = useEnrollments();

    // Stats Logic
    const myCourses = myEnrollments.map(e => e.course);
    const coursesEnrolledCount = myEnrollments.length;

    const completedCourses = 2; // Mock
    const certificates = 1; // Mock
    const hoursLearned = 12.5; // Mock

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Welcome back, {user.name}</h2>
                    <p className="text-gray-400">You're making great progress this week.</p>
                </div>
                <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveView('mylearning')}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        My Learning
                    </button>
                    <button
                        onClick={() => setActiveView('browse')}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        Browse Courses
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Courses Enrolled", value: coursesEnrolledCount, icon: BookOpen, color: "text-blue-400", bg: "bg-blue-500/10" },
                    { label: "Hours Learned", value: hoursLearned, icon: Clock, color: "text-purple-400", bg: "bg-purple-500/10" },
                    { label: "Certificates", value: certificates, icon: Award, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                    { label: "Completion Rate", value: "48%", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" }
                ].map((stat, idx) => (
                    <GlassCard key={idx} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                    </GlassCard>
                ))}
            </div>

            {/* Continue Learning */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" /> Continue Learning
                </h2>
                {myEnrollments.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {myEnrollments.slice(0, 2).map(({ course, progress, _id }) => (
                            <GlassCard key={_id} className="p-6 group hover:border-primary/30 transition-colors">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
                                        <span className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded">In Progress</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-medium">
                                            <span className="text-primary">{progress?.progressPercentage || 0}% Complete</span>
                                            <span className="text-gray-500">{progress?.completedLessons?.length || 0} Lessons</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full" style={{ width: `${progress?.progressPercentage || 0}%` }} />
                                        </div>
                                    </div>

                                    <Button onClick={() => setActiveView('mylearning')} variant="primary" className="w-full mt-2 py-2 text-sm shadow-none hover:shadow-lg">
                                        Resume Course
                                    </Button>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                ) : (
                    <GlassCard className="p-12 text-center flex flex-col items-center justify-center border-dashed border-white/10">
                        <BookOpen className="w-12 h-12 text-gray-600 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No courses started yet</h3>
                        <p className="text-gray-400 mb-6">Browse our catalog to start your learning journey.</p>
                        <Button onClick={() => setActiveView('browse')} variant="primary">Browse Courses</Button>
                    </GlassCard>
                )}
            </div>
        </div>
    );
};

export default StudentOverview;
