import React, { useState } from 'react';
import AdminSidebar from './admin/AdminSidebar';
import AdminOverview from './admin/AdminOverview';
import AdminUsers from './admin/AdminUsers';
import AdminCourses from './admin/AdminCourses';
import AdminSettings from './admin/AdminSettings';
import AdminFinance from './admin/AdminFinance';
import AdminReports from './admin/AdminReports';
import AdminContent from './admin/AdminContent';
import AdminCommunication from './admin/AdminCommunication';
import AdminCertificates from './admin/AdminCertificates';
import AdminSecurity from './admin/AdminSecurity';
import AdminIntegrations from './admin/AdminIntegrations';
import AdminAudit from './admin/AdminAudit';
import { GlassCard } from '../ui/GlassCard';
import { Wrench } from 'lucide-react';

const AdminDashboard = ({ user }) => {
    const [activeView, setActiveView] = useState('overview');

    const renderContent = () => {
        switch (activeView) {
            case 'overview': return <AdminOverview setActiveView={setActiveView} />;
            case 'users': return <AdminUsers />;
            case 'courses': return <AdminCourses />;
            case 'finance': return <AdminFinance />; // Fixed ID match 'finance' vs 'finances'
            case 'analytics': return <AdminReports />;
            case 'content': return <AdminContent />; // Uncommented
            case 'communication': return <AdminCommunication />; // Uncommented
            case 'certificates': return <AdminCertificates />;
            case 'integrations': return <AdminIntegrations />;
            case 'audit': return <AdminAudit />;
            case 'settings': return <AdminSettings />;
            case 'security': return <AdminSecurity />;

            // Fallback for modules in progress
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
                    <AdminSidebar activeView={activeView} setActiveView={setActiveView} />

                    {/* Main Content Area */}
                    <main className="flex-1 w-full min-w-0">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
