import React, { useEffect } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { Quote, Briefcase, TrendingUp, Building } from 'lucide-react';

const SuccessStories = () => {

    const stories = [
        {
            name: "Alex Johnson",
            course: "DevOps Bootcamp",
            oldRole: "IT Support Specialist",
            newRole: "DevOps Engineer",
            company: "Microsoft",
            salary_hike: "120%",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            quote: "SkillForge didn't just teach me tools; they taught me how to think like an engineer. The hands-on projects were exactly what I needed to crack the interview."
        },
        {
            name: "Priya Patel",
            course: "Data Science Specialization",
            oldRole: "Marketing Analyst",
            newRole: "Data Scientist",
            company: "Amazon",
            salary_hike: "85%",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
            quote: "The mentorship I received was invaluable. My mentor guided me through my capstone project, which became the highlight of my portfolio."
        },
        {
            name: "David Kim",
            course: "Cybersecurity Masterclass",
            oldRole: "Network Administrator",
            newRole: "Security Analyst",
            company: "Cloudflare",
            salary_hike: "95%",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            quote: "Transitioning to cybersecurity seemed daunting, but the structured path at SkillForge made it manageable. I felt job-ready from day one."
        },
        {
            name: "Maria Garcia",
            course: "Full Stack Development",
            oldRole: "Student",
            newRole: "Frontend Developer",
            company: "Airbnb",
            salary_hike: "N/A (First Job)",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
            quote: "I went from zero coding knowledge to a job at a top tech company in 6 months. The curriculum is intense but absolutely worth it."
        }
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-white pt-24 pb-20">
            {/* Hero */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Student <span className="text-primary">Success Stories</span></h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Join thousands of students who have transformed their careers with SkillForge.
                </p>
            </div>

            {/* Stats */}
            <div className="max-w-5xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8 text-center border-white/5">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2">92%</h3>
                        <p className="text-gray-400">Hiring Rate within 6 months</p>
                    </GlassCard>
                    <GlassCard className="p-8 text-center border-white/5">
                        <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2">65%</h3>
                        <p className="text-gray-400">Average Salary Hike</p>
                    </GlassCard>
                    <GlassCard className="p-8 text-center border-white/5">
                        <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                            <Building className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                        <p className="text-gray-400">Hiring Partners</p>
                    </GlassCard>
                </div>
            </div>

            {/* Stories Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((story, index) => (
                    <GlassCard key={index} className="p-8 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors border-white/5">
                        <div className="w-full md:w-32 flex-shrink-0 flex flex-col items-center">
                            <img
                                src={story.image}
                                alt={story.name}
                                className="w-24 h-24 rounded-full object-cover border-2 border-primary/50 mb-4"
                            />
                            <div className="text-center">
                                <p className="font-bold text-white text-sm">{story.name}</p>
                                <p className="text-xs text-gray-500">{story.course}</p>
                            </div>
                        </div>

                        <div className="flex-1">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-gray-300 italic mb-6 leading-relaxed">"{story.quote}"</p>

                            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Previous Role</p>
                                    <p className="text-sm font-medium text-white">{story.oldRole}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">New Role</p>
                                    <p className="text-sm font-bold text-primary">{story.newRole} <span className="text-white font-normal">at {story.company}</span></p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;
