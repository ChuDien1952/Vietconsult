export const dynamic = 'force-static'

import {
  PageHeader,
  IntroSection,
  StandardsSection,
  ComplianceSection,
  ComplaintSection,
} from '@/components/sections/quality-seal/quality-seal-sections'

export default function QualitySealPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <StandardsSection />
      <ComplianceSection />
      <ComplaintSection />
    </div>
  )
}
