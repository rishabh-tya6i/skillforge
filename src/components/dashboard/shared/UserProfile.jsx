
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useUser } from '../../../context/UserContext';
import { User, Mail, Camera, Save, MapPin, Briefcase } from 'lucide-react';

const UserProfile = ({ user, isEditable = true }) => {
    const { updateUser } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        title: user.title || 'SkillForge Member',
        bio: user.bio || 'Passionate learner and creator.',
        location: user.location || 'Remote',
        avatar: user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=60'
    });

    const handleSave = () => {
        updateUser(user.id, formData);
        setIsEditing(false);
    };

    return (
        <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
            <GlassCard className="p-8 relative overflow-hidden">
                {/* Background Banner */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-cyan/20"></div>

                <div className="relative pt-12 text-center md:text-left md:flex md:items-end md:gap-8 mb-8">
                    {/* Avatar */}
                    <div className="relative inline-block group">
                        <div className="w-32 h-32 rounded-full border-4 border-[#0B1220] overflow-hidden shadow-2xl mx-auto md:mx-0 bg-gray-800">
                            <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        {isEditing && (
                            <button className="absolute bottom-2 right-2 p-2 bg-primary rounded-full text-white shadow-lg hover:bg-primary/80 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <div className="flex-1 mt-4 md:mt-0 pb-2">
                        {isEditing ? (
                            <div className="space-y-2 max-w-md">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xl font-bold text-white mb-2"
                                />
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Bio / Title"
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-sm text-gray-300"
                                />
                            </div>
                        ) : (
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-1">{formData.name}</h1>
                                <p className="text-primary font-medium">{formData.title}</p>
                            </div>
                        )}

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> {formData.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" /> Joined Jan 2026
                            </div>
                        </div>
                    </div>

                    {isEditable && (
                        <div className="mt-6 md:mt-0">
                            {isEditing ? (
                                <div className="flex gap-2 justify-center">
                                    <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    <Button variant="primary" onClick={handleSave}>
                                        <Save className="w-4 h-4 mr-2" /> Save Changes
                                    </Button>
                                </div>
                            ) : (
                                <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                            )}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                    {/* Left Column: Details */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Contact Info</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm">{formData.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio */}
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">About Me</h3>
                        {isEditing ? (
                            <textarea
                                rows="4"
                                value={formData.bio}
                                onChange={e => setFormData({ ...formData, bio: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-gray-300 focus:border-primary/50 outline-none"
                            />
                        ) : (
                            <p className="text-gray-300 leading-relaxed">
                                {formData.bio}
                            </p>
                        )}
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

export default UserProfile;
