'use client';

import { useEffect } from 'react';

const ParticleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle particle creation for better performance
      if (Math.random() > 0.8) return;

      const particle = document.createElement('div');
      particle.className = 'particle-fade';
      particle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 3px;
        height: 3px;
        background: rgba(59, 130, 246, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: particleFade 1.2s ease-out forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 1200);
    };

    // Add particle fade animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFade {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0) translateY(-15px);
        }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (style.parentNode) {
        style.remove();
      }
    };
  }, []);

  return null;
};

export default ParticleEffect;