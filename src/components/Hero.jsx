import React, { useState, useEffect } from 'react'
import bg1 from '../assets/bg2.jpeg'
import bg2 from '../assets/bg1.jpeg'
import bg3 from '../assets/bg1.jpeg'

export default function Hero() {
  const images = [bg1, bg2, bg3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000) // rotate background every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className="relative isolate bg-white px-6 pt-6 lg:px-8"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent dark overlay so text is legible */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Top Decorative Gradient (behind overlay) */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-30
                     bg-gradient-to-tr from-brand-peach to-brand-green opacity-30
                     sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        {/* Announcement Banner (optional) */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-gray-200 bg-black/50 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            New Workshop Series Announced!{' '}
            <a href="#workshops" className="font-semibold text-white">
              <span className="absolute inset-0" aria-hidden="true" />
              View details <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Main Content (now white text) */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Empowering Sustainable Menstrual Care
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Repads offers eco-friendly, reusable pads designed for comfort, safety,
          and sustainability. Join us in making a positive impact on menstrual
          health and the environment.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#product"
            className="rounded-md bg-brand-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                       hover:bg-brand-dark focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
          >
            Shop Now
          </a>
          <a href="#mission" className="text-sm font-semibold leading-6 text-white">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
                   sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2
                     bg-gradient-to-tr from-brand-peach to-brand-green opacity-30
                     sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1!)',
          }}
        />
      </div>
    </div>
  )
}
