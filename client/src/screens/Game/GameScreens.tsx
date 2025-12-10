import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';
import { StylizedButton } from '../../shared/ui/StylizedButton';
import { DevTools } from '../../shared/ui/DevTools';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function PlayMenuScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} variant="immersive">
            <div className="flex flex-col h-full gap-4 justify-center max-w-md mx-auto w-full">
                {/* Main Actions */}
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-stone-700 to-stone-800 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                        <button
                            onClick={() => onAction('game_prep')}
                            className="relative w-full py-4 rounded-lg border border-stone-700 bg-stone-900/90 text-stone-200 hover:text-gold-bright hover:border-gold-dim transition-all font-bold uppercase tracking-widest flex flex-col items-center gap-1 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                        >
                            <span className="text-lg font-cinzel">Продолжить</span>
                            <span className="text-[9px] font-normal opacity-60 group-hover:opacity-100 transition-opacity">Последнее сохранение</span>
                        </button>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3">
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => onAction('solo_char')}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-lg border border-gold-dim/30 bg-stone-900/80 hover:bg-stone-800 active:scale-95 transition-all flex flex-col items-center gap-2 group shadow-lg shadow-black/40"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform filter drop-shadow-md">⚔️</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright font-cinzel">Новая Игра</div>
                                <div className="text-[10px] text-stone-500 group-hover:text-stone-400">Соло приключение</div>
                            </div>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => onAction('party_menu')}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 162, 158, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-lg border border-stone-700 bg-stone-900/80 hover:bg-stone-800 active:scale-95 transition-all flex flex-col items-center gap-2 group shadow-lg shadow-black/40"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform filter drop-shadow-md">👥</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-stone-100 font-cinzel">Пати</div>
                                <div className="text-[10px] text-stone-500 group-hover:text-stone-400">С друзьями</div>
                            </div>
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
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
                    </motion.div>
                </div>

                {/* Recent/Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-4 p-3 rounded border border-stone-800 bg-stone-950/50 text-center shadow-inner"
                >
                    <div className="text-[10px] text-stone-600 uppercase tracking-widest mb-1">Статус Сервера</div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                        <span className="text-xs text-stone-400 font-mono">Online • 124 Игрока</span>
                    </div>
                </motion.div>
            </div>
        </ScreenLayout>
    );
}

export function RunSceneScreen({ screen, onAction }: ScreenProps) {
    const [logHistory, setLogHistory] = useState([
        { id: 1, type: 'info', text: 'Вы входите в заброшенную часовню. Воздух спертый.' },
        { id: 2, type: 'narrative', text: 'Старые деревянные скамьи покрыты слоем пыли. В центре зала, у алтаря, стоит одинокая фигура в балахоне.' },
    ]);
    const [displayedText, setDisplayedText] = useState('');
    const [activePopup, setActivePopup] = useState<string | null>(null);
    const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
    const [attackDescription, setAttackDescription] = useState('');

    const currentText = "Незнакомец медленно поворачивается. Его лицо скрыто тенью, но вы чувствуете на себе его тяжелый взгляд.";

    // Mock Data
    const sceneGoals = [
        "Узнать личность незнакомца",
        "Не допустить начала ритуала",
        "Найти скрытый проход в крипту"
    ];

    const sceneFactors = [
        { label: "Темнота", type: "negative", text: "Штраф к восприятию" },
        { label: "Святое место", type: "positive", text: "Бонус к защите от нежити" },
        { label: "Ритуал (3 хода)", type: "timer", text: "До завершения осталось мало времени" }
    ];

    const sceneObjects = [
        { name: "Статуя", type: "Inspect", icon: "🗿" },
        { name: "Сундук", type: "Loot", icon: "📦" },
        { name: "Свечи", type: "Interact", icon: "🕯️" }
    ];

    const sceneNPCs = [
        { name: "Незнакомец", status: "Враждебный", hidden: false },
        { name: "Алтарь", status: "Объект", hidden: false },
        { name: "Тени", status: "Скрыты", hidden: true }
    ];

    const partyMembers = [
        { id: 1, name: "Эльф", class: "Ranger", hp: 80, mp: 40, status: "ok" },
        { id: 2, name: "Гном", class: "Fighter", hp: 60, mp: 10, status: "warn" },
        { id: 3, name: "Клирик", class: "Cleric", hp: 100, mp: 90, status: "ok" },
    ];

    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + currentText.charAt(index));
            index++;
            if (index >= currentText.length) clearInterval(interval);
        }, 20);
        return () => clearInterval(interval);
    }, []);

    // Scroll to bottom of log
    useEffect(() => {
        const log = document.getElementById('scene-log');
        if (log) log.scrollTop = log.scrollHeight;
    }, [logHistory, displayedText]);

    const togglePopup = (name: string) => {
        setActivePopup(activePopup === name ? null : name);
        if (name === 'combat') {
            setSelectedTarget(null);
            setAttackDescription('');
        }
    };

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} variant="immersive" hideTitle>
            <div className="flex flex-col h-full bg-[#0c1017] text-stone-300 relative overflow-hidden font-sans p-1 gap-1">

                {/* 1. TOP HEADER GRID: Title | Context | Icons */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 pb-1 border-b border-stone-800 shrink-0 h-9 px-1">

                    {/* Title Block */}
                    <div className="flex flex-col justify-center leading-none">
                        <h2 className="text-sm font-bold text-stone-100 font-cinzel">Сцена</h2>
                        <div className="text-[8px] text-stone-500 uppercase tracking-widest">Глава 1</div>
                    </div>

                    {/* Context Block */}
                    <div className="h-full flex items-center bg-emerald-950/10 border-l border-r border-stone-800/50 px-2 overflow-hidden relative">
                        <div className="text-[10px] text-emerald-100/80 italic font-serif truncate w-full">
                            <span className="text-emerald-600/70 not-italic font-sans text-[8px] mr-1 uppercase font-bold tracking-wider">Контекст:</span>
                            Вы проникли в заброшенный храм, преследуя культиста, который украл амулет.
                        </div>
                    </div>

                    {/* Icons / Toggles */}
                    <div className="flex items-center gap-1">
                        <StylizedButton
                            id="scene_plan"
                            onClick={() => onAction('run_scene_plan')}
                            className="!py-0.5 !px-2 text-[9px] mr-1"
                        >
                            План
                        </StylizedButton>

                        <button
                            onClick={() => togglePopup('goals')}
                            className={`w-7 h-7 rounded flex items-center justify-center transition-all ${activePopup === 'goals' ? 'bg-emerald-900 text-emerald-100 border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-stone-800/50 text-stone-400 hover:text-emerald-300 hover:bg-stone-800'}`}
                        >
                            🎯
                        </button>
                    </div>
                </div>

                {/* 2. MAIN CONTENT AREA */}
                <div className="flex-1 min-h-0 relative">

                    {/* Narrative Log */}
                    <div className="absolute inset-0 flex flex-col">
                        <div id="scene-log" className="flex-1 overflow-y-auto space-y-3 pr-1 [&::-webkit-scrollbar]:w-[1px] [&::-webkit-scrollbar-thumb]:bg-stone-600 [&::-webkit-scrollbar-track]:bg-transparent pb-8">
                            {/* Historical Log */}
                            {logHistory.map((entry) => (
                                <div key={entry.id} className={`leading-snug ${entry.type === 'info' ? 'text-[11px] text-stone-500 italic border-l border-stone-800 pl-2' : 'text-[13px] text-stone-300'}`}>
                                    {entry.text}
                                </div>
                            ))}

                            {/* Active Live Text */}
                            <div className="text-[14px] text-stone-100 font-serif leading-snug">
                                {displayedText}
                                <span className="animate-pulse ml-0.5 text-gold-bright">|</span>
                            </div>
                            <div className="h-8" /> {/* Spacer for party icons */}
                        </div>
                    </div>

                    {/* Party Icons Overlay - Bottom Left */}
                    <div className="absolute bottom-1 left-1 flex gap-1 z-10">
                        {partyMembers.map((member) => (
                            <motion.button
                                key={member.id}
                                whileHover={{ y: -2 }}
                                onClick={() => {/* Show party member info */ }}
                                className={`w-8 h-8 rounded border flex items-center justify-center text-[10px] bg-stone-900/90 shadow-lg backdrop-blur-sm ${member.status === 'warn' ? 'border-amber-500 text-amber-200' : 'border-emerald-900 text-emerald-200'}`}
                            >
                                👤
                                {/* HP Bar Mini */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-950">
                                    <div className="h-full bg-emerald-600" style={{ width: `${member.hp}%` }} />
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Combat Trigger Button - Bottom Right */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => togglePopup('combat')}
                        className={`absolute bottom-3 right-1 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg z-10 transition-colors ${activePopup === 'combat' ? 'bg-red-900 border-red-500 text-red-100 shadow-[0_0_15px_red]' : 'bg-stone-800/90 border-stone-600 text-red-500 hover:text-red-300 hover:border-red-400'}`}
                    >
                        <span className="text-xl filter drop-shadow">⚔️</span>
                    </motion.button>

                    {/* POPUPS LAYER */}
                    <AnimatePresence>
                        {/* 1. Goals (Top Right) */}
                        {activePopup === 'goals' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute top-1 right-1 w-64 bg-stone-950 border border-emerald-900/80 rounded shadow-2xl z-50 overflow-hidden"
                            >
                                <div className="bg-emerald-950/60 px-2 py-1 border-b border-emerald-900/60 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wide">Цели Сцены</span>
                                    <button onClick={() => setActivePopup(null)} className="text-emerald-500 hover:text-emerald-300">✕</button>
                                </div>
                                <div className="p-2 space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                                    {sceneGoals.map((g, i) => (
                                        <div key={i} className="flex items-start gap-2 text-[11px] text-stone-300">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_5px_emerald]" />
                                            <span>{g}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* 2. Factors (Bottom Right) */}
                        {activePopup === 'factors' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute bottom-1 right-1 w-64 bg-stone-950 border border-purple-900/80 rounded shadow-2xl z-50 overflow-hidden"
                            >
                                <div className="bg-purple-950/60 px-2 py-1 border-b border-purple-900/60 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-purple-100 uppercase tracking-wide">Факторы и Таймеры</span>
                                    <button onClick={() => setActivePopup(null)} className="text-purple-500 hover:text-purple-300">✕</button>
                                </div>
                                <div className="p-2 space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                                    {sceneFactors.map((f, i) => (
                                        <div key={i} className="text-[11px] border-b border-stone-800/50 pb-1 last:border-0 last:pb-0">
                                            <div className={`font-bold leading-none mb-1 flex items-center gap-1 ${f.type === 'negative' ? 'text-red-400' : f.type === 'timer' ? 'text-amber-400' : 'text-blue-400'}`}>
                                                {f.type === 'timer' && '⏳'} {f.label}
                                            </div>
                                            <div className="text-[10px] text-stone-500 leading-none">{f.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* 3. Objects (Bottom Right) */}
                        {activePopup === 'objects' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute bottom-1 right-2 w-48 bg-stone-950 border border-stone-600 rounded shadow-2xl z-50 overflow-hidden"
                            >
                                <div className="bg-stone-900 px-2 py-1 border-b border-stone-800 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-wide">Окружение</span>
                                    <button onClick={() => setActivePopup(null)} className="text-stone-500 hover:text-stone-300">✕</button>
                                </div>
                                <div className="p-2 space-y-1">
                                    {sceneObjects.map((obj, i) => (
                                        <button key={i} className="w-full text-left flex items-center gap-2 p-1.5 rounded hover:bg-stone-800 transition-colors text-[11px] text-stone-300">
                                            <span>{obj.icon}</span>
                                            <span className="flex-1 font-bold">{obj.name}</span>
                                            <span className="text-[9px] uppercase text-stone-500">{obj.type}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* 4. Combat/Targets (Bottom Right - Fixed above triggering button) */}
                        {activePopup === 'combat' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute bottom-14 right-1 w-56 bg-stone-950 border border-red-900 rounded shadow-2xl z-[60] overflow-hidden"
                            >
                                <div className="bg-red-950/60 px-2 py-1 border-b border-red-900/60 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-red-100 uppercase tracking-wide">Выбор цели</span>
                                    <button onClick={() => setActivePopup(null)} className="text-red-500 hover:text-red-300">✕</button>
                                </div>
                                <div className="p-2 flex flex-col gap-2">
                                    <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
                                        {sceneNPCs.map((npc, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedTarget(selectedTarget === npc.name ? null : npc.name)}
                                                disabled={npc.hidden}
                                                className={`w-full flex items-center justify-between text-[11px] p-2 rounded transition-all ${npc.hidden ? 'opacity-40 cursor-not-allowed border border-dashed border-stone-800' : selectedTarget === npc.name ? 'bg-red-900/40 border border-red-500 text-red-100' : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-red-900 hover:bg-stone-800'}`}
                                            >
                                                <span className="font-bold">{npc.name}</span>
                                                <span className={`text-[9px] uppercase px-1 rounded ${npc.status === 'Враждебный' ? 'bg-red-950 text-red-400' : 'bg-stone-950 text-stone-500'}`}>{npc.status}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <textarea
                                        value={attackDescription}
                                        onChange={(e) => setAttackDescription(e.target.value)}
                                        placeholder="Опишите атаку..."
                                        className="w-full bg-black/40 border border-red-900/30 rounded p-1.5 text-[10px] text-stone-200 focus:outline-none focus:border-red-500 resize-none h-10 mb-1 placeholder:text-stone-600 font-serif"
                                    />
                                    <button
                                        disabled={!selectedTarget}
                                        onClick={() => onAction('run_combat')}
                                        className="w-full py-2 bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-stone-100 text-[10px] font-bold uppercase tracking-widest rounded transition-colors shadow-lg"
                                    >
                                        В Атаку
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. FOOTER */}
                <div className="mt-auto shrink-0 space-y-1">

                    {/* Personal Hero Status + Factors Toggle */}
                    <div className="flex items-center justify-between px-2 py-0.5 bg-stone-900 border-t border-stone-800 text-[10px] text-stone-400 relative">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded border border-stone-600 bg-stone-800 flex items-center justify-center text-xs">🧙‍♂️</div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-stone-200 text-[10px]">Маг (Вы)</span>
                                <span className="text-[8px] text-stone-600">Уровень 1</span>
                            </div>
                        </div>

                        {/* Stats + Factor/Object Toggles */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-3 font-mono">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-red-500 font-bold text-[8px]">HP</span>
                                    <div className="w-12 h-1.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                        <div className="h-full bg-red-600 w-[80%] shadow-[0_0_5px_red]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-blue-500 font-bold text-[8px]">MP</span>
                                    <div className="w-12 h-1.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                                        <div className="h-full bg-blue-600 w-[60%] shadow-[0_0_5px_blue]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Factors Toggle */}
                            <button
                                onClick={() => togglePopup('factors')}
                                className={`ml-2 px-1.5 py-0.5 rounded border flex items-center gap-1 transition-all ${activePopup === 'factors' ? 'bg-purple-900 border-purple-500 text-purple-200' : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-purple-300'}`}
                            >
                                <span className="text-xs">⏳</span>
                                <span className="font-bold">3</span>
                            </button>

                            {/* Objects Toggle (Moved here from Actions) */}
                            <button
                                onClick={() => togglePopup('objects')}
                                className={`px-1.5 py-0.5 rounded border flex items-center gap-1 transition-all ${activePopup === 'objects' ? 'bg-stone-700 border-stone-500 text-stone-100' : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-stone-200'}`}
                            >
                                <span className="text-xs">👁️</span>
                                <span className="font-bold hidden sm:inline">2</span>
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons Area (Split Rows) */}
                    <div className="p-1.5 rounded border border-stone-800 bg-stone-900/95 shadow-xl relative overflow-hidden flex flex-col gap-1.5">
                        {/* Row 1: Quick Actions */}
                        <div className="flex gap-1 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:w-[1px] [&::-webkit-scrollbar-thumb]:bg-stone-700">
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'info', text: 'Вы осматриваете окружение...' }])}
                                className="flex-1 px-2 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded text-[10px] font-bold text-stone-300 hover:text-white transition-colors whitespace-nowrap"
                            >
                                🔍 Исследовать
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'info', text: 'Вы пытаетесь заговорить...' }])}
                                className="flex-1 px-2 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded text-[10px] font-bold text-stone-300 hover:text-white transition-colors whitespace-nowrap"
                            >
                                🗣️ Разговаривать
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'info', text: 'Вы применяете навык...' }])}
                                className="flex-1 px-2 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded text-[10px] font-bold text-stone-300 hover:text-white transition-colors whitespace-nowrap"
                            >
                                ✨ Навык
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'info', text: 'Вы используете предмет...' }])}
                                className="flex-1 px-2 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded text-[10px] font-bold text-stone-300 hover:text-white transition-colors whitespace-nowrap"
                            >
                                🎒 Предмет
                            </button>
                        </div>

                        {/* Row 2: Input & Submit */}
                        <div className="flex gap-1">
                            <input
                                type="text"
                                placeholder="Свой ход..."
                                className="flex-1 bg-black/50 border border-stone-700 rounded px-2 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-gold-dim placeholder:text-stone-600 shadow-inner"
                            />
                            <button
                                onClick={() => onAction('next_scene')}
                                className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                            >
                                Вперед
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunScenePlanScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <DevTools actions={screen.actions} onAction={onAction} />
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-200">
                <div className="flex-1 rounded border border-stone-700 bg-stone-900/80 p-2 relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-500 via-stone-900 to-black" />

                    {/* Map Grid Effect */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #292524 1px, transparent 1px), linear-gradient(to bottom, #292524 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>

                    <div className="relative z-10 grid grid-cols-4 gap-4 p-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="aspect-square rounded-full border-2 border-emerald-600/50 flex items-center justify-center bg-emerald-900/30 text-emerald-200 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)] relative z-10"
                        >
                            Старт
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring" }}
                            className="col-start-2 row-start-2 aspect-square rounded-full border border-stone-600 flex items-center justify-center bg-stone-800 text-stone-400 relative z-10"
                        >
                            ?
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="col-start-3 row-start-1 aspect-square rounded-full border border-stone-600 flex items-center justify-center bg-stone-800 text-stone-400 relative z-10"
                        >
                            ⚔️
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="col-start-4 row-start-2 aspect-square rounded-full border-2 border-red-600/50 flex items-center justify-center bg-red-900/30 text-red-200 font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)] relative z-10"
                        >
                            Босс
                        </motion.div>

                        {/* Connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                d="M 80 80 L 180 180"
                                stroke="#57534e"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                d="M 180 180 L 280 80"
                                stroke="#57534e"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                d="M 280 80 L 380 180"
                                stroke="#57534e"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                        </svg>
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
    const [logHistory, setLogHistory] = useState([
        { id: 1, type: 'info', text: 'Бой начался! Вы застали культистов врасплох.' },
        { id: 2, type: 'combat', text: 'Инициатива: Вы (18), Культист А (12), Культист Б (8).' },
    ]);
    const [displayedText, setDisplayedText] = useState('');
    const [activePopup, setActivePopup] = useState<string | null>(null);
    const [selectedEntities, setSelectedEntities] = useState<string[]>([]);
    const [combatInput, setCombatInput] = useState('');
    const [combatResult, setCombatResult] = useState<'victory' | 'defeat' | null>(null);

    const currentText = "Культист А произносит заклинание, и его руки вспыхивают темным огнем.";

    // Mock Data
    const initiativeOrder = [
        { id: 'player', name: 'Маг (Вы)', type: 'ally', current: true, hp: 100, maxHp: 100, icon: '🧙‍♂️' },
        { id: 'enemy1', name: 'Культист А', type: 'enemy', current: false, hp: 0, maxHp: 100, icon: '🦹', dead: true },
        { id: 'ally1', name: 'Эльф', type: 'ally', current: false, hp: 90, maxHp: 100, icon: '🏹' },
        { id: 'enemy2', name: 'Культист Б', type: 'enemy', current: false, hp: 100, maxHp: 100, icon: '💀' },
    ];

    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + currentText.charAt(index));
            index++;
            if (index >= currentText.length) clearInterval(interval);
        }, 20);
        return () => clearInterval(interval);
    }, []);

    // Scroll to bottom of log
    useEffect(() => {
        const log = document.getElementById('combat-log');
        if (log) log.scrollTop = log.scrollHeight;
    }, [logHistory, displayedText]);

    const togglePopup = (name: string) => {
        setActivePopup(activePopup === name ? null : name);
    };

    const toggleSelection = (id: string) => {
        setSelectedEntities(prev =>
            prev.includes(id)
                ? prev.filter(e => e !== id)
                : [...prev, id]
        );
    };

    const handleNextRound = () => {
        onAction('next_round');
        setCombatInput('');
        // Mock victory trigger logic
        if (logHistory.length > 4) {
            setCombatResult('victory');
        }
    };

    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} variant="combat" hideTitle>
            <div className="flex flex-col h-full bg-[#0c1017] text-stone-300 relative overflow-hidden font-sans p-0.5 gap-0.5">

                {/* 1. TOP HEADER: Ultra Compact */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1 pb-0.5 border-b border-stone-800 shrink-0 h-8 px-1">
                    {/* Title Block */}
                    <div className="flex flex-col justify-center leading-none">
                        <h2 className="text-xs font-bold text-red-500 font-cinzel animate-pulse">БОЙ</h2>
                        <div className="text-[7px] text-stone-500 uppercase tracking-widest">Раунд 2</div>
                    </div>

                    {/* Middle Spacer */}
                    <div className="h-full flex items-center justify-center bg-stone-900/20 px-2" />

                    {/* Icons / Map / Surrender */}
                    <div className="flex items-center gap-0.5">
                        {/* Surrender / Options Menu (Pink Box) */}
                        <button
                            onClick={() => togglePopup('surrender')}
                            className={`w-6 h-6 rounded flex items-center justify-center transition-all ${activePopup === 'surrender' ? 'bg-rose-900/50 text-rose-200 border border-rose-500' : 'bg-stone-800/50 text-stone-500 hover:text-rose-400 hover:bg-stone-800'}`}
                        >
                            🏳️
                        </button>

                        <StylizedButton
                            id="scene_map"
                            onClick={() => onAction('run_combat_field')}
                            className="!py-0 !px-1.5 text-[8px] border-red-900/30 text-red-200/70 hover:text-red-100 hover:border-red-500 h-6 flex items-center"
                        >
                            КАРТА
                        </StylizedButton>
                        <button
                            onClick={() => togglePopup('goals')}
                            className={`w-6 h-6 rounded flex items-center justify-center transition-all ${activePopup === 'goals' ? 'bg-emerald-900 text-emerald-100 border border-emerald-500' : 'bg-stone-800/50 text-stone-400 hover:text-emerald-300 hover:bg-stone-800'}`}
                        >
                            🎯
                        </button>
                    </div>
                </div>

                {/* 2. MAIN CONTENT AREA */}
                <div className="flex-1 min-h-0 relative flex flex-col">

                    {/* Combat Log */}
                    <div className="flex-1 overflow-y-auto space-y-2 pr-1 [&::-webkit-scrollbar]:w-[1px] [&::-webkit-scrollbar-thumb]:bg-stone-600 [&::-webkit-scrollbar-track]:bg-transparent pb-1 relative z-0">
                        <div id="combat-log" className="absolute inset-0 overflow-y-auto p-1">
                            {/* Historical Log */}
                            {logHistory.map((entry) => (
                                <div key={entry.id} className={`leading-tight relative ${entry.type === 'combat' ? 'text-[10px] text-stone-400 font-mono border-l border-red-900/30 pl-1.5 py-0.5' : 'text-[11px] text-stone-300'}`}>
                                    {entry.text}
                                </div>
                            ))}

                            {/* Active Live Text */}
                            <div className="text-[13px] text-red-100 font-serif leading-tight drop-shadow-sm bg-red-950/10 p-1 rounded border border-red-900/10 mt-1">
                                {displayedText}
                                <span className="animate-pulse ml-0.5 text-red-500">|</span>
                            </div>
                            <div className="h-4" />
                        </div>
                    </div>

                    {/* VICTORY/DEFEAT OVERLAY (Green Box Area) */}
                    <AnimatePresence>
                        {combatResult && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute bottom-2 right-2 z-20"
                            >
                                <button
                                    onClick={() => onAction('run_epilogue')}
                                    className={`px-3 py-2 rounded-lg border-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center backdrop-blur-md transition-transform hover:scale-105 active:scale-95
                                        ${combatResult === 'victory' ? 'bg-emerald-900/90 border-emerald-500 text-emerald-100 shadow-[0_0_15px_emerald]' : 'bg-red-900/90 border-red-500 text-red-100 shadow-[0_0_15px_red]'}
                                    `}
                                >
                                    <span className="text-xl mb-1">{combatResult === 'victory' ? '🏆' : '💀'}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest leading-none block">
                                        {combatResult === 'victory' ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ'}
                                    </span>
                                    <span className="text-[8px] opacity-70 mt-1">Нажмите для продолжения</span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Surrender Popup */}
                    <AnimatePresence>
                        {activePopup === 'surrender' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-1 right-8 w-32 bg-stone-900 border border-rose-900/80 rounded shadow-xl z-50 overflow-hidden"
                            >
                                <div className="p-1 space-y-0.5">
                                    <button className="w-full text-left px-2 py-1 text-[10px] text-rose-300 hover:bg-rose-900/30 rounded flex items-center gap-2">
                                        <span>🏳️</span> Сдаться
                                    </button>
                                    <button className="w-full text-left px-2 py-1 text-[10px] text-stone-300 hover:bg-stone-800 rounded flex items-center gap-2">
                                        <span>🏃</span> Сбежать
                                    </button>
                                    <button className="w-full text-left px-2 py-1 text-[10px] text-stone-300 hover:bg-stone-800 rounded flex items-center gap-2">
                                        <span>🙏</span> Пощада
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* NEW: Bottom Initiative / Selection Bar - COMPACT */}
                    <div className="h-10 shrink-0 border-t border-stone-800 bg-stone-900/80 flex items-center px-1 gap-1.5 overflow-x-auto relative no-scrollbar z-10 mask-linear-fade">
                        {initiativeOrder.map((entity) => {
                            const isSelected = selectedEntities.includes(entity.id);
                            const isDead = (entity as any).dead;
                            return (
                                <motion.button
                                    key={entity.id}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleSelection(entity.id)}
                                    className={`relative w-7 h-7 rounded border flex items-center justify-center text-sm shadow-md transition-all shrink-0 
                                     ${entity.current ? 'border-gold-dim bg-stone-800 shadow-[0_0_5px_rgba(251,191,36,0.3)] ring-1 ring-gold-dim/50' :
                                            isSelected ? 'border-stone-100 bg-stone-700 ring-1 ring-stone-100' :
                                                isDead ? 'border-stone-800 bg-stone-950 opacity-50 grayscale' :
                                                    entity.type === 'ally' ? 'border-emerald-900/60 bg-stone-900 grayscale-[0.3]' :
                                                        'border-red-900/60 bg-stone-900 grayscale-[0.3]'}`}
                                >
                                    <span className="filter drop-shadow-sm text-[12px]">{entity.icon}</span>

                                    {/* Selection Indicator */}
                                    {isSelected && (
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-stone-100 rounded-full text-stone-900 text-[6px] flex items-center justify-center font-bold">✓</div>
                                    )}

                                    {/* HP Bar Mini */}
                                    {!isDead && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950">
                                            <div
                                                className={`h-full ${entity.type === 'ally' ? 'bg-emerald-500' : 'bg-red-500'}`}
                                                style={{ width: `${(entity.hp / entity.maxHp) * 100}%` }}
                                            />
                                        </div>
                                    )}
                                    {isDead && <span className="absolute text-red-700 text-lg">❌</span>}
                                </motion.button>
                            );
                        })}
                        {/* Next Round Marker */}
                        <div className="w-[1px] h-3 bg-stone-700 mx-0.5" />
                        <div className="text-[7px] text-stone-600 font-mono">R2</div>
                    </div>
                </div>

                {/* 3. FOOTER - COMPACT */}
                <div className="mt-auto shrink-0 space-y-0.5">

                    {/* Personal Hero Status + Icons */}
                    <div className="flex items-center justify-between px-1.5 py-0.5 bg-stone-900 border-t border-stone-800 text-[10px] text-stone-400 relative">
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded border border-stone-600 bg-stone-800 flex items-center justify-center text-sm shadow-inner">🧙‍♂️</div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-stone-200 text-[10px]">Маг</span>
                                <span className="text-[7px] text-stone-600">Lvl 1</span>
                            </div>
                        </div>

                        {/* Status Icons & Objects Toggle */}
                        <div className="flex items-center gap-0.5 mx-1">
                            <div className="w-4 h-4 bg-blue-900/30 border border-blue-800/50 rounded flex items-center justify-center text-[8px] text-blue-300">🛡️</div>
                            <div className="w-4 h-4 bg-blue-900/30 border border-blue-800/50 rounded flex items-center justify-center text-[8px] text-blue-300">⚡</div>
                            <div className="w-4 h-4 bg-blue-900/30 border border-blue-800/50 rounded flex items-center justify-center text-[8px] text-blue-300">⚛️</div>

                            <div className="w-[1px] h-3 bg-stone-700 mx-1" />

                            <button
                                onClick={() => togglePopup('objects')}
                                className={`w-5 h-5 rounded flex items-center justify-center transition-all ${activePopup === 'objects' ? 'bg-stone-100 text-stone-900' : 'bg-stone-800 text-stone-500 hover:text-stone-300'}`}
                            >
                                👁️
                            </button>
                        </div>

                        {/* HP/MP Stats */}
                        <div className="flex flex-col gap-0.5 w-20">
                            <div className="flex items-center gap-1">
                                <span className="text-red-500 font-bold text-[7px] w-2">HP</span>
                                <div className="h-1 flex-1 bg-stone-950 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-red-600 w-[80%] shadow-[0_0_5px_red]"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-blue-500 font-bold text-[7px] w-2">MP</span>
                                <div className="h-1 flex-1 bg-stone-950 rounded-full overflow-hidden border border-stone-700">
                                    <div className="h-full bg-blue-600 w-[60%] shadow-[0_0_5px_blue]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COMBAT Action Buttons Area */}
                    <div className="p-1 rounded border border-red-900/30 bg-stone-900/95 shadow-xl relative overflow-hidden flex flex-col gap-1">
                        {/* Row 1: Combat Actions */}
                        <div className="flex gap-1 overflow-x-auto pb-0.5 no-scrollbar">
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'combat', text: 'Вы атакуете посохом.' }])}
                                className="flex-1 px-1.5 py-0.5 bg-gradient-to-b from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 border border-stone-700 rounded text-[9px] font-bold text-stone-200 hover:text-white hover:border-red-500/50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1 justify-center"
                            >
                                <span className="text-amber-500">⚔️</span> Атака
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'combat', text: 'Вы готовите заклинание...' }])}
                                className="flex-1 px-1.5 py-0.5 bg-gradient-to-b from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 border border-stone-700 rounded text-[9px] font-bold text-stone-200 hover:text-white hover:border-blue-500/50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1 justify-center"
                            >
                                <span className="text-blue-400">✨</span> Навык
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'combat', text: 'Вы ищете предмет...' }])}
                                className="flex-1 px-1.5 py-0.5 bg-gradient-to-b from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 border border-stone-700 rounded text-[9px] font-bold text-stone-200 hover:text-white hover:border-emerald-500/50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1 justify-center"
                            >
                                <span className="text-emerald-400">🎒</span> Предмет
                            </button>
                            <button
                                onClick={() => setLogHistory(prev => [...prev, { id: Date.now(), type: 'combat', text: 'Вы занимаете оборону.' }])}
                                className="flex-1 px-1.5 py-0.5 bg-gradient-to-b from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 border border-stone-700 rounded text-[9px] font-bold text-stone-200 hover:text-white transition-colors whitespace-nowrap shadow-sm flex items-center gap-1 justify-center"
                            >
                                <span className="text-stone-400">🛡️</span> Уворот
                            </button>
                        </div>

                        {/* Row 2: Input & Execute */}
                        <div className="flex gap-1 items-stretch h-8">
                            <input
                                type="text"
                                value={combatInput}
                                onChange={(e) => setCombatInput(e.target.value)}
                                placeholder="Опишите маневр или цель..."
                                className="flex-1 bg-black/50 border border-stone-700 rounded px-2 text-[10px] text-stone-200 focus:outline-none focus:border-red-500 placeholder:text-stone-600 font-serif"
                            />
                            <button
                                onClick={handleNextRound}
                                className="px-3 bg-red-800 hover:bg-red-700 text-white font-bold text-[9px] uppercase tracking-wider rounded transition-colors shadow-[0_0_10px_rgba(220,38,38,0.2)] border border-red-700"
                            >
                                ХОД
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunCombatFieldScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction} backTarget={screen.backTarget}>
            <DevTools actions={screen.actions} onAction={onAction} />
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
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction} backTarget={screen.backTarget} variant="immersive">
            <div className="flex flex-col h-full gap-2 text-[11px] text-stone-300">
                <div className="flex-1 rounded border border-stone-800 bg-[#0c0a09] p-6 flex flex-col items-center text-center overflow-y-auto shadow-inner">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="text-5xl mb-6 filter drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                    >
                        🏆
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gold-bright mb-3 font-cinzel tracking-wide"
                    >
                        Победа!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-stone-400 mb-8 leading-relaxed max-w-xs mx-auto"
                    >
                        Древнее зло повержено, и в землях Элвенгарда вновь воцарился мир. Барды сложат песни о вашем подвиге, а король щедро наградит героев.
                    </motion.p>

                    <div className="w-full max-w-xs space-y-3 mb-6">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">Награды</div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center"
                        >
                            <span className="text-stone-400">Опыт</span>
                            <span className="text-emerald-400 font-mono font-bold">+1500 XP</span>
                        </motion.div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center"
                        >
                            <span className="text-stone-400">Золото</span>
                            <span className="text-gold-bright font-mono font-bold">+500 зм</span>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex justify-between p-3 rounded bg-stone-900/50 border border-stone-800 items-center"
                        >
                            <span className="text-stone-400">Предмет</span>
                            <span className="text-purple-400 font-bold">Меч Героя</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                        className="text-[10px] opacity-30 italic font-serif mt-auto"
                    >
                        "Это был славный бой..."
                    </motion.div>
                </div>
            </div>
        </ScreenLayout>
    );
}
