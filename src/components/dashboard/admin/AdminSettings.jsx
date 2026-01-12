
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Shield, Lock, Globe, Bell, Smartphone, Save } from 'lucide-react';

const AdminSettings = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">System Configuration</h2>
                    <p className="text-gray-400">Manage platform branding, security, and notifications.</p>
                </div>
                <Button variant="primary">
                    <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Branding */}
                <GlassCard className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-400" /> Platform Branding
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Platform Name</label>
                            <input type="text" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white" defaultValue="SkillForge LMS" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Theme Color (Hex)</label>
                            <div className="flex gap-2">
                                <input type="text" className="flex-1 bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white" defaultValue="#3B82F6" />
                                <div className="w-10 h-10 rounded-lg bg-primary border border-white/10"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-sm text-gray-300">Dark Mode Forced</span>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                        </div>
                    </div>
                </GlassCard>

                {/* Security */}
                <GlassCard className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-red-400" /> Security & Access
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div>
                                <p className="text-sm text-white font-medium">Two-Factor Authentication (2FA)</p>
                                <p className="text-xs text-gray-500">Require for all Admin accounts</p>
                            </div>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div>
                                <p className="text-sm text-white font-medium">SSL Enforcement</p>
                                <p className="text-xs text-gray-500">Redirect HTTP to HTTPS</p>
                            </div>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div>
                                <p className="text-sm text-white font-medium">Automated Backups</p>
                                <p className="text-xs text-gray-500">Daily database snapshots</p>
                            </div>
                            <div className="w-10 h-5 bg-gray-600 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AdminSettings;
