import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Link, Check, X, RefreshCw, Copy, Eye, EyeOff } from 'lucide-react';

const AdminIntegrations = () => {
    const [integrations, setIntegrations] = useState([
        { id: 1, name: 'Zoom Meeting', status: 'Connected', icon: '📹', lastSync: '10 mins ago' },
        { id: 2, name: 'Google Calendar', status: 'Connected', icon: '📅', lastSync: '1 hour ago' },
        { id: 3, name: 'Salesforce CRM', status: 'Disconnected', icon: '☁️', lastSync: 'Never' },
    ]);

    const [apiKey, setApiKey] = useState('sk_live_51Mzxxxxxxxxx...');
    const [showKey, setShowKey] = useState(false);

    const toggleStatus = (id) => {
        setIntegrations(integrations.map(int =>
            int.id === id ? { ...int, status: int.status === 'Connected' ? 'Disconnected' : 'Connected' } : int
        ));
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Integrations & API</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Active Integrations */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Link className="w-5 h-5 text-blue-400" />
                        Connected Services
                    </h3>
                    <div className="space-y-4">
                        {integrations.map(int => (
                            <div key={int.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">{int.icon}</div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{int.name}</p>
                                        <p className="text-xs text-gray-400">Sync: {int.lastSync}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs px-2 py-1 rounded-full ${int.status === 'Connected' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}>
                                        {int.status}
                                    </span>
                                    <button
                                        onClick={() => toggleStatus(int.id)}
                                        className="p-1.5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded"
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* API Key Management */}
                <GlassCard className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">API Configuration</h3>
                    <p className="text-sm text-gray-400 mb-6">Manage your API keys to access Skillforge resources programmatically.</p>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider block mb-2">Secret Key</label>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm relative group">
                                    {showKey ? apiKey : '•'.repeat(apiKey.length)}
                                    <button
                                        onClick={() => setShowKey(!showKey)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                    >
                                        {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                <button className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-xs text-yellow-500/80 mt-2">Never share your secret key. It provides full access to your account.</p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <button className="w-full py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors text-sm font-medium">
                                Roll Key (Revoke Current)
                            </button>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AdminIntegrations;
