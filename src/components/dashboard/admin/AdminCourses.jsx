
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { useUser } from '../../../context/UserContext';
import { BookOpen, CheckCircle, XCircle, Eye, Archive, DollarSign } from 'lucide-react';

const AdminCourses = () => {
    const { courses, updateCourse, deleteCourse } = useCourses();
    const { users } = useUser();
    const [filter, setFilter] = useState('All');

    // Helper to get instructor name
    const getInstructorName = (id) => {
        const instructor = users.find(u => u.id === id);
        return instructor ? instructor.name : 'Unknown';
    };

    const handleStatusChange = (id, newStatus) => {
        updateCourse(id, { status: newStatus });
    };

    const handleExport = () => {
        const headers = ['ID', 'Title', 'Instructor', 'Price', 'Status'];
        const rows = courses.map(c => [c.id, c.title, getInstructorName(c.instructorId), c.price, c.status]);
        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "courses_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.status === filter);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Course Management</h2>
                    <p className="text-gray-400">Approve, reject, or archive platform courses.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex bg-white/5 rounded-lg p-1">
                        {['All', 'Active', 'Draft'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${filter === f ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <Button onClick={handleExport} variant="primary" className="text-sm">Export List</Button>
                </div>
            </div>

            <GlassCard>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-sm bg-white/5">
                                <th className="p-4 font-medium">Course Title</th>
                                <th className="p-4 font-medium">Instructor</th>
                                <th className="p-4 font-medium">Price</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map(course => (
                                <tr key={course.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                                <BookOpen className="w-4 h-4" />
                                            </div>
                                            {course.title}
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">{getInstructorName(course.instructorId)}</td>
                                    <td className="p-4 text-white font-mono">${course.price}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase border
                                            ${course.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                course.status === 'Draft' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                    'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        {course.status !== 'Active' && (
                                            <button
                                                onClick={() => handleStatusChange(course.id, 'Active')}
                                                className="p-2 hover:bg-green-500/20 rounded-lg text-gray-400 hover:text-green-400 transition-colors" title="Approve"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        {course.status === 'Active' && (
                                            <button
                                                onClick={() => handleStatusChange(course.id, 'Draft')}
                                                className="p-2 hover:bg-yellow-500/20 rounded-lg text-gray-400 hover:text-yellow-400 transition-colors" title="Deactivate"
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="View Details">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => deleteCourse(course.id)} className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors" title="Archive/Delete">
                                            <Archive className="w-4 h-4" />
                                        </button>
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

export default AdminCourses;
