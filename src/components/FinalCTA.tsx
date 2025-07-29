'use client'

import React, { useState } from 'react'
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background Effects - Mobile optimized */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-green/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />

        {/* Floating Particles - Reduced for mobile */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-accent-green/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header - Mobile optimized */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent-gradient text-primary-dark px-3 py-2 sm:px-4 sm:py-2 rounded-full font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Limited Time: Free 7-Day Trial
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Ready to{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Wealth?
          </h2>

          <p className="text-lg sm:text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Join thousands of investors who are already using AI to build smarter, 
            more profitable portfolios. Start your journey today.
          </p>
        </div>

        {/* Form Section - Mobile responsive */}
        <div className="bg-primary-dark/50 glass-effect rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 animate-slide-up">
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-neutral-gray w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-primary/50 border border-neutral-gray/20 rounded-lg text-white placeholder-neutral-gray focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-accent-green text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent-green/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] sm:min-w-[160px] text-sm sm:text-base hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Benefits List - Mobile responsive */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 text-neutral-gray text-sm sm:text-base"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary-dark" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Welcome to NeuroWealth!
                </h3>
                <p className="text-neutral-gray text-sm sm:text-base">
                  Check your email for next steps to start your free trial.
                </p>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setEmail('')
                }}
                className="text-accent-blue hover:text-accent-green transition-colors text-sm sm:text-base"
              >
                Start another trial →
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators - Mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
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
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-blue" />
              <div className="text-white font-semibold text-sm sm:text-base">{item.title}</div>
              <div className="text-neutral-gray text-xs sm:text-sm">{item.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Footer Note - Mobile responsive */}
        <p className="mt-6 sm:mt-8 text-neutral-gray text-xs sm:text-sm px-4 sm:px-0 animate-fade-in">
          By signing up, you agree to our Terms of Service and Privacy Policy. 
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default FinalCTA