'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    document.querySelectorAll('.feature-card, .stat-card, .rank-card').forEach(el => {
      observer.observe(el);
    });

    // Wallet connection simulation
    const handleWalletClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.textContent?.includes('Connect') || target.textContent?.includes('Start')) {
        e.preventDefault();
        alert('Wallet connection feature will be implemented in the full application. This is a demo landing page.');
      }
    };

    // Add particle effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = 'rgba(78, 205, 196, 0.6)';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1000';
      particle.style.animation = 'particleFade 1s ease-out forwards';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    document.addEventListener('click', handleWalletClick);
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.removeEventListener('click', handleWalletClick);
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="container">
          <div className="logo">EXBIT</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#staking">Staking</a></li>
            <li><a href="#ranks">Ranks</a></li>
            <li><a href="#rewards">Rewards</a></li>
          </ul>
          <a href="#" className="cta-button">Connect Wallet</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="fade-in">Next-Gen Staking Platform</h1>
              <p className="fade-in">Maximize your crypto earnings with up to 0.60% daily ROI, multi-level referral rewards, and a comprehensive ranking system designed for sustainable growth.</p>
              <div className="fade-in">
                <a href="#" className="cta-button-large">Start Staking Now</a>
                <a href="#" className="cta-button-large learn-more">Learn More</a>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat-card fade-in">
                <span className="stat-number">0.60%</span>
                <span className="stat-label">Max Daily ROI</span>
              </div>
              <div className="stat-card fade-in">
                <span className="stat-number">50</span>
                <span className="stat-label">Referral Levels</span>
              </div>
              <div className="stat-card fade-in">
                <span className="stat-number">$444K</span>
                <span className="stat-label">Total Rank Rewards</span>
              </div>
              <div className="stat-card fade-in">
                <span className="stat-number">300%</span>
                <span className="stat-label">Max Return Cap</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Platform Features</h2>
            <div className="features-grid">
              <div className="feature-card fade-in">
                <span className="feature-icon">🚀</span>
                <h3>Smart Contract Integration</h3>
                <p>Built on secure Solidity smart contracts with real-time blockchain interaction through Ethers.js and The Graph analytics.</p>
              </div>
              <div className="feature-card fade-in">
                <span className="feature-icon">💰</span>
                <h3>Daily ROI System</h3>
                <p>Earn consistent daily returns based on your investment tier, with automatic compounding and flexible withdrawal options.</p>
              </div>
              <div className="feature-card fade-in">
                <span className="feature-icon">🌐</span>
                <h3>Multi-Level Referrals</h3>
                <p>Build your network across 50 levels with tiered commission structures and rank-based bonus unlocks.</p>
              </div>
              <div className="feature-card fade-in">
                <span className="feature-icon">📊</span>
                <h3>Real-Time Analytics</h3>
                <p>Track your earnings, referral tree, and performance metrics through our comprehensive dashboard powered by The Graph.</p>
              </div>
              <div className="feature-card fade-in">
                <span className="feature-icon">🏆</span>
                <h3>Rank Progression</h3>
                <p>Advance through 7 ranks (R1-R7) to unlock higher commissions and exclusive weekly rewards up to $10K.</p>
              </div>
              <div className="feature-card fade-in">
                <span className="feature-icon">🔒</span>
                <h3>Secure & Transparent</h3>
                <p>All transactions are on-chain with complete transparency and security through battle-tested smart contracts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="staking" className="roi-section">
          <div className="container">
            <h2 className="section-title">Staking Rewards</h2>
            <div className="roi-table">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Investment Range</th>
                      <th>Daily ROI</th>
                      <th>Return Cap</th>
                      <th>Min. Withdrawal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$50 - $2,500</td>
                      <td className="highlight">0.40%</td>
                      <td className="highlight">250%</td>
                      <td rowSpan={3}>$20</td>
                    </tr>
                    <tr>
                      <td>$2,501 - $10,000</td>
                      <td className="highlight">0.50%</td>
                      <td className="highlight">250%</td>
                    </tr>
                    <tr>
                      <td>$10,001+</td>
                      <td className="highlight">0.60%</td>
                      <td className="highlight">300%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '30px', color: 'rgba(255, 255, 255, 0.7)'}}>
              <p>✅ Daily withdrawals enabled • ✅ Non-working cap: 200% without referrals</p>
            </div>
          </div>
        </section>

        <section id="ranks" className="ranks-section">
          <div className="container">
            <h2 className="section-title">Ranking System</h2>
            <p style={{textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '40px', fontSize: '1.1rem'}}>
              Advance through our comprehensive ranking system to unlock exclusive rewards and higher commission rates.
            </p>
            <div className="ranks-grid">
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 1 (R1)</div>
                <div className="rank-reward">$250 Weekly</div>
                <div className="rank-details">
                  Business: $10K from 3 legs (40% + 30% + 30%)<br/>
                  Self Top-up: $500 • Directs: 5 • Direct Business: $1,000<br/>
                  Total IDs: 30 • Duration: 60 days • Payout: $25 × 10 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 2 (R2)</div>
                <div className="rank-reward">$800 Weekly</div>
                <div className="rank-details">
                  Business: $30K from 3 legs (40% + 30% + 30%)<br/>
                  Self Top-up: $1,000 • Directs: 7 • Direct Business: $2,000<br/>
                  Total IDs: 50 • Duration: 120 days • Payout: $80 × 10 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 3 (R3)</div>
                <div className="rank-reward">$3,000 Weekly</div>
                <div className="rank-details">
                  Business: $100K from 3 legs (40% + 30% + 30%)<br/>
                  Self Top-up: $2,000 • Directs: 10 • Direct Business: $3,000<br/>
                  Total IDs: 120 • Duration: 180 days • Payout: $300 × 10 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 4 (R4)</div>
                <div className="rank-reward">$10,000 Weekly</div>
                <div className="rank-details">
                  Self Top-up: $3,000 • Directs: 15 • Direct Business: $5,000<br/>
                  Total IDs: 200 • Duration: 365 days • Payout: $500 × 20 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 5 (R5)</div>
                <div className="rank-reward">$30,000 Weekly</div>
                <div className="rank-details">
                  Requirements: 3 Rank 4 achievers in 4 different legs<br/>
                  Self Top-up: $4,000 • Directs: 20 • Direct Business: $7,500<br/>
                  Duration: 365 days • Payout: $1,500 × 20 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 6 (R6)</div>
                <div className="rank-reward">$100,000 Weekly</div>
                <div className="rank-details">
                  Requirements: 4 Rank 5 achievers in 5 different legs<br/>
                  Self Top-up: $5,000 • Directs: 25 • Direct Business: $10,000<br/>
                  Duration: 500 days • Payout: $5,000 × 20 weeks
                </div>
              </div>
              <div className="rank-card fade-in">
                <div className="rank-title">Rank 7 (R7)</div>
                <div className="rank-reward">$300,000 Weekly</div>
                <div className="rank-details">
                  Requirements: 5 Rank 6 achievers in 5 different legs<br/>
                  Self Top-up: $10,000 • Directs: 35 • Direct Business: $12,500<br/>
                  Duration: 750 days • Payout: $10,000 × 30 weeks
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '40px'}}>
              <p style={{color: '#4ecdc4', fontSize: '1.3rem', fontWeight: '600'}}>
                Total Potential Rank Rewards: $444,050
              </p>
            </div>
          </div>
        </section>

        <section id="rewards" className="cta-section">
          <div className="container">
            <h2>Ready to Start Earning?</h2>
            <p>Join thousands of users already earning passive income through our comprehensive staking and referral platform.</p>
            <div>
              <a href="#" className="cta-button-large">Connect Wallet & Start</a>
              <a href="#" className="cta-button-large docs-button">View Documentation</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Smart Contract</a>
            <a href="#">Whitepaper</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-content">
            <p>&copy; 2025 Exbit. All rights reserved. Built with Next.js, Solidity & The Graph.</p>
            <p style={{marginTop: '10px', fontSize: '0.9rem'}}>
              🔐 Secured by blockchain technology • 🌐 Powered by Web3 infrastructure
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}