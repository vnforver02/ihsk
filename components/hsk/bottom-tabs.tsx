"use client"

import { BookOpen, MessageCircle, Compass, SmilePlus } from "lucide-react"

const tabs = [
  { icon: BookOpen, label: "HSK" },
  { icon: MessageCircle, label: "HSKK" },
  { icon: Compass, label: "发现" },
  { icon: SmilePlus, label: "我的" },
]

interface BottomTabsProps {
  active: number
  onChange: (index: number) => void
}

export function BottomTabs({ active, onChange }: BottomTabsProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border" role="tablist" aria-label="主导航">
      <div className="max-w-md mx-auto flex items-center justify-around py-2 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => onChange(i)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 transition-colors ${
              active === i ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {active === i ? (
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#4361ee" }}
              >
                <tab.icon className="w-3.5 h-3.5 stroke-[2.5]" style={{ color: "white" }} />
              </div>
            ) : (
              <tab.icon className="w-6 h-6" />
            )}
            <span className={`text-[11px] font-medium ${active === i ? "font-semibold" : ""}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
