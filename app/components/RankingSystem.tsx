'use client';

import { useEffect, useRef } from 'react';

const RankingSystem = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.rank-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in');
              }, index * 150);
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

  const ranks = [
    {
      title: 'Rank 1 (R1)',
      weeklyReward: '$250',
      duration: '60 days',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      details: [
        'Business: $10K from 3 legs (40% + 30% + 30%)',
        'Self Top-up: $500 • Directs: 5',
        'Direct Business: $1,000 • Total IDs: 30'
      ]
    },
    {
      title: 'Rank 2 (R2)',
      weeklyReward: '$800',
      duration: '120 days',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      details: [
        'Business: $30K from 3 legs (40% + 30% + 30%)',
        'Self Top-up: $1,000 • Directs: 7',
        'Direct Business: $2,000 • Total IDs: 50'
      ]
    },
    {
      title: 'Rank 3 (R3)',
      weeklyReward: '$3,000',
      duration: '180 days',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      details: [
        'Business: $100K from 3 legs (40% + 30% + 30%)',
        'Self Top-up: $2,000 • Directs: 10',
        'Direct Business: $3,000 • Total IDs: 120'
      ]
    },
    {
      title: 'Rank 4 (R4)',
      weeklyReward: '$10,000',
      duration: '365 days',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      details: [
        'Self Top-up: $3,000 • Directs: 15',
        'Direct Business: $5,000',
        'Total IDs: 200 • Payout: $500 × 20 weeks'
      ]
    },
    {
      title: 'Rank 5 (R5)',
      weeklyReward: '$30,000',
      duration: '365 days',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      details: [
        'Requirements: 3 Rank 4 achievers in 4 different legs',
        'Self Top-up: $4,000 • Directs: 20',
        'Direct Business: $7,500'
      ]
    },
    {
      title: 'Rank 6 (R6)',
      weeklyReward: '$100,000',
      duration: '500 days',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      details: [
        'Requirements: 4 Rank 5 achievers in 5 different legs',
        'Self Top-up: $5,000 • Directs: 25',
        'Direct Business: $10,000'
      ]
    },
    {
      title: 'Rank 7 (R7)',
      weeklyReward: '$300,000',
      duration: '750 days',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      details: [
        'Requirements: 5 Rank 6 achievers in 5 different legs',
        'Self Top-up: $10,000 • Directs: 35',
        'Direct Business: $12,500'
      ]
    }
  ];

  return (
    <section id="ranks" ref={sectionRef} className="py-20 section-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Ranking System
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Elite <span className="gradient-text-blue">Ranking System</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Progress through our comprehensive ranking system to unlock exclusive rewards and higher commission rates. Each rank offers substantial weekly rewards and enhanced earning potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className="rank-card bg-white rounded-2xl p-6 feature-card-hover relative overflow-hidden opacity-0 shadow-lg border border-slate-100"
            >
              {/* Top gradient border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rank.color}`} />
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full ${rank.bgColor} ${rank.textColor} text-sm font-medium mb-4`}>
                {rank.title}
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {rank.weeklyReward}
                </div>
                <div className="text-sm text-slate-500">Weekly Reward</div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">⏱</span>
                  </span>
                  Duration: {rank.duration}
                </div>
              </div>
              
              <div className="space-y-2">
                {rank.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-sm text-slate-600 leading-relaxed">
                    {detail}
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Rank Progress</span>
                  <span>{Math.min(100, (index + 1) * 14)}%</span>
                </div>
                <div className="progress-bar mt-2">
                  <div 
                    className="progress-fill"
                    style={{ width: `${Math.min(100, (index + 1) * 14)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Rewards Summary */}
        <div className="text-center glass-blue rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Total Potential Rewards
          </h3>
          <div className="text-5xl md:text-6xl font-bold gradient-text-blue mb-4">
            $444,050
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            This represents the maximum potential earnings across all ranking levels. Start your journey today and unlock these exclusive rewards through our comprehensive ranking system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RankingSystem;