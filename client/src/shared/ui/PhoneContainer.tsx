interface PhoneContainerProps {
    children: React.ReactNode;
    currentId: string;
    onNavigate: (id: string) => void;
}

export function PhoneContainer({ children, currentId, onNavigate }: PhoneContainerProps) {
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
                                onClick={() => onNavigate("profile")}
                                className="relative flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border border-slate-600 text-[11px] text-slate-200"
                            >
                                <span className="text-[10px]">P</span>
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={() => onNavigate("help")}
                            className="w-6 h-6 rounded-full border border-slate-600 text-[11px] flex items-center justify-center text-slate-300 hover:bg-slate-800"
                        >
                            ?
                        </button>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}
