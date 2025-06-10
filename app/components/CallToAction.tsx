'use client';

const CallToAction = () => {
  const handleConnectWallet = () => {
    alert('Wallet connection feature will be implemented in the full application. This is a demo landing page.');
  };

  const handleViewDocs = () => {
    alert('Documentation will be available in the full application. This is a demo landing page.');
  };

  return (
    <section 
      id="rewards" 
      className="py-20 gradient-blue relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full float-animation"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full float-animation"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 pulse-animation"></span>
            Ready to Start?
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Thousands of <br />
            <span className="text-blue-100">Successful Investors</span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Start earning passive income today through our comprehensive staking and referral platform. Connect your wallet and begin your journey to financial freedom.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <button 
              onClick={handleConnectWallet}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              Connect Wallet & Start Earning
            </button>
            <button 
              onClick={handleViewDocs}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              View Documentation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bank-Level Security</h3>
              <p className="text-blue-100 text-sm">Multi-layer security protocols protect your investments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Transactions</h3>
              <p className="text-blue-100 text-sm">Lightning-fast blockchain transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Community</h3>
              <p className="text-blue-100 text-sm">Join investors from around the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;