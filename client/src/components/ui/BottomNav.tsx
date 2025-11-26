import { Home, Users, Crown, User, Settings } from "lucide-react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface NavItem {
    icon: React.ElementType
    label: string
    id: string
}

const navItems: NavItem[] = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Users, label: "Party", id: "party" },
    { icon: Crown, label: "Master", id: "master" },
    { icon: User, label: "Character", id: "character" },
    { icon: Settings, label: "Settings", id: "settings" },
]

interface BottomNavProps {
    activeTab: string
    onTabChange: (id: string) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-fantasy-800 bg-fantasy-900/95 backdrop-blur-md pb-safe">
            <div className="flex items-center justify-around p-2">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id
                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={cn(
                                "relative flex flex-col items-center justify-center p-2 transition-colors",
                                isActive ? "text-fantasy-gold" : "text-fantasy-400 hover:text-fantasy-200"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -top-2 h-1 w-8 rounded-full bg-fantasy-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                                />
                            )}
                            <item.icon className={cn("h-6 w-6", isActive && "drop-shadow-[0_0_5px_rgba(255,215,0,0.3)]")} />
                            <span className="mt-1 text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
