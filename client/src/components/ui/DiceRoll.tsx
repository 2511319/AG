import { cn } from "../../lib/utils"
import { motion } from "framer-motion"
import { Dices } from "lucide-react"

interface DiceRollProps {
    skill: string
    roll: number
    modifier: number
    dc: number
    result: 'success' | 'failure' | 'critical'
}

export function DiceRoll({ skill, roll, modifier, dc }: DiceRollProps) {
    const total = roll + modifier
    const isSuccess = total >= dc

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "flex items-center space-x-3 p-2 rounded-md border text-sm font-medium",
                isSuccess
                    ? "bg-green-900/20 border-green-700/50 text-green-200"
                    : "bg-red-900/20 border-red-700/50 text-red-200"
            )}
        >
            <Dices className="h-4 w-4 opacity-70" />
            <span className="uppercase tracking-wide text-xs opacity-70">{skill}</span>
            <div className="flex-1" />
            <div className="flex items-center space-x-1">
                <span className="text-xs opacity-50">d20({roll}) + {modifier} =</span>
                <span className="text-lg font-bold">{total}</span>
                <span className="text-xs opacity-50">vs DC {dc}</span>
            </div>
        </motion.div>
    )
}
