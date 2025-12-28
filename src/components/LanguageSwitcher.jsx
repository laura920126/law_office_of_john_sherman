import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.substring(0, 2) || 'en'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 transition-colors ${
          currentLang === 'en'
            ? 'text-[#EBC870] font-medium'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-zinc-600">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 transition-colors ${
          currentLang === 'es'
            ? 'text-[#EBC870] font-medium'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        ES
      </button>
    </div>
  )
}
