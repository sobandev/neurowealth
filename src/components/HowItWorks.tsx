'use client';

import React from 'react';
import { Target, Brain, TrendingUp, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Set Your Goals",
      description: "Tell us your investment objectives, risk tolerance, and timeline. Our AI analyzes your profile to understand your unique needs.",
      color: "text-accent-green"
    },
    {
      icon: Brain,
      title: "AI Analyzes Markets",
      description: "Our advanced algorithms process thousands of market signals, economic indicators, and global trends in real-time.",
      color: "text-accent-blue"
    },
    {
      icon: TrendingUp,
      title: "Get Optimized Portfolios",
      description: "Receive personalized investment recommendations with optimal asset allocation tailored to your goals and risk profile.",
      color: "text-accent-green"
    },
    {
      icon: CheckCircle,
      title: "Monitor & Optimize",
      description: "Continuous AI monitoring adjusts your portfolio automatically, ensuring optimal performance and risk management.",
      color: "text-accent-blue"
    }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #39FF14 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #00D4FF 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              NeuroWealth
            </span> Works
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Our AI-driven platform simplifies wealth building through intelligent automation 
            and personalized investment strategies.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-green/30 to-accent-blue/30 z-0" />
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-primary-dark/50 glass-effect rounded-xl p-6 h-full hover:bg-primary-dark/70 transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-gradient rounded-full flex items-center justify-center text-primary-dark font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={64} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent-green/30 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <button className="bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-blue/90 transition-all duration-300 glow-effect hover:scale-105">
            Start Building Wealth Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;