'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang, type TranslationDict } from './i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: TranslationDict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'jpenela-lang'

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  const nav = window.navigator.language.toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLangState(detectInitialLang())
    setMounted(true)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l)
      document.documentElement.lang = l
    }
  }

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang, mounted])

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
