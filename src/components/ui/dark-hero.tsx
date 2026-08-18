'use client';

import React from 'react';
import { ParticlesBg } from './particles-bg';

export type HeroAccentColor = 'orange' | 'blue' | 'green' | 'purple' | 'red';
export type HeroTheme = 'light' | 'dark';

export interface DarkHeroProps {
  theme?: HeroTheme;
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  accentColor?: HeroAccentColor;
  showNodes?: boolean;
  showParticles?: boolean | string;
  particlesColor?: string;
}

const ACCENT_COLORS: Record<HeroAccentColor, { gradient: string; glow: string; badge: string; node: string }> = {
  orange: {
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    glow: 'shadow-orange-500/30',
    badge: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800',
    node: 'bg-orange-500',
  },
  blue: {
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    glow: 'shadow-blue-500/30',
    badge: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
    node: 'bg-blue-500',
  },
  green: {
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glow: 'shadow-emerald-500/30',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    node: 'bg-emerald-500',
  },
  purple: {
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    glow: 'shadow-violet-500/30',
    badge: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800',
    node: 'bg-violet-500',
  },
  red: {
    gradient: 'from-red-600 via-rose-500 to-pink-500',
    glow: 'shadow-red-500/30',
    badge: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800',
    node: 'bg-red-500',
  },
};

const NODE_CARDS = [
  { label: 'Pendaftaran', icon: '📝', color: 'bg-blue-500' },
  { label: 'Verifikasi', icon: '✅', color: 'bg-green-500' },
  { label: 'AI Review', icon: '🤖', color: 'bg-violet-500' },
  { label: 'Notifikasi', icon: '🔔', color: 'bg-orange-500' },
];

export default function DarkHero({
  theme = 'light',
  badge,
  title,
  titleHighlight,
  description,
  primaryCtaLabel = 'Mulai Sekarang',
  primaryCtaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  accentColor = 'orange',
  showNodes = true,
  showParticles,
  particlesColor = 'white',
}: DarkHeroProps) {
  const accent = ACCENT_COLORS[accentColor];
  const isDark = theme === 'dark';

  const sectionClass = isDark
    ? 'relative overflow-hidden bg-slate-950 text-white'
    : 'relative overflow-hidden bg-white text-slate-900';

  const titleClass = isDark ? 'text-white' : 'text-slate-900';
  const descClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const secondaryBtnClass = isDark
    ? 'border border-white/20 text-white hover:bg-white/10'
    : 'border border-slate-300 text-slate-700 hover:bg-slate-100';

  return (
    <section className={sectionClass}>
      {/* Background Particles.js Canvas Animation */}
      {showParticles && showParticles !== 'false' && (
        <ParticlesBg color={particlesColor} count={50} speed={0.9} />
      )}
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-3xl bg-gradient-to-br ${accent.gradient}`}
        />
        {isDark && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {badge && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-5 ${accent.badge}`}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-current" />
                {badge}
              </span>
            )}

            <h1 className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${titleClass}`}>
              {title}
              {titleHighlight && (
                <>
                  {' '}
                  <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>

            <p className={`mt-5 text-lg max-w-xl leading-relaxed ${descClass}`}>{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={primaryCtaHref}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${accent.gradient} shadow-lg ${accent.glow} hover:opacity-90 transition-opacity`}
              >
                {primaryCtaLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              {secondaryCtaLabel && (
                <a
                  href={secondaryCtaHref}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${secondaryBtnClass}`}
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>
          </div>

          {/* Right — Floating Nodes Decoration */}
          {showNodes && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-64">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 256" fill="none">
                  <path d="M80 80 Q160 80 160 128 Q160 176 240 176" stroke={isDark ? '#ffffff20' : '#00000015'} strokeWidth="2" strokeDasharray="6 4" />
                  <path d="M80 128 L240 128" stroke={isDark ? '#ffffff20' : '#00000015'} strokeWidth="2" strokeDasharray="6 4" />
                </svg>
                {/* Node cards */}
                {NODE_CARDS.map((node, i) => (
                  <div
                    key={i}
                    className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-white text-sm font-medium ${node.color} ${
                      i === 0 ? 'top-4 left-4' :
                      i === 1 ? 'top-16 right-4' :
                      i === 2 ? 'bottom-16 left-8' :
                      'bottom-4 right-8'
                    }`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <span>{node.icon}</span>
                    <span>{node.label}</span>
                  </div>
                ))}
                {/* Center dot */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${accent.node} ring-4 ring-current ring-opacity-20`} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
