
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { ChevronLeft, Play, CheckCircle, FileText, Lock, Menu } from 'lucide-react';

const LessonPlayer = ({ course, onBack }) => {
    // Flatten curriculum to easily find next/prev
    const allLessons = course.modules?.flatMap(sec => sec.lessons) || [];
    const getImageUrl = (path) => path && path.startsWith('http') ? path : `http://localhost:5000${path}`;
    const [currentLesson, setCurrentLesson] = useState(allLessons[0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if (!currentLesson) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
                <h2 className="text-2xl font-bold text-white">No Content Available</h2>
                <Button onClick={onBack} variant="secondary">Back to Dashboard</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] -mx-4 -my-8 lg:-mx-8 lg:-my-8 bg-black">
            {/* Player Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-[#0B1220]">
                <div className="flex items-center gap-4">
                    <Button onClick={onBack} variant="ghost" className="text-gray-400 hover:text-white">
                        <ChevronLeft className="w-5 h-5 mr-1" /> Back
                    </Button>
                    <h1 className="font-bold text-white line-clamp-1">{course.title}</h1>
                </div>
                <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} variant="ghost" className="lg:hidden text-white">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Content (Video/Text) */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-black relative">
                    {currentLesson.type === 'video' ? (
                        <div className="aspect-video w-full bg-gray-900 flex items-center justify-center">
                            {/* Mock Video Player */}
                            <video
                                controls
                                className="w-full h-full"
                                poster={getImageUrl(course.thumbnail)}
                                src={getImageUrl(currentLesson.contentUrl)}
                            />
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto py-12 px-6">
                            <GlassCard className="p-8 prose prose-invert prose-lg max-w-none">
                                <h1>{currentLesson.title}</h1>
                                <div>{currentLesson.textContent}</div>
                            </GlassCard>
                        </div>
                    )}

                    <div className="p-6 max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">{currentLesson.title}</h2>
                            <Button variant="primary" className="shadow-neon">
                                <CheckCircle className="w-4 h-4 mr-2" /> Mark as Complete
                            </Button>
                        </div>
                        <p className="text-gray-400">
                            Lesson description and additional resources would go here.
                        </p>
                    </div>
                </div>

                {/* Sidebar Curriculum */}
                <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-[#0B1220] border-l border-white/10 transition-all duration-300 flex flex-col shrink-0`}>
                    <div className="p-4 border-b border-white/5">
                        <h3 className="font-bold text-white">Course Content</h3>
                        <p className="text-xs text-gray-500 mt-1">35% Completed</p>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {course.modules?.map((section, idx) => (
                            <div key={section._id || idx}>
                                <div className="px-4 py-3 bg-white/5 border-y border-white/5">
                                    <h4 className="text-sm font-bold text-gray-300">Section {idx + 1}: {section.title}</h4>
                                </div>
                                <div>
                                    {section.lessons.map(lesson => (
                                        <button
                                            key={lesson._id}
                                            onClick={() => setCurrentLesson(lesson)}
                                            className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/5 transition-colors border-l-2
                                                ${currentLesson._id === lesson._id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
                                        >
                                            <div className="mt-0.5">
                                                {lesson.type === 'video' ? <Play className="w-4 h-4 text-gray-500" /> : <FileText className="w-4 h-4 text-gray-500" />}
                                            </div>
                                            <div>
                                                <p className={`text-sm font-medium ${currentLesson._id === lesson._id ? 'text-primary' : 'text-gray-400'}`}>
                                                    {lesson.title}
                                                </p>
                                                <p className="text-xs text-gray-600 mt-0.5">{lesson.duration}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonPlayer;
