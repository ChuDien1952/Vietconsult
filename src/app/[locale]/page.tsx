import { HeroSection } from '@/components/sections/home/hero-section'
import {
  VisionSection,
  ServicesOverviewSection,
  BenefitsSection,
} from '@/components/sections/home/homepage-sections'
import {
  PartnersSection,
  ProcessSection,
  InfrastructureSection,
  SpecializedAreasSection,
  WhyUsSection,
  CTABannerSection,
} from '@/components/sections/home/additional-sections'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VisionSection />
      <ServicesOverviewSection />
      <BenefitsSection />
      <PartnersSection />
      <ProcessSection />
      <InfrastructureSection />
      <SpecializedAreasSection />
      <WhyUsSection />
      <CTABannerSection />
    </div>
  )
}
