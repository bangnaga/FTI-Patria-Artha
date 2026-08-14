'use client';

import React, { useRef, useEffect } from 'react';

export type MarqueeTheme = 'light' | 'dark';
export type MarqueeSpeed = 'slow' | 'medium' | 'fast';

export interface IntegrationItem {
  name: string;
  icon: string;
  color?: string;
}

export interface IntegrationMarqueeProps {
  theme?: MarqueeTheme;
  heading?: string;
  subheading?: string;
  integrations?: IntegrationItem[];
  speed?: MarqueeSpeed;
}

const DEFAULT_INTEGRATIONS: IntegrationItem[] = [
  { name: 'Kemendikbud', icon: '🏛️', color: '#1e40af' },
  { name: 'BAN-PT', icon: '✅', color: '#15803d' },
  { name: 'Microsoft', icon: '🪟', color: '#0078d4' },
  { name: 'Google', icon: '🔍', color: '#ea4335' },
  { name: 'GitHub', icon: '🐙', color: '#24292f' },
  { name: 'AWS', icon: '☁️', color: '#f97316' },
  { name: 'Cisco', icon: '🌐', color: '#049fd9' },
  { name: 'Oracle', icon: '🔴', color: '#f80000' },
  { name: 'IBM', icon: '🔵', color: '#1f70c1' },
  { name: 'Huawei', icon: '📡', color: '#cf0a2c' },
];

const SPEED_DURATION: Record<MarqueeSpeed, string> = {
  slow: '40s',
  medium: '25s',
  fast: '15s',
};

function MarqueeTrack({
  items,
  reverse = false,
  duration,
}: {
  items: IntegrationItem[];
  reverse?: boolean;
  duration: string;
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-scroll ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-default select-none whitespace-nowrap"
            style={{ minWidth: 'max-content' }}
          >
            <span className="text-xl leading-none">{item.icon}</span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IntegrationMarquee({
  theme = 'light',
  heading = 'Terhubung dengan Ekosistem Terpercaya',
  subheading = 'Kampus kami bermitra dengan berbagai institusi, industri, dan platform teknologi terkemuka.',
  integrations = DEFAULT_INTEGRATIONS,
  speed = 'medium',
}: IntegrationMarqueeProps) {
  const isDark = theme === 'dark';
  const duration = SPEED_DURATION[speed];

  const sectionClass = isDark
    ? 'relative overflow-hidden bg-slate-950 py-20'
    : 'relative overflow-hidden bg-slate-50 py-20';
  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subClass = isDark ? 'text-slate-400' : 'text-slate-600';

  const row1 = integrations.slice(0, Math.ceil(integrations.length / 2));
  const row2 = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <section className={sectionClass}>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Fade mask edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to right, #020617, transparent)'
            : 'linear-gradient(to right, #f8fafc, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to left, #020617, transparent)'
            : 'linear-gradient(to left, #f8fafc, transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        {heading && (
          <h2 className={`text-3xl font-black mb-3 ${headingClass}`}>{heading}</h2>
        )}
        {subheading && (
          <p className={`text-base ${subClass}`}>{subheading}</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeTrack items={row1.length > 0 ? row1 : integrations} duration={duration} />
        {row2.length > 0 && (
          <MarqueeTrack items={row2} reverse duration={duration} />
        )}
      </div>
    </section>
  );
}
