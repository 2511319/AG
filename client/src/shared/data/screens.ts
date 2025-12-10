import type { ScreenMap } from '../types/index';

export const SCREENS: ScreenMap = {
    onboarding: {
        id: "onboarding",
        title: "Добро пожаловать в RPG‑Bot",
        kind: "service",
        description:
            "Этот бот использует воображение, магию и иногда мрачные сюжеты. Вам уже исполнилось 18 лет?",
        actions: [
            {
                id: "accept_18",
                label: "Да, мне есть 18",
                target: "onboarding_character"
            },
            {
                id: "reject_18",
                label: "Нет, я младше 18",
                target: "exit"
            }
        ]
    },
    onboarding_character: {
        id: "onboarding_character",
        title: "Создать персонажа сейчас?",
        kind: "service",
        description:
            "Вы можете сразу создать героя, с которым начнёте приключение. Если не готовы — можно перейти в главное меню и заняться этим позже.",
        actions: [
            {
                id: "go_to_character",
                label: "Перейти к разделу “Персонаж”",
                target: "character"
            },
            {
                id: "skip_to_main",
                label: "Позже, перейти в аккаунт",
                target: "profile"
            }
        ]
    },
    exit: {
        id: "exit",
        title: "До встречи",
        kind: "service",
        description:
            "Вы вышли из RPG‑Bot. В любой момент можно вернуться через /start в Telegram.",
        actions: [
            {
                id: "restart",
                label: "Вернуться к /start",
                target: "onboarding"
            }
        ]
    },
    town_hub: {
        id: "town_hub",
        title: "Оплот Надежды",
        kind: "hub",
        description: "Мирный город, где герои могут отдохнуть и подготовиться к приключениям.",
        actions: [
            { id: "back_to_profile", label: "Меню", target: "profile" }
        ]
    },
    town_tavern: {
        id: "town_tavern",
        title: "Таверна «Пьяный Гоблин»",
        kind: "hub",
        description: "Место для отдыха, слухов и найма спутников.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_market: {
        id: "town_market",
        title: "Рынок",
        kind: "hub",
        description: "Торговая площадь. Здесь можно купить снаряжение и припасы.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_auction: {
        id: "town_auction",
        title: "Аукцион",
        kind: "service",
        description: "Торговля редкими предметами между героями.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_craft: {
        id: "town_craft",
        title: "Кузница",
        kind: "service",
        description: "Создание и улучшение предметов, перековка снаряжения.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_guild: {
        id: "town_guild",
        title: "Гильдия Искателей",
        kind: "hub",
        description: "Доска контрактов и управление репутацией.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_mage_tower: {
        id: "town_mage_tower",
        title: "Башня Магов",
        kind: "service",
        description: "Изучение заклинаний, телепортация и магические услуги.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_gambling: {
        id: "town_gambling",
        title: "Игорный Дом",
        kind: "game",
        description: "Испытайте удачу в кости или карты.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_port: {
        id: "town_port",
        title: "Порт",
        kind: "hub",
        description: "Отправка в дальние экспедиции и морская торговля.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_temple: {
        id: "town_temple",
        title: "Храм",
        kind: "service",
        description: "Исцеление ран, снятие проклятий и благословения.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_arena: {
        id: "town_arena",
        title: "Арена",
        kind: "game",
        description: "Сражения за славу и золото.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_training: {
        id: "town_training",
        title: "Тренировочный лагерь",
        kind: "game",
        description: "Отработка навыков и проверка урона.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_workshop: {
        id: "town_workshop",
        title: "Мастерская",
        kind: "service",
        description: "Инженерные изыскания и создание механизмов.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_graveyard: {
        id: "town_graveyard",
        title: "Кладбище",
        kind: "hub",
        description: "Почтить память павших героев.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_home: {
        id: "town_home",
        title: "Личный Дом",
        kind: "hub",
        description: "Ваше личное жилище. Хранилище и отдых.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },
    town_quest_details: {
        id: "town_quest_details",
        title: "Детали задания",
        kind: "service",
        description: "Подробная информация о контракте.",
        actions: [{ id: "back", label: "Назад", target: "town_board" }]
    },
    town_quest_details_goat: {
        id: "town_quest_details_goat",
        title: "Детали задания",
        kind: "service",
        description: "Подробная информация о контракте.",
        actions: [{ id: "back", label: "Назад", target: "town_board" }]
    },
    town_item_details: {
        id: "town_item_details",
        title: "Предмет",
        kind: "service",
        description: "Информация о предмете.",
        actions: [{ id: "back", label: "Назад", target: "town_market" }]
    },
    town_npc_dialog: {
        id: "town_npc_dialog",
        title: "Диалог",
        kind: "game",
        description: "Разговор с персонажем.",
        actions: [{ id: "back", label: "Завершить", target: "town_hub" }]
    },
    town_board: {
        id: "town_board",
        title: "Доска объявлений",
        kind: "service",
        description: "Список доступных заданий в городе.",
        actions: [{ id: "back", label: "В город", target: "town_hub" }]
    },

    profile: {
        id: "profile",
        title: "Аккаунт",
        kind: "hub",
        description:
            "Системный хаб игрока. Здесь находятся настройки, статистика аккаунта, глобальный архив знаний (Журнал) и справка.",
        actions: [
            {
                id: "journal_hub",
                label: "Архив знаний (Журнал)",
                target: "journal_hub"
            },
            {
                id: "settings",
                label: "Настройки",
                target: "settings"
            },
            {
                id: "help",
                label: "Справка",
                target: "help"
            },
            {
                id: "onboarding",
                label: "Интро",
                target: "onboarding"
            }
        ]
    },
    help: {
        id: "help",
        title: "Справка и гайд",
        kind: "service",
        description:
            "Краткое объяснение режимов: “Играть” — для соло и пати, “Персонаж” — управление героями и журналом, “Мастерская” — кампании мастера и редактор, “Город” — мета‑активности между приключениями. В финальной версии здесь будут советы, FAQ и ссылка на подробный гайд.",
        actions: [
            {
                id: "to_play",
                label: "Перейти к игре",
                target: "play_menu"
            }
        ]
    },

    profile_daily: {
        id: "profile_daily",
        title: "Ежедневные задания",
        kind: "service",
        description:
            "Макет экрана ежедневных заданий и событий. В финальной версии здесь будут задачи на сегодня, таймер обновления и награды за активность.",
        actions: [
            {
                id: "back_to_profile",
                label: "Назад в аккаунт",
                target: "profile"
            }
        ]
    },
    play_menu: {
        id: "play_menu",
        title: "Играть",
        kind: "hub",
        description:
            "Продолжить прошлую кампанию или начать новую — в одиночку или с пати.",
        actions: [
            {
                id: "continue",
                label: "Продолжить",
                target: "game_prep"
            },
            {
                id: "solo",
                label: "Новая игра",
                target: "solo_char"
            },
            {
                id: "party",
                label: "Играть в пати",
                target: "party_menu"
            }
        ]
    },
    game_prep: {
        id: "game_prep",
        title: "Выбор героя",
        kind: "hub",
        description: "Выберите героя для начала приключения.",
        actions: [
            {
                id: "continue",
                label: "Продолжить",
                target: "mission_select"
            },
            {
                id: "solo",
                label: "Новая игра",
                target: "solo_char"
            },
            {
                id: "party",
                label: "Пати",
                target: "party_menu"
            }
        ],
        backTarget: "play_menu"
    },
    mission_select: {
        id: "mission_select",
        title: "Выбор миссии",
        kind: "hub",
        description: "Выберите приключение, в которое отправится ваша группа.",
        actions: [
            {
                id: "select_mission",
                label: "Выбрать",
                target: "prep_briefing"
            },
            {
                id: "back",
                label: "Назад",
                target: "game_prep"
            }
        ],
        backTarget: "game_prep"
    },
    prep_inventory: {
        id: "prep_inventory",
        title: "Инвентарь",
        kind: "game",
        description: "Управление снаряжением перед вылазкой.",
        actions: [
            { id: "back", label: "Назад", target: "game_prep" }
        ]
    },
    prep_heroes: {
        id: "prep_heroes",
        title: "Герои",
        kind: "game",
        description: "Выбор и настройка состава партии.",
        actions: [
            { id: "back", label: "Назад", target: "game_prep" }
        ]
    },
    prep_journal: {
        id: "prep_journal",
        title: "Журнал",
        kind: "game",
        description: "Текущие задачи и заметки.",
        actions: [
            { id: "back", label: "Назад", target: "game_prep" }
        ]
    },
    active_campaigns: {
        id: "active_campaigns",
        title: "Текущие приключения",
        kind: "game",
        description: "Продолжить незавершенные истории.",
        actions: [
            {
                id: "resume_session",
                label: "Продолжить",
                target: "run_scene"
            },
            {
                id: "back",
                label: "Назад",
                target: "game_prep"
            }
        ],
        backTarget: "game_prep"
    },
    run_scene: {
        id: "run_scene",
        title: "Приключение",
        kind: "game",
        description: "Ваше текущее приключение.",
        actions: [],
        backTarget: "game_prep"
    },
    run_scene_plan: {
        id: "run_scene_plan",
        title: "План сцены",
        kind: "game",
        description: "Планирование действий.",
        actions: [],
        backTarget: "run_scene"
    },
    run_combat: {
        id: "run_combat",
        title: "Бой",
        kind: "game",
        description: "Режим сражения.",
        actions: [],
        backTarget: "run_scene"
    },
    run_combat_field: {
        id: "run_combat_field",
        title: "Поле боя",
        kind: "game",
        description: "Тактическая карта.",
        actions: [],
        backTarget: "run_combat"
    },
    run_epilogue: {
        id: "run_epilogue",
        title: "Эпилог",
        kind: "game",
        description: "Итоги сражения и награды.",
        actions: [
            {
                id: "continue",
                label: "Продолжить",
                target: "run_scene"
            }
        ],
        backTarget: "run_scene"
    },
    prep_briefing: {
        id: "prep_briefing",
        title: "Штаб",
        kind: "game",
        description: "Подготовка к операции. Изучите разведданные, закупитесь припасами и отдохните перед боем.",
        actions: [
            { id: "prep_camp", label: "Лагерь", target: "prep_camp" },
            { id: "prep_provisions", label: "Снабжение", target: "prep_provisions" },
            { id: "start_mission", label: "Начать", target: "run_scene" },
            { id: "back", label: "Назад", target: "mission_select" }
        ],
        backTarget: "mission_select"
    },
    prep_camp: {
        id: "prep_camp",
        title: "Лагерь",
        kind: "game",
        description: "Отдых и восстановление сил.",
        actions: [
            { id: "back", label: "Назад", target: "prep_briefing" }
        ],
        backTarget: "prep_briefing"
    },
    prep_provisions: {
        id: "prep_provisions",
        title: "Снабжение",
        kind: "game",
        description: "Закупка припасов в дорогу.",
        actions: [
            { id: "back", label: "Назад", target: "prep_briefing" }
        ],
        backTarget: "prep_briefing"
    },
    character: {
        id: "character",
        title: "Персонаж",
        kind: "hub",
        description:
            "Управление вашими героями. Здесь можно создать нового, изменить текущего, посмотреть статы и инвентарь.",
        actions: [
            {
                id: "my_heroes",
                label: "Мои герои",
                target: "character_list"
            },
            {
                id: "create_hero",
                label: "Создать нового",
                target: "character_sheet"
            },
            {
                id: "back_to_profile",
                label: "Назад в аккаунт",
                target: "profile"
            }
        ]
    },
    character_list: {
        id: "character_list",
        title: "Список героев",
        kind: "game",
        description:
            "Макет списка героев. В финальной версии здесь будет выбор активного персонажа и краткая сводка по каждому.",
        actions: [
            {
                id: "select_hero",
                label: "Выбрать",
                target: "character_sheet"
            },
            {
                id: "back",
                label: "Назад",
                target: "character"
            }
        ]
    },
    character_sheet: {
        id: "character_sheet",
        title: "Лист персонажа",
        kind: "game",
        description:
            "Макет листа персонажа. Основные параметры, класс, уровень и опыт.",
        actions: [
            {
                id: "edit",
                label: "Редактировать",
                target: "character_sheet"
            },
            {
                id: "back",
                label: "Назад",
                target: "character_list"
            }
        ]
    },
    character_stats: {
        id: "character_stats",
        title: "Характеристики",
        kind: "game",
        description:
            "Макет характеристик. Сила, ловкость, интеллект и вторичные параметры.",
        actions: [
            {
                id: "back",
                label: "Назад",
                target: "character_sheet"
            }
        ]
    },
    character_inventory: {
        id: "character_inventory",
        title: "Инвентарь героя",
        kind: "game",
        description:
            "Макет инвентаря. Экипировка, рюкзак и управление предметами.",
        actions: [
            {
                id: "back",
                label: "Назад",
                target: "character_sheet"
            }
        ]
    },
    character_story: {
        id: "character_story",
        title: "История",
        kind: "game",
        description:
            "Макет биографии. Прошлое героя, личные квесты и заметки.",
        actions: [
            {
                id: "back",
                label: "Назад",
                target: "character_sheet"
            }
        ]
    },
    character_relations: {
        id: "character_relations",
        title: "Отношения",
        kind: "game",
        description:
            "Макет социальных связей. Друзья, враги и репутация во фракциях.",
        actions: [
            {
                id: "back",
                label: "Назад",
                target: "character_sheet"
            }
        ]
    },
    solo_char: {
        id: "solo_char",
        title: "Создание персонажа",
        kind: "game",
        description: "Создайте своего героя или выберите готового.",
        actions: [
            {
                id: "run_scene",
                label: "Начать",
                target: "run_scene"
            },
            {
                id: "back",
                label: "Назад",
                target: "game_prep"
            }
        ],
        backTarget: "game_prep"
    },
    party_menu: {
        id: "party_menu",
        title: "Пати",
        kind: "hub",
        description:
            "Режим совместной игры. Вы можете создать лобби или присоединиться по коду.",
        actions: [
            {
                id: "create_lobby",
                label: "Создать лобби",
                target: "party_lobby_host"
            },
            {
                id: "join_lobby",
                label: "Ввести код",
                target: "party_code"
            },
            {
                id: "back",
                label: "Назад",
                target: "play_menu"
            }
        ]
    },
    party_code: {
        id: "party_code",
        title: "Ввод кода",
        kind: "service",
        description:
            "Введите код приглашения, чтобы присоединиться к приключению.",
        actions: [
            {
                id: "submit_code",
                label: "Войти",
                target: "party_lobby_guest"
            },
            {
                id: "back",
                label: "Назад",
                target: "party_menu"
            }
        ]
    },
    party_lobby_host: {
        id: "party_lobby_host",
        title: "Лобби (Хост)",
        kind: "game",
        description:
            "Вы — лидер группы. Ждите игроков, настраивайте сложность и запускайте сессию.",
        actions: [
            {
                id: "start_session",
                label: "Начать приключение",
                target: "run_scene"
            },
            {
                id: "kick_player",
                label: "Управление игроками",
                target: "party_lobby_host"
            },
            {
                id: "disband",
                label: "Распустить",
                target: "party_menu"
            }
        ]
    },
    party_lobby_guest: {
        id: "party_lobby_guest",
        title: "Лобби (Гость)",
        kind: "game",
        description:
            "Вы в группе. Ожидайте, пока лидер начнет игру. Здесь можно выбрать своего героя и общаться в чате.",
        actions: [
            {
                id: "ready",
                label: "Готов",
                target: "party_lobby_guest"
            },
            {
                id: "leave",
                label: "Покинуть",
                target: "party_menu"
            }
        ]
    },
    master_hub: {
        id: "master_hub",
        title: "Мастерская",
        kind: "hub",
        description:
            "Инструментарий Гейм‑мастера. Создавайте свои миры, управляйте кампаниями и проводите игры для друзей.",
        actions: [
            {
                id: "my_campaigns",
                label: "Мои кампании",
                target: "editor_library"
            },
            {
                id: "quick_session",
                label: "Быстрая сессия",
                target: "editor_quick_session"
            },
            {
                id: "gm_lobby",
                label: "Лобби мастера",
                target: "gm_lobby"
            },
            {
                id: "back_to_profile",
                label: "Назад в аккаунт",
                target: "profile"
            }
        ]
    },
    gm_lobby: {
        id: "gm_lobby",
        title: "Лобби Мастера",
        kind: "game",
        description:
            "Управление активной сессией со стороны ГМ. Подключение игроков, выбор сцены и раздача ролей.",
        actions: [
            {
                id: "start_game",
                label: "Запустить игру",
                target: "gm_screen"
            },
            {
                id: "back",
                label: "Назад",
                target: "master_hub"
            }
        ]
    },
    gm_screen: {
        id: "gm_screen",
        title: "Экран Мастера",
        kind: "game",
        description:
            "Главный пульт управления игрой. Скрытые броски, управление NPC, погодой и событиями.",
        actions: [
            {
                id: "pause",
                label: "Пауза",
                target: "gm_screen"
            },
            {
                id: "end_session",
                label: "Завершить сессию",
                target: "run_epilogue"
            }
        ]
    },
    journal_hub: {
        id: "journal_hub",
        title: "Архив знаний",
        kind: "hub",
        description:
            "Ваша личная библиотека. История приключений, бестиарий, лор мира и достижения.",
        actions: [
            {
                id: "sessions",
                label: "История сессий",
                target: "journal_sessions"
            },
            {
                id: "campaigns",
                label: "Кампании",
                target: "journal_campaigns"
            },
            {
                id: "timeline",
                label: "Хронология",
                target: "journal_timeline"
            },
            {
                id: "glossary",
                label: "Бестиарий и Лор",
                target: "journal_glossary"
            },
            {
                id: "rules",
                label: "Правила",
                target: "journal_rules"
            },
            {
                id: "achievements",
                label: "Достижения",
                target: "journal_achievements"
            },
            {
                id: "trophies",
                label: "Зал трофеев",
                target: "journal_trophies"
            },
            {
                id: "back_to_profile",
                label: "Назад в аккаунт",
                target: "profile"
            }
        ]
    },
    journal_sessions: {
        id: "journal_sessions",
        title: "История сессий",
        kind: "game",
        description: "Логи прошлых игр и статистика.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_campaigns: {
        id: "journal_campaigns",
        title: "Кампании",
        kind: "game",
        description: "Прогресс в сюжетных линиях.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_timeline: {
        id: "journal_timeline",
        title: "Хронология",
        kind: "game",
        description: "Лента событий вашего мира.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_glossary: {
        id: "journal_glossary",
        title: "Бестиарий и Лор",
        kind: "game",
        description: "Энциклопедия встреченных существ и мест.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_world: {
        id: "journal_world",
        title: "Мир",
        kind: "game",
        description: "Карты и описание локаций.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_rules: {
        id: "journal_rules",
        title: "Правила",
        kind: "service",
        description: "Справочник по механике игры.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_achievements: {
        id: "journal_achievements",
        title: "Достижения",
        kind: "service",
        description: "Ваши награды и прогресс.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    },
    journal_trophies: {
        id: "journal_trophies",
        title: "Зал трофеев",
        kind: "game",
        description: "Коллекция редких предметов.",
        actions: [{ id: "back", label: "Назад", target: "journal_hub" }]
    }
};
