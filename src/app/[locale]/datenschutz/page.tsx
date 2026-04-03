export const dynamic = 'force-static'

import {
  PageHeader,
  IntroSection,
  ControllerSection,
  DataCollectionSection,
  LegalBasisSection,
  UserRightsSection,
  CookiesSection,
  SSLSection,
  ThirdPartySection,
  AnalyticsSection,
  NewsletterSection,
  RetentionSection,
  ContactSection,
  ChangesSection,
} from '@/components/sections/datenschutz/datenschutz-sections'

export default function DatenschutzPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <ControllerSection />
      <DataCollectionSection />
      <LegalBasisSection />
      <UserRightsSection />
      <CookiesSection />
      <SSLSection />
      <ThirdPartySection />
      <AnalyticsSection />
      <NewsletterSection />
      <RetentionSection />
      <ContactSection />
      <ChangesSection />
    </div>
  )
}
