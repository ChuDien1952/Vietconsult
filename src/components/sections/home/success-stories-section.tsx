'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

export function SuccessStoriesSection() {
  const t = useTranslations('home.successStories')

  const stories = [
    {
      name: 'Maria Nguyen',
      role: 'Krankenpflegerin',
      company: 'Universitätsklinikum Frankfurt',
      image: '/images/team-member-2.webp',
      quote:
        t('story1Quote') ||
        'VIETconsult hat mir nicht nur einen Job vermittelt, sondern mir geholfen, mich in Deutschland wirklich zu Hause zu fühlen. Die Begleitung war durchweg professionell und persönlich.',
      flag: '🇻🇳',
    },
    {
      name: 'Thomas Schmidt',
      role: 'HR Director',
      company: 'TechCorp GmbH',
      image: '/images/team-member-1.webp',
      quote:
        t('story2Quote') ||
        'Die Zusammenarbeit mit VIETconsult ist hervorragend. Die vermittelten Fachkräfte sind top qualifiziert und perfekt vorbereitet. Ein echter Mehrwert für unser Unternehmen.',
      flag: '🇩🇪',
    },
    {
      name: 'Dr. Minh Tran',
      role: 'Software Engineer',
      company: 'Digital Solutions AG',
      image: '/images/professional-worker.webp',
      quote:
        t('story3Quote') ||
        'Der gesamte Prozess war transparent und gut organisiert. Von der Sprachschule in Vietnam bis zur Integration in Deutschland - VIETconsult war immer an meiner Seite.',
      flag: '🇻🇳',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-light-gray py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #202C58 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -right-32 top-32 h-64 w-64 rounded-full bg-primary-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
          <h2 className="text-h3 font-bold tracking-tight text-dark-charcoal lg:text-h2">
            {t('title') || 'Erfolgsgeschichten'}
          </h2>
          <p className="mt-6 text-body-lg text-slate-gray">
            {t('subtitle') ||
              'Was unsere Kandidaten und Partner über uns sagen'}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group h-full overflow-hidden border-3 border-black shadow-bold transition-all hover:shadow-bold-hover hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-gold/20 border-2 border-primary-gold transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <Quote className="h-8 w-8 text-primary-gold" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-6 text-base italic text-slate-gray">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t-2 border-primary-gold/20 pt-6">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary-gold">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-dark-charcoal">{story.name}</p>
                        <span className="text-xl">{story.flag}</span>
                      </div>
                      <p className="text-sm text-slate-gray">{story.role}</p>
                      <p className="text-xs text-primary-navy">{story.company}</p>
                    </div>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-gold via-primary-amber to-primary-gold transition-all duration-500 group-hover:w-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-dark-charcoal">
            {t('cta') || 'Über 1.200 erfolgreiche Vermittlungen seit 2008'}
          </p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-primary-navy"
                />
              ))}
            </div>
            <span className="ml-4 text-sm text-slate-gray">
              {t('moreStories') || '+1.200 zufriedene Kandidaten'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
