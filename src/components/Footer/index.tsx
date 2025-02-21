import { FooterLinks, FooterProducts, LangLinks } from '@/components'
import { siteConfig } from '@/constants'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { authors } = siteConfig

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <FooterLinks />
        <FooterProducts />
        <LangLinks />
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{' '}
          <Link href={authors[0].twitter || authors[0].url} target="_blank">
            {authors[0].name}
          </Link>{' '}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
