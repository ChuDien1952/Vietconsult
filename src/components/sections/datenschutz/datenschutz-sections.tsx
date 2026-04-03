'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Shield,
  FileText,
  Lock,
  UserCheck,
  Cookie,
  Database,
  Globe,
  BarChart3,
  Mail,
  Clock,
  Phone,
  RefreshCw,
  ChevronRight,
  CheckCircle,
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
  const t = useTranslations('datenschutz')

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
  const t = useTranslations('datenschutz.intro')

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl border-3 border-black bg-primary-gold/5 p-8 shadow-bold lg:p-12"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
            <Shield className="h-8 w-8 text-black" />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
          <p className="text-lg leading-8 text-slate-gray">{t('description')}</p>
        </motion.div>
      </div>
    </section>
  )
}

// Controller Section
export function ControllerSection() {
  const t = useTranslations('datenschutz.controller')

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-navy">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-dark-charcoal">{t('company')}</p>
              <p className="text-base text-slate-gray">{t('address')}</p>
              <p className="text-base text-slate-gray">{t('city')}</p>
              <p className="text-base text-slate-gray">{t('country')}</p>
              <p className="mt-4 text-base text-slate-gray">{t('phone')}</p>
              <p className="text-base text-slate-gray">{t('email')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Data Collection Section
export function DataCollectionSection() {
  const t = useTranslations('datenschutz.dataCollection')

  const sections = [
    {
      icon: Database,
      title: t('automatic.title'),
      description: t('automatic.description'),
    },
    {
      icon: FileText,
      title: t('forms.title'),
      description: t('forms.description'),
    },
  ]

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="group h-full rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <section.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark-charcoal">{section.title}</h3>
                <p className="text-base leading-7 text-slate-gray">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Legal Basis Section
export function LegalBasisSection() {
  const t = useTranslations('datenschutz.legalBasis')

  const bases = [
    { key: 'gdpr6_1a', color: 'bg-accent-red' },
    { key: 'gdpr6_1b', color: 'bg-primary-navy' },
    { key: 'gdpr6_1f', color: 'bg-warm-amber' },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
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
          <p className="mt-4 text-lg text-slate-gray">{t('description')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {bases.map((basis, index) => (
            <motion.div key={basis.key} variants={fadeInUp}>
              <div className="rounded-2xl border-3 border-black bg-white p-6 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black ${basis.color}`}>
                  <CheckCircle className="h-6 w-6 text-black" />
                </div>
                <p className="text-base font-semibold text-dark-charcoal">{t(basis.key)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// User Rights Section
export function UserRightsSection() {
  const t = useTranslations('datenschutz.userRights')
  const rights = t.raw('rights') as string[]

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
              <UserCheck className="h-8 w-8 text-black" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="mb-8 text-lg leading-8 text-slate-gray">{t('description')}</p>

            <div className="space-y-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-gold/10">
                    <CheckCircle className="h-4 w-4 text-primary-gold" />
                  </div>
                  <p className="text-base text-slate-gray">{right}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Cookies Section
export function CookiesSection() {
  const t = useTranslations('datenschutz.cookies')

  const cookieTypes = [
    { key: 'session', icon: Clock },
    { key: 'persistent', icon: Database },
    { key: 'functional', icon: CheckCircle },
    { key: 'analytics', icon: BarChart3 },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-warm-amber">
              <Cookie className="h-8 w-8 text-black" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="mb-8 text-lg leading-8 text-slate-gray">{t('description')}</p>

            <h3 className="mb-6 text-xl font-bold text-dark-charcoal">{t('types.title')}</h3>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cookieTypes.map((type) => (
                <div key={type.key} className="flex items-start gap-3 rounded-lg border-2 border-slate-gray/20 bg-light-gray p-4">
                  <type.icon className="h-5 w-5 flex-shrink-0 text-primary-gold" />
                  <p className="text-sm text-slate-gray">{t(`types.${type.key}`)}</p>
                </div>
              ))}
            </div>

            <p className="text-base leading-7 text-slate-gray">{t('control')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// SSL Section
export function SSLSection() {
  const t = useTranslations('datenschutz.ssl')

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
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-navy">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="text-lg leading-8 text-slate-gray">{t('description')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Third Party Services Section
export function ThirdPartySection() {
  const t = useTranslations('datenschutz.thirdParty')
  const services = t.raw('services') as string[]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-accent-red">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="mb-8 text-lg leading-8 text-slate-gray">{t('description')}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border-2 border-primary-gold/20 bg-primary-gold/5 p-4">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-gold" />
                  <p className="text-base text-slate-gray">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Analytics Section
export function AnalyticsSection() {
  const t = useTranslations('datenschutz.analytics')

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
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-warm-amber">
              <BarChart3 className="h-8 w-8 text-black" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-dark-charcoal">{t('matomo.title')}</h3>
            <p className="text-base leading-7 text-slate-gray">{t('matomo.description')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Newsletter Section
export function NewsletterSection() {
  const t = useTranslations('datenschutz.newsletter')

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
              <Mail className="h-8 w-8 text-black" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="mb-4 text-lg leading-8 text-slate-gray">{t('description')}</p>
            <p className="text-base leading-7 text-slate-gray">{t('unsubscribe')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Retention Section
export function RetentionSection() {
  const t = useTranslations('datenschutz.retention')

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
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-navy">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="text-lg leading-8 text-slate-gray">{t('description')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
export function ContactSection() {
  const t = useTranslations('datenschutz.contact')

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-accent-red">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
            <p className="mb-4 text-lg leading-8 text-slate-gray">{t('description')}</p>
            <p className="text-base text-slate-gray">{t('email')}</p>
            <p className="text-base text-slate-gray">{t('phone')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Changes Section
export function ChangesSection() {
  const t = useTranslations('datenschutz.changes')

  return (
    <section className="bg-gradient-to-br from-primary-blue to-blue-700 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl border-3 border-white/20 bg-white/10 p-8 backdrop-blur-sm lg:p-12"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-primary-gold">
            <RefreshCw className="h-8 w-8 text-black" />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white">{t('title')}</h2>
          <p className="text-lg leading-8 text-blue-100">{t('description')}</p>
        </motion.div>
      </div>
    </section>
  )
}
