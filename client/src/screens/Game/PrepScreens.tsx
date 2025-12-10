import { useState } from 'react';
import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

// --- Mission Selection Screen ---
export function MissionSelectScreen({ screen, onAction }: ScreenProps) {
    const [selectedMissionId, setSelectedMissionId] = useState<string>('swamp');
    const [difficulty, setDifficulty] = useState<'normal' | 'veteran' | 'nightmare'>('normal');

    const missions = [
        {
            id: 'swamp',
            name: 'Мрачные Топи',
            level: '1-3',
            rating: 4,
            tags: ['Слизь', 'Яд', 'Разведка'],
            desc: 'Зловонные болота, кишащие тварями. Идеальное место для новичков, желающих найти свою смерть... или немного золота.',
            status: 'active',
            image: 'https://placehold.co/600x400/1c1917/064e3b?text=Swamp+Art'
        },
        {
            id: 'crypt',
            name: 'Забытый Склеп',
            level: '3-5',
            rating: 5,
            tags: ['Нежить', 'Тьма', 'Лут'],
            desc: 'Древняя гробница давно забытого короля. Говорят, мертвецы здесь не очень гостеприимны.',
            status: 'locked',
            image: 'https://placehold.co/600x400/1c1917/312e81?text=Crypt+Art'
        },
        {
            id: 'forest',
            name: 'Лес Теней',
            level: '2-4',
            rating: 3,
            tags: ['Звери', 'Засада', 'Охота'],
            desc: 'Густая чаща, где каждый шорох может стать последним, что вы услышите.',
            status: 'locked',
            image: 'https://placehold.co/600x400/1c1917/3f6212?text=Forest+Art'
        },
    ];

    const activeMission = missions.find(m => m.id === selectedMissionId) || missions[0];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" backTarget={screen.backTarget} hideTitle>
            <div className="flex flex-col h-full relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black pointer-events-none" />

                {/* Top: Hero Bar */}
                <div className="relative z-10 p-2 border-b border-stone-800 bg-stone-900/80 flex items-center gap-3 shadow-md">
                    <div className="w-10 h-10 rounded border border-gold-dim/30 bg-stone-800 overflow-hidden shrink-0">
                        <img src="https://placehold.co/100x100/334155/94a3b8?text=Hero" alt="Hero" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Ваш Агент</div>
                        <div className="text-sm font-cinzel font-bold text-stone-200 truncate">Аларик Теневой</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-2 py-1 rounded bg-stone-950 border border-stone-800 text-[10px] font-bold text-gold-dim">LVL 3</div>
                    </div>
                </div>

                {/* Center: Mission Gallery */}
                <div className="flex-1 relative z-10 flex flex-col justify-center gap-4 py-4 overflow-hidden">
                    <div className="px-4">
                        <h2 className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Доступные Контракты</h2>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar h-[320px] items-center">
                        {missions.map((mission) => {
                            const isSelected = selectedMissionId === mission.id;
                            const isLocked = mission.status === 'locked';

                            return (
                                <motion.button
                                    key={mission.id}
                                    onClick={() => !isLocked && setSelectedMissionId(mission.id)}
                                    layoutId={`card-${mission.id}`}
                                    initial={false}
                                    animate={{
                                        scale: isSelected ? 1 : 0.9,
                                        opacity: isSelected ? 1 : 0.6,
                                        filter: isLocked ? 'grayscale(100%)' : 'none'
                                    }}
                                    className={`relative shrink-0 w-[240px] h-[300px] rounded-xl overflow-hidden border snap-center transition-all ${isSelected ? 'border-gold-dim shadow-[0_0_20px_rgba(251,191,36,0.15)] ring-1 ring-gold-dim/30' : 'border-stone-800 bg-stone-900'}`}
                                >
                                    {/* Background Art */}
                                    <div className="absolute inset-0">
                                        <img src={mission.image} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                                        {isLocked && <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4"><span className="text-4xl">🔒</span></div>}
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-left">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {mission.tags.map(tag => (
                                                <span key={tag} className="px-1.5 py-0.5 rounded bg-black/60 border border-stone-700 text-[8px] text-stone-300 uppercase font-bold backdrop-blur-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between items-end mb-1">
                                            <h3 className="text-lg font-cinzel font-bold text-white leading-tight">{mission.name}</h3>
                                            <div className="flex text-gold-dim text-[10px] gap-0.5">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} className={i < mission.rating ? 'opacity-100' : 'opacity-30'}>★</span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-[10px] text-stone-400 line-clamp-3 leading-relaxed mb-2">
                                            {mission.desc}
                                        </p>

                                        <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                                            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Уровень {mission.level}</span>
                                            {isSelected && <span className="w-2 h-2 rounded-full bg-gold-dim animate-pulse" />}
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom: Config & Action */}
                <div className="relative z-10 p-3 bg-stone-950 border-t border-stone-800 space-y-3">
                    {/* Difficulty */}
                    <div className="flex bg-stone-900 rounded p-1 border border-stone-800">
                        {(['normal', 'veteran', 'nightmare'] as const).map((diff) => (
                            <button
                                key={diff}
                                onClick={() => setDifficulty(diff)}
                                className={`flex-1 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded transition-all ${difficulty === diff ? 'bg-stone-800 text-gold-dim shadow' : 'text-stone-500 hover:text-stone-300'}`}
                            >
                                {diff === 'normal' ? 'Норма' : diff === 'veteran' ? 'Ветеран' : 'Кошмар'}
                            </button>
                        ))}
                    </div>

                    {/* Main Button */}
                    <button
                        disabled={activeMission.status === 'locked'}
                        onClick={() => onAction('prep_briefing')}
                        className={`w-full py-3 rounded border font-bold uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2 ${activeMission.status === 'locked'
                            ? 'bg-stone-900 border-stone-800 text-stone-600 grayscale cursor-not-allowed'
                            : 'bg-gold-dim border-gold-bright text-stone-950 hover:bg-gold-bright shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                            }`}
                    >
                        <span>Принять контракт</span>
                        <span className="text-base">✒️</span>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

// --- Briefing Screen (Lobby) ---
export function PrepBriefingScreen({ screen, onAction }: ScreenProps) {
    const intel = {
        region: 'Мрачные Топи',
        threatLevel: 'Высокий',
        enemies: ['Нежить', 'Ядовитые споры'],
        weather: 'Густой туман',
        objectives: [
            { id: 1, text: 'Найти вход в Склеп', type: 'main' },
            { id: 2, text: 'Собрать образца мха (0/3)', type: 'side' }
        ]
    };

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-3 relative">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[url('https://placehold.co/400x600/1a2e1a/2d4a2d?text=Swamp')] bg-cover bg-center opacity-20 pointer-events-none rounded-lg" />

                <div className="relative z-10 flex flex-col h-full gap-3 p-2">
                    {/* Header Info */}
                    <div className="p-3 rounded border border-emerald-900/40 bg-stone-950/80 backdrop-blur-sm shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-cinzel text-emerald-500">{intel.region}</h2>
                            <span className="text-xs font-bold text-red-500 border border-red-900/30 px-2 py-0.5 rounded bg-red-900/10">УГРОЗА: {intel.threatLevel}</span>
                        </div>
                        <div className="text-[10px] text-stone-400 flex items-center gap-2">
                            <span>🌫️ {intel.weather}</span>
                        </div>
                    </div>

                    {/* Objectives */}
                    <div className="flex-1 space-y-2">
                        <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest pl-1">Задачи</h3>
                        {intel.objectives.map((obj) => (
                            <div key={obj.id} className={`p-2 rounded border flex items-center gap-2 ${obj.type === 'main' ? 'border-gold-dim/30 bg-gold-dim/5' : 'border-stone-800 bg-stone-900/40'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${obj.type === 'main' ? 'bg-gold-bright' : 'bg-stone-600'}`} />
                                <span className={`text-xs ${obj.type === 'main' ? 'text-stone-200' : 'text-stone-500'}`}>{obj.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Prep Actions (Shop/Camp) */}
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                        <button
                            onClick={() => onAction('prep_provisions')}
                            className="p-3 rounded border border-stone-700 bg-stone-900/80 hover:bg-stone-800 hover:border-stone-500 transition-all flex flex-col items-center gap-1 group"
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">🎒</span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase group-hover:text-stone-200">Снабжение</span>
                        </button>
                        <button
                            onClick={() => onAction('prep_camp')}
                            className="p-3 rounded border border-stone-700 bg-stone-900/80 hover:bg-stone-800 hover:border-stone-500 transition-all flex flex-col items-center gap-1 group"
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">🔥</span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase group-hover:text-stone-200">Лагерь</span>
                        </button>
                    </div>

                    {/* Start Mission */}
                    <button
                        onClick={() => onAction('run_scene')}
                        className="w-full py-4 mt-2 rounded border border-emerald-900 bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-400 font-bold uppercase tracking-widest hover:text-emerald-200 hover:border-emerald-500 transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center gap-2"
                    >
                        <span>Начать задание</span>
                        <span className="text-lg">⚔️</span>
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

// --- Camp Screen (Buffs) ---
export function PrepCampScreen({ screen, onAction }: ScreenProps) {
    const [selectedBuff, setSelectedBuff] = useState<string | null>(null);

    const buffs = [
        { id: 'stew', name: 'Сытное рагу', effect: '+5 HP Макс', cost: '10 🪙', icon: '🍲' },
        { id: 'sharpen', name: 'Заточка оружия', effect: '+1 Урон', cost: '15 🪙', icon: '⚔️' },
        { id: 'prayer', name: 'Молитва', effect: '-10% Стресс', cost: 'Бесплатно', icon: '🙏' },
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-4 relative">
                <div className="absolute inset-0 bg-[url('https://placehold.co/400x600/2a1a1a/4a2d2d?text=Campfire')] bg-cover bg-center opacity-20 pointer-events-none rounded-lg" />

                <div className="relative z-10 flex flex-col h-full p-2">
                    <div className="text-center py-2 mb-2">
                        <div className="text-3xl mb-1 animate-pulse">🔥</div>
                        <p className="text-[10px] text-stone-500">Привал перед боем. Можно выбрать один эффект.</p>
                    </div>

                    <div className="flex-1 space-y-2 overflow-y-auto">
                        {buffs.map((buff) => (
                            <button
                                key={buff.id}
                                onClick={() => setSelectedBuff(buff.id)}
                                className={`w-full p-3 rounded border transition-all flex items-center gap-3 ${selectedBuff === buff.id ? 'border-gold-bright bg-gold-dim/20' : 'border-stone-800 bg-stone-900/60 hover:border-stone-600'}`}
                            >
                                <div className="text-xl">{buff.icon}</div>
                                <div className="flex-1 text-left">
                                    <div className="text-xs font-bold text-stone-200">{buff.name}</div>
                                    <div className="text-[10px] text-emerald-500">{buff.effect}</div>
                                </div>
                                <div className="text-[10px] font-mono text-gold-dim bg-stone-950/50 px-1.5 py-0.5 rounded">
                                    {buff.cost}
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={!selectedBuff}
                        onClick={() => onAction('back')}
                        className={`w-full py-3 mt-4 rounded font-bold uppercase tracking-widest transition-all text-xs ${selectedBuff ? 'bg-gold-dim text-stone-950 hover:bg-gold-bright' : 'bg-stone-800 text-stone-600 cursor-not-allowed'}`}
                    >
                        {selectedBuff ? 'Применить и вернуться' : 'Выберите бонус'}
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

// --- Provisions Screen (Consumables) ---
export function PrepProvisionsScreen({ screen, onAction }: ScreenProps) {
    const [cart, setCart] = useState<Record<string, number>>({});
    const maxSlots = 8;

    const items = [
        { id: 'torch', name: 'Факел', desc: 'Свет, -стресс', cost: 5, icon: '🔥' },
        { id: 'food', name: 'Паек', desc: '+HP, голод', cost: 10, icon: '🥩' },
        { id: 'shovel', name: 'Лопата', desc: 'Расчистка', cost: 25, icon: '⛏️' },
        { id: 'bandage', name: 'Бинт', desc: 'Кровотеч.', cost: 15, icon: '🩹' },
        { id: 'antivenom', name: 'Антидот', desc: 'Яд', cost: 15, icon: '🧪' },
    ];

    const currentSlots = Object.values(cart).reduce((a, b) => a + b, 0);

    const updateCart = (id: string, delta: number) => {
        setCart(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            if (delta > 0 && currentSlots >= maxSlots) return prev;
            return { ...prev, [id]: next };
        });
    };

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" backTarget={screen.backTarget}>
            <div className="flex flex-col h-full gap-2 relative">
                <div className="flex justify-between items-center p-2 bg-stone-900/80 border-b border-stone-800">
                    <span className="text-gold-bright font-bold text-sm">145 🪙</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${currentSlots >= maxSlots ? 'text-red-500' : 'text-stone-500'}`}>
                        Слоты: {currentSlots}/{maxSlots}
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-2 grid grid-cols-1 gap-2">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 p-2 rounded border border-stone-800 bg-stone-900/40">
                            <div className="w-8 h-8 rounded bg-stone-950 flex items-center justify-center text-lg border border-stone-800">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-bold text-stone-300 text-xs">{item.name}</div>
                                <div className="text-[10px] text-gold-dim">{item.cost} 🪙</div>
                            </div>

                            <div className="flex items-center gap-2 bg-stone-950 rounded px-1.5 py-0.5 border border-stone-800">
                                <button
                                    onClick={() => updateCart(item.id, -1)}
                                    className="text-stone-500 hover:text-stone-300 w-4 h-6 flex items-center justify-center disabled:opacity-30"
                                    disabled={!cart[item.id]}
                                >
                                    -
                                </button>
                                <span className="text-stone-200 text-xs w-3 text-center">{cart[item.id] || 0}</span>
                                <button
                                    onClick={() => updateCart(item.id, 1)}
                                    className="text-gold-dim hover:text-gold-bright w-4 h-6 flex items-center justify-center disabled:opacity-30"
                                    disabled={currentSlots >= maxSlots}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-3 border-t border-stone-800 bg-stone-950/80">
                    <button
                        onClick={() => onAction('back')}
                        className="w-full py-3 rounded font-bold uppercase tracking-widest bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200 transition-all text-xs"
                    >
                        Готово
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}

// --- Active Campaigns Screen (Saves) ---
export function ActiveCampaignsScreen({ screen, onAction }: ScreenProps) {
    const saves = [
        {
            id: 'save1',
            charName: 'Аларик Теневой',
            charClass: 'Плут',
            level: 3,
            location: 'Склеп: Уровень 2',
            mission: 'Забытый Склеп',
            time: '2 часа назад',
            avatar: 'https://placehold.co/100x100/334155/94a3b8?text=Hero'
        },
        {
            id: 'save2',
            charName: 'Торгрим',
            charClass: 'Воин',
            level: 5,
            location: 'Трактир "Пьяный Гоблин"',
            mission: 'Подготовка',
            time: '1 день назад',
            avatar: 'https://placehold.co/100x100/451a03/d97706?text=Dwarf'
        }
    ];

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" backTarget={screen.backTarget} hideTitle>
            <div className="flex flex-col h-full gap-4 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black pointer-events-none" />

                <div className="relative z-10 p-4 pb-0">
                    <h2 className="text-xl font-cinzel font-bold text-stone-200">Незавершенные истории</h2>
                    <p className="text-xs text-stone-500 mt-1">Выберите сохранение, чтобы продолжить путь.</p>
                </div>

                <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-3">
                    {saves.map((save) => (
                        <button
                            key={save.id}
                            onClick={() => onAction('resume_session')}
                            className="w-full flex items-center gap-4 p-3 rounded-lg border border-stone-800 bg-stone-900/60 hover:bg-stone-800 hover:border-gold-dim/50 transition-all text-left group shadow-lg"
                        >
                            <div className="relative w-16 h-16 rounded border border-stone-700 overflow-hidden shrink-0 group-hover:border-gold-dim transition-colors">
                                <img src={save.avatar} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold font-cinzel text-stone-200 group-hover:text-gold-bright transition-colors truncate">{save.charName}</h3>
                                    <span className="text-[9px] text-stone-500 uppercase tracking-widest">{save.time}</span>
                                </div>
                                <div className="text-xs text-stone-400">{save.charClass} • Ур. {save.level}</div>
                                <div className="mt-2 flex items-center gap-2 text-[10px]">
                                    <span className="bg-stone-950 px-2 py-0.5 rounded border border-stone-800 text-stone-300">📍 {save.location}</span>
                                    <span className="text-stone-500 italic">Миссия: {save.mission}</span>
                                </div>
                            </div>

                            <div className="text-2xl text-stone-600 group-hover:text-gold-dim transition-colors">
                                ▶
                            </div>
                        </button>
                    ))}

                    <button className="w-full py-4 rounded border border-dashed border-stone-800 text-stone-600 hover:text-stone-400 hover:bg-stone-900/50 transition-all text-xs font-bold uppercase tracking-widest">
                        Архив сохранений
                    </button>
                </div>

                <div className="relative z-10 p-4 border-t border-stone-800 bg-stone-950/80">
                    <button
                        onClick={() => onAction('back')}
                        className="w-full py-3 rounded font-bold uppercase tracking-widest bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200 transition-all text-xs"
                    >
                        Назад
                    </button>
                </div>
            </div>
        </ScreenLayout>
    );
}
