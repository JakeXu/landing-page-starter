// import { routing } from './src/i18n/routing.ts'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://landing.pinnasky.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const locales = process.env.NEXT_PUBLIC_I18N_LOCALES.split(',')
    return locales.map(locale => ({
      loc: `/${locale}`,
      lastmod: new Date().toISOString(),
      priority: 0.7
    }))
  }
}
