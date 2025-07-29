'use client';

import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-green rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-green rounded-full blur-2xl animate-float" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-accent-green/30 animate-slide-up">
            <TrendingUp className="w-4 h-4 text-accent-green mr-2" />
            <span className="text-accent-green text-sm font-medium">
              AI-Powered Investment Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight animate-slide-up">
            Grow Your Wealth with{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              AI-Powered Investing
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Personalized portfolios, real-time market insights, and 24/7 AI monitoring 
            to maximize your investment returns with institutional-grade intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up">
            <button className="group bg-accent-green text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-accent-green/90 transition-all duration-300 shadow-lg hover:shadow-accent-green/25 hover:scale-105">
              Start Free 7-Day Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-lg font-semibold text-lg border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-300 hover:scale-105">
              See Your Potential Returns
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-neutral-gray animate-fade-in">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-green" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent-blue" />
              <span>$2B+ Assets Managed</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-green" />
              <span>Real-time AI Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;