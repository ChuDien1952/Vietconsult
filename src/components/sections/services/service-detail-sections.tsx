'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  Users,
  CheckCircle,
  Target,
  BookOpen,
  Globe,
  Award,
  Plane,
  Home,
  Heart,
  Briefcase,
  GraduationCap,
  FileCheck,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

// Service Detail Hero Section
export function ServiceDetailHero({ serviceKey }: { serviceKey: string }) {
  const t = useTranslations(`services.${serviceKey}`)

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 lg:py-32">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[350px] w-[350px] animate-pulse rounded-full bg-primary-amber/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FFBC00 1px, transparent 1px), linear-gradient(90deg, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
            <Link href="/" className="hover:text-primary-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-primary-gold transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-gold">{t('title')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">{t('subtitle')}</p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                {t('ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">{t('ctaSecondaryButton')}</Link>
            </Button>
          </div>
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

// Process Timeline Section
export function ProcessTimeline({ serviceKey }: { serviceKey: string }) {
  const t = useTranslations(`services.${serviceKey}.process`)

  const steps = [
    { icon: Search, key: 'step1' },
    { icon: Users, key: 'step2' },
    { icon: CheckCircle, key: 'step3' },
    { icon: Target, key: 'step4' },
  ]

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-primary-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
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
          className="mx-auto mt-16 max-w-5xl"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              variants={fadeInUp}
              className="group relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Step number badge */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-black bg-primary-gold text-2xl font-bold text-black shadow-bold transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 rounded-2xl border-3 border-black bg-white p-6 shadow-bold transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-bold-hover lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-primary-navy">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-dark-charcoal lg:text-2xl">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-gray">
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="ml-8 mt-4 h-12 w-0.5 bg-gradient-to-b from-primary-gold to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Image Showcase Section
export function ImageShowcase({ serviceKey }: { serviceKey: string }) {
  const imageMap: { [key: string]: { src: string; alt: string } } = {
    recruitment: {
      src: '/images/recruitment/recruitment-hero.jpg',
      alt: 'Professional Recruitment Process',
    },
    languageTraining: {
      src: '/images/training/language-training.png',
      alt: 'Language Training Session',
    },
    recognition: {
      src: '/images/services/healthcare-professional.webp',
      alt: 'Professional Recognition Process',
    },
    relocation: {
      src: '/images/services/integration-support.webp',
      alt: 'Relocation and Integration Support',
    },
  }

  const imageData = imageMap[serviceKey]

  if (!imageData) return null

  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border-3 border-black shadow-bold"
        >
          <Image
            src={imageData.src}
            alt={imageData.alt}
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
          />
          {/* Decorative gold border overlay */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-3 border-primary-gold" />
        </motion.div>
      </div>
    </section>
  )
}

// Key Features Section
export function KeyFeatures({ serviceKey }: { serviceKey: string }) {
  const t = useTranslations(`services.${serviceKey}.features`)

  const features = [
    { icon: CheckCircle, key: 'feature1', color: 'bg-primary-gold' },
    { icon: Heart, key: 'feature2', color: 'bg-accent-red' },
    { icon: Globe, key: 'feature3', color: 'bg-primary-navy' },
    { icon: Award, key: 'feature4', color: 'bg-primary-amber' },
    { icon: Users, key: 'feature5', color: 'bg-primary-gold' },
    { icon: Target, key: 'feature6', color: 'bg-accent-red' },
  ]

  return (
    <section className="relative bg-light-gray py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-primary-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.key} variants={fadeInUp} className="group">
              <div className="h-full rounded-2xl border-3 border-black bg-white p-6 shadow-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-bold-hover">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${feature.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark-charcoal">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-gray">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
export function ServiceCTA({ serviceKey }: { serviceKey: string }) {
  const t = useTranslations(`services.${serviceKey}.cta`)

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[350px] w-[350px] animate-pulse rounded-full bg-primary-amber/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-[250px] w-[250px] animate-pulse rounded-full bg-primary-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">{t('subtitle')}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="xl" asChild>
              <Link href="/kontakt">
                {t('button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/services">{t('buttonSecondary')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
