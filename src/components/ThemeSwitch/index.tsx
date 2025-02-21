'use client'
import Moon from '@/components/Icons/Moon'
import Sun from '@/components/Icons/Sun'
import { useMemoizedFn } from 'ahooks'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = useMemoizedFn(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {theme !== 'dark' ? <Moon /> : <Sun />}
    </div>
  )
}
