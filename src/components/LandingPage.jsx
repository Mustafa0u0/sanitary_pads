import React from 'react';

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">EcoPads</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#vision" className="hover:text-indigo-600">Vision</a>
            <a href="#mission" className="hover:text-indigo-600">Mission</a>
            <a href="#workshops" className="hover:text-indigo-600">Workshops</a>
            <a href="#product" className="hover:text-indigo-600">Product</a>
            <a href="#team" className="hover:text-indigo-600">Team</a>
            <a href="#involved" className="hover:text-indigo-600">Get Involved</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <button className="md:hidden focus:outline-none">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-50 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Sustainable Change</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Join us in making period care eco-friendly, affordable, and accessible for every woman.
        </p>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="vision" className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p>A world where every woman can manage her menstruation with dignity, safety, and sustainability.</p>
        </div>
        <div id="mission" className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p>Deliver safe, affordable, and eco-conscious menstrual pads that empower women and protect the planet.</p>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">Workshops</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Handmade Pad Making Essentials</li>
            <li>Compost Education & Sustainability</li>
            <li>Community Outreach & Advocacy</li>
          </ul>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">Our Product</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Chemical-free, biodegradable pads</li>
            <li>Highly absorbent without plastic cores</li>
            <li>Reusable & cost-effective</li>
            <li>Packaged in compostable materials</li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">Who We Are</h4>
          <p>Passionate bio-science students dedicated to menstrual health and environmental sustainability.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">Our Roles</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Managing Lead</li>
            <li>Product Development</li>
            <li>Operations</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">What We Do</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Eco-material R&D</li>
            <li>Awareness Campaigns</li>
            <li>Rural Workshops</li>
          </ul>
        </div>
      </section>

      {/* Get Involved */}
      <section id="involved" className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 shadow-lg rounded-lg p-6">
            <h5 className="text-xl font-semibold mb-2">Volunteer</h5>
            <p>Teach pad-making and advocacy in our community programs.</p>
          </div>
          <div className="bg-indigo-50 shadow-lg rounded-lg p-6">
            <h5 className="text-xl font-semibold mb-2">Sponsor</h5>
            <p>Support our school outreach initiatives financially or materially.</p>
          </div>
          <div className="bg-indigo-50 shadow-lg rounded-lg p-6">
            <h5 className="text-xl font-semibold mb-2">Shop</h5>
            <p>Purchase our eco-friendly pads to support the cause.</p>
          </div>
        </div>
      </section>

      {/* Blog & News */}
      <section id="blog" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-6">Blog & News</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h6 className="font-semibold mb-2">Why Eco-Friendly Pads Matter</h6>
            <p className="text-gray-600">Exploring the environmental impact of single-use menstrual products.</p>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h6 className="font-semibold mb-2">Breaking Menstrual Taboos</h6>
            <p className="text-gray-600">Empowering open conversations around menstrual health.</p>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h6 className="font-semibold mb-2">Rural Outreach Highlights</h6>
            <p className="text-gray-600">Success stories from our recent school programs.</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@ecopads.org</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Green Street, City</p>
          </div>
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring" />
            <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring" />
            <textarea placeholder="Message" rows="4" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring"></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold rounded py-2 hover:bg-indigo-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} EcoPads. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
