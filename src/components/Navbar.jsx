import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../../Images/Logo.png'

export default function Navbar() {
  const { t } = useTranslation('common')

  return (
    <nav className="fixed z-50 w-full top-0 bg-[#050505]/90 backdrop-blur-sm border-b border-white/[0.05]">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="John P. Sherman Law" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-normal text-zinc-300">
          <Link to="/family-law" className="hover:text-white transition-colors">{t('links.familyLaw')}</Link>
          <Link to="/personal-injury" className="hover:text-white transition-colors">{t('links.personalInjury')}</Link>
          <Link to="/about" className="hover:text-white transition-colors">{t('links.about')}</Link>
          <Link to="/contact" className="hover:text-white transition-colors">{t('links.contact')}</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <a href="tel:786-602-3672" className="text-sm font-medium text-white hover:text-[#EBC870] transition-colors">
            {t('navbar.phone')}
          </a>
          <Link to="/contact" className="px-5 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-[#EBC870] transition-all duration-300">
            {t('navbar.cta')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
