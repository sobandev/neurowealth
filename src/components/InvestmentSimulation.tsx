'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
          <p className="text-white font-medium">Year {label}</p>
          <p className="text-accent-green">
            Value: {formatCurrency(payload[0].value)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-blue rounded-full blur-3xl" />
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
            See Your{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              Wealth Potential
            </span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Discover how our AI-driven investment strategies could grow your wealth over time. 
            Adjust the parameters below to see personalized projections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Investment Amount Slider */}
            <div className="space-y-4">
              <label className="block text-white font-semibold text-lg">
                Initial Investment
              </label>
              <div className="space-y-2">
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
                <div className="flex justify-between text-sm text-neutral-gray">
                  <span>$1,000</span>
                  <span className="text-accent-green font-bold text-lg">
                    {formatCurrency(investment)}
                  </span>
                  <span>$100,000</span>
                </div>
              </div>
            </div>

            {/* Time Frame Slider */}
            <div className="space-y-4">
              <label className="block text-white font-semibold text-lg">
                Investment Timeline
              </label>
              <div className="space-y-2">
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
                <div className="flex justify-between text-sm text-neutral-gray">
                  <span>1 year</span>
                  <span className="text-accent-blue font-bold text-lg">
                    {timeframe} years
                  </span>
                  <span>20 years</span>
                </div>
              </div>
            </div>

            {/* Results Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary-dark/50 glass-effect rounded-xl p-4 text-center"
              >
                <DollarSign className="w-8 h-8 text-accent-green mx-auto mb-2" />
                <p className="text-neutral-gray text-sm">Projected Value</p>
                <p className="text-white font-bold text-xl">{formatCurrency(finalValue)}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary-dark/50 glass-effect rounded-xl p-4 text-center"
              >
                <TrendingUp className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                <p className="text-neutral-gray text-sm">Total Gain</p>
                <p className="text-white font-bold text-xl">+{percentageGain}%</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent-gradient text-primary-dark py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
            >
              Start Growing Your Wealth
            </motion.button>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-dark/30 glass-effect rounded-xl p-6"
          >
            <div className="mb-6">
              <h3 className="text-white font-semibold text-xl mb-2">
                Projected Growth Over Time
              </h3>
              <p className="text-neutral-gray">
                Based on historical AI-optimized portfolio performance
              </p>
            </div>

            <div className="h-80">
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
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#E5E7EB"
                    fontSize={12}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#39FF14"
                    strokeWidth={3}
                    fill="url(#colorGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart Footer */}
            <div className="mt-4 flex items-center justify-between text-sm text-neutral-gray">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-green rounded-full" />
                <span>AI-Optimized Portfolio</span>
              </div>
              <span>*Past performance doesn't guarantee future results</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #39FF14;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #39FF14;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
        }
      `}</style>
    </section>
  )
}

export default InvestmentSimulation