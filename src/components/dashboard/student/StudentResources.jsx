import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { File, Download, ExternalLink } from 'lucide-react';

const StudentResources = () => {
    const resources = [
        { id: 1, type: 'PDF', title: 'React Cheatsheet 2024', size: '1.2 MB' },
        { id: 2, type: 'Code', title: 'Starter Project Template', size: '15 MB' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Learning Resources</h2>
                <p className="text-gray-400">Downloadable files and extra materials.</p>
            </div>

            <GlassCard>
                <div className="divide-y divide-white/5">
                    {resources.map(res => (
                        <div key={res.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                                    <File className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{res.title}</h4>
                                    <p className="text-xs text-gray-500">{res.type} • {res.size}</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-gray-400 hover:text-white">
                                <Download className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default StudentResources;
