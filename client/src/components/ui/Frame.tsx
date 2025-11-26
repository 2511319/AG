import * as React from "react"
import { cn } from "../../lib/utils"

interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "stone" | "parchment"
    ornate?: boolean
}

const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
    ({ className, variant = "default", ornate = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative rounded-lg border-2 transition-all",
                    {
                        "bg-fantasy-900/80 border-fantasy-700 shadow-heavy backdrop-blur-sm": variant === "default",
                        "panel-stone border-fantasy-600": variant === "stone",
                        "bg-parchment bg-cover border-fantasy-gold-dim text-fantasy-950 shadow-lg": variant === "parchment",
                        "border-ornate": ornate && variant !== "parchment",
                    },
                    className
                )}
                {...props}
            >
                {/* Corner Flourishes for Ornate variant */}
                {ornate && (
                    <>
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-fantasy-gold rounded-tl-sm" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-fantasy-gold rounded-tr-sm" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-fantasy-gold rounded-bl-sm" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-fantasy-gold rounded-br-sm" />
                    </>
                )}

                {/* Inner content wrapper */}
                <div className={cn("relative z-10", variant === "parchment" ? "p-0" : "p-1")}>
                    {children}
                </div>
            </div>
        )
    }
)
Frame.displayName = "Frame"

export { Frame }
