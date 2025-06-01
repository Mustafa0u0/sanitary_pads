// src/components/AboutUs.jsx
import React from 'react'
import { EyeIcon, BoltIcon } from '@heroicons/react/24/outline'

export default function AboutUs() {
  const missionVisionItems = [
    {
      id: 'vision',
      title: 'Vision',
      text:
        'To be the leading provider of eco-friendly menstrual hygiene products worldwide, making sustainable health solutions accessible to all women and contributing to the global movement for environmental sustainability.',
      icon: <EyeIcon className="h-8 w-8 text-brand-green mb-4" />,
    },
    {
      id: 'mission',
      title: 'Mission',
      text:
        'Our mission is to provide safe, sustainable, and affordable menstrual hygiene products that empower women, promote environmental conservation, and contribute to social justice. We strive to raise awareness about menstrual health, fight plastic pollution, and make eco-friendly alternatives accessible to everyone, regardless of their socioeconomic background.',
      icon: <BoltIcon className="h-8 w-8 text-brand-green mb-4" />,
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 space-y-16">
        {/* ─── Our Story ───────────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Eco-Friendly Sanitary Pads began as a response to the increasing concern
            about the environmental and health impacts of traditional sanitary products.
            Our founders were motivated by the need to provide a safer, more sustainable
            alternative for women who menstruate, while simultaneously tackling the growing
            problem of plastic pollution. We aim to bridge the gap in access to affordable,
            eco-friendly menstrual products, especially in underserved communities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We believe that access to menstrual hygiene is a basic human right and that
            everyone should have the ability to manage their periods in a healthy and
            environmentally responsible way. By offering biodegradable, reusable, and
            chemical-free sanitary pads, we are working towards creating a world where
            women can enjoy optimal health while reducing their environmental footprint.
          </p>
        </div>

        {/* ─── Mission & Vision Cards ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {missionVisionItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden"
            >
              {/* Gradient Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-peach to-brand-green rounded-t-2xl" />

              <div className="flex flex-col items-start">
                {/* Icon */}
                {item.icon}

                {/* Title */}
                <h3 className="text-3xl font-bold text-brand-dark mb-4">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
