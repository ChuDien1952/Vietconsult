'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Building, FileText, Phone, MapPin, CreditCard, Shield, ChevronRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('impressum')

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

// Company Information Section
export function CompanySection() {
  const t = useTranslations('impressum')

  const sections = [
    {
      icon: Building,
      title: t('company.title'),
      items: [
        t('company.name'),
        t('company.address'),
        t('company.city'),
        t('company.country'),
      ],
    },
    {
      icon: FileText,
      title: t('registration.title'),
      items: [
        t('registration.court'),
        t('registration.number'),
        t('registration.vatId'),
      ],
    },
    {
      icon: Phone,
      title: t('contact.title'),
      items: [
        t('contact.phone'),
        t('contact.fax'),
        t('contact.mobile'),
        t('contact.email'),
      ],
    },
    {
      icon: MapPin,
      title: t('representative.title'),
      items: [
        t('representative.name'),
        t('representative.address'),
      ],
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
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-base text-slate-gray">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Branch Offices Section
export function BranchesSection() {
  const t = useTranslations('impressum.branches')

  const branches = [
    {
      name: 'Hannover',
      address: t('hannover'),
    },
    {
      name: 'Frankfurt',
      address: t('frankfurt'),
    },
    {
      name: 'NordWest',
      address: t('nordwest'),
    },
  ]

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
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {branches.map((branch, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="rounded-2xl border-3 border-black bg-white p-6 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark-charcoal">{branch.name}</h3>
                <p className="text-sm text-slate-gray">{branch.address}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Bank Details Section
export function BankSection() {
  const t = useTranslations('impressum.bank')

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(32,44,88,0.02)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl border-3 border-black bg-primary-gold/5 p-8 shadow-bold lg:p-12"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
            <CreditCard className="h-8 w-8 text-black" />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-dark-charcoal">{t('title')}</h2>
          <div className="space-y-3">
            <p className="text-lg text-slate-gray">{t('name')}</p>
            <p className="text-lg font-semibold text-dark-charcoal">{t('iban')}</p>
            <p className="text-lg font-semibold text-dark-charcoal">{t('bic')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Liability Disclaimer Section
export function LiabilitySection() {
  const t = useTranslations('impressum.liability')

  const sections = [
    {
      title: t('content.title'),
      description: t('content.description'),
    },
    {
      title: t('links.title'),
      description: t('links.description'),
    },
    {
      title: t('copyright.title'),
      description: t('copyright.description'),
    },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Decorative Gold Blur */}
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-3 border-black bg-primary-gold">
            <Shield className="h-10 w-10 text-black" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold">
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

// Dispute Resolution Section
export function DisputeSection() {
  const t = useTranslations('impressum.dispute')

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
          <h2 className="mb-6 text-3xl font-bold text-white">{t('title')}</h2>
          <p className="text-lg leading-8 text-blue-100">{t('description')}</p>
        </motion.div>
      </div>
    </section>
  )
}
