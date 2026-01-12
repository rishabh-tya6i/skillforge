
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { useFinance } from '../../../context/FinanceContext';
import { Button } from '../../ui/Button';
import { DollarSign, TrendingUp, Download, Clock } from 'lucide-react';

const InstructorFinance = ({ user }) => {
    const { transactions, requestPayout } = useFinance();

    // Filter transactions for this instructor
    // For Purchases: In a real app we'd match course.instructorId. Here we'll simulate.
    // For Payouts: Match userId

    // Simulating earnings: All purchases * 0.8
    const allPurchases = transactions.filter(t => t.type === 'purchase');
    // In a real app, filtering by my courses would happen here. 
    // For demo, let's assume all purchases are for this instructor's courses to show data.
    const totalEarnings = allPurchases.reduce((sum, t) => sum + t.amount, 0) * 0.8;

    const myPayouts = transactions.filter(t => t.type === 'payout' && t.userId === user.id);
    const totalWithdrawn = myPayouts
        .filter(t => t.status === 'Completed')
        .reduce((sum, t) => sum + t.amount, 0);

    const availableBalance = totalEarnings - totalWithdrawn - myPayouts.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0);

    const handleWithdraw = () => {
        if (availableBalance > 0) {
            requestPayout(user.id, availableBalance);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl">
                            <DollarSign className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Total Earnings</p>
                            <h3 className="text-2xl font-bold text-white">${totalEarnings.toFixed(2)}</h3>
                        </div>
                    </div>
                </GlassCard>
                <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-xl">
                            <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Available Balance</p>
                            <h3 className="text-2xl font-bold text-white">${availableBalance.toFixed(2)}</h3>
                        </div>
                    </div>
                </GlassCard>
                <GlassCard className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-sm mb-1">Next Payout</p>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">On Request</span>
                            <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">Instant</span>
                        </div>
                    </div>
                    <Button onClick={handleWithdraw} disabled={availableBalance <= 0} variant="primary">
                        Withdraw Funds
                    </Button>
                </GlassCard>
            </div>

            {/* Payout History */}
            <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Payout History</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-gray-400">
                        <thead className="text-xs uppercase bg-white/5 text-gray-300">
                            <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Amount</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {myPayouts.map((tx) => (
                                <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm">{tx.id}</td>
                                    <td className="px-6 py-4 text-sm">{new Date(tx.date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-white font-medium">${tx.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {tx.status === 'Pending' ? <Clock className="w-4 h-4 text-yellow-400" /> : <CheckCircle className="w-4 h-4 text-green-400" />}
                                            <span className={`px-2 py-1 rounded text-xs ${tx.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                                                }`}>
                                                {tx.status}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {myPayouts.length === 0 && (
                        <div className="text-center py-8 text-gray-500">No payout history found.</div>
                    )}
                </div>
            </GlassCard>
        </div>
    );
};

// Missing icon fix
const CheckCircle = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export default InstructorFinance;
