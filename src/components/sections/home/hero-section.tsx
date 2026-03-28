'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Award } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function HeroSection() {
  const t = useTranslations('home.hero')
  const tStats = useTranslations('home.stats')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <span className="block">{t('titleLine1')}</span>
            <span className="mt-2 block bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-slate-gray sm:text-xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="xl" asChild>
              <Link href={`/${locale}/kontakt`}>
                {t('cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href={`/${locale}/services`}>{t('ctaSecondary')}</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue/10">
                <Award className="h-8 w-8 text-primary-blue" />
              </div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="mt-2 text-sm text-slate-gray">
                {tStats('integration')}
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-gold/10">
                <Users className="h-8 w-8 text-primary-gold" />
              </div>
              <p className="text-3xl font-bold text-gray-900">1.200+</p>
              <p className="mt-2 text-sm text-slate-gray">
                {tStats('candidates')}
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-red/10">
                <svg
                  className="h-8 w-8 text-primary-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">4</p>
              <p className="mt-2 text-sm text-slate-gray">{tStats('steps')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
