import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-indigo-50 py-20 overflow-hidden">
      {/* Decorative bg shape */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-brand-peach to-brand-green rounded-full opacity-20 animate-pulse"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-lg relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Have questions or feedback? Fill out the form below and we’ll be in touch soon.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xjkrbndg"
          method="POST"
          className="bg-white rounded-2xl shadow-xl p-10 space-y-6"
        >
          <label className="block">
            <span className="text-gray-700 font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              placeholder="Jane Doe"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Your Email</span>
            <input
              type="email"
              name="_replyto"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              placeholder="jane@example.com"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              placeholder="Write your message here..."
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-brand-green text-white font-semibold py-3 rounded-full shadow-md hover:bg-brand-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
