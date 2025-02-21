import { ROUGH_BG_COLOR, siteConfig, Testimonials } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { RoughNotation } from 'react-rough-notation'

export const Testimonial = () => {
  const t = useTranslations('Testimonials')

  return (
    <section id="Testimonials" className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]">
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white relative">
          <RoughNotation type="highlight" show color={ROUGH_BG_COLOR}>
            {t('label')}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">
          {t.rich('description', {
            x: chunks => (
              <Link
                href={siteConfig.authors[0].twitter as string}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary underline"
              >
                {chunks}
              </Link>
            )
          })}
        </p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all">
        {Testimonials.map(({ user }, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column" key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image src={user.image} alt="maker" height={40} width={40} className="w-12 h-12 rounded-full object-cover object-top" />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{user.name}</p>
                    <p className="dark:text-zinc-400">@{user.username}</p>
                  </div>
                </div>
                <Link href={`https://twitter.com/${user.username}`} target="_blank" rel="noopener noreferrer nofollow">
                  <BsTwitterX className="w-8 h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">{t(user.name as any)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
