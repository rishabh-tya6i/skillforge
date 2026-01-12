import React, { useState } from 'react';
import InstructorSidebar from './instructor/InstructorSidebar';
import InstructorOverview from './instructor/InstructorOverview';
import InstructorCourses from './instructor/InstructorCourses';
import InstructorSchedule from './instructor/InstructorSchedule';
import InstructorFinance from './instructor/InstructorFinance';
import InstructorCommunication from './instructor/InstructorCommunication';
import InstructorStudents from './instructor/InstructorStudents';
import InstructorReports from './instructor/InstructorReports';
import UserProfile from './shared/UserProfile';
import UserSettings from './shared/UserSettings';
import { GlassCard } from '../ui/GlassCard';
import { Wrench } from 'lucide-react';

const InstructorDashboard = ({ user }) => {
    const [activeView, setActiveView] = useState('overview');

    const renderContent = () => {
        switch (activeView) {
            case 'overview': return <InstructorOverview user={user} setActiveView={setActiveView} />;
            case 'courses': return <InstructorCourses user={user} />;
            case 'schedule': return <InstructorSchedule />;
            case 'performance': return <InstructorFinance user={user} />; // Keeping performance as Finance by default, or maybe Reports?
            // The sidebar has 'analytics' pointing to 'Performance' label. Let's map 'analytics' to 'InstructorReports'?
            // Wait, previous sidebar code had: { id: 'analytics', label: 'Performance', icon: PieChart }
            // So if I map 'analytics' -> InstructorReports that works.
            // And 'communications' -> InstructorCommunication.
            // And 'students' -> InstructorStudents.

            case 'analytics': return <InstructorReports />;
            case 'reports': return <InstructorReports />; // Covering both bases if I changed sidebar
            case 'communications': return <InstructorCommunication />;
            case 'students': return <InstructorStudents />;

            case 'finance': return <InstructorFinance user={user} />; // Just in case

            case 'settings': return <UserSettings />;
            case 'profile': return <UserProfile user={user} />;
            default: return (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4 animate-in fade-in">
                    <div className="p-6 bg-white/5 rounded-full">
                        <Wrench className="w-12 h-12 text-gray-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Module Under Construction</h2>
                    <p className="text-gray-400 max-w-md">
                        The <strong>{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</strong> module is properly routed but currently in development.
                    </p>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1220] text-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <InstructorSidebar activeView={activeView} setActiveView={setActiveView} />

                    {/* Main Content Area */}
                    <main className="flex-1 w-full min-w-0">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;

