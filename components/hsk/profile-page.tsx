"use client"

import { useState, useEffect } from "react"
import {
  Settings,
  SlidersHorizontal,
  ChevronRight,
  Crown,
  Star,
  BarChart3,
  BookMarked,
  Edit3,
  AlertTriangle,
  Bot,
} from "lucide-react"

const menuItems = [
  {
    icon: Bot,
    label: "Max",
    iconBg: "#eff6ff",
    iconColor: "#4361ee",
    extra: null,
    divider: false,
  },
  {
    icon: BarChart3,
    label: "汉语水平测试",
    iconBg: "#fff7ed",
    iconColor: "#f59e0b",
    extra: "未测试",
    divider: false,
  },
  {
    icon: BookMarked,
    label: "错题集",
    iconBg: "#fef2f2",
    iconColor: "#f43f5e",
    extra: null,
    divider: true,
  },
  {
    icon: Star,
    label: "收藏夹",
    iconBg: "#fffbeb",
    iconColor: "#f59e0b",
    extra: null,
    divider: false,
  },
  {
    icon: Edit3,
    label: "我的笔记",
    iconBg: "#eff6ff",
    iconColor: "#4361ee",
    extra: null,
    divider: false,
  },
]

export function ProfilePage() {
  const [countdown, setCountdown] = useState({ hours: 8, minutes: 16, seconds: 48 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="pb-24">
      {/* Top bar */}
      <div className="flex items-center justify-end gap-3 px-4 py-3">
        <button aria-label="设置">
          <SlidersHorizontal className="w-6 h-6 text-foreground" />
        </button>
        <button aria-label="系统设置">
          <Settings className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Avatar and username */}
      <div className="px-4 pb-4 flex items-center gap-3">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#e0e7ff" }}
        >
          <svg viewBox="0 0 60 60" className="w-12 h-12">
            <circle cx="30" cy="22" r="10" fill="#94a3b8" opacity="0.6" />
            <path d="M10,55 Q10,38 30,38 Q50,38 50,55" fill="#94a3b8" opacity="0.6" />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">绑定个人账号</span>
          <Crown className="w-5 h-5" style={{ color: "#94a3b8" }} />
        </div>
      </div>

      {/* PLUS upgrade banner */}
      <div className="px-4 pb-5">
        <div
          className="relative rounded-2xl overflow-hidden p-4"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)",
          }}
        >
          {/* Countdown badge */}
          <div
            className="absolute top-2 right-2 text-[11px] font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.3)", color: "white" }}
          >
            距优惠结束: {pad(countdown.hours)}:{pad(countdown.minutes)}:{pad(countdown.seconds)}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Crown className="w-8 h-8 shrink-0" style={{ color: "white", fill: "white" }} />
            <span className="text-lg font-bold" style={{ color: "white" }}>
              升级PLUS，享无限时长
            </span>
          </div>

          <button className="absolute right-4 bottom-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
            <ChevronRight className="w-5 h-5" style={{ color: "white" }} />
          </button>
        </div>
      </div>

      {/* Stats section */}
      <div className="px-4 pb-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">当前等级</span>
          <button className="flex items-center gap-1">
            <span className="text-sm font-semibold" style={{ color: "#4361ee" }}>HSK 1</span>
            <ChevronRight className="w-4 h-4" style={{ color: "#4361ee" }} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">3</span>
            <span className="text-xs text-muted-foreground mt-0.5">答题</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5" style={{ color: "#f59e0b", fill: "#f59e0b" }} />
              <span className="text-2xl font-bold text-foreground">0</span>
            </div>
            <span className="text-xs text-muted-foreground mt-0.5">词</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">00:20</span>
            <span className="text-xs text-muted-foreground mt-0.5">学习时长</span>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="px-4">
        {menuItems.map((item, i) => (
          <div key={item.label}>
            {item.divider && <div className="h-2 -mx-4 bg-background my-1" />}
            <button className="w-full flex items-center gap-3 py-3.5 transition-colors active:bg-muted/50 rounded-lg">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: item.iconBg }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.iconColor }} />
              </div>
              <span className="flex-1 text-left text-sm font-medium text-foreground">{item.label}</span>
              {item.extra && (
                <span className="text-xs text-muted-foreground mr-1">{item.extra}</span>
              )}
              <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </button>
            {i < menuItems.length - 1 && !menuItems[i + 1]?.divider && (
              <div className="h-px bg-border ml-12" />
            )}
          </div>
        ))}
      </div>

      {/* Warning banner */}
      <div className="px-4 mt-6">
        <div
          className="flex items-center gap-2 p-3.5 rounded-xl"
          style={{ backgroundColor: "#fff7ed" }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: "#f59e0b" }} />
          <span className="flex-1 text-xs font-medium" style={{ color: "#f59e0b" }}>
            当前还未绑定邮箱/手机号，存在账号丢失风险
          </span>
          <button>
            <ChevronRight className="w-5 h-5" style={{ color: "#f59e0b" }} />
          </button>
        </div>
      </div>
    </div>
  )
}
