import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { FileText, Clock, CheckCircle } from 'lucide-react';

const StudentQuizzes = () => {
    const quizzes = [
        { id: 1, title: 'React Fundamentals Quiz', course: 'React The Complete Guide', status: 'Pending', dueDate: '2024-03-25', questions: 10 },
        { id: 2, title: 'JavaScript Advanced Assessment', course: 'Advanced JavaScript', status: 'Completed', score: '85%', date: '2024-03-10', questions: 20 },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Quizzes & Assignments</h2>
                <p className="text-gray-400">Track and take your course assessments.</p>
            </div>

            <GlassCard>
                <div className="grid gap-4">
                    {quizzes.map(quiz => (
                        <div key={quiz.id} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-white">{quiz.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                                    <span>{quiz.course}</span>
                                    {quiz.status === 'Pending' && <span className="flex items-center gap-1 text-yellow-400"><Clock className="w-3 h-3" /> Due: {quiz.dueDate}</span>}
                                    {quiz.status === 'Completed' && <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-3 h-3" /> Score: {quiz.score}</span>}
                                </div>
                            </div>
                            <div>
                                {quiz.status === 'Pending' ? (
                                    <Button variant="primary">Start Quiz</Button>
                                ) : (
                                    <Button variant="ghost">Review Answers</Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default StudentQuizzes;
