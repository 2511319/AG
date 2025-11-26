import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-fantasy-600 text-white hover:bg-fantasy-500 shadow-lg border border-fantasy-400/20",
                destructive: "bg-fantasy-crimson text-white hover:bg-fantasy-crimson-bright border border-fantasy-crimson-blood",
                outline: "border-2 border-fantasy-600 bg-transparent hover:bg-fantasy-600/10 text-fantasy-200",
                secondary: "bg-fantasy-800 text-fantasy-100 hover:bg-fantasy-700 border border-fantasy-600/30",
                ghost: "hover:bg-fantasy-800 hover:text-fantasy-100",
                link: "text-fantasy-400 underline-offset-4 hover:underline",
                gold: "bg-gradient-to-b from-fantasy-gold to-fantasy-gold-dim text-fantasy-950 font-bold border-2 border-fantasy-gold-glow shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:scale-105",
                stone: "bg-fantasy-stone-light text-fantasy-100 border-b-4 border-fantasy-stone-dark active:border-b-0 active:translate-y-1 font-serif tracking-wider shadow-heavy",
                gem: "rounded-full p-0 aspect-square bg-gradient-to-br from-fantasy-mana-glow to-fantasy-mana-dim border-2 border-white/50 shadow-[0_0_15px_rgba(0,229,255,0.6)] hover:shadow-[0_0_25px_rgba(0,229,255,0.8)] hover:scale-110 active:scale-95",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
                gem: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
