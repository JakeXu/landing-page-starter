import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar', 'en', 'es', 'ja', 'ru', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: {
    mode: 'as-needed'
  }
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
