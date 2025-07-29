'use client';

import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-gradient">
      {/* Background Elements - Responsive sizes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent-green rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-accent-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-accent-green rounded-full blur-2xl animate-float" />
      </div>

      {/* Floating Icons - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 right-1/4 text-accent-blue opacity-20 animate-float">
          <TrendingUp size={48} />
        </div>
        
        <div className="absolute bottom-1/3 left-1/5 text-accent-green opacity-20 animate-bounce">
          <Shield size={40} />
        </div>

        <div className="absolute top-1/3 left-1/3 text-accent-blue opacity-20 animate-pulse">
          <Zap size={36} />
        </div>
      </div>

      {/* Main Content - Enhanced mobile spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Badge - Responsive text and padding */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full glass-effect border border-accent-green/30 animate-slide-up">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent-green mr-2" />
            <span className="text-accent-green text-xs sm:text-sm font-medium">
              AI-Powered Investment Intelligence
            </span>
          </div>

          {/* Main Headline - Better mobile typography */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight animate-slide-up px-2 sm:px-0">
            Grow Your Wealth with{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              AI-Powered Investing
            </span>
          </h1>

          {/* Subheadline - Responsive text size and spacing */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed animate-slide-up px-4 sm:px-0">
            Personalized portfolios, real-time market insights, and 24/7 AI monitoring 
            to maximize your investment returns with institutional-grade intelligence.
          </p>

          {/* CTA Buttons - Better mobile stacking */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 animate-slide-up px-4 sm:px-0">
            <button className="w-full sm:w-auto group bg-accent-green text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-accent-green/90 transition-all duration-300 shadow-lg hover:shadow-accent-green/25 hover:scale-105">
              Start Free 7-Day Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-300 hover:scale-105">
              See Your Potential Returns
            </button>
          </div>

          {/* Trust Indicators - Better mobile layout */}
          <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-gray animate-fade-in">
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-accent-green" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent-blue" />
              <span>$2B+ Assets Managed</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent-green" />
              <span>Real-time AI Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-accent-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;