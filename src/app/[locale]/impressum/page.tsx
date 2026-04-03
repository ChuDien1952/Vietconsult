export const dynamic = 'force-static'

import {
  PageHeader,
  CompanySection,
  BranchesSection,
  BankSection,
  LiabilitySection,
  DisputeSection,
} from '@/components/sections/impressum/impressum-sections'

export default function ImpressumPage() {
  return (
    <div>
      <PageHeader />
      <CompanySection />
      <BranchesSection />
      <BankSection />
      <LiabilitySection />
      <DisputeSection />
    </div>
  )
}
