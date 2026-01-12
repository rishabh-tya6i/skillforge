
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#238ac2] transition-colors",
        secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        neon: "bg-transparent text-primary border border-primary hover:bg-primary/10",
        gradient: "bg-gradient-to-r from-primary to-accent-cyan text-white hover:brightness-110" // Gradient can get slightly brighter or darker, brightness is simple
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};
