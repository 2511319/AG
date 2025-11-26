import type { Screen } from '../../shared/types';
import { ScreenLayout } from '../../shared/ui/ScreenLayout';

interface ScreenProps {
    screen: Screen;
    onAction: (target: string) => void;
}

export function PlayMenuScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={[]} onAction={onAction}>
            <div className="flex flex-col h-full gap-4 justify-center max-w-md mx-auto w-full">
                {/* Main Actions */}
                <div className="space-y-3">
                    <button
                        disabled
                        className="w-full py-4 rounded-lg border border-stone-700 bg-stone-800/50 text-stone-500 font-bold uppercase tracking-widest cursor-not-allowed flex flex-col items-center gap-1"
                    >
                        <span className="text-lg">Продолжить</span>
                        <span className="text-[9px] font-normal opacity-60">Нет активных сохранений</span>
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => onAction('solo_char')}
                            className="p-4 rounded-lg border border-gold-dim/50 bg-stone-800 hover:bg-stone-700 hover:border-gold-bright active:scale-95 transition-all flex flex-col items-center gap-2 group"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform">⚔️</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-gold-bright">Новая Игра</div>
                                <div className="text-[10px] text-stone-500">Соло приключение</div>
                            </div>
                        </button>

                        <button
                            onClick={() => onAction('party_menu')}
                            className="p-4 rounded-lg border border-stone-600 bg-stone-800 hover:bg-stone-700 hover:border-stone-400 active:scale-95 transition-all flex flex-col items-center gap-2 group"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform">👥</span>
                            <div className="text-center">
                                <div className="font-bold text-stone-200 text-sm group-hover:text-stone-100">Пати</div>
                                <div className="text-[10px] text-stone-500">С друзьями</div>
                            </div>
                        </button>
                    </div>

                    <button
                        onClick={() => onAction('party_code')}
                        className="w-full py-3 rounded-lg border border-stone-700 bg-stone-900/50 hover:bg-stone-800 active:scale-95 transition-all flex items-center justify-center gap-2 text-stone-400 hover:text-stone-300"
                    >
                        <span className="text-lg">🔑</span>
                        <span className="font-bold text-xs uppercase tracking-wider">Ввести код приглашения</span>
                    </button>
                </div>

                {/* Recent/Info */}
                <div className="mt-4 p-3 rounded border border-stone-800 bg-stone-900/30 text-center">
                    <div className="text-[10px] text-stone-600 uppercase tracking-widest mb-1">Статус Сервера</div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                        <span className="text-xs text-stone-400 font-mono">Online • 124 Игрока</span>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunSceneScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 rounded-md border border-amber-500/60 bg-amber-500/10 flex items-center justify-between px-2">
                    <span className="truncate">
                        Контекст сцены: глава и сцена кампании, краткое описание обстановки и текущий уровень угрозы (оценка для игроков может быть неточной).
                    </span>
                    <button
                        type="button"
                        onClick={() => onAction("run_scene_plan")}
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
        </ScreenLayout>
    );
}

export function RunScenePlanScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 rounded border border-slate-700 bg-slate-900/50 p-2 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-950" />
                    <div className="relative z-10 grid grid-cols-4 gap-4 p-4">
                        <div className="aspect-square rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-900/50 text-emerald-200 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                            Старт
                        </div>
                        <div className="col-start-2 row-start-2 aspect-square rounded-full border border-slate-600 flex items-center justify-center bg-slate-800 text-slate-400">
                            ?
                        </div>
                        <div className="col-start-3 row-start-1 aspect-square rounded-full border border-slate-600 flex items-center justify-center bg-slate-800 text-slate-400">
                            ⚔️
                        </div>
                        <div className="col-start-4 row-start-2 aspect-square rounded-full border-2 border-red-500 flex items-center justify-center bg-red-900/50 text-red-200 font-bold shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                            Босс
                        </div>

                        {/* Connections */}
                        <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-slate-700 -rotate-45 transform origin-left" />
                        <div className="absolute top-1/4 left-1/2 w-16 h-0.5 bg-slate-700 rotate-45 transform origin-left" />
                    </div>
                    <div className="absolute bottom-2 left-2 text-[9px] opacity-50">
                        Карта подземелья "Забытый склеп"
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunCombatScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="h-8 rounded-md border border-red-500/60 bg-red-500/10 flex items-center justify-between px-2">
                    <span className="truncate">
                        Локация боя: краткое описание окружения, времени суток и особенностей, влияющих на параметры и эффекты в бою.
                    </span>
                    <button
                        type="button"
                        onClick={() => onAction("run_combat_field")}
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
        </ScreenLayout>
    );
}

export function RunCombatFieldScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 rounded border border-slate-700 bg-slate-900/50 p-1 relative">
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-px bg-slate-800/30">
                        {Array.from({ length: 96 }).map((_, i) => (
                            <div key={i} className="bg-slate-900/80" />
                        ))}
                    </div>

                    {/* Tokens */}
                    <div className="absolute top-[40%] left-[40%] w-[10%] h-[7%] rounded-full bg-emerald-600 border-2 border-emerald-400 flex items-center justify-center text-[8px] font-bold shadow-lg z-10">
                        Вы
                    </div>
                    <div className="absolute top-[30%] left-[60%] w-[10%] h-[7%] rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center text-[8px] font-bold shadow-lg z-10">
                        Враг
                    </div>
                    <div className="absolute top-[50%] left-[20%] w-[10%] h-[7%] rounded-full bg-slate-600 border border-slate-400 flex items-center justify-center text-[8px] opacity-80 z-10">
                        Союз
                    </div>

                    {/* Obstacles */}
                    <div className="absolute top-[20%] left-[30%] w-[20%] h-[15%] bg-slate-700/80 border border-slate-600 rounded" />
                </div>
                <div className="h-8 flex items-center justify-between px-2 rounded bg-slate-800 border border-slate-700 text-[9px]">
                    <span>Ваш ход: Перемещение (30 футов)</span>
                    <span className="text-emerald-400">Осталось: 15 ф.</span>
                </div>
            </div>
        </ScreenLayout>
    );
}

export function RunEpilogueScreen({ screen, onAction }: ScreenProps) {
    return (
        <ScreenLayout title={screen.title} actions={screen.actions} onAction={onAction}>
            <div className="flex flex-col h-full gap-2 text-[11px] text-slate-200">
                <div className="flex-1 rounded border border-slate-700 bg-[#1a1614] p-4 flex flex-col items-center text-center overflow-y-auto">
                    <div className="text-4xl mb-4">🏆</div>
                    <h2 className="text-xl font-bold text-amber-100 mb-2">Победа!</h2>
                    <p className="text-amber-100/80 mb-6 leading-relaxed">
                        Древнее зло повержено, и в землях Элвенгарда вновь воцарился мир. Барды сложат песни о вашем подвиге, а король щедро наградит героев.
                    </p>

                    <div className="w-full space-y-2 mb-6">
                        <div className="text-[9px] uppercase tracking-wider opacity-50">Награды</div>
                        <div className="flex justify-between p-2 rounded bg-slate-800/50 border border-slate-700">
                            <span>Опыт</span>
                            <span className="text-emerald-400">+1500 XP</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-slate-800/50 border border-slate-700">
                            <span>Золото</span>
                            <span className="text-amber-400">+500 зм</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-slate-800/50 border border-slate-700">
                            <span>Предмет</span>
                            <span className="text-purple-400">Меч Героя</span>
                        </div>
                    </div>

                    <div className="text-[9px] opacity-40 italic">
                        "Это был славный бой..."
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}
