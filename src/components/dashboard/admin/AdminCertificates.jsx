import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Award, PenTool, Eye, Check } from 'lucide-react';

const AdminCertificates = () => {
    const [signature, setSignature] = useState(null);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Certificates & Accreditation</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Certificate Preview */}
                <GlassCard className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-10 -mt-10" />
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-400" />
                        Live Preview
                    </h3>

                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl relative border-8 border-double border-gray-200 aspect-[1.4/1]">
                        <div className="text-center space-y-4 h-full flex flex-col justify-center">
                            <h1 className="text-2xl font-serif text-gray-800 font-bold uppercase tracking-widest">Certificate of Completion</h1>
                            <p className="text-sm text-gray-500">This certifies that</p>
                            <h2 className="text-3xl font-script text-primary border-b border-gray-300 inline-block pb-2 px-10">Student Name</h2>
                            <p className="text-sm text-gray-500">has successfully completed the course</p>
                            <h3 className="text-xl font-bold text-gray-800">Full Stack Web Development</h3>

                            <div className="flex justify-between items-end mt-8">
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 mb-1">Date</p>
                                    <p className="font-medium text-sm">Oct 25, 2023</p>
                                    <div className="h-px w-24 bg-gray-300 mt-1"></div>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 mb-1">Instructor</p>
                                    <div className="font-script text-lg text-gray-800">John Doe</div>
                                    <div className="h-px w-24 bg-gray-300 mt-1"></div>
                                </div>
                                <div className="text-center">
                                    <Award className="w-12 h-12 text-yellow-500 mx-auto opacity-80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Settings */}
                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <PenTool className="w-5 h-5 text-purple-400" />
                            Digital Signature
                        </h3>
                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                                <p className="text-gray-400 text-sm">Click to upload signature image (PNG)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="auto-issue" className="rounded bg-white/10 border-white/20 text-primary focus:ring-primary" defaultChecked />
                                <label htmlFor="auto-issue" className="text-sm text-gray-300">Auto-issue upon 100% completion</label>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Template Settings</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Certificate Title</label>
                                <input type="text" defaultValue="Certificate of Completion" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Brand Color</label>
                                <div className="flex gap-2">
                                    {['#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map(color => (
                                        <div key={color} className="w-6 h-6 rounded-full cursor-pointer ring-2 ring-offset-2 ring-offset-black ring-transparent hover:ring-white transition-all" style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default AdminCertificates;
