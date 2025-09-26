/*
  Nanhi Muskan - Single-file React component (TailwindCSS)
  Instructions:
  - Place your images inside /public/assets folder (not src). Example: public/assets/logo.png
  - Use direct paths like "/assets/logo.png" so build won’t fail if imports are missing.
  - This file is a single-page React component with simple section navigation.
  - It uses TailwindCSS for styling. Make sure Tailwind is configured in your project.
  - Replace placeholder text (ADDRESS, EMAIL, PHONE) with real details.
*/

import React from 'react'

// fallback-safe image component
function SmartImage({ src, alt, className }) {
  const fallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3EImage not found%3C/text%3E%3C/svg%3E";
  return <img src={src} alt={alt} className={className} onError={(e)=>{e.currentTarget.src=fallback}} />
}

export default function NanhiMuskanWebsite(){
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SmartImage src="/assets/logo.png" alt="Nanhi Muskan Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold">Nanhi Muskan</h1>
              <p className="text-sm text-green-700">A Vision Ignited by Anup</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#home" className="hover:text-green-700">Home</a>
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#programs" className="hover:text-green-700">Programs</a>
            <a href="#gallery" className="hover:text-green-700">Gallery</a>
            <a href="#getinvolved" className="hover:text-green-700">Get Involved</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
            <a href="#donate" className="ml-4 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800">Donate</a>
          </nav>

          <div className="md:hidden">
            <a href="#getinvolved" className="px-3 py-2 bg-green-700 text-white rounded-full text-sm">Join</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Nanhi Muskan</h2>
            <p className="mt-3 text-lg text-gray-700">Spreading smiles, nurturing dreams, and empowering children through education and care.</p>

            <div className="mt-6 flex gap-4">
              <a href="#getinvolved" className="px-5 py-3 rounded-md bg-green-700 text-white font-semibold shadow">Join the Movement</a>
              <a href="#donate" className="px-5 py-3 rounded-md border border-green-700 text-green-700 font-semibold">Donate Now</a>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <strong>Our impact:</strong> Books distributed, village visits, learning sessions, and thousands of smiles.
            </div>
          </div>

          <div className="space-y-4">
            <SmartImage src="/assets/photo1.jpg" alt="Children smiling" className="w-full rounded-xl shadow-lg object-cover h-64" />
            <div className="grid grid-cols-2 gap-4">
              <SmartImage src="/assets/photo2.jpg" alt="Volunteer with kids" className="w-full rounded-lg object-cover h-40 shadow" />
              <SmartImage src="/assets/photo3.jpg" alt="Group activity" className="w-full rounded-lg object-cover h-40 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">About Us</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">Nanhi Muskan is a registered NGO dedicated to bringing hope and happiness to underprivileged children. Founded with the belief that every child deserves a smile and a fair chance at life, we provide education, joyful activities, and community support in rural and underdeveloped areas.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Mission</h4>
              <p className="mt-2 text-sm text-gray-600">To empower children with knowledge, hope, and opportunities.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Vision</h4>
              <p className="mt-2 text-sm text-gray-600">A world where children’s smiles shine as bright as their dreams.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Values</h4>
              <p className="mt-2 text-sm text-gray-600">Compassion • Education • Inclusion • Joy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Programs</h3>
          <p className="mt-3 text-gray-700">Our initiatives focus on education, play, and community outreach.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg bg-white shadow-sm">
              <h4 className="font-semibold">Education for All</h4>
              <p className="mt-2 text-sm text-gray-600">Providing books, stationery, and learning support to children who lack resources.</p>
            </article>

            <article className="p-6 rounded-lg bg-white shadow-sm">
              <h4 className="font-semibold">Joy of Play</h4>
              <p className="mt-2 text-sm text-gray-600">Organizing games, creative activities, and events to bring smiles and promote holistic growth.</p>
            </article>

            <article className="p-6 rounded-lg bg-white shadow-sm">
              <h4 className="font-semibold">Community Outreach</h4>
              <p className="mt-2 text-sm text-gray-600">Village visits, awareness drives, and interactive sessions to build supportive communities.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Gallery</h3>
          <p className="mt-2 text-gray-700">Every smile tells a story. Every story inspires change.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <SmartImage src="/assets/photo1.jpg" alt="gallery1" className="w-full h-64 object-cover rounded-lg shadow" />
            <SmartImage src="/assets/photo2.jpg" alt="gallery2" className="w-full h-64 object-cover rounded-lg shadow" />
            <SmartImage src="/assets/photo3.jpg" alt="gallery3" className="w-full h-64 object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="getinvolved" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Get Involved</h3>
          <p className="mt-2 text-gray-700">Help us bring smiles and opportunities. Volunteer, donate, or partner with Nanhi Muskan.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Volunteer</h4>
              <p className="mt-2 text-sm text-gray-600">Spend time with children, run workshops, or help during events.</p>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded">Sign Up</a>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Donate</h4>
              <p className="mt-2 text-sm text-gray-600">Your support funds books, meals, and outreach programs. Every contribution matters.</p>
              <a id="donate" href="#contact" className="inline-block mt-4 px-4 py-2 border border-green-700 text-green-700 rounded">Donate Now</a>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold">Partner With Us</h4>
            <p className="mt-2 text-sm text-gray-600">Schools, local businesses, and NGOs can collaborate on programs and events.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-semibold">Contact Us</h4>
            <p className="mt-2 text-gray-700">Have questions or want to get involved? Reach out to us.</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><strong>Address:</strong> [Add address here]</li>
              <li><strong>Phone:</strong> [Add phone number]</li>
              <li><strong>Email:</strong> [Add email address]</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a aria-label="facebook" href="#" className="text-sm">Facebook</a>
              <a aria-label="instagram" href="#" className="text-sm">Instagram</a>
              <a aria-label="twitter" href="#" className="text-sm">Twitter</a>
            </div>
          </div>

          <div>
            <form className="bg-gray-50 p-6 rounded-lg shadow-sm grid gap-4">
              <input className="p-3 rounded border" placeholder="Your name" />
              <input className="p-3 rounded border" placeholder="Your email" />
              <textarea className="p-3 rounded border" rows="4" placeholder="Your message" />
              <button type="button" className="w-full py-3 bg-green-700 text-white rounded">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Nanhi Muskan. All rights reserved.</div>
      </footer>
    </div>
  )
}
