'use client';

import { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🔐',
      title: 'Smart Contract Security',
      description: 'Built on battle-tested Solidity smart contracts with comprehensive security audits and real-time blockchain interaction through Ethers.js.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: '💎',
      title: 'Premium ROI System',
      description: 'Earn consistent daily returns up to 0.60% based on your investment tier, with automatic compounding and flexible withdrawal options.',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: '🌐',
      title: 'Multi-Level Network',
      description: 'Build and expand your referral network across 50 levels with tiered commission structures and rank-based bonus multipliers.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track your earnings, referral tree, and performance metrics through our comprehensive dashboard powered by The Graph protocol.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: '🏆',
      title: 'Elite Ranking System',
      description: 'Progress through 7 exclusive ranks (R1-R7) to unlock higher commissions and weekly rewards up to $300,000.',
      color: 'bg-rose-50 text-rose-600'
    },
    {
      icon: '⚡',
      title: 'Instant Transactions',
      description: 'Experience lightning-fast transactions with complete transparency and security through our optimized blockchain infrastructure.',
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 section-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Platform Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to <span className="gradient-text-blue">Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with user-friendly design to maximize your earning potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-2xl p-8 feature-card-hover relative overflow-hidden opacity-0 feature-highlight"
            >
              <div className={`icon-circle ${feature.color}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 glass-blue rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Built for <span className="gradient-text-blue">Scale & Security</span>
              </h3>
              <p className="text-slate-600 mb-6">
                Our platform is designed to handle millions of transactions while maintaining the highest security standards. Every feature is optimized for performance and user experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Multi-layer Security</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">Security Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-600">Secure</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Smart Contract Audit</span>
                    <span className="text-sm font-medium text-green-600">Passed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Penetration Testing</span>
                    <span className="text-sm font-medium text-green-600">Passed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Code Review</span>
                    <span className="text-sm font-medium text-green-600">Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;