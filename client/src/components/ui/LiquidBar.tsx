import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface LiquidBarProps {
    value: number
    max: number
    type?: "health" | "mana" | "xp"
    className?: string
    showValue?: boolean
    label?: string
}

export function LiquidBar({ value, max, type = "health", className, showValue = true, label }: LiquidBarProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    const colors = {
        health: {
            bg: "bg-fantasy-crimson-blood/30",
            fill: "bg-gradient-to-r from-fantasy-crimson-blood via-fantasy-crimson to-fantasy-crimson-bright",
            glow: "shadow-[0_0_10px_rgba(255,77,77,0.5)]",
            border: "border-fantasy-crimson-blood"
        },
        mana: {
            bg: "bg-fantasy-mana-dim/30",
            fill: "bg-gradient-to-r from-fantasy-mana-dim via-fantasy-mana to-fantasy-mana-glow",
            glow: "shadow-[0_0_10px_rgba(0,229,255,0.5)]",
            border: "border-fantasy-mana-dim"
        },
        xp: {
            bg: "bg-fantasy-gold-dim/20",
            fill: "bg-gold-gradient",
            glow: "shadow-[0_0_10px_rgba(255,215,0,0.4)]",
            border: "border-fantasy-gold-dim"
        }
    }

    const style = colors[type]

    return (
        <div className={cn("flex flex-col gap-1", className)}>
            {(label || showValue) && (
                <div className="flex justify-between text-xs uppercase tracking-wider font-bold text-fantasy-200 px-1">
                    <span>{label}</span>
                    {showValue && <span>{value} / {max}</span>}
                </div>
            )}
            <div className={cn("relative h-4 w-full rounded-full border bg-black/50 overflow-hidden shadow-inner", style.border)}>
                {/* Background pattern */}
                <div className={cn("absolute inset-0 opacity-50", style.bg)} />

                {/* Liquid Fill */}
                <motion.div
                    className={cn("absolute top-0 left-0 h-full rounded-l-full", style.fill, style.glow)}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                >
                    {/* Shine effect */}
                    <div className="absolute top-0 left-0 w-full h-[50%] bg-white/20 rounded-tl-full" />
                </motion.div>

                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.3)] pointer-events-none" />
            </div>
        </div>
    )
}
