import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function JournalHubScreen({ screen, onAction }: ScreenProps) {
    const sections = [
        { id: 'journal_sessions', icon: '📜', label: 'Архив Сессий', desc: 'История приключений' },
        { id: 'journal_campaigns', icon: '🗺️', label: 'Кампании', desc: 'Карты и прогресс' },
        { id: 'journal_world', icon: '🌍', label: 'Мир', desc: 'Лор и география' },
        { id: 'journal_achievements', icon: '🏆', label: 'Достижения', desc: 'Награды и титулы' },
        { id: 'journal_glossary', icon: '📚', label: 'Глоссарий', desc: 'Термины и бестиарий' },
        { id: 'journal_rules', icon: '⚖️', label: 'Правила', desc: 'Механики игры' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                {/* Header */}
                <div className="p-4 rounded-lg border border-amber-900/40 bg-[#2a2420] flex items-center gap-4 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x100/2a2420/3f3228?text=Library+Texture')] opacity-20 bg-cover bg-center" />
                    <div className="w-12 h-12 rounded bg-amber-950 border border-amber-700 flex items-center justify-center text-2xl shadow-inner relative z-10">
                        📖
                    </div>
                    <div className="relative z-10">
                        <div className="font-serif font-bold text-amber-100 text-lg">Библиотека Знаний</div>
                        <div className="text-[10px] text-amber-400/60 italic">"Знание — это сила, которую нельзя отнять."</div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-2">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => onAction(s.id)}
                            className="p-3 rounded-lg border border-amber-900/30 bg-[#2a2420]/80 hover:bg-[#3f3228] hover:border-amber-600/50 active:scale-95 transition-all group flex flex-col gap-2 items-start relative overflow-hidden"
                        >
                            <div className="absolute right-2 top-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">
                                {s.icon}
                            </div>
                            <div className="w-8 h-8 rounded bg-amber-950/50 border border-amber-800/30 flex items-center justify-center text-lg shadow-sm group-hover:text-amber-200 transition-colors">
                                {s.icon}
                            </div>
                            <div>
                                <div className="font-bold text-amber-100/90 text-sm group-hover:text-amber-50 transition-colors">{s.label}</div>
                                <div className="text-[9px] text-amber-500/60 leading-tight">{s.desc}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalSessionsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex-1 overflow-y-auto pr-1 space-y-4">
                    {[12, 11, 10].map((num, i) => (
                        <div key={num} className="relative p-4 rounded-sm bg-[#eaddcf] text-stone-900 shadow-md rotate-[0.5deg] hover:rotate-0 transition-transform duration-300 group">
                            {/* Paper texture effect */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#d6c4b0] opacity-50 blur-sm rounded-full" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-baseline border-b border-stone-400/30 pb-2 mb-2">
                                    <h3 className="font-serif font-bold text-lg text-stone-800">Сессия #{num}</h3>
                                    <span className="font-mono text-[10px] text-stone-500">{i === 0 ? 'Вчера' : `${i * 3} дня назад`}</span>
                                </div>
                                <p className="font-serif text-sm leading-relaxed text-stone-700 opacity-90">
                                    {i === 0
                                        ? "Группа проникла в логово культистов. Бард чуть не погиб от ловушки, но клирик успел наложить щит. Нашли странный амулет с рунами древних."
                                        : "Долгий переход через болота. Сражение с гигантской жабой, которая проглотила нашего плута. Еле вытащили."}
                                </p>
                                <div className="mt-3 flex gap-2 justify-end">
                                    <span className="px-2 py-0.5 rounded-full border border-stone-400/50 text-[9px] font-bold uppercase text-stone-500">Бой</span>
                                    <span className="px-2 py-0.5 rounded-full border border-stone-400/50 text-[9px] font-bold uppercase text-stone-500">Лут</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalCampaignsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                    <div className="p-3 rounded-lg border border-emerald-900/50 bg-gradient-to-br from-emerald-950 to-stone-900 shadow-lg relative overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl">🌲</div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-emerald-100 text-lg group-hover:text-emerald-50 transition-colors">Тени Элвенгарда</h3>
                                    <div className="text-[10px] text-emerald-400/80 uppercase tracking-wider font-bold">Активная Кампания</div>
                                </div>
                                <span className="px-2 py-1 rounded bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase animate-pulse">
                                    В процессе
                                </span>
                            </div>
                            <p className="text-[10px] text-stone-400 mb-3 leading-relaxed">
                                Древнее зло пробуждается в лесах. Эльфы просят помощи у героев, чтобы остановить порчу.
                            </p>
                            <div className="space-y-1">
                                <div className="flex justify-between text-[9px] text-stone-500 font-bold uppercase">
                                    <span>Прогресс</span>
                                    <span>Глава 2 из 5</span>
                                </div>
                                <div className="h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                                    <div className="h-full bg-emerald-600 w-[40%] shadow-[0_0_5px_rgba(5,150,105,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 rounded-lg border border-stone-800 bg-stone-900/50 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-stone-300 text-lg group-hover:text-stone-200">Золото Дракона</h3>
                                <div className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">Завершена</div>
                            </div>
                            <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-400 text-[9px] font-bold uppercase">
                                Финал
                            </span>
                        </div>
                        <div className="space-y-1 mt-3">
                            <div className="flex justify-between text-[9px] text-stone-500 font-bold uppercase">
                                <span>Прогресс</span>
                                <span>100%</span>
                            </div>
                            <div className="h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                                <div className="h-full bg-stone-600 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalTimelineScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 relative pl-4 border-l border-slate-700 space-y-4 overflow-y-auto">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
                        <div className="text-[9px] text-emerald-400 mb-0.5">1024 г. Э.В.</div>
                        <div className="font-bold text-slate-200">Падение Черной Башни</div>
                        <p className="text-[9px] opacity-60 mt-1">Конец эпохи тирании.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-600 border-2 border-slate-900" />
                        <div className="text-[9px] text-slate-400 mb-0.5">1020 г. Э.В.</div>
                        <div className="font-bold text-slate-200">Великая Засуха</div>
                        <p className="text-[9px] opacity-60 mt-1">Начало конфликта за водные ресурсы.</p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalGlossaryScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex gap-1 mb-2 overflow-x-auto pb-1">
                    {['А', 'Б', 'В', 'Г', 'Д', 'Е'].map(l => (
                        <button key={l} className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700">{l}</button>
                    ))}
                </div>
                <div className="flex-1 space-y-2 overflow-y-auto">
                    <div>
                        <span className="font-bold text-amber-100">Адепт</span>
                        <p className="text-[9px] opacity-70">Маг начального уровня, прошедший базовое обучение.</p>
                    </div>
                    <div>
                        <span className="font-bold text-amber-100">Бестиарий</span>
                        <p className="text-[9px] opacity-70">Книга с описанием монстров и их слабостей.</p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalWorldScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-32 rounded border border-slate-700 bg-slate-900/50 relative overflow-hidden mb-2">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x200/1e293b/475569?text=World+Map')] bg-cover bg-center opacity-50" />
                    <div className="absolute bottom-2 left-2 font-bold text-slate-100 text-lg shadow-black drop-shadow-md">Карта Мира</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <button className="p-2 rounded border border-slate-700 bg-slate-800/50 text-left hover:bg-slate-800" onClick={() => onAction("journal_timeline")}>
                        <div className="font-bold text-slate-200">Хронология</div>
                    </button>
                    <button className="p-2 rounded border border-slate-700 bg-slate-800/50 text-left hover:bg-slate-800" onClick={() => onAction("journal_glossary")}>
                        <div className="font-bold text-slate-200">Глоссарий</div>
                    </button>
                    <button className="p-2 rounded border border-slate-700 bg-slate-800/50 text-left hover:bg-slate-800" onClick={() => onAction("journal_rules")}>
                        <div className="font-bold text-slate-200">Правила</div>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalRulesScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="space-y-2 overflow-y-auto pr-1">
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30">
                        <h3 className="font-bold text-amber-100 mb-1">Проверки навыков</h3>
                        <p className="text-[9px] opacity-70">Бросок d20 + Модификатор против Сложности (DC).</p>
                    </div>
                    <div className="p-2 rounded border border-slate-700 bg-slate-900/30">
                        <h3 className="font-bold text-amber-100 mb-1">Бой</h3>
                        <p className="text-[9px] opacity-70">Инициатива &rarr; Действие &rarr; Бонусное действие &rarr; Перемещение.</p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalAchievementsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="space-y-2 overflow-y-auto pr-1">
                    <div className="flex gap-2 p-2 rounded border border-amber-500/30 bg-amber-900/10">
                        <div className="text-2xl">🐲</div>
                        <div>
                            <div className="font-bold text-amber-100">Убийца Драконов</div>
                            <div className="text-[9px] opacity-60">Победить древнего дракона.</div>
                        </div>
                    </div>
                    <div className="flex gap-2 p-2 rounded border border-slate-700 bg-slate-900/30 opacity-50">
                        <div className="text-2xl grayscale">💰</div>
                        <div>
                            <div className="font-bold text-slate-300">Миллионер</div>
                            <div className="text-[9px] opacity-60">Накопить 1,000,000 зм.</div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function JournalTrophiesScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded border border-amber-500/50 bg-amber-900/20 flex flex-col items-center justify-center gap-1">
                        <span className="text-2xl">👑</span>
                        <span className="text-[8px] text-amber-200 text-center leading-tight">Корона Короля</span>
                    </div>
                    <div className="aspect-square rounded border border-slate-700 bg-slate-900/30 flex flex-col items-center justify-center gap-1 opacity-30">
                        <span className="text-2xl">❓</span>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}
