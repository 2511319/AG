import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function PartyMenuScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <div className="flex flex-col h-full relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800/40 via-stone-950/80 to-black pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col justify-center gap-6 px-4">
                    <button
                        className="p-6 rounded-xl border border-gold-dim/30 bg-gradient-to-br from-stone-900 to-stone-950 hover:from-stone-800 hover:to-stone-900 transition-all group text-left shadow-lg hover:border-gold-bright hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                        onClick={() => onAction("party_lobby_host")}
                    >
                        <div className="flex justify-between items-start">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform origin-left filter drop-shadow-md">👑</div>
                            <div className="text-gold-dim/50 text-6xl opacity-10 font-cinzel absolute right-4 top-4">HOST</div>
                        </div>
                        <div className="text-xl font-cinzel font-bold text-stone-100 group-hover:text-gold-bright transition-colors">Создать пати</div>
                        <div className="text-xs text-stone-500 mt-2 font-serif tracking-wide group-hover:text-stone-400">Стать лидером и собрать отряд для похода.</div>
                    </button>

                    <div className="flex items-center gap-4 opacity-40">
                        <div className="h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent flex-1" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-cinzel">Или</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent flex-1" />
                    </div>

                    <button
                        className="p-6 rounded-xl border border-stone-700 bg-stone-900/40 hover:bg-stone-800/60 transition-all group text-left hover:border-stone-500"
                        onClick={() => onAction("party_code")}
                    >
                        <div className="flex justify-between items-start">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform origin-left opacity-80">🎫</div>
                            <div className="text-stone-500/50 text-6xl opacity-10 font-cinzel absolute right-4 top-4">JOIN</div>
                        </div>
                        <div className="text-xl font-cinzel font-bold text-stone-300 group-hover:text-stone-100 transition-colors">Войти по коду</div>
                        <div className="text-xs text-stone-500 mt-2 font-serif tracking-wide">Присоединиться к уже созданной игре.</div>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyCodeScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <div className="flex flex-col h-full relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-black to-black pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center gap-8">
                    <div className="text-center space-y-2">
                        <div className="text-5xl mb-4 animate-bounce-slow opacity-80">⌨️</div>
                        <h3 className="text-2xl font-cinzel font-bold text-stone-100">Введите код</h3>
                        <p className="text-xs text-stone-500 font-serif max-w-[200px] mx-auto">Получите пропуск у Мастера Игры, чтобы войти в лобби.</p>
                    </div>

                    <div className="flex gap-3 justify-center">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-14 rounded-lg border border-stone-700 bg-stone-900/80 flex items-center justify-center text-2xl font-cinzel text-gold-bright shadow-inner">
                                {i === 1 ? "A" : i === 2 ? "7" : ""}
                                {i === 3 && <div className="w-0.5 h-6 bg-gold-dim animate-pulse" />}
                            </div>
                        ))}
                    </div>

                    <button
                        className="mt-8 px-10 py-3 rounded-lg bg-gold-dim hover:bg-gold-bright text-stone-950 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all transform hover:-translate-y-0.5"
                        onClick={() => onAction("party_lobby_guest")}
                    >
                        Подключиться
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyLobbyHostScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <div className="flex flex-col h-full gap-4 relative">
                <div className="relative z-10 flex flex-col gap-4 p-2">
                    {/* Room Code Card */}
                    <div className="p-4 rounded-lg border border-gold-dim/30 bg-stone-900/90 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-50" />
                        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2 font-cinzel">Код комнаты</div>
                        <div className="text-4xl font-mono font-bold text-gold-bright tracking-[0.5em] drop-shadow-lg">A7X9</div>
                    </div>

                    {/* Players List */}
                    <div className="flex-1 rounded-lg border border-stone-800 bg-stone-950/50 p-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center pb-2 border-b border-stone-800/50">
                            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Отряд</span>
                            <span className="text-[10px] text-stone-600">3 / 4</span>
                        </div>

                        <div className="space-y-3">
                            {/* Host (You) */}
                            <div className="flex items-center gap-3 p-3 rounded bg-stone-900/80 border border-gold-dim/20 shadow-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-dim" />
                                <div className="w-10 h-10 rounded bg-stone-800 flex items-center justify-center text-xl shadow-inner border border-stone-700">👑</div>
                                <div className="flex-1">
                                    <div className="font-bold text-stone-200 text-sm font-cinzel">Вы (Мастер)</div>
                                    <div className="text-[10px] text-emerald-500 uppercase tracking-wide">Готов к походу</div>
                                </div>
                            </div>

                            {/* Player 2 */}
                            <div className="flex items-center gap-3 p-3 rounded bg-stone-900/40 border border-stone-800">
                                <div className="w-10 h-10 rounded bg-stone-800/50 flex items-center justify-center text-xl border border-stone-800">🧙‍♂️</div>
                                <div className="flex-1">
                                    <div className="font-bold text-stone-300 text-sm font-cinzel">Merlin_The_Wise</div>
                                    <div className="text-[10px] text-stone-500 italic">Выбирает класс...</div>
                                </div>
                            </div>

                            {/* Player 3 */}
                            <div className="flex items-center gap-3 p-3 rounded bg-stone-900/40 border border-stone-800">
                                <div className="w-10 h-10 rounded bg-stone-800/50 flex items-center justify-center text-xl border border-stone-800">🧝‍♀️</div>
                                <div className="flex-1">
                                    <div className="font-bold text-stone-300 text-sm font-cinzel">Legolas_XX</div>
                                    <div className="text-[10px] text-emerald-500 uppercase tracking-wide">Готов</div>
                                </div>
                            </div>

                            {/* Empty Slot */}
                            <div className="flex items-center gap-3 p-3 rounded border border-dashed border-stone-800 opacity-40">
                                <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-lg text-stone-500">+</div>
                                <div className="text-xs text-stone-500 font-serif italic">Ожидание странника...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyLobbyGuestScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <div className="flex flex-col h-full gap-4 relative">
                <div className="relative z-10 flex flex-col gap-4 p-2 h-full">
                    {/* Campaign Info */}
                    <div className="p-5 rounded-lg border border-stone-800 bg-stone-900/80 text-center relative pointer-events-none">
                        <div className="text-[9px] uppercase tracking-widest text-stone-500 mb-1">Приключение</div>
                        <div className="text-xl font-cinzel font-bold text-stone-100 mb-2">Тайны Темнолесья</div>
                        <div className="inline-block px-2 py-0.5 rounded bg-stone-950 border border-stone-800 text-[10px] text-stone-400">
                            Хост: <span className="text-gold-dim">DungeonMaster99</span>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="flex-1 rounded-lg border border-stone-800 bg-black/20 p-2 flex flex-col items-center justify-center text-center">
                        <div className="text-5xl mb-4 animate-pulse opacity-50">⏳</div>
                        <h4 className="text-lg font-cinzel text-stone-300 mb-1">Ожидание начала</h4>
                        <p className="text-xs text-stone-500 font-serif max-w-[200px]">Мастер игры настраивает параметры сессии. Приготовьтесь.</p>
                    </div>

                    {/* My Character */}
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-700 flex items-center gap-3">
                        <div className="text-[9px] uppercase opacity-50 absolute top-2 right-2">Ваш герой</div>
                        <div className="w-12 h-12 rounded bg-stone-800 flex items-center justify-center text-2xl shadow-inner border border-stone-600">🛡️</div>
                        <div>
                            <div className="font-bold text-stone-200 font-cinzel">Громмаш</div>
                            <div className="text-xs text-stone-400">Варвар • Ур. 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}
