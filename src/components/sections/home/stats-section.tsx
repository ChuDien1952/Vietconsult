'use client'

import { useEffect, useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { Users, Building2, Award, Globe } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref} className="text-5xl font-bold text-primary-gold lg:text-6xl">
      {prefix}
      {count.toLocaleString('de-DE')}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const t = useTranslations('home.stats')

  const stats = [
    {
      icon: Users,
      value: 1200,
      suffix: '+',
      label: t('stat1Label') || 'Erfolgreiche Vermittlungen',
      description: t('stat1Description') || 'Qualifizierte Fachkräfte nach Deutschland',
    },
    {
      icon: Building2,
      value: 150,
      suffix: '+',
      label: t('stat2Label') || 'Partnerunternehmen',
      description: t('stat2Description') || 'Zufriedene Arbeitgeber in Deutschland',
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: t('stat3Label') || 'Erfolgsquote',
      description: t('stat3Description') || 'Langfristige Integration & Zufriedenheit',
    },
    {
      icon: Globe,
      value: 15,
      suffix: '+',
      label: t('stat4Label') || 'Jahre Erfahrung',
      description: t('stat4Description') || 'Expertise in internationaler Rekrutierung',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-dark-charcoal to-primary-navy py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/modern-office.webp"
          alt="Modern Office Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-dark-charcoal/95 to-primary-navy/90" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(#FFBC00 1px, transparent 1px), linear-gradient(90deg, #FFBC00 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary-gold/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-primary-amber/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h3 font-bold tracking-tight text-white lg:text-h2">
            {t('title') || 'Unsere Erfolge in Zahlen'}
          </h2>
          <p className="mt-6 text-body-lg text-gray-300">
            {t('subtitle') ||
              'Über 15 Jahre Erfahrung in der erfolgreichen Vermittlung von Fachkräften'}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border-3 border-primary-gold/30 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-primary-gold hover:bg-white/10 hover:shadow-bold"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-gold/20 border-2 border-primary-gold transition-transform group-hover:scale-110 group-hover:rotate-6">
                <stat.icon className="h-8 w-8 text-primary-gold" />
              </div>

              {/* Counter */}
              <div className="mb-2">
                <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>

              {/* Label */}
              <h3 className="mb-2 text-xl font-bold text-white">{stat.label}</h3>

              {/* Description */}
              <p className="text-sm text-gray-300">{stat.description}</p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-gold to-primary-amber transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300">
            {t('cta') || 'Werden Sie Teil unserer Erfolgsgeschichte'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
