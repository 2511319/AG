import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./Button"
import { Frame } from "./Frame"
import { cn } from "../../lib/utils"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    className?: string
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
                    </motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
                    >
                        <Frame variant="stone" ornate className={cn("shadow-2xl", className)}>
                            <div className="flex items-center justify-between border-b border-fantasy-700/50 pb-4 mb-4 px-4 pt-4 bg-black/20">
                                <h2 className="text-2xl font-serif font-bold text-gold-gradient tracking-wide">
                                    {title}
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="h-8 w-8 rounded-full hover:bg-fantasy-crimson/20 hover:text-fantasy-crimson-bright transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="px-4 pb-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                {children}
                            </div>
                        </Frame>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
