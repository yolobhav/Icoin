'use client';

const Footer = () => {
  const footerLinks = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Smart Contract', href: '#' },
    { name: 'Whitepaper', href: '#' },
    { name: 'Support', href: '#' }
  ];

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('This link will be functional in the full application. This is a demo landing page.');
  };

  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="text-2xl font-bold gradient-text-blue">
                EXBIT
              </div>
            </div>
            <p className="text-slate-600 mb-4 max-w-md">
              The next-generation staking and rewards platform built on secure blockchain technology. Maximize your crypto earnings with our comprehensive ecosystem.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-green-500">🔐</span>
                <span>Secured by blockchain</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-blue-500">🌐</span>
                <span>Web3 powered</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#staking" className="text-slate-600 hover:text-blue-600 transition-colors">Staking</a></li>
              <li><a href="#ranks" className="text-slate-600 hover:text-blue-600 transition-colors">Rankings</a></li>
              <li><a href="#rewards" className="text-slate-600 hover:text-blue-600 transition-colors">Rewards</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-sm">
              &copy; 2025 Exbit. All rights reserved. Built with Next.js, Solidity & The Graph.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>System Status: Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;