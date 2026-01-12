
import React from 'react';
import {
    LayoutDashboard, Users, BookOpen, CreditCard, BarChart2,
    FileText, Settings, Shield, MessageSquare, Award, Link,
    ClipboardList, LogOut
} from 'lucide-react';
import { GlassCard } from '../../ui/GlassCard';

const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'courses', label: 'Course Management', icon: BookOpen },
    { id: 'finance', label: 'Payments & Subscriptions', icon: CreditCard },
    { id: 'analytics', label: 'Reports & Analytics', icon: BarChart2 },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'integrations', label: 'Integrations', icon: Link },
    { id: 'audit', label: 'Audit & Compliance', icon: ClipboardList },
    { id: 'settings', label: 'System Configuration', icon: Settings },
];

const AdminSidebar = ({ activeView, setActiveView }) => {
    return (
        <GlassCard className="h-[calc(100vh-100px)] sticky top-24 p-4 flex flex-col gap-2 w-64 hidden lg:flex overflow-y-auto custom-scrollbar">
            <div className="mb-6 px-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Main Menu</h3>
            </div>
            {menuItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                        ${activeView === item.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                >
                    <item.icon className={`w-4 h-4 ${activeView === item.id ? 'text-white' : 'text-gray-500 group-hover:text-white'}`} />
                    {item.label}
                </button>
            ))}

            <div className="mt-auto border-t border-white/5 pt-4">
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </GlassCard>
    );
};

export default AdminSidebar;
