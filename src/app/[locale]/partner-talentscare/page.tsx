export const dynamic = 'force-static'

import {
  PageHeader,
  IntroSection,
  ServicesGridSection,
  CollaborationSection,
  CTASection,
} from '@/components/sections/partner/partner-sections'

export default function PartnerPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <ServicesGridSection />
      <CollaborationSection />
      <CTASection />
    </div>
  )
}
