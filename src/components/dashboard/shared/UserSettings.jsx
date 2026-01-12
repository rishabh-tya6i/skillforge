
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Bell, Lock, Shield, Smartphone, Mail, Moon } from 'lucide-react';

const UserSettings = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        marketing: true
    });

    const [password, setPassword] = useState({ current: '', new: '', confirm: '' });

    const handleToggle = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        alert("Password updated successfully! (Mock)");
        setPassword({ current: '', new: '', confirm: '' });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-white">Account Settings</h2>

            {/* Notifications */}
            <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Bell className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-white">Notifications</h3>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between pb-6 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Email Notifications</p>
                                <p className="text-sm text-gray-400">Receive daily summaries and updates.</p>
                            </div>
                        </div>
                        <Switch checked={notifications.email} onChange={() => handleToggle('email')} />
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Push Notifications</p>
                                <p className="text-sm text-gray-400">Get real-time alerts on your device.</p>
                            </div>
                        </div>
                        <Switch checked={notifications.push} onChange={() => handleToggle('push')} />
                    </div>
                </div>
            </GlassCard>

            {/* Security */}
            <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-accent-purple" />
                    <h3 className="text-lg font-bold text-white">Security</h3>
                </div>

                <form onSubmit={handlePasswordChange} className="space-y-4 max-w-lg">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Current Password</label>
                        <input type="password" value={password.current} onChange={e => setPassword({ ...password, current: e.target.value })} className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">New Password</label>
                            <input type="password" value={password.new} onChange={e => setPassword({ ...password, new: e.target.value })} className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
                            <input type="password" value={password.confirm} onChange={e => setPassword({ ...password, confirm: e.target.value })} className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                    </div>
                    <Button type="submit" variant="secondary" className="mt-2">Change Password</Button>
                </form>
            </GlassCard>
        </div>
    );
};

const Switch = ({ checked, onChange }) => (
    <button
        onClick={onChange}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${checked ? 'bg-primary' : 'bg-gray-700'}`}
    >
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition rounded-full duration-200 ${checked ? 'translate-x-6' : 'translate-x-0'}`} />
    </button>
);

export default UserSettings;
