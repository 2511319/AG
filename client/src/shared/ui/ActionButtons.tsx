import type { Action } from '../types';
import { StylizedButton } from './StylizedButton';

interface ActionButtonsProps {
    actions?: Action[];
    onAction: (target: string) => void;
}

export function ActionButtons({ actions, onAction }: ActionButtonsProps) {
    if (!actions || actions.length === 0) return null;

    return (
        <div className="flex flex-col gap-3 mt-auto pb-2">
            {actions.map((action, index) => {
                const isPrimary = index === 0;
                // We can use variants later if we want different styles for primary/secondary
                return (
                    <StylizedButton
                        key={action.id}
                        onClick={() => onAction(action.target)}
                        fullWidth
                        className={!isPrimary ? "opacity-90" : ""}
                    >
                        {action.label}
                    </StylizedButton>
                );
            })}
        </div>
    );
}
