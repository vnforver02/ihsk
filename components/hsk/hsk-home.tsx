import { TopNav } from "@/components/hsk/top-nav"
import { BannerCarousel } from "@/components/hsk/banner-carousel"
import { FeatureGrid } from "@/components/hsk/feature-grid"
import { CourseCard } from "@/components/hsk/course-card"
import { TestSection } from "@/components/hsk/test-section"
import { ChatbotButton } from "@/components/hsk/chatbot-button"

export function HSKHome() {
  return (
    <>
      <TopNav />
      <main className="overflow-y-auto">
        <BannerCarousel />
        <FeatureGrid />
        <CourseCard />
        <TestSection />
      </main>
      <ChatbotButton />
    </>
  )
}
