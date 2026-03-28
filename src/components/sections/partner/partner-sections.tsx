'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Presentation,
  BookOpen,
  Users,
  Mic,
  Video,
  UserCheck,
  Award,
  HeartHandshake,
  Calendar,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('partner')

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
  const t = useTranslations('partner.intro')

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

// Services Grid Section
export function ServicesGridSection() {
  const t = useTranslations('partner.services')

  const services = [
    { name: t('service1'), icon: Presentation, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: t('service2'), icon: BookOpen, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: t('service3'), icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: t('service4'), icon: Mic, color: 'text-red-600', bgColor: 'bg-red-100' },
    { name: t('service5'), icon: Video, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    { name: t('service6'), icon: UserCheck, color: 'text-amber-600', bgColor: 'bg-amber-100' },
    { name: t('service7'), icon: Award, color: 'text-cyan-600', bgColor: 'bg-cyan-100' },
    { name: t('service8'), icon: HeartHandshake, color: 'text-pink-600', bgColor: 'bg-pink-100' },
    { name: t('service9'), icon: Calendar, color: 'text-teal-600', bgColor: 'bg-teal-100' },
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${service.bgColor}`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Collaboration Section
export function CollaborationSection() {
  const t = useTranslations('partner.collaboration')

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

// CTA Section
export function CTASection() {
  const t = useTranslations('partner.cta')

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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{t('description')}</p>

          <div className="mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary-blue hover:bg-blue-50"
              asChild
            >
              <a
                href="https://talentscare.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('button')}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
