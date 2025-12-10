
import { motion } from 'framer-motion';

interface CampfireSceneProps {
    onInteract: (target: 'campfire' | 'map' | 'hero') => void;
}

export function CampfireScene({ onInteract }: CampfireSceneProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Layer: Forest Night */}
            <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0f172a/1e293b?text=Forest+Night')] bg-cover bg-center" />

            {/* Ambient Overlay: Moonlight */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />

            {/* Interactive Elements Container (Pointer Events Enabled) */}
            <div className="absolute inset-0 pointer-events-auto">

                {/* The Campfire (Center) */}
                <motion.div
                    className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 cursor-pointer group"
                    onClick={() => onInteract('campfire')}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Fire Glow */}
                    <div className="absolute inset-0 bg-orange-500/30 blur-[60px] rounded-full animate-pulse" />
                    {/* Fire Sprite Placeholder */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] group-hover:scale-110 transition-transform">
                        🔥
                    </div>
                    {/* Label */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gold-bright font-cinzel text-sm tracking-widest uppercase">
                        Отдых
                    </div>
                </motion.div>

                {/* The Map / Adventure Start (Right) */}
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-32 h-32 cursor-pointer group"
                    onClick={() => onInteract('map')}
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Map Sprite Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-5xl drop-shadow-lg group-hover:rotate-3 transition-transform">
                        🗺️
                    </div>
                    {/* Label */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-stone-300 font-cinzel text-xs tracking-widest uppercase">
                        В путь
                    </div>
                </motion.div>

                {/* Hero (Left - Placeholder for active char) */}
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-32 h-48 cursor-pointer group"
                    onClick={() => onInteract('hero')}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Hero Sprite Placeholder */}
                    <div className="absolute inset-0 bg-stone-900/50 rounded-full blur-md" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-7xl drop-shadow-2xl">
                        🧝
                    </div>
                    {/* Label */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-stone-300 font-cinzel text-xs tracking-widest uppercase">
                        Герой
                    </div>
                </motion.div>

                {/* Particle Effects (Embers) */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Simple CSS/SVG embers could go here */}
                </div>
            </div>
        </div>
    );
}
