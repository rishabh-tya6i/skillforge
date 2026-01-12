
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useFinance } from '../context/FinanceContext';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Trash2, ArrowRight, ShoppingCart, ShieldCheck, CreditCard, X, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart, total } = useCart();
    const { processPurchase } = useFinance();
    const { enrollStudent } = useCourses();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCheckout = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        setIsCheckoutOpen(true);
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 1. Record Transaction
        processPurchase(user.id, cart, total);

        // 2. Enroll Student in all bought courses
        cart.forEach(course => enrollStudent(course.id, user.id));

        // 3. Cleanup
        clearCart();
        setIsProcessing(false);
        setIsCheckoutOpen(false);
        navigate('/dashboard'); // Go to dashboard to see new courses
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-[#0B1220] relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Shopping Cart</h1>
                    <p className="text-gray-400">Review your selected courses and checkout.</p>
                </header>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <GlassCard key={item.id} className="p-4 flex gap-6 items-center group">
                                    <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block relative">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-white text-lg truncate group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-sm text-gray-400">{item.category} • {item.lessons} lessons</p>
                                            </div>
                                            <span className="font-bold text-accent-cyan text-xl ml-4">${item.price}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-500 hover:text-red-400 text-sm flex items-center transition-colors px-2 py-1 rounded hover:bg-white/5"
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <GlassCard className="p-8 sticky top-28 space-y-6">
                                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Order Summary</h3>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="text-white">${total}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Discount</span>
                                        <span className="text-green-400">-$0</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                        <span className="text-lg font-bold text-white">Total</span>
                                        <span className="text-3xl font-bold text-primary">${total}</span>
                                    </div>
                                </div>

                                <Button onClick={handleCheckout} variant="gradient" className="w-full py-4 text-lg shadow-neon mt-4 group">
                                    Checkout Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                                    <ShieldCheck className="w-4 h-4" /> Secure SSL Encryption
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                ) : (
                    <GlassCard className="text-center py-24 flex flex-col items-center justify-center border-dashed border-2 border-white/10">
                        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-600">
                            <ShoppingCart className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
                        <p className="text-gray-400 mb-8 max-w-sm">Looks like you haven't discovered our premium courses yet.</p>
                        <Link to="/courses">
                            <Button variant="primary">Browse Courses</Button>
                        </Link>
                    </GlassCard>
                )}
            </div>

            {/* Checkout Modal */}
            {isCheckoutOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
                    <GlassCard className="w-full max-w-md p-0 relative animate-in zoom-in-95 overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-primary" /> Secure Checkout
                            </h3>
                            <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handlePayment} className="p-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Expiry</label>
                                    <input type="text" placeholder="MM/YY" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">CVC</label>
                                    <input type="text" placeholder="123" className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" required />
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="flex justify-between items-center mb-6 text-sm">
                                    <span className="text-gray-400">Total Amount:</span>
                                    <span className="text-xl font-bold text-white">${total}</span>
                                </div>

                                <Button type="submit" variant="primary" className="w-full py-3" disabled={isProcessing}>
                                    {isProcessing ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        `Pay $${total}`
                                    )}
                                </Button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            )}
        </div>
    );
};

export default Cart;
