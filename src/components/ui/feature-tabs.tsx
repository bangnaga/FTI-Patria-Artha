'use client';

import React, { useState } from 'react';

export type FeatureTabsTheme = 'light' | 'dark';
export type FeatureTabsLayout = 'left-tabs' | 'top-tabs';

export interface FeatureTab {
  icon: string;
  title: string;
  description: string;
  image?: string;
  badge?: string;
}

export interface FeatureTabsProps {
  theme?: FeatureTabsTheme;
  layout?: FeatureTabsLayout;
  heading?: string;
  subheading?: string;
  tabs?: FeatureTab[];
}

const DEFAULT_TABS: FeatureTab[] = [
  {
    icon: '🎓',
    title: 'Program Sarjana',
    description: 'Program S1 kami dirancang untuk mempersiapkan lulusan yang kompeten di bidang teknik dengan kurikulum berbasis industri dan penelitian terkini.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    badge: 'S1',
  },
  {
    icon: '🔬',
    title: 'Penelitian & Inovasi',
    description: 'Laboratorium penelitian modern dengan fasilitas lengkap mendukung riset mahasiswa dan dosen dalam menghasilkan karya ilmiah bermutu tinggi.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    badge: 'Riset',
  },
  {
    icon: '🤝',
    title: 'Kerjasama Industri',
    description: 'Jaringan mitra industri yang luas membuka peluang magang, proyek kolaborasi, dan rekrutmen langsung bagi lulusan terbaik kami.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    badge: 'Mitra',
  },
  {
    icon: '🌍',
    title: 'Pengabdian Masyarakat',
    description: 'Program KKN dan pengabdian masyarakat kami memberikan dampak nyata bagi komunitas sekitar melalui teknologi dan keahlian teknik.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    badge: 'KKN',
  },
];

export default function FeatureTabs({
  theme = 'light',
  layout = 'left-tabs',
  heading = 'Apa yang Bisa Kamu Capai?',
  subheading = 'Temukan berbagai program dan kesempatan yang kami tawarkan untuk masa depanmu.',
  tabs = DEFAULT_TABS,
}: FeatureTabsProps) {
  const [active, setActive] = useState(0);
  const isDark = theme === 'dark';
  const isTopLayout = layout === 'top-tabs';

  const sectionClass = isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900';
  const tabActiveClass = isDark
    ? 'bg-slate-800 border-l-2 border-orange-500 text-white shadow-md'
    : 'bg-orange-50 border-l-2 border-orange-500 text-slate-900 shadow-sm';
  const tabInactiveClass = isDark
    ? 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900';
  const panelClass = isDark
    ? 'bg-slate-900 border border-slate-800'
    : 'bg-slate-50 border border-slate-200';
  const badgeClass = isDark
    ? 'bg-orange-900/50 text-orange-300 border border-orange-700/40'
    : 'bg-orange-100 text-orange-700 border border-orange-200';
  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const descClass = isDark ? 'text-slate-300' : 'text-slate-600';

  const currentTab = tabs[active] || tabs[0];

  if (isTopLayout) {
    return (
      <section className={`py-16 sm:py-20 px-4 ${sectionClass}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            {heading && <h2 className={`text-3xl font-black mb-3 ${headingClass}`}>{heading}</h2>}
            {subheading && <p className={`text-base ${subClass}`}>{subheading}</p>}
          </div>
          {/* Top tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === i
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : tabInactiveClass
                }`}
              >
                <span>{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
          {/* Content panel */}
          <div className={`rounded-2xl p-6 sm:p-8 ${panelClass}`}>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className={currentTab?.image ? 'md:col-span-7' : 'md:col-span-12'}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl sm:text-5xl flex-shrink-0">{currentTab?.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-xl sm:text-2xl font-bold ${headingClass}`}>{currentTab?.title}</h3>
                      {currentTab?.badge && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${badgeClass}`}>
                          {currentTab.badge}
                        </span>
                      )}
                    </div>
                    <p className={`leading-relaxed text-sm sm:text-base ${descClass}`}>{currentTab?.description}</p>
                  </div>
                </div>
              </div>
              {currentTab?.image && (
                <div className="md:col-span-5 rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-800">
                  <img 
                    src={currentTab.image} 
                    alt={currentTab.title} 
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // left-tabs layout (default)
  return (
    <section className={`py-16 sm:py-20 px-4 ${sectionClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {heading && <h2 className={`text-3xl font-black mb-3 ${headingClass}`}>{heading}</h2>}
          {subheading && <p className={`text-base ${subClass}`}>{subheading}</p>}
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Left tabs */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all ${
                  active === i ? tabActiveClass : tabInactiveClass
                }`}
              >
                <span className="text-2xl flex-shrink-0">{tab.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{tab.title}</div>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium inline-block mt-0.5 ${badgeClass}`}>
                      {tab.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right content panel */}
          <div
            key={active}
            className={`rounded-2xl p-6 sm:p-8 min-h-[300px] flex flex-col justify-center transition-all ${panelClass}`}
            style={{ animation: 'tab-fade-in 0.25s ease' }}
          >
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className={currentTab?.image ? 'md:col-span-7' : 'md:col-span-12'}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl sm:text-5xl flex-shrink-0">{currentTab?.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-xl sm:text-2xl font-black ${headingClass}`}>{currentTab?.title}</h3>
                      {currentTab?.badge && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${badgeClass}`}>
                          {currentTab.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${descClass}`}>{currentTab?.description}</p>
                  </div>
                </div>
              </div>

              {currentTab?.image && (
                <div className="md:col-span-5 rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-800">
                  <img 
                    src={currentTab.image} 
                    alt={currentTab.title} 
                    className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes tab-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
