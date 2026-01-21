
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, MapPin, MessageSquare, Send,
    Linkedin, Facebook,
    Clock, Globe, CheckCircle, Zap
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

// --- Local Components for Premium Feel ---

const FloatingInput = ({ label, type = "text", icon: Icon, value, onChange, options = [] }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative group mb-6">
            <div className={`
                absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none z-10 flex items-center gap-2
                ${(focused || value) ? '-top-2 text-xs text-primary bg-[#0B1220] px-2 scale-100' : 'text-gray-400'}
            `}>
                {Icon && <Icon className={`w-4 h-4 ${(focused || value) ? 'text-primary' : 'text-gray-500'}`} />}
                <span>{label}</span>
            </div>

            {options.length > 0 ? (
                <select
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-glass-light border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(46,163,219,0.2)] transition-all duration-300 appearance-none cursor-pointer"
                >
                    <option value="" disabled></option>
                    {options.map(opt => (
                        <option key={opt} value={opt} className="bg-[#0F172A] text-gray-300">{opt}</option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    rows="5"
                    className="w-full bg-glass-light border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(46,163,219,0.2)] transition-all duration-300 resize-none"
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-glass-light border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(46,163,219,0.2)] transition-all duration-300"
                />
            )}
        </div>
    );
};

const ContactInfoCard = ({ icon: Icon, title, info, sub, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <GlassCard className="p-6 relative z-10 border-white/5 hover:border-primary/30 transition-colors h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(46,163,219,0.5)] transition-all duration-300">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-primary font-medium mb-1">{info}</p>
            <p className="text-sm text-gray-500">{sub}</p>
        </GlassCard>
    </motion.div>
);

const SocialButton = ({ icon: Icon, href, color }) => (
    <motion.a
        href={href}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-${color} hover:bg-${color}/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300`}
    >
        <Icon className="w-6 h-6" />
    </motion.a>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Replace these with your actual EmailJS credentials
        // - Create an account at https://www.emailjs.com/
        // - Connect your "skillforge.india91@gmail.com" account as an Email Service
        // - Create an Email Template that sends to "ichchatyagi@gmail.com"
        // - Get your Service ID, Template ID, and Public Key from the dashboard
        const YOUR_SERVICE_ID = 'service_9kjiek4';
        const YOUR_TEMPLATE_ID = 'template_y1opkh8';
        const YOUR_PUBLIC_KEY = 'ErhTJ1ZKhHyNbt6ur';

        const templateParams = {
            to_name: 'Admin',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email,
        };

        try {
            await emailjs.send(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                templateParams,
                YOUR_PUBLIC_KEY
            );
            setSubmitted(true);
        } catch (error) {
            console.error('FAILED...', error);
            alert("Failed to send message. Please try again or check console for details.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1220] relative overflow-x-hidden selection:bg-primary selection:text-white">

            {/* --- Animated Background Elements --- */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">

                {/* --- 1. Hero Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md mb-8"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">We are online and ready to help</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Let's Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-purple animate-gradient bg-300%">
                            Future Together
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Connect with the SkillForge team using the form below. Whether you're a student, instructor, or enterprise partner, we're here to accelerate your growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- 2. Advanced Contact Form --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <GlassCard className="p-8 md:p-10 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                            {/* Decorative Form Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleSubmit}
                                        className="relative z-10"
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                                            <p className="text-gray-400">Fill out the form and our team will get back to you within 24 hours.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FloatingInput
                                                label="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <FloatingInput
                                                label="Email Address"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FloatingInput
                                                label="Phone Number"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                            <FloatingInput
                                                label="Subject"
                                                options={["Course Inquiry", "Technical Support", "Enterprise Solutions", "Partnership", "Other"]}
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>

                                        <FloatingInput
                                            label="Your Message"
                                            type="textarea"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />

                                        <Button
                                            variant="primary"
                                            className="w-full py-5 text-lg shadow-neon group relative overflow-hidden"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2 relative z-10">
                                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 ring-4 ring-green-500/10">
                                            <CheckCircle className="w-12 h-12" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
                                        <p className="text-gray-400 max-w-sm mb-8">
                                            Thank you for reaching out. Our team has received your message and will respond shortly.
                                        </p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)}>
                                            Send Another Message
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </GlassCard>
                    </motion.div>

                    {/* --- 3. Info Cards & Social --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-5 space-y-8"
                    >
                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ContactInfoCard
                                icon={Mail}
                                title="Email Support"
                                info="Info@skillforge.com.au"
                                sub="24/7 Response Time"
                                delay={0.2}
                            />
                            <ContactInfoCard
                                icon={Phone}
                                title="Phone Support"
                                info="+61280067926"
                                sub="Mon-Fri, 9am - 6pm EST"
                                delay={0.3}
                            />
                            <ContactInfoCard
                                icon={MessageSquare}
                                title="Live Chat"
                                info="Available Now"
                                sub="Average wait: 2 mins"
                                delay={0.4}
                            />
                            <ContactInfoCard
                                icon={Clock}
                                title="Working Hours"
                                info="9:00 AM - 6:00 PM"
                                sub="Weekend Support Available"
                                delay={0.5}
                            />
                        </div>

                        {/* --- 4. Location Section (Stylized Map Placeholder) --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group"
                        >
                            {/* Fake Dark Map Styled Background */}
                            <div className="absolute inset-0 bg-[#1e293b] flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                                <div className="absolute top-0 right-0 w-Full h-full bg-gradient-to-t from-[#0B1220] to-transparent" />
                            </div>

                            {/* Pin Overlay */}
                            <GlassCard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 flex items-center gap-4 bg-[#0F172A]/90 backdrop-blur-xl border-primary/30">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-pulse">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">SkillForge HQ</p>
                                    <p className="text-xs text-gray-400">903/50 Clarence St, Sydney, NSW 2000, AU</p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* --- 5. Social Connect --- */}
                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-primary" /> Connect on Social
                            </h3>
                            <div className="flex gap-4">
                                <SocialButton icon={Facebook} href="https://www.facebook.com/SkillforgeAU/" color="blue-500" />
                                <SocialButton icon={Linkedin} href="https://www.linkedin.com/company/skillforgeaustralia/" color="blue-700" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div >
    );
};

export default Contact;
