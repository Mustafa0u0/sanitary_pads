// src/components/BlogPost.jsx
import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'

// We’ll mirror the same array of posts (but now each has a `slug` plus `fullText`).
const posts = [
  {
    slug: 'why-eco-friendly-pads-matter',
    title: 'Why Eco-Friendly Pads Matter',
    fullText: `Explore how single-use pads contribute to environmental waste and why choosing sustainable alternatives makes a real difference. 

[Here you can paste the full article content—images, paragraphs, etc.]`,
  },
  {
    slug: 'breaking-menstrual-taboos',
    title: 'Breaking Menstrual Taboos',
    fullText: `Learn how open dialogue and education are changing perceptions and empowering women globally.

[Full article content goes here.]`,
  },
  {
    slug: 'rural-outreach-highlights',
    title: 'Rural Outreach Highlights',
    fullText: `Read about our recent school programs and the impact they’ve had on young girls in rural communities.

[Full article content goes here.]`,
  },
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  // If slug is invalid, redirect back to /blog
  if (!post) {
    return <Navigate replace to="/blog" />
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{post.fullText}</p>

        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-block text-brand-dark font-semibold hover:text-brand-peach transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </section>
  )
}
