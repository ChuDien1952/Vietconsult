'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

export function HeroSection() {
  const t = useTranslations('home.hero')
  const tStats = useTranslations('home.stats')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large geometric shapes */}
        <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-primary-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary-amber/5 blur-3xl" />

        {/* Decorative curved shape */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-5"
          viewBox="0 0 400 800"
          fill="none"
        >
          <path
            d="M0 0 Q200 400 0 800"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-gold"
          />
        </svg>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FFBC00 1px, transparent 1px), linear-gradient(90deg, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              {/* Small label */}
              <motion.div variants={fadeInLeft} className="mb-6">
                <span className="inline-block rounded-full bg-primary-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-gold">
                  {t('label') || 'Fachkräfte aus Vietnam'}
                </span>
              </motion.div>

              {/* Main Heading - Extra Large */}
              <motion.h1
                variants={fadeInLeft}
                className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl break-words hyphens-auto"
              >
                <span className="block break-words">{t('titleLine1')}</span>
                <span className="mt-2 block break-words bg-gradient-gold bg-clip-text text-transparent">
                  {t('titleLine2')}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInLeft}
                className="mt-8 text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl"
              >
                {t('subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInLeft}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <Button size="xl" asChild>
                  <Link href={`/${locale}/kontakt`}>
                    {t('cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="xl" asChild>
                  <Link href={`/${locale}/services`}>{t('ctaSecondary')}</Link>
                </Button>
              </motion.div>

              {/* Quick Stats - Inline */}
              <motion.div
                variants={fadeInLeft}
                className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8"
              >
                <div>
                  <p className="text-4xl font-bold text-primary-gold">100%</p>
                  <p className="mt-1 text-sm text-gray-400">{tStats('integration')}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-gold">1.200+</p>
                  <p className="mt-1 text-sm text-gray-400">{tStats('candidates')}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-gold">4</p>
                  <p className="mt-1 text-sm text-gray-400">{tStats('steps')}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Element with Stats Cards */}
            <div className="relative flex items-center justify-center">
              {/* Background hero image */}
              <motion.div
                variants={scaleIn}
                className="relative h-full w-full rounded-2xl bg-gradient-to-br from-primary-navy/50 to-dark-charcoal/50 p-8 backdrop-blur-sm"
              >
                {/* Professional team image */}
                <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/consultation.webp"
                    alt="VIETconsult Professional Team Consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent" />

                  {/* Floating stats cards */}
                  <motion.div
                    variants={scaleIn}
                    className="absolute right-4 top-4 rounded-lg bg-white p-4 shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold/10">
                        <Award className="h-6 w-6 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">KDA</p>
                        <p className="text-xs text-gray-600">{t('qualitySeal')}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    className="absolute bottom-4 left-4 rounded-lg bg-dark-charcoal p-4 shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold">
                        <TrendingUp className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">99%</p>
                        <p className="text-xs text-gray-400">{t('successRate')}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-4 border-primary-gold/20" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border-4 border-primary-amber/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
