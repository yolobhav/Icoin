import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICOIN - Next-Gen Staking & Rewards Platform',
  description: 'Maximize your crypto earnings with up to 0.60% daily ROI, multi-level referral rewards, and a comprehensive ranking system designed for sustainable growth.',
  keywords: 'crypto, staking, DeFi, blockchain, rewards, ROI, referral',
  openGraph: {
    title: 'ICOIN - Next-Gen Staking & Rewards Platform',
    description: 'Maximize your crypto earnings with up to 0.60% daily ROI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}