// Blog posts are loaded from JSON file (generated from markdown by build-blog.js)
// To add/edit posts: use the admin panel at /admin or edit files in content/blog/

import blogPostsData from './blogPosts.json'

const blogPosts = blogPostsData

// Helper function to get all posts
export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Helper function to get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

// Get all unique categories
export const getCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))]
}

export default blogPosts
