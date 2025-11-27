import { useState } from 'react';
import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function CharacterScreen({ screen, onAction }: ScreenProps) {
    // Mock active character data
    const character = {
        name: 'Аларик Теневой',
        class: 'Плут',
        level: 3,
        race: 'Эльф',
        hp: { current: 24, max: 32 },
        xp: { current: 1250, max: 3000 },
        gold: 145,
        avatar: 'https://placehold.co/400x200/334155/94a3b8?text=Hero+Background'
    };

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
        { label: 'Скрытность', attr: 'ЛОВ', val: '+7' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} hideTitle>
            <div className="flex flex-col h-full gap-2">
                {/* Hero Card */}
                <div className="relative h-32 rounded-lg overflow-hidden border-2 border-stone-700 shadow-lg shrink-0 group">
                    <img
                        src={character.avatar}
                        alt={character.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className="flex justify-between items-end mb-1">
                            <div>
                                <div className="text-gold-dim text-[9px] font-bold tracking-widest uppercase mb-0.5">{character.race} • {character.class}</div>
                                <h2 className="text-lg font-display text-white text-shadow-lg leading-none">{character.name}</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-display text-gold-bright text-shadow-lg leading-none">{character.level}</div>
                                <div className="text-[8px] text-stone-400 uppercase tracking-wider">Уровень</div>
                            </div>
                        </div>

                        {/* Stats Bars */}
                        <div className="flex gap-3">
                            <div className="flex-1 flex items-center gap-2 text-[8px] font-bold text-stone-300">
                                <span className="w-3">HP</span>
                                <div className="flex-1 h-1 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-red-700 w-[75%]" />
                                </div>
                                <span className="w-5 text-right">{character.hp.current}</span>
                            </div>
                            <div className="flex-1 flex items-center gap-2 text-[8px] font-bold text-stone-300">
                                <span className="w-3">XP</span>
                                <div className="flex-1 h-1 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-indigo-600 w-[40%]" />
                                </div>
                                <span className="w-5 text-right">{character.xp.current}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attributes & Paper Doll Container */}
                <div className="flex-1 min-h-0 flex gap-2 overflow-hidden">
                    {/* Left Panel: Attributes & Skills */}
                    <div className="w-[25%] flex flex-col gap-2 overflow-y-auto pr-1">
                        {/* Attributes */}
                        <div className="grid grid-cols-1 gap-1.5 shrink-0">
                            {attributes.map((attr) => (
                                <div key={attr.label} className="flex flex-row justify-between items-center p-1.5 rounded border border-stone-700 bg-stone-800/40 relative">
                                    <div className="flex flex-col">
                                        <div className="text-[8px] font-bold text-stone-500 uppercase tracking-wider">{attr.label}</div>
                                        <div className="text-base font-bold text-stone-200 leading-none">{attr.value}</div>
                                    </div>
                                    <div className="text-[9px] font-mono text-gold-dim">{attr.mod}</div>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="text-[9px] font-bold text-gold-dim uppercase tracking-wider">Навыки</h3>
                            <div className="space-y-0.5">
                                {skills.map((skill) => (
                                    <div key={skill.label} className="flex justify-between items-center p-1 rounded border border-stone-800 bg-stone-900/30">
                                        <span className="text-[9px] text-stone-300 truncate">{skill.label}</span>
                                        <span className="text-[9px] font-mono text-emerald-400">{skill.val}</span>
                                    </div>
                                ))}
                                <div className="text-[8px] text-stone-500 text-center italic pt-0.5">...и еще 12</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Paper Doll */}
                    <div className="flex-1 rounded-lg border border-stone-700 bg-[#151412] relative overflow-hidden p-1 flex items-center justify-center">
                        {/* Background Silhouette */}
                        <div className="absolute inset-0 bg-[url('https://placehold.co/400x500/151412/292524?text=Silhouette')] bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none" />

                        {/* Paper Doll Grid */}
                        <div className="relative z-10 grid grid-cols-3 gap-x-6 gap-y-1 w-full max-w-[340px]">
                            {/* Left Column */}
                            <div className="flex flex-col gap-1 items-end pt-2">
                                <DollSlot icon="🧥" label="Плащ" />
                                <DollSlot icon="🗡️" label="Пр. рука" active />
                                <DollSlot icon="🧤" label="Перчатки" />
                                <div className="h-1" />
                                <DollSlot icon="💍" label="Кольцо" />
                                <DollSlot icon="💍" label="Кольцо" />
                            </div>

                            {/* Center Column */}
                            <div className="flex flex-col gap-1 items-center">
                                <DollSlot icon="🧢" label="Голова" />
                                <DollSlot icon="📿" label="Амулет" />
                                <DollSlot icon="👕" label="Доспех" active />
                                <DollSlot icon="🥋" label="Пояс" />
                                <DollSlot icon="👖" label="Штаны" />
                                <DollSlot icon="👢" label="Сапоги" />
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-1 items-start pt-2">
                                <DollSlot icon="🛡️" label="Наплечники" />
                                <DollSlot icon="🛡️" label="Лев. рука" />
                                <DollSlot icon="🎒" label="Рюкзак" onClick={() => onAction('character_inventory')} />
                                <div className="h-1" />
                                <DollSlot icon="💍" label="Кольцо" />
                                <DollSlot icon="💍" label="Кольцо" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Toolbar */}
                <div className="grid grid-cols-3 gap-1 pt-0.5 border-t border-stone-800 shrink-0">
                    <button onClick={() => onAction('character_story')} className="flex flex-col items-center gap-0.5 p-1 rounded hover:bg-stone-800 transition-colors group">
                        <span className="text-base group-hover:scale-110 transition-transform">📖</span>
                        <span className="text-[8px] font-bold text-stone-400 group-hover:text-gold-bright">История</span>
                    </button>
                    <button onClick={() => onAction('character_relations')} className="flex flex-col items-center gap-0.5 p-1 rounded hover:bg-stone-800 transition-colors group">
                        <span className="text-base group-hover:scale-110 transition-transform">🤝</span>
                        <span className="text-[8px] font-bold text-stone-400 group-hover:text-gold-bright">Связи</span>
                    </button>
                    <button onClick={() => onAction('character_list')} className="flex flex-col items-center gap-0.5 p-1 rounded hover:bg-stone-800 transition-colors group">
                        <span className="text-base group-hover:scale-110 transition-transform">👥</span>
                        <span className="text-[8px] font-bold text-stone-400 group-hover:text-gold-bright">Герои</span>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

function DollSlot({ icon, label, active, onClick }: { icon: string; label: string; active?: boolean; onClick?: () => void }) {
    return (
        <div onClick={onClick} className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className={`w-10 h-10 rounded border flex items-center justify-center text-xl transition-all relative ${active ? 'border-gold-dim bg-gold-dark/20 shadow-[0_0_10px_rgba(244,208,63,0.2)]' : 'border-stone-700 bg-stone-800/50 group-hover:border-stone-500'}`}>
                <span className={active ? 'opacity-100' : 'opacity-30 grayscale'}>{icon}</span>
                {!active && <div className="absolute inset-0 bg-black/20" />}
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-wider ${active ? 'text-gold-dim' : 'text-stone-600 group-hover:text-stone-400'}`}>
                {label}
            </span>
        </div>
    );
}

export function CharacterListScreen({ screen, onAction }: ScreenProps) {
    const mockCharacters = [
        { id: 'char1', name: 'Аларик Теневой', class: 'Плут', level: 3, race: 'Эльф', active: true, avatar: 'https://placehold.co/100x100/334155/94a3b8?text=Hero' },
        { id: 'char2', name: 'Торгрим Камнерук', class: 'Воин', level: 5, race: 'Дварф', active: false, avatar: 'https://placehold.co/100x100/451a03/d97706?text=Dwarf' },
        { id: 'char3', name: 'Элиандра', class: 'Волшебник', level: 2, race: 'Человек', active: false, avatar: 'https://placehold.co/100x100/1e1b4b/818cf8?text=Mage' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-3">
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                    {mockCharacters.map((char) => (
                        <div key={char.id} className={`p-3 rounded-lg border ${char.active ? 'border-gold-dim bg-gold-dark/10' : 'border-stone-700 bg-stone-800/50'} relative group transition-all hover:bg-stone-800`}>
                            <div className="flex gap-3 items-center">
                                <div className={`w-12 h-12 rounded-full border-2 ${char.active ? 'border-gold-bright shadow-[0_0_10px_rgba(244,208,63,0.3)]' : 'border-stone-600'} overflow-hidden bg-stone-900`}>
                                    <img src={char.avatar} alt={char.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className={`font-bold ${char.active ? 'text-gold-bright' : 'text-stone-200'}`}>{char.name}</h3>
                                        {char.active && <span className="text-[9px] uppercase font-bold text-emerald-400 bg-emerald-900/30 px-1.5 py-0.5 rounded border border-emerald-500/30">Активен</span>}
                                    </div>
                                    <div className="text-xs text-stone-400">{char.race} • {char.class} • Уровень {char.level}</div>
                                </div>
                            </div>

                            {!char.active && (
                                <button onClick={() => onAction('character')} className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center backdrop-blur-[1px] transition-opacity">
                                    <span className="px-4 py-2 rounded-full bg-gold-dim text-stone-950 font-bold text-xs uppercase shadow-lg transform scale-90 group-hover:scale-100 transition-transform">Выбрать</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <button onClick={() => onAction('solo_char')} className="w-full py-3 rounded-lg border border-dashed border-stone-600 text-stone-400 hover:border-gold-dim hover:text-gold-dim hover:bg-stone-800/50 transition-all flex items-center justify-center gap-2 uppercase font-bold text-xs tracking-wider">
                    <span>+</span> Создать нового персонажа
                </button>
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
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-3">
                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((cat, i) => (
                        <button key={cat} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap border ${i === 0 ? 'bg-gold-dim text-stone-950 border-gold-dim' : 'bg-stone-800 text-stone-400 border-stone-700'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-5 gap-2 content-start flex-1 overflow-y-auto pr-1">
                    {items.map((item) => (
                        <div key={item.id} className={`aspect-square rounded border ${item.rarity === 'rare' ? 'border-gold-dim bg-gold-dark/10' : 'border-stone-700 bg-stone-800/50'} flex items-center justify-center relative group cursor-pointer hover:bg-stone-700`}>
                            <span className="text-xl">{item.icon}</span>
                            {item.count > 1 && (
                                <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-stone-400">x{item.count}</span>
                            )}
                        </div>
                    ))}
                    {/* Empty slots */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-square rounded border border-stone-800 bg-stone-900/30" />
                    ))}
                </div>

                {/* Gold */}
                <div className="flex justify-between items-center p-3 rounded-lg border border-stone-700 bg-stone-800">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Золото</span>
                    <span className="text-gold-bright font-mono font-bold">145 🪙</span>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterStoryScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-4 overflow-y-auto">
                <div className="space-y-2">
                    <h3 className="text-gold-dim font-bold uppercase tracking-wider text-xs">Биография</h3>
                    <p className="text-sm text-stone-300 leading-relaxed italic">
                        "Рожденный в тени великих шпилей, Аларик рано познал, что закон — лишь паутина для мух, но не для шершней. Его кинжал всегда остер, а совесть... совесть он оставил в том переулке, где впервые пролил кровь."
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-gold-dim font-bold uppercase tracking-wider text-xs">Заметки</h3>
                    <div className="space-y-2">
                        <div className="p-3 rounded border border-stone-700 bg-stone-800/50">
                            <div className="text-xs text-stone-500 mb-1">2 дня назад</div>
                            <div className="text-sm text-stone-200">Трактирщик в "Пьяном Гоблине" что-то знает о пропавшем амулете. Нужно надавить на него.</div>
                        </div>
                        <div className="p-3 rounded border border-stone-700 bg-stone-800/50">
                            <div className="text-xs text-stone-500 mb-1">5 дней назад</div>
                            <div className="text-sm text-stone-200">Встретил странного старика у ворот. Он бормотал про "Возвращение Тени".</div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function CharacterRelationsScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-4">
                <div className="space-y-2">
                    <h3 className="text-gold-dim font-bold uppercase tracking-wider text-xs">Фракции</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 rounded border border-stone-700 bg-stone-800/50">
                            <span className="font-bold text-stone-200">Гильдия Воров</span>
                            <span className="text-emerald-400 font-bold">Дружелюбие</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded border border-stone-700 bg-stone-800/50">
                            <span className="font-bold text-stone-200">Городская Стража</span>
                            <span className="text-red-400 font-bold">Враждебность</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-gold-dim font-bold uppercase tracking-wider text-xs">NPC</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded border border-stone-700 bg-stone-800/50 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-stone-700" />
                            <div className="text-xs">
                                <div className="font-bold text-stone-200">Бармен Боб</div>
                                <div className="text-stone-500">Нейтрал</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function SoloCharScreen({ screen, onAction }: ScreenProps) {
    const [mode, setMode] = useState<'quick' | 'full'>('quick');

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-4">
                {/* Mode Toggle */}
                <div className="flex p-1 rounded-lg bg-stone-800 border border-stone-700">
                    <button
                        onClick={() => setMode('quick')}
                        className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${mode === 'quick' ? 'bg-gold-dim text-stone-900 shadow-lg' : 'text-stone-400 hover:text-stone-200'}`}
                    >
                        Быстрый старт
                    </button>
                    <button
                        onClick={() => setMode('full')}
                        className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${mode === 'full' ? 'bg-gold-dim text-stone-900 shadow-lg' : 'text-stone-400 hover:text-stone-200'}`}
                    >
                        Полная анкета
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {mode === 'quick' ? (
                        <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                            <div className="w-32 h-32 rounded-full border-4 border-stone-700 bg-stone-800 flex items-center justify-center text-4xl relative overflow-hidden group cursor-pointer hover:border-gold-dim transition-colors">
                                <span className="opacity-50 group-hover:opacity-100 transition-opacity">🎲</span>
                                <div className="absolute bottom-2 text-[8px] uppercase font-bold text-stone-500">Случайно</div>
                            </div>
                            <div className="space-y-2 max-w-xs">
                                <h3 className="text-xl font-bold text-stone-200">Случайный герой</h3>
                                <p className="text-xs text-stone-400">
                                    Мы сгенерируем для вас имя, расу, класс и предысторию. Идеально для быстрого старта.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Имя персонажа</label>
                                <input type="text" className="w-full bg-stone-900 border border-stone-700 rounded p-2 text-stone-200 focus:border-gold-dim outline-none transition-colors" placeholder="Введите имя..." />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Раса</label>
                                    <select className="w-full bg-stone-900 border border-stone-700 rounded p-2 text-stone-200 focus:border-gold-dim outline-none transition-colors">
                                        <option>Человек</option>
                                        <option>Эльф</option>
                                        <option>Дварф</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Класс</label>
                                    <select className="w-full bg-stone-900 border border-stone-700 rounded p-2 text-stone-200 focus:border-gold-dim outline-none transition-colors">
                                        <option>Воин</option>
                                        <option>Плут</option>
                                        <option>Маг</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <button onClick={() => onAction('run_scene')} className="w-full py-4 rounded-lg bg-gradient-to-r from-gold-dim to-amber-600 text-stone-950 font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all transform active:scale-95">
                    Создать и начать
                </button>
            </div>
        </ScreenLayout>
    );
}

// Deprecated screens - kept for type safety if referenced elsewhere, but empty/redirecting
export function CharacterSheetScreen({ screen, onAction }: ScreenProps) {
    return <CharacterScreen screen={screen} onAction={onAction} />;
}

export function CharacterStatsScreen({ screen, onAction }: ScreenProps) {
    return <CharacterScreen screen={screen} onAction={onAction} />;
}
