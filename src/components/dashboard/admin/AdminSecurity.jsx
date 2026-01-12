import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle } from 'lucide-react';

const AdminSecurity = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Super Admin', users: 2, permissions: ['All Access'] },
        { id: 2, name: 'Instructor', users: 15, permissions: ['Create Course', 'Grade Quizzes'] },
        { id: 3, name: 'Student', users: 4200, permissions: ['View Content', 'Take Quizzes'] },
    ]);

    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

    const logs = [
        { id: 1, event: 'Failed Login Attempt', user: 'admin@skillforge.com', ip: '192.168.1.1', time: '10 mins ago', severity: 'high' },
        { id: 2, event: 'Password Changed', user: 'instructor@skillforge.com', ip: '192.168.1.5', time: '1 hour ago', severity: 'low' },
        { id: 3, event: 'New Device Login', user: 'student@skillforge.com', ip: '10.0.0.2', time: '2 hours ago', severity: 'medium' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Security & Access Control</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 2FA & Global Settings */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-400" />
                        Global Security Settings
                    </h3>
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                        <div>
                            <p className="text-white font-medium">Two-Factor Authentication (2FA)</p>
                            <p className="text-sm text-gray-400">Enforce 2FA for all admin accounts</p>
                        </div>
                        <button
                            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${twoFactorEnabled ? 'bg-primary' : 'bg-gray-600'}`}
                        >
                            <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${twoFactorEnabled ? 'translate-x-6' : ''}`} />
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <p className="text-white font-medium">Session Timeout</p>
                            <p className="text-sm text-gray-400">Auto-logout after inactivity</p>
                        </div>
                        <select className="bg-black/20 border border-white/10 text-white text-sm rounded-lg px-2 py-1 focus:outline-none">
                            <option>15 Minutes</option>
                            <option>30 Minutes</option>
                            <option>1 Hour</option>
                        </select>
                    </div>
                </GlassCard>

                {/* Security Logs Preview */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        Recent Security Alerts
                    </h3>
                    <div className="space-y-3">
                        {logs.map(log => (
                            <div key={log.id} className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                                <div className={`w-2 h-2 mt-2 rounded-full ${log.severity === 'high' ? 'bg-red-500' :
                                        log.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                                    }`} />
                                <div>
                                    <p className="text-sm text-white font-medium">{log.event}</p>
                                    <p className="text-xs text-gray-400">{log.user} • {log.ip}</p>
                                </div>
                                <span className="ml-auto text-xs text-gray-500">{log.time}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

            {/* Role Management */}
            <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-400" />
                    Role Definitions
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-sm border-b border-white/10">
                                <th className="pb-3 font-medium">Role Name</th>
                                <th className="pb-3 font-medium">Active Users</th>
                                <th className="pb-3 font-medium">Key Permissions</th>
                                <th className="pb-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {roles.map(role => (
                                <tr key={role.id}>
                                    <td className="py-3 text-white font-medium">{role.name}</td>
                                    <td className="py-3 text-gray-300">{role.users}</td>
                                    <td className="py-3 text-gray-400 text-sm">
                                        {role.permissions.join(', ')}
                                    </td>
                                    <td className="py-3 text-right">
                                        <button className="text-primary hover:text-primary/80 text-sm font-medium">Edit Permissions</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default AdminSecurity;
