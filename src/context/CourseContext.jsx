import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch All Courses (Public)
    const fetchCourses = async () => {
        try {
            setLoading(true);
            const { data } = await api.get('/courses');
            setCourses(data.courses);
        } catch (error) {
            console.error("Failed to fetch courses", error);
        } finally {
            setLoading(false);
        }
    };

    const addCourse = async (courseData) => {
        try {
            const { data } = await api.post('/courses', courseData);
            setCourses([...courses, data]);
            return { success: true, course: data };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    const updateCourse = async (id, updates) => {
        try {
            const { data } = await api.put(`/courses/${id}`, updates);
            setCourses(courses.map(c => c._id === id ? data : c));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    const deleteCourse = async (id) => {
        try {
            await api.delete(`/courses/${id}`);
            setCourses(courses.filter(c => c._id !== id));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message };
        }
    };

    // Note: Enroll logic moved to separate EnrollmentContext to match backend Architecture,
    // but we can expose a helper here if needed or separate it. 
    // For now, let's keep it clean: CourseContext handles Course CRUD.

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <CourseContext.Provider value={{
            courses,
            loading,
            fetchCourses,
            addCourse,
            updateCourse,
            deleteCourse
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourses = () => useContext(CourseContext);
