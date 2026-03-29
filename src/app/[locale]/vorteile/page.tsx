export const dynamic = 'force-static'

import {
  PageHeader,
  IntroSection,
  BenefitsSection,
  PromiseSection,
  StatsSection,
} from '@/components/sections/advantages/advantages-sections'

export default function AdvantagesPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <BenefitsSection />
      <PromiseSection />
      <StatsSection />
    </div>
  )
}
