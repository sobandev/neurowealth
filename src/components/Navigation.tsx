'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className={`max-w-6xl mx-auto transition-all duration-500 ${
        scrolled 
          ? 'bg-primary-dark/90 glass-effect backdrop-blur-lg shadow-2xl shadow-accent-green/20 scale-[0.98]' 
          : 'bg-primary-dark/30 glass-effect backdrop-blur-sm shadow-lg shadow-black/20'
      } rounded-2xl border border-white/10 hover:border-accent-green/30`}>
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-primary-dark" />
            </div>
            <span className="text-white font-display font-bold text-xl">
              NeuroWealth
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-gray hover:text-accent-green transition-all duration-300 hover:-translate-y-0.5 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-accent-green text-primary-dark px-6 py-2.5 rounded-xl font-semibold hover:bg-accent-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-green/30">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-green transition-colors p-2 hover:bg-accent-green/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 border-t border-white/10 mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-neutral-gray hover:text-accent-green hover:bg-accent-green/10 rounded-xl transition-all duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full bg-accent-green text-primary-dark px-6 py-3 rounded-xl font-semibold hover:bg-accent-green/90 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation