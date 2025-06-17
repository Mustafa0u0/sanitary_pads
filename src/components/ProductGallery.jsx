// src/components/ProductsPage.jsx
import React, { useState, useEffect } from 'react'

import product1 from '../assets/WhatsApp Image 2025-06-01 at 23.53.58.jpeg'
import product2 from '../assets/WhatsApp Image 2025-06-01 at 23.53.59.jpeg'
import product3 from '../assets/WhatsApp Image 2025-06-01 at 23.54.00.jpeg'

export default function ProductsPage() {
  // Carousel images for the single "3-pack" product
  const productImages = [product1, product2, product3]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [productImages.length])

  // Unit pricing: 1 unit = 3 pads for RM 24
  const packPrice = 24
  const packLabel = '3-Pack Unit'

  return (
    <section id="product" className="bg-indigo-50 py-24">
      <div className="container mx-auto px-4 space-y-12">
        <h3 className="text-4xl font-extrabold text-center text-brand-dark">
          Our Product
        </h3>

        {/* Carousel for product angles */}
        <div className="relative mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={productImages[currentIndex]}
            alt={`Product view ${currentIndex + 1}`}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h4 className="text-2xl font-bold text-white">Biodegradable Pad Set</h4>
            <p className="text-lg text-gray-200 leading-relaxed">
              Each unit includes 3 reusable, compostable pads crafted from organic materials.
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-3">
            {productImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === currentIndex
                    ? 'bg-brand-green'
                    : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Purchase Form */}
        <div className="mx-auto max-w-lg bg-white rounded-2xl shadow-lg p-8">
          <h4 className="text-3xl font-bold text-gray-900 mb-4">{packLabel}</h4>
          <p className="text-gray-700 mb-4">
            Enjoy the comfort and sustainability of our biodegradable pads in a convenient 3-pack unit. Ideal for regular use with zero plastic.
          </p>
          <p className="text-lg font-semibold text-brand-dark mb-6">
            Price: RM {packPrice}
          </p>

          <form
            action="https://formspree.io/f/xjkrbndg"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden inputs for order details */}
            <input type="hidden" name="product_name" value="3-Pack Biodegradable Pads" />
            <input type="hidden" name="unit_label" value={packLabel} />
            <input type="hidden" name="unit_price" value={`${packPrice}`} />

            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Full Name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="_replyto"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Shipping Address</label>
              <textarea
                name="address"
                required
                rows="3"
                placeholder="Your shipping address"
                className="w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-brand-green focus:ring focus:ring-brand-green/50"
              />
            </div>

            <div className="text-right">
              <span className="text-xl font-bold text-gray-800">Total: RM {packPrice}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-green text-white font-semibold py-3 rounded-full shadow hover:bg-brand-dark transition-colors"
            >
              Pay RM {packPrice}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}