import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function CharacterScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                {/* Active Character Card */}
                <div className="p-4 rounded-xl border border-stone-600 bg-stone-900/90 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/600x200/1c1917/44403c?text=Hero+Background')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30" />
                    <div className="relative z-10 flex gap-4 items-center">
                        <div className="w-20 h-20 rounded-full border-2 border-gold-bright shadow-[0_0_15px_rgba(244,208,63,0.3)] overflow-hidden bg-stone-800">
                            <img src="https://placehold.co/100x100/334155/94a3b8?text=Hero" alt="Hero" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold text-gold-bright tracking-wide">Аларик Теневой</h2>
                                    <div className="text-xs text-stone-400 font-medium">Эльф • Плут • Уровень 3</div>
                                </div>
                                <div className="px-2 py-0.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                                    Здоров
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <div className="flex justify-between text-[9px] text-stone-400 uppercase tracking-wider font-bold">
                                    <span>HP</span>
                                    <span>24 / 30</span>
                                </div>
                                <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-red-600 w-[80%] shadow-[0_0_5px_rgba(220,38,38,0.5)]" />
                                </div>

                                <div className="flex justify-between text-[9px] text-stone-400 uppercase tracking-wider font-bold mt-1">
                                    <span>XP</span>
                                    <span>1200 / 3000</span>
                                </div>
                                <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-blue-500 w-[40%] shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => onAction('character_sheet')} className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 hover:border-gold-dim transition-all flex items-center gap-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">📜</span>
                        <div className="text-left">
                            <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright">Лист Героя</div>
                            <div className="text-[10px] text-stone-500">Характеристики</div>
                        </div>
                    </button>
                    <button onClick={() => onAction('character_inventory')} className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 hover:border-gold-dim transition-all flex items-center gap-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">🎒</span>
                        <div className="text-left">
                            <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright">Инвентарь</div>
                            <div className="text-[10px] text-stone-500">Вещи и лут</div>
                        </div>
                    </button>
                    <button onClick={() => onAction('character_story')} className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 hover:border-gold-dim transition-all flex items-center gap-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">📖</span>
                        <div className="text-left">
                            <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright">История</div>
                            <div className="text-[10px] text-stone-500">Биография</div>
                        </div>
                    </button>
                    <button onClick={() => onAction('character_relations')} className="p-3 rounded-lg border border-stone-700 bg-stone-800/50 hover:bg-stone-800 hover:border-gold-dim transition-all flex items-center gap-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
                        <div className="text-left">
                            <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright">Связи</div>
                            <div className="text-[10px] text-stone-500">Фракции</div>
                        </div>
                    </button>
                </div>

                {/* Management Actions */}
                <div className="mt-auto flex gap-3">
                    <button onClick={() => onAction('character_list')} className="flex-1 py-3 rounded-lg border border-stone-600 bg-stone-800 text-stone-400 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 hover:text-stone-200 transition-colors">
                        Сменить героя
                    </button>
                    <button onClick={() => onAction('solo_char')} className="flex-1 py-3 rounded-lg border border-gold-dim bg-gold-dark/20 text-gold-bright text-xs font-bold uppercase tracking-wider hover:bg-gold-dark/30 transition-colors flex items-center justify-center gap-2">
                        <span>+</span> Новый герой
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterListScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <p className="text-sm text-slate-200 whitespace-pre-wrap">
                {screen.description}
            </p>
        </ScreenLayout>
    );
}

export function CharacterSheetScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex gap-3 items-start p-2 rounded-md border border-slate-700 bg-slate-900/50">
                    <div className="w-16 h-16 rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-3xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('https://placehold.co/100x100/334155/94a3b8?text=Hero')] bg-cover bg-center opacity-80" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="font-bold text-slate-100 text-sm">Аларик Теневой</div>
                                <div className="text-[10px] text-slate-400">Эльф • Плут • Ур. 3</div>
                            </div>
                            <div className="px-1.5 py-0.5 rounded bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-[9px]">
                                Здоров
                            </div>
                        </div>
                        <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                            <div className="h-full bg-red-500 w-[80%]" title="HP" />
                            <div className="h-full bg-blue-500 w-[40%]" title="XP" />
                        </div>
                        <div className="flex justify-between text-[8px] opacity-60 mt-0.5">
                            <span>HP: 24/30</span>
                            <span>XP: 1200/3000</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-slate-700 bg-slate-900/30 p-2 flex flex-col gap-1">
                        <div className="text-[9px] uppercase tracking-wider opacity-50 mb-1">Атрибуты</div>
                        <div className="flex justify-between items-center p-1 rounded bg-slate-800/50">
                            <span>СИЛ</span>
                            <span className="font-mono text-amber-400">10 (+0)</span>
                        </div>
                        <div className="flex justify-between items-center p-1 rounded bg-slate-800/50">
                            <span>ЛОВ</span>
                            <span className="font-mono text-amber-400">16 (+3)</span>
                        </div>
                        <div className="flex justify-between items-center p-1 rounded bg-slate-800/50">
                            <span>ТЕЛ</span>
                            <span className="font-mono text-amber-400">12 (+1)</span>
                        </div>
                        <div className="flex justify-between items-center p-1 rounded bg-slate-800/50">
                            <span>ИНТ</span>
                            <span className="font-mono text-amber-400">14 (+2)</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/30 p-2">
                            <div className="text-[9px] uppercase tracking-wider opacity-50 mb-1">Экипировка</div>
                            <div className="grid grid-cols-2 gap-1">
                                <div className="aspect-square rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-lg" title="Правая рука">🗡️</div>
                                <div className="aspect-square rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-lg opacity-50" title="Левая рука">🛡️</div>
                                <div className="aspect-square rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-lg" title="Тело">👕</div>
                                <div className="aspect-square rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-lg" title="Голова">🧢</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterStatsScreen({ screen, onAction }: ScreenProps) {
    const attributes = [
        { label: 'СИЛ', value: 14, mod: '+2', icon: '💪' },
        { label: 'ЛОВ', value: 16, mod: '+3', icon: '🦵' },
        { label: 'ТЕЛ', value: 12, mod: '+1', icon: '🛡️' },
        { label: 'ИНТ', value: 10, mod: '+0', icon: '🧠' },
        { label: 'МУД', value: 13, mod: '+1', icon: '👁️' },
        { label: 'ХАР', value: 8, mod: '-1', icon: '🎭' },
    ];

    const skills = [
        { label: 'Акробатика', attr: 'ЛОВ', val: '+5' },
        { label: 'Атлетика', attr: 'СИЛ', val: '+4' },
        { label: 'Восприятие', attr: 'МУД', val: '+3' },
        { label: 'Выживание', attr: 'МУД', val: '+3' },
        { label: 'Скрытность', attr: 'ЛОВ', val: '+7' },
        { label: 'Убеждение', attr: 'ХАР', val: '-1' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3 overflow-y-auto pb-2">
                {/* Attributes Grid */}
                <div className="grid grid-cols-3 gap-2">
                    {attributes.map((attr) => (
                        <div key={attr.label} className="flex flex-col items-center p-2 rounded-lg border border-stone-700 bg-stone-800/50 relative overflow-hidden">
                            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">{attr.label}</div>
                            <div className="text-xl font-bold text-stone-200">{attr.value}</div>
                            <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-stone-900 border border-stone-600 flex items-center justify-center text-[10px] font-mono text-gold-dim">
                                {attr.mod}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 flex-1 min-h-0">
                    {/* Paper Doll / Equipment */}
                    <div className="w-1/2 flex flex-col gap-2">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider text-center">Экипировка</div>
                        <div className="flex-1 rounded-lg border border-stone-700 bg-[#1c1917] relative p-2">
                            <div className="absolute inset-0 bg-[url('https://placehold.co/200x300/1c1917/292524?text=Body')] bg-contain bg-center bg-no-repeat opacity-20" />

                            {/* Slots */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded border border-stone-600 bg-stone-800/80 flex items-center justify-center text-xl" title="Голова">🧢</div>
                            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-10 h-14 rounded border border-stone-600 bg-stone-800/80 flex items-center justify-center text-xl" title="Тело">👕</div>
                            <div className="absolute top-14 left-2 w-8 h-12 rounded border border-stone-600 bg-stone-800/80 flex items-center justify-center text-xl" title="Правая рука">🗡️</div>
                            <div className="absolute top-14 right-2 w-8 h-12 rounded border border-stone-600 bg-stone-800/80 flex items-center justify-center text-xl opacity-50" title="Левая рука">🛡️</div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded border border-stone-600 bg-stone-800/80 flex items-center justify-center text-xl" title="Ноги">👢</div>
                        </div>
                    </div>

                    {/* Skills List */}
                    <div className="w-1/2 flex flex-col gap-2">
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider text-center">Навыки</div>
                        <div className="flex-1 rounded-lg border border-stone-700 bg-stone-900/30 overflow-y-auto p-1 space-y-1">
                            {skills.map((skill) => (
                                <div key={skill.label} className="flex justify-between items-center p-1.5 rounded hover:bg-stone-800 transition-colors group">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-stone-600 group-hover:bg-gold-dim" />
                                        <span className="text-[10px] text-stone-300">{skill.label}</span>
                                    </div>
                                    <span className={`text-[10px] font-mono ${skill.val.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {skill.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterInventoryScreen({ screen, onAction }: ScreenProps) {
    const categories = ['Все', 'Оружие', 'Броня', 'Расходники', 'Лут'];
    const items = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        icon: i === 0 ? '🗡️' : i === 1 ? '🛡️' : i === 2 ? '🧪' : i === 3 ? '📜' : '',
        count: i === 2 ? 5 : 1,
        rarity: i === 0 ? 'rare' : 'common'
    }));

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                {/* Header Stats */}
                <div className="flex gap-2">
                    <div className="flex-1 h-8 flex items-center justify-between px-2 rounded bg-stone-800 border border-stone-700">
                        <span className="text-gold-bright font-mono font-bold">1,250 зм</span>
                        <span className="text-[9px] text-stone-500">Золото</span>
                    </div>
                    <div className="flex-1 h-8 flex flex-col justify-center px-2 rounded bg-stone-800 border border-stone-700 relative overflow-hidden">
                        <div className="flex justify-between text-[9px] relative z-10">
                            <span className="text-stone-400">Вес</span>
                            <span className="text-stone-300">12 / 50 кг</span>
                        </div>
                        <div className="absolute bottom-0 left-0 h-0.5 bg-stone-600 w-full">
                            <div className="h-full bg-stone-400 w-[24%]" />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-3 py-1 rounded-full text-[10px] whitespace-nowrap border transition-colors ${i === 0
                                ? 'bg-gold-dim/20 border-gold-dim text-gold-bright'
                                : 'bg-stone-800 border-stone-700 text-stone-500 hover:bg-stone-700 hover:text-stone-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="flex-1 rounded-lg border border-stone-700 bg-stone-900/30 p-2 overflow-y-auto">
                    <div className="grid grid-cols-5 gap-2">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                className={`aspect-square rounded border flex items-center justify-center relative group transition-all ${item.rarity === 'rare'
                                    ? 'border-blue-900 bg-blue-900/10 hover:border-blue-500 hover:bg-blue-900/20'
                                    : 'border-stone-700 bg-stone-800/50 hover:border-stone-500 hover:bg-stone-800'
                                    }`}
                            >
                                <span className="text-xl filter drop-shadow-md group-hover:scale-110 transition-transform">{item.icon}</span>
                                {item.count > 1 && (
                                    <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono bg-stone-950/80 px-1 rounded border border-stone-700 text-stone-300">
                                        {item.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Selected Item Detail */}
                <div className="h-20 rounded-lg border border-stone-700 bg-stone-800/80 p-2 flex gap-3">
                    <div className="aspect-square rounded bg-stone-900 border border-stone-600 flex items-center justify-center text-2xl">
                        🗡️
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="flex justify-between items-start">
                            <div className="font-bold text-stone-200 text-xs truncate">Короткий меч</div>
                            <div className="text-[9px] text-blue-400 font-bold uppercase">Редкое</div>
                        </div>
                        <div className="text-[9px] text-stone-500 mb-1">Одноручное • Меч</div>
                        <p className="text-[9px] text-stone-400 leading-snug line-clamp-2">
                            Легкий клинок, идеально сбалансированный для быстрых ударов.
                        </p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterStoryScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-3 text-[11px] text-slate-200">
                {/* Biography Section */}
                <div className="flex-1 rounded-lg border border-stone-700 bg-[#2a2420] p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/2a2420/451a03?text=Parchment')] opacity-10 bg-cover" />
                    <h3 className="font-serif font-bold text-amber-100 mb-2 border-b border-amber-900/30 pb-1 relative z-10">Биография</h3>
                    <div className="overflow-y-auto h-[calc(100%-2rem)] pr-1 relative z-10">
                        <p className="mb-4 text-[10px] font-serif leading-relaxed text-amber-100/90">
                            Родился в тенистых лесах Элвенгарда. С детства проявлял склонность к скрытности и мелкому воровству, что привело к изгнанию из клана. С тех пор скитается по миру в поисках наживы и искупления.
                        </p>
                        <p className="mb-4 text-[10px] font-serif leading-relaxed text-amber-100/90">
                            В последней вылазке потерял напарника, и теперь его призрак является во снах, требуя вернуть украденный амулет в храм.
                        </p>
                    </div>
                </div>

                {/* Quest Log */}
                <div className="h-1/2 flex flex-col gap-2">
                    <div className="flex gap-2 border-b border-stone-700 pb-1">
                        <button className="text-[10px] font-bold text-gold-bright border-b-2 border-gold-bright px-2 pb-0.5">Активные</button>
                        <button className="text-[10px] font-bold text-stone-500 hover:text-stone-300 px-2 pb-0.5 transition-colors">Завершенные</button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                        <div className="p-2 rounded border border-amber-900/40 bg-stone-900/40 hover:bg-stone-800 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                                <div className="font-bold text-stone-200 text-xs group-hover:text-amber-100">Крысы в подвале</div>
                                <span className="text-[9px] text-amber-500 font-mono">50 зм</span>
                            </div>
                            <p className="text-[9px] text-stone-500 line-clamp-2">
                                Трактирщик Боб жалуется на шум в подвале. Нужно спуститься и проверить.
                            </p>
                            <div className="mt-2 flex gap-1">
                                <span className="px-1.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-[8px] text-stone-400">Таверна</span>
                                <span className="px-1.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-[8px] text-stone-400">Бой</span>
                            </div>
                        </div>

                        <div className="p-2 rounded border border-stone-700 bg-stone-900/40 hover:bg-stone-800 transition-colors cursor-pointer group opacity-70">
                            <div className="flex justify-between items-start mb-1">
                                <div className="font-bold text-stone-300 text-xs group-hover:text-stone-200">Долг Гильдии</div>
                                <span className="text-[9px] text-red-400 font-mono">Срочно</span>
                            </div>
                            <p className="text-[9px] text-stone-500 line-clamp-2">
                                Вернуть 500 золотых главе Гильдии Воров до новолуния.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterRelationsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="space-y-3 overflow-y-auto pr-1">
                    <div className="rounded border border-slate-700 bg-slate-900/50 p-2">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-200">Гильдия Искателей</span>
                            <span className="text-emerald-400">Дружелюбие</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[65%]" />
                        </div>
                    </div>

                    <div className="rounded border border-slate-700 bg-slate-900/50 p-2">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-200">Стража Города</span>
                            <span className="text-amber-400">Нейтрально</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 w-[45%]" />
                        </div>
                    </div>

                    <div className="rounded border border-slate-700 bg-slate-900/50 p-2">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-slate-200">Культ Теней</span>
                            <span className="text-red-400">Враждебность</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[15%]" />
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function SoloCharScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                <div className="text-center mb-2">
                    <div className="w-24 h-24 mx-auto rounded-full bg-stone-800 border-2 border-dashed border-stone-600 flex items-center justify-center text-4xl text-stone-600 mb-3 cursor-pointer hover:border-gold-dim hover:text-gold-dim transition-colors">
                        +
                    </div>
                    <p className="text-xs text-stone-500">Нажмите, чтобы загрузить портрет</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Имя Героя</label>
                        <input
                            type="text"
                            placeholder="Введите имя..."
                            className="w-full bg-stone-900/50 border border-stone-700 rounded p-2 text-stone-200 text-sm focus:border-gold-dim focus:outline-none placeholder:text-stone-600"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Раса</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['👨', '🧝', '🧔', '👹'].map((icon, i) => (
                                <button key={i} className={`aspect-square rounded border ${i === 1 ? 'border-gold-dim bg-gold-dark/20' : 'border-stone-700 bg-stone-800/50'} flex items-center justify-center text-2xl hover:bg-stone-700 transition-colors`}>
                                    {icon}
                                </button>
                            ))}
                        </div>
                        <div className="text-center text-[10px] text-gold-dim font-bold mt-1">Эльф</div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Класс</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['⚔️', '🔮', '🗡️', '✨'].map((icon, i) => (
                                <button key={i} className={`aspect-square rounded border ${i === 2 ? 'border-gold-dim bg-gold-dark/20' : 'border-stone-700 bg-stone-800/50'} flex items-center justify-center text-2xl hover:bg-stone-700 transition-colors`}>
                                    {icon}
                                </button>
                            ))}
                        </div>
                        <div className="text-center text-[10px] text-gold-dim font-bold mt-1">Плут</div>
                    </div>
                </div>

                <div className="mt-auto pt-4">
                    <button
                        onClick={() => onAction('run_scene')}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-dark to-yellow-600 border border-gold-bright text-stone-950 font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:brightness-110 active:scale-95 transition-all"
                    >
                        Создать и Начать
                    </button>
                    <button
                        onClick={() => onAction('play_menu')}
                        className="w-full mt-2 py-2 text-xs text-stone-500 hover:text-stone-300 transition-colors"
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}
