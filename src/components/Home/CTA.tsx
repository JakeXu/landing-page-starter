import { CTAButton } from '@/components'
import { OPEN_SOURCE_URL, ROUGH_BOX_COLOR } from '@/constants'
import { useTranslations } from 'next-intl'
import { RoughNotation } from 'react-rough-notation'

export const CTA = () => {
  const t = useTranslations('CTA')

  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12 relative">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{t('label')}</h2>
        <p className="text-large text-default-500">
          {t.rich('description', {
            build: chunks => (
              <RoughNotation type="box" show color={ROUGH_BOX_COLOR}>
                {chunks}
              </RoughNotation>
            ),
            show: chunks => (
              <RoughNotation type="box" show color={ROUGH_BOX_COLOR}>
                {chunks}
              </RoughNotation>
            ),
            start: chunks => (
              <RoughNotation type="box" show color={ROUGH_BOX_COLOR}>
                {chunks}
              </RoughNotation>
            )
          })}
        </p>
      </div>
      <CTAButton url={OPEN_SOURCE_URL} title={t('button')}></CTAButton>
    </section>
  )
}
