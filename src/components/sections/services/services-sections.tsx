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
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-charcoal to-primary-navy py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary-amber/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #FFBC00 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

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

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('pageTitle')}
          </h1>
          <p className="mt-4 text-xl text-gray-300">{t('pageSubtitle')}</p>
        </motion.div>
      </div>
    </section>
  )
}

// Intro Section
export function IntroSection() {
  const t = useTranslations('services.intro')

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Decorative Gold Blur */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl lg:text-5xl">
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
      link: t('recruitment.link'),
    },
    {
      title: t('training.title'),
      description: t('training.description'),
      icon: GraduationCap,
      link: t('training.link'),
    },
    {
      title: t('recognition.title'),
      description: t('recognition.description'),
      icon: FileCheck,
      link: t('recognition.link'),
    },
    {
      title: t('relocation.title'),
      description: t('relocation.description'),
      icon: Plane,
      link: t('relocation.link'),
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-charcoal via-primary-navy to-dark-charcoal py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-primary-amber/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #FFBC00 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
                <div className="group relative h-full rounded-2xl border-3 border-primary-gold/30 bg-dark-charcoal p-8 shadow-bold transition-all hover:-translate-y-2 hover:border-primary-gold hover:shadow-bold-hover">
                  {/* Icon Circle */}
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-gold border-2 border-black shadow-bold transition-all group-hover:scale-110 group-hover:rotate-12">
                    <service.icon className="h-10 w-10 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-white flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="h-6 w-6 text-primary-gold transition-all group-hover:translate-x-2" />
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-7 text-gray-400">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
