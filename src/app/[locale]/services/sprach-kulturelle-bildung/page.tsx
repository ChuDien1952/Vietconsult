export const dynamic = 'force-static'

import {
  ServiceDetailHero,
  ProcessTimeline,
  ImageShowcase,
  KeyFeatures,
  ServiceCTA,
} from '@/components/sections/services/service-detail-sections'

export default function LanguageTrainingPage() {
  return (
    <div>
      <ServiceDetailHero serviceKey="languageTraining" />
      <ProcessTimeline serviceKey="languageTraining" />
      <ImageShowcase serviceKey="languageTraining" />
      <KeyFeatures serviceKey="languageTraining" />
      <ServiceCTA serviceKey="languageTraining" />
    </div>
  )
}
