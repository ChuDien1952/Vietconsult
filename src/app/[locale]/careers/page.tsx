export const dynamic = 'force-static'

import {
  PageHeader,
  IntroSection,
  WhyUsSection,
  PositionsSection,
  BenefitsSection,
  ApplicationProcessSection,
  CTASection,
} from '@/components/sections/careers/careers-sections'

export default function CareersPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <WhyUsSection />
      <PositionsSection />
      <BenefitsSection />
      <ApplicationProcessSection />
      <CTASection />
    </div>
  )
}
