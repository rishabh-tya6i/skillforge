
import { useState, useEffect } from 'react';
import logoImage from '../assets/LOGO.png';

// ... (in Navbar component)

{/* Logo */ }
<Link to="/" className="flex items-center group">
    <img
        src={logoImage}
        alt="SkillForge Logo"
        className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
    />
</Link>
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingCart, User, Search, ChevronDown, LogOut, Settings, LayoutDashboard, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const { cart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const coursesDropdown = [
        { title: "Technology", items: ["Full Stack Dev", "Frontend (React)", "Backend (Node)", "Data Science", "AI & ML"] },
        { title: "Career Tracks", items: ["Full Stack Lead", "Data Scientist", "AI Engineer", "Product Manager"] },
        { title: "Internships", items: ["Web Development", "Data Analytics", "Software Engineering"] },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${isScrolled ? 'top-4' : 'top-0'}
            `}
        >
            <div className={`
                max-w-7xl mx-auto px-6 h-20 flex items-center justify-between
                bg-white/90 backdrop-blur-xl border border-white/20 rounded-full shadow-lg
                transition-all duration-500
            `}>
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src={logoImage}
                        alt="SkillForge Logo"
                        className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link to="/" className="font-medium transition-colors text-gray-700 hover:text-primary">Home</Link>

                    {/* Animated Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('courses')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center font-medium py-2 transition-colors text-gray-700 hover:text-primary">
                            Courses <ChevronDown className="ml-1 w-4 h-4" />
                        </button>

                        <AnimatePresence>
                            {activeDropdown === 'courses' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] bg-white/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8 overflow-hidden z-50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                                    {coursesDropdown.map((cat, idx) => (
                                        <div key={idx} className="space-y-4 relative z-10">
                                            <h3 className="font-bold text-primary text-sm uppercase tracking-wider border-b border-gray-200 pb-2">{cat.title}</h3>
                                            <ul className="space-y-2">
                                                {cat.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link to="/courses" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block">
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/about" className="font-medium transition-colors text-gray-700 hover:text-primary">About</Link>
                    <Link to="/contact" className="font-medium transition-colors text-gray-700 hover:text-primary">Contact</Link>

                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors text-gray-500 group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Find a course..."
                            className="pl-10 pr-4 py-2 rounded-full border text-sm focus:outline-none transition-all w-48 focus:w-64 bg-gray-50 border-gray-200 text-gray-900 focus:border-primary focus:bg-white"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center space-x-6">
                    <Link to="/cart" className="relative group">
                        <div className="p-2 rounded-full transition-colors hover:bg-gray-100">
                            <ShoppingCart className="w-6 h-6 transition-colors text-gray-600 group-hover:text-primary" />
                        </div>
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-accent-purple text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {isAuthenticated ? (
                        <div className="relative group">
                            <button className="flex items-center space-x-3 p-1 rounded-full border transition-colors pr-4 border-gray-200 hover:border-primary/50 bg-gray-50">
                                <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full border border-primary" />
                                <span className="font-medium text-sm text-gray-700">{user.name}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                                <div className="px-4 py-2 border-b border-gray-100 mb-2">
                                    <p className="text-sm text-gray-500">Signed in as</p>
                                    <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
                                </div>
                                <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">
                                    <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                                </Link>
                                <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">
                                    <Settings className="w-4 h-4 mr-2" /> Settings
                                </Link>
                                <button onClick={logout} className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50 text-left transition-colors">
                                    <LogOut className="w-4 h-4 mr-2" /> Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-3">
                            <Link to="/login">
                                <Button variant="ghost" className="text-sm px-4 text-gray-600 hover:text-primary hover:bg-gray-100">Log In</Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="primary" className="text-sm px-6 py-2 shadow-none hover:shadow-lg">Sign Up</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
