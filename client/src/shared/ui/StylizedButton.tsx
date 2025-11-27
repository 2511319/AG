import React from 'react';

interface StylizedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'small';
    fullWidth?: boolean;
}

export function StylizedButton({
    children,
    className = '',
    variant = 'primary',
    fullWidth = false,
    ...props
}: StylizedButtonProps) {

    const baseClass = variant === 'small' ? 'btn-stylized-small' : 'btn-stylized';

    return (
        <button
            className={`${baseClass} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
