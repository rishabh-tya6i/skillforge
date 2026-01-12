
import { motion } from 'framer-motion';

export const Input = ({ icon: Icon, label, className, ...props }) => {
    return (
        <div className={`relative group ${className}`}>
            {label && <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">{label}</label>}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    className={`
                    w-full bg-glass-light border border-glass-border rounded-xl px-4 py-3
                    ${Icon ? 'pl-12' : ''}
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-primary focus:shadow-neon
                    transition-all duration-300
                `}
                    {...props}
                />
            </div>
        </div>
    );
};
