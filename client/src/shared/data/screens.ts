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
                target: "run_scene"
            },
            {
                id: "solo",
                label: "Соло‑приключение",
                target: "solo_char"
            },
            {
                id: "party",
                label: "Играть в пати",
                target: "party_menu"
            }
        ]
    },
    town_hub: {
        id: "town_hub",
        title: "Город",
        kind: "game",
        description:
            "Городской хаб между приключениями. Здесь вы можете зайти в таверну, на рынок, заняться крафтом, делами гильдии, взять квесты, испытать героя на арене или отдохнуть дома.",
        actions: [
            {
                id: "tavern",
                label: "Таверна",
                target: "town_tavern"
            },
            {
                id: "market",
                label: "Рынок",
                target: "town_market"
            },
            {
                id: "craft",
                label: "Крафт",
                target: "town_craft"
            },
            {
                id: "guild",
                label: "Гильдия",
                target: "town_guild"
            },
            {
                id: "board",
                label: "Доска объявлений",
                target: "town_board"
            },
            {
                id: "arena",
                label: "Арена",
                target: "town_arena"
            },
            {
                id: "training",
                label: "Тренировка",
                target: "town_training"
            },
            {
                id: "temple",
                label: "Храм",
                target: "town_temple"
            },
            {
                id: "home",
                label: "Дом",
                target: "town_home"
            }
        ]
    },
    town_tavern: {
        id: "town_tavern",
        title: "Таверна",
        kind: "game",
        description:
            "Макет таверны. В финальной версии здесь можно будет искать пати и кампании, брать побочные задания и общаться с ключевыми NPC.",
        actions: [
            {
                id: "back_to_town_from_tavern",
                label: "Назад в город",
                target: "town_hub"
            }
        ]
    },
    town_market: {
        id: "town_market",
        title: "Рынок",
        kind: "game",
        description:
            "Макет рынка. В финальной версии здесь будет покупка и продажа предметов, расходников, косметики и, возможно, особых слотов кампаний.",
        actions: [
            {
                id: "back_to_town_from_market",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_craft: {
        id: "town_craft",
        title: "Крафт",
        kind: "game",
        description:
            "Макет крафта. В финальной версии здесь можно будет улучшать и создавать предметы, разбивать лут на ресурсы и экспериментировать с рецептами.",
        actions: [
            {
                id: "back_to_town_from_craft",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_guild: {
        id: "town_guild",
        title: "Гильдия",
        kind: "game",
        description:
            "Макет гильдии. В финальной версии здесь будут кланы и сообщества, общие цели, рейтинги и, возможно, кооперативные кампании.",
        actions: [
            {
                id: "back_to_town_from_guild",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_board: {
        id: "town_board",
        title: "Доска объявлений",
        kind: "game",
        description:
            "Макет доски объявлений. В финальной версии здесь будут побочные задания, контракты и события, которые можно взять между основными сессиями.",
        actions: [
            {
                id: "back_to_town_from_board",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_arena: {
        id: "town_arena",
        title: "Арена",
        kind: "game",
        description:
            "Макет арены. В финальной версии здесь будут боевые испытания для проверки билдов, тренировочные бои и особые челленджи.",
        actions: [
            {
                id: "back_to_town_from_arena",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_training: {
        id: "town_training",
        title: "Тренировка",
        kind: "game",
        description:
            "Макет тренировочной площадки. В финальной версии здесь будут обучающие сцены, учебные бои и подсказки по механикам.",
        actions: [
            {
                id: "back_to_town_from_training",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_temple: {
        id: "town_temple",
        title: "Храм",
        kind: "game",
        description:
            "Макет храма. В финальной версии здесь можно будет снимать проклятия, получать благословения и взаимодействовать с мета‑ресурсами кампаний.",
        actions: [
            {
                id: "back_to_town_from_temple",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_home: {
        id: "town_home",
        title: "Дом",
        kind: "game",
        description:
            "Макет личного дома/комнаты. В финальной версии здесь будет отображаться коллекция трофеев, украшения и персонализация игрока.",
        actions: [
            {
                id: "back_to_town_from_home",
                label: "Назад в город",
                target: "town_hub"
            },
        ]
    },
    town_quest_details: {
        id: "town_quest_details",
        title: "Детали задания",
        kind: "game",
        description: "Подробное описание задания, награды и условия.",
        actions: [
            { id: "accept_quest", label: "Принять", target: "town_tavern" }, // Mock: returns to tavern
            { id: "back", label: "Назад", target: "town_tavern" }
        ]
    },
    town_item_details: {
        id: "town_item_details",
        title: "Предмет",
        kind: "game",
        description: "Характеристики предмета и покупка.",
        actions: [
            { id: "buy_item", label: "Купить", target: "town_market" }, // Mock: returns to market
            { id: "back", label: "Назад", target: "town_market" }
        ]
    },
    town_npc_dialog: {
        id: "town_npc_dialog",
        title: "Диалог",
        kind: "game",
        description: "Разговор с NPC.",
        actions: [
            { id: "continue_dialog", label: "Продолжить", target: "town_npc_dialog" },
            { id: "end_dialog", label: "Завершить", target: "town_tavern" }
        ]
    },
    journal_hub: {
        id: "journal_hub",
        title: "Журнал и прогресс",
        kind: "service",
        description:
            "Раздел для знаний о мире и вашего прогресса: архив сыгранных сессий, карта кампаний, хронология мира, глоссарий терминов, лор, правила, достижения и коллекция трофеев.",
        actions: [
            {
                id: "journal_sessions",
                label: "Архив сессий",
                target: "journal_sessions"
            },
            {
                id: "journal_campaigns",
                label: "Кампании",
                target: "journal_campaigns"
            },
            {
                id: "journal_timeline",
                label: "Хронология",
                target: "journal_timeline"
            },
            {
                id: "journal_glossary",
                label: "Глоссарий",
                target: "journal_glossary"
            },
            {
                id: "journal_world",
                label: "Знания мира",
                target: "journal_world"
            },
            {
                id: "journal_rules",
                label: "Правила мира",
                target: "journal_rules"
            },
            {
                id: "journal_achievements",
                label: "Достижения",
                target: "journal_achievements"
            },
            {
                id: "journal_trophies",
                label: "Трофеи",
                target: "journal_trophies"
            }
        ]
    },
    journal_sessions: {
        id: "journal_sessions",
        title: "Архив сессий",
        kind: "service",
        description:
            "Макет архива сессий. В финальной версии здесь будут краткие отчёты по сыгранным сессиям, ключевые решения и ссылки на эпилоги.",
        actions: [
            {
                id: "back_to_journal_from_sessions",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_campaigns: {
        id: "journal_campaigns",
        title: "Кампании",
        kind: "service",
        description:
            "Макет списка кампаний игрока. В финальной версии здесь будут статусы кампаний (активна, завершена), краткие описания и переходы к продолжению или эпилогу.",
        actions: [
            {
                id: "back_to_journal_from_campaigns",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_timeline: {
        id: "journal_timeline",
        title: "Хронология",
        kind: "service",
        description:
            "Макет хронологии мира и кампаний. В финальной версии здесь будет лента ключевых событий, привязанных к сессиям и важным решениям.",
        actions: [
            {
                id: "back_to_journal_from_timeline",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_glossary: {
        id: "journal_glossary",
        title: "Глоссарий",
        kind: "service",
        description:
            "Справочник терминов и ключевых понятий мира. В финальной версии здесь будут краткие определения, ссылки на сцены и важных NPC.",
        actions: [
            {
                id: "back_to_journal_from_glossary",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_world: {
        id: "journal_world",
        title: "Знания мира",
        kind: "service",
        description:
            "Обзор лора: фракции, регионы, хронология и ключевые события. В финальной версии здесь будут разбивки по темам и связки с кампаниями.",
        actions: [
            {
                id: "back_to_journal_from_world",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_rules: {
        id: "journal_rules",
        title: "Правила мира",
        kind: "service",
        description:
            "Облегчённая версия правил: как работают проверки, бой, магия и особые механики этого сеттинга.",
        actions: [
            {
                id: "back_to_journal_from_rules",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_achievements: {
        id: "journal_achievements",
        title: "Достижения",
        kind: "service",
        description:
            "Список открытых достижений: сюжетные вехи, скрытые находки, испытания. В финальной версии здесь будет прогресс по каждому достижению.",
        actions: [
            {
                id: "back_to_journal_from_achievements",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    journal_trophies: {
        id: "journal_trophies",
        title: "Трофеи",
        kind: "service",
        description:
            "Коллекция особых трофеев: уникальные предметы, памятные находки и мета‑награды за кампании.",
        actions: [
            {
                id: "back_to_journal_from_trophies",
                label: "Назад в журнал",
                target: "journal_hub"
            }
        ]
    },
    character: {
        id: "character",
        title: "Персонаж",
        kind: "game",
        description:
            "Здесь живут ваши герои. Откройте лист активного персонажа, перейдите в список героев или журнал, посмотрите отношения и фракции, создайте нового персонажа.",
        actions: [
            {
                id: "open_stats",
                label: "Характеристики",
                target: "character_stats"
            },
            {
                id: "open_inventory",
                label: "Инвентарь",
                target: "character_inventory"
            },
            {
                id: "open_story",
                label: "История",
                target: "character_story"
            },
            {
                id: "manage_characters",
                label: "Список персонажей",
                target: "character_list"
            },
            {
                id: "relations",
                label: "Отношения и фракции",
                target: "character_relations"
            },
            {
                id: "create_character",
                label: "Создать нового персонажа",
                target: "solo_char"
            }
        ]
    },
    character_list: {
        id: "character_list",
        title: "Список персонажей",
        kind: "game",
        description:
            "Макет списка всех персонажей: активных и архивных. В финальной версии здесь можно будет выбирать активного героя и перемещать персонажей между активом и архивом.",
        actions: [
            {
                id: "mark_active",
                label: "Сделать героя активным",
                target: "character"
            },
            {
                id: "toggle_archive",
                label: "Переместить героя в архив / вернуть",
                target: "character_list"
            },
            {
                id: "back_to_character_from_list",
                label: "Назад в раздел “Персонаж”",
                target: "character"
            }
        ]
    },
    character_stats: {
        id: "character_stats",
        title: "Характеристики и навыки",
        kind: "game",
        description:
            "Здесь будут основные характеристики (Сила, Ловкость и т.п.), модификаторы, навыки, спасброски и другие числовые параметры персонажа.",
        actions: [
            {
                id: "back_to_hub_from_stats",
                label: "Назад",
                target: "character"
            }
        ]
    },
    character_inventory: {
        id: "character_inventory",
        title: "Инвентарь и экипировка",
        kind: "game",
        description:
            "Здесь будут слоты экипировки, содержимое рюкзака, валюты и особые предметы персонажа.",
        actions: [
            {
                id: "back_to_hub_from_inventory",
                label: "Назад",
                target: "character"
            }
        ]
    },
    character_story: {
        id: "character_story",
        title: "История и заметки",
        kind: "game",
        description:
            "Здесь будут краткая биография героя, важные события кампаний, заметки мастера и личные пометки игрока.",
        actions: [
            {
                id: "back_to_hub_from_story",
                label: "Назад",
                target: "character"
            }
        ]
    },
    character_relations: {
        id: "character_relations",
        title: "Отношения и фракции",
        kind: "game",
        description:
            "Макет экрана отношений персонажа. В финальной версии здесь будет репутация с фракциями, отношения с ключевыми NPC и влияние решений кампаний.",
        actions: [
            {
                id: "back_to_character_from_relations",
                label: "Назад в раздел “Персонаж”",
                target: "character"
            }
        ]
    },
    solo_char: {
        id: "solo_char",
        title: "Создание персонажа",
        kind: "game",
        description:
            "Перед тем как отправиться в приключение, создайте героя. В финальной версии тут будут детали внешности, класса и предыстории.",
        actions: [
            {
                id: "start_run",
                label: "Начать приключение",
                target: "run_scene"
            },
            {
                id: "back",
                label: "Назад",
                target: "play_menu"
            }
        ]
    },
    party_menu: {
        id: "party_menu",
        title: "Игра в пати",
        kind: "hub",
        description:
            "Соберите друзей в одну кампанию: создайте комнату или присоединитесь по коду.",
        actions: [
            {
                id: "create",
                label: "Создать кампанию",
                target: "party_lobby_host"
            },
            {
                id: "join",
                label: "Войти по коду",
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
        title: "Вход по коду",
        kind: "service",
        description:
            "Введите код кампании, который прислал вам мастер или друг, чтобы присоединиться к пати.",
        actions: [
            {
                id: "submit",
                label: "Подтвердить код",
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
        title: "Лобби пати (хост)",
        kind: "game",
        description:
            "Вы создали кампанию. Ждите игроков, собирайте пати и когда все готовы — начинайте приключение.",
        actions: [
            {
                id: "add_character",
                label: "Добавить персонажа",
                target: "solo_char"
            },
            {
                id: "start_party_run",
                label: "Начать игру",
                target: "run_scene"
            },
            {
                id: "back",
                label: "Назад",
                target: "party_menu"
            }
        ]
    },
    party_lobby_guest: {
        id: "party_lobby_guest",
        title: "Лобби пати (гость)",
        kind: "game",
        description:
            "Вы в лобби кампании. Создайте или выберите персонажа и ждите, пока мастер начнёт сессию.",
        actions: [
            {
                id: "add_character",
                label: "Добавить персонажа",
                target: "solo_char"
            },
            {
                id: "leave",
                label: "Покинуть пати",
                target: "play_menu"
            }
        ]
    },
    run_scene: {
        id: "run_scene",
        title: "Сцена приключения",
        kind: "game",
        description:
            "Canvas сцены приключения. Вверху контекст с главой/сценой кампании и оценкой уровня угрозы, слева повествование и мини‑лог, справа цели, факторы и NPC/объекты сцены, ниже состояние группы и панель предлагаемых действий с полем «Свой ход».",
        actions: [
            {
                id: "choice_1",
                label: "Идти дальше по сюжету",
                target: "run_scene"
            },
            {
                id: "choice_2",
                label: "Спровоцировать бой",
                target: "run_combat"
            },
            {
                id: "choice_3",
                label: "Завершить кампанию",
                target: "run_epilogue"
            },
            {
                id: "custom_action",
                label: "Свой ход",
                target: "run_scene"
            },
            {
                id: "to_menu",
                label: "В меню",
                target: "play_menu"
            }
        ]
    },
    run_scene_plan: {
        id: "run_scene_plan",
        title: "План сцены",
        kind: "game",
        description:
            "Макет плана сцены. В финальной версии здесь будет схематичная карта локации с ключевыми зонами, путями, объектами взаимодействия и скрытыми областями, открывающимися после проверок.",
        actions: [
            {
                id: "back_to_scene_from_plan",
                label: "Назад к сцене",
                target: "run_scene"
            }
        ]
    },
    run_combat: {
        id: "run_combat",
        title: "Бой",
        kind: "game",
        description:
            "Боевой Canvas. Фон — арт сцены боя. Вверху блок с информацией о локации и времени суток и кнопкой схемы поля боя, ниже шкала инициативы, слева лог боя, справа компактные панели союзников и врагов, снизу полоска вашего персонажа и панель быстрых действий со своим ходом.",
        actions: [
            {
                id: "end_combat",
                label: "Завершить бой",
                target: "run_scene"
            },
            {
                id: "finish_campaign",
                label: "Финал кампании",
                target: "run_epilogue"
            },
            {
                id: "to_menu",
                label: "В меню",
                target: "play_menu"
            }
        ]
    },
    run_combat_field: {
        id: "run_combat_field",
        title: "Схема поля боя",
        kind: "game",
        description:
            "Макет схемы поля боя. В финальной версии здесь будет расчерченная на клетки карта с позициями союзников и противников, укрытиями и зонами эффектов.",
        actions: [
            {
                id: "back_to_combat_from_field",
                label: "Назад к бою",
                target: "run_combat"
            }
        ]
    },
    run_epilogue: {
        id: "run_epilogue",
        title: "Эпилог",
        kind: "game",
        description:
            "Кампания завершена. Здесь будут итоги приключения, награды и дальнейшие варианты.",
        actions: [
            {
                id: "to_menu",
                label: "Вернуться в меню",
                target: "play_menu"
            }
        ]
    },
    master_hub: {
        id: "master_hub",
        title: "Мастерская",
        kind: "gm",
        description:
            "Управление кампаниями мастера, редактором и быстрыми сессиями. Здесь вы ведёте сессии и готовите контент.",
        actions: [
            {
                id: "gm_campaigns",
                label: "Кампании мастера",
                target: "gm_lobby"
            },
            {
                id: "editor",
                label: "Редактор кампаний",
                target: "editor_library"
            },
            {
                id: "quick_session",
                label: "Быстрая сессия",
                target: "editor_quick_session"
            }
        ]
    },
    gm_lobby: {
        id: "gm_lobby",
        title: "Кампании мастера",
        kind: "gm",
        description:
            "Раздел для живого мастера. Здесь будут ваши кампании, быстрый старт сессии и доступ к панели мастера.",
        actions: [
            {
                id: "open_campaign",
                label: "Открыть кампанию",
                target: "run_scene"
            },
            {
                id: "new_campaign",
                label: "Создать кампанию",
                target: "editor_campaign"
            },
            {
                id: "gm_screen",
                label: "Панель мастера",
                target: "gm_screen"
            },
            {
                id: "back",
                label: "Назад в мастерскую",
                target: "master_hub"
            }
        ]
    },
    gm_screen: {
        id: "gm_screen",
        title: "Панель мастера",
        kind: "gm",
        description:
            "Макет панели мастера. В финальной версии здесь будут быстрый доступ к NPC, локациям, заметкам, таблицам случайных событий и управлению сценами.",
        actions: [
            {
                id: "back_to_gm_lobby",
                label: "Назад к кампаниям мастера",
                target: "gm_lobby"
            }
        ]
    },
    editor_library: {
        id: "editor_library",
        title: "Редактор кампаний",
        kind: "editor",
        description:
            "Библиотека ваших сценариев. В финальной версии здесь появится список кампаний, шаблоны и кнопка создания новой.",
        actions: [
            {
                id: "open_campaign",
                label: "Открыть кампанию",
                target: "editor_campaign"
            },
            {
                id: "new_campaign",
                label: "Новая кампания",
                target: "editor_campaign"
            },
            {
                id: "templates",
                label: "Шаблоны кампаний",
                target: "editor_templates"
            },
            {
                id: "back",
                label: "Назад в мастерскую",
                target: "master_hub"
            }
        ]
    },
    editor_campaign: {
        id: "editor_campaign",
        title: "Редактор кампании",
        kind: "editor",
        description:
            "Макет редактора кампании. Здесь будут сцены, связи, NPC и настройки приключения.",
        actions: [
            {
                id: "back_to_library",
                label: "Назад к библиотеке",
                target: "editor_library"
            },
            {
                id: "to_menu",
                label: "В меню",
                target: "main"
            }
        ]
    },
    editor_templates: {
        id: "editor_templates",
        title: "Шаблоны кампаний",
        kind: "editor",
        description:
            "Макет списка шаблонов кампаний. В финальной версии здесь будут пресеты для коротких, средних и длинных кампаний, а также спец‑форматы вроде ваншотов.",
        actions: [
            {
                id: "back_to_library_from_templates",
                label: "Назад к библиотеке",
                target: "editor_library"
            }
        ]
    },
    editor_quick_session: {
        id: "editor_quick_session",
        title: "Быстрая сессия",
        kind: "editor",
        description:
            "Макет мастера быстрой сессии. В финальной версии здесь можно будет задать параметры (сеттинг, тон, сложность) и сгенерировать пригодную к игре одноразовую сессию.",
        actions: [
            {
                id: "back_to_master_from_quick",
                label: "Назад в мастерскую",
                target: "master_hub"
            }
        ]
    },
    settings: {
        id: "settings",
        title: "Настройки",
        kind: "service",
        description:
            "Здесь будут собраны все настройки: интерфейс, уведомления, контент и приватность.",
        actions: []
    },
};
