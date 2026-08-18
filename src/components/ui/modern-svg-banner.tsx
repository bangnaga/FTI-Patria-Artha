'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { ParticlesBg } from './particles-bg';

export interface ModernSvgBannerProps {
  titleTop?: string;
  titleBottom?: string;
  subtitle?: string;
  badgeText?: string;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: 'orange' | 'maroon' | 'amber' | 'emerald' | 'blue';
  rightTheme?: 'dark-navy' | 'maroon-dark' | 'emerald-dark' | 'slate-dark';
  height?: 'compact' | 'medium' | 'tall';
  breadcrumb?: string;
  showParticles?: boolean | string;
  particlesColor?: string;
}

const ACCENT_COLOR_MAP = {
  orange: {
    stripe: '#F59E0B',
    stripeGlow: '#D97706',
    topText: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    btnBg: 'bg-amber-500 hover:bg-amber-600 text-slate-950',
  },
  maroon: {
    stripe: '#9B2C2C',
    stripeGlow: '#800020',
    topText: 'text-[#800020] dark:text-red-400',
    badgeBg: 'bg-red-500/10 text-red-700 border-red-500/30',
    btnBg: 'bg-[#800020] hover:bg-[#9B2C2C] text-white',
  },
  amber: {
    stripe: '#EAB308',
    stripeGlow: '#CA8A04',
    topText: 'text-yellow-600 dark:text-yellow-400',
    badgeBg: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30',
    btnBg: 'bg-yellow-500 hover:bg-yellow-600 text-slate-950',
  },
  emerald: {
    stripe: '#10B981',
    stripeGlow: '#059669',
    topText: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  blue: {
    stripe: '#3B82F6',
    stripeGlow: '#2563EB',
    topText: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    btnBg: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
};

const RIGHT_THEME_MAP = {
  'dark-navy': {
    gradStart: '#0B1320',
    gradMid: '#111C2E',
    gradEnd: '#080E18',
    rightText: 'text-slate-100',
    rightSub: 'text-slate-400',
  },
  'maroon-dark': {
    gradStart: '#3A000E',
    gradMid: '#5C0017',
    gradEnd: '#240009',
    rightText: 'text-rose-100',
    rightSub: 'text-rose-300/80',
  },
  'emerald-dark': {
    gradStart: '#022C22',
    gradMid: '#064E3B',
    gradEnd: '#011B14',
    rightText: 'text-emerald-100',
    rightSub: 'text-emerald-300/80',
  },
  'slate-dark': {
    gradStart: '#0F172A',
    gradMid: '#1E293B',
    gradEnd: '#020617',
    rightText: 'text-slate-100',
    rightSub: 'text-slate-400',
  },
};

const HEIGHT_MAP = {
  compact: 'h-[150px] min-h-[150px]',
  medium: 'h-[220px] min-h-[220px]',
  tall: 'h-[300px] min-h-[300px]',
};

export const ModernSvgBanner: React.FC<ModernSvgBannerProps> = ({
  titleTop = 'BANNER',
  titleBottom = 'Template',
  subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  badgeText = '',
  ctaText = '',
  ctaLink = '#',
  accentColor = 'orange',
  rightTheme = 'dark-navy',
  height = 'compact',
  breadcrumb = '',
  showParticles,
  particlesColor = 'white',
}) => {
  const accent = ACCENT_COLOR_MAP[accentColor] || ACCENT_COLOR_MAP.orange;
  const theme = RIGHT_THEME_MAP[rightTheme] || RIGHT_THEME_MAP['dark-navy'];
  const heightClass = HEIGHT_MAP[height] || HEIGHT_MAP.compact;

  const breadcrumbItems = breadcrumb ? breadcrumb.split('/').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className={`relative w-full overflow-hidden shadow-xl select-none ${heightClass}`}>
      {/* Background Particles.js Canvas Animation */}
      {showParticles && showParticles !== 'false' && (
        <ParticlesBg color={particlesColor} count={40} speed={0.8} />
      )}
      {/* SVG Background Layer */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient Right Section */}
          <linearGradient id="rightBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.gradStart} />
            <stop offset="50%" stopColor={theme.gradMid} />
            <stop offset="100%" stopColor={theme.gradEnd} />
          </linearGradient>

          {/* Accent Stripe Gradient */}
          <linearGradient id="accentStripeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent.stripe} />
            <stop offset="100%" stopColor={accent.stripeGlow} />
          </linearGradient>

          {/* Translucent Dark Stripe Gradient */}
          <linearGradient id="translucentStripe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* 1. Left White Region */}
        <rect width="1200" height="300" fill="#FFFFFF" />

        {/* 2. Main Dark Section Polygon (Right Side) */}
        <path
          d="M 420 0 L 1200 0 L 1200 300 L 260 300 Z"
          fill="url(#rightBgGrad)"
        />

        {/* 3. Orange/Accent Diagonal Stripe Polygon */}
        <path
          d="M 370 0 L 430 0 L 270 300 L 210 300 Z"
          fill="url(#accentStripeGrad)"
        />

        {/* 4. Secondary Subtle Dark Translucent Slanted Stripes for Depth */}
        <path
          d="M 580 0 L 670 0 L 510 300 L 420 300 Z"
          fill="url(#translucentStripe)"
        />
        <path
          d="M 750 0 L 830 0 L 670 300 L 590 300 Z"
          fill="url(#translucentStripe)"
          opacity="0.6"
        />
        <path
          d="M 920 0 L 1020 0 L 860 300 L 760 300 Z"
          fill="url(#translucentStripe)"
          opacity="0.35"
        />

        {/* Fine Accent Top Line */}
        <rect x="0" y="0" width="1200" height="4" fill={accent.stripe} />
      </svg>

      {/* Foreground Content Grid */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side Content (Light Region) */}
        <div className="max-w-[42%] sm:max-w-[38%] md:max-w-[32%] py-2 flex flex-col justify-center space-y-1">
          {/* Optional Breadcrumb */}
          {breadcrumbItems.length > 0 && (
            <nav className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-500">
              <Home className="w-3 h-3 text-slate-400" />
              {breadcrumbItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-2.5 h-2.5 text-slate-400" />}
                  <span className={idx === breadcrumbItems.length - 1 ? 'text-slate-800 font-extrabold' : 'text-slate-500'}>
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Optional Badge */}
          {badgeText && (
            <div className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md border text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${accent.badgeBg}`}>
              <Sparkles className="w-2.5 h-2.5" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Typography matching reference image */}
          <div className="leading-none">
            {titleTop && (
              <h1 className={`text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight ${accent.topText}`}>
                {titleTop}
              </h1>
            )}
            {titleBottom && (
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                {titleBottom}
              </h2>
            )}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-slate-500 text-[10px] sm:text-xs font-medium leading-snug line-clamp-2 pt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Side Content (Dark Region) */}
        <div className="flex-1 max-w-[55%] sm:max-w-[58%] pl-8 sm:pl-16 flex items-center justify-between text-right space-x-4">
          <div className="hidden sm:block text-left space-y-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80 font-bold block">
              FAKULTAS TEKNIK & INFORMATIKA
            </span>
            <h3 className={`text-sm sm:text-lg font-black tracking-wide ${theme.rightText}`}>
              UNIVERSITAS PATRIA ARTHA
            </h3>
            <p className={`text-[11px] font-medium ${theme.rightSub} line-clamp-1`}>
              Inovasi Teknologi & Pendidikan Tinggi Terakreditasi Unggul
            </p>
          </div>

          {/* Optional CTA Button */}
          {ctaText && (
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 shrink-0 transition-transform ${accent.btnBg}`}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ModernSvgBanner;
