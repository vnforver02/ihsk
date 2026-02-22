"use client"

import { useState } from "react"
import { HSKHome } from "@/components/hsk/hsk-home"
import { HSKKPage } from "@/components/hsk/hskk-page"
import { DiscoverPage } from "@/components/hsk/discover-page"
import { ProfilePage } from "@/components/hsk/profile-page"
import { BottomTabs } from "@/components/hsk/bottom-tabs"

export default function HSKApp() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-dvh bg-background max-w-md mx-auto relative">
      <div className={activeTab === 0 ? "block" : "hidden"}>
        <HSKHome />
      </div>
      <div className={activeTab === 1 ? "block" : "hidden"}>
        <HSKKPage />
      </div>
      <div className={activeTab === 2 ? "block" : "hidden"}>
        <DiscoverPage />
      </div>
      <div className={activeTab === 3 ? "block" : "hidden"}>
        <ProfilePage />
      </div>
      <BottomTabs active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
