import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, UsersIcon, HandIcon } from './icons'

const icons = [UsersIcon, HandIcon]

export default function Services() {
  const { t } = useTranslation('home')
  const items = t('services.items', { returnObjects: true })

  return (
    <section id="services" className="bg-[#050505] text-white py-24 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/[0.1] pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{t('services.title')}</h2>
            <p className="text-zinc-500 max-w-md">{t('services.subtitle')}</p>
          </div>
          <Link to="/contact" className="hidden md:flex items-center gap-2 text-[#EBC870] hover:text-white transition-colors mt-6 md:mt-0">
            <span className="text-xs uppercase tracking-widest">{t('services.bookConsultation')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sharp Grid Layout */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.1] border border-white/[0.1]">
          {items.map((service, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="group relative p-10 md:p-14 min-h-[500px] flex flex-col justify-between hover:bg-zinc-900/20 transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#EBC870] font-mono">{service.number}</span>
                  <div className="bg-zinc-900 p-3 rounded-full group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                    <Icon />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-white font-medium mb-6">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
                    {service.services.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                        <span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> {item}
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="flex items-center gap-3 text-sm text-[#EBC870] font-medium group-hover:translate-x-2 transition-transform">
                    {service.cta} <ChevronRight />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
