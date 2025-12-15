import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import FlagIcon from './Flags'

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { language, changeLanguage, languageOptions } = useLanguage()

  const currentLang = languageOptions.find(l => l.code === language) || languageOptions[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 glass-light rounded-xl hover:border-blue-400/50 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FlagIcon code={currentLang.flag} className="w-5 h-3.5 rounded-sm overflow-hidden" />
        <span className="text-slate-300 text-sm font-medium hidden sm:inline">{currentLang.name}</span>
        <ChevronDown 
          size={14} 
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 py-2 glass rounded-xl border border-blue-500/20 shadow-xl shadow-black/20 min-w-[160px] z-50"
          >
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-blue-600/20 transition-colors ${
                  language === lang.code ? 'bg-blue-600/10 text-blue-400' : 'text-slate-300'
                }`}
              >
                <FlagIcon code={lang.flag} className="w-5 h-3.5 rounded-sm overflow-hidden" />
                <span className="text-sm font-medium">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    layoutId="activeLang"
                    className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageDropdown
