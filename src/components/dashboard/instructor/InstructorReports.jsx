import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const InstructorReports = () => {
    const coursePerformanceData = [
        { name: 'React Fund.', views: 1200, completions: 85 },
        { name: 'Adv JS', views: 800, completions: 45 },
        { name: 'Node.js', views: 950, completions: 60 },
        { name: 'UI Design', views: 1500, completions: 120 },
    ];

    const studentGrowthData = [
        { month: 'Jan', students: 45 },
        { month: 'Feb', students: 52 },
        { month: 'Mar', students: 78 },
        { month: 'Apr', students: 95 },
        { month: 'May', students: 120 },
        { month: 'Jun', students: 155 },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Reports & Analytics</h2>
                <p className="text-gray-400">Deep dive into your content performance.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Course Performance Chart */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Course Performance (Views vs Completions)</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={coursePerformanceData}>
                                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                                />
                                <Bar dataKey="views" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Views" />
                                <Bar dataKey="completions" fill="#10B981" radius={[4, 4, 0, 0]} name="Completions" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

                {/* Student Growth Chart */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Student Enrollment Growth</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={studentGrowthData}>
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                />
                                <Line type="monotone" dataKey="students" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default InstructorReports;
