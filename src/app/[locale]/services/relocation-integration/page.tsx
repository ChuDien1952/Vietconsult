export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function RelocationPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="relocation" />
      <ProcessTimeline serviceKey="relocation" />
      <KeyFeatures serviceKey="relocation" />
      <ServiceCTA serviceKey="relocation" />
    </div>
  )
}
