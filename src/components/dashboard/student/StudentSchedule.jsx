import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentCalendar = () => {
    // Mock days for a calendar view
    const days = Array.from({ length: 35 }, (_, i) => i + 1);
    const events = [
        { day: 5, title: 'React Quiz Due', type: 'urgent' },
        { day: 12, title: 'Live Q&A Session', type: 'live' },
        { day: 25, title: 'Project Submission', type: 'normal' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Learning Schedule</h2>
                <p className="text-gray-400">Keep track of your deadlines and live sessions.</p>
            </div>

            <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">March 2024</h3>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-xs font-bold text-gray-500 uppercase">{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {days.map(day => {
                        const event = events.find(e => e.day === day);
                        return (
                            <div key={day} className={`aspect-square rounded-lg border border-white/5 bg-white/5 flex flex-col items-center justify-start p-2 relative group hover:bg-white/10 transition-colors ${day > 31 ? 'opacity-20' : ''}`}>
                                <span className={`text-sm ${event ? 'font-bold text-white' : 'text-gray-400'}`}>
                                    {day <= 31 ? day : day - 31}
                                </span>
                                {event && day <= 31 && (
                                    <div className={`mt-1 w-full text-[10px] truncate px-1 py-0.5 rounded
                                        ${event.type === 'urgent' ? 'bg-red-500/20 text-red-400' :
                                            event.type === 'live' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                                        {event.title}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </GlassCard>
        </div>
    );
};

export default StudentCalendar;
