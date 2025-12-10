import { useState } from 'react';
import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';
import { motion } from 'framer-motion';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function GamePreparationScreen({ screen, onAction }: ScreenProps) {
    const [charIndex, setCharIndex] = useState(0);
    const characters = [
        { name: 'Аларик Теневой', class: 'Плут', level: 3, location: 'Таверна "Пьяный Гоблин"', avatar: 'https://placehold.co/400x400/334155/94a3b8?text=Hero' },
        { name: 'Торгрим', class: 'Воин', level: 5, location: 'Кузница', avatar: 'https://placehold.co/400x400/451a03/d97706?text=Dwarf' },
        { name: 'Элиандра', class: 'Маг', level: 2, location: 'Башня', avatar: 'https://placehold.co/400x400/1e1b4b/818cf8?text=Mage' },
    ];

    const activeChar = characters[charIndex];

    const nextChar = () => setCharIndex((prev) => (prev + 1) % characters.length);
    const prevChar = () => setCharIndex((prev) => (prev - 1 + characters.length) % characters.length);

    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive" hideTitle>
            <div className="flex flex-col h-full relative">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800/20 via-stone-950/80 to-black pointer-events-none" />

                {/* Top Bar: Campaign Info */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative z-10 flex justify-between items-center p-2 border-b border-stone-800/50"
                >
                    <div className="flex flex-col">
                        <span className="text-[9px] text-stone-500 uppercase tracking-widest">Кампания</span>
                        <span className="text-xs text-gold-dim font-cinzel font-bold">Тени Элвенгарда</span>
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-stone-900 border border-stone-800 text-[9px] text-emerald-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Онлайн
                    </div>
                </motion.div>

                {/* Main Content: Hero Focus */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10 gap-6">
                    {/* Hero Avatar Circle with Arrows */}
                    <div className="relative flex items-center justify-center w-full">
                        {/* Left Arrow */}
                        <button
                            onClick={prevChar}
                            className="absolute left-8 z-20 p-2 text-stone-500 hover:text-gold-bright transition-colors hover:scale-110 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <motion.div
                            key={charIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gold-dim/10 rounded-full blur-xl group-hover:bg-gold-dim/20 transition-colors duration-500" />
                            <div className="w-40 h-40 rounded-full border-4 border-stone-800 bg-stone-900 overflow-hidden shadow-2xl relative">
                                <img src={activeChar.avatar} alt={activeChar.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Level Badge */}
                                <div className="absolute bottom-2 right-1/2 translate-x-1/2 flex flex-col items-center">
                                    <span className="text-[8px] text-stone-400 uppercase tracking-wider">Уровень</span>
                                    <span className="text-xl font-cinzel text-gold-bright leading-none">{activeChar.level}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextChar}
                            className="absolute right-8 z-20 p-2 text-stone-500 hover:text-gold-bright transition-colors hover:scale-110 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Hero Info */}
                    <motion.div
                        key={`info-${charIndex}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-center space-y-1"
                    >
                        <h2 className="text-2xl font-cinzel text-stone-100">{activeChar.name}</h2>
                        <div className="text-xs text-stone-500 uppercase tracking-widest">{activeChar.class} • {activeChar.location}</div>
                    </motion.div>

                    {/* Primary Action: Continue */}
                    <div className="flex flex-col gap-3 w-full max-w-xs px-4">
                        <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onAction('active_campaigns')}
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-dark to-amber-700 text-stone-100 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(180,83,9,0.3)] hover:shadow-[0_0_30px_rgba(180,83,9,0.5)] border border-gold-dim/30 transition-all"
                        >
                            Продолжить путь
                        </motion.button>

                        <div className="grid grid-cols-2 gap-2">
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAction('mission_select')}
                                className="py-2 rounded-lg border border-stone-700 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-gold-bright transition-all flex flex-col items-center gap-1"
                            >
                                <span className="text-xl">⚔️</span>
                                <span className="text-[10px] font-bold uppercase">Новая игра</span>
                            </motion.button>

                            <motion.button
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 162, 158, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAction('party_menu')}
                                className="py-2 rounded-lg border border-stone-700 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-stone-100 transition-all flex flex-col items-center gap-1"
                            >
                                <span className="text-xl">👥</span>
                                <span className="text-[10px] font-bold uppercase">Пати</span>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Removed as per request, keeping focus on main actions */}
                <div className="h-4" /> {/* Spacer */}
            </div>
        </ScreenLayout>
    );
}
