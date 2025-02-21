'use client'
import { HeaderLinks, LangSwitch, ThemeSwitch } from '@/components'
import { siteConfig } from '@/constants'
import { routing } from '@/i18n/routing'
import { useMemoizedFn } from 'ahooks'
import { MenuIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'

const sections = ['Features', 'Pricing', 'Testimonials', 'FAQ'] as const

export const Header = () => {
  const t = useTranslations('SiteConfig')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const params = useParams()

  const openMenu = useMemoizedFn(() => {
    setIsMenuOpen(true)
  })

  const closeMenu = useMemoizedFn(() => {
    setIsMenuOpen(false)
  })

  return (
    <header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link href="/" aria-label={t('title')} title={t('title')} className="flex items-center space-x-1 font-bold">
            <Image alt="Logo" src="/logo.svg" className="w-8 h-8" width={32} height={32} />
            <span className="text-gray-950 dark:text-gray-300 hidden md:block">{t(siteConfig.name as any)}</span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {sections.map(section => (
            <li key={section}>
              <Link
                href={`/${params.locale === routing.defaultLocale ? '' : params.locale}#${section}`}
                aria-label={t(section)}
                title={t(section)}
                className="tracking-wide transition-colors duration-200 font-normal whitespace-nowrap"
              >
                {t(section)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemeSwitch />
          <LangSwitch />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={openMenu}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page Boilerplate"
                      title="Landing Page Boilerplate"
                      className="inline-flex items-center"
                    >
                      <Image alt={siteConfig.name} src="/logo.svg" className="w-8 h-8" width={32} height={32} />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">{siteConfig.name}</span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={closeMenu}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {sections.map(section => (
                      <li key={section}>
                        <Link
                          href={`/${params.locale === routing.defaultLocale ? '' : params.locale}#${section}`}
                          aria-label={t(section)}
                          title={t(section)}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={closeMenu}
                        >
                          {t(section)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemeSwitch />
                      <LangSwitch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
