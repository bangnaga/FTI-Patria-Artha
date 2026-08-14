'use client';

import React from 'react';

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
    gradient: 'from-red-600 to-orange-500',
    glow: 'shadow-red-500/40',
    radial: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(234,88,12,0.45), rgba(220,38,38,0.3), transparent 70%)',
  },
  'blue-purple': {
    gradient: 'from-blue-600 to-violet-600',
    glow: 'shadow-blue-500/40',
    radial: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(37,99,235,0.45), rgba(124,58,237,0.3), transparent 70%)',
  },
  'green-teal': {
    gradient: 'from-emerald-600 to-teal-500',
    glow: 'shadow-emerald-500/40',
    radial: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(5,150,105,0.45), rgba(13,148,136,0.3), transparent 70%)',
  },
};

export default function DarkCta({
  theme = 'light',
  title,
  description,
  primaryCtaLabel = 'Daftar Sekarang',
  primaryCtaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  accentColor = 'red-orange',
  size = 'default',
}: DarkCtaProps) {
  const isDark = theme === 'dark';
  const accent = ACCENT_STYLES[accentColor];
  const py = size === 'compact' ? 'py-16 sm:py-20' : 'py-24 sm:py-32';

  // Light theme: white bg, coloured gradient blob bottom
  // Dark theme: dark slate bg, same radial glow
  const sectionBg = isDark ? '#020617' : '#ffffff';
  const titleClass = isDark ? 'text-white' : 'text-slate-900';
  const descClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const secondaryBtnClass = isDark
    ? 'border border-white/20 text-white hover:bg-white/10'
    : 'border border-slate-300 text-slate-700 hover:bg-slate-100';

  return (
    <section
      className={`relative overflow-hidden text-center ${py}`}
      style={{ backgroundColor: sectionBg }}
    >
      {/* Radial glow decoration from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: accent.radial }}
      />
      {/* Top separator line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background: isDark
            ? 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)'
            : 'linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${titleClass}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed ${descClass}`}>
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href={primaryCtaHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r ${accent.gradient} shadow-lg ${accent.glow} hover:opacity-90 transition-opacity`}
          >
            {primaryCtaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          {secondaryCtaLabel && (
            <a
              href={secondaryCtaHref}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all ${secondaryBtnClass}`}
            >
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
