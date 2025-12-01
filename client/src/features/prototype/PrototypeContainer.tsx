import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SCREENS } from '../../shared/data/screens';
import { PhoneContainer } from '../../shared/ui/PhoneContainer';
import { BottomNav } from '../../shared/ui/BottomNav';
import type { Screen } from '../../shared/types';

// Import all screens
import {
    OnboardingScreen, ProfileScreen, ProfileDailyScreen,
    SettingsScreen, HelpScreen, DefaultScreen
} from '../../screens/MainMenu';
import {
    TownHubScreen, TownTavernScreen, TownMarketScreen, TownCraftScreen,
    TownGuildScreen, TownBoardScreen, TownArenaScreen, TownTrainingScreen,
    TownTempleScreen, TownHomeScreen, TownAuctionScreen, TownMageTowerScreen,
    TownGamblingScreen, TownPortScreen, TownWorkshopScreen, TownGraveyardScreen,
    TownQuestDetailsScreen, TownQuestDetailsGoatScreen, TownItemDetailsScreen, TownNpcDialogScreen
} from '../../screens/Town/TownScreens';
import {
    CharacterScreen, CharacterListScreen, CharacterSheetScreen,
    CharacterStatsScreen, CharacterInventoryScreen, CharacterStoryScreen,
    CharacterRelationsScreen, SoloCharScreen
} from '../../screens/Character/CharacterScreens';
import {
    PartyMenuScreen, PartyCodeScreen, PartyLobbyHostScreen, PartyLobbyGuestScreen
} from '../../screens/Party/PartyScreens';
import {
    PlayMenuScreen, RunSceneScreen, RunScenePlanScreen, RunCombatScreen,
    RunCombatFieldScreen, RunEpilogueScreen
} from '../../screens/Game/GameScreens';
import {
    MasterHubScreen, GMLobbyScreen, GMScreenScreen, EditorLibraryScreen,
    EditorCampaignScreen, EditorTemplatesScreen, EditorQuickSessionScreen
} from '../../screens/GM/GMScreens';
import {
    JournalHubScreen, JournalSessionsScreen, JournalCampaignsScreen,
    JournalTimelineScreen, JournalGlossaryScreen, JournalWorldScreen,
    JournalRulesScreen, JournalAchievementsScreen, JournalTrophiesScreen
} from '../../screens/Journal/JournalScreens';

// Map screen IDs to components
const SCREEN_COMPONENTS: Record<string, React.ComponentType<{ screen: Screen; onAction: (target: string) => void }>> = {
    // Main & Service
    onboarding: OnboardingScreen,
    onboarding_character: OnboardingScreen, // Reusing OnboardingScreen for simplicity or create specific if needed
    exit: OnboardingScreen, // Reusing
    help: HelpScreen,
    settings: SettingsScreen,
    profile: ProfileScreen,
    profile_daily: ProfileDailyScreen,

    // Town
    town_hub: TownHubScreen,
    town_tavern: TownTavernScreen,
    town_market: TownMarketScreen,
    town_craft: TownCraftScreen,
    town_guild: TownGuildScreen,
    town_board: TownBoardScreen,
    town_arena: TownArenaScreen,
    town_training: TownTrainingScreen,
    town_temple: TownTempleScreen,
    town_home: TownHomeScreen,
    town_auction: TownAuctionScreen,
    town_mage_tower: TownMageTowerScreen,
    town_gambling: TownGamblingScreen,
    town_port: TownPortScreen,
    town_workshop: TownWorkshopScreen,
    town_graveyard: TownGraveyardScreen,
    town_quest_details: TownQuestDetailsScreen,
    town_quest_details_goat: TownQuestDetailsGoatScreen,
    town_item_details: TownItemDetailsScreen,
    town_npc_dialog: TownNpcDialogScreen,

    // Character
    character: CharacterScreen,
    character_list: CharacterListScreen,
    character_sheet: CharacterSheetScreen,
    character_stats: CharacterStatsScreen,
    character_inventory: CharacterInventoryScreen,
    character_story: CharacterStoryScreen,
    character_relations: CharacterRelationsScreen,
    solo_char: SoloCharScreen,

    // Party
    party_menu: PartyMenuScreen,
    party_code: PartyCodeScreen,
    party_lobby_host: PartyLobbyHostScreen,
    party_lobby_guest: PartyLobbyGuestScreen,

    // Game
    play_menu: PlayMenuScreen,
    run_scene: RunSceneScreen,
    run_scene_plan: RunScenePlanScreen,
    run_combat: RunCombatScreen,
    run_combat_field: RunCombatFieldScreen,
    run_epilogue: RunEpilogueScreen,

    // GM
    master_hub: MasterHubScreen,
    gm_lobby: GMLobbyScreen,
    gm_screen: GMScreenScreen,
    editor_library: EditorLibraryScreen,
    editor_campaign: EditorCampaignScreen,
    editor_templates: EditorTemplatesScreen,
    editor_quick_session: EditorQuickSessionScreen,

    // Journal
    journal_hub: JournalHubScreen,
    journal_sessions: JournalSessionsScreen,
    journal_campaigns: JournalCampaignsScreen,
    journal_timeline: JournalTimelineScreen,
    journal_glossary: JournalGlossaryScreen,
    journal_world: JournalWorldScreen,
    journal_rules: JournalRulesScreen,
    journal_achievements: JournalAchievementsScreen,
    journal_trophies: JournalTrophiesScreen,
};

export function PrototypeContainer() {
    const [currentId, setCurrentId] = useState<string>("onboarding");

    const handleNavigate = (targetId: string) => {
        if (SCREENS[targetId]) {
            setCurrentId(targetId);
        } else {
            console.warn(`Screen not found: ${targetId}`);
        }
    };

    const currentScreen = SCREENS[currentId];
    const ScreenComponent = SCREEN_COMPONENTS[currentId] || DefaultScreen;

    if (!currentScreen) {
        return (
            <PhoneContainer currentId={currentId} onNavigate={handleNavigate}>
                <div className="flex items-center justify-center h-full text-red-500">
                    Screen not found: {currentId}
                </div>
            </PhoneContainer>
        );
    }

    return (
        <PhoneContainer currentId={currentId} onNavigate={handleNavigate}>
            <div className="flex-1 flex flex-col overflow-hidden relative bg-stone-900">
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <ScreenComponent screen={currentScreen} onAction={handleNavigate} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <BottomNav currentId={currentId} onNavigate={handleNavigate} />
            </div>
        </PhoneContainer>
    );
}
