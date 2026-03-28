'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Target, Users, TrendingUp, Clock, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Vision Section
export function VisionSection() {
  const t = useTranslations('home.vision')

  return (
    <section className="bg-white py-16 lg:py-24">
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-blue/10">
                  <Target className="h-6 w-6 text-primary-blue" />
                </div>
                <CardTitle>{t('card1Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-gray">{t('card1Description')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-red/10">
                  <Users className="h-6 w-6 text-primary-red" />
                </div>
                <CardTitle>{t('card2Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-gray">{t('card2Description')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-gold/10">
                  <Award className="h-6 w-6 text-primary-gold" />
                </div>
                <CardTitle>{t('card3Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-gray">{t('card3Description')}</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Overview Section
export function ServicesOverviewSection() {
  const t = useTranslations('home.services')
  const locale = useLocale()

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
          <p className="mt-4 text-lg text-blue-100">{t('subtitle')}</p>
          <p className="mt-6 text-base text-blue-50">{t('description')}</p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-blue"
              asChild
            >
              <Link href={`/${locale}/services`}>{t('cta')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Benefits Section
export function BenefitsSection() {
  const t = useTranslations('home.benefits')

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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('card1Title')}</h3>
              <p className="mt-2 text-sm text-slate-gray">{t('card1Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <TrendingUp className="h-8 w-8 text-primary-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('card2Title')}</h3>
              <p className="mt-2 text-sm text-slate-gray">{t('card2Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('card3Title')}</h3>
              <p className="mt-2 text-sm text-slate-gray">{t('card3Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('card4Title')}</h3>
              <p className="mt-2 text-sm text-slate-gray">{t('card4Description')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
