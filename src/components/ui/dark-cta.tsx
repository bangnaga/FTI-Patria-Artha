'use client';

import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export type CtaTheme = 'light' | 'dark';
export type CtaAccent = 'red-orange' | 'blue-purple' | 'green-teal';
export type CtaSize = 'default' | 'compact';

export interface DarkCtaProps {
  theme?: CtaTheme;
  title: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  accentColor?: CtaAccent;
  size?: CtaSize;
}

const ACCENT_STYLES: Record<CtaAccent, { gradient: string; glow: string; radial: string }> = {
  'red-orange': {
    gradient: 'from-red-600 via-rose-500 to-orange-500 hover:from-red-700 hover:to-orange-600',
    glow: 'shadow-red-500/35',
    radial: 'radial-gradient(ellipse 80% 55% at 50% 120%, rgba(255, 69, 0, 0.22), rgba(220, 38, 38, 0.12), transparent 75%)',
  },
  'blue-purple': {
    gradient: 'from-blue-600 via-indigo-500 to-violet-600 hover:from-blue-700 hover:to-violet-700',
    glow: 'shadow-blue-500/35',
    radial: 'radial-gradient(ellipse 80% 55% at 50% 120%, rgba(37, 99, 235, 0.22), rgba(124, 58, 237, 0.12), transparent 75%)',
  },
  'green-teal': {
    gradient: 'from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600',
    glow: 'shadow-emerald-500/35',
    radial: 'radial-gradient(ellipse 80% 55% at 50% 120%, rgba(5, 150, 105, 0.22), rgba(13, 148, 136, 0.12), transparent 75%)',
  },
};

export default function DarkCta({
  theme = 'light',
  title,
  description,
  primaryCtaLabel = 'Daftar SPMB Sekarang',
  primaryCtaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  accentColor = 'red-orange',
  size = 'default',
}: DarkCtaProps) {
  const isDark = theme === 'dark';
  const accent = ACCENT_STYLES[accentColor];
  const py = size === 'compact' ? 'py-16 sm:py-20' : 'py-20 sm:py-28';

  const sectionBg = isDark ? '#020617' : '#ffffff';
  const titleClass = isDark ? 'text-white' : 'text-slate-900';
  const descClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const secondaryBtnClass = isDark
    ? 'border border-slate-800 bg-slate-900/90 text-slate-100 hover:bg-slate-800/90'
    : 'border border-slate-200/90 bg-white/90 text-slate-800 hover:bg-slate-50 shadow-xs';

  return (
    <section
      className={`relative overflow-hidden text-center ${py}`}
      style={{ backgroundColor: sectionBg }}
    >
      {/* Soft Radial Ambient Glow decoration from bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{ background: accent.radial }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Modern Bold Heading */}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] ${titleClass}`}>
          {title}
        </h2>

        {/* Modern Subtitle / Description */}
        {description && (
          <p className={`mt-5 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed ${descClass}`}>
            {description}
          </p>
        )}

        {/* Buttons Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={primaryCtaHref}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r ${accent.gradient} shadow-xl ${accent.glow} transition-all transform hover:-translate-y-0.5 active:translate-y-0`}
          >
            <span>{primaryCtaLabel}</span>
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {secondaryCtaLabel && (
            <a
              href={secondaryCtaHref}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all backdrop-blur-sm ${secondaryBtnClass}`}
            >
              <span>{secondaryCtaLabel}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

