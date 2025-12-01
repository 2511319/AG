import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';
import { StylizedButton } from '../../shared/ui/StylizedButton';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function PlayMenuScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4 justify-center max-w-md mx-auto w-full">
                {/* Main Actions */}
                <div className="space-y-4">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-stone-700 to-stone-800 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                        <button
                            disabled
                            className="relative w-full py-4 rounded-lg border border-stone-700 bg-stone-900/90 text-stone-500 font-bold uppercase tracking-widest cursor-not-allowed flex flex-col items-center gap-1"
                        >
                            <span className="text-lg font-cinzel">Продолжить</span>
                            <span className="text-[9px] font-normal opacity-60">Нет активных сохранений</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => onAction('solo_char')}
                            className="p-4 rounded-lg border border-gold-dim/30 bg-stone-900/80 hover:bg-stone-800 hover:border-gold-bright active:scale-95 transition-all flex flex-col items-center gap-2 group shadow-lg shadow-black/40"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform filter drop-shadow-md">⚔️</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright font-cinzel">Новая Игра</div>
                                <div className="text-[10px] text-stone-500 group-hover:text-stone-400">Соло приключение</div>
                            </div>
                        </button>

                        <button
                            onClick={() => onAction('party_menu')}
                            className="p-4 rounded-lg border border-stone-700 bg-stone-900/80 hover:bg-stone-800 hover:border-stone-500 active:scale-95 transition-all flex flex-col items-center gap-2 group shadow-lg shadow-black/40"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform filter drop-shadow-md">👥</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-stone-100 font-cinzel">Пати</div>
                                <div className="text-[10px] text-stone-500 group-hover:text-stone-400">С друзьями</div>
                            </div>
                        </button>
                    </div>

                    <StylizedButton
                        id="party_code"
                        onClick={() => onAction('party_code')}
                        fullWidth
                        className="opacity-90 hover:opacity-100"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <span className="text-lg">🔑</span>
                            <span className="font-bold text-xs uppercase tracking-wider">Ввести код приглашения</span>
                        </span>
                    </StylizedButton>
                </div>

                {/* Recent/Info */}
                <div className="mt-4 p-3 rounded border border-stone-800 bg-stone-950/50 text-center shadow-inner">
                    <div className="text-[10px] text-stone-600 uppercase tracking-widest mb-1">Статус Сервера</div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                        <span className="text-xs text-stone-400 font-mono">Online • 124 Игрока</span>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunSceneScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-300">
                {/* Context Bar */}
                <div className="h-9 rounded-md border border-gold-dim/40 bg-stone-900/80 flex items-center justify-between px-3 shadow-sm">
                    <span className="truncate text-stone-400 italic">
                        Глава 1: Тени прошлого • <span className="text-amber-500/80">Угроза: Низкая</span>
                    </span>
                    <button
                        type="button"
                        onClick={() => onAction("run_scene_plan")}
                        className="ml-2 px-2 py-0.5 rounded border border-gold-dim/30 text-[9px] text-gold-dim hover:text-gold-bright hover:border-gold-bright bg-gold-dim/5 transition-colors"
                    >
                        План сцены
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex gap-2 min-h-0">
                    {/* Narrative Log */}
                    <div className="flex-1 rounded-md border border-stone-700 bg-stone-950/80 p-3 text-[11px] overflow-y-auto shadow-inner custom-scrollbar">
                        <div className="font-cinzel text-gold-dim mb-2 text-sm border-b border-stone-800 pb-1">Текущий фрагмент</div>
                        <p className="opacity-90 mb-4 leading-relaxed text-stone-300">
                            Вы входите в старую таверну. Воздух спертый, пахнет кислым элем и жареным мясом. Трактирщик, коренастый дворф с густой рыжей бородой, протирает кружку грязной тряпкой и подозрительно косится на вас. В углу о чем-то шепчутся двое в капюшонах.
                        </p>
                        <div className="mt-2 border-t border-stone-800 pt-2 text-[10px] opacity-60 font-mono text-stone-500">
                            &gt; Вы осмотрелись.<br />
                            &gt; Трактирщик заметил вас.<br />
                            &gt; Проверка Восприятия: 14 (Успех)
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="w-28 flex flex-col gap-2">
                        <div className="rounded-md border border-emerald-900/50 bg-emerald-950/10 p-2 shadow-sm">
                            <div className="text-[10px] font-bold text-emerald-600/80 mb-1 uppercase tracking-wider">Цели</div>
                            <p className="text-[9px] text-stone-400 leading-tight">
                                1. Поговорить с Бобом.<br />
                                2. Узнать про крыс.
                            </p>
                        </div>
                        <div className="rounded-md border border-purple-900/50 bg-purple-950/10 p-2 shadow-sm">
                            <div className="text-[10px] font-bold text-purple-600/80 mb-1 uppercase tracking-wider">Факторы</div>
                            <p className="text-[9px] text-stone-400 leading-tight">
                                • Шумно<br />
                                • Темно
                            </p>
                        </div>
                        <div className="rounded-md border border-rose-900/50 bg-rose-950/10 p-2 shadow-sm">
                            <div className="text-[10px] font-bold text-rose-600/80 mb-1 uppercase tracking-wider">NPC</div>
                            <p className="text-[9px] text-stone-400 leading-tight">
                                • Боб (Трактирщик)<br />
                                • Незнакомцы
                            </p>
                        </div>
                    </div>
                </div>

                {/* Party Status */}
                <div className="h-10 rounded-md border border-stone-800 bg-stone-900/50 flex items-center px-3 gap-3">
                    <div className="w-6 h-6 rounded-full bg-stone-700 border border-stone-600 flex items-center justify-center text-[10px]">🧙‍♂️</div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between text-[9px] text-stone-400 mb-0.5">
                            <span>HP</span>
                            <span>24/30</span>
                        </div>
                        <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-900/80 w-[80%]"></div>
                        </div>
                    </div>
                </div>

                {/* Action Hint */}
                <div className="h-8 rounded-md border border-stone-800 bg-stone-900/30 flex flex-col justify-center px-3 gap-0.5">
                    <div className="text-[10px] text-stone-400">
                        Выберите действие ниже или введите свой вариант.
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunScenePlanScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-200">
                <div className="flex-1 rounded border border-stone-700 bg-stone-900/80 p-2 relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-500 via-stone-900 to-black" />

                    {/* Map Grid Effect */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #292524 1px, transparent 1px), linear-gradient(to bottom, #292524 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>

                    <div className="relative z-10 grid grid-cols-4 gap-4 p-4">
                        <div className="aspect-square rounded-full border-2 border-emerald-600/50 flex items-center justify-center bg-emerald-900/30 text-emerald-200 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            Старт
                        </div>
                        <div className="col-start-2 row-start-2 aspect-square rounded-full border border-stone-600 flex items-center justify-center bg-stone-800 text-stone-400">
                            ?
                        </div>
                        <div className="col-start-3 row-start-1 aspect-square rounded-full border border-stone-600 flex items-center justify-center bg-stone-800 text-stone-400">
                            ⚔️
                        </div>
                        <div className="col-start-4 row-start-2 aspect-square rounded-full border-2 border-red-600/50 flex items-center justify-center bg-red-900/30 text-red-200 font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                            Босс
                        </div>

                        {/* Connections */}
                        <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-stone-700 -rotate-45 transform origin-left opacity-50" />
                        <div className="absolute top-1/4 left-1/2 w-16 h-0.5 bg-stone-700 rotate-45 transform origin-left opacity-50" />
                    </div>
                    <div className="absolute bottom-2 left-2 text-[9px] text-stone-500 font-cinzel">
                        Карта подземелья "Забытый склеп"
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunCombatScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-300">
                {/* Location Info */}
                <div className="h-9 rounded-md border border-red-900/40 bg-stone-900/80 flex items-center justify-between px-3 shadow-sm">
                    <span className="truncate text-stone-400">
                        <span className="text-red-500/80 font-bold">БОЙ</span> • Сырой подвал • Темнота
                    </span>
                    <button
                        type="button"
                        onClick={() => onAction("run_combat_field")}
                        className="ml-2 px-2 py-0.5 rounded border border-red-900/50 text-[9px] text-red-200 hover:text-red-100 hover:border-red-500 bg-red-900/20 transition-colors"
                    >
                        Схема поля
                    </button>
                </div>

                {/* Initiative Bar */}
                <div className="h-8 rounded-md border border-stone-800 bg-stone-950/50 flex items-center px-2 gap-2 overflow-x-auto custom-scrollbar">
                    <div className="flex-shrink-0 w-6 h-6 rounded border border-gold-dim/50 bg-stone-800 flex items-center justify-center text-xs shadow-sm shadow-gold-dim/10">🧙‍♂️</div>
                    <div className="text-[8px] text-stone-600">➜</div>
                    <div className="flex-shrink-0 w-6 h-6 rounded border border-red-900/50 bg-stone-900 flex items-center justify-center text-xs grayscale opacity-70">🐀</div>
                    <div className="text-[8px] text-stone-600">➜</div>
                    <div className="flex-shrink-0 w-6 h-6 rounded border border-red-900/50 bg-stone-900 flex items-center justify-center text-xs grayscale opacity-70">🐀</div>
                </div>

                {/* Main Combat Area */}
                <div className="flex-1 flex gap-2 min-h-0">
                    {/* Combat Log */}
                    <div className="flex-1 rounded-md border border-stone-700 bg-stone-950/80 p-2 text-[11px] overflow-y-auto shadow-inner custom-scrollbar font-mono text-stone-400">
                        <div className="mb-1"><span className="text-gold-dim">Вы</span> атакуете <span className="text-red-400">Крысу А</span>.</div>
                        <div className="mb-1 pl-2 text-stone-500">Бросок атаки: 18 (Попадание)</div>
                        <div className="mb-1 pl-2 text-stone-500">Урон: 6 (Рубящий)</div>
                        <div className="mb-1 border-t border-stone-800 my-1"></div>
                        <div className="mb-1"><span className="text-red-400">Крыса Б</span> кусает <span className="text-gold-dim">Вас</span>.</div>
                        <div className="mb-1 pl-2 text-stone-500">Бросок атаки: 12 (Промах)</div>
                    </div>

                    {/* Units */}
                    <div className="w-24 flex flex-col gap-2">
                        <div className="flex-1 rounded-md border border-stone-800 bg-stone-900/30 p-1 flex flex-col gap-1">
                            <div className="text-[9px] font-bold text-stone-500 text-center uppercase">Враги</div>
                            <div className="p-1 rounded bg-stone-800 border border-red-900/30 flex items-center gap-2">
                                <div className="text-xs">🐀</div>
                                <div className="flex-1 h-1 bg-stone-900 rounded-full overflow-hidden"><div className="h-full bg-red-600 w-[40%]"></div></div>
                            </div>
                            <div className="p-1 rounded bg-stone-800 border border-red-900/30 flex items-center gap-2 opacity-50">
                                <div className="text-xs">🐀</div>
                                <div className="flex-1 h-1 bg-stone-900 rounded-full overflow-hidden"><div className="h-full bg-red-600 w-[0%]"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Player Status & Quick Actions */}
                <div className="h-12 rounded-md border border-stone-800 bg-stone-900/50 flex items-center justify-between px-3 gap-2">
                    <div className="flex-1 text-[10px]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gold-dim">Маг 1 ур.</span>
                            <span className="text-[9px] text-stone-500">AC 12</span>
                        </div>
                        <div className="h-1.5 w-full bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                            <div className="h-full bg-gradient-to-r from-red-900 to-red-600 w-[80%]"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded border border-stone-600 bg-stone-800 hover:border-gold-dim hover:text-gold-bright transition-colors flex items-center justify-center text-lg">⚔️</button>
                        <button className="w-8 h-8 rounded border border-stone-600 bg-stone-800 hover:border-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center text-lg">✨</button>
                        <button className="w-8 h-8 rounded border border-stone-600 bg-stone-800 hover:border-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center text-lg">🎒</button>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunCombatFieldScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-300">
                <div className="flex-1 rounded border border-stone-700 bg-stone-900/50 p-1 relative shadow-inner">
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-px bg-stone-800/20">
                        {Array.from({ length: 96 }).map((_, i) => (
                            <div key={i} className="bg-stone-950/40" />
                        ))}
                    </div>

                    {/* Tokens */}
                    <div className="absolute top-[40%] left-[40%] w-[10%] h-[7%] rounded-full bg-gold-dim border-2 border-gold-bright flex items-center justify-center text-[8px] font-bold shadow-lg z-10 text-stone-950">
                        Вы
                    </div>
                    <div className="absolute top-[30%] left-[60%] w-[10%] h-[7%] rounded-full bg-red-900 border-2 border-red-500 flex items-center justify-center text-[8px] font-bold shadow-lg z-10 text-red-100">
                        Враг
                    </div>
                    <div className="absolute top-[50%] left-[20%] w-[10%] h-[7%] rounded-full bg-stone-600 border border-stone-400 flex items-center justify-center text-[8px] opacity-80 z-10">
                        Союз
                    </div>

                    {/* Obstacles */}
                    <div className="absolute top-[20%] left-[30%] w-[20%] h-[15%] bg-stone-800 border border-stone-600 rounded shadow-md" />
                </div>
                <div className="h-8 flex items-center justify-between px-3 rounded bg-stone-900 border border-stone-700 text-[10px] shadow-sm">
                    <span className="text-stone-400">Ваш ход: <span className="text-stone-200">Перемещение</span></span>
                    <span className="text-emerald-500 font-mono">15 / 30 ф.</span>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunEpilogueScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-300">
                <div className="flex-1 rounded border border-stone-800 bg-[#0c0a09] p-6 flex flex-col items-center text-center overflow-y-auto shadow-inner">
                    <div className="text-5xl mb-6 filter drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">🏆</div>
                    <h2 className="text-2xl font-bold text-gold-bright mb-3 font-cinzel tracking-wide">Победа!</h2>
                    <p className="text-stone-400 mb-8 leading-relaxed max-w-xs mx-auto">
                        Древнее зло повержено, и в землях Элвенгарда вновь воцарился мир. Барды сложат песни о вашем подвиге, а король щедро наградит героев.
                    </p>

                    <div className="w-full max-w-xs space-y-3 mb-6">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">Награды</div>
                        <div className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center">
                            <span className="text-stone-400">Опыт</span>
                            <span className="text-emerald-400 font-mono font-bold">+1500 XP</span>
                        </div>
                        <div className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center">
                            <span className="text-stone-400">Золото</span>
                            <span className="text-gold-bright font-mono font-bold">+500 зм</span>
                        </div>
                        <div className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center">
                            <span className="text-stone-400">Предмет</span>
                            <span className="text-purple-400 font-bold">Меч Героя</span>
                        </div>
                    </div>

                    <div className="text-[10px] opacity-30 italic font-serif mt-auto">
                        "Это был славный бой..."
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}
