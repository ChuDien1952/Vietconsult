'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Award,
  Shield,
  Globe,
  FileText,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Download,
  Mail,
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
  const t = useTranslations('qualitySeal')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-charcoal to-primary-navy py-16 lg:py-24">
      {/* Geometric Background */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-warm-amber/10 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-0 h-96 w-96 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFBC00" d="M40,-50C50,-40,55,-25,58,-10C60,5,60,20,55,32C50,45,40,55,28,58C15,60,5,55,-8,52C-20,50,-35,48,-45,40C-55,32,-60,20,-62,5C-65,-10,-65,-25,-58,-38C-50,-50,-35,-60,-18,-62C-2,-65,15,-60,30,-52Z" transform="translate(100 100)" />
        </svg>
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

          <Award className="mx-auto mb-6 h-16 w-16 text-primary-gold" />
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
  const t = useTranslations('qualitySeal.intro')

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
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-3 border-black bg-primary-gold/10">
            <Shield className="h-10 w-10 text-primary-gold" />
          </div>
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

// Standards Section
export function StandardsSection() {
  const t = useTranslations('qualitySeal.standards')

  const standards = [
    {
      title: t('standard1Title'),
      description: t('standard1Description'),
      icon: Globe,
      bgColor: 'bg-primary-gold',
    },
    {
      title: t('standard2Title'),
      description: t('standard2Description'),
      icon: Shield,
      bgColor: 'bg-primary-navy',
    },
    {
      title: t('standard3Title'),
      description: t('standard3Description'),
      icon: Award,
      bgColor: 'bg-warm-amber',
    },
    {
      title: t('standard4Title'),
      description: t('standard4Description'),
      icon: FileText,
      bgColor: 'bg-accent-red',
    },
    {
      title: t('standard5Title'),
      description: t('standard5Description'),
      icon: CheckCircle2,
      bgColor: 'bg-primary-gold',
    },
    {
      title: t('standard6Title'),
      description: t('standard6Description'),
      icon: MessageSquare,
      bgColor: 'bg-primary-navy',
    },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-dark-charcoal sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="h-full rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${standard.bgColor}`}>
                  <standard.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark-charcoal">
                  {standard.title}
                </h3>
                <p className="text-base leading-7 text-slate-gray">
                  {standard.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Compliance Section
export function ComplianceSection() {
  const t = useTranslations('qualitySeal.compliance')

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
          <div className="group rounded-2xl border-3 border-black bg-primary-gold/5 p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover lg:p-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-dark-charcoal sm:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-gray">
              {t('description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Complaint Section
export function ComplaintSection() {
  const t = useTranslations('qualitySeal.complaint')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-charcoal to-primary-navy py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-gold/10 blur-3xl animate-pulse" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-warm-amber/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-3 border-black bg-primary-gold shadow-bold">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300">{t('description')}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              {t('downloadLabel')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-dark-charcoal"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('contactLabel')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
