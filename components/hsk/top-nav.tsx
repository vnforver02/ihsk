"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Bell, Crown } from "lucide-react"

export function TopNav() {
  const [countdown, setCountdown] = useState({ hours: 11, minutes: 55, seconds: 19 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
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
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-card">
      <button className="flex items-center gap-1 text-foreground font-semibold text-lg">
        HSK 1
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1.5">
        <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
        <span className="font-bold text-amber-500 text-sm tracking-wide">PLUS</span>
        <div className="flex items-center gap-0.5 ml-1">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded">
            {pad(countdown.hours)}
          </span>
          <span className="text-primary font-bold text-xs">:</span>
          <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded">
            {pad(countdown.minutes)}
          </span>
          <span className="text-primary font-bold text-xs">:</span>
          <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded">
            {pad(countdown.seconds)}
          </span>
        </div>
      </div>

      <button className="relative" aria-label="通知">
        <Bell className="w-6 h-6 text-foreground" />
      </button>
    </header>
  )
}
