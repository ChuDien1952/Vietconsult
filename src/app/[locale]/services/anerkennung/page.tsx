export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function RecognitionPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="recognition" />
      <ProcessTimeline serviceKey="recognition" />
      <KeyFeatures serviceKey="recognition" />
      <ServiceCTA serviceKey="recognition" />
    </div>
  )
}
