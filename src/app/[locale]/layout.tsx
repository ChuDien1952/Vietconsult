import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '../globals.css'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
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
