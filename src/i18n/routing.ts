import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: process.env.NEXT_PUBLIC_I18N_LOCALES!.split(','),
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: {
    mode: 'as-needed'
  },
  localeCookie: {
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365
  }
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
