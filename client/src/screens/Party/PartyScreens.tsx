import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function PartyMenuScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 flex flex-col justify-center gap-4 px-4">
                    <button className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-900/20 hover:bg-emerald-900/30 transition-all group text-left" onClick={() => onAction("party_lobby_host")}>
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">👑</div>
                        <div className="text-lg font-bold text-emerald-100">Создать пати</div>
                        <div className="text-[10px] opacity-60 mt-1">Стать хостом и пригласить друзей в свою кампанию</div>
                    </button>

                    <div className="flex items-center gap-2 opacity-30">
                        <div className="h-px bg-slate-500 flex-1" />
                        <span className="text-[9px] uppercase">или</span>
                        <div className="h-px bg-slate-500 flex-1" />
                    </div>

                    <button className="p-6 rounded-2xl border border-indigo-500/30 bg-indigo-900/20 hover:bg-indigo-900/30 transition-all group text-left" onClick={() => onAction("party_code")}>
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">🎫</div>
                        <div className="text-lg font-bold text-indigo-100">Войти по коду</div>
                        <div className="text-[10px] opacity-60 mt-1">Присоединиться к уже созданной игре</div>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyCodeScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <div className="text-center">
                        <div className="text-4xl mb-2">⌨️</div>
                        <h3 className="text-lg font-bold text-slate-100">Введите код</h3>
                        <p className="text-[10px] opacity-60">Код должен быть у мастера игры</p>
                    </div>

                    <div className="w-full max-w-[200px] flex gap-2 justify-center">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-12 rounded border border-slate-600 bg-slate-800 flex items-center justify-center text-xl font-mono text-white">
                                {i === 1 ? "A" : i === 2 ? "7" : ""}
                                {i === 3 && <div className="w-0.5 h-5 bg-emerald-500 animate-pulse" />}
                            </div>
                        ))}
                    </div>

                    <button className="mt-4 px-8 py-2 rounded-full bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-900/50" onClick={() => onAction("party_lobby_guest")}>
                        Подключиться
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyLobbyHostScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="p-3 rounded border border-slate-700 bg-slate-900/50 text-center">
                    <div className="text-[9px] uppercase opacity-50 mb-1">Код комнаты</div>
                    <div className="text-2xl font-mono font-bold text-emerald-400 tracking-widest">A7X9</div>
                </div>

                <div className="flex-1 rounded border border-slate-700 bg-slate-900/30 p-2">
                    <div className="text-[9px] uppercase opacity-50 mb-2">Игроки (3/4)</div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-emerald-500/30">
                            <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center">👑</div>
                            <div className="flex-1">
                                <div className="font-bold text-emerald-100">Вы (Мастер)</div>
                                <div className="text-[8px] opacity-60">Готов</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded bg-slate-800/50 border border-slate-700">
                            <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center">🧙‍♂️</div>
                            <div className="flex-1">
                                <div className="font-bold text-slate-200">Merlin_The_Wise</div>
                                <div className="text-[8px] opacity-60">Выбирает персонажа...</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded bg-slate-800/50 border border-slate-700">
                            <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center">🧝‍♀️</div>
                            <div className="flex-1">
                                <div className="font-bold text-slate-200">Legolas_XX</div>
                                <div className="text-[8px] text-emerald-400">Готов</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded border border-dashed border-slate-700 opacity-50">
                            <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-xs">+</div>
                            <div className="text-[9px]">Ожидание игрока...</div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function PartyLobbyGuestScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="p-3 rounded border border-slate-700 bg-slate-900/50 text-center">
                    <div className="text-[9px] uppercase opacity-50 mb-1">Кампания</div>
                    <div className="text-lg font-bold text-indigo-200">Тайны Темнолесья</div>
                    <div className="text-[9px] text-emerald-400 mt-1">Хост: DungeonMaster99</div>
                </div>

                <div className="flex-1 rounded border border-slate-700 bg-slate-900/30 p-2 flex flex-col items-center justify-center text-center opacity-60">
                    <div className="text-4xl mb-2">⏳</div>
                    <p>Ожидаем начала сессии...</p>
                    <p className="text-[9px] mt-2">Мастер настраивает игру</p>
                </div>

                <div className="p-2 rounded bg-slate-800 border border-slate-700">
                    <div className="text-[9px] uppercase opacity-50 mb-1">Ваш персонаж</div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center">🛡️</div>
                        <div className="font-bold">Громмаш (Варвар ур.1)</div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}
