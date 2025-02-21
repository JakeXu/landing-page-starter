'use client'
import { CTAButton, LineText } from '@/components'
import { OPEN_SOURCE_URL } from '@/constants'
import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export const Hero = () => {
  const params = useParams()
  const t = useTranslations('Hero')
  const sc = useTranslations('SiteConfig')

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: 'tween', // tween spring
            damping: 10, // if spring
            stiffness: 50, // if spring
            restDelta: 0.001 // if spring
          }
        }}
      >
        <section lang={params.locale as string} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          <h1>
            {t.rich('label', {
              landing: chunks => <LineText>{chunks}</LineText>
            })}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">{sc('description')}</p>
        </section>
      </motion.div>
      <CTAButton url={OPEN_SOURCE_URL} title={t('button')}></CTAButton>
    </>
  )
}
