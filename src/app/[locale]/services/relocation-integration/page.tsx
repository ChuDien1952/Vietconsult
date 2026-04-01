export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  ImageShowcase,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function RelocationPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="relocation" />
      <ProcessTimeline serviceKey="relocation" />
      <ImageShowcase serviceKey="relocation" />
      <KeyFeatures serviceKey="relocation" />
      <ServiceCTA serviceKey="relocation" />
    </div>
  )
}
