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

          <Award className="mx-auto mb-6 h-16 w-16 text-white" />
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
          <Shield className="mx-auto mb-6 h-12 w-12 text-primary-blue" />
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

// Standards Section
export function StandardsSection() {
  const t = useTranslations('qualitySeal.standards')

  const standards = [
    {
      title: t('standard1Title'),
      description: t('standard1Description'),
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: t('standard2Title'),
      description: t('standard2Description'),
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: t('standard3Title'),
      description: t('standard3Description'),
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: t('standard4Title'),
      description: t('standard4Description'),
      icon: FileText,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      title: t('standard5Title'),
      description: t('standard5Description'),
      icon: CheckCircle2,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
    },
    {
      title: t('standard6Title'),
      description: t('standard6Description'),
      icon: MessageSquare,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {standards.map((standard, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${standard.bgColor}`}
                  >
                    <standard.icon className={`h-8 w-8 ${standard.color}`} />
                  </div>
                  <CardTitle className="text-xl">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-slate-gray">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
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
          <div className="rounded-2xl border-l-4 border-primary-blue bg-blue-50 p-8 lg:p-12">
            <CheckCircle2 className="mb-6 h-12 w-12 text-primary-blue" />
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
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
    <section className="bg-gradient-to-br from-primary-blue to-blue-700 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <MessageSquare className="mx-auto mb-6 h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{t('description')}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary-blue hover:bg-blue-50"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('downloadLabel')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
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
