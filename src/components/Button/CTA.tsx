import { Button } from '@/components'
import { RocketIcon } from 'lucide-react'
import Link from 'next/link'

export interface Props {
  url: string
  title: string
}

export const CTAButton = ({ url, title }: Props) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer nofollow">
      <Button variant="default" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white" aria-label="Get Boilerplate">
        <RocketIcon />
        {title}
      </Button>
    </Link>
  )
}
