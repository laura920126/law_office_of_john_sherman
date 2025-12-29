import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from './icons'
import heroImage from '../../Images/John hero.png'

export default function Hero() {
  const { t } = useTranslation('home')

  return (
    <div className="min-h-screen pt-32 md:pt-24 flex flex-col relative overflow-hidden bg-[#050505]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">

        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center pb-20 lg:pb-0 relative z-20">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EBC870]/30 bg-[#EBC870]/5 text-[#EBC870] text-[10px] uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EBC870]"></span>
              {t('hero.badge')}
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight mb-8 fade-in-up delay-100">
            <span className="text-white block font-medium">{t('hero.headline')}</span>
            <span className="text-zinc-500 block font-normal text-4xl md:text-5xl lg:text-[4rem] mt-2">{t('hero.subheadline')}</span>
          </h1>

          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl mb-12 fade-in-up delay-200 border-l border-[#EBC870] pl-6">
            {t('hero.description')}
          </p>

          <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#EBC870] text-black px-8 py-4 rounded-sm hover:bg-[#d4b35f] transition-all group shadow-[0_0_20px_rgba(235,200,112,0.1)] hover:shadow-[0_0_30px_rgba(235,200,112,0.3)]">
              <span className="font-semibold text-sm tracking-wide">{t('hero.cta1')}</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#pain-points" className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-all">
              <span className="font-medium text-sm tracking-wide">{t('hero.cta2')}</span>
            </a>
          </div>
        </div>

        {/* Portrait Image */}
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-auto lg:min-h-[700px] flex items-center justify-center lg:justify-end fade-in-up delay-300">
          {/* Radial Gradient behind head */}
          <div className="absolute top-1/2 right-1/2 lg:right-20 transform -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Lawyer Image */}
          <img
            src={heroImage}
            alt="John P. Sherman"
            className="relative z-10 w-full h-full object-cover object-top lg:object-contain lg:object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />

          {/* Gradient overlay at bottom to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
