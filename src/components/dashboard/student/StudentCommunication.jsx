import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { MessageSquare, Send } from 'lucide-react';

const StudentCommunication = () => {
    const [messages] = useState([
        { id: 1, sender: 'Instructor John', subject: 'Re: React Hook Question', date: '2024-03-20', preview: 'Yes, useEffect runs after the render...' },
        { id: 2, sender: 'System', subject: 'Welcome to Skillforge!', date: '2024-03-01', preview: 'Welcome aboard! Start your learning journey...' },
    ]);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Communication</h2>
                    <p className="text-gray-400">Messages from instructors and admins.</p>
                </div>
                <Button variant="primary" className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> New Message
                </Button>
            </div>

            <GlassCard>
                <div className="space-y-2">
                    {messages.map(msg => (
                        <div key={msg.id} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-white">{msg.sender}</span>
                                <span className="text-xs text-gray-400">{msg.date}</span>
                            </div>
                            <div className="font-medium text-blue-400 mb-1">{msg.subject}</div>
                            <p className="text-sm text-gray-400 truncate">{msg.preview}</p>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default StudentCommunication;
