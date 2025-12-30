import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAllPosts, getCategories } from '../data/blogPosts'

// Map category names to translation keys
const categoryToKey = (category) => {
  const mapping = {
    'Family Law': 'familyLaw',
    'Personal Injury': 'personalInjury'
  }
  return mapping[category] || category.toLowerCase().replace(/\s+/g, '')
}

export default function BlogPage() {
  const { t, i18n } = useTranslation('blog')
  const isSpanish = i18n.language === 'es'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const posts = getAllPosts()
  const categories = getCategories()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(isSpanish ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="pt-24 min-h-screen bg-[#050505]">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#EBC870]/10 text-[#EBC870] text-sm tracking-wider mb-6">
              {t('header.label')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              {t('header.title')}
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {t('header.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#EBC870] text-[#050505]'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {t('categories.all')}
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#EBC870] text-[#050505]'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {t(`categories.${categoryToKey(category)}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#EBC870]/30 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#EBC870]/20 text-[#EBC870] text-xs rounded-full">
                      {t(`categories.${categoryToKey(post.category)}`)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{isSpanish ? post.readTimeEs : post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-medium text-white mb-3 group-hover:text-[#EBC870] transition-colors">
                    {isSpanish ? post.titleEs : post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm line-clamp-3">
                    {isSpanish ? post.excerptEs : post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-[#EBC870] text-sm">
                    <span>{t('readMore')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400">{t('noArticles')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-zinc-400 mb-8">
              {t('cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#EBC870] text-[#050505] px-8 py-3 rounded-full font-medium hover:bg-[#d4b363] transition-colors"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
