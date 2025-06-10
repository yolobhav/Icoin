'use client';

const StakingRewards = () => {
  const stakingTiers = [
    {
      range: '$50 - $2,500',
      dailyROI: '0.40%',
      returnCap: '250%',
      minWithdrawal: '$20',
      popular: false
    },
    {
      range: '$2,501 - $10,000',
      dailyROI: '0.50%',
      returnCap: '250%',
      minWithdrawal: '$20',
      popular: true
    },
    {
      range: '$10,001+',
      dailyROI: '0.60%',
      returnCap: '300%',
      minWithdrawal: '$20',
      popular: false
    }
  ];

  return (
    <section id="staking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Staking Rewards
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Competitive <span className="gradient-text-blue">ROI Tiers</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choose your investment level and start earning daily returns with our transparent and sustainable reward system.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stakingTiers.map((tier, index) => (
            <div
              key={index}
              className={`pricing-card ${tier.popular ? 'pricing-featured' : ''}`}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {tier.range}
                </h3>
                <div className="text-4xl font-bold gradient-text-blue mb-1">
                  {tier.dailyROI}
                </div>
                <div className="text-sm text-slate-500 mb-6">Daily ROI</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Return Cap</span>
                    <span className="font-semibold text-slate-900">{tier.returnCap}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Min. Withdrawal</span>
                    <span className="font-semibold text-slate-900">{tier.minWithdrawal}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Withdrawal Frequency</span>
                    <span className="font-semibold text-green-600">Daily</span>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Start Staking
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional Table for Mobile/Desktop */}
        <div className="table-modern mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Investment Range</th>
                  <th className="text-left">Daily ROI</th>
                  <th className="text-left">Return Cap</th>
                  <th className="text-left">Min. Withdrawal</th>
                </tr>
              </thead>
              <tbody>
                {stakingTiers.map((tier, index) => (
                  <tr key={index}>
                    <td className="font-medium">{tier.range}</td>
                    <td className="table-highlight">{tier.dailyROI}</td>
                    <td className="table-highlight">{tier.returnCap}</td>
                    <td>{tier.minWithdrawal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-blue rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-slate-700">Daily withdrawals enabled</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-slate-700">Automatic compound option</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-slate-700">No lock-up periods</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-slate-700">Transparent smart contracts</span>
              </div>
            </div>
          </div>

          <div className="glass-blue rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Special Conditions</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-xs">ℹ</span>
                </div>
                <div>
                  <div className="text-slate-700">Non-working cap: 200% without referrals</div>
                  <div className="text-sm text-slate-500">Earn up to 200% of your investment without building a network</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-xs">ℹ</span>
                </div>
                <div>
                  <div className="text-slate-700">Enhanced returns with referrals</div>
                  <div className="text-sm text-slate-500">Unlock higher caps by building your referral network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingRewards;