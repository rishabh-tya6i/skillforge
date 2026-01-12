import React, { useState } from 'react';
import StudentSidebar from './student/StudentSidebar';
import StudentOverview from './student/StudentOverview';
import StudentMyLearning from './student/StudentMyLearning';
import StudentBrowse from './student/StudentBrowse';
import StudentSchedule from './student/StudentSchedule';
import StudentQuizzes from './student/StudentQuizzes';
import StudentCommunication from './student/StudentCommunication';
import StudentCertificates from './student/StudentCertificates';
import StudentResources from './student/StudentResources';
import StudentSupport from './student/StudentSupport';
import UserProfile from './shared/UserProfile';
import UserSettings from './shared/UserSettings'; // Assuming separate settings or just profile

const StudentDashboard = ({ user }) => {
    const [activeView, setActiveView] = useState('overview');

    const renderContent = () => {
        switch (activeView) {
            case 'overview': return <StudentOverview user={user} setActiveView={setActiveView} />;
            case 'mylearning': return <StudentMyLearning user={user} />;
            case 'browse': return <StudentBrowse user={user} />;
            case 'schedule': return <StudentSchedule />;
            case 'quizzes': return <StudentQuizzes />;
            case 'communication': return <StudentCommunication />;
            case 'certificates': return <StudentCertificates />;
            case 'resources': return <StudentResources />;
            case 'support': return <StudentSupport />;
            case 'profile': return <UserProfile user={user} />;
            case 'settings': return <UserProfile user={user} />; // Map settings to profile for now if no dedicated settings page
            default: return <StudentOverview user={user} setActiveView={setActiveView} />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1220] text-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <StudentSidebar activeView={activeView} setActiveView={setActiveView} />

                    {/* Main Content Area */}
                    <main className="flex-1 w-full min-w-0">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
