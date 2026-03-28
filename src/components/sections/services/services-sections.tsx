'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, GraduationCap, FileCheck, Plane, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Page Header
export function PageHeader() {
  const t = useTranslations('services')

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
  const t = useTranslations('services.intro')

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
  const t = useTranslations('services')

  const services = [
    {
      title: t('recruitment.title'),
      description: t('recruitment.description'),
      icon: Search,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      link: t('recruitment.link'),
    },
    {
      title: t('training.title'),
      description: t('training.description'),
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      link: t('training.link'),
    },
    {
      title: t('recognition.title'),
      description: t('recognition.description'),
      icon: FileCheck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      link: t('recognition.link'),
    },
    {
      title: t('relocation.title'),
      description: t('relocation.description'),
      icon: Plane,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      link: t('relocation.link'),
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link href={service.link}>
                <Card className="group h-full transition-all hover:shadow-xl hover:border-primary-blue">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${service.bgColor} transition-transform group-hover:scale-110`}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-all group-hover:text-primary-blue group-hover:translate-x-1" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-slate-gray">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
