import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useAuth } from './AuthContext';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const { user } = useAuth();
    const [transactions, setTransactions] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch Transactions
    const fetchTransactions = async () => {
        if (!user) return;
        try {
            setLoading(true);
            const { data } = await api.get('/payments/my');
            setTransactions(data);
        } catch (error) {
            console.error("Failed to fetch transactions");
        } finally {
            setLoading(false);
        }
    };

    // Fetch Dashboard Stats (Admin/Instructor)
    const fetchStats = async () => {
        if (!user) return;
        const endpoint = user.role === 'admin' ? '/analytics/admin' : '/analytics/instructor';
        try {
            const { data } = await api.get(endpoint);
            setStats(data);
        } catch (error) {
            console.error("Failed to fetch stats");
        }
    };

    const processPurchase = async (cartItems, totalAmount) => {
        // Mocking a purchase loop for now: one txn per item or bulk? 
        // Backend `recordPurchase` takes 1 courseId.
        // Let's loop for now (naive implementation)
        try {
            const promises = cartItems.map(item =>
                api.post('/payments/purchase', {
                    courseId: item.id,
                    amount: item.price
                })
            );
            await Promise.all(promises);
            fetchTransactions(); // Refresh
            return true;
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {
        if (user) {
            fetchTransactions();
            if (['admin', 'instructor'].includes(user.role)) {
                fetchStats();
            }
        }
    }, [user]);

    return (
        <FinanceContext.Provider value={{
            transactions,
            stats,
            loading,
            processPurchase,
            fetchTransactions
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

export const useFinance = () => useContext(FinanceContext);
