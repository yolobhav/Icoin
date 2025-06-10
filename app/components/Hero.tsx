'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartStaking = () => {
    alert('Wallet connection feature will be implemented in the full application. This is a demo landing page.');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full float-animation"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full float-animation"
          style={{
            background: 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 fade-in">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 pulse-animation"></span>
              Next-Generation Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 slide-in-left">
              Maximize Your <span className="gradient-text-blue">Crypto Earnings</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-slate-600 max-w-2xl slide-in-left" style={{animationDelay: '0.2s'}}>
              Experience up to 0.60% daily ROI with our advanced staking platform. Build your network across 50 referral levels and unlock exclusive rewards through our comprehensive ranking system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 slide-in-left" style={{animationDelay: '0.4s'}}>
              <button 
                onClick={handleStartStaking}
                className="btn-large"
              >
                Start Staking Now
              </button>
              <button 
                onClick={handleLearnMore}
                className="btn-outline"
              >
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-slate-500 slide-in-left" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span>Secure Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span>Daily Withdrawals</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative slide-in-right">
            <div className="glass rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Dashboard Overview</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-500">Live</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">$12,450</div>
                  <div className="text-sm text-slate-600">Total Earnings</div>
                  <div className="text-xs text-green-600 mt-1">+15.3% today</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-700">0.45%</div>
                  <div className="text-sm text-slate-600">Daily ROI</div>
                  <div className="text-xs text-blue-600 mt-1">Active</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-4">
                <div className="flex items-end justify-between h-20">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-blue-500 rounded-t"
                      style={{
                        height: `${height}%`,
                        width: '12px',
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-2">7-day performance</div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">↗</span>
                    </div>
                    <span className="text-slate-700">Staking Reward</span>
                  </div>
                  <span className="text-green-600 font-medium">+$45.20</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs">👥</span>
                    </div>
                    <span className="text-slate-700">Referral Bonus</span>
                  </div>
                  <span className="text-blue-600 font-medium">+$12.80</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center fade-in">
            <div className="stat-number">0.60%</div>
            <div className="stat-label">Max Daily ROI</div>
          </div>
          <div className="text-center fade-in">
            <div className="stat-number">50</div>
            <div className="stat-label">Referral Levels</div>
          </div>
          <div className="text-center fade-in">
            <div className="stat-number">$444K</div>
            <div className="stat-label">Total Rewards</div>
          </div>
          <div className="text-center fade-in">
            <div className="stat-number">300%</div>
            <div className="stat-label">Max Return Cap</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;