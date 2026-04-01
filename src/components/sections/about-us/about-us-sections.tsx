'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Target,
  Eye,
  Heart,
  Shield,
  Sprout,
  CheckCircle2,
  ChevronRight,
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
  const t = useTranslations('aboutUs')

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-16 lg:py-24">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gold blur circles */}
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[350px] w-[350px] animate-pulse rounded-full bg-primary-amber/5 blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FFBC00 1px, transparent 1px), linear-gradient(90deg, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
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

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

// Intro Section
export function IntroSection() {
  const t = useTranslations('aboutUs.intro')

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
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
                src="/images/about-us/team-meeting.jpg"
                alt="VIETconsult Team Meeting"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-3 border-primary-gold" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-gray">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Mission & Vision Section
export function MissionVisionSection() {
  const tMission = useTranslations('aboutUs.mission')
  const tVision = useTranslations('aboutUs.vision')

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-[300px] w-[300px] animate-pulse rounded-full bg-primary-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Mission Card */}
          <motion.div variants={fadeInUp} className="group">
            <div className="h-full rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-navy">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark-charcoal lg:text-3xl">
                {tMission('title')}
              </h3>
              <p className="text-base leading-7 text-slate-gray">
                {tMission('description')}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeInUp} className="group">
            <div className="h-full rounded-2xl border-3 border-black bg-white p-8 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-primary-gold">
                <Eye className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark-charcoal lg:text-3xl">
                {tVision('title')}
              </h3>
              <p className="text-base leading-7 text-slate-gray">
                {tVision('description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Values Section
export function ValuesSection() {
  const t = useTranslations('aboutUs.values')

  const values = [
    {
      title: t('value1Title'),
      description: t('value1Description'),
      icon: Heart,
      bgColor: 'bg-accent-red',
    },
    {
      title: t('value2Title'),
      description: t('value2Description'),
      icon: Shield,
      bgColor: 'bg-primary-navy',
    },
    {
      title: t('value3Title'),
      description: t('value3Description'),
      icon: Sprout,
      bgColor: 'bg-primary-amber',
    },
    {
      title: t('value4Title'),
      description: t('value4Description'),
      icon: CheckCircle2,
      bgColor: 'bg-primary-gold',
    },
  ]

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-primary-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <div className="h-full rounded-2xl border-3 border-black bg-white p-6 text-center shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${value.bgColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark-charcoal">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-gray">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Why Vietnam Section
export function WhyVietnamSection() {
  const t = useTranslations('aboutUs.whyVietnam')

  const reasons = [
    t('reason1'),
    t('reason2'),
    t('reason3'),
    t('reason4'),
    t('reason5'),
    t('reason6'),
  ]

  return (
    <section className="bg-gradient-to-br from-primary-red/5 to-white py-16 lg:py-24">
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
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary-red" />
                <p className="text-base text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
