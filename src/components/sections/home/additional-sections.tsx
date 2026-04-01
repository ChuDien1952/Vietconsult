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
import Image from 'next/image'

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
    <section className="bg-light-gray py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>

          {/* Partner logos placeholder - will be added later */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-3 rounded-lg border-3 border-black bg-white px-6 py-4 shadow-bold">
              <div className="flex text-primary-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-base font-bold text-dark-charcoal">
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
      image: '/images/step-1-recruitment.jpg',
      color: 'from-primary-red/70 to-primary-red/90',
    },
    {
      number: 2,
      title: t('step2Title'),
      description: t('step2Description'),
      image: '/images/step-2-training.png',
      color: 'from-primary-navy/70 to-primary-navy/90',
    },
    {
      number: 3,
      title: t('step3Title'),
      description: t('step3Description'),
      image: '/images/step-3-recognition.webp',
      color: 'from-primary-amber/70 to-primary-amber/90',
    },
    {
      number: 4,
      title: t('step4Title'),
      description: t('step4Description'),
      image: '/images/step-4-arrival.webp',
      color: 'from-primary-gold/70 to-primary-gold/90',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 top-0 hidden h-full w-1 bg-gradient-to-b from-primary-red via-primary-navy via-primary-amber to-primary-gold md:left-1/2 md:block md:-ml-px" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Number badge with ultra-dramatic 5-second zoom animation */}
                  <motion.div
                    className={`group relative flex h-36 w-44 md:h-44 md:w-56 flex-shrink-0 items-center justify-center overflow-visible ${
                      index % 2 === 0
                        ? 'md:order-2 md:ml-auto md:mr-8'
                        : 'md:order-1 md:ml-8'
                    }`}
                  >
                    {/* Minimal halo effect (20%) */}
                    <div className="absolute inset-0 rounded-[50%] bg-gradient-to-br from-white/10 via-transparent to-transparent blur-xl opacity-20 group-hover:opacity-0 transition-opacity duration-[5000ms]" />

                    {/* Oval border - scales with image */}
                    <div className="absolute inset-0 rounded-[50%] border-3 border-black shadow-bold scale-[0.2] group-hover:scale-100 transition-all duration-[5000ms] ease-out" />

                    {/* Image container - scales separately */}
                    <div className="absolute inset-0 rounded-[50%] scale-[0.2] group-hover:scale-100 transition-all duration-[5000ms] ease-out overflow-hidden">
                      <Image
                        src={step.image}
                        alt={`Step ${step.number} - ${step.title}`}
                        fill
                        className="object-cover blur-sm grayscale opacity-60 brightness-105 group-hover:blur-none group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-[5000ms] ease-out"
                        sizes="(max-width: 768px) 176px, 224px"
                        priority={index < 2}
                      />
                      {/* Ethereal glow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-[5000ms]" />
                      {/* Subtle vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {/* Color tint */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 mix-blend-overlay group-hover:opacity-5 transition-opacity duration-[5000ms]`} />
                    </div>
                    <span className="relative z-10 text-6xl md:text-7xl font-bold text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)] scale-[0.2] group-hover:scale-100 transition-transform duration-[5000ms] ease-out">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content Card - inverse scaling (large when image small, small when image large) */}
                  <motion.div
                    className={`flex-1 rounded-xl border-3 border-black bg-white p-6 shadow-bold scale-100 group-hover:scale-[0.2] transition-all duration-[5000ms] ease-out hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-dark-charcoal lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base text-slate-gray">
                      {step.description}
                    </p>

                    {/* Step indicator */}
                    <div className={`mt-4 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="h-1 w-12 bg-gradient-to-r from-primary-gold to-primary-amber" />
                      <span className="text-xs font-semibold text-primary-navy">
                        {t('stepLabel')} {step.number}
                      </span>
                    </div>
                  </motion.div>
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
    <section className="bg-light-gray py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Vietnam */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
              {/* Background Image */}
              <div className="absolute inset-0 h-64">
                <Image
                  src="/images/training.webp"
                  alt="VIETconsult Vietnam Training Center"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-red/80 to-dark-charcoal/90" />
              </div>

              <CardHeader className="relative z-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-white border-2 border-black shadow-bold">
                  <Building2 className="h-10 w-10 text-primary-red" />
                </div>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <MapPin className="h-6 w-6 text-primary-gold" />
                  {t('vietnamTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-base text-white/90">
                  {t('vietnamDescription')}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Germany */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
              {/* Background Image */}
              <div className="absolute inset-0 h-64">
                <Image
                  src="/images/workplace.webp"
                  alt="VIETconsult Germany Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/80 to-dark-charcoal/90" />
              </div>

              <CardHeader className="relative z-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-white border-2 border-black shadow-bold">
                  <Building2 className="h-10 w-10 text-primary-navy" />
                </div>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <MapPin className="h-6 w-6 text-primary-gold" />
                  {t('germanyTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-base text-white/90">
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
      bgColor: 'bg-primary-red',
      iconColor: 'text-white',
      image: '/images/healthcare-professional.jpg',
    },
    {
      title: t('area2Title'),
      description: t('area2Description'),
      icon: Wrench,
      bgColor: 'bg-primary-navy',
      iconColor: 'text-primary-gold',
      image: '/images/technical-engineer.jpg',
    },
    {
      title: t('area3Title'),
      description: t('area3Description'),
      icon: GraduationCap,
      bgColor: 'bg-primary-amber',
      iconColor: 'text-black',
      image: '/images/training-program.jpg',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {areas.map((area, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group h-full overflow-hidden border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${area.bgColor}/70 to-dark-charcoal/90`} />
                  <div className="absolute bottom-4 left-4 flex h-20 w-20 items-center justify-center rounded-lg bg-white border-2 border-black shadow-bold">
                    <area.icon className={`h-10 w-10 ${area.bgColor.replace('bg-', 'text-')}`} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-dark-charcoal">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-slate-gray">{area.description}</p>
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
    <section className="bg-light-gray py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 rounded-lg border-3 border-black bg-white p-6 shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1"
              >
                <CheckCircle2 className="mt-1 h-8 w-8 flex-shrink-0 text-primary-gold" />
                <p className="text-base font-medium text-dark-charcoal">{point}</p>
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
    <section className="relative overflow-hidden bg-gradient-dark py-24 lg:py-40">
      {/* Decorative background elements */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary-amber/10 blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#FFBC00 1px, transparent 1px), linear-gradient(90deg, #FFBC00 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-white lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-8 text-body-lg text-gray-300">{t('description')}</p>

          <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              size="xl"
              variant="default"
              asChild
            >
              <Link href={`/${locale}/kontakt`}>
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="secondary"
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
