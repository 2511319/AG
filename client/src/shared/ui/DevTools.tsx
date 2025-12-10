import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Action } from '../types';

interface DevToolsProps {
    actions?: Action[];
    onAction: (target: string) => void;
}

export function DevTools({ actions, onAction }: DevToolsProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!actions || actions.length === 0) return null;

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-20 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border transition-colors ${isOpen
                        ? 'bg-red-900/80 border-red-500 text-red-200'
                        : 'bg-stone-900/50 border-stone-700 text-stone-500 hover:text-stone-300'
                    }`}
                title="Инструменты разработчика"
            >
                {isOpen ? '✕' : '🛠️'}
            </motion.button>

            {/* Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-32 right-4 z-50 w-64 bg-stone-950/95 border border-stone-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm"
                    >
                        <div className="p-2 border-b border-stone-800 bg-stone-900/50 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Dev Actions</span>
                            <span className="text-[9px] text-stone-600 font-mono">DEBUG MODE</span>
                        </div>
                        <div className="p-2 flex flex-col gap-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {actions.map((action) => (
                                <button
                                    key={action.id}
                                    onClick={() => {
                                        onAction(action.target);
                                        // Optional: close on action
                                        // setIsOpen(false); 
                                    }}
                                    className="text-left px-3 py-2 rounded border border-stone-800 bg-stone-900/50 hover:bg-stone-800 hover:border-stone-600 text-[11px] text-stone-300 transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-gold-dim transition-colors" />
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
