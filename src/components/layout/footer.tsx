import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const locale = useLocale()

  const companyLinks = [
    { name: tNav('services'), href: `/${locale}/services` },
    { name: tNav('qualitySeal'), href: `/${locale}/guetezeichen` },
    { name: tNav('contact'), href: `/${locale}/kontakt` },
  ]

  const informationLinks = [
    { name: tNav('aboutUs'), href: `/${locale}/uber-uns` },
    { name: tNav('partner'), href: `/${locale}/partner-talentscare` },
    { name: tNav('advantages'), href: `/${locale}/vorteile` },
  ]

  const legalLinks = [
    { name: t('imprint'), href: `/${locale}/impressum` },
    { name: t('privacy'), href: `/${locale}/datenschutz` },
  ]

  return (
    <footer className="bg-dark-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">VIETconsult</h3>
            <p className="text-sm leading-6">
              {t('description')}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">
              {t('information')}
            </h4>
            <ul className="space-y-3">
              {informationLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">
              {t('contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-medium text-white">Frankfurt (HQ)</p>
                <p>Julius-Brecht-Str. 3</p>
                <p>60433 Frankfurt am Main</p>
              </li>
              <li>
                <p className="font-medium text-white">Tel:</p>
                <a
                  href="tel:+496987007468"
                  className="transition-colors hover:text-white"
                >
                  +49 69 8700746-80
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">{t('copyright')}</p>
            <div className="flex gap-6">
              {legalLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
