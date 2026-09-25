'use client'

import { ReactNode } from 'react'
import { I18nProvider } from '@/lib/i18n'
import { AskPropthamProvider } from '@/components/ask-proptham-widget'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <AskPropthamProvider>
        {children}
      </AskPropthamProvider>
    </I18nProvider>
  )
}
