
import { GlassCard } from '../components/ui/GlassCard';
import { Target, Lightbulb, Heart, Globe, Users, Trophy, Zap, ArrowRight, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';

const About = () => {
    return (
        <div className="min-h-screen bg-[#0B1220] pb-20 pt-20 overflow-hidden">
            {/* Hero Section */}
            <div className="relative py-20 px-6 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Democratizing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-white">
                            Tech Education
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        SkillForge is more than a platform; it's a movement. We are bridging the gap between ambition and achievement through world-class technology education.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-10 space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-4 border border-white/10">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To empower individuals worldwide with accessible, high-quality, and industry-relevant technology education, enabling them to shape the future.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-accent-purple/10 rounded-full blur-[80px] group-hover:bg-accent-purple/20 transition-colors" />
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent-purple mb-4 border border-white/10">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            A world where geographic and economic barriers no longer dictate access to premium education, creating a truly global workforce of innovators.
                        </p>
                    </GlassCard>
                </div>

                {/* Values */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Core Values</h2>
                        <p className="text-gray-400">The principles that drive every decision we make.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Excellence", icon: Trophy, desc: "We never settle for good enough. We strive for world-class quality in every course." },
                            { title: "Inclusivity", icon: Heart, desc: "Education is a right, not a privilege. We build for everyone, everywhere." },
                            { title: "Innovation", icon: Zap, desc: "We teach the future, so we must embody it. We constantly evolve our platform." }
                        ].map((val, idx) => (
                            <GlassCard key={idx} className="p-8 text-center hover:bg-white/5 transition-colors group">
                                <div className="w-14 h-14 mx-auto bg-white/5 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br from-white/10 to-transparent">
                                    <val.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                <p className="text-gray-400">{val.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <GlassCard className="p-12 border-white/5 bg-[#0F172A]/50">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Active Learners", value: "50,000+" },
                            { label: "Countries", value: "120+" },
                            { label: "Instructors", value: "200+" },
                            { label: "Course Completion", value: "94%" }
                        ].map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <p className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">{stat.value}</p>
                                <p className="text-primary font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* CTA */}
                <div className="text-center pb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to start your journey?</h2>
                    <Button variant="primary" className="px-10 py-4 text-lg shadow-neon group">
                        Join SkillForge Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default About;
