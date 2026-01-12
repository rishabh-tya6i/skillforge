import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend URL
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem('skillforge_user');
        if (user) {
            const { token } = JSON.parse(user);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Handle 401 (Optional logout logic)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('skillforge_user');
            // window.location.href = '/login'; // Optional: Redirect
        }
        return Promise.reject(error);
    }
);

export default api;
