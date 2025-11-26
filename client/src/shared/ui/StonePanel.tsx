import React from 'react';

interface StonePanelProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    fullHeight?: boolean;
}

export function StonePanel({ children, className = '', title, fullHeight = false }: StonePanelProps) {
    return (
        <div className={`panel-stone flex flex-col ${fullHeight ? 'h-full' : ''} ${className}`}>
            {title && (
                <div className="border-b border-stone-800 bg-stone-950/50 p-3 text-center">
                    <h2 className="text-gold-gradient text-lg tracking-widest uppercase">{title}</h2>
                </div>
            )}
            <div className={`p-4 ${fullHeight ? 'flex-1 overflow-y-auto' : ''}`}>
                {children}
            </div>
        </div>
    );
}
