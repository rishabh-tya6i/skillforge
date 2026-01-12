import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { MessageSquare, Bell, Plus, Trash2, Send } from 'lucide-react';

const AdminCommunication = () => {
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'System Maintenance', content: 'Scheduled maintenance on Sunday.', date: '2023-11-01' },
        { id: 2, title: 'New Course Policy', content: 'Updated guidelines for course creation.', date: '2023-10-28' },
    ]);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });
    const [isCreating, setIsCreating] = useState(false);

    const handleAddAnnouncement = (e) => {
        e.preventDefault();
        setAnnouncements([{ id: Date.now(), ...newAnnouncement, date: new Date().toISOString().split('T')[0] }, ...announcements]);
        setNewAnnouncement({ title: '', content: '' });
        setIsCreating(false);
    };

    const handleDelete = (id) => {
        setAnnouncements(announcements.filter(a => a.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Communication Center</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Announcements Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Bell className="w-5 h-5 text-yellow-400" />
                            Announcements
                        </h3>
                        <button onClick={() => setIsCreating(!isCreating)} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {isCreating && (
                        <GlassCard className="p-4 border border-primary/30">
                            <form onSubmit={handleAddAnnouncement} className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary"
                                    value={newAnnouncement.title}
                                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary"
                                    rows="3"
                                    value={newAnnouncement.content}
                                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                                    required
                                />
                                <div className="flex justify-end gap-2">
                                    <button type="button" onClick={() => setIsCreating(false)} className="px-3 py-1.5 text-sm text-gray-400 hover:text-white">Cancel</button>
                                    <button type="submit" className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary/90">Post</button>
                                </div>
                            </form>
                        </GlassCard>
                    )}

                    <div className="space-y-3">
                        {announcements.map(ann => (
                            <GlassCard key={ann.id} className="p-4 flex justify-between items-start group">
                                <div>
                                    <h4 className="text-white font-medium">{ann.title}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{ann.content}</p>
                                    <span className="text-xs text-gray-500 mt-2 block">{ann.date}</span>
                                </div>
                                <button onClick={() => handleDelete(ann.id)} className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Internal Messaging Mock */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                        Internal Messages
                    </h3>
                    <GlassCard className="h-[500px] flex flex-col">
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">JD</div>
                                <div className="bg-white/10 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                                    <p className="text-sm text-gray-200">Hi Admin, I need help with a student refund.</p>
                                    <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">You</div>
                                <div className="bg-primary/20 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                                    <p className="text-sm text-gray-200">Sure, please send me the transaction ID.</p>
                                    <span className="text-xs text-gray-500 mt-1 block text-right">10:32 AM</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-white/5">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                />
                                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default AdminCommunication;
