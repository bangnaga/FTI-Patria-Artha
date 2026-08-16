'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export interface AlgoliaSolutionCardItem {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: 'red' | 'blue' | 'purple' | 'emerald' | 'amber';
}

export interface AlgoliaSolutionsProps {
  bgImageUrl?: string;
  bgOverlayOpacity?: number;
  headingPosition?: 'right' | 'left' | 'center';
  heading?: string;
  subheading?: string;
  cards?: AlgoliaSolutionCardItem[];
}

const DEFAULT_CARDS: AlgoliaSolutionCardItem[] = [
  {
    title: 'Kurikulum Berbasis AI & Industri 4.0',
    description: 'Mahasiswa dibekali keterampilan teknologi terkini, machine learning, dan cloud software yang relevan dengan kebutuhan industri masa kini.',
    ctaText: 'Lihat Kurikulum',
    ctaLink: '/prodi',
    accentColor: 'red',
  },
  {
    title: 'Memahami Kebutuhan Riset & Inovasi',
    description: 'Fasilitas GPU Server A100 dan Laboratorium HPC mendukung riset mandiri mahasiswa dalam menghasilkan solusi nyata.',
    ctaText: 'Pelajari Riset',
    ctaLink: '/profil',
    accentColor: 'blue',
  },
  {
    title: 'Sertifikasi Kompetensi Internasional',
    description: 'Lulusan dibekali sertifikasi resmi dari AWS Academy, Cisco, dan Microsoft untuk daya saing tingkat global.',
    ctaText: 'Info Sertifikasi',
    ctaLink: '/profil',
    accentColor: 'purple',
  },
  {
    title: 'Kemitraan & Penyerapan Kerja Fast-Track',
    description: 'Jaringan mitra industri tech nasional membuka akses magang MBKM dan rekrutmen langsung bagi lulusan FTI.',
    ctaText: 'Kemitraan Industri',
    ctaLink: '#karir',
    accentColor: 'emerald',
  },
  {
    title: 'Program Beasiswa & Pendampingan Karir',
    description: 'Potongan UKT hingga 100% dan inkubasi bisnis startup untuk mencetak technopreneur masa depan.',
    ctaText: 'Daftar Beasiswa',
    ctaLink: '#spmb',
    accentColor: 'amber',
  },
];

export default function AlgoliaSolutions({
  bgImageUrl = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=80',
  bgOverlayOpacity = 85,
  headingPosition = 'right',
  heading = 'Solusi Akademik Berstandar Global',
  subheading = 'Inilah berbagai keunggulan utama teknologi dan pendidikan FTI Universitas Patria Artha dari hari pertama.',
  cards = DEFAULT_CARDS,
}: AlgoliaSolutionsProps) {
  const getGradientColors = (color?: string) => {
    switch (color) {
      case 'red':
        return {
          titleHover: 'group-hover:from-red-600 group-hover:to-rose-500',
          btnBg: 'bg-gradient-to-r from-red-600 to-[#800020]',
          underline: 'from-red-600 to-rose-500',
          titleColor: 'text-[#9B2C2C]',
        };
      case 'purple':
        return {
          titleHover: 'group-hover:from-purple-600 group-hover:to-indigo-500',
          btnBg: 'bg-gradient-to-r from-purple-600 to-indigo-700',
          underline: 'from-purple-600 to-indigo-500',
          titleColor: 'text-purple-700 dark:text-purple-400',
        };
      case 'emerald':
        return {
          titleHover: 'group-hover:from-emerald-600 group-hover:to-teal-500',
          btnBg: 'bg-gradient-to-r from-emerald-600 to-teal-700',
          underline: 'from-emerald-600 to-teal-500',
          titleColor: 'text-emerald-700 dark:text-emerald-400',
        };
      case 'amber':
        return {
          titleHover: 'group-hover:from-amber-600 group-hover:to-orange-500',
          btnBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
          underline: 'from-amber-600 to-orange-500',
          titleColor: 'text-amber-700 dark:text-amber-400',
        };
      case 'blue':
      default:
        return {
          titleHover: 'group-hover:from-blue-600 group-hover:to-cyan-500',
          btnBg: 'bg-gradient-to-r from-blue-600 to-blue-800',
          underline: 'from-blue-600 to-purple-600',
          titleColor: 'text-blue-600 dark:text-blue-400',
        };
    }
  };

  const isRight = headingPosition === 'right';
  const isCenter = headingPosition === 'center';

  return (
    <section className="relative overflow-hidden bg-slate-900 text-slate-900 dark:text-white py-12 lg:py-24 selection:bg-red-500/30">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none z-0 transition-all duration-700"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/90"
          style={{ opacity: bgOverlayOpacity / 100 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row mb-12 lg:mb-16 ${isCenter ? 'justify-center text-center' : ''}`}>
          {isRight && <div className="hidden lg:block lg:w-1/2" />}
          
          <div className={`w-full ${isCenter ? 'max-w-3xl mx-auto' : 'lg:w-1/2 lg:pl-12'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Solusi Masa Depan FTI UPA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {heading}
              </h2>
              {subheading && (
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {subheading}
                </p>
              )}
            </div>
          </div>

          {!isRight && !isCenter && <div className="hidden lg:block lg:w-1/2" />}
        </div>

        {/* Floating Teaser Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {cards.map((card, idx) => {
            const styles = getGradientColors(card.accentColor);
            return (
              <div
                key={idx}
                tabIndex={0}
                className="teaser-with-cta group bg-white dark:bg-slate-900/90 rounded-2xl p-6 relative outline-none border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out lg:hover:-translate-y-6 lg:hover:shadow-2xl lg:hover:border-slate-300 dark:lg:hover:border-slate-700 flex flex-col justify-between"
              >
                {/* Content */}
                <div className="cmp-teaser__content text-left space-y-3">
                  <h4 className={`text-lg sm:text-[20px] font-bold leading-snug ${styles.titleColor} transition-all duration-300 group-hover:bg-gradient-to-r ${styles.titleHover} group-hover:bg-clip-text group-hover:text-transparent`}>
                    {card.title}
                  </h4>

                  <div className="cmp-teaser__description font-normal text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{card.description}</p>
                  </div>
                </div>

                {/* Hover CTA Button (Slide-up reveal on hover) */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 transition-all duration-300 ease-out">
                  <a
                    href={card.ctaLink || '#'}
                    className={`relative z-10 w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-between ${styles.btnBg} hover:brightness-110 group/btn`}
                  >
                    <span>{card.ctaText || 'Selengkapnya'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Underline hover gradient bar */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${styles.underline} rounded-b-2xl transition-all duration-500 ease-in-out group-hover:w-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
