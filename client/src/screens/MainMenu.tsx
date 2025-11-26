import type { Screen } from '../shared/types';
import { ScreenLayout } from '../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function OnboardingScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <p className="text-sm text-slate-200 whitespace-pre-wrap">
                {screen.description}
            </p>
        </ScreenLayout>
    );
}

export function MainMenuScreen({ screen, onAction }: ScreenProps) {
    // This is now the "Profile Hub"
    const menuItems = [
        { id: 'journal_hub', label: 'Архив знаний', icon: '📚', desc: 'Лор и правила' },
        { id: 'settings', label: 'Настройки', icon: '⚙️', desc: 'Конфигурация' },
        { id: 'help', label: 'Справка', icon: '❓', desc: 'Гайд и FAQ' },
        { id: 'onboarding', label: 'Интро', icon: '🎬', desc: 'Посмотреть вступление' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col gap-4 h-full">
                {/* Profile Header Card */}
                <div className="p-4 bg-stone-950/80 rounded border border-gold-dim flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-stone-800 border-2 border-gold-bright flex items-center justify-center text-3xl shadow-lg">
                        🧙‍♂️
                    </div>
                    <div>
                        <div className="text-gold-bright font-bold text-lg">Игрок #1</div>
                        <div className="text-stone-400 text-xs">Уровень аккаунта: 5</div>
                        <div className="text-stone-500 text-[10px] mt-1">В игре: 12ч 30м</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onAction(item.id)}
                            className="panel-stone p-3 flex flex-col items-center justify-center gap-2 hover:border-gold-bright transition-colors group"
                        >
                            <span className="text-3xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-200">
                                {item.icon}
                            </span>
                            <div className="text-center">
                                <div className="font-bold text-gold-gradient text-sm uppercase tracking-wide">
                                    {item.label}
                                </div>
                                <div className="text-[10px] text-stone-500 group-hover:text-stone-400">
                                    {item.desc}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </ScreenLayout>
    );
}

export function ProfileScreen({ screen, onAction }: ScreenProps) {
    // This component might be redundant if MainMenuScreen is used as Profile Hub, 
    // but keeping it for now as a fallback or specific view if needed.
    // For now, let's make it a simple redirect or alternative view.
    return <MainMenuScreen screen={screen} onAction={onAction} />;
}

export function ProfileDailyScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="p-2 rounded bg-amber-900/20 border border-amber-500/30 text-center">
                    <div className="text-[9px] text-amber-200/70 uppercase">До обновления</div>
                    <div className="text-xl font-mono text-amber-400">04:12:59</div>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/50">
                        <div className="flex justify-between mb-1">
                            <span className="font-bold text-slate-200">Убить 10 гоблинов</span>
                            <span className="text-amber-400">50 зм</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1">
                            <div className="h-full bg-emerald-500 w-[70%]" />
                        </div>
                        <div className="text-right text-[8px] opacity-60">7/10</div>
                    </div>
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/50">
                        <div className="flex justify-between mb-1">
                            <span className="font-bold text-slate-200">Посетить таверну</span>
                            <span className="text-amber-400">10 зм</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1">
                            <div className="h-full bg-emerald-500 w-[100%]" />
                        </div>
                        <div className="text-right text-[8px] text-emerald-400">Выполнено</div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function SettingsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="space-y-3">
                    <div>
                        <div className="text-[10px] text-slate-400 mb-1 uppercase">Интерфейс</div>
                        <div className="flex justify-between items-center p-2 rounded bg-slate-900/50 border border-slate-800">
                            <span>Темная тема</span>
                            <div className="w-8 h-4 rounded-full bg-emerald-600 relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 mb-1 uppercase">Уведомления</div>
                        <div className="flex justify-between items-center p-2 rounded bg-slate-900/50 border border-slate-800 mb-1">
                            <span>Ход игры</span>
                            <div className="w-8 h-4 rounded-full bg-emerald-600 relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white" /></div>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-slate-900/50 border border-slate-800">
                            <span>Новости</span>
                            <div className="w-8 h-4 rounded-full bg-slate-700 relative"><div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-slate-400" /></div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto text-center text-[9px] opacity-30">
                    Версия прототипа: v0.2.1
                </div>
            </div>
        </ScreenLayout>
    );
}

export function HelpScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30">
                        <h3 className="font-bold text-amber-400 mb-1">Как начать игру?</h3>
                        <p className="opacity-70 leading-relaxed">
                            Выберите "Играть" в главном меню. Вы можете создать своего персонажа для соло-приключения или присоединиться к группе друзей.
                        </p>
                    </div>
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30">
                        <h3 className="font-bold text-amber-400 mb-1">Как работает бой?</h3>
                        <p className="opacity-70 leading-relaxed">
                            Бой пошаговый. Инициатива определяет порядок ходов. В свой ход вы можете атаковать, использовать заклинание или предмет.
                        </p>
                    </div>
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30">
                        <h3 className="font-bold text-amber-400 mb-1">Что делать в городе?</h3>
                        <p className="opacity-70 leading-relaxed">
                            В городе можно отдохнуть, купить снаряжение, взять задания в гильдии или сразиться на арене.
                        </p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function DefaultScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <p className="text-sm text-slate-200 whitespace-pre-wrap">
                {screen.description}
            </p>
        </ScreenLayout>
    );
}
