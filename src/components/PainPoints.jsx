import { useTranslation } from 'react-i18next'
import { SplitIcon, MessageIcon, InjuryIcon, DiamondIcon } from './icons'

const icons = [SplitIcon, MessageIcon, InjuryIcon, DiamondIcon]

export default function PainPoints() {
  const { t } = useTranslation('home')
  const items = t('painPoints.items', { returnObjects: true })

  return (
    <section id="pain-points" className="py-24 bg-[#0A0A0A] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">{t('painPoints.title')}</h2>
            <p className="text-zinc-500 max-w-lg">{t('painPoints.subtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((point, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="p-8 rounded-xl bg-[#050505] border border-white/[0.05] hover:border-[#EBC870]/50 transition-colors group">
                <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-[#EBC870] group-hover:bg-[#EBC870]/10 transition-colors">
                  <Icon />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{point.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
