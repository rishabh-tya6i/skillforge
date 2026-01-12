import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Award, Download } from 'lucide-react';

const StudentCertificates = () => {
    const certificates = [
        { id: 1, title: 'Advanced JavaScript Mastery', date: '2024-02-15', id_code: 'SF-2024-JS-001' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">My Certificates</h2>
                <p className="text-gray-400">View and download your earned credentials.</p>
            </div>

            <GlassCard>
                {certificates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map(cert => (
                            <div key={cert.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                                    <Award className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">Issued: {cert.date}</p>
                                <div className="text-xs font-mono text-gray-500 mb-6 bg-black/20 px-2 py-1 rounded">ID: {cert.id_code}</div>
                                <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" /> Download PDF
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        <Award className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>No certificates earned yet. Keep learning!</p>
                    </div>
                )}
            </GlassCard>
        </div>
    );
};

export default StudentCertificates;
