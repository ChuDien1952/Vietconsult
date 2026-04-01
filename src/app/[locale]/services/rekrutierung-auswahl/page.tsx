export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  ImageShowcase,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function RecruitmentPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="recruitment" />
      <ProcessTimeline serviceKey="recruitment" />
      <ImageShowcase serviceKey="recruitment" />
      <KeyFeatures serviceKey="recruitment" />
      <ServiceCTA serviceKey="recruitment" />
    </div>
  )
}
