import React from 'react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    fullWidth?: boolean;
}

export function GoldButton({
    children,
    className = '',
    variant = 'primary',
    fullWidth = false,
    ...props
}: GoldButtonProps) {

    // Base classes are handled by .btn-gold in index.css
    // We can add variants here if needed later

    return (
        <button
            className={`btn-gold ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
