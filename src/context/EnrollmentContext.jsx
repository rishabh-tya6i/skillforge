import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useAuth } from './AuthContext';

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
    const { user } = useAuth();
    const [myEnrollments, setMyEnrollments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMyEnrollments = async () => {
        if (!user || user.role !== 'student') return;
        try {
            setLoading(true);
            const { data } = await api.get('/enrollments/my');
            setMyEnrollments(data);
        } catch (error) {
            console.error("Failed to fetch enrollments", error);
        } finally {
            setLoading(false);
        }
    };

    const enrollCourse = async (courseId) => {
        try {
            const { data } = await api.post('/enrollments', { courseId });
            setMyEnrollments([...myEnrollments, data]);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    const updateProgress = async (courseId, lessonId) => {
        try {
            const { data } = await api.put(`/enrollments/${courseId}/progress`, { lessonId });
            // Update local state to reflect progress
            setMyEnrollments(prev => prev.map(enr =>
                enr.course._id === courseId ? { ...enr, ...data } : enr
            ));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    useEffect(() => {
        if (user) fetchMyEnrollments();
    }, [user]);

    return (
        <EnrollmentContext.Provider value={{
            myEnrollments,
            loading,
            enrollCourse,
            updateProgress,
            fetchMyEnrollments
        }}>
            {children}
        </EnrollmentContext.Provider>
    );
};

export const useEnrollments = () => useContext(EnrollmentContext);
