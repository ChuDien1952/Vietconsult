'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-charcoal to-primary-navy py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-gold">{t('breadcrumb')}</span>
          </div>

          <h1 className="text-h2 font-bold tracking-tight text-white lg:text-h1">
            {t('pageTitle')}
          </h1>
          <p className="mt-6 text-body-lg text-gray-300 lg:text-xl">{t('pageSubtitle')}</p>
        </motion.div>
      </div>
    </section>
  )
}

// Intro Section
export function IntroSection() {
  const t = useTranslations('partner.intro')

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,188,0,0.03)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl border-3 border-black shadow-bold">
              <Image
                src="/images/partner/training-seminar.png"
                alt="talentsCARE Training and Seminar"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-3 border-primary-gold" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
              {t('title')}
            </h2>
            <p className="mt-6 text-body-lg leading-8 text-slate-gray lg:text-xl">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Grid Section
export function ServicesGridSection() {
  const t = useTranslations('partner.services')

  const services = [
    { name: t('service1'), icon: Presentation, iconColor: 'text-primary-gold', iconBg: 'bg-primary-gold' },
    { name: t('service2'), icon: BookOpen, iconColor: 'text-primary-navy', iconBg: 'bg-primary-navy' },
    { name: t('service3'), icon: Users, iconColor: 'text-primary-amber', iconBg: 'bg-primary-amber' },
    { name: t('service4'), icon: Mic, iconColor: 'text-primary-red', iconBg: 'bg-primary-red' },
    { name: t('service5'), icon: Video, iconColor: 'text-primary-gold', iconBg: 'bg-primary-gold' },
    { name: t('service6'), icon: UserCheck, iconColor: 'text-primary-navy', iconBg: 'bg-primary-navy' },
    { name: t('service7'), icon: Award, iconColor: 'text-primary-amber', iconBg: 'bg-primary-amber' },
    { name: t('service8'), icon: HeartHandshake, iconColor: 'text-primary-red', iconBg: 'bg-primary-red' },
    { name: t('service9'), icon: Calendar, iconColor: 'text-primary-gold', iconBg: 'bg-primary-gold' },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(32,44,88,0.03)_0%,_transparent_50%)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

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
          <p className="mt-6 text-body-lg text-slate-gray lg:text-xl">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group h-full overflow-hidden border-3 border-black bg-white shadow-bold text-center transition-all hover:shadow-bold-hover hover:-translate-y-2">
                <CardHeader className="space-y-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-white shadow-bold">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${service.iconBg} transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-dark-charcoal">
                    {service.name}
                  </CardTitle>
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
    <section className="relative bg-light-gray py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(32,44,88,0.02)_0%,_transparent_50%)]" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-primary-gold/5 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-gray">
              {t('description')}
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-3 border-black shadow-bold">
              <Image
                src="/images/partner/collaboration-work.webp"
                alt="Collaboration with talentsCARE"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-3 border-primary-gold" />
          </motion.div>
        </div>
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
