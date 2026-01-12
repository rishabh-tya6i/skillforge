
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, Zap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const result = await login(email, password);

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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-700" />
            </div>

            <GlassCard className="w-full max-w-md p-8 md:p-10 relative z-10 border-white/10">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-cyan rounded-xl flex items-center justify-center shadow-neon mx-auto mb-6">
                        <Zap className="w-6 h-6 text-white fill-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Enter your credentials to access your account</p>
                </div>

                {error && (
                    <div className="mb-4 text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="flex justify-end">
                        <Link to="#" className="text-sm text-primary hover:text-primary-light">Forgot Password?</Link>
                    </div>

                    <Button variant="primary" type="submit" className="w-full py-4 text-lg shadow-neon" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/signup" className="text-primary font-bold hover:text-glow transition-all">Sign Up</Link>
                </div>
            </GlassCard>
        </div>
    );
};

export default Login;
