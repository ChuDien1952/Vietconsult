import { useTranslations } from 'next-intl'
import {
  PageHeader,
  IntroSection,
  MissionVisionSection,
  ValuesSection,
  WhyVietnamSection,
} from '@/components/sections/about-us/about-us-sections'

export default function AboutUsPage() {
  return (
    <div>
      <PageHeader />
      <IntroSection />
      <MissionVisionSection />
      <ValuesSection />
      <WhyVietnamSection />
    </div>
  )
}
