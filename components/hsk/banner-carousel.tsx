"use client"

import { useState, useEffect, useCallback } from "react"

const banners = [
  {
    title: "2026",
    subtitle: "HSK考试时间表",
    bgFrom: "#4361ee",
    bgTo: "#6b8aff",
  },
  {
    title: "新课上线",
    subtitle: "HSK备考冲刺班",
    bgFrom: "#f97316",
    bgTo: "#fbbf24",
  },
  {
    title: "限时优惠",
    subtitle: "PLUS会员5折起",
    bgFrom: "#06b6d4",
    bgTo: "#67e8f9",
  },
]

export function BannerCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % banners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="px-4 pt-2">
      <div
        className="relative rounded-2xl overflow-hidden h-44"
        style={{
          background: `linear-gradient(135deg, ${banners[current].bgFrom}, ${banners[current].bgTo})`,
        }}
      >
        <div className="relative z-10 p-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-card" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
            {banners[current].title}
          </h2>
          <p className="text-xl font-semibold text-card mt-1" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
            {banners[current].subtitle}
          </p>
        </div>

        {/* Decorative illustration placeholder */}
        <div className="absolute right-4 bottom-4 w-32 h-32">
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full opacity-90">
            {/* Person studying illustration */}
            <rect x="60" y="70" width="50" height="35" rx="3" fill="rgba(255,255,255,0.3)" />
            <rect x="65" y="75" width="40" height="20" rx="2" fill="rgba(255,255,255,0.5)" />
            {/* Person */}
            <circle cx="45" cy="45" r="12" fill="rgba(255,200,150,0.9)" />
            <path d="M35 42 C35 35, 55 35, 55 42" fill="rgba(60,40,20,0.8)" />
            <rect x="38" y="55" width="14" height="25" rx="5" fill="rgba(255,255,255,0.6)" />
            {/* Book */}
            <rect x="20" y="85" width="20" height="15" rx="2" fill="rgba(255,200,100,0.7)" />
            <line x1="30" y1="85" x2="30" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          </svg>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-card w-5" : "bg-card/50"
              }`}
              aria-label={`切换到第${i + 1}张轮播图`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
