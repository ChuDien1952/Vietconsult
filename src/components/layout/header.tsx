'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('aboutUs'), href: `/${locale}/uber-uns` },
    { name: t('partner'), href: `/${locale}/partner-talentscare` },
    { name: t('advantages'), href: `/${locale}/vorteile` },
    { name: t('qualitySeal'), href: `/${locale}/guetezeichen` },
    { name: t('services'), href: `/${locale}/services` },
  ]

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 shadow-lg backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <Image
              src="/Logo_Vietconsult.png"
              alt="VIETconsult Logo"
              width={200}
              height={50}
              priority
              unoptimized
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md border-2 border-primary-navy p-2.5 text-primary-navy transition-colors hover:bg-primary-navy hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-bold uppercase tracking-wide text-slate-gray transition-colors hover:text-primary-navy group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
          <LanguageSwitcher />
          <Button size="default" asChild>
            <Link href={`/${locale}/kontakt`}>{t('contact')}</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t-2 border-primary-gold bg-white px-6 pb-6 pt-4">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg border-2 border-transparent px-4 py-3 text-base font-bold uppercase tracking-wide text-slate-gray transition-colors hover:border-primary-gold hover:bg-light-gray"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-4 border-t-2 border-gray-200 pt-4">
              <LanguageSwitcher />
              <Button asChild className="w-full">
                <Link href={`/${locale}/kontakt`}>{t('contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
