'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Executive",
      company: "Fortune 500",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "NeuroWealth's AI completely transformed my investment strategy. I've seen a 18% return in just 8 months, far exceeding my previous portfolio performance.",
      roi: "+18%",
      timeframe: "8 months",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Wealth Manager",
      company: "Private Banking",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The real-time market analysis and automated rebalancing have saved me countless hours while delivering superior returns for my clients. It's like having a team of analysts working 24/7.",
      roi: "+22%",
      timeframe: "1 year",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Startup Founder",
      company: "FinTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "As someone who understands technology, I was impressed by the sophistication of NeuroWealth's algorithms. The platform consistently identifies opportunities I would have missed.",
      roi: "+15%",
      timeframe: "6 months",
      rating: 5
    },
    {
      name: "David Park",
      role: "Investment Advisor",
      company: "Boutique Firm",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The risk management features are exceptional. During market volatility, NeuroWealth protected my portfolio while still capturing upside potential. Truly impressive AI.",
      roi: "+12%",
      timeframe: "10 months",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Retail Investor",
      company: "Healthcare Professional",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "I was skeptical about AI investing, but the results speak for themselves. The platform is intuitive, and I love getting insights that help me understand my investments better.",
      roi: "+14%",
      timeframe: "7 months",
      rating: 5
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-accent-green rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-accent-blue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Investment Professionals
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-gray max-w-3xl mx-auto px-4 sm:px-0">
            See how NeuroWealth has helped investors and wealth managers achieve 
            superior returns through AI-powered investment strategies.
          </p>
        </div>

        {/* Testimonial Carousel - Mobile responsive */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-primary/50 glass-effect rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 transition-all duration-500">
            {/* Quote Icon */}
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-accent-green mb-4 sm:mb-6 opacity-50" />

            {/* Testimonial Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-light">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green fill-current" />
                ))}
              </div>

              {/* Author Info - Mobile responsive layout */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent-green/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-neutral-gray text-sm sm:text-base">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-accent-blue text-xs sm:text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Performance Stats - Mobile layout */}
                <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-accent-green justify-center">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-bold text-lg sm:text-xl">
                        {testimonials[currentIndex].roi}
                      </span>
                    </div>
                    <p className="text-neutral-gray text-xs sm:text-sm">Returns</p>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg sm:text-xl">
                      {testimonials[currentIndex].timeframe}
                    </div>
                    <p className="text-neutral-gray text-xs sm:text-sm">Timeframe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Mobile optimized */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark/80 glass-effect rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark/80 glass-effect rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-green scale-125' 
                  : 'bg-neutral-gray/30 hover:bg-neutral-gray/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators - Mobile responsive */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-green">10,000+</div>
            <div className="text-neutral-gray text-sm sm:text-base">Active Investors</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-blue">$2.5B+</div>
            <div className="text-neutral-gray text-sm sm:text-base">Assets Under Management</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-green">4.9/5</div>
            <div className="text-neutral-gray text-sm sm:text-base">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials