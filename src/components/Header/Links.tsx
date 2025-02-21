import { siteConfig } from '@/constants'
import Link from 'next/link'
import React from 'react'

export const HeaderLinks = () => {
  return (
    <div className="flex flex-row items-center gap-6">
      {siteConfig.headerLinks.map(link => (
        <Link
          key={link.name}
          aria-label={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon && React.createElement(link.icon, { className: 'text-lg' })}
        </Link>
      ))}
    </div>
  )
}
