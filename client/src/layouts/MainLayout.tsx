import * as React from "react"
import { BottomNav } from "../components/ui/BottomNav"
import { cn } from "../lib/utils"

interface MainLayoutProps {
    children: React.ReactNode
    activeTab?: string
    onTabChange?: (id: string) => void
    showNav?: boolean
    className?: string
}

export function MainLayout({
    children,
    activeTab = "solo",
    onTabChange = () => { },
    showNav = true,
    className
}: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-fantasy-950 bg-[url('/assets/bg-texture.png')] bg-cover bg-fixed text-fantasy-100 font-sans selection:bg-fantasy-600 selection:text-white">
            {/* Overlay for better text readability over background */}
            <div className="fixed inset-0 bg-fantasy-950/90 pointer-events-none z-0" />

            <main className={cn("relative z-10 pb-24 min-h-screen flex flex-col", className)}>
                {children}
            </main>

            {showNav && (
                <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
            )}
        </div>
    )
}
