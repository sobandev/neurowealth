'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck, Server, UserCheck, Globe, Award } from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit AES encryption protects all data transmission and storage, meeting the highest industry standards used by major financial institutions.",
      badge: "SOC 2 Type II"
    },
    {
      icon: Lock,
      title: "Multi-Factor Authentication",
      description: "Advanced authentication protocols including biometric verification, hardware tokens, and time-based one-time passwords for maximum account protection.",
      badge: "FIDO2 Certified"
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "GDPR and CCPA compliant data handling ensures your personal information is never shared or sold to third parties.",
      badge: "GDPR Compliant"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud infrastructure with 99.9% uptime, automated backups, and disaster recovery protocols.",
      badge: "ISO 27001"
    }
  ]

  const certifications = [
    { name: "SOC 2 Type II", icon: Award },
    { name: "ISO 27001", icon: Shield },
    { name: "GDPR Compliant", icon: UserCheck },
    { name: "FINRA Registered", icon: FileCheck },
    { name: "SIPC Protected", icon: Lock },
    { name: "SSL Secured", icon: Globe }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #39FF14 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #00D4FF 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Your Security is{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            We employ the highest levels of security and compliance standards to protect 
            your investments and personal data with institutional-grade protection.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-primary-dark/50 glass-effect rounded-xl p-8 h-full hover:bg-primary-dark/70 transition-all duration-300 border border-transparent group-hover:border-accent-green/30">
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                  {feature.badge}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-green/20 to-accent-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-accent-green/20"
                >
                  <feature.icon className="w-8 h-8 text-accent-green" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-green transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-green/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-dark/30 glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Industry Certifications & Compliance
            </h3>
            <p className="text-neutral-gray max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications to ensure 
              your investments are protected and compliant with all regulations.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/50 glass-effect rounded-lg p-4 text-center hover:bg-primary/70 transition-all duration-300"
              >
                <cert.icon className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                <div className="text-white font-medium text-sm">{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { stat: "99.9%", label: "Uptime Guarantee", icon: Server },
            { stat: "256-bit", label: "AES Encryption", icon: Lock },
            { stat: "24/7", label: "Security Monitoring", icon: Eye },
            { stat: "Zero", label: "Security Breaches", icon: Shield }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <item.icon className="w-12 h-12 text-accent-green mx-auto" />
              <div className="text-3xl font-bold text-white">{item.stat}</div>
              <div className="text-neutral-gray">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-2xl p-8"
        >
          <Shield className="w-16 h-16 text-accent-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Your Investments Are Protected
          </h3>
          <p className="text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            All client funds are held in segregated accounts at SIPC-protected institutions. 
            Your investments are insured up to $500,000, giving you peace of mind while 
            our AI works to grow your wealth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Security