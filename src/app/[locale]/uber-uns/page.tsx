import {
  PageHeader,
  IntroSection,
  MissionVisionSection,
  TeamGallerySection,
  ValuesSection,
  WhyVietnamSection,
} from '@/components/sections/about-us/about-us-sections'

export const dynamic = 'force-static'

export default function AboutUsPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <MissionVisionSection />
      <TeamGallerySection />
      <ValuesSection />
      <WhyVietnamSection />
    </div>
  )
}
