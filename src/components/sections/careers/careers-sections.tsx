'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Send,
  Mail,
  ChevronRight,
  MapPin,
  Clock,
  Home,
  BookOpen,
  Globe,
  Monitor
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('careers')

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-gold/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-amber/20 blur-3xl" />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.05)_1px,_transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-gold">{t('breadcrumb')}</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
            {t('pageTitle')}
          </h1>
          <p className="mt-4 text-xl text-gray-300">{t('pageSubtitle')}</p>
        </motion.div>
      </div>
    </section>
  )
}

// Introduction Section
export function IntroSection() {
  const t = useTranslations('careers.intro')

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-3 border-black bg-primary-gold">
            <Briefcase className="h-10 w-10 text-black" />
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg leading-8 text-slate-gray">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Why Us Section
export function WhyUsSection() {
  const t = useTranslations('careers.whyUs')
  const reasons = t.raw('reasons') as string[]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="group h-full rounded-2xl border-3 border-black bg-white p-6 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-primary-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <CheckCircle className="h-6 w-6 text-black" />
                </div>
                <p className="text-base leading-7 text-slate-gray">{reason}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Positions Section
export function PositionsSection() {
  const t = useTranslations('careers.positions')
  const positions = t.raw('list') as Array<{
    title: string
    location: string
    type: string
    description: string
  }>

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(32,44,88,0.02)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-6"
        >
          {positions.map((position, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="group rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-dark-charcoal">{position.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-primary-gold/10 px-3 py-1 text-sm font-medium text-dark-charcoal">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-primary-gold/10 px-3 py-1 text-sm font-medium text-dark-charcoal">
                      <Clock className="h-4 w-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <p className="text-base leading-7 text-slate-gray">{position.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Benefits Section
export function BenefitsSection() {
  const t = useTranslations('careers.benefits')
  const benefits = t.raw('list') as Array<{
    title: string
    description: string
  }>

  const icons = [TrendingUp, Clock, Home, BookOpen, Globe, Monitor]
  const colors = ['bg-accent-red', 'bg-primary-navy', 'bg-primary-amber', 'bg-primary-gold', 'bg-accent-red', 'bg-primary-navy']

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length]
            const colorClass = colors[index % colors.length]

            return (
              <motion.div key={index} variants={fadeInUp}>
                <div className="group h-full rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${colorClass} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-dark-charcoal">{benefit.title}</h3>
                  <p className="text-base text-slate-gray">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Application Process Section
export function ApplicationProcessSection() {
  const t = useTranslations('careers.application')
  const steps = t.raw('steps') as Array<{
    number: string
    title: string
    description: string
  }>

  return (
    <section className="relative bg-primary-navy py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.05)_1px,_transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative space-y-12"
        >
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-primary-gold lg:left-12" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              {/* Step Number Badge */}
              <div className="absolute left-0 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-3 border-black bg-primary-gold shadow-bold lg:h-20 lg:w-20">
                <span className="text-2xl font-bold text-black lg:text-3xl">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="ml-24 lg:ml-32">
                <div className="rounded-2xl border-3 border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                  <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-base leading-7 text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
export function CTASection() {
  const t = useTranslations('careers.cta')

  return (
    <section className="bg-gradient-to-br from-primary-gold to-warm-amber py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-3 border-black bg-white">
            <Send className="h-10 w-10 text-black" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black lg:text-5xl">{t('title')}</h2>
          <p className="mb-8 text-xl text-dark-charcoal">{t('description')}</p>

          <div className="mb-8 rounded-2xl border-3 border-black bg-white p-6 shadow-bold">
            <p className="mb-3 text-base font-semibold text-dark-charcoal">{t('documents')}</p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary-navy" />
              <a
                href={`mailto:${t('email')}`}
                className="font-bold text-primary-navy underline transition-colors hover:text-primary-gold"
              >
                {t('email')}
              </a>
            </div>
          </div>

          <a
            href={`mailto:${t('email')}`}
            className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-black px-8 py-4 text-lg font-bold text-white shadow-bold transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            {t('button')}
            <Send className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
