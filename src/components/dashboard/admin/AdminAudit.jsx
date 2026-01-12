import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { ClipboardList, Download, Filter, Search } from 'lucide-react';

const AdminAudit = () => {
    const [logs] = useState([
        { id: 1, action: 'User Created', details: 'Created user "John Doe" (Student)', user: 'Admin User', ip: '192.168.1.1', time: '2 mins ago' },
        { id: 2, action: 'Course Approved', details: 'Approved course "React Advanced Patterns"', user: 'Super Admin', ip: '10.0.0.5', time: '15 mins ago' },
        { id: 3, action: 'Payment Refunded', details: 'Refunded $49.99 to User #452', user: 'Finance Manager', ip: '172.16.0.2', time: '1 hour ago' },
        { id: 4, action: 'Settings Updated', details: 'Changed operational branding color', user: 'Admin User', ip: '192.168.1.1', time: '3 hours ago' },
        { id: 5, action: 'Login Failed', details: 'Multiple failed attempts for admin@skillforge.com', user: 'Unknown', ip: '45.32.11.23', time: '5 hours ago' },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Audit & Compliance Logs</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>
            </div>

            <GlassCard className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search logs by action, user or details..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>
                    <button className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-sm border-b border-white/10">
                                <th className="p-3 font-medium">Action</th>
                                <th className="p-3 font-medium">Details</th>
                                <th className="p-3 font-medium">Executed By</th>
                                <th className="p-3 font-medium">IP Address</th>
                                <th className="p-3 font-medium text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {logs.map(log => (
                                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-3 text-white font-medium flex items-center gap-2">
                                        <ClipboardList className="w-4 h-4 text-gray-500" />
                                        {log.action}
                                    </td>
                                    <td className="p-3 text-gray-300 text-sm max-w-xs truncate" title={log.details}>{log.details}</td>
                                    <td className="p-3 text-gray-400 text-sm">{log.user}</td>
                                    <td className="p-3 text-gray-500 text-xs font-mono">{log.ip}</td>
                                    <td className="p-3 text-right text-gray-500 text-sm">{log.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default AdminAudit;
