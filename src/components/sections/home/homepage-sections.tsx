'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Target, Users, TrendingUp, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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

// Team Showcase Section
export function TeamShowcaseSection() {
  const t = useTranslations('home.team')
  const locale = useLocale()

  const teamMembers = [
    {
      name: 'Alexander Schmidt',
      role: 'Managing Director Germany',
      image: '/images/team-member-1.webp',
    },
    {
      name: 'Sarah Müller',
      role: 'Head of Integration Services',
      image: '/images/team-member-2.webp',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-light-gray py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-h3 font-bold text-dark-charcoal lg:text-h2">
              {t('title') || 'Erfahrenes Team für Ihren Erfolg'}
            </h2>
            <p className="mt-6 text-body-lg text-slate-gray">
              {t('description') || 'Unser multikulturelles Team mit langjähriger Erfahrung begleitet Sie von der Bedarfsanalyse bis zur erfolgreichen Integration.'}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-gold border-2 border-black">
                  <CheckCircle className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-charcoal">Persönliche Betreuung</h3>
                  <p className="text-sm text-slate-gray">Dedizierte Ansprechpartner in Deutschland und Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-navy border-2 border-black">
                  <CheckCircle className="h-6 w-6 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-charcoal">Interkulturelle Kompetenz</h3>
                  <p className="text-sm text-slate-gray">Tiefes Verständnis beider Kulturen und Arbeitswelten</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-red border-2 border-black">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-charcoal">Langjährige Expertise</h3>
                  <p className="text-sm text-slate-gray">Über 10 Jahre Erfahrung in der internationalen Fachkräftevermittlung</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button size="lg" variant="default" asChild>
                <Link href={`/${locale}/uber-uns`}>
                  Unser Team kennenlernen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Team Members Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:translate-x-1 hover:translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 transform bg-white p-6 transition-transform duration-300 group-hover:translate-y-0 border-t-3 border-black">
                    <h3 className="font-bold text-dark-charcoal">{member.name}</h3>
                    <p className="mt-1 text-sm text-slate-gray">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
