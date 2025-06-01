// src/components/SplashScreen.jsx
import React from 'react'
import logo from '../assets/logo Background Removed.png'  // adjust path if needed

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-brand-green flex flex-col items-center justify-center">
      {/* Logo */}
      <img src={logo} alt="Eco-Friendly Pads Logo" className="h-32 w-auto mb-6 animate-pulse" />

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white animate-pulse">
        Eco-Friendly Sanitary Pads
      </h1>
    </div>
  )
}
