import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Vietconsult' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

export default withNextIntl(nextConfig)
