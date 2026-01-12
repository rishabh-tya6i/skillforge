import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { FileText, Upload, Check, X, Search, Filter } from 'lucide-react';
import { useUser } from '../../../context/UserContext'; // Reusing context for potentially linked data if needed

const AdminContent = () => {
    const [contents, setContents] = useState([
        { id: 1, title: 'Intro to React', type: 'Video', author: 'John Instructor', date: '2023-10-25', status: 'Pending' },
        { id: 2, title: 'Advanced CSS Guide', type: 'PDF', author: 'Jane Student', date: '2023-10-26', status: 'Approved' },
        { id: 3, title: 'Javascript Basics', type: 'Article', author: 'John Instructor', date: '2023-10-24', status: 'Rejected' },
    ]);

    const [filter, setFilter] = useState('All');

    const handleApprove = (id) => {
        setContents(contents.map(c => c.id === id ? { ...c, status: 'Approved' } : c));
    };

    const handleReject = (id) => {
        setContents(contents.map(c => c.id === id ? { ...c, status: 'Rejected' } : c));
    };

    const filteredContents = filter === 'All' ? contents : contents.filter(c => c.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-2xl font-bold text-white">Content Management</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
                        <Upload className="w-4 h-4" />
                        Upload Content
                    </button>
                </div>
            </div>

            <GlassCard className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search content..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>
                    <div className="flex gap-2">
                        {['All', 'Pending', 'Approved', 'Rejected'].map(status => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === status ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-sm">
                                <th className="p-3 font-medium">Title</th>
                                <th className="p-3 font-medium">Type</th>
                                <th className="p-3 font-medium">Author</th>
                                <th className="p-3 font-medium">Date</th>
                                <th className="p-3 font-medium">Status</th>
                                <th className="p-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredContents.map((content) => (
                                <tr key={content.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-3 text-white font-medium flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-primary" />
                                        {content.title}
                                    </td>
                                    <td className="p-3 text-gray-300">{content.type}</td>
                                    <td className="p-3 text-gray-300">{content.author}</td>
                                    <td className="p-3 text-gray-400">{content.date}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${content.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
                                            content.status === 'Rejected' ? 'bg-red-500/20 text-red-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                            {content.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-right">
                                        <div className="flex justify-end gap-2">
                                            {content.status === 'Pending' && (
                                                <>
                                                    <button onClick={() => handleApprove(content.id)} className="p-1.5 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors" title="Approve">
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => handleReject(content.id)} className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Reject">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default AdminContent;
