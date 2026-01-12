
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { Plus, Trash2, Video, FileText, ChevronDown, ChevronRight, GripVertical } from 'lucide-react';

const CourseBuilder = ({ course, onUpdate, onBack }) => {
    const [sections, setSections] = useState(course.curriculum || []);
    const [isAddLessonOpen, setIsAddLessonOpen] = useState(null); // sectionId
    const [newLesson, setNewLesson] = useState({ title: '', type: 'video' });

    // Mock "Upload"
    const handleAddSection = () => {
        const newSection = {
            id: Date.now().toString(),
            title: "New Section",
            lessons: []
        };
        const updated = [...sections, newSection];
        setSections(updated);
        onUpdate(course.id, { curriculum: updated });
    };

    const handleAddLesson = (sectionId) => {
        const updatedSections = sections.map(sec => {
            if (sec.id === sectionId) {
                return {
                    ...sec,
                    lessons: [...sec.lessons, {
                        id: Date.now().toString(),
                        title: newLesson.title || "New Lesson",
                        type: newLesson.type,
                        duration: newLesson.type === 'video' ? '5:00' : '10 min',
                        url: newLesson.type === 'video' ? 'https://www.w3schools.com/html/mov_bbb.mp4' : ''
                    }]
                };
            }
            return sec;
        });
        setSections(updatedSections);
        onUpdate(course.id, { curriculum: updatedSections });
        setIsAddLessonOpen(null);
        setNewLesson({ title: '', type: 'video' });
    };

    const handleDeleteLesson = (sectionId, lessonId) => {
        const updatedSections = sections.map(sec => {
            if (sec.id === sectionId) {
                return {
                    ...sec,
                    lessons: sec.lessons.filter(l => l.id !== lessonId)
                };
            }
            return sec;
        });
        setSections(updatedSections);
        onUpdate(course.id, { curriculum: updatedSections });
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-500">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Button onClick={onBack} variant="ghost" className="mb-2 pl-0 hover:bg-transparent text-gray-400 hover:text-white">← Back to Courses</Button>
                    <h2 className="text-2xl font-bold text-white">Curriculum: {course.title}</h2>
                    <p className="text-gray-400">Build your course structure with sections and lessons.</p>
                </div>
                <Button onClick={handleAddSection} variant="primary">
                    <Plus className="w-4 h-4 mr-2" /> Add Section
                </Button>
            </div>

            <div className="space-y-4">
                {sections.map((section, idx) => (
                    <GlassCard key={section.id} className="p-6 border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <GripVertical className="w-5 h-5 text-gray-600 cursor-move" />
                                <h3 className="font-bold text-white text-lg">Section {idx + 1}: {section.title}</h3>
                            </div>
                            <Button variant="ghost" className="text-red-400 hover:bg-red-500/10">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-3 pl-8">
                            {section.lessons.map(lesson => (
                                <div key={lesson.id} className="flex items-center justify-between p-3 bg-[#0B1220] rounded-lg border border-white/5 group hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        {lesson.type === 'video' ? <Video className="w-4 h-4 text-blue-400" /> : <FileText className="w-4 h-4 text-green-400" />}
                                        <span className="text-sm text-white">{lesson.title}</span>
                                    </div>
                                    <Button onClick={() => handleDeleteLesson(section.id, lesson.id)} variant="ghost" className="opacity-0 group-hover:opacity-100 text-red-400">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}

                            {isAddLessonOpen === section.id ? (
                                <div className="p-4 bg-white/5 rounded-lg animate-in fade-in">
                                    <div className="flex gap-2 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Lesson Title"
                                            className="flex-1 bg-[#0B1220] border border-white/10 rounded px-3 py-2 text-sm text-white"
                                            value={newLesson.title}
                                            onChange={e => setNewLesson({ ...newLesson, title: e.target.value })}
                                        />
                                        <select
                                            className="bg-[#0B1220] border border-white/10 rounded px-3 py-2 text-sm text-white"
                                            value={newLesson.type}
                                            onChange={e => setNewLesson({ ...newLesson, type: e.target.value })}
                                        >
                                            <option value="video">Video</option>
                                            <option value="text">Article</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button onClick={() => setIsAddLessonOpen(null)} variant="ghost" className="text-xs">Cancel</Button>
                                        <Button onClick={() => handleAddLesson(section.id)} variant="primary" className="text-xs">Add Lesson</Button>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsAddLessonOpen(section.id)}
                                    className="w-full py-2 border border-dashed border-gray-700 rounded-lg text-sm text-gray-500 hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2"
                                >
                                    <Plus className="w-4 h-4" /> Add Lesson
                                </button>
                            )}
                        </div>
                    </GlassCard>
                ))}

                {sections.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-white/10 rounded-xl text-gray-500">
                        Start by adding a section to your curriculum.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseBuilder;
