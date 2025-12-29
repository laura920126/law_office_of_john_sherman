import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CookieConsent() {
  const { t } = useTranslation('common')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-xl shadow-2xl shadow-black/20 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          {/* Icon */}
          <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-[#EBC870]/10 items-center justify-center">
            <CookieIcon />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-zinc-900 font-semibold text-lg">
              {t('cookies.title', 'We Value Your Privacy')}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {t('cookies.description', 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.')}{' '}
              <Link to="/privacy" className="text-[#B8976C] hover:underline">
                {t('cookies.learnMore', 'Learn more')}
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={handleReject}
              className="px-6 py-3 text-sm font-medium text-zinc-600 border border-zinc-300 rounded-sm hover:bg-zinc-100 transition-colors"
            >
              {t('cookies.reject', 'Reject All')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 text-sm font-semibold text-black bg-[#EBC870] rounded-sm hover:bg-[#d4b35f] transition-colors"
            >
              {t('cookies.accept', 'Accept All')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CookieIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8976C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
      <path d="M8.5 8.5v.01"></path>
      <path d="M16 15.5v.01"></path>
      <path d="M12 12v.01"></path>
      <path d="M11 17v.01"></path>
      <path d="M7 14v.01"></path>
    </svg>
  )
}
