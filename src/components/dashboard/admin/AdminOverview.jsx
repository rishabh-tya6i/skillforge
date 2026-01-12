
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Users, BookOpen, DollarSign, TrendingUp, AlertCircle, Eye, Download, MoreHorizontal } from 'lucide-react';

const AdminOverview = ({ setActiveView }) => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Dashboard Overview</h2>
                    <p className="text-gray-400">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={() => setActiveView('users')} variant="secondary" className="text-sm">Manage Users</Button>
                    <Button onClick={() => setActiveView('reports')} variant="primary" className="text-sm">View Reports</Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Users", value: "12,403", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                    { label: "Total Courses", value: "86", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10" },
                    { label: "Revenue (YTD)", value: "$450,200", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
                    { label: "Active Subscriptions", value: "3,402", icon: TrendingUp, color: "text-yellow-400", bg: "bg-yellow-500/10" }
                ].map((stat, idx) => (
                    <GlassCard key={idx} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">+4.5%</span>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                    </GlassCard>
                ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Transactions / Activity */}
                <GlassCard className="lg:col-span-2 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                        <Button variant="ghost" className="text-xs">View All</Button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { action: "New User Registration", user: "Alice Freeman", time: "2 mins ago", type: "user" },
                            { action: "Course Purchase", user: "Bob Smith", time: "15 mins ago", amount: "+$49.99", type: "sale" },
                            { action: "New Course Submitted", user: "Prof. X", time: "1 hour ago", type: "course" },
                            { action: "System Backup", user: "System", time: "2 hours ago", type: "system" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${item.type === 'sale' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                    <div>
                                        <p className="text-sm text-white font-medium">{item.action}</p>
                                        <p className="text-xs text-gray-500">by {item.user}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    {item.amount && <p className="text-sm font-bold text-green-400">{item.amount}</p>}
                                    <p className="text-xs text-gray-600">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* System Health */}
                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-red-400" /> Pending Approvals
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <p className="text-sm text-gray-300 mb-2">3 Instructor Applications</p>
                                <Button className="w-full text-xs py-1.5" variant="secondary">Review</Button>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <p className="text-sm text-gray-300 mb-2">5 New Courses Pending</p>
                                <Button className="w-full text-xs py-1.5" variant="secondary">Review</Button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
