
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { useUser } from '../../../context/UserContext';
import { BookOpen, CheckCircle, XCircle, Eye, Archive, DollarSign, PlusCircle, Edit2 } from 'lucide-react';
import CourseBuilder from '../instructor/CourseBuilder';

const AdminCourses = () => {
    const { courses, updateCourse, deleteCourse, fetchAdminCourses, addCourse } = useCourses();
    const { users } = useUser();
    const [filter, setFilter] = useState('All');

    // Create/Edit State
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [newCourse, setNewCourse] = useState({
        title: '', price: '', description: '', category: '', thumbnail: ''
    });
    const [uploading, setUploading] = useState(false);

    React.useEffect(() => {
        fetchAdminCourses();
    }, []);

    // Helper to get instructor name
    // Helper to get instructor name
    const getInstructorName = (course) => {
        return course.instructor?.name || 'Unknown';
    };

    const handleStatusChange = (id, newStatus) => {
        if (newStatus === 'active') {
            updateCourse(id, { status: 'active', approvalStatus: 'approved' });
        } else {
            updateCourse(id, { status: 'draft', approvalStatus: 'pending' });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewCourse({ ...newCourse, thumbnailFile: file, thumbnail: URL.createObjectURL(file) });
        }
    };

    const handleCreateCourse = async (e) => {
        e.preventDefault();
        const coursePayload = new FormData();
        coursePayload.append('title', newCourse.title);
        coursePayload.append('description', newCourse.description);
        coursePayload.append('category', newCourse.category);
        coursePayload.append('price', newCourse.price);
        coursePayload.append('status', 'draft');

        if (newCourse.thumbnailFile) {
            coursePayload.append('thumbnail', newCourse.thumbnailFile);
        } else if (newCourse.thumbnail) {
            coursePayload.append('thumbnail', newCourse.thumbnail);
        }

        const result = await addCourse(coursePayload);

        if (result.success) {
            setIsCreateModalOpen(false);
            setNewCourse({ title: '', price: '', description: '', category: '', thumbnail: '', thumbnailFile: null });
        } else {
            console.error(result.message);
        }
    };

    const handleExport = () => {
        const headers = ['ID', 'Title', 'Instructor', 'Price', 'Status'];
        const rows = courses.map(c => [c._id, c.title, getInstructorName(c), c.price, c.status]);
        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "courses_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.status === filter.toLowerCase());


    if (selectedCourseId) {
        const courseToEdit = courses.find(c => c._id === selectedCourseId);
        if (courseToEdit) {
            return (
                <CourseBuilder
                    course={courseToEdit}
                    onUpdate={updateCourse}
                    onBack={() => setSelectedCourseId(null)}
                />
            );
        }
    }

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
                    <Button onClick={() => setIsCreateModalOpen(true)} variant="primary" className="text-sm">
                        <PlusCircle className="w-4 h-4 mr-2" /> Create Course
                    </Button>
                    <Button onClick={handleExport} variant="secondary" className="text-sm">Export</Button>
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
                                <tr key={course._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                                <BookOpen className="w-4 h-4" />
                                            </div>
                                            {course.title}
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">{getInstructorName(course)}</td>
                                    <td className="p-4 text-white font-mono">${course.price}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase border
                                            ${course.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                course.status === 'draft' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                    'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        {course.status !== 'active' && (
                                            <button
                                                onClick={() => handleStatusChange(course._id, 'active')}
                                                className="p-2 hover:bg-green-500/20 rounded-lg text-gray-400 hover:text-green-400 transition-colors" title="Approve"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        {course.status === 'active' && (
                                            <button
                                                onClick={() => handleStatusChange(course._id, 'draft')}
                                                className="p-2 hover:bg-yellow-500/20 rounded-lg text-gray-400 hover:text-yellow-400 transition-colors" title="Deactivate"
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        <button onClick={() => setSelectedCourseId(course._id)} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Edit/View">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => deleteCourse(course._id)} className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors" title="Archive/Delete">
                                            <Archive className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
            {/* Create Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
                    <GlassCard className="w-full max-w-lg p-8 relative animate-in zoom-in-95">
                        <h2 className="text-2xl font-bold text-white mb-6">Create New Course (Admin)</h2>
                        <form onSubmit={handleCreateCourse} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Course Title</label>
                                <input type="text" required className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                    value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Category</label>
                                <input type="text" required placeholder="e.g. Development, Design" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                    value={newCourse.category} onChange={e => setNewCourse({ ...newCourse, category: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
                                <input type="number" required className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                    value={newCourse.price} onChange={e => setNewCourse({ ...newCourse, price: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Description</label>
                                <textarea required rows="4" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                    value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })}></textarea>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Thumbnail</label>
                                <input type="text" placeholder="Image URL" readOnly className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white mb-2"
                                    value={newCourse.thumbnail} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80"
                                />
                                {uploading && <p className="text-sm text-blue-400 mt-1">Uploading...</p>}
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="ghost" onClick={() => setIsCreateModalOpen(false)}>Cancel</Button>
                                <Button type="submit" variant="primary">Create Draft</Button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            )}
        </div>
    );
};

export default AdminCourses;
