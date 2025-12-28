import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const { t } = useTranslation('home')
  const [selectedService, setSelectedService] = useState('family')
  const faqItems = t('faq.items', { returnObjects: true })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#050505]">

      {/* Header Section */}
      <section className="py-24 px-6 md:px-12 border-b border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Ready to discuss your case? Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
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
                  <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#EBC870] hover:bg-[#d4b35f] text-black text-sm font-semibold tracking-wide transition-all rounded-sm flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(235,200,112,0.2)]">
                    {t('contact.submit')}
                    <ArrowRightIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 font-medium">{t('faq.title')}</h2>
          <p className="text-zinc-500 text-center mb-12">{t('faq.subtitle')}</p>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="group border border-white/10 rounded-lg bg-[#050505]">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:text-[#EBC870] transition-colors">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-zinc-500 group-hover:text-[#EBC870]">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

// Icons
function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  )
}
