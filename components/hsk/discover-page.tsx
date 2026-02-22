"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <text x="6" y="29" fontSize="24" fontWeight="700" fill="white">a</text>
      </svg>
    ),
    label: "拼音课",
    color: "#f59e0b",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <text x="4" y="30" fontSize="22" fontWeight="700" fill="white">汉</text>
      </svg>
    ),
    label: "汉字课",
    color: "#8b5cf6",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <text x="7" y="28" fontSize="20" fontWeight="700" fill="white">A</text>
      </svg>
    ),
    label: "词汇课",
    color: "#3b82f6",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="6" y="10" width="28" height="4" rx="2" fill="white" />
        <rect x="6" y="18" width="22" height="4" rx="2" fill="white" opacity="0.7" />
        <rect x="6" y="26" width="18" height="4" rx="2" fill="white" opacity="0.5" />
      </svg>
    ),
    label: "句子课",
    color: "#14b8a6",
  },
]

const courses = [
  {
    title: "迎财神",
    image: "/images/course-yingcaishen.jpg",
    free: true,
    level: "中级",
    category: "中国节日",
    date: "2026.02.18",
  },
  {
    title: "除夕的来历",
    image: "/images/course-chuxi.jpg",
    free: true,
    level: "中级",
    category: "中国节日",
    date: "2026.02.15",
  },
  {
    title: "情人节礼物",
    image: "/images/course-valentine.jpg",
    free: true,
    level: "中级",
    category: "社交娱乐",
    date: "2026.02.11",
  },
  {
    title: "航班延误",
    image: "/images/course-flight.jpg",
    free: true,
    level: "中级",
    category: "旅行出行",
    date: "2026.02.08",
  },
]

export function DiscoverPage() {
  return (
    <div className="pb-24 bg-background">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">发现</h1>
      </div>

      {/* Category Grid */}
      <div className="px-5 pb-5">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button key={cat.label} className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: cat.color }}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-foreground">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Teacher Banner */}
      <div className="px-5 pb-6">
        <div
          className="relative rounded-2xl overflow-hidden p-5"
          style={{
            background: "linear-gradient(135deg, #8b9fd4 0%, #a3b5e0 50%, #bcc8e8 100%)",
          }}
        >
          {/* Decorative sparkles */}
          <Sparkles
            className="absolute top-4 right-20 w-5 h-5 opacity-60"
            style={{ color: "white" }}
          />
          <div
            className="absolute top-3 right-14 w-2 h-2 rounded-full opacity-40"
            style={{ backgroundColor: "white" }}
          />
          <div
            className="absolute bottom-6 right-24 w-1.5 h-1.5 rounded-full opacity-30"
            style={{ backgroundColor: "white" }}
          />

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold" style={{ color: "white" }}>
                资深教师一对一教学
              </h3>
              {/* Dots indicator */}
              <div className="flex items-center gap-1.5 mt-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "white" }} />
              </div>
            </div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 shrink-0" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              <Image
                src="/images/teacher-avatar.jpg"
                alt="教师头像"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Recommendations */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">好课推荐</h2>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#f1f5f9" }}
            aria-label="查看更多"
          >
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {courses.map((course) => (
            <button
              key={course.title}
              className="flex items-start gap-4 text-left"
            >
              {/* Thumbnail */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 py-0.5">
                <h3 className="text-base font-semibold text-foreground mb-2 truncate">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {course.free && (
                    <span className="flex items-center gap-0.5 text-xs" style={{ color: "#22c55e" }}>
                      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor">
                        <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3.5 6L5.5 8L8.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      免费
                    </span>
                  )}
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#f59e0b" }}
                  >
                    {course.level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{course.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
