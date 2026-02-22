"use client"

import { ChevronDown, AlertCircle, RefreshCw, MessageCircle, FileText } from "lucide-react"

const trainingItems = [
  {
    title: "听后重复",
    desc: "请重复你听到的句子",
    icon: RefreshCw,
    bgColor: "#f3f0ff",
    iconColor: "#8b5cf6",
    borderColor: "#e9e3ff",
    badge: null,
  },
  {
    title: "听后回答",
    desc: "请回答你听到的问题",
    icon: MessageCircle,
    bgColor: "#ecfeff",
    iconColor: "#06b6d4",
    borderColor: "#cffafe",
    badge: "免费体验1次",
  },
  {
    title: "回答问题",
    desc: "请回答下面的问题",
    icon: FileText,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    borderColor: "#fef3c7",
    badge: "免费体验1次",
  },
]

const mockTests = [
  { label: "第1套", locked: true },
  { label: "第2套", locked: true },
  { label: "第3套", locked: true },
  { label: "第4套", locked: true },
  { label: "第5套", locked: true },
]

export function HSKKPage() {
  return (
    <div className="pb-24">
      {/* Top header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-card">
        <button className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #06b6d4, #67e8f9)" }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className="font-semibold text-lg" style={{ color: "#06b6d4" }}>HSKK 初级</span>
          <ChevronDown className="w-4 h-4" style={{ color: "#06b6d4" }} />
        </button>
        <button className="w-8 h-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#f59e0b", color: "#f59e0b" }}>
          <AlertCircle className="w-5 h-5" />
        </button>
      </header>

      {/* Training section */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">专项训练</h2>
          <button className="text-sm font-medium" style={{ color: "#4361ee" }}>历史记录</button>
        </div>

        <div className="flex flex-col gap-3">
          {trainingItems.map((item) => (
            <button
              key={item.title}
              className="relative rounded-2xl p-5 flex items-center justify-between text-left transition-transform active:scale-[0.98]"
              style={{ backgroundColor: item.bgColor, border: `1px solid ${item.borderColor}` }}
            >
              <div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>{item.desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.iconColor}15` }}>
                <item.icon className="w-6 h-6" style={{ color: item.iconColor }} />
              </div>
              {item.badge && (
                <span
                  className="absolute top-3 right-3 text-[11px] font-medium px-2 py-0.5 rounded"
                  style={{ backgroundColor: "#06b6d4", color: "white" }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mock tests */}
      <div className="px-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">模拟题</h2>
          <button className="text-sm font-medium" style={{ color: "#4361ee" }}>更多</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {mockTests.map((test) => (
            <div
              key={test.label}
              className="shrink-0 w-40 h-48 rounded-2xl p-4 flex flex-col justify-between"
              style={{ backgroundColor: "#f0f9ff", border: "1px solid #e0f2fe" }}
            >
              <span
                className="self-start text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: "#4361ee", color: "white" }}
              >
                MAX
              </span>
              <span className="text-center text-base font-bold text-foreground">{test.label}</span>
              <div />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
