'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import StakingRewards from './components/StakingRewards';
import RankingSystem from './components/RankingSystem';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ParticleEffect from './components/ParticleEffect';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative">
      <ParticleEffect />
      <Header />
      <Hero />
      <Features />
      <StakingRewards />
      <RankingSystem />
      <CallToAction />
      <Footer />
    </main>
  );
}