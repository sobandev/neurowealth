'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'How It Works', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Webinars', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Github, href: '#', name: 'GitHub' },
  ]

  return (
    <footer className="bg-primary-dark border-t border-neutral-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-dark" />
              </div>
              <span className="text-white font-display font-bold text-xl">
                NeuroWealth
              </span>
            </motion.div>
            
            <p className="text-neutral-gray mb-6 leading-relaxed">
              AI-powered investment intelligence platform helping investors build 
              smarter, more profitable portfolios with institutional-grade technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-neutral-gray">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@neurowealth.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-neutral-gray hover:text-accent-green transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-gray/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-neutral-gray text-sm mb-4 md:mb-0">
            © 2024 NeuroWealth. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-primary/50 glass-effect rounded-lg flex items-center justify-center text-neutral-gray hover:text-accent-green hover:bg-primary/70 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-neutral-gray/10">
          <p className="text-xs text-neutral-gray/70 leading-relaxed">
            <strong>Investment Disclaimer:</strong> All investments involve risk, including potential loss of principal. 
            Past performance does not guarantee future results. NeuroWealth provides investment advisory services 
            and is registered with the SEC. Please read our Form ADV and other disclosures carefully before investing. 
            This website is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer