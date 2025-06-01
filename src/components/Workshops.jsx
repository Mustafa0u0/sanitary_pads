// src/components/Workshops.jsx
import React, { useState } from 'react'
import workshop1 from '../assets/WhatsApp Image 2025-06-01 at 23.53.51.jpeg'
import workshop2 from '../assets/WhatsApp Image 2025-06-01 at 23.53.54 (1).jpeg'
import workshop3 from '../assets/workshop2.jpeg'
import workshop4 from '../assets/workshop3.jpeg'
import workshop5 from '../assets/workshop1.jpeg'

export default function Workshops() {
  // Array of all workshop photo URLs
  const photos = [workshop1, workshop2, workshop3, workshop4, workshop5]
  // Track which photo is shown as the main image
  const [mainImage, setMainImage] = useState(photos[0])

  return (
    <section id="workshops" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h3 className="text-5xl font-extrabold text-center text-brand-dark mb-12">
          Pad Making Essentials
        </h3>

        {/* ─── Main Workshop Card ───────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Main Workshop Image */}
            <img
              src={mainImage}
              alt="Pad Making Essentials"
              className="w-full h-[450px] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <div className="p-8 bg-white">
            <h4 className="text-3xl font-bold text-brand-dark mb-4">
              Workshop Overview
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn step-by-step how to craft reusable, eco-friendly menstrual pads from scratch. 
              In this hands-on session, you will discover:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Material selection and preparation</li>
              <li>Cutting, layering, and stitching techniques</li>
              <li>Cleaning, maintenance, and composting tips</li>
            </ul>
          </div>
        </div>

        {/* ─── Interactive Thumbnail Gallery ───────────────────────────────────────── */}
        <div className="mt-12">
          <h5 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Workshop Gallery
          </h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(src)}
                className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-200 ${
                  mainImage === src ? 'ring-2 ring-brand-green' : 'hover:scale-105'
                }`}
                aria-label={`Show photo ${idx + 1} as main`}
              >
                <img
                  src={src}
                  alt={`Workshop thumbnail ${idx + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
