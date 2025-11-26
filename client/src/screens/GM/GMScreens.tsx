import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function MasterHubScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-indigo-500/30 bg-indigo-900/20 p-3 flex flex-col justify-center items-center gap-2 text-center hover:bg-indigo-900/30 transition-colors cursor-pointer" onClick={() => onAction("gm_lobby")}>
                        <div className="text-2xl">🎲</div>
                        <div className="font-bold text-indigo-200">Активные кампании</div>
                        <div className="text-[9px] opacity-60">Управление текущими сессиями</div>
                    </div>
                    <div className="rounded-md border border-amber-500/30 bg-amber-900/20 p-3 flex flex-col justify-center items-center gap-2 text-center hover:bg-amber-900/30 transition-colors cursor-pointer" onClick={() => onAction("editor_library")}>
                        <div className="text-2xl">📝</div>
                        <div className="font-bold text-amber-200">Редактор</div>
                        <div className="text-[9px] opacity-60">Создание сценариев и миров</div>
                    </div>
                    <div className="col-span-2 rounded-md border border-slate-700 bg-slate-900/50 p-3 flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors" onClick={() => onAction("editor_quick_session")}>
                        <div className="text-xl">⚡</div>
                        <div className="text-left">
                            <div className="font-bold text-slate-200">Быстрая сессия</div>
                            <div className="text-[9px] opacity-60">Сгенерировать ваншот за пару кликов</div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function GMLobbyScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 overflow-y-auto pr-1 space-y-2">
                    <div className="p-2 rounded border border-emerald-500/30 bg-emerald-900/10">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-emerald-100">Тени Элвенгарда</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px]">Активна</span>
                        </div>
                        <div className="text-[9px] opacity-60 mb-2">Группа: 4 игрока • Сессия #3</div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200 border border-emerald-500/30" onClick={() => onAction("run_scene")}>Запустить</button>
                            <button className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600" onClick={() => onAction("gm_screen")}>Панель</button>
                        </div>
                    </div>

                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30 opacity-70">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-slate-300">Проклятие Старого Замка</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 text-[8px]">Пауза</span>
                        </div>
                        <div className="text-[9px] opacity-60 mb-2">Группа: 3 игрока • Сессия #1</div>
                        <button className="w-full py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600">Продолжить</button>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function GMScreenScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="grid grid-cols-3 gap-2 h-24">
                    <div className="rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:bg-slate-800 cursor-pointer">
                        <span className="text-lg">👥</span>
                        <span className="text-[9px]">NPC</span>
                    </div>
                    <div className="rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:bg-slate-800 cursor-pointer">
                        <span className="text-lg">🏰</span>
                        <span className="text-[9px]">Локации</span>
                    </div>
                    <div className="rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:bg-slate-800 cursor-pointer">
                        <span className="text-lg">🎲</span>
                        <span className="text-[9px]">Таблицы</span>
                    </div>
                </div>
                <div className="flex-1 rounded border border-slate-700 bg-slate-900/30 p-2 overflow-y-auto">
                    <div className="font-bold text-slate-400 text-[10px] uppercase mb-2">Заметки мастера</div>
                    <p className="text-[10px] opacity-70 leading-relaxed">
                        - Игроки забыли про амулет, нужно напомнить через NPC.
                        <br />- В следующей комнате ловушка с ядом (DC 15).
                        <br />- Гоблин-торговец может продать карту подземелья за 50зм.
                    </p>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function EditorLibraryScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex gap-2 mb-2">
                    <button className="flex-1 py-1.5 rounded bg-amber-600/20 border border-amber-500/30 text-amber-200 hover:bg-amber-600/30" onClick={() => onAction("editor_campaign")}>+ Новая</button>
                    <button className="flex-1 py-1.5 rounded bg-slate-800 border border-slate-600 hover:bg-slate-700" onClick={() => onAction("editor_templates")}>Шаблоны</button>
                </div>
                <div className="flex-1 overflow-y-auto pr-1 space-y-2">
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/50 hover:border-amber-500/30 transition-colors cursor-pointer" onClick={() => onAction("editor_campaign")}>
                        <div className="font-bold text-slate-200">Забытые Руины</div>
                        <div className="text-[9px] opacity-50 mt-1">Сцен: 12 • NPC: 5 • Монстров: 8</div>
                    </div>
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/50 hover:border-amber-500/30 transition-colors cursor-pointer">
                        <div className="font-bold text-slate-200">Охота на Дракона</div>
                        <div className="text-[9px] opacity-50 mt-1">Сцен: 24 • NPC: 12 • Монстров: 15</div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function EditorCampaignScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 flex items-center px-2 rounded bg-slate-800 border border-slate-700">
                    <span className="font-bold text-slate-200">Забытые Руины</span>
                </div>
                <div className="flex-1 flex gap-2">
                    <div className="w-1/3 flex flex-col gap-2">
                        <div className="flex-1 rounded border border-slate-700 bg-slate-900/30 p-1 overflow-y-auto">
                            <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Сцены</div>
                            <div className="p-1 rounded bg-amber-500/20 text-amber-200 text-[9px] mb-1 border border-amber-500/30">1. Вход</div>
                            <div className="p-1 rounded bg-slate-800 text-slate-400 text-[9px] mb-1">2. Коридор</div>
                            <div className="p-1 rounded bg-slate-800 text-slate-400 text-[9px] mb-1">3. Зал</div>
                        </div>
                    </div>
                    <div className="flex-1 rounded border border-slate-700 bg-slate-900/30 p-2">
                        <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">Редактор сцены: Вход</div>
                        <div className="space-y-2">
                            <div className="h-16 rounded border border-slate-600 bg-slate-800/50 p-1 text-[9px] opacity-60">
                                Описание локации...
                            </div>
                            <div className="h-16 rounded border border-slate-600 bg-slate-800/50 p-1 text-[9px] opacity-60">
                                Варианты действий...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function EditorTemplatesScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-video rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:border-amber-500/50 cursor-pointer">
                        <span className="text-xl">🏰</span>
                        <span className="font-bold">Данжен</span>
                    </div>
                    <div className="aspect-video rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:border-amber-500/50 cursor-pointer">
                        <span className="text-xl">🌲</span>
                        <span className="font-bold">Лес</span>
                    </div>
                    <div className="aspect-video rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:border-amber-500/50 cursor-pointer">
                        <span className="text-xl">🏘️</span>
                        <span className="font-bold">Город</span>
                    </div>
                    <div className="aspect-video rounded border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-1 hover:border-amber-500/50 cursor-pointer">
                        <span className="text-xl">⚔️</span>
                        <span className="font-bold">Арена</span>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function EditorQuickSessionScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="space-y-3">
                    <div>
                        <div className="text-[10px] text-slate-400 mb-1">Сеттинг</div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-1 rounded bg-amber-600/20 border border-amber-500/30 text-amber-200">Фэнтези</button>
                            <button className="flex-1 py-1 rounded bg-slate-800 border border-slate-600 text-slate-400">Киберпанк</button>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 mb-1">Тон</div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-1 rounded bg-slate-800 border border-slate-600 text-slate-400">Героика</button>
                            <button className="flex-1 py-1 rounded bg-purple-600/20 border border-purple-500/30 text-purple-200">Мрачный</button>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 mb-1">Сложность</div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 w-[60%]" />
                        </div>
                    </div>
                </div>
                <button className="mt-auto w-full py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold">Сгенерировать</button>
            </div>
        </ScreenLayout>
    );
}
