'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export interface Hero231Props {
  badgeText?: string;
  title: string;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  logos?: { name: string; logoUrl?: string }[];
  images?: string[];
  theme?: 'light' | 'dark';
}

const DEFAULT_LOGOS = [
  { name: 'Descript', logoUrl: '' },
  { name: 'Mercury', logoUrl: '' },
  { name: 'Ramp', logoUrl: '' },
  { name: 'Retool', logoUrl: '' },
  { name: 'Waterdrop', logoUrl: '' },
];

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
];

export default function Hero231({
  badgeText = 'Flexible Plan customized for you',
  title = 'Blocks Built With Shadcn & Tailwind.',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem id voluptates sed doloremque voluptas dolor laudantium eaque ex.',
  primaryCtaLabel = 'Jelajahi Program Studi',
  primaryCtaHref = '#prodi',
  secondaryCtaLabel = 'Daftar SPMB Online',
  secondaryCtaHref = '#spmb',
  logos = DEFAULT_LOGOS,
  images = DEFAULT_IMAGES,
  theme = 'light',
}: Hero231Props) {
  const isDark = theme === 'dark';
  const imgList = images.length ? images : DEFAULT_IMAGES;

  return (
    <section className={`relative overflow-hidden w-full py-16 sm:py-24 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row: Partner / Accreditation Logos */}
        {logos && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-end gap-6 sm:gap-10 mb-12 sm:mb-16 opacity-70">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wider uppercase">
                {logo.logoUrl ? (
                  <img src={logo.logoUrl} alt={logo.name} className="h-6 sm:h-7 object-contain grayscale hover:grayscale-0 transition-all" />
                ) : (
                  <span className="text-slate-400 dark:text-slate-500 text-sm font-semibold tracking-wide">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Badge, Typography Title, Subtitle & Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Pill Badge */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-white animate-pulse" />
                <span>{badgeText}</span>
              </div>
            )}

            {/* Giant Modern Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              {title}
            </h1>

            {/* Description Paragraph */}
            {description && (
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            {(primaryCtaLabel || secondaryCtaLabel) && (
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                {primaryCtaLabel && (
                  <a
                    href={primaryCtaHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-xl shadow-red-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{primaryCtaLabel}</span>
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                )}
                {secondaryCtaLabel && (
                  <a
                    href={secondaryCtaHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-base border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-all"
                  >
                    <span>{secondaryCtaLabel}</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column: 3 Staggered Image Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end gap-3 sm:gap-4 overflow-visible pt-4 lg:pt-0">
            
            {/* Card 1: Left Medium Card */}
            {imgList[0] && (
              <div className="relative w-1/3 max-w-[190px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 transform -rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-100 dark:bg-slate-800">
                <img
                  src={imgList[0]}
                  alt="Gallery Showcase 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Card 2: Center Tall Primary Card */}
            {imgList[1] && (
              <div className="relative w-2/5 max-w-[230px] aspect-[3/4.5] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/80 dark:border-slate-700 z-10 transform hover:scale-105 transition-transform duration-500 bg-slate-900">
                <img
                  src={imgList[1]}
                  alt="Gallery Showcase 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Card 3: Right Medium Card */}
            {imgList[2] && (
              <div className="relative w-1/3 max-w-[190px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-100 dark:bg-slate-800">
                <img
                  src={imgList[2]}
                  alt="Gallery Showcase 3"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
