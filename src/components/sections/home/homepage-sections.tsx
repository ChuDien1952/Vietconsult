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
    <section className="bg-light-gray py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
              <CardHeader>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-navy">
                  <Target className="h-8 w-8 text-primary-gold" />
                </div>
                <CardTitle className="text-xl text-dark-charcoal">{t('card1Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-gray">{t('card1Description')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
              <CardHeader>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-red">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-dark-charcoal">{t('card2Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-gray">{t('card2Description')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
              <CardHeader>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-gold">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl text-dark-charcoal">{t('card3Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-gray">{t('card3Description')}</p>
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
    <section className="relative overflow-hidden bg-gradient-dark py-20 lg:py-32">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-amber blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-white lg:text-h2">
            {t('title')}
          </h2>
          <p className="mt-6 text-body-lg text-gray-300">{t('subtitle')}</p>
          <p className="mt-4 text-body text-gray-400">{t('description')}</p>
          <div className="mt-12">
            <Button
              size="xl"
              variant="default"
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
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          <p className="mt-6 text-body-lg text-slate-gray">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <div className="group text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-navy border-3 border-black shadow-bold group-hover:shadow-bold-hover group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <Clock className="h-10 w-10 text-primary-gold" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal">{t('card1Title')}</h3>
              <p className="mt-3 text-base text-slate-gray">{t('card1Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="group text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-gold border-3 border-black shadow-bold group-hover:shadow-bold-hover group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <TrendingUp className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal">{t('card2Title')}</h3>
              <p className="mt-3 text-base text-slate-gray">{t('card2Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="group text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-amber border-3 border-black shadow-bold group-hover:shadow-bold-hover group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <Users className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal">{t('card3Title')}</h3>
              <p className="mt-3 text-base text-slate-gray">{t('card3Description')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="group text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-red border-3 border-black shadow-bold group-hover:shadow-bold-hover group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal">{t('card4Title')}</h3>
              <p className="mt-3 text-base text-slate-gray">{t('card4Description')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
