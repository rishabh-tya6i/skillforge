
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, User, Zap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // Default role 'student' is handled by backend if not sent, or we can send it explicitly
        const result = await register(name, email, password, 'student');

        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B1220] px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[100px]" />
            </div>

            <GlassCard className="w-full max-w-md p-8 md:p-10 relative z-10 border-white/10">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 text-white border border-white/10">
                        <Zap className="w-6 h-6 text-primary fill-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-400">Join thousands of learners today</p>
                </div>

                {error && (
                    <div className="mb-4 text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        label="Full Name"
                        icon={User}
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email Address"
                        icon={Mail}
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        icon={Lock}
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button variant="gradient" type="submit" className="w-full py-4 text-lg mt-4 shadow-neon" disabled={isLoading}>
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-primary font-bold hover:text-glow transition-all">Log In</Link>
                </div>
            </GlassCard>
        </div>
    );
};

export default Signup;
