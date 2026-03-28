'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Clock,
  DollarSign,
  Shield,
  Users,
  GraduationCap,
  HeartHandshake,
  ChevronRight,
  Quote,
  TrendingUp,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('advantages')

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-blue to-blue-700 py-16 lg:py-24">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-blue-100">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{t('breadcrumb')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('pageTitle')}
          </h1>
          <p className="mt-4 text-xl text-blue-100">{t('pageSubtitle')}</p>
        </motion.div>
      </div>
    </section>
  )
}

// Intro Section
export function IntroSection() {
  const t = useTranslations('advantages.intro')

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-gray">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Benefits Section
export function BenefitsSection() {
  const t = useTranslations('advantages.benefits')

  const benefits = [
    {
      title: t('benefit1Title'),
      description: t('benefit1Description'),
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: t('benefit2Title'),
      description: t('benefit2Description'),
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: t('benefit3Title'),
      description: t('benefit3Description'),
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: t('benefit4Title'),
      description: t('benefit4Description'),
      icon: Users,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: t('benefit5Title'),
      description: t('benefit5Description'),
      icon: GraduationCap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      title: t('benefit6Title'),
      description: t('benefit6Description'),
      icon: HeartHandshake,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${benefit.bgColor}`}
                  >
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-slate-gray">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Promise Section
export function PromiseSection() {
  const t = useTranslations('advantages.promise')

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border-l-4 border-primary-blue bg-blue-50 p-8 lg:p-12">
            <Quote className="mb-6 h-12 w-12 text-primary-blue opacity-50" />
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-gray">
              {t('description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Stats Section
export function StatsSection() {
  const t = useTranslations('advantages.stats')

  const stats = [
    {
      value: t('stat1Value'),
      label: t('stat1Label'),
    },
    {
      value: t('stat2Value'),
      label: t('stat2Label'),
    },
    {
      value: t('stat3Value'),
      label: t('stat3Label'),
    },
  ]

  return (
    <section className="bg-gradient-to-br from-primary-blue to-blue-700 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <TrendingUp className="mx-auto mb-6 h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-4 text-lg text-blue-100">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
