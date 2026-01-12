
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { DollarSign, Users, BookOpen, Star, TrendingUp, Clock, Calendar } from 'lucide-react';

const InstructorOverview = ({ user, setActiveView }) => {
    const { courses } = useCourses();

    // Logic to calculate stats
    const myCourses = courses.filter(c => c.instructorId === (user.id || 1));
    const totalRevenue = myCourses.reduce((sum, course) => sum + (course.revenue || 0), 0);
    const totalStudents = myCourses.reduce((sum, course) => sum + (course.students?.length || 0), 0);
    const averageRating = 4.8; // Mock data for now

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Instructor Dashboard</h2>
                    <p className="text-gray-400">Track your courses, students, and earnings.</p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={() => setActiveView('courses')} variant="primary" className="text-sm">Create New Course</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: `$${totalRevenue}`, icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
                    { label: "Active Students", value: totalStudents, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                    { label: "Active Courses", value: myCourses.length, icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10" },
                    { label: "Phone Rating", value: averageRating, icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10" }
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

            {/* Revenue Chart Placeholder using CSS Flex */}
            <GlassCard className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold text-white">Revenue Analytics</h3>
                    <select className="bg-[#0B1220] border border-white/10 rounded-lg px-3 py-1 text-sm text-gray-400">
                        <option>This Year</option>
                        <option>Last Year</option>
                    </select>
                </div>
                {/* CSS Only Chart */}
                <div className="h-64 flex items-end justify-between gap-2">
                    {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((h, i) => (
                        <div key={i} className="w-full bg-white/5 rounded-t-sm hover:bg-primary/50 transition-colors relative group" style={{ height: `${h}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                ${h * 100}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500 font-medium uppercase">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                        <span key={m}>{m}</span>
                    ))}
                </div>
            </GlassCard>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-400" /> Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {[
                            { text: "New student enrolled in 'React Mastery'", time: "2 hours ago" },
                            { text: "Assignment submission by Sarah J.", time: "5 hours ago" },
                            { text: "Course 'Advanced Node' approved", time: "1 day ago" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="min-w-[4px] bg-primary rounded-full"></div>
                                <div>
                                    <p className="text-sm text-white">{item.text}</p>
                                    <p className="text-xs text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-purple-400" /> Upcoming Live Classes
                    </h3>
                    <div className="space-y-4">
                        {[
                            { title: "Weekly Q&A Session", time: "Tomorrow, 4:00 PM" },
                            { title: "Project Review: Capstone", time: "Fri, 2:00 PM" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                <div>
                                    <p className="text-sm font-bold text-white">{item.title}</p>
                                    <p className="text-xs text-primary">{item.time}</p>
                                </div>
                                <Button variant="ghost" className="text-xs">Start</Button>
                            </div>
                        ))}
                        <Button onClick={() => setActiveView('schedule')} variant="secondary" className="w-full mt-2 text-sm">Schedule New Class</Button>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default InstructorOverview;
