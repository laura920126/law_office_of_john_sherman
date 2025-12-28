import { useTranslation } from 'react-i18next'
import { ChevronDown } from './icons'

export default function FAQ() {
  const { t } = useTranslation('home')
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-y border-white/[0.05]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-white mb-4 font-medium">{t('faq.title')}</h2>
        <p className="text-zinc-500 text-center mb-12">{t('faq.subtitle')}</p>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <details key={index} className="group border border-white/10 rounded-lg bg-[#050505]">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:text-[#EBC870] transition-colors">
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-zinc-500 group-hover:text-[#EBC870]">
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
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
  )
}
