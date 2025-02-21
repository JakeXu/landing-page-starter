import { Features, ROUGH_BG_COLOR } from '@/constants'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'

export const Feature = () => {
  const t = useTranslations('Features')

  return (
    <section id="features" className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 pt-16">
      <h2 className="text-center text-white relative">
        <RoughNotation type="highlight" show color={ROUGH_BG_COLOR}>
          {t('label')}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Features.map(({ key, icon }, index) => (
          <div
            key={key}
            className={clsx('flex flex-col items-center text-center px-8 py-6 border-b', {
              'md:border-r': index === 0,
              'lg:border-r': index === 1,
              'md:border-r lg:border-r-0': index === 2,
              'lg:border-b-0 lg:border-r': index === 3,
              'md:border-b-0 md:border-r': index === 4,
              'border-b-0 border-r-0': index === 5
            })}
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {typeof icon === 'string' ? <span className="text-2xl">{icon}</span> : React.createElement(icon, { className: 'text-2xl' })}
            </div>
            <h2 className={'text-xl font-semibold mb-2'}>{t(`${key}.title` as any)}</h2>
            <p className="text-slate-700 dark:text-slate-400">{t(`${key}.description` as any)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
