import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check for persisted login
    useEffect(() => {
        const storedUser = localStorage.getItem('skillforge_user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.token) {
                    setUser(parsedUser);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Failed to parse stored user", error);
                localStorage.removeItem('skillforge_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });

            // Explicitly store necessary data for security and consistency
            const userData = {
                _id: data._id,
                name: data.name,
                email: data.email,
                role: data.role,
                token: data.token
            };

            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem('skillforge_user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const register = async (name, email, password, role) => {
        try {
            const { data } = await api.post('/auth/register', { name, email, password, role });

            const userData = {
                _id: data._id,
                name: data.name,
                email: data.email,
                role: data.role,
                token: data.token
            };

            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem('skillforge_user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Registration failed'
            };
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('skillforge_user');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
