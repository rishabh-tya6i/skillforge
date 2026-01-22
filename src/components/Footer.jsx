
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] pt-20 pb-10 border-t border-glass-border relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-cyan rounded-lg flex items-center justify-center shadow-neon">
                                <Zap className="w-5 h-5 text-white fill-white" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-wide">
                                SkillForge
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering the next generation of tech leaders. Join our ecosystem of innovation and master the skills of tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/SkillforgeAU/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:shadow-neon transition-all duration-300" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/skillforgeaustralia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:shadow-neon transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {[
                        {
                            title: "Learning", links: [
                                { name: "Technology Courses", path: "/courses?category=Technology%20Courses" },
                                { name: "Course Internship", path: "/courses?category=Course%20Internship" },
                                { name: "Value Added Skills", path: "/courses?category=Value%20Added%20Skills" },
                                { name: "Mock Test", path: "/courses?category=Mock%20Test" }
                            ]
                        },
                        { title: "Company", links: [{ name: "About Us", path: "/about" }, { name: "Our Mentors", path: "/mentors" }, { name: "Success Stories", path: "/stories" }, { name: "Contact Us", path: "/contact" }] },
                        { title: "Legal", links: [{ name: "Privacy Policy", path: "/privacy" }, { name: "Terms of Service", path: "/terms" }, { name: "Cookie Policy", path: "/cookie-policy" }, { name: "Refund Policy", path: "/refund-policy" }] }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{col.title}</h3>
                            <ul className="space-y-4">
                                {col.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path || "#"} className="text-gray-400 hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block">
                                            {link.name || link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                    <p>
                        Copyright © {new Date().getFullYear()} SkillForge. All rights reserved.
                    </p>
                    <p className="flex items-center">
                        Developed by <a href="https://nexstarmedia.in/" target="_blank" rel="noopener noreferrer" className="text-primary ml-1 font-bold hover:underline">Nexstar</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
