'use client';

import React from 'react';

export type TileColor = 'orange' | 'purple' | 'blue' | 'green' | 'red' | 'default';
export type GradientTileTheme = 'light' | 'dark';

export interface GradientTile {
  icon: string;
  title: string;
  description: string;
  color?: TileColor;
}

export interface GradientTileGridProps {
  theme?: GradientTileTheme;
  heading?: string;
  subheading?: string;
  tiles?: GradientTile[];
  columns?: 2 | 3;
}

const TILE_STYLES: Record<TileColor, { light: string; dark: string; iconBg: string }> = {
  orange: {
    light: 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100 hover:border-orange-300',
    dark: 'bg-gradient-to-br from-orange-950/60 to-amber-950/40 border-orange-900/50 hover:border-orange-700',
    iconBg: 'bg-orange-500',
  },
  purple: {
    light: 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-100 hover:border-violet-300',
    dark: 'bg-gradient-to-br from-violet-950/60 to-purple-950/40 border-violet-900/50 hover:border-violet-700',
    iconBg: 'bg-violet-500',
  },
  blue: {
    light: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 hover:border-blue-300',
    dark: 'bg-gradient-to-br from-blue-950/60 to-indigo-950/40 border-blue-900/50 hover:border-blue-700',
    iconBg: 'bg-blue-500',
  },
  green: {
    light: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300',
    dark: 'bg-gradient-to-br from-emerald-950/60 to-teal-950/40 border-emerald-900/50 hover:border-emerald-700',
    iconBg: 'bg-emerald-500',
  },
  red: {
    light: 'bg-gradient-to-br from-red-50 to-rose-50 border-red-100 hover:border-red-300',
    dark: 'bg-gradient-to-br from-red-950/60 to-rose-950/40 border-red-900/50 hover:border-red-700',
    iconBg: 'bg-red-500',
  },
  default: {
    light: 'bg-white border-slate-200 hover:border-slate-400',
    dark: 'bg-slate-800/60 border-slate-700/60 hover:border-slate-500',
    iconBg: 'bg-slate-500',
  },
};

const DEFAULT_TILES: GradientTile[] = [
  { icon: '🔒', title: 'Keamanan Data', description: 'Sistem pengelolaan data akademik dengan enkripsi tingkat tinggi dan akses berbasis peran.', color: 'blue' },
  { icon: '⚡', title: 'Kinerja Tinggi', description: 'Platform digital yang responsif dan cepat untuk akses informasi akademik kapan saja, di mana saja.', color: 'orange' },
  { icon: '🤝', title: 'Kolaborasi Tim', description: 'Fitur kolaborasi real-time antara mahasiswa, dosen, dan staf akademik dalam satu ekosistem.', color: 'green' },
  { icon: '📊', title: 'Analitik Cerdas', description: 'Dashboard analitik untuk memantau perkembangan akademik dan statistik kampus secara real-time.', color: 'purple' },
  { icon: '🌐', title: 'Aksesibilitas Global', description: 'Koneksi dengan jaringan internasional untuk mendukung mobilitas akademik dan pertukaran pengetahuan.', color: 'red' },
  { icon: '🎯', title: 'Pembelajaran Adaptif', description: 'Kurikulum yang dirancang adaptif dengan kebutuhan industri terkini dan perkembangan teknologi.', color: 'default' },
];

export default function GradientTileGrid({
  theme = 'light',
  heading = 'Keunggulan Kami',
  subheading = 'Kami berkomitmen memberikan pengalaman akademik terbaik melalui teknologi dan inovasi.',
  tiles = DEFAULT_TILES,
  columns = 3,
}: GradientTileGridProps) {
  const isDark = theme === 'dark';

  const sectionClass = isDark ? 'bg-slate-950 py-20 px-4' : 'bg-white py-20 px-4';
  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const titleClass = isDark ? 'text-white' : 'text-slate-900';
  const descClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const gridClass = columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={sectionClass}>
      <div className="max-w-6xl mx-auto">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className={`text-3xl font-black mb-3 ${headingClass}`}>{heading}</h2>}
            {subheading && <p className={`text-base max-w-2xl mx-auto ${subClass}`}>{subheading}</p>}
          </div>
        )}

        <div className={`grid ${gridClass} gap-5`}>
          {tiles.map((tile, i) => {
            const style = TILE_STYLES[tile.color || 'default'];
            const tileClass = isDark ? style.dark : style.light;
            return (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${tileClass}`}
              >
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 ${style.iconBg} bg-opacity-15`}>
                  <span role="img" aria-label={tile.title}>{tile.icon}</span>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${titleClass}`}>{tile.title}</h3>
                <p className={`text-sm leading-relaxed ${descClass}`}>{tile.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
