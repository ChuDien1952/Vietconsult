import { HeroSection } from '@/components/sections/home/hero-section'
import {
  VisionSection,
  ServicesOverviewSection,
  BenefitsSection,
  TeamShowcaseSection,
} from '@/components/sections/home/homepage-sections'
import {
  PartnersSection,
  ProcessSection,
  InfrastructureSection,
  SpecializedAreasSection,
  WhyUsSection,
  CTABannerSection,
} from '@/components/sections/home/additional-sections'
import { StatsSection } from '@/components/sections/home/stats-section'
import { SuccessStoriesSection } from '@/components/sections/home/success-stories-section'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VisionSection />
      <TeamShowcaseSection />
      <StatsSection />
      <ServicesOverviewSection />
      <BenefitsSection />
      <PartnersSection />
      <ProcessSection />
      <InfrastructureSection />
      <SpecializedAreasSection />
      <SuccessStoriesSection />
      <WhyUsSection />
      <CTABannerSection />
    </div>
  )
}
