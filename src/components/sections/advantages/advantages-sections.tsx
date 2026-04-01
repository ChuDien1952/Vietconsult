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
    <section className="relative overflow-hidden bg-gradient-dark py-16 lg:py-24">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-gold/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-amber/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-gold">{t('breadcrumb')}</span>
          </div>

          <h1 className="text-h2 font-bold tracking-tight text-white lg:text-h1">
            {t('pageTitle')}
          </h1>
          <p className="mt-4 text-body-lg text-gray-300">{t('pageSubtitle')}</p>
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
      bgColor: 'bg-primary-red',
      iconColor: 'text-white',
    },
    {
      title: t('benefit2Title'),
      description: t('benefit2Description'),
      icon: DollarSign,
      bgColor: 'bg-primary-navy',
      iconColor: 'text-primary-gold',
    },
    {
      title: t('benefit3Title'),
      description: t('benefit3Description'),
      icon: Shield,
      bgColor: 'bg-primary-amber',
      iconColor: 'text-black',
    },
    {
      title: t('benefit4Title'),
      description: t('benefit4Description'),
      icon: Users,
      bgColor: 'bg-primary-gold',
      iconColor: 'text-black',
    },
    {
      title: t('benefit5Title'),
      description: t('benefit5Description'),
      icon: GraduationCap,
      bgColor: 'bg-primary-red',
      iconColor: 'text-white',
    },
    {
      title: t('benefit6Title'),
      description: t('benefit6Description'),
      icon: HeartHandshake,
      bgColor: 'bg-primary-navy',
      iconColor: 'text-primary-gold',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-light-gray py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative blur */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/20 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
          <p className="mt-4 text-body-lg text-slate-gray">{t('subtitle')}</p>
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
              <div className="group h-full bg-white border-3 border-black shadow-bold rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-bold-hover">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${benefit.bgColor} border-2 border-black transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base leading-7 text-slate-gray">
                  {benefit.description}
                </p>
              </div>
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
          <div className="rounded-2xl border-3 border-black shadow-bold bg-gradient-to-br from-primary-gold/10 to-primary-amber/10 p-8 lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-gold border-2 border-black shadow-bold mb-6">
              <Quote className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-h3 font-bold text-dark-charcoal lg:text-h2">
              {t('title')}
            </h2>
            <p className="mt-6 text-body-lg leading-8 text-slate-gray">
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
