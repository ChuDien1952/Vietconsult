export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  ImageShowcase,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function RecognitionPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="recognition" />
      <ProcessTimeline serviceKey="recognition" />
      <ImageShowcase serviceKey="recognition" />
      <KeyFeatures serviceKey="recognition" />
      <ServiceCTA serviceKey="recognition" />
    </div>
  )
}
