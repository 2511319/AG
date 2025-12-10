import type { Action } from '../types';
import { ActionButtons } from './ActionButtons';
import { StonePanel } from './StonePanel';
import { StylizedButton } from './StylizedButton';
import { motion } from 'framer-motion';

interface ScreenLayoutProps {
    title: string;
    children: React.ReactNode;
    actions?: Action[];
    onAction: (target: string) => void;
    hideTitle?: boolean;
    backTarget?: string;
    variant?: 'default' | 'combat' | 'immersive';
}

export function ScreenLayout({ title, children, actions, onAction, hideTitle, backTarget, variant = 'default' }: ScreenLayoutProps) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`flex-1 flex flex-col gap-4 h-full ${variant === 'combat' ? 'bg-red-950/10' : ''}`}
        >
            {!hideTitle && (
                <div className="mt-1 relative flex items-center justify-center">
                    <motion.h2
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl font-bold text-gold-gradient leading-tight filter drop-shadow-md"
                    >
                        {title}
                    </motion.h2>
                </div>
            )}

            <StonePanel className="flex-1" fullHeight padding={variant !== 'immersive'}>
                {children}
            </StonePanel>

            <ActionButtons actions={actions} onAction={onAction} />

            {backTarget && (
                <div className="flex justify-center pb-1">
                    <StylizedButton
                        variant="small"
                        onClick={() => onAction(backTarget)}
                        className="min-w-[120px]"
                    >
                        Назад
                    </StylizedButton>
                </div>
            )}
        </motion.main>
    );
}

