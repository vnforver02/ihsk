"use client"

import { ChevronRight } from "lucide-react"

const universities = [
  "华东师范大学",
  "北京交通大学",
  "上海大学",
  "复旦大学",
  "浙江大学",
]

export function TestSection() {
  return (
    <div className="px-4 pb-24">
      <div className="bg-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-foreground">汉语水平测试</h3>
          <button className="flex items-center gap-0.5 text-primary text-sm font-medium">
            去测试
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          {universities.map((uni) => (
            <button
              key={uni}
              className="shrink-0 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground active:scale-95"
            >
              {uni}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
