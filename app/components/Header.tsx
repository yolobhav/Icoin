'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnectWallet = () => {
    alert('Wallet connection feature will be implemented in the full application. This is a demo landing page.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div className="text-2xl font-bold gradient-text-blue">
              EXBIT
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('staking')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Staking
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('ranks')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Ranks
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('rewards')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Rewards
              </button>
            </li>
          </ul>

          {/* CTA Button */}
          <button 
            onClick={handleConnectWallet}
            className="hidden md:block btn-primary"
          >
            Connect Wallet
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('staking')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left py-2"
              >
                Staking
              </button>
              <button 
                onClick={() => scrollToSection('ranks')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left py-2"
              >
                Ranks
              </button>
              <button 
                onClick={() => scrollToSection('rewards')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left py-2"
              >
                Rewards
              </button>
              <button 
                onClick={handleConnectWallet}
                className="btn-primary text-center mt-4"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;