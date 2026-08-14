'use client';

import React, { useEffect, useRef, useState } from 'react';

export type MetricsTheme = 'light' | 'dark';

export interface Metric {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  prefix?: string;
}

export interface MetricsCounterProps {
  theme?: MetricsTheme;
  heading?: string;
  subheading?: string;
  metrics?: Metric[];
  animateOnScroll?: boolean;
}

const DEFAULT_METRICS: Metric[] = [
  { value: 5000, suffix: '+', label: 'Mahasiswa Aktif', description: 'Terdaftar semester ini' },
  { value: 98, suffix: '%', label: 'Tingkat Kelulusan', description: 'Rata-rata 4 tahun terakhir' },
  { value: 150, suffix: '+', label: 'Dosen Berpengalaman', description: 'S2 dan S3 aktif' },
  { value: 25, suffix: '+', label: 'Tahun Berdiri', description: 'Melayani dunia pendidikan' },
];

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function MetricItem({
  metric,
  isDark,
  animate,
}: {
  metric: Metric;
  isDark: boolean;
  animate: boolean;
}) {
  const count = useCountUp(metric.value, 1500, animate);
  const valueClass = isDark ? 'text-white' : 'text-slate-900';
  const labelClass = isDark ? 'text-slate-300' : 'text-slate-700';
  const descClass = isDark ? 'text-slate-500' : 'text-slate-400';

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className={`text-4xl sm:text-5xl font-black tracking-tight ${valueClass}`}>
        {metric.prefix || ''}
        {animate ? count.toLocaleString() : metric.value.toLocaleString()}
        <span className="text-orange-500">{metric.suffix || ''}</span>
      </div>
      <div className={`mt-2 text-base font-semibold ${labelClass}`}>{metric.label}</div>
      {metric.description && (
        <div className={`text-xs mt-0.5 ${descClass}`}>{metric.description}</div>
      )}
    </div>
  );
}

export default function MetricsCounter({
  theme = 'light',
  heading,
  subheading,
  metrics = DEFAULT_METRICS,
  animateOnScroll = true,
}: MetricsCounterProps) {
  const isDark = theme === 'dark';
  const [visible, setVisible] = useState(!animateOnScroll);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animateOnScroll) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animateOnScroll]);

  const sectionClass = isDark
    ? 'bg-slate-950 py-20 px-4'
    : 'bg-gradient-to-br from-slate-50 to-white py-20 px-4';
  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const dividerClass = isDark ? 'bg-slate-700' : 'bg-slate-200';

  return (
    <section ref={sectionRef} className={sectionClass}>
      <div className="max-w-5xl mx-auto">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className={`text-3xl font-black mb-3 ${headingClass}`}>{heading}</h2>}
            {subheading && <p className={`text-base ${subClass}`}>{subheading}</p>}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700">
          {metrics.map((metric, i) => (
            <React.Fragment key={i}>
              <MetricItem metric={metric} isDark={isDark} animate={visible} />
              {i < metrics.length - 1 && (
                <div className={`hidden sm:block w-px h-16 mx-4 ${dividerClass}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
