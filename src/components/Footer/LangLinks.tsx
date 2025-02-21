import { localeNames } from '@/constants'
import Link from 'next/link'

export const LangLinks = () => {
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {Object.keys(localeNames).map((key: string) => {
        const { icon, name } = localeNames[key]
        return (
          <span key={key}>
            <Link href={`/${key}`}>
              {icon} {name}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
