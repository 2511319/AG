import type { Action } from '../types';
import { ActionButtons } from './ActionButtons';
import { StonePanel } from './StonePanel';

interface ScreenLayoutProps {
    title: string;
    children: React.ReactNode;
    actions?: Action[];
    onAction: (target: string) => void;
}

export function ScreenLayout({ title, children, actions, onAction }: ScreenLayoutProps) {
    return (
        <main className="flex-1 flex flex-col px-4 py-3 gap-4 h-full">
            <div className="mt-1 text-center">
                <h2 className="text-xl font-bold text-gold-gradient leading-tight filter drop-shadow-md">
                    {title}
                </h2>
            </div>

            <StonePanel className="flex-1" fullHeight>
                {children}
            </StonePanel>

            <ActionButtons actions={actions} onAction={onAction} />
        </main>
    );
}
