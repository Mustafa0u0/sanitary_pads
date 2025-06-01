// src/components/Blog.jsx
import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'why-eco-friendly-pads-matter',
    title: 'Why Eco-Friendly Pads Matter',
    text:
      'Explore how single-use pads contribute to environmental waste and why choosing sustainable alternatives makes a real difference.',
  },
  {
    slug: 'breaking-menstrual-taboos',
    title: 'Breaking Menstrual Taboos',
    text:
      'Learn how open dialogue and education are changing perceptions and empowering women globally.',
  },
  {
    slug: 'rural-outreach-highlights',
    title: 'Rural Outreach Highlights',
    text:
      'Read about our recent school programs and the impact they’ve had on young girls in rural communities.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Blog &amp; News</h3>
        <p className="text-gray-600">Stay updated with our latest articles and community stories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Top Accent Bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-peach to-brand-green"></div>

            <div className="p-6 flex flex-col h-full">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 flex-grow leading-relaxed">{post.text}</p>
              <div className="mt-6">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-peach transition-colors"
                >
                  Read more
                  <ArrowRightIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
