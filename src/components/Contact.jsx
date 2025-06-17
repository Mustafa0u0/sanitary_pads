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
            Have questions or feedback? Follow us on Instagram or fill out the form below and we’ll be in touch soon.
          </p>
        </div>

        {/* Social Links (moved above form) */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 mb-2">Follow us on Instagram</p>
          <a
            href="https://www.instagram.com/repads_3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-peach font-semibold hover:text-brand-dark transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
            </svg>
            @repads_3
          </a>
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