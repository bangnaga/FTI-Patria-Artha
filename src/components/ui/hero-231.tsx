'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, Play } from 'lucide-react';

export type HeroBgType = 'solid' | 'gradient' | 'image' | 'video';
export type HeroLayoutStyle = 'staggered' | 'bento' | 'floating-glass' | 'cinematic-center';

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
  // New Background Properties
  bgType?: HeroBgType;
  bgImageUrl?: string;
  bgVideoUrl?: string;
  bgOverlayOpacity?: number; // 0 - 100
  // New Style Properties
  layoutStyle?: HeroLayoutStyle;
}

const DEFAULT_LOGOS = [
  { name: 'BAN-PT UNGGUL' },
  { name: 'LAM INFOKOM' },
  { name: 'AWS ACADEMY' },
  { name: 'MICROSOFT' },
  { name: 'CISCO ACADEMY' },
];

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
];

export default function Hero231({
  badgeText = 'Flexible Plan customized for you',
  title = 'Blocks Built With Shadcn & Tailwind.',
  description = 'Pendidikan tinggi berkualitas berbasis Outcome-Based Education (OBE) yang mengintegrasikan Artificial Intelligence, Cloud Software, dan Cyber Security.',
  primaryCtaLabel = 'Jelajahi Program Studi',
  primaryCtaHref = '#prodi',
  secondaryCtaLabel = 'Daftar SPMB Online',
  secondaryCtaHref = '#spmb',
  logos = DEFAULT_LOGOS,
  images = DEFAULT_IMAGES,
  theme = 'light',
  bgType = 'solid',
  bgImageUrl = '',
  bgVideoUrl = '',
  bgOverlayOpacity = 75,
  layoutStyle = 'staggered',
}: Hero231Props) {
  const isDark = theme === 'dark' || bgType === 'video' || (bgType === 'image' && bgOverlayOpacity > 40);
  const imgList = images.length ? images : DEFAULT_IMAGES;

  // Background Styling Resolver
  const getBgStyleClasses = () => {
    if (bgType === 'gradient') {
      return isDark 
        ? 'bg-gradient-to-br from-[#800020] via-slate-950 to-slate-900 text-white'
        : 'bg-gradient-to-br from-slate-900 via-rose-950 to-[#800020] text-white';
    }
    return isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900';
  };

  return (
    <section className={`relative overflow-hidden w-full py-16 sm:py-24 ${getBgStyleClasses()}`}>
      
      {/* 1. Background Video Layer */}
      {bgType === 'video' && bgVideoUrl && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={bgVideoUrl} type="video/mp4" />
          </video>
          {/* Overlay Darkening */}
          <div 
            className="absolute inset-0 bg-slate-950" 
            style={{ opacity: bgOverlayOpacity / 100 }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
      )}

      {/* 2. Background Image Layer */}
      {bgType === 'image' && bgImageUrl && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={bgImageUrl}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div 
            className="absolute inset-0 bg-slate-950" 
            style={{ opacity: bgOverlayOpacity / 100 }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>
      )}

      {/* 3. Ambient Mesh / Radial Glow for Modern Touch */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[140px] rounded-full z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row: Partner / Accreditation Logos */}
        {logos && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-end gap-6 sm:gap-10 mb-12 sm:mb-16 opacity-75">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
                {logo.logoUrl ? (
                  <img src={logo.logoUrl} alt={logo.name} className="h-6 sm:h-7 object-contain grayscale hover:grayscale-0 transition-all" />
                ) : (
                  <span className="text-slate-400 dark:text-slate-400 font-semibold tracking-wide">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* --- LAYOUT VARIANT 1 & 2 & 3: SPLIT GRID (Staggered, Bento, Floating-Glass) --- */}
        {layoutStyle !== 'cinematic-center' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Badge, Typography Title, Subtitle & Buttons */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              
              {/* Pill Badge */}
              {badgeText && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-slate-800/80 border border-slate-200/40 dark:border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 backdrop-blur-md shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{badgeText}</span>
                </div>
              )}

              {/* Giant Modern Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
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
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-xl shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{primaryCtaLabel}</span>
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </a>
                  )}
                  {secondaryCtaLabel && (
                    <a
                      href={secondaryCtaHref}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-base border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-all backdrop-blur-md"
                    >
                      <span>{secondaryCtaLabel}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Media Gallery Showcase */}
            <div className="lg:col-span-6 relative pt-4 lg:pt-0">
              
              {/* STYLE A: STAGGERED CARDS (Default Shadcn 231) */}
              {layoutStyle === 'staggered' && (
                <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-4 overflow-visible">
                  {imgList[0] && (
                    <div className="relative w-1/3 max-w-[190px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-900">
                      <img src={imgList[0]} alt="Showcase 1" className="w-full h-full object-cover" />
                    </div>
                  )}
                  {imgList[1] && (
                    <div className="relative w-2/5 max-w-[230px] aspect-[3/4.5] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/80 dark:border-slate-700 z-10 transform hover:scale-105 transition-transform duration-500 bg-slate-900">
                      <img src={imgList[1]} alt="Showcase 2" className="w-full h-full object-cover" />
                    </div>
                  )}
                  {imgList[2] && (
                    <div className="relative w-1/3 max-w-[190px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-900">
                      <img src={imgList[2]} alt="Showcase 3" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}

              {/* STYLE B: BENTO BOX GRID */}
              {layoutStyle === 'bento' && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mr-0">
                  {imgList[0] && (
                    <div className="col-span-1 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-800 relative group">
                      <img src={imgList[0]} alt="Bento 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex items-end">
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-700">Lab Komputer AI</span>
                      </div>
                    </div>
                  )}
                  {imgList[1] && (
                    <div className="col-span-1 row-span-2 aspect-[4/6] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 relative group">
                      <img src={imgList[1]} alt="Bento 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-5 flex flex-col justify-end">
                        <span className="text-xs font-extrabold text-red-400 uppercase tracking-widest block mb-1">FTI UPA</span>
                        <h4 className="text-sm font-black text-white">Software Engineering & Cyber Security</h4>
                      </div>
                    </div>
                  )}
                  {imgList[2] && (
                    <div className="col-span-1 aspect-[4/4] rounded-3xl overflow-hidden shadow-xl border border-slate-800 relative group">
                      <img src={imgList[2]} alt="Bento 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                </div>
              )}

              {/* STYLE C: FLOATING GLASSMORPHISM */}
              {layoutStyle === 'floating-glass' && (
                <div className="relative max-w-md mx-auto lg:mr-0">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 rounded-[36px] opacity-30 blur-2xl animate-pulse" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/20 dark:border-slate-800 bg-white/10 dark:bg-slate-900/80 backdrop-blur-2xl shadow-2xl p-3">
                    <img src={imgList[1] || imgList[0]} alt="Glass Showcase" className="w-full aspect-[16/10] object-cover rounded-2xl" />
                    
                    {/* Floating Overlay Badge */}
                    <div className="mt-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">Kurikulum Industri OBE</span>
                        <h4 className="text-xs font-extrabold text-white">Akreditasi UNGGUL FTI UPA</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

        {/* --- LAYOUT VARIANT 4: CINEMATIC CENTERED --- */}
        {layoutStyle === 'cinematic-center' && (
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 dark:bg-slate-800/80 border border-slate-200/40 dark:border-slate-700/80 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>{badgeText}</span>
              </div>
            )}

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              {title}
            </h1>

            {description && (
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-normal">
                {description}
              </p>
            )}

            {(primaryCtaLabel || secondaryCtaLabel) && (
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                {primaryCtaLabel && (
                  <a
                    href={primaryCtaHref}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-xl shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{primaryCtaLabel}</span>
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                )}
                {secondaryCtaLabel && (
                  <a
                    href={secondaryCtaHref}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-all backdrop-blur-md"
                  >
                    <span>{secondaryCtaLabel}</span>
                  </a>
                )}
              </div>
            )}

            {/* Centered Large Media Card */}
            {imgList[0] && (
              <div className="w-full pt-8">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 aspect-[16/9] max-w-4xl mx-auto group">
                  <img src={imgList[0]} alt="Cinematic Hero Showcase" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
