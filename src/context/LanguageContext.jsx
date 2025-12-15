import { createContext, useContext, useState, useEffect } from 'react'
import { translations, languageOptions } from '../translations'

const LanguageContext = createContext()

const STORAGE_KEY = 'portfolio-language'
const QUERY_PARAM = 'lang'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  // Initialize language from URL param or localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get(QUERY_PARAM)
    const storedLang = localStorage.getItem(STORAGE_KEY)
    
    const validCodes = languageOptions.map(l => l.code)
    
    if (urlLang && validCodes.includes(urlLang)) {
      setLanguage(urlLang)
      localStorage.setItem(STORAGE_KEY, urlLang)
    } else if (storedLang && validCodes.includes(storedLang)) {
      setLanguage(storedLang)
    }
  }, [])

  // Update URL and localStorage when language changes
  const changeLanguage = (langCode) => {
    const validCodes = languageOptions.map(l => l.code)
    if (!validCodes.includes(langCode)) return

    setLanguage(langCode)
    localStorage.setItem(STORAGE_KEY, langCode)

    // Update URL without page reload
    const url = new URL(window.location)
    if (langCode === 'en') {
      url.searchParams.delete(QUERY_PARAM)
    } else {
      url.searchParams.set(QUERY_PARAM, langCode)
    }
    window.history.replaceState({}, '', url)
  }

  const t = translations[language] || translations.en

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languageOptions }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
