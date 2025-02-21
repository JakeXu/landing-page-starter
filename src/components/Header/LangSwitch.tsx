'use client'
import { localeNames } from '@/constants'
import { routing } from '@/i18n/routing'
import { Select, SelectItem } from '@heroui/react'
import { SharedSelection } from '@heroui/system'
import { useMemoizedFn } from 'ahooks'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export function LangSwitch() {
  const router = useRouter()
  const { locale = routing.defaultLocale } = useParams<{ locale: string }>()
  const [value, setValue] = useState(new Set([locale]))

  const onSelectionChange = useMemoizedFn((item: SharedSelection) => {
    setValue(new Set([item.currentKey!]))
    router.push(`/${item.currentKey}`, { scroll: true })
  })

  return (
    <Select
      className="w-fit min-w-36"
      aria-label="Lang Switch"
      selectedKeys={value}
      onSelectionChange={onSelectionChange}
      renderValue={items => {
        const { key } = items[0]!
        const { icon, name } = localeNames[key as string]

        return (
          <>
            <span className="mr-2">{icon}</span>
            {name}
          </>
        )
      }}
    >
      {Object.keys(localeNames).map((key: string) => {
        const { icon, name } = localeNames[key]

        return (
          <SelectItem className="cursor-pointer" key={key} value={key} startContent={icon}>
            {name}
          </SelectItem>
        )
      })}
    </Select>
  )
}
