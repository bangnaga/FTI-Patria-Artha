"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UpaLogo } from './UpaLogo';
import { useApp } from '../context/AppContext';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const { isDataLoaded } = useApp();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fti_website_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.logoDarkUrl || parsed?.logoUrl) {
          setCustomLogoUrl(parsed.logoDarkUrl || parsed.logoUrl);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  useEffect(() => {
    // Fast animated progress fill synchronized with real data loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        // If data is still loading from backend API, hold progress at 92% until ready
        if (prev >= 92 && !isDataLoaded) {
          return 92;
        }
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        // Random smooth increment
        const diff = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + diff, isDataLoaded ? 100 : 92);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isDataLoaded]);

  const getStatusText = () => {
    if (progress < 35) return 'Memuat sistem & komponen...';
    if (progress < 75) return 'Menyiapkan modul akademik FTI...';
    return 'Selamat datang di FTI Universitas Patria Artha';
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: 'blur(10px)',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-white text-slate-900 select-none overflow-hidden"
        >
          {/* Ambient Glowing Background Orbs (Light Mode) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-rose-200/60 rounded-full blur-[140px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-red-100/70 rounded-full blur-[140px]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
          </div>

          {/* Central Emblem & Loading Content */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6">
            
            {/* Animated Logo Container with Orbit Ring */}
            <div className="relative flex items-center justify-center">
              
              {/* Outer Rotating Particle Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-red-500/40 p-1"
              />

              {/* Glowing Pulse Accent Ring */}
              <motion.div
                animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-rose-300 to-red-500 blur-md opacity-40"
              />

              {/* Header Transparent Logo Display */}
              <div className="absolute flex items-center justify-center p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/80 backdrop-blur-md">
                {customLogoUrl ? (
                  <img 
                    src={customLogoUrl} 
                    alt="Logo FTI UPA" 
                    className="h-16 object-contain max-w-[200px] drop-shadow-md" 
                  />
                ) : (
                  <UpaLogo size={76} />
                )}
              </div>
            </div>

            {/* Title & Brand Subtitle */}
            <div className="space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-xl font-black tracking-tight text-slate-900"
              >
                FAKULTAS TEKNIK & INFORMATIKA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs font-bold tracking-wider text-red-700 uppercase"
              >
                Universitas Patria Artha
              </motion.p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-full space-y-2 pt-2">
              
              {/* Progress Bar Container */}
              <div className="relative w-full h-2.5 bg-slate-100 border border-slate-200 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 rounded-full shadow-md shadow-red-500/25"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                />
              </div>

              {/* Progress Detail Row */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 px-1">
                <span className="font-sans text-slate-600 transition-all duration-300">
                  {getStatusText()}
                </span>
                <span className="font-bold text-red-600">{progress}%</span>
              </div>

            </div>

          </div>

          {/* Footer Copyright Note */}
          <div className="absolute bottom-6 text-center z-10">
            <span className="text-[10px] font-semibold text-slate-400 tracking-wide uppercase">
              © 2026 FTI Patria Artha • Cyber & Technology Campus
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
