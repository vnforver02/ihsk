"use client"

import { Headphones, BookOpen, Languages, FileText, File, CheckSquare, Video } from "lucide-react"

const features = [
  {
    icon: Headphones,
    label: "听力",
    color: "#f97316",
    bgColor: "#fff7ed",
  },
  {
    icon: BookOpen,
    label: "阅读",
    color: "#f59e0b",
    bgColor: "#fffbeb",
  },
  {
    icon: Languages,
    label: "词汇训练",
    color: "#4361ee",
    bgColor: "#eef2ff",
    badge: "HSK7-9",
  },
  {
    icon: FileText,
    label: "全真模拟题",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
  },
  {
    icon: File,
    label: "模拟题",
    color: "#06b6d4",
    bgColor: "#ecfeff",
  },
  {
    icon: CheckSquare,
    label: "错题本",
    color: "#f43f5e",
    bgColor: "#fff1f2",
  },
  {
    icon: Video,
    label: "直播课",
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
]

export function FeatureGrid() {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-4 gap-y-5 gap-x-2">
        {features.map((feature) => (
          <button
            key={feature.label}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-active:scale-95"
              style={{ backgroundColor: feature.bgColor }}
            >
              <feature.icon
                className="w-7 h-7"
                style={{ color: feature.color }}
              />
              {feature.badge && (
                <span
                  className="absolute -top-1.5 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-card"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.badge}
                </span>
              )}
            </div>
            <span className="text-xs text-foreground font-medium">{feature.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
