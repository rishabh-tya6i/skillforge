import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { LifeBuoy, Send } from 'lucide-react';

const StudentSupport = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Support ticket submitted! We will contact you shortly.');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <LifeBuoy className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Help & Support</h2>
                    <p className="text-gray-400">Need help? Submit a ticket below.</p>
                </div>
            </div>

            <GlassCard className="max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Subject</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
                            placeholder="e.g., Issue with video player"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none resize-none"
                            placeholder="Describe your issue in detail..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit" variant="primary">
                            <Send className="w-4 h-4 mr-2" /> Submit Ticket
                        </Button>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default StudentSupport;
