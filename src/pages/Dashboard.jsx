
import React from 'react';
import { useAuth } from '../context/AuthContext';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import InstructorDashboard from '../components/dashboard/InstructorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) return null;

    const renderDashboard = () => {
        switch (user.role) {
            case 'instructor':
                return <InstructorDashboard user={user} />;
            case 'admin':
                return <AdminDashboard user={user} />;
            default:
                return <StudentDashboard user={user} />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1220] pt-24 pb-20 overflow-x-hidden">

            {/* Background Effects (Subtle and Shared) */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {renderDashboard()}
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
