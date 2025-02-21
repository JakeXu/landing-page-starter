import { Makers } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const SocialProof = () => {
  const t = useTranslations('SocialProof')

  return (
    <section className="flex flex-col items-center justify-center gap-20 pt-16">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center">
          {Makers.map((user, index) => {
            return (
              <Image
                key={index}
                src={user.image}
                alt="Maker"
                height={40}
                width={40}
                className="rounded-full -m-[5px] border border-white"
              />
            )
          })}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          <span className="text-primary font-semibold text-base">9999+</span> {t('label')}
        </p>
      </div>
    </section>
  )
}
