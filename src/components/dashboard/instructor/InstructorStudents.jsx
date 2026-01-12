import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Search, Mail } from 'lucide-react';

const InstructorStudents = () => {
    const students = [
        { id: 1, name: 'Alice Smith', enrolledCourses: 2, progress: '45%', lastActive: '2 hours ago' },
        { id: 2, name: 'Bob Jones', enrolledCourses: 1, progress: '10%', lastActive: '1 day ago' },
        { id: 3, name: 'Charlie Day', enrolledCourses: 3, progress: '88%', lastActive: '5 mins ago' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">My Students</h2>
                    <p className="text-gray-400">Track student progress and engagement.</p>
                </div>
            </div>

            <GlassCard className="p-4 flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="w-full bg-[#0B1220] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-600 focus:border-primary focus:outline-none"
                    />
                </div>
            </GlassCard>

            <GlassCard>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-gray-400 text-sm bg-white/5">
                            <th className="p-4 font-medium">Student Name</th>
                            <th className="p-4 font-medium">Enrolled Courses</th>
                            <th className="p-4 font-medium">Avg. Progress</th>
                            <th className="p-4 font-medium">Last Active</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">{student.name}</td>
                                <td className="p-4 text-gray-400">{student.enrolledCourses}</td>
                                <td className="p-4 text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-16 bg-gray-700/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full" style={{ width: student.progress }}></div>
                                        </div>
                                        <span className="text-xs">{student.progress}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-gray-400 text-sm">{student.lastActive}</td>
                                <td className="p-4 text-right">
                                    <Button variant="ghost" className="text-xs">
                                        <Mail className="w-4 h-4 mr-1" /> Message
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
};

export default InstructorStudents;
