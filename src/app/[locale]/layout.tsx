import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '../globals.css'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL('https://chudien1952.github.io/Vietconsult'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'VIETconsult' }],
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : locale === 'en' ? 'en_US' : 'vi_VN',
      url: 'https://chudien1952.github.io/Vietconsult',
      siteName: 'VIETconsult',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://chudien1952.github.io/Vietconsult',
      languages: {
        de: '/de',
        en: '/en',
        vi: '/vi',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Get messages for the locale
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
