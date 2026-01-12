import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const AdminReports = () => {
    // Mock Data for Charts
    const revenueData = [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 5000 },
        { name: 'Apr', revenue: 2780 },
        { name: 'May', revenue: 1890 },
        { name: 'Jun', revenue: 2390 },
        { name: 'Jul', revenue: 3490 },
    ];

    const userGrowthData = [
        { name: 'Jan', students: 100, instructors: 20 },
        { name: 'Feb', students: 150, instructors: 25 },
        { name: 'Mar', students: 200, instructors: 30 },
        { name: 'Apr', students: 300, instructors: 35 },
        { name: 'May', students: 450, instructors: 50 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Reports & Analytics</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    Export Report
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-6">Revenue Overview</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-6">User Growth</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={userGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="students" stroke="#8b5cf6" strokeWidth={2} />
                                <Line type="monotone" dataKey="instructors" stroke="#ec4899" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                    <h4 className="text-gray-400 text-sm mb-2">Total Revenue</h4>
                    <p className="text-3xl font-bold text-white">$124,500</p>
                    <span className="text-green-400 text-sm">+12.5% from last month</span>
                </GlassCard>
                <GlassCard className="p-6">
                    <h4 className="text-gray-400 text-sm mb-2">Active Students</h4>
                    <p className="text-3xl font-bold text-white">4,200</p>
                    <span className="text-green-400 text-sm">+8.1% from last month</span>
                </GlassCard>
                <GlassCard className="p-6">
                    <h4 className="text-gray-400 text-sm mb-2">Course Completion Rate</h4>
                    <p className="text-3xl font-bold text-white">68%</p>
                    <span className="text-yellow-400 text-sm">-2.3% from last month</span>
                </GlassCard>
            </div>
        </div>
    );
};

export default AdminReports;
