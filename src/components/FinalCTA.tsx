'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, CheckCircle, Sparkles, TrendingUp, Shield } from 'lucide-react'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const benefits = [
    "Free 7-day trial, no credit card required",
    "Personalized AI investment strategy",
    "Real-time portfolio monitoring",
    "Cancel anytime, no hidden fees"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-green/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-accent-gradient text-primary-dark px-4 py-2 rounded-full font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Limited Time: Free 7-Day Trial
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Wealth?
          </h2>

          <p className="text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors who are already using AI to build smarter, 
            more profitable portfolios. Start your journey today.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-primary-dark/50 glass-effect rounded-2xl p-8 md:p-12 mb-12"
        >
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-gray w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-primary/50 border border-neutral-gray/20 rounded-lg text-white placeholder-neutral-gray focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent-green text-primary-dark px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent-green/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Benefits List */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 text-neutral-gray"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle className="w-10 h-10 text-primary-dark" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome to NeuroWealth!
                </h3>
                <p className="text-neutral-gray">
                  Check your email for next steps to start your free trial.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false)
                  setEmail('')
                }}
                className="text-accent-blue hover:text-accent-green transition-colors"
              >
                Start another trial →
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: TrendingUp,
              title: "15.2% Avg Returns",
              subtitle: "Outperforming market by 3.8%"
            },
            {
              icon: Shield,
              title: "Bank-Level Security",
              subtitle: "SIPC protected up to $500K"
            },
            {
              icon: CheckCircle,
              title: "10,000+ Investors",
              subtitle: "Join our growing community"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <item.icon className="w-8 h-8 text-accent-blue" />
              <div className="text-white font-semibold">{item.title}</div>
              <div className="text-neutral-gray text-sm">{item.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-neutral-gray text-sm"
        >
          By signing up, you agree to our Terms of Service and Privacy Policy. 
          No spam, unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  )
}

export default FinalCTA