'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, ChevronRight, Send } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('contact')

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

// Contact Form Section
export function ContactFormSection() {
  const t = useTranslations('contact.form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('namePlaceholder')}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('phonePlaceholder')}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('companyLabel')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('companyPlaceholder')}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t('messagePlaceholder')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <label className="ml-2 text-sm text-gray-600">{t('privacyLabel')}</label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  {t('submitButton')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Locations Section
export function LocationsSection() {
  const t = useTranslations('contact.locations')

  const locations = [
    {
      title: t('frankfurtTitle'),
      address: t('frankfurtAddress'),
      phone: t('frankfurtPhone'),
    },
    {
      title: t('hannoverTitle'),
      address: t('hannoverAddress'),
      phone: t('hannoverPhone'),
    },
    {
      title: t('wilhelmshavenTitle'),
      address: t('wilhelmshavenAddress'),
      phone: t('wilhelmshavenPhone'),
    },
    {
      title: t('vietnamTitle'),
      address: t('vietnamAddress'),
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
          className="mb-12 text-center"
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {locations.map((location, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-blue/10">
                    <MapPin className="h-6 w-6 text-primary-blue" />
                  </div>
                  <CardTitle className="text-lg">{location.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-gray">{location.address}</p>
                  {location.phone && (
                    <div className="flex items-center gap-2 text-sm text-slate-gray">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${location.phone}`} className="hover:text-primary-blue">
                        {location.phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Hotlines Section
export function HotlinesSection() {
  const t = useTranslations('contact.hotlines')

  return (
    <section className="bg-gradient-to-br from-primary-blue to-blue-700 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{t('subtitle')}</p>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-medium text-blue-100">{t('germanyLabel')}</div>
              <a
                href={`tel:${t('germanyPhone')}`}
                className="text-2xl font-bold text-white hover:text-blue-100"
              >
                {t('germanyPhone')}
              </a>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-medium text-blue-100">{t('vietnamLabel')}</div>
              <a
                href={`tel:${t('vietnamPhone')}`}
                className="text-2xl font-bold text-white hover:text-blue-100"
              >
                {t('vietnamPhone')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
