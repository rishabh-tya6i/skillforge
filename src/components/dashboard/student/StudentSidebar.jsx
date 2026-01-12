
import React from 'react';
import {
    LayoutDashboard, BookOpen, Search, Calendar,
    FileText, Award, User, Settings, LogOut, MessageSquare, Download, LifeBuoy
} from 'lucide-react';
import { GlassCard } from '../../ui/GlassCard';

const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mylearning', label: 'My Learning', icon: BookOpen },
    { id: 'quizzes', label: 'Quizzes & Assignments', icon: FileText }, // Renamed from assignments to match
    { id: 'schedule', label: 'Calendar', icon: Calendar },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'browse', label: 'Browse Courses', icon: Search },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'resources', label: 'Resources', icon: Download },
    { id: 'support', label: 'Help & Support', icon: LifeBuoy },
    { id: 'profile', label: 'Profile', icon: User },
    // { id: 'settings', label: 'Settings', icon: Settings }, // Settings can be part of profile or separate
];

const StudentSidebar = ({ activeView, setActiveView }) => {
    return (
        <GlassCard className="h-[calc(100vh-100px)] sticky top-24 p-4 flex flex-col gap-2 w-64 hidden lg:flex overflow-y-auto custom-scrollbar">
            <div className="mb-6 px-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Student Menu</h3>
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

export default StudentSidebar;
