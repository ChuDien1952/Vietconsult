'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  MapPin,
  Building2,
  Stethoscope,
  Wrench,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Partners Section
export function PartnersSection() {
  const t = useTranslations('home.partners')

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>

          {/* Partner logos placeholder - will be added later */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">
                {t('rating')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// 4-Step Process Section
export function ProcessSection() {
  const t = useTranslations('home.process')

  const steps = [
    {
      number: 1,
      title: t('step1Title'),
      description: t('step1Description'),
    },
    {
      number: 2,
      title: t('step2Title'),
      description: t('step2Description'),
    },
    {
      number: 3,
      title: t('step3Title'),
      description: t('step3Description'),
    },
    {
      number: 4,
      title: t('step4Title'),
      description: t('step4Description'),
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-primary-blue/20 md:left-1/2 md:block md:-ml-px" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Number badge */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue text-xl font-bold text-white ${
                      index % 2 === 0
                        ? 'md:order-2 md:ml-auto md:mr-6'
                        : 'md:order-1 md:ml-6'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-gray">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Infrastructure Section
export function InfrastructureSection() {
  const t = useTranslations('home.infrastructure')

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Vietnam */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-red/10">
                  <Building2 className="h-8 w-8 text-primary-red" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-red" />
                  {t('vietnamTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-gray">
                  {t('vietnamDescription')}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Germany */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-900/10">
                  <Building2 className="h-8 w-8 text-gray-900" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-900" />
                  {t('germanyTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-gray">
                  {t('germanyDescription')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Specialized Areas Section
export function SpecializedAreasSection() {
  const t = useTranslations('home.specializedAreas')

  const areas = [
    {
      title: t('area1Title'),
      description: t('area1Description'),
      icon: Stethoscope,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: t('area2Title'),
      description: t('area2Description'),
      icon: Wrench,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: t('area3Title'),
      description: t('area3Description'),
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {areas.map((area, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${area.bgColor}`}
                  >
                    <area.icon className={`h-8 w-8 ${area.color}`} />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-gray">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Why Us Section
export function WhyUsSection() {
  const t = useTranslations('home.whyUs')

  const points = [
    t('point1'),
    t('point2'),
    t('point3'),
    t('point4'),
    t('point5'),
    t('point6'),
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <p className="text-base text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Banner Section
export function CTABannerSection() {
  const t = useTranslations('home.ctaBanner')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-blue-700 py-16 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{t('description')}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary-blue hover:bg-blue-50"
              asChild
            >
              <Link href={`/${locale}/kontakt`}>
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href={`/${locale}/kontakt#standorte`}>
                {t('ctaSecondary')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
