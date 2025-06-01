// src/App.jsx
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import Workshops from './components/Workshops'
import ProductGallery from './components/ProductGallery'
import Team from './components/Team'
import GetInvolved from './components/GetInvolved'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false)
    }, 2000) // display splash for 2 seconds
    return () => clearTimeout(timeout)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/" />} />

        <Route
          path="/blog"
          element={
            <>
              <Hero />
              <VisionMission />
              <Workshops />
              <ProductGallery />
              <Team />
              <GetInvolved />
              <Blog />
              <Contact />
            </>
          }
        />

        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="*" element={<Navigate replace to="/blog" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
