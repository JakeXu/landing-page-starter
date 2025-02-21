import type { ButtonProps } from '@heroui/react'
import { IconType } from 'react-icons'

export type Locale = {
  icon: string
  name: string
}

export type Feature = {
  key: string
  title?: string
  description?: string
  icon: IconType | string
}

export type AuthorsConfig = {
  name: string
  url: string
  twitter?: string
}

export type ProductLink = {
  url: string
  name: string
}

export type Link = {
  name: string
  href: string
  icon: IconType
}

export type ThemeColor = {
  media: string
  color: string
}

export type Home = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: AuthorsConfig[]
  creator: string
  openSourceURL?: string
  ogImage: string
  headerLinks: Link[]
  footerLinks: Link[]
  footerProducts: ProductLink[]
  metadataBase: URL | string
  themeColors?: string | ThemeColor[]
  nextThemeColor?: string
  icons: {
    icon: string
    shortcut?: string
    apple?: string
  }
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
    images?: string[]
  }
  twitter: {
    card: string
    site: string
    title: string
    description: string
    images?: string[]
    creator: string
  }
}

export enum TiersEnum {
  Free = 'free',
  Customize = 'customize'
}

export type Tier = {
  key: TiersEnum
  title?: string
  price?: string
  priceSuffix?: string
  href: string
  description?: string
  mostPopular?: boolean
  featured?: boolean
  features: string[]
  buttonText?: string
  buttonColor?: ButtonProps['color']
  buttonVariant: ButtonProps['variant']
}

export type User = {
  name: string
  username: string
  image: string
}

export type Testimonial = {
  user: User
  content: string
}

export type FAQ = {
  question: string
  answer: string
}
