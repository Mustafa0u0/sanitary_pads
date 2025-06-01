// src/components/Header.jsx
'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo Background Removed.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'Vision', href: '#vision' },
    { name: 'Mission', href: '#mission' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Product', href: '#product' },
    { name: 'Team', href: '#team' },
    { name: 'Involved', href: '#involved' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      let current = ''
      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const offsetTop = section.offsetTop
          if (scrollPos >= offsetTop) {
            current = item.name
          }
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (name, href) => {
    setActiveSection(name)
    setMobileMenuOpen(false)
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex-shrink-0">
          <a href="#">
            <img src={logo} alt="Repads Logo" className="h-20 w-auto" />
          </a>
        </div>

        <div className="hidden lg:flex lg:space-x-8 lg:items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`py-2 px-3 text-sm font-semibold transition-colors focus:outline-none ${
                activeSection === item.name
                  ? 'text-brand-peach'
                  : 'text-gray-800 hover:text-brand-green'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 w-4/5 max-w-xs bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <img src={logo} alt="Repads Logo" className="h-8 w-auto" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.href)}
                  className={`block w-full text-left py-2 px-3 text-base font-semibold transition-colors focus:outline-none ${
                    activeSection === item.name
                      ? 'text-brand-peach'
                      : 'text-gray-800 hover:text-brand-green'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}
