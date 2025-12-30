import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CONTENT_DIR = path.join(__dirname, '../content/blog')
const OUTPUT_FILE = path.join(__dirname, '../src/data/blogPosts.json')

function buildBlogPosts() {
  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log('No content/blog directory found. Creating empty blog posts file.')
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2))
    return
  }

  // Get all markdown files
  const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'))

  const posts = files.map(filename => {
    const filePath = path.join(CONTENT_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Parse frontmatter
    const { data, content } = matter(fileContent)

    // Convert markdown to HTML
    const htmlContent = marked(content)

    // Parse Spanish content if it exists in frontmatter
    const htmlContentEs = data.bodyEs ? marked(data.bodyEs) : ''

    return {
      slug: data.slug || filename.replace('.md', ''),
      title: data.title || '',
      titleEs: data.titleEs || data.title || '',
      excerpt: data.excerpt || '',
      excerptEs: data.excerptEs || data.excerpt || '',
      content: htmlContent,
      contentEs: htmlContentEs || htmlContent,
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      category: data.category || 'Family Law',
      categoryEs: data.category === 'Family Law' ? 'Derecho Familiar' : 'Lesiones Personales',
      image: data.image || '',
      readTime: data.readTime || '5 min read',
      readTimeEs: data.readTime ? data.readTime.replace('read', 'de lectura').replace('min', 'min') : '5 min de lectura'
    }
  })

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Write to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2))
  console.log(`✅ Built ${posts.length} blog posts to src/data/blogPosts.json`)
}

buildBlogPosts()
