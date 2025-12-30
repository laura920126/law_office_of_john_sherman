import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPostBySlug, getAllPosts } from '../data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation('blog')
  const isSpanish = i18n.language === 'es'

  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()

  // Get related posts (same category, excluding current)
  const relatedPosts = post
    ? allPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 2)
    : []

  useEffect(() => {
    window.scrollTo(0, 0)

    // Redirect to blog if post not found
    if (!post) {
      navigate('/blog')
    }
  }, [post, navigate])

  if (!post) {
    return null
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(isSpanish ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="pt-24 min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-[#B8976C] transition-colors">
                    {t('breadcrumb.home')}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/blog" className="hover:text-[#B8976C] transition-colors">
                    {t('breadcrumb.blog')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-500 truncate max-w-[200px]">
                  {isSpanish ? post.titleEs : post.title}
                </li>
              </ol>
            </nav>

            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#B8976C]/20 text-[#8B6914] text-sm font-medium rounded-full">
                {isSpanish ? post.categoryEs : post.category}
              </span>
              <span className="text-gray-600 text-sm">
                {formatDate(post.date)}
              </span>
              <span className="text-gray-600 text-sm">
                {isSpanish ? post.readTimeEs : post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-8 leading-tight">
              {isSpanish ? post.titleEs : post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {isSpanish ? post.excerptEs : post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-zinc-200 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-semibold prose-headings:text-black
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-800 prose-p:leading-relaxed
                prose-ul:text-gray-800
                prose-li:marker:text-[#B8976C]
                prose-a:text-[#B8976C] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-black"
              dangerouslySetInnerHTML={{
                __html: isSpanish ? post.contentEs : post.content
              }}
            />
          </div>
        </div>
      </section>

      {/* Author / CTA Section */}
      <section className="py-12 border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                {t('article.needHelp')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('article.helpDescription')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#B8976C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a8875c] transition-colors"
              >
                {t('article.contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-zinc-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-semibold text-black mb-8">
                {t('relatedPosts.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-[#B8976C]/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="aspect-video bg-zinc-200"></div>
                    <div className="p-6">
                      <span className="text-[#B8976C] text-sm">
                        {isSpanish ? relatedPost.categoryEs : relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-[#B8976C] transition-colors">
                        {isSpanish ? relatedPost.titleEs : relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B8976C] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {t('backToBlog')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
