interface BottomNavProps {
    currentId: string;
    onNavigate: (id: string) => void;
}

export function BottomNav({ currentId, onNavigate }: BottomNavProps) {
    const tabs = [
        { id: 'character', label: 'Герой', icon: '👤', match: ['character', 'character_sheet', 'character_inventory', 'character_stats', 'character_story', 'character_relations', 'character_list'] },
        { id: 'town_hub', label: 'Город', icon: '🏰', match: ['town_hub', 'town_tavern', 'town_market', 'town_craft', 'town_guild', 'town_board', 'town_arena', 'town_training', 'town_temple', 'town_home'] },
        { id: 'play_menu', label: 'Игра', icon: '⚔️', match: ['play_menu', 'game_prep', 'run_scene', 'solo_char', 'party_menu', 'run_combat', 'run_epilogue'] },
        { id: 'master_hub', label: 'Мастер', icon: '📜', match: ['master_hub', 'gm_lobby', 'editor_library', 'editor_campaign', 'editor_templates', 'editor_quick_session'] },
        { id: 'profile', label: 'Аккаунт', icon: '⚙️', match: ['profile', 'settings', 'help', 'journal_hub', 'journal_sessions', 'journal_campaigns', 'journal_timeline', 'journal_glossary', 'journal_world', 'journal_rules', 'journal_achievements', 'journal_trophies'] },
    ];

    const isActive = (tab: typeof tabs[0]) => {
        if (tab.id === currentId) return true;
        return tab.match.includes(currentId);
    };

    return (
        <nav className="h-16 bg-stone-950 border-t-2 border-gold-dim flex items-center justify-around px-2 relative z-10 shadow-2xl">
            {tabs.map((tab) => {
                const active = isActive(tab);
                return (
                    <button
                        key={tab.id}
                        onClick={() => onNavigate(tab.id)}
                        className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 ${active ? 'text-gold-bright -translate-y-1' : 'text-stone-500 hover:text-stone-300'
                            }`}
                    >
                        <span className={`text-2xl mb-0.5 filter ${active ? 'drop-shadow-[0_0_5px_rgba(244,208,63,0.5)]' : ''}`}>
                            {tab.icon}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${active ? 'text-gold-bright' : ''}`}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}
