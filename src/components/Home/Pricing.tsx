'use client'
import { ROUGH_BG_COLOR, siteConfig, Tiers } from '@/constants'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, Spacer } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { FaCheck } from 'react-icons/fa'
import { RoughNotation } from 'react-rough-notation'

export const Pricing = () => {
  const t = useTranslations('Pricing')

  return (
    <section id="Pricing" className="flex flex-col justify-center max-w-4xl items-center pt-16">
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white relative">
          <RoughNotation type="highlight" show color={ROUGH_BG_COLOR}>
            {t('label')}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight mt-2">{t('title')}</h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{t('description')}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center">
        {Tiers.map(({ key, features, price, buttonColor, buttonVariant, href }) => (
          <Card key={key} className="p-3 flex-1 w-[90%]" shadow="md">
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{t(`${key}.title` as any)}</h2>
              <p className="text-medium text-default-500">{t(`${key}.description` as any)}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                  {t(`${key}.price` as any)}
                </span>
                {typeof price !== 'string' ? <span className="text-small font-medium text-default-400">{price}</span> : null}
              </p>
              <ul className="flex flex-col gap-2">
                {features?.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
                    <p className="text-default-500">{t(`${key}.features.${feature}` as any)}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={buttonColor}
                href={href}
                variant={buttonVariant}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t(`${key}.buttonText` as any)}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {t('doYouLike')}&nbsp;
          <Link color="foreground" href={siteConfig.authors[0].twitter} underline="always" rel="noopener noreferrer nofollow">
            {t('follow')}
          </Link>
        </p>
      </div>
    </section>
  )
}
