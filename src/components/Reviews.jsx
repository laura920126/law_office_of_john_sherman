import { useTranslation } from 'react-i18next'
import { Star, ChevronLeft, ChevronRight, GoogleIcon } from './icons'

const bgColors = ["bg-[#EBC870]", "bg-zinc-800", "bg-zinc-800", "bg-[#EBC870]", "bg-zinc-800"]
const textColors = ["text-black", "text-zinc-300", "text-zinc-300", "text-black", "text-zinc-300"]

function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1 text-[#EBC870]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < rating ? "text-[#EBC870]" : "text-zinc-700"} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useTranslation('home')
  const items = t('reviews.items', { returnObjects: true })

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-[10px] font-semibold text-[#EBC870] tracking-[0.3em] uppercase flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#EBC870]"></span>
              {t('reviews.title')}
            </h2>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <GoogleIcon size={14} />
              <span className="text-[10px] text-zinc-400 font-medium">Google Reviews</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#EBC870] hover:text-[#EBC870] transition-colors">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#EBC870] hover:text-[#EBC870] transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory">
          {items.map((review, index) => (
            <div key={index} className="shrink-0 w-[85vw] md:w-[500px] snap-center bg-zinc-900/20 border border-white/5 p-8 md:p-10 rounded-2xl relative group hover:bg-zinc-900/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <StarRating rating={review.rating || 5} />
                {review.date && (
                  <span className="text-[11px] text-zinc-500">{review.date}</span>
                )}
              </div>
              <blockquote className="text-xl md:text-2xl text-white font-light leading-snug mb-8">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${bgColors[index % bgColors.length]} ${textColors[index % textColors.length]} rounded-full flex items-center justify-center font-bold text-sm`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{review.name}</div>
                    <div className="text-xs text-zinc-500">{review.caseType}</div>
                  </div>
                </div>
                <GoogleIcon size={18} className="opacity-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
