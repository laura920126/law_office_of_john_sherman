import { useTranslation } from 'react-i18next'
import logo from '../../Images/Logo.png'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-[#050505] py-20 px-6 md:px-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="John P. Sherman Law" className="h-10 w-auto" />
          </div>
          <div className="text-[11px] uppercase tracking-widest text-zinc-500 space-y-3">
            <p>{t('footer.address')}</p>
            <p>{t('footer.city')}</p>
            <a href="tel:786-602-3672" className="text-white mt-4 block hover:text-[#EBC870] transition-colors">{t('navbar.phone')}</a>
            <a href="mailto:contact@shermanlaw.com" className="text-white block hover:text-[#EBC870] transition-colors">{t('footer.email')}</a>
          </div>
        </div>

        <div className="flex gap-20 text-[11px] uppercase tracking-widest font-semibold">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-white hover:text-[#EBC870] transition-colors">{t('links.familyLaw')}</a>
            <a href="#services" className="text-white hover:text-[#EBC870] transition-colors">{t('links.personalInjury')}</a>
            <a href="#faq" className="text-white hover:text-[#EBC870] transition-colors">{t('links.faq')}</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">{t('social.facebook')}</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">{t('social.linkedin')}</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">{t('social.twitter')}</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-[10px] text-zinc-700 flex flex-col md:flex-row justify-between uppercase tracking-widest gap-4">
        <span>{t('footer.copyright')}</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-500">{t('links.disclaimer')}</a>
          <a href="#" className="hover:text-zinc-500">{t('links.privacyPolicy')}</a>
          <a href="#" className="hover:text-zinc-500">{t('links.termsOfService')}</a>
        </div>
      </div>
    </footer>
  )
}
