"use client"

import { Bot } from "lucide-react"

export function ChatbotButton() {
  return (
    <button
      className="fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-90"
      style={{
        background: "linear-gradient(135deg, #4361ee, #6b8aff)",
      }}
      aria-label="AI助手"
    >
      <div className="relative">
        <Bot className="w-7 h-7 text-card" />
        {/* Animated ring */}
        <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-ping" />
      </div>
    </button>
  )
}
