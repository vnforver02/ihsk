"use client"

import { useState } from "react"
import { ArrowRight, Info, Star, Award } from "lucide-react"

export function CourseCard() {
  const [progress] = useState(0)

  return (
    <div className="px-4 pb-4">
      <div className="relative rounded-2xl overflow-hidden" style={{
        background: "linear-gradient(135deg, #ec4899, #f472b6, #f9a8d4)"
      }}>
        {/* Top section */}
        <div className="relative p-5 pb-20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-card">HSK轻松过</h3>
              <p className="text-sm text-card/90 mt-1">
                资深教师为你设计的考试通关课程
              </p>
            </div>
            <button className="w-8 h-8 rounded-full bg-card/20 flex items-center justify-center" aria-label="课程信息">
              <Info className="w-4 h-4 text-card" />
            </button>
          </div>

          <button className="mt-4 w-10 h-10 rounded-full bg-card/30 flex items-center justify-center transition-transform active:scale-95">
            <ArrowRight className="w-5 h-5 text-card" />
          </button>
        </div>

        {/* Mountain landscape SVG */}
        <div className="absolute bottom-12 left-0 right-0">
          <svg viewBox="0 0 400 120" className="w-full" preserveAspectRatio="none">
            {/* Sun */}
            <circle cx="280" cy="30" r="35" fill="rgba(255,200,150,0.5)" />
            <circle cx="280" cy="30" r="25" fill="rgba(255,220,180,0.6)" />
            {/* Mountains */}
            <path d="M0,120 L50,60 L100,90 L150,40 L200,80 L250,50 L300,70 L350,45 L400,80 L400,120 Z" fill="rgba(180,100,120,0.4)" />
            <path d="M0,120 L60,80 L120,100 L180,70 L240,90 L300,75 L360,85 L400,95 L400,120 Z" fill="rgba(200,120,140,0.3)" />
          </svg>
        </div>

        {/* Badge and progress */}
        <div className="relative px-5 pb-4">
          {/* Trophy badge */}
          <div className="absolute right-5 -top-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)"
              }}>
                <Award className="w-8 h-8 text-card" />
              </div>
              <div className="flex items-center gap-0.5 absolute -bottom-1 -right-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full whitespace-nowrap">
                HSK0
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-card">{progress}%</span>
              <div className="flex-1 h-2 bg-card/30 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.max(progress, 2)}%`,
                    background: "linear-gradient(90deg, #60a5fa, #93c5fd)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
