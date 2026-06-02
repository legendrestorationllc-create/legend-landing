'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '@/lib/translations'
import type { Lang, Translations } from '@/lib/translations'

interface LangCtx {
  lang: Lang
  t: Translations
}

const LanguageContext = createContext<LangCtx>({ lang: 'es', t: translations.es })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const nav = navigator.language?.toLowerCase() ?? ''
    setLang(nav.startsWith('en') ? 'en' : 'es')
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useT = () => useContext(LanguageContext)
