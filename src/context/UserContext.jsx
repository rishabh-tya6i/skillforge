import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useAuth } from './AuthContext';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { user: authUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch Current User Profile
    const fetchProfile = async () => {
        if (!authUser) return;
        try {
            setLoading(true);
            const { data } = await api.get(`/users/${authUser._id}`); // Using ID for now as we don't have a /profile/me yet
            setCurrentUser(data);
        } catch (error) {
            console.error("Failed to fetch profile", error);
        } finally {
            setLoading(false);
        }
    };

    // Admin: Fetch All Users
    const fetchUsers = async (page = 1) => {
        try {
            setLoading(true);
            const { data } = await api.get(`/users?pageNumber=${page}`);
            setUsers(data.users);
            return data;
        } catch (error) {
            console.error("Failed to fetch users", error);
            return { users: [] };
        } finally {
            setLoading(false);
        }
    };

    // Admin: Add User (Register)
    const addUser = async (userData) => {
        try {
            const { data } = await api.post('/auth/register', userData);
            setUsers([...users, data]);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    // Admin: Update User
    const updateUser = async (id, updates) => {
        try {
            const { data } = await api.put(`/users/${id}`, updates);
            setUsers(users.map(u => u._id === id ? data : u));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    // Admin: Delete User
    const deleteUser = async (id) => {
        try {
            await api.delete(`/users/${id}`);
            setUsers(users.filter(u => u._id !== id));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    // Initial load
    useEffect(() => {
        if (authUser) {
            fetchProfile();
            if (authUser.role === 'admin') {
                fetchUsers();
            }
        }
    }, [authUser]);

    return (
        <UserContext.Provider value={{
            users,
            currentUser,
            loading,
            fetchUsers,
            addUser,
            updateUser,
            deleteUser
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
