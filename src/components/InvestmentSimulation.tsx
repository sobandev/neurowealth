'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { DollarSign, TrendingUp, Calendar, Target } from 'lucide-react'

const InvestmentSimulation = () => {
  const [investment, setInvestment] = useState(10000)
  const [timeframe, setTimeframe] = useState(5)

  // Calculate projected returns (dummy data with realistic growth)
  const calculateReturns = (principal: number, years: number) => {
    const annualReturn = 0.12 // 12% average return
    const monthlyReturn = annualReturn / 12
    const months = years * 12
    
    const data = []
    let currentValue = principal
    
    for (let i = 0; i <= months; i++) {
      if (i === 0) {
        data.push({
          month: i,
          value: principal,
          year: 0
        })
      } else {
        // Add some volatility for realism
        const volatility = (Math.random() - 0.5) * 0.02
        currentValue = currentValue * (1 + monthlyReturn + volatility)
        data.push({
          month: i,
          value: Math.round(currentValue),
          year: Math.round((i / 12) * 10) / 10
        })
      }
    }
    
    return data
  }

  const projectionData = calculateReturns(investment, timeframe)
  const finalValue = projectionData[projectionData.length - 1]?.value || investment
  const totalGain = finalValue - investment
  const percentageGain = ((totalGain / investment) * 100).toFixed(1)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-dark/90 glass-effect p-3 rounded-lg border border-accent-green/30">
          <p className="text-white font-medium text-sm">Year {label}</p>
          <p className="text-accent-green text-sm">
            Value: {formatCurrency(payload[0].value)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-accent-blue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            See Your{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Wealth Potential
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-gray max-w-3xl mx-auto px-4 sm:px-0">
            Discover how our AI-driven investment strategies could grow your wealth over time. 
            Adjust the parameters below to see personalized projections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Controls - Mobile first design */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up order-2 lg:order-1">
            {/* Investment Amount Slider */}
            <div className="space-y-4">
              <label className="block text-white font-semibold text-base sm:text-lg">
                Initial Investment
              </label>
              <div className="space-y-3">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-primary-dark rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #39FF14 0%, #39FF14 ${((investment - 1000) / 99000) * 100}%, #1A1A2E ${((investment - 1000) / 99000) * 100}%, #1A1A2E 100%)`
                  }}
                />
                <div className="flex justify-between text-xs sm:text-sm text-neutral-gray">
                  <span>$1,000</span>
                  <span className="text-accent-green font-bold text-base sm:text-lg">
                    {formatCurrency(investment)}
                  </span>
                  <span>$100,000</span>
                </div>
              </div>
            </div>

            {/* Time Frame Slider */}
            <div className="space-y-4">
              <label className="block text-white font-semibold text-base sm:text-lg">
                Investment Timeline
              </label>
              <div className="space-y-3">
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full h-2 bg-primary-dark rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #00D4FF 0%, #00D4FF ${((timeframe - 1) / 19) * 100}%, #1A1A2E ${((timeframe - 1) / 19) * 100}%, #1A1A2E 100%)`
                  }}
                />
                <div className="flex justify-between text-xs sm:text-sm text-neutral-gray">
                  <span>1 year</span>
                  <span className="text-accent-blue font-bold text-base sm:text-lg">
                    {timeframe} years
                  </span>
                  <span>20 years</span>
                </div>
              </div>
            </div>

            {/* Results Cards - Mobile optimized */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-primary-dark/50 glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green mx-auto mb-2" />
                <p className="text-neutral-gray text-xs sm:text-sm">Projected Value</p>
                <p className="text-white font-bold text-lg sm:text-xl">{formatCurrency(finalValue)}</p>
              </div>

              <div className="bg-primary-dark/50 glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent-blue mx-auto mb-2" />
                <p className="text-neutral-gray text-xs sm:text-sm">Total Gain</p>
                <p className="text-white font-bold text-lg sm:text-xl">+{percentageGain}%</p>
              </div>
            </div>

            {/* CTA - Mobile optimized */}
            <button className="w-full bg-accent-gradient text-primary-dark py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg">
              Start Growing Your Wealth
            </button>
          </div>

          {/* Chart - Mobile responsive */}
          <div className="bg-primary-dark/30 glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 animate-slide-up order-1 lg:order-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
                Projected Growth Over Time
              </h3>
              <p className="text-neutral-gray text-sm sm:text-base">
                Based on historical AI-optimized portfolio performance
              </p>
            </div>

            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectionData}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A1A2E" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#E5E7EB"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    stroke="#E5E7EB"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#39FF14"
                    strokeWidth={2}
                    fill="url(#colorGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart Footer - Mobile responsive */}
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-neutral-gray">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-green rounded-full" />
                <span>AI-Optimized Portfolio</span>
              </div>
              <span className="text-center">*Past performance doesn't guarantee future results</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #39FF14;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(57, 255, 20, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #39FF14;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(57, 255, 20, 0.5);
        }

        @media (min-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
            box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
          }
        }
      `}</style>
    </section>
  )
}

export default InvestmentSimulation