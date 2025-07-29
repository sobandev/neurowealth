'use client'

import React from 'react'
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Zap,
  Target,
  Globe,
  CheckCircle
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Advanced machine learning algorithms analyze market patterns, economic indicators, and global trends to identify optimal investment opportunities.",
      benefits: ["Real-time market analysis", "Predictive modeling", "Risk assessment"]
    },
    {
      icon: TrendingUp,
      title: "Smart Portfolio Optimization",
      description: "Dynamic asset allocation that automatically adjusts based on market conditions, your goals, and risk tolerance for maximum returns.",
      benefits: ["Automated rebalancing", "Tax optimization", "Diversification strategies"]
    },
    {
      icon: Clock,
      title: "24/7 Market Monitoring",
      description: "Continuous surveillance of global markets ensures your portfolio is always positioned to capitalize on opportunities and minimize risks.",
      benefits: ["Round-the-clock analysis", "Instant alerts", "Global market coverage"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk models protect your investments with stop-loss mechanisms, volatility controls, and downside protection strategies.",
      benefits: ["Downside protection", "Volatility control", "Loss prevention"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive reporting and analytics provide deep insights into your portfolio performance, attribution analysis, and optimization suggestions.",
      benefits: ["Detailed reporting", "Performance attribution", "Benchmark comparison"]
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description: "Personalized investment strategies aligned with your specific financial goals, whether it's retirement, wealth building, or income generation.",
      benefits: ["Custom strategies", "Goal tracking", "Timeline optimization"]
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #39FF14 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #00D4FF 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #39FF14 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Smarter Investing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-gray max-w-3xl mx-auto px-4 sm:px-0">
            Our comprehensive suite of AI-powered tools and features gives you the edge 
            you need to outperform traditional investment strategies.
          </p>
        </div>

        {/* Features Grid - Mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Card */}
              <div className="bg-primary/50 glass-effect rounded-lg sm:rounded-xl p-6 sm:p-8 h-full hover:bg-primary/70 transition-all duration-300 border border-transparent group-hover:border-accent-green/30">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent-gradient rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg group-hover:shadow-accent-green/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-dark" />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-accent-green transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-gray leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center gap-2 text-xs sm:text-sm text-neutral-gray"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent-green flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-accent-green/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section - Mobile responsive */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
          {[
            { icon: Globe, stat: "50+", label: "Global Markets Analyzed" },
            { icon: Zap, stat: "99.9%", label: "Platform Uptime" },
            { icon: TrendingUp, stat: "15.2%", label: "Average Annual Returns" }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-primary/30 glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent-blue mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{item.stat}</div>
              <div className="text-neutral-gray text-sm sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section - Mobile optimized */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <button className="bg-accent-green text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-accent-green/90 transition-all duration-300 glow-effect hover:scale-105 w-full sm:w-auto">
            Experience All Features Free
          </button>
          <p className="text-neutral-gray mt-3 sm:mt-4 text-sm sm:text-base">
            No credit card required • 7-day free trial
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features