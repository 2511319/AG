import type { Action } from '../types';
import { ActionButtons } from './ActionButtons';
import { StonePanel } from './StonePanel';
import { StylizedButton } from './StylizedButton';

interface ScreenLayoutProps {
    title: string;
    children: React.ReactNode;
    actions?: Action[];
    onAction: (target: string) => void;
    hideTitle?: boolean;
    backTarget?: string;
}

export function ScreenLayout({ title, children, actions, onAction, hideTitle, backTarget }: ScreenLayoutProps) {
    return (
        <main className="flex-1 flex flex-col px-4 py-3 gap-4 h-full">
            {!hideTitle && (
                <div className="mt-1 relative flex items-center justify-center">
                    <h2 className="text-xl font-bold text-gold-gradient leading-tight filter drop-shadow-md">
                        {title}
                    </h2>
                </div>
            )}

            <StonePanel className="flex-1" fullHeight>
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
        </main>
    );
}
