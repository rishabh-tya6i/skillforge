import { Link } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

const Mentors = () => {

    const mentors = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Senior AI Researcher",
            company: "Former Google DeepMind",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "Dr. Mitchell has over 15 years of experience in Artificial Intelligence. She specializes in deep learning and has published numerous papers in top-tier conferences.",
            expertise: ["Artificial Intelligence & Machine Learning", "AI & Machine Learning Internship"]
        },
        {
            name: "James Rodriguez",
            role: "Principal DevOps Engineer",
            company: "Netflix",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
            bio: "James is a cloud infrastructure expert who has helped scale systems for millions of users. He is passionate about automation and infrastructure as code.",
            expertise: ["DevOps", "DevOps Internship"]
        },
        {
            name: "Emily Chen",
            role: "Lead Data Scientist",
            company: "Spotify",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            bio: "Emily leads data initiatives that power personalized recommendations. She loves teaching actionable data skills to aspiring analysts.",
            expertise: ["Data Analytics", "Power BI", "Data Analytics Internship"]
        },
        {
            name: "Michael Chang",
            role: "Cybersecurity Consultant",
            company: "IBM Security",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            bio: "With a background in ethical hacking, Michael helps Fortune 500 companies secure their networks. He brings real-world war stories to his teaching.",
            expertise: ["Cybersecurity", "Cybersecurity Internship"]
        }
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-white pt-24 pb-20">
            {/* Hero */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Your <span className="text-primary">Mentors</span></h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Learn from industry veterans who have built systems at the world's leading tech companies.
                </p>
            </div>

            {/* Mentors Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mentors.map((mentor, index) => (
                    <GlassCard key={index} className="p-6 flex flex-col items-center text-center group border-white/5 hover:border-primary/30 transition-all duration-500">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                            <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 group-hover:border-primary transition-colors"
                            />
                            <div className="absolute bottom-0 right-0 bg-[#0F172A] p-2 rounded-full border border-white/10">
                                <span className="text-xs font-bold text-primary">Top 1%</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                        <p className="text-primary text-sm font-medium mb-1">{mentor.role}</p>
                        <p className="text-gray-500 text-xs mb-4">{mentor.company}</p>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                            {mentor.bio}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {mentor.expertise.map((skill, i) => (
                                <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/5 rounded text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </GlassCard>
                ))}
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto mt-24 text-center px-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">Become an Instructor</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                        Are you an expert in your field? Join our network of mentors and help shape the next generation of tech talent.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" className="relative z-10">Apply as Mentor</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Mentors;
