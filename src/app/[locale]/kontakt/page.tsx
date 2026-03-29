export const dynamic = 'force-static'

import {
  PageHeader,
  ContactFormSection,
  LocationsSection,
  HotlinesSection,
} from '@/components/sections/contact/contact-sections'

export default function ContactPage() {
  return (
    <div>
      <PageHeader />
      <ContactFormSection />
      <LocationsSection />
      <HotlinesSection />
    </div>
  )
}
