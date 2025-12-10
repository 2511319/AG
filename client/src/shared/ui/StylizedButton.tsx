import React from 'react';
import { motion } from 'framer-motion';

interface StylizedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'small' | 'ghost';
    fullWidth?: boolean;
}

export function StylizedButton({
    children,
    className = '',
    variant = 'primary',
    fullWidth = false,
    ...props
}: StylizedButtonProps) {

    const baseClass = variant === 'small' ? 'btn-stylized-small' : 
                      variant === 'ghost' ? 'btn-stylized-ghost' : 'btn-stylized';

    return (
        <motion.button
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClass} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props as any}
        >
            {children}
        </motion.button>
    );
}

