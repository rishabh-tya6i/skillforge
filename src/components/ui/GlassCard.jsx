
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const GlassCard = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <motion.div
            className={twMerge(
                "bg-glass-light backdrop-blur-lg border border-glass-border rounded-2xl p-6 relative overflow-hidden",
                hoverEffect && "hover:border-primary/50 hover:shadow-neon transition-all duration-300 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {/* Subtle Mesh Gradient Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
