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
    <section className="relative overflow-hidden bg-gradient-dark py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary-amber/10 blur-3xl animate-pulse" />

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
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

      {/* Decorative Gold Blur */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-dark-charcoal lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
          </div>

          <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-dark-charcoal">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('namePlaceholder')}
                    className="mt-2 block w-full rounded-lg border-2 border-black px-4 py-3 transition-all duration-300 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t('emailPlaceholder')}
                    className="mt-2 block w-full rounded-lg border-2 border-black px-4 py-3 transition-all duration-300 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-dark-charcoal">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    placeholder={t('phonePlaceholder')}
                    className="mt-2 block w-full rounded-lg border-2 border-black px-4 py-3 transition-all duration-300 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal">
                    {t('companyLabel')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('companyPlaceholder')}
                    className="mt-2 block w-full rounded-lg border-2 border-black px-4 py-3 transition-all duration-300 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-charcoal">
                  {t('messageLabel')}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={t('messagePlaceholder')}
                  className="mt-2 block w-full rounded-lg border-2 border-black px-4 py-3 transition-all duration-300 focus:border-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold/20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-2 border-black text-primary-gold focus:ring-primary-gold"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                />
                <label className="ml-3 text-sm text-slate-gray">{t('privacyLabel')}</label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                {t('submitButton')}
              </Button>
            </form>
          </div>
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
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.2977144847976!2d8.709901476892573!3d50.17431097152564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f1c5c8e1b1b%3A0x1c8e1b1b1c8e1b1b!2sJulius-Brecht-Stra%C3%9Fe%203%2C%2060433%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s',
    },
    {
      title: t('hannoverTitle'),
      address: t('hannoverAddress'),
      phone: t('hannoverPhone'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.7044884891806!2d9.814451276943892!3d52.33445947200949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b6c5c8e1b1b%3A0x1c8e1b1b1c8e1b1b!2sGrosser%20Hillen%2022%2C%2030559%20Hannover%2C%20Germany!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s',
    },
    {
      title: t('wilhelmshavenTitle'),
      address: t('wilhelmshavenAddress'),
      phone: t('wilhelmshavenPhone'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.8044884891806!2d8.114451276943892!3d53.51445947200949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6c8e1b1b1c8e1%3A0x1c8e1b1b1c8e1b1b!2sAm%20Priel%209%2C%2026388%20Wilhelmshaven%2C%20Germany!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s',
    },
    {
      title: t('vietnamTitle'),
      address: t('vietnamAddress'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4890707475446!2d106.70024631476882!3d10.776889992320164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x5a981a5d4c4e1b1b!2s72%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s',
    },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,188,0,0.02)_1px,_transparent_0)] [background-size:40px_40px]" />

      {/* Decorative Gold Blur */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

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
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {locations.map((location, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="group h-full rounded-2xl border-3 border-black bg-white overflow-hidden shadow-bold transition-all duration-300 hover:shadow-bold-hover">
                {/* Google Map Embed */}
                <div className="relative h-64 w-full overflow-hidden">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>

                {/* Location Info */}
                <div className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-primary-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="h-7 w-7 text-black" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-dark-charcoal">{location.title}</h3>
                  <p className="mb-3 text-sm text-slate-gray">{location.address}</p>
                  {location.phone && (
                    <div className="flex items-center gap-2 text-sm text-slate-gray">
                      <Phone className="h-4 w-4" />
                      <a
                        href={`tel:${location.phone}`}
                        className="transition-colors duration-300 hover:text-primary-gold"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
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
