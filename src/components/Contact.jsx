import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from './icons'

export default function Contact() {
  const { t } = useTranslation('home')
  const [selectedService, setSelectedService] = useState('family')

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 border border-[#EBC870] text-[10px] tracking-[0.2em] uppercase text-[#EBC870] mb-6 rounded-full">
            {t('contact.badge')}
          </span>
          <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-500 mt-6 max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        {/* Form */}
        <div className="border border-white/10 p-1 md:p-2 bg-[#0A0A0A] rounded-xl shadow-2xl">
          <div className="border border-white/5 p-8 md:p-12 rounded-lg bg-[#050505]">
            <form className="space-y-12">
              {/* Case Type */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 font-semibold">{t('contact.areaOfConcern')}</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="service"
                      className="custom-radio sr-only"
                      checked={selectedService === 'family'}
                      onChange={() => setSelectedService('family')}
                    />
                    <div className={`border p-5 flex items-center gap-4 transition-all duration-300 hover:border-zinc-600 rounded-lg relative overflow-hidden bg-zinc-900/20 ${selectedService === 'family' ? 'border-[#EBC870] bg-[#1a1a1a]' : 'border-zinc-800'}`}>
                      <div className={`indicator absolute left-0 top-0 bottom-0 bg-[#EBC870] transition-all duration-300 opacity-10 ${selectedService === 'family' ? 'w-full' : 'w-0'}`}></div>
                      <span className="w-4 h-4 border border-zinc-600 rounded-full flex items-center justify-center">
                        <span className={`w-2 h-2 bg-[#EBC870] rounded-full transition-opacity ${selectedService === 'family' ? 'opacity-100' : 'opacity-0'}`}></span>
                      </span>
                      <span className="block text-sm text-white font-medium">{t('contact.familyLawOption')}</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="service"
                      className="custom-radio sr-only"
                      checked={selectedService === 'injury'}
                      onChange={() => setSelectedService('injury')}
                    />
                    <div className={`border p-5 flex items-center gap-4 transition-all duration-300 hover:border-zinc-600 rounded-lg relative overflow-hidden bg-zinc-900/20 ${selectedService === 'injury' ? 'border-[#EBC870] bg-[#1a1a1a]' : 'border-zinc-800'}`}>
                      <div className={`indicator absolute left-0 top-0 bottom-0 bg-[#EBC870] transition-all duration-300 opacity-10 ${selectedService === 'injury' ? 'w-full' : 'w-0'}`}></div>
                      <span className="w-4 h-4 border border-zinc-600 rounded-full flex items-center justify-center">
                        <span className={`w-2 h-2 bg-[#EBC870] rounded-full transition-opacity ${selectedService === 'injury' ? 'opacity-100' : 'opacity-0'}`}></span>
                      </span>
                      <span className="block text-sm text-white font-medium">{t('contact.injuryOption')}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">{t('contact.fullName')}</label>
                    <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#EBC870] rounded-md transition-colors placeholder-zinc-700" />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">{t('contact.email')}</label>
                    <input type="email" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#EBC870] rounded-md transition-colors placeholder-zinc-700" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">{t('contact.phone')}</label>
                    <input type="tel" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#EBC870] rounded-md transition-colors placeholder-zinc-700" />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">{t('contact.description')}</label>
                    <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#EBC870] rounded-md transition-colors placeholder-zinc-700" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-zinc-900/50">
                <p className="text-[10px] text-zinc-600 max-w-xs">
                  {t('contact.disclaimer')}
                </p>
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#EBC870] hover:bg-[#d4b35f] text-black text-sm font-semibold tracking-wide transition-all rounded-md flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(235,200,112,0.2)]">
                  {t('contact.submit')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
