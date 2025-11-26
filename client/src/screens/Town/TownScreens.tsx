import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function TownHubScreen({ screen, onAction }: ScreenProps) {
    const buildings = [
        { id: 'town_tavern', icon: '🍺', label: 'Таверна', desc: 'Слухи и отдых' },
        { id: 'town_market', icon: '💰', label: 'Рынок', desc: 'Торговля' },
        { id: 'town_craft', icon: '🔨', label: 'Кузница', desc: 'Крафт и ремонт' },
        { id: 'town_guild', icon: '⚜️', label: 'Гильдия', desc: 'Задания' },
        { id: 'town_board', icon: '📜', label: 'Доска', desc: 'Объявления' },
        { id: 'town_arena', icon: '⚔️', label: 'Арена', desc: 'Бои и ставки' },
        { id: 'town_training', icon: '🎯', label: 'Плац', desc: 'Тренировка' },
        { id: 'town_temple', icon: '✨', label: 'Храм', desc: 'Благословения' },
        { id: 'town_home', icon: '🏠', label: 'Дом', desc: 'Личный уголок' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                {/* Town Header / Status */}
                <div className="p-3 rounded-lg border border-stone-700 bg-stone-900/80 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-800 border border-gold-dim flex items-center justify-center text-xl">
                            🏰
                        </div>
                        <div>
                            <div className="font-bold text-stone-200 text-sm">Оплот Надежды</div>
                            <div className="text-[10px] text-stone-500">Мирный город • Уровень 3</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-stone-500 uppercase tracking-wider">Население</div>
                        <div className="font-mono text-gold-dim text-xs">1,240</div>
                    </div>
                </div>

                {/* Buildings Grid */}
                <div className="grid grid-cols-3 gap-3 overflow-y-auto pb-2">
                    {buildings.map((b) => (
                        <button
                            key={b.id}
                            onClick={() => onAction(b.id)}
                            className="aspect-square flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-stone-700 bg-stone-800/40 hover:bg-stone-800 hover:border-gold-dim active:scale-95 transition-all duration-200 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
                            <span className="text-3xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-200 relative z-10">
                                {b.icon}
                            </span>
                            <div className="text-center relative z-10">
                                <div className="font-bold text-stone-300 text-[10px] group-hover:text-gold-bright transition-colors">
                                    {b.label}
                                </div>
                                <div className="text-[8px] text-stone-600 group-hover:text-stone-500 leading-tight mt-0.5">
                                    {b.desc}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </ScreenLayout>
    );
}

export function TownTavernScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                {/* Header */}
                <div className="p-3 rounded-lg border border-amber-700/50 bg-amber-900/20 flex items-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x100/5d4037/a1887f?text=Tavern')] opacity-10 bg-cover bg-center" />
                    <div className="w-12 h-12 rounded-full bg-amber-950 border border-amber-600 flex items-center justify-center text-2xl relative z-10 shadow-lg">
                        🍺
                    </div>
                    <div className="relative z-10">
                        <div className="font-bold text-amber-100">Таверна «Пьяный Гоблин»</div>
                        <div className="text-[10px] text-amber-400/80">Шумно • Слухи • Отдых</div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto">
                    <div className="col-span-2 p-2 rounded-lg border border-stone-700 bg-stone-800/50">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Посетители</div>
                        <div className="space-y-2">
                            <button
                                onClick={() => onAction('town_npc_dialog')}
                                className="w-full flex items-center gap-3 p-2 rounded bg-stone-800 border border-stone-700 hover:border-amber-500/50 hover:bg-stone-700 transition-all group text-left"
                            >
                                <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-lg">🧔</div>
                                <div>
                                    <div className="font-bold text-stone-200 text-xs group-hover:text-amber-200">Трактирщик Боб</div>
                                    <div className="text-[9px] text-stone-500">Слухи и выпивка</div>
                                </div>
                            </button>
                            <button
                                onClick={() => onAction('town_npc_dialog')}
                                className="w-full flex items-center gap-3 p-2 rounded bg-stone-800 border border-stone-700 hover:border-indigo-500/50 hover:bg-stone-700 transition-all group text-left"
                            >
                                <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-lg">🧙‍♂️</div>
                                <div>
                                    <div className="font-bold text-stone-200 text-xs group-hover:text-indigo-200">Странник</div>
                                    <div className="text-[9px] text-stone-500">Ищет наемников</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-2 p-2 rounded-lg border border-stone-700 bg-stone-800/50">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Доска заказов</div>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => onAction('town_quest_details')}
                                className="p-2 rounded bg-stone-900/50 border border-stone-700 hover:border-amber-500/50 text-left transition-all group"
                            >
                                <div className="font-bold text-stone-300 text-[10px] group-hover:text-amber-100">Крысы в подвале</div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-[9px] text-stone-500">Сложность: 1</span>
                                    <span className="text-[9px] text-amber-500">50 зм</span>
                                </div>
                            </button>
                            <button
                                onClick={() => onAction('town_quest_details')}
                                className="p-2 rounded bg-stone-900/50 border border-stone-700 hover:border-amber-500/50 text-left transition-all group"
                            >
                                <div className="font-bold text-stone-300 text-[10px] group-hover:text-amber-100">Пропавшая коза</div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-[9px] text-stone-500">Сложность: 1</span>
                                    <span className="text-[9px] text-amber-500">30 зм</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownMarketScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-yellow-600/30 bg-yellow-900/10">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">💰</span>
                        <div>
                            <div className="font-bold text-yellow-100 text-sm">Рынок</div>
                            <div className="text-[10px] text-yellow-500/80">Лучшие товары</div>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded bg-yellow-950/50 border border-yellow-700/50 text-yellow-400 font-mono text-xs">
                        1,250 зм
                    </div>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1">
                    {['Все', 'Оружие', 'Броня', 'Зелья'].map((tab, i) => (
                        <button key={tab} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${i === 0 ? 'bg-yellow-600 text-stone-950' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-2 overflow-y-auto flex-1 content-start">
                    {[
                        { name: "Железный меч", type: "Оружие", price: 150, icon: "⚔️" },
                        { name: "Кожаная броня", type: "Броня", price: 200, icon: "🛡️" },
                        { name: "Зелье лечения", type: "Расходник", price: 50, icon: "🧪" },
                        { name: "Факел", type: "Предмет", price: 5, icon: "🔥" },
                        { name: "Веревка", type: "Предмет", price: 10, icon: "➰" },
                        { name: "Рюкзак", type: "Снаряжение", price: 25, icon: "🎒" },
                    ].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => onAction('town_item_details')}
                            className="p-2 rounded-lg border border-stone-700 bg-stone-800/40 hover:bg-stone-800 hover:border-yellow-500/50 transition-all group text-left flex flex-col gap-1"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="text-[10px] font-mono text-yellow-500">{item.price}</span>
                            </div>
                            <div className="font-bold text-stone-300 text-[11px] group-hover:text-yellow-100 leading-tight">{item.name}</div>
                            <div className="text-[9px] text-stone-600">{item.type}</div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownCraftScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="p-3 rounded-lg border border-stone-600 bg-stone-800/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-700 flex items-center justify-center text-xl border border-stone-500">🔨</div>
                    <div className="flex-1">
                        <div className="font-bold text-stone-200 text-sm">Кузница</div>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1.5 bg-stone-900 rounded-full overflow-hidden">
                                <div className="w-[12%] h-full bg-blue-500" />
                            </div>
                            <span className="text-[9px] text-stone-500">12/100</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="col-span-1 flex flex-col gap-2">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Рецепты</div>
                        <div className="space-y-1 overflow-y-auto max-h-[200px]">
                            {['Слиток железа', 'Гвозди', 'Простой кинжал', 'Отмычка'].map((recipe, i) => (
                                <button key={i} className={`w-full text-left p-2 rounded text-[10px] font-medium transition-colors ${i === 0 ? 'bg-blue-900/20 border border-blue-500/30 text-blue-200' : 'bg-stone-800/30 border border-transparent text-stone-400 hover:bg-stone-800'}`}>
                                    {recipe}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 rounded-lg border border-stone-700 bg-stone-900/30 flex flex-col items-center justify-center text-center p-2">
                        <div className="w-12 h-12 rounded-full bg-stone-800 border-2 border-dashed border-stone-600 flex items-center justify-center mb-2">
                            <span className="text-xl opacity-30">⚙️</span>
                        </div>
                        <div className="text-[10px] text-stone-500">Выберите рецепт</div>
                    </div>
                </div>

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownGuildScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-900/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-purple-400 bg-purple-900/50 flex items-center justify-center text-xl shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                        ⚜️
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 text-sm">Гильдия Искателей</div>
                        <div className="text-[10px] text-purple-300/70">Ранг: Бронзовый</div>
                    </div>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto">
                    <div className="space-y-2">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Доступные контракты</div>
                        <div className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-purple-500/30 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                                <div className="font-bold text-stone-200 text-xs group-hover:text-purple-200">Зачистка руин</div>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-900 text-stone-400">Сложно</span>
                            </div>
                            <div className="text-[10px] text-stone-500 mb-2">Древние руины кишат нежитью. Требуется зачистка.</div>
                            <div className="flex items-center gap-2 text-[9px]">
                                <span className="text-gold-dim">💰 250 зм</span>
                                <span className="text-purple-400">✨ 50 реп.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownBoardScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="flex items-center justify-between px-2 py-1">
                    <span className="font-bold text-stone-400 text-xs uppercase tracking-wider">Доска объявлений</span>
                    <span className="text-[9px] text-stone-600">Обновлено: 2ч назад</span>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3 overflow-y-auto content-start p-1">
                    {[
                        { title: "Требуется алхимик", reward: "100 зм", desc: "Сварить 10 зелий силы.", diff: "Easy" },
                        { title: "Охота на волков", reward: "15 зм", desc: "Волки нападают на скот.", diff: "Med" },
                        { title: "Потерянный амулет", reward: "500 зм", desc: "Семейная реликвия.", diff: "Hard" },
                        { title: "Сбор трав", reward: "20 зм", desc: "Нужен луноцвет.", diff: "Easy" },
                    ].map((quest, i) => (
                        <button key={i} className="relative aspect-[4/3] bg-[#eaddcf] text-stone-900 p-3 shadow-md rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col text-left group">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mx-auto -mt-4 mb-2 shadow-sm" />
                            <div className="font-bold text-[11px] leading-tight mb-1 group-hover:text-red-900 transition-colors">{quest.title}</div>
                            <div className="flex-1 text-[9px] leading-snug opacity-80 font-serif">{quest.desc}</div>
                            <div className="mt-auto pt-2 border-t border-stone-400/30 flex justify-between items-end">
                                <span className="font-bold text-red-800 text-[10px]">{quest.reward}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownArenaScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="h-32 rounded-lg border border-red-900/50 bg-red-950/30 p-4 relative overflow-hidden flex flex-col justify-end group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950/60 to-slate-950" />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest animate-pulse">Live</div>
                    <div className="relative z-10">
                        <div className="text-red-500 font-bold tracking-widest uppercase text-[10px] mb-1">Главное событие</div>
                        <div className="text-xl font-black text-stone-100 leading-none">Горлок vs. Тень</div>
                        <div className="flex gap-3 mt-2 text-[9px] text-stone-400">
                            <span>Ставки: <span className="text-amber-400">1:5</span></span>
                            <span>Зрителей: <span className="text-stone-200">452</span></span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-red-500/50 hover:bg-stone-800 transition-all text-left group">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">⚔️</span>
                            <span className="font-bold text-stone-200 text-xs group-hover:text-red-200">Дуэль</span>
                        </div>
                        <div className="text-[9px] text-stone-500 mb-2">Быстрый бой 1 на 1.</div>
                        <div className="text-[9px] text-red-400 font-mono">Вход: 10 зм</div>
                    </button>
                    <button className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-red-500/50 hover:bg-stone-800 transition-all text-left group">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">🛡️</span>
                            <span className="font-bold text-stone-200 text-xs group-hover:text-red-200">Выживание</span>
                        </div>
                        <div className="text-[9px] text-stone-500 mb-2">Волны врагов.</div>
                        <div className="text-[9px] text-red-400 font-mono">Вход: 50 зм</div>
                    </button>
                </div>

                <div className="flex-1" />

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownTrainingScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="p-3 rounded-lg border border-stone-600 bg-stone-800/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-700 flex items-center justify-center text-xl border border-stone-500">🎯</div>
                    <div>
                        <div className="font-bold text-stone-100 text-sm">Плац</div>
                        <div className="text-[10px] text-stone-500">Инструктор: Сержант Брут</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 p-3 rounded-lg border border-stone-700 bg-stone-900/30">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Манекены (DPS)</div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-4 rounded bg-stone-800 border border-stone-600 hover:bg-stone-700 transition-all flex flex-col items-center gap-1">
                                <span className="text-xl">🪵</span>
                                <span className="text-[9px] font-bold text-stone-300">Обычный</span>
                            </button>
                            <button className="flex-1 py-4 rounded bg-stone-800 border border-stone-600 hover:bg-stone-700 transition-all flex flex-col items-center gap-1">
                                <span className="text-xl">🛡️</span>
                                <span className="text-[9px] font-bold text-stone-300">Бронир.</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1" />

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownTempleScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="p-4 rounded-lg border border-yellow-200/20 bg-yellow-50/5 flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-100/10 via-transparent to-transparent" />
                    <div className="text-3xl mb-1 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]">✨</div>
                    <div className="font-serif text-yellow-100 text-lg font-bold">Храм Света</div>
                    <div className="text-[10px] text-yellow-200/60 italic">"И свет укажет путь..."</div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <button className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-yellow-200/30 hover:bg-stone-800 transition-all text-left group flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-xl text-yellow-500">🙏</div>
                        <div className="flex-1">
                            <div className="font-bold text-yellow-100 text-sm">Благословение</div>
                            <div className="text-[10px] text-stone-500">Бафф на урон по нежити (+10%)</div>
                        </div>
                        <div className="text-[10px] text-yellow-400 font-mono">25 зм</div>
                    </button>
                    <button className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:border-yellow-200/30 hover:bg-stone-800 transition-all text-left group flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-xl text-emerald-500">💖</div>
                        <div className="flex-1">
                            <div className="font-bold text-yellow-100 text-sm">Исцеление</div>
                            <div className="text-[10px] text-stone-500">Снять проклятия и раны</div>
                        </div>
                        <div className="text-[10px] text-yellow-400 font-mono">50 зм</div>
                    </button>
                </div>

                <div className="flex-1" />

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownHomeScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="p-3 rounded-lg border border-orange-900/40 bg-[#3c2f2f] flex items-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x100/3c2f2f/5d4037?text=Home')] opacity-20 bg-cover bg-center" />
                    <div className="relative z-10">
                        <div className="font-bold text-orange-100 text-sm">Уютный дом</div>
                        <div className="text-[10px] text-orange-200/60">Отдых восстанавливает бодрость</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 transition-all flex flex-col items-center gap-2">
                        <span className="text-2xl">🛏️</span>
                        <span className="text-[10px] font-bold text-stone-300">Отдых</span>
                    </button>
                    <button className="p-4 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 transition-all flex flex-col items-center gap-2">
                        <span className="text-2xl">📦</span>
                        <span className="text-[10px] font-bold text-stone-300">Сундук</span>
                    </button>
                </div>

                <div className="p-3 rounded-lg border border-stone-700 bg-stone-900/30 flex-1">
                    <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Трофеи</div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="aspect-square rounded bg-stone-800/50 border border-stone-700 flex items-center justify-center text-xl" title="Голова Гоблина">👺</div>
                        <div className="aspect-square rounded bg-stone-800/30 border border-stone-700/50" />
                        <div className="aspect-square rounded bg-stone-800/30 border border-stone-700/50" />
                        <div className="aspect-square rounded bg-stone-800/30 border border-stone-700/50" />
                    </div>
                </div>

                <button
                    onClick={() => onAction('town_hub')}
                    className="w-full py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                >
                    Назад в город
                </button>
            </div>
        </ScreenLayout>
    );
}

export function TownQuestDetailsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                <div className="p-4 rounded-lg border border-amber-700/50 bg-[#2a2420] relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div className="font-serif text-xl text-amber-100 font-bold">Крысы в подвале</div>
                            <div className="px-2 py-1 rounded bg-red-900/50 border border-red-700/50 text-red-200 text-[10px] uppercase tracking-wider">Сложность: 1</div>
                        </div>
                        <div className="h-px bg-amber-800/50 w-full my-1" />
                        <p className="text-sm text-amber-100/80 font-serif leading-relaxed italic">
                            "Эти твари прогрызли мешки с мукой! Слышишь, как они скребутся? Мне нужно, чтобы кто-то спустился туда и решил проблему раз и навсегда. Плачу золотом!"
                        </p>
                        <div className="flex justify-end mt-2">
                            <span className="text-xs text-amber-500 font-bold">— Трактирщик Боб</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-stone-700 bg-stone-800/50">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Цели</div>
                        <ul className="space-y-1 text-xs text-stone-300">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                                Убить 5 гигантских крыс
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                                Найти потерянный ключ
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg border border-stone-700 bg-stone-800/50">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Награда</div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-xs text-gold-dim font-bold">
                                <span>💰</span> 50 золотых
                            </div>
                            <div className="flex items-center gap-2 text-xs text-purple-400">
                                <span>✨</span> 10 опыта
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1" />

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => onAction('town_tavern')}
                        className="py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                    >
                        Отказаться
                    </button>
                    <button
                        onClick={() => onAction('town_tavern')}
                        className="py-3 rounded-lg border border-gold-dim/50 bg-gold-dim/10 hover:bg-gold-dim/20 hover:border-gold-bright active:scale-95 transition-all text-gold-bright font-bold text-xs uppercase tracking-wider shadow-[0_0_10px_rgba(250,204,21,0.1)]"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function TownItemDetailsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex gap-4 p-4 rounded-lg border border-stone-700 bg-stone-800/50 items-start">
                    <div className="w-20 h-20 rounded bg-stone-900 border border-stone-600 flex items-center justify-center text-4xl shadow-inner">
                        ⚔️
                    </div>
                    <div className="flex-1">
                        <div className="font-bold text-stone-100 text-lg">Железный меч</div>
                        <div className="text-xs text-stone-500 mb-2">Обычное • Одноручное</div>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-700 text-[10px] text-stone-400">Урон: 4-8</span>
                            <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-700 text-[10px] text-stone-400">Вес: 2.0</span>
                        </div>
                    </div>
                </div>

                <div className="p-3 rounded-lg border border-stone-700 bg-stone-900/30 flex-1">
                    <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Описание</div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                        Стандартный меч, выкованный местным кузнецом. Надежный, простой в обращении, но быстро тупится. Подходит для начинающих искателей приключений.
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone-800 flex justify-between items-center">
                        <span className="text-xs text-stone-500">В наличии: 5 шт.</span>
                        <div className="text-xl font-mono text-gold-bright font-bold">150 зм</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => onAction('town_market')}
                        className="py-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-400 hover:text-stone-200 font-bold text-xs uppercase tracking-wider"
                    >
                        Назад
                    </button>
                    <button
                        onClick={() => onAction('town_market')}
                        className="py-3 rounded-lg border border-yellow-600/50 bg-yellow-900/20 hover:bg-yellow-900/30 hover:border-yellow-500 active:scale-95 transition-all text-yellow-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                        <span>Купить</span>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function TownNpcDialogScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3">
                <div className="flex-1 rounded-lg border border-stone-700 bg-stone-900/50 p-4 overflow-y-auto flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-600 flex-shrink-0 flex items-center justify-center text-xl">🧔</div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-stone-500 mb-1">Трактирщик Боб</div>
                            <div className="p-3 rounded-lg rounded-tl-none bg-stone-800 border border-stone-700 text-sm text-stone-200 shadow-sm">
                                Добро пожаловать в «Пьяный Гоблин»! Чего желаете? У нас лучшее пиво в городе, клянусь бородой!
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-600 flex-shrink-0 flex items-center justify-center text-xl">👤</div>
                        <div className="flex-1 flex flex-col items-end">
                            <div className="text-[10px] font-bold text-stone-500 mb-1">Вы</div>
                            <div className="p-3 rounded-lg rounded-tr-none bg-blue-900/20 border border-blue-800/50 text-sm text-blue-100 shadow-sm">
                                Есть какие-нибудь новости?
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-600 flex-shrink-0 flex items-center justify-center text-xl">🧔</div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-stone-500 mb-1">Трактирщик Боб</div>
                            <div className="p-3 rounded-lg rounded-tl-none bg-stone-800 border border-stone-700 text-sm text-stone-200 shadow-sm">
                                Говорят, в старых руинах видели призраков. А еще крысы в подвале совсем обнаглели...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <button
                        onClick={() => onAction('town_quest_details')}
                        className="p-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 hover:border-amber-500/50 transition-all text-left text-xs text-stone-300 hover:text-amber-100"
                    >
                        1. Расскажи про крыс. (Взять задание)
                    </button>
                    <button
                        onClick={() => onAction('town_market')}
                        className="p-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 hover:border-yellow-500/50 transition-all text-left text-xs text-stone-300 hover:text-yellow-100"
                    >
                        2. Покажи, что у тебя есть на продажу. (Торговля)
                    </button>
                    <button
                        onClick={() => onAction('town_tavern')}
                        className="p-3 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-700 transition-all text-left text-xs text-stone-500 hover:text-stone-400"
                    >
                        3. Бывай. (Уйти)
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}
