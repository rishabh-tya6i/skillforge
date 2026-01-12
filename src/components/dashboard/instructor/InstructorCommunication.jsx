import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { MessageSquare, Send, User } from 'lucide-react';

const InstructorCommunication = () => {
    const [messages] = useState([
        { id: 1, sender: 'Alice Smith', course: 'React Fundamentals', subject: 'Question about Hooks', date: '2024-03-24', content: 'Hi Instructor, I am confused about useEffect dependencies...' },
        { id: 2, sender: 'Bob Jones', course: 'Advanced JS', subject: 'Project Submission', date: '2024-03-22', content: 'I have uploaded my final project. When can I expect feedback?' },
    ]);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Communication</h2>
                    <p className="text-gray-400">Manage student questions and announcements.</p>
                </div>
                <Button variant="primary" className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> New Announcement
                </Button>
            </div>

            <GlassCard>
                <div className="space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{msg.sender}</h4>
                                        <p className="text-xs text-gray-400">{msg.course}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">{msg.date}</span>
                            </div>
                            <div className="mt-3 ml-13 pl-13">
                                <h5 className="text-sm font-bold text-white mb-1">{msg.subject}</h5>
                                <p className="text-sm text-gray-300 line-clamp-2">{msg.content}</p>
                                <Button variant="ghost" className="mt-2 text-xs text-primary hover:text-white pl-0">
                                    Reply
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default InstructorCommunication;
