
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useCourses } from '../../../context/CourseContext';
import { PlusCircle, Edit2, Trash2, Eye, BookOpen, Video, FileText } from 'lucide-react';
import CourseBuilder from './CourseBuilder';
import api from '../../../api/axios';

const InstructorCourses = ({ user }) => {
    const { courses, addCourse, updateCourse, deleteCourse, fetchInstructorCourses } = useCourses();

    React.useEffect(() => {
        fetchInstructorCourses();
    }, []);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null); // ID of course being edited
    const [newCourse, setNewCourse] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        thumbnail: ''
    });
    const [uploading, setUploading] = useState(false);

    // Courses are now fetched directly for the instructor
    const myCourses = courses;

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
            // Optionally set an error state here to show to user
        }
    };

    if (selectedCourse) {
        const courseToEdit = courses.find(c => c._id === selectedCourse);
        return (
            <CourseBuilder
                course={courseToEdit}
                onUpdate={updateCourse}
                onBack={() => setSelectedCourse(null)}
            />
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">My Courses</h2>
                    <p className="text-gray-400">Manage your content and curriculum.</p>
                </div>
                <Button onClick={() => setIsCreateModalOpen(true)} variant="primary">
                    <PlusCircle className="w-4 h-4 mr-2" /> Create New Course
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {myCourses.map(course => (
                    <GlassCard key={course._id} className="group flex flex-col h-full bg-[#111827]/80 hover:border-primary/50 transition-all">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                            <img src={course.thumbnail || "https://via.placeholder.com/300"} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur text-xs font-bold text-white border border-white/10">
                                {course.status}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="text-center p-2 rounded-lg bg-white/5">
                                    <p className="text-xs text-gray-500">Students</p>
                                    <p className="text-sm font-bold text-white">{course.students?.length || 0}</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-white/5">
                                    <p className="text-xs text-gray-500">Price</p>
                                    <p className="text-sm font-bold text-white">${course.price}</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-white/5">
                                    <p className="text-xs text-gray-500">Revenue</p>
                                    <p className="text-sm font-bold text-green-400">${course.revenue || 0}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-white/5">
                            <Button onClick={() => setSelectedCourse(course._id)} variant="secondary" className="flex-1 text-xs">
                                <Edit2 className="w-3 h-3 mr-2" /> Edit Curriculum
                            </Button>
                            <Button variant="ghost" className="text-gray-400 hover:text-white">
                                <Video className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" className="text-gray-400 hover:text-white">
                                <FileText className="w-4 h-4" />
                            </Button>
                            <Button onClick={() => { if (window.confirm('Delete course?')) deleteCourse(course._id) }} variant="ghost" className="text-gray-400 hover:text-red-500">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </GlassCard>
                ))}

                {/* Empty State */}
                {myCourses.length === 0 && (
                    <div className="col-span-full py-12 text-center border-2 border-dashed border-white/10 rounded-2xl">
                        <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No Courses Created</h3>
                        <p className="text-gray-500 mb-6">Start sharing your knowledge today.</p>
                        <Button onClick={() => setIsCreateModalOpen(true)} variant="primary">Create Your First Course</Button>
                    </div>
                )}
            </div>

            {/* Create Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
                    <GlassCard className="w-full max-w-lg p-8 relative animate-in zoom-in-95">
                        <h2 className="text-2xl font-bold text-white mb-6">Create New Course</h2>
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

export default InstructorCourses;
