'use client'
import { FAQs, ROUGH_BG_COLOR } from '@/constants'
import { Accordion, AccordionItem } from '@heroui/react'
import { PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { RoughNotation } from 'react-rough-notation'

export const FAQ = () => {
  const t = useTranslations('FAQs')

  return (
    <section id="FAQ" className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white relative">
          <RoughNotation type="highlight" show color={ROUGH_BG_COLOR}>
            {t('label')}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{t('description')}</p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: 'px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50',
          title: 'font-medium',
          trigger: 'py-6',
          content: 'pt-0 pb-6 text-base text-default-500'
        }}
        items={FAQs}
        selectionMode="multiple"
        variant="splitted"
      >
        {FAQs.map(({ question, answer }) => (
          <AccordionItem key={question} indicator={<PlusIcon />} title={t(question as any)} HeadingComponent="h3">
            {t(answer as any)}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
