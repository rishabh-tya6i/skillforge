
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { FinanceProvider } from './context/FinanceContext';
import { CourseProvider } from './context/CourseContext';
import { EnrollmentProvider } from './context/EnrollmentContext';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-gray-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <UserProvider>
            <CourseProvider>
              <FinanceProvider>
                <EnrollmentProvider>
                  <Router>
                    <Layout>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:id" element={<CourseDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </Layout>
                  </Router>
                </EnrollmentProvider>
              </FinanceProvider>
            </CourseProvider>
          </UserProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
