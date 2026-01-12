
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Calendar as CalendarIcon, Clock, Video, Plus, Users, Link } from 'lucide-react';

const InstructorSchedule = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Class Schedule</h2>
                    <p className="text-gray-400">Manage live sessions, webinars, and office hours.</p>
                </div>
                <Button variant="primary">
                    <Plus className="w-4 h-4 mr-2" /> Schedule New Class
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming List */}
                <div className="lg:col-span-2 space-y-4">
                    {[
                        { title: "React Hooks Deep Dive", type: "Live Class", date: "Today", time: "4:00 PM - 5:30 PM", students: 45, platform: "Zoom" },
                        { title: "Project Q&A", type: "Office Hours", date: "Tomorrow", time: "10:00 AM - 11:00 AM", students: 12, platform: "Google Meet" },
                        { title: "Advanced CSS Grid", type: "Webinar", date: "Jan 15", time: "2:00 PM - 3:30 PM", students: 128, platform: "Zoom" }
                    ].map((session, idx) => (
                        <GlassCard key={idx} className="p-6 flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex flex-col items-center justify-center w-20 h-20 bg-[#0B1220] rounded-xl border border-white/10 text-center">
                                <span className="text-xs text-primary font-bold uppercase tracking-wider">{session.date}</span>
                                <span className="text-xl font-bold text-white mt-1">{session.time.split(' ')[0]}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${session.type === 'Live Class' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-purple-400 bg-purple-500/10 border-purple-500/20'}`}>
                                        {session.type}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <Users className="w-3 h-3" /> {session.students} Attending
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{session.title}</h3>
                                <p className="text-sm text-gray-400 flex items-center gap-2">
                                    <Video className="w-4 h-4" /> via {session.platform}
                                </p>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                                <Button variant="secondary" className="flex-1 md:flex-none">Edit</Button>
                                <Button variant="primary" className="flex-1 md:flex-none">Start</Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Calendar Placeholder */}
                <GlassCard className="p-6 h-fit bg-[#0B1220]/50">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-gray-400" /> Filter by Date
                    </h3>
                    <div className="bg-[#0B1220] rounded-xl p-4 border border-white/5 text-center text-gray-500">
                        {/* Interactive Calendar UI would go here */}
                        [Calendar Component Placeholder]
                    </div>
                    <div className="mt-6 space-y-3">
                        <h4 className="text-sm font-bold text-white">Integration Status</h4>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">Z</div>
                                <span className="text-sm text-gray-300">Zoom</span>
                            </div>
                            <span className="text-xs text-green-400 font-bold">Connected</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">G</div>
                                <span className="text-sm text-gray-300">Meet</span>
                            </div>
                            <button className="text-xs text-blue-400 hover:text-white underline">Connect</button>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default InstructorSchedule;
