import { useState } from "react";

const SCREENS = {
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
        label: "Позже, перейти в меню",
        target: "main"
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
  main: {
    id: "main",
    title: "Главное меню",
    kind: "hub",
    description:
      "Выберите раздел: начать или продолжить игру, настроить персонажа, заглянуть в город, управлять кампаниями мастера или открыть настройки.",
    actions: [
      {
        id: "play",
        label: "Играть",
        target: "play_menu"
      },
      {
        id: "character",
        label: "Персонаж",
        target: "character"
      },
      {
        id: "town_main",
        label: "Город",
        target: "town_hub"
      },
      {
        id: "master_hub",
        label: "Мастерская",
        target: "master_hub"
      },
      {
        id: "settings",
        label: "Настройки",
        target: "settings"
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
      },
      {
        id: "back_to_main",
        label: "Назад в меню",
        target: "main"
      }
    ]
  },
  profile: {
    id: "profile",
    title: "Профиль игрока",
    kind: "service",
    description:
      "Макет профиля игрока. Здесь будет общий прогресс аккаунта, статистика кампаний, состояние ежедневных заданий и персональные настройки.",
    actions: [
      {
        id: "open_daily",
        label: "Ежедневные задания и события",
        target: "profile_daily"
      },
      {
        id: "back_to_main_from_profile",
        label: "Назад в меню",
        target: "main"
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
        label: "Назад в профиль",
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
      },
      {
        id: "back",
        label: "Назад в меню",
        target: "main"
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
      },
      {
        id: "back_to_play",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
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
      },
      {
        id: "back_to_play_from_tavern",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
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
      {
        id: "back_to_play_from_market",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_craft",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_guild",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_board",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_arena",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_training",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_temple",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      {
        id: "back_to_play_from_home",
        label: "Назад в раздел “Играть”",
        target: "play_menu"
      }
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
      },
      {
        id: "back_to_main_from_journal",
        label: "Назад в меню",
        target: "main"
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
        id: "open_sheet",
        label: "Лист активного персонажа",
        target: "character_sheet"
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
        id: "open_journal_from_character",
        label: "Журнал",
        target: "journal_hub"
      },
      {
        id: "create_character",
        label: "Создать нового персонажа",
        target: "solo_char"
      },
      {
        id: "back",
        label: "Назад в меню",
        target: "main"
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
  character_sheet: {
    id: "character_sheet",
    title: "Лист персонажа",
    kind: "game",
    description:
      "Макет листа персонажа. В финальной версии здесь будут: базовые характеристики (Сила, Ловкость и т.п.), навыки и таланты, здоровье и ресурсы, инвентарь и экипировка, заметки и краткая история героя.",
    actions: [
      {
        id: "to_stats",
        label: "Характеристики и навыки",
        target: "character_stats"
      },
      {
        id: "to_inventory",
        label: "Инвентарь и экипировка",
        target: "character_inventory"
      },
      {
        id: "to_story",
        label: "История и заметки",
        target: "character_story"
      },
      {
        id: "back_to_character",
        label: "Назад в раздел “Персонаж”",
        target: "character"
      },
      {
        id: "to_menu",
        label: "В меню",
        target: "main"
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
        id: "back_to_sheet_from_stats",
        label: "Назад к листу персонажа",
        target: "character_sheet"
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
        id: "back_to_sheet_from_inventory",
        label: "Назад к листу персонажа",
        target: "character_sheet"
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
        id: "back_to_sheet_from_story",
        label: "Назад к листу персонажа",
        target: "character_sheet"
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
        label: "Назад в меню",
        target: "main"
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
        label: "Назад в меню",
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
        label: "В меню",
        target: "play_menu"
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
      },
      {
        id: "back",
        label: "Назад в меню",
        target: "main"
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
    actions: [
      {
        id: "back",
        label: "Назад в меню",
        target: "main"
      }
    ]
  }
};

function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export default function RpgBotUxClickableProto() {
  const [currentId, setCurrentId] = useState("onboarding");

  const current = SCREENS[currentId];

  const handleActionClick = (targetId) => {
    if (!SCREENS[targetId]) return;
    setCurrentId(targetId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-[390px] h-[780px] bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl overflow-y-auto flex flex-col">
        <header className="h-11 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>RPG‑Bot</span>
          </div>
          <div className="flex items-center gap-2">
            {currentId === "main" && (
              <button
                type="button"
                onClick={() => handleActionClick("profile")}
                className="relative flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border border-slate-600 text-[11px] text-slate-200"
              >
                <span className="text-[10px]">P</span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
              </button>
            )}
            <button
              type="button"
              onClick={() => handleActionClick("help")}
              className="w-6 h-6 rounded-full border border-slate-600 text-[11px] flex items-center justify-center text-slate-300 hover:bg-slate-800"
            >
              ?
            </button>
          </div>
        </header>
        <main className="flex-1 flex flex-col px-4 py-3 gap-3">
          <div className="mt-1">
            <h2 className="text-lg font-semibold text-slate-50 leading-tight">
              {current?.title ?? "Экран"}
            </h2>
          </div>
          <div className="flex-1 rounded-2xl bg-slate-900/80 border border-slate-800 px-3 py-3 overflow-hidden">
            {currentId === "run_combat" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 rounded-md border border-red-500/60 bg-red-500/10 flex items-center justify-between px-2">
                  <span className="truncate">
                    Локация боя: краткое описание окружения, времени суток и особенностей, влияющих на параметры и эффекты в бою.
                  </span>
                  <button
                    type="button"
                    onClick={() => handleActionClick("run_combat_field")}
                    className="ml-2 px-2 py-0.5 rounded-md border border-red-400/70 text-[9px] text-red-100 bg-red-500/20"
                  >
                    Схема поля
                  </button>
                </div>
                <div className="h-7 rounded-md border border-emerald-500/60 bg-emerald-500/10 flex items-center px-2">
                  <span className="truncate">
                    Шкала инициативы: порядок ходов героев и противников в этом раунде.
                  </span>
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-950/60 p-2 text-[11px] overflow-hidden">
                    <div className="font-medium mb-1">Лог боя</div>
                    <p className="opacity-80">
                      Здесь будут последние события: кто ходил, какие броски были сделаны, нанесённый урон и наложенные эффекты.
                    </p>
                  </div>
                  <div className="w-20 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-indigo-500/60 bg-indigo-500/10 p-1">
                      <div className="text-[10px] font-medium mb-1">Союзники</div>
                      <p className="text-[9px] opacity-80">
                        Компактные иконки сопартийцев с полосками HP. Один тап — выбор цели для действия, второй — расширенное окно статусов.
                      </p>
                    </div>
                    <div className="flex-1 rounded-md border border-orange-500/60 bg-orange-500/10 p-1">
                      <div className="text-[10px] font-medium mb-1">Противники</div>
                      <p className="text-[9px] opacity-80">
                        Иконки врагов с полосками HP. Один тап — выбор цели, второй — детали: эффекты, состояние, приоритет угрозы.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-10 rounded-md border border-pink-500/60 bg-pink-500/10 flex items-center justify-between px-2 gap-2">
                  <div className="flex-1 text-[10px] truncate">
                    Ваш персонаж: портрет, HP, ресурсы (мана/стойкость и т.п.), активные состояния и краткий статус.
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="px-2 py-0.5 rounded-md border border-slate-500/70 text-[9px]">
                      Инвентарь
                    </div>
                    <div className="px-2 py-0.5 rounded-md border border-slate-500/70 text-[9px]">
                      Стойка
                    </div>
                    <div className="px-2 py-0.5 rounded-md border border-slate-500/70 text-[9px]">
                      Особые
                    </div>
                  </div>
                </div>
                <div className="h-10 rounded-md border border-sky-500/60 bg-sky-500/10 flex flex-col justify-center px-2 gap-1">
                  <div className="text-[10px]">
                    Панель быстрых действий: Атака, Способность, Предмет, Защита.
                  </div>
                  <div className="text-[9px] opacity-80">
                    Ниже — поле ввода «Свой ход», куда игрок может вручную описать нестандартное действие.
                  </div>
                </div>
              </div>
            ) : currentId === "run_scene" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 rounded-md border border-amber-500/60 bg-amber-500/10 flex items-center justify-between px-2">
                  <span className="truncate">
                    Контекст сцены: глава и сцена кампании, краткое описание обстановки и текущий уровень угрозы (оценка для игроков может быть неточной).
                  </span>
                  <button
                    type="button"
                    onClick={() => handleActionClick("run_scene_plan")}
                    className="ml-2 px-2 py-0.5 rounded-md border border-amber-400/70 text-[9px] text-amber-50 bg-amber-500/20"
                  >
                    План сцены
                  </button>
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-950/60 p-2 text-[11px] overflow-hidden">
                    <div className="font-medium mb-1">Текущий фрагмент</div>
                    <p className="opacity-80 mb-1">
                      Здесь будет основной текст повествования: описание обстановки, действий персонажей и реакции мира.
                    </p>
                    <div className="mt-1 border-t border-slate-800 pt-1 text-[10px] opacity-75">
                      Мини‑лог сцены: последние 2–3 хода и ответы ведущего, чтобы не прокручивать всю историю целиком.
                    </div>
                  </div>
                  <div className="w-24 flex flex-col gap-2">
                    <div className="rounded-md border border-emerald-500/60 bg-emerald-500/10 p-1">
                      <div className="text-[10px] font-medium mb-1">Цели сцены</div>
                      <p className="text-[9px] opacity-80">
                        Краткий список текущих целей: чего пытается добиться партия, что нужно сделать для продвижения сюжета или завершения сцены.
                      </p>
                    </div>
                    <div className="rounded-md border border-purple-500/60 bg-purple-500/10 p-1">
                      <div className="text-[10px] font-medium mb-1">Факторы и таймеры</div>
                      <p className="text-[9px] opacity-80">
                        Особенности окружения, скрытые угрозы, таймеры, риски промедления и последствия неудачных решений.
                      </p>
                    </div>
                    <div className="rounded-md border border-rose-500/60 bg-rose-500/10 p-1">
                      <div className="text-[10px] font-medium mb-1">NPC и объекты</div>
                      <p className="text-[9px] opacity-80">
                        Ключевые персонажи и важные объекты сцены, с которыми можно взаимодействовать. Часть из них может быть скрыта до успешных проверок внимательности или поиска.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-9 rounded-md border border-blue-500/60 bg-blue-500/10 flex items-center px-2">
                  <span className="text-[10px] truncate">
                    Состояние группы: краткое саммари по здоровью, ресурсам и вниманию важных NPC к партии.
                  </span>
                </div>
                <div className="h-10 rounded-md border border-sky-500/60 bg-sky-500/10 flex flex-col justify-center px-2 gap-1">
                  <div className="text-[10px]">
                    Панель действий сцены: предложенные варианты (исследовать, разговаривать, использовать навык или предмет) и контекстные кнопки.
                  </div>
                  <div className="text-[9px] opacity-80">
                    Ниже в интерфейсе — поле «Свой ход», куда игрок вводит произвольное действие, если стандартных вариантов не хватает.
                  </div>
                </div>
              </div>
            ) : currentId === "town_tavern" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-24 rounded-md border border-amber-700/50 bg-amber-900/20 p-2 flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/400x100/5d4037/a1887f?text=Tavern+Interior')] opacity-10 bg-cover bg-center" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="font-medium text-amber-200">Таверна «Пьяный Гоблин»</span>
                    <span className="text-[9px] text-amber-400/80">Шумно и людно</span>
                  </div>
                  <p className="relative z-10 text-[10px] opacity-80 mt-1">
                    Запах жареного мяса и дешевого эля. В углу бард настраивает лютню, а у стойки спорят наемники.
                  </p>
                </div>

                <div className="flex-1 flex gap-2">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                      <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase tracking-wider">Посетители</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 p-1.5 rounded bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors">
                          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">🍺</div>
                          <div className="flex-1">
                            <div className="font-medium text-amber-100">Трактирщик Боб</div>
                            <div className="text-[9px] opacity-60">Слухи и выпивка</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 rounded bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors">
                          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">🧙‍♂️</div>
                          <div className="flex-1">
                            <div className="font-medium text-indigo-200">Странник в плаще</div>
                            <div className="text-[9px] opacity-60">Ищет наемников</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-amber-800/40 bg-amber-950/30 p-2">
                      <div className="text-[10px] font-medium text-amber-500 mb-2 uppercase tracking-wider">Доска заказов</div>
                      <div className="space-y-1.5">
                        <div className="p-1.5 rounded border border-amber-700/30 bg-amber-900/10 text-[10px]">
                          <div className="font-medium text-amber-100">Крысы в подвале</div>
                          <div className="flex justify-between mt-1 opacity-70">
                            <span>Сложность: 1</span>
                            <span className="text-amber-300">50 зм</span>
                          </div>
                        </div>
                        <div className="p-1.5 rounded border border-amber-700/30 bg-amber-900/10 text-[10px]">
                          <div className="font-medium text-amber-100">Пропавшая коза</div>
                          <div className="flex justify-between mt-1 opacity-70">
                            <span>Сложность: 1</span>
                            <span className="text-amber-300">30 зм</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_market" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-10 flex items-center justify-between px-2 rounded-md border border-yellow-600/40 bg-yellow-900/10">
                  <span className="font-medium text-yellow-100">Рыночная площадь</span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-yellow-950/50 border border-yellow-700/50">
                    <span className="text-yellow-400">💰</span>
                    <span className="font-mono text-yellow-100">1,250 зм</span>
                  </div>
                </div>

                <div className="flex gap-2 h-8">
                  {['Оружие', 'Броня', 'Зелья', 'Разное'].map((tab, i) => (
                    <button key={tab} className={`flex-1 rounded border ${i === 0 ? 'border-yellow-500/50 bg-yellow-500/10 text-yellow-100' : 'border-slate-700 bg-slate-800/50 text-slate-400'} text-[10px] font-medium hover:bg-slate-700 transition-colors`}>
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Железный меч", type: "Оружие", price: 150, icon: "⚔️" },
                      { name: "Кожаная броня", type: "Броня", price: 200, icon: "🛡️" },
                      { name: "Зелье лечения", type: "Расходник", price: 50, icon: "🧪" },
                      { name: "Факел", type: "Предмет", price: 5, icon: "🔥" },
                      { name: "Веревка (10м)", type: "Предмет", price: 10, icon: "➰" },
                      { name: "Рюкзак", type: "Снаряжение", price: 25, icon: "🎒" },
                    ].map((item, i) => (
                      <div key={i} className="p-2 rounded border border-slate-700 bg-slate-800/30 flex flex-col gap-1 hover:border-yellow-500/30 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-[9px] text-yellow-400 font-mono">{item.price} зм</span>
                        </div>
                        <div className="font-medium text-slate-200 group-hover:text-yellow-100">{item.name}</div>
                        <div className="text-[9px] opacity-50">{item.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : currentId === "town_craft" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-16 rounded-md border border-slate-600 bg-slate-800/50 p-2 flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-slate-700 flex items-center justify-center text-2xl border border-slate-500">🔨</div>
                  <div>
                    <div className="font-medium text-slate-100">Мастерская</div>
                    <div className="text-[10px] opacity-60">Уровень ремесла: Ученик (12/100)</div>
                    <div className="w-32 h-1.5 bg-slate-900 rounded-full mt-1 overflow-hidden">
                      <div className="w-[12%] h-full bg-blue-500" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex gap-2">
                  <div className="w-1/3 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                      <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Рецепты</div>
                      <div className="space-y-1">
                        {['Слиток железа', 'Гвозди', 'Простой кинжал', 'Отмычка'].map((recipe, i) => (
                          <div key={i} className={`p-1.5 rounded text-[10px] cursor-pointer ${i === 0 ? 'bg-blue-900/30 border border-blue-500/30 text-blue-100' : 'hover:bg-slate-800 text-slate-400'}`}>
                            {recipe}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/30 p-2 flex flex-col items-center justify-center text-center border-dashed">
                      <div className="w-16 h-16 rounded-full bg-slate-800/50 border-2 border-slate-600 flex items-center justify-center mb-2">
                        <span className="text-2xl opacity-50">⚙️</span>
                      </div>
                      <div className="text-slate-400">Выберите рецепт</div>
                      <div className="text-[9px] opacity-50 mt-1">Необходимые ресурсы отобразятся здесь</div>
                    </div>
                    <div className="h-20 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                      <div className="text-[10px] font-medium text-slate-400 mb-1">Ресурсы в инвентаре</div>
                      <div className="flex gap-1 overflow-x-auto pb-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="w-8 h-8 shrink-0 rounded bg-slate-800 border border-slate-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_guild" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-20 rounded-md border border-purple-500/50 bg-purple-900/20 p-3 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent" />
                  <div className="w-14 h-14 rounded-full border-2 border-purple-400 bg-purple-800 flex items-center justify-center text-2xl relative z-10 shadow-lg shadow-purple-900/50">
                    ⚜️
                  </div>
                  <div className="relative z-10">
                    <div className="font-medium text-purple-100 text-sm">Гильдия Искателей</div>
                    <div className="text-[10px] text-purple-300">Ранг: Бронзовый (340/1000)</div>
                  </div>
                </div>

                <div className="flex-1 flex gap-2">
                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                    <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Новости гильдии</div>
                    <div className="space-y-2">
                      <div className="p-2 rounded bg-slate-800/50 border border-slate-700">
                        <div className="font-medium text-purple-200">Сбор на рейд!</div>
                        <div className="text-[10px] opacity-70 mt-1">В пятницу идем на дракона. Нужен хил.</div>
                      </div>
                      <div className="p-2 rounded bg-slate-800/50 border border-slate-700">
                        <div className="font-medium text-purple-200">Новые контракты</div>
                        <div className="text-[10px] opacity-70 mt-1">Поступили заказы из столицы.</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 flex flex-col gap-2">
                    <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                      <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Бонусы</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] opacity-80">
                          <span className="text-emerald-400">✓</span>
                          <span>Скидка 5%</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] opacity-80">
                          <span className="text-emerald-400">✓</span>
                          <span>Доступ к банку</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] opacity-40">
                          <span>🔒</span>
                          <span>Телепорт</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_board" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 flex items-center justify-between px-2 rounded-md border border-amber-700/40 bg-amber-900/20">
                  <span className="font-medium text-amber-100">Доска объявлений</span>
                  <span className="text-[9px] text-amber-400/70">Обновлено: 2ч назад</span>
                </div>

                <div className="flex-1 rounded-md border border-amber-900/30 bg-[#2a2420] p-3 overflow-y-auto relative">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {[
                      { title: "Требуется алхимик", reward: "100 зм", desc: "Нужно сварить 10 зелий силы.", difficulty: "Easy" },
                      { title: "Охота на волков", reward: "15 зм / шкура", desc: "Волки нападают на скот.", difficulty: "Medium" },
                      { title: "Потерянный амулет", reward: "500 зм", desc: "Семейная реликвия, потеряна в лесу.", difficulty: "Hard" },
                      { title: "Сбор трав", reward: "20 зм", desc: "Нужен луноцвет для лекаря.", difficulty: "Easy" },
                    ].map((quest, i) => (
                      <div key={i} className="aspect-[4/3] bg-[#eaddcf] text-slate-900 p-2 shadow-md rotate-1 hover:rotate-0 transition-transform duration-200 flex flex-col">
                        <div className="w-2 h-2 rounded-full bg-red-800 mx-auto -mt-3 mb-1 shadow-sm" />
                        <div className="font-bold text-[10px] leading-tight mb-1">{quest.title}</div>
                        <div className="flex-1 text-[9px] leading-snug opacity-80 font-serif">{quest.desc}</div>
                        <div className="mt-auto pt-1 border-t border-slate-400/30 flex justify-between items-end">
                          <span className="font-bold text-red-700">{quest.reward}</span>
                          <span className="text-[8px] uppercase tracking-wider opacity-60">{quest.difficulty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : currentId === "town_arena" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-32 rounded-md border border-red-900/50 bg-red-950/30 p-0 relative overflow-hidden flex flex-col justify-end group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950/60 to-slate-950" />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest animate-pulse">Live</div>
                  <div className="relative z-10 p-3 bg-gradient-to-t from-slate-950 to-transparent">
                    <div className="text-red-500 font-bold tracking-widest uppercase text-xs mb-0.5">Арена Смерти</div>
                    <div className="text-xl font-black text-slate-100">Горлок Разрушитель vs. Тень</div>
                    <div className="flex gap-4 mt-2 text-[9px] text-slate-400">
                      <span>Ставки: <span className="text-amber-400">1:5</span></span>
                      <span>Зрителей: <span className="text-slate-200">452</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col gap-2 hover:border-red-500/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-red-900/20 border border-red-500/30 flex items-center justify-center text-lg">⚔️</div>
                      <div className="font-medium text-slate-200">Дуэль</div>
                    </div>
                    <p className="text-[9px] opacity-60">Быстрый бой 1 на 1. Награда за победу и рейтинг.</p>
                    <div className="mt-auto text-[9px] text-red-400">Вход: 10 зм</div>
                  </div>
                  <div className="rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col gap-2 hover:border-red-500/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-red-900/20 border border-red-500/30 flex items-center justify-center text-lg">🛡️</div>
                      <div className="font-medium text-slate-200">Выживание</div>
                    </div>
                    <p className="text-[9px] opacity-60">Волны врагов. Чем дольше держишься, тем лучше награда.</p>
                    <div className="mt-auto text-[9px] text-red-400">Вход: 50 зм</div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_training" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-16 rounded-md border border-slate-600 bg-slate-800/50 p-2 flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-slate-700 flex items-center justify-center text-2xl border border-slate-500">🎯</div>
                  <div>
                    <div className="font-medium text-slate-100">Тренировочный лагерь</div>
                    <div className="text-[10px] opacity-60">Инструктор: Сержант Брут</div>
                  </div>
                </div>

                <div className="flex-1 flex gap-2">
                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                    <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Манекены (DPS тест)</div>
                    <div className="flex gap-2">
                      <div className="flex-1 aspect-square rounded bg-slate-800 border border-slate-600 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-700 transition-colors">
                        <span className="text-2xl">🪵</span>
                        <span className="text-[9px]">Обычный</span>
                      </div>
                      <div className="flex-1 aspect-square rounded bg-slate-800 border border-slate-600 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-700 transition-colors">
                        <span className="text-2xl">🛡️</span>
                        <span className="text-[9px]">Бронир.</span>
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] opacity-50 text-center">Нажмите, чтобы проверить урон</div>
                  </div>

                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                    <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Обучение</div>
                    <div className="space-y-1">
                      <div className="p-1.5 rounded border border-slate-600 bg-slate-800/50 text-[10px] flex justify-between items-center">
                        <span>Основы боя</span>
                        <span className="text-emerald-400">✓</span>
                      </div>
                      <div className="p-1.5 rounded border border-slate-600 bg-slate-800/50 text-[10px] flex justify-between items-center">
                        <span>Магия для чайников</span>
                        <span className="opacity-50">100 зм</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_temple" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-24 rounded-md border border-yellow-200/20 bg-yellow-50/5 p-3 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-100/10 via-transparent to-transparent" />
                  <div className="text-3xl mb-1">✨</div>
                  <div className="font-serif text-yellow-100 text-lg">Храм Света</div>
                  <div className="text-[10px] text-yellow-200/60 italic">"И свет укажет путь..."</div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col gap-2 hover:border-yellow-200/30 transition-colors cursor-pointer">
                    <div className="font-medium text-yellow-100">Благословение</div>
                    <p className="text-[9px] opacity-60">Получить бафф на следующую миссию (+10% к урону по нежити).</p>
                    <div className="mt-auto text-[9px] text-yellow-400">Пожертвование: 25 зм</div>
                  </div>
                  <div className="rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col gap-2 hover:border-yellow-200/30 transition-colors cursor-pointer">
                    <div className="font-medium text-yellow-100">Исцеление</div>
                    <p className="text-[9px] opacity-60">Снять все проклятия и восстановить здоровье.</p>
                    <div className="mt-auto text-[9px] text-yellow-400">Пожертвование: 50 зм</div>
                  </div>
                </div>
              </div>
            ) : currentId === "town_home" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-20 rounded-md border border-orange-900/40 bg-[#3c2f2f] p-3 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://placehold.co/400x100/3c2f2f/5d4037?text=Cozy+Room')] opacity-20 bg-cover bg-center" />
                  <div className="relative z-10">
                    <div className="font-medium text-orange-100 text-sm">Уютный дом</div>
                    <div className="text-[10px] text-orange-200/60">Отдых восстанавливает бодрость</div>
                  </div>
                </div>

                <div className="flex-1 flex gap-2">
                  <div className="w-1/3 flex flex-col gap-2">
                    <button className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col items-center justify-center gap-1 hover:bg-slate-800 transition-colors">
                      <span className="text-2xl">🛏️</span>
                      <span className="text-[10px]">Отдых</span>
                    </button>
                    <button className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2 flex flex-col items-center justify-center gap-1 hover:bg-slate-800 transition-colors">
                      <span className="text-2xl">📦</span>
                      <span className="text-[10px]">Сундук</span>
                    </button>
                  </div>

                  <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/50 p-2">
                    <div className="text-[10px] font-medium text-slate-400 mb-2 uppercase">Трофеи</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded bg-slate-800/50 border border-slate-700 flex items-center justify-center text-lg opacity-50" title="Пустой слот"></div>
                      <div className="aspect-square rounded bg-slate-800/50 border border-slate-700 flex items-center justify-center text-lg" title="Голова Гоблина">👺</div>
                      <div className="aspect-square rounded bg-slate-800/50 border border-slate-700 flex items-center justify-center text-lg opacity-50" title="Пустой слот"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentId === "character_sheet" ? (
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
            ) : currentId === "character_stats" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                  <section>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-slate-700 pb-1">Основные</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {['Сила', 'Ловкость', 'Телосложение', 'Интеллект', 'Мудрость', 'Харизма'].map((stat, i) => (
                        <div key={stat} className="p-2 rounded bg-slate-800/50 border border-slate-700 flex justify-between items-center">
                          <span>{stat}</span>
                          <span className="font-mono text-amber-400">{10 + i}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-slate-700 pb-1">Навыки</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between p-1.5 rounded hover:bg-slate-800 transition-colors">
                        <span>Скрытность</span>
                        <span className="text-emerald-400">+5</span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded hover:bg-slate-800 transition-colors">
                        <span>Акробатика</span>
                        <span className="text-emerald-400">+5</span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded hover:bg-slate-800 transition-colors">
                        <span>Восприятие</span>
                        <span className="text-emerald-400">+4</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            ) : currentId === "character_inventory" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 flex items-center justify-between px-2 rounded bg-slate-800 border border-slate-700">
                  <span className="text-amber-400 font-mono">1,250 зм</span>
                  <span className="text-[9px] opacity-60">Вес: 12/50 кг</span>
                </div>

                <div className="flex-1 rounded-md border border-slate-700 bg-slate-900/30 p-2">
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`aspect-square rounded border ${i < 5 ? 'border-slate-600 bg-slate-800' : 'border-slate-800 bg-slate-900/50'} flex items-center justify-center relative cursor-pointer hover:border-slate-500 transition-colors`}>
                        {i === 0 && <span className="text-xl">🗡️</span>}
                        {i === 1 && <span className="text-xl">🧪</span>}
                        {i === 1 && <span className="absolute bottom-0.5 right-0.5 text-[8px] bg-slate-950 px-1 rounded-full border border-slate-700">3</span>}
                        {i === 2 && <span className="text-xl">📜</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-20 rounded border border-slate-700 bg-slate-900/50 p-2">
                  <div className="text-[10px] font-medium text-slate-300 mb-1">Короткий меч</div>
                  <p className="text-[9px] opacity-60 leading-snug">
                    Обычный стальной меч. Надежный и острый.
                    <br />
                    <span className="text-amber-500">Урон: 1d6 + 3 (Колющий)</span>
                  </p>
                </div>
              </div>
            ) : currentId === "character_story" ? (
              <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 rounded-md border border-slate-700 bg-[#2a2420] p-3 overflow-y-auto font-serif text-amber-100/80 leading-relaxed">
                  <h3 className="font-bold text-amber-100 mb-2 border-b border-amber-900/30 pb-1">Биография</h3>
                  <p className="mb-4 text-[10px]">
                    Родился в тенистых лесах Элвенгарда. С детства проявлял склонность к скрытности и мелкому воровству, что привело к изгнанию из клана. С тех пор скитается по миру в поисках наживы и искупления.
                  </p>

                  <h3 className="font-bold text-amber-100 mb-2 border-b border-amber-900/30 pb-1">Заметки</h3>
                  <ul className="list-disc pl-4 space-y-1 text-[10px]">
                    <li>Трактирщик в "Пьяном Гоблине" что-то скрывает.</li>
                    <li>Нужно найти кузнеца, который умеет работать с мифрилом.</li>
                    <li>Долг Гильдии Воров: 500 зм.</li>
                  </ul>
                </div>
              </div>
            ) : currentId === "character_relations" ? (
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
            ) : (
              <p className="text-sm text-slate-200 whitespace-pre-wrap">
                {current?.description ?? "Здесь будет содержимое экрана."}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-auto pb-2">
            {current?.actions?.map((action, index) => {
              const isPrimary = index === 0;
              return (
                <button
                  key={action.id}
                  onClick={() => handleActionClick(action.target)}
                  className={classNames(
                    "w-full py-2.5 rounded-xl text-sm font-medium",
                    isPrimary
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-100"
                  )}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
