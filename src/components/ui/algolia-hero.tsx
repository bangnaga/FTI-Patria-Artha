'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Zap, ArrowRight, BookOpen, GraduationCap, Cpu, ShieldCheck, Code, Award, ChevronRight, Terminal } from 'lucide-react';

export interface AlgoliaHeroSearchItem {
  id?: string;
  title: string;
  category: string;
  description: string;
  badge?: string;
  icon?: string;
  link?: string;
}

export interface AlgoliaHeroProps {
  badgeText?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  searchPlaceholder?: string;
  suggestedQueries?: { text: string }[];
  searchDataset?: AlgoliaHeroSearchItem[];
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const DEFAULT_DATASET: AlgoliaHeroSearchItem[] = [
  {
    id: '1',
    title: 'S1 Teknik Informatika',
    category: 'Program Studi',
    description: 'Fokus pada Software Engineering, AI & Machine Learning, Cloud Architecture, dan Mobile App Development.',
    badge: 'Akreditasi UNGGUL',
    icon: 'Code',
    link: '/prodi/teknik-informatika',
  },
  {
    id: '2',
    title: 'S1 Sistem Informasi',
    category: 'Program Studi',
    description: 'Mengintegrasikan IT Governance, Business Intelligence, Data Analytics, dan Technopreneurship.',
    badge: 'S1 Terfavorit',
    icon: 'Cpu',
    link: '/prodi/sistem-informasi',
  },
  {
    id: '3',
    title: 'S1 Teknik Sipil',
    category: 'Program Studi',
    description: 'Rekayasa Struktur, Smart Building Infrastructure, Manajemen Konstruksi Digital & Green Building.',
    badge: 'S1 Unggulan',
    icon: 'BookOpen',
    link: '/prodi/teknik-sipil',
  },
  {
    id: '4',
    title: 'Laboratorium HPC & Artificial Intelligence',
    category: 'Fasilitas Riset',
    description: 'Dilengkapi GPU Server NVIDIA A100 untuk riset Deep Learning, Computer Vision, dan NLP.',
    badge: 'Lab Riset',
    icon: 'Zap',
    link: '/fasilitas',
  },
  {
    id: '5',
    title: 'Beasiswa PMB Patria Artha 2026',
    category: 'Pendaftaran',
    description: 'Potongan UKT hingga 100% untuk jalur prestasi akademik, hafidz Qur\'an, dan talenta teknologi.',
    badge: 'PMB 2026',
    icon: 'Award',
    link: '#spmb',
  },
  {
    id: '6',
    title: 'Sertifikasi AWS & Cisco Academy',
    category: 'Sertifikasi',
    description: 'Program sertifikasi kompetensi internasional resmi AWS Certified Solutions Architect & CCNA Networking.',
    badge: 'Sertifikasi Global',
    icon: 'ShieldCheck',
    link: '/profil',
  },
];

const DEFAULT_SUGGESTIONS = [
  { text: 'Teknik Informatika' },
  { text: 'Sistem Informasi' },
  { text: 'Beasiswa PMB' },
  { text: 'Lab AI & GPU' },
  { text: 'Teknik Sipil' },
];

export default function AlgoliaHero({
  badgeText = '✨ Platform AI & Digital Campus FTI UPA',
  titlePrefix = 'Mencetak Talenta AI & Tech',
  titleHighlight = 'Berdaya Saing Global',
  titleSuffix = 'Siap Kerja',
  description = 'Cari dan jelajahi program studi, laboratorium riset, kurikulum OBE, serta beasiswa unggulan FTI Universitas Patria Artha secara cepat & instan.',
  searchPlaceholder = 'Cari prodi, dosen, lab AI, atau beasiswa...',
  suggestedQueries = DEFAULT_SUGGESTIONS,
  searchDataset = DEFAULT_DATASET,
  primaryCtaText = 'Daftar PMB 2026',
  primaryCtaLink = '#spmb',
  secondaryCtaText = 'Jelajahi Kurikulum & SKS',
  secondaryCtaLink = '#prodi',
}: AlgoliaHeroProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'prodi' | 'lab'>('all');
  const [isFocused, setIsFocused] = useState(false);
  const [autoTypeIndex, setAutoTypeIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const autoTypePhrases = ['Artificial Intelligence', 'Teknik Informatika', 'Beasiswa UKT 100%', 'Cyber Security Lab'];

  // Auto-typing animation cycle if user hasn't typed
  useEffect(() => {
    if (query !== '' || isFocused) return;

    const timer = setInterval(() => {
      setAutoTypeIndex((prev) => (prev + 1) % autoTypePhrases.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [query, isFocused]);

  // Filter dataset based on search query
  const filteredResults = searchDataset.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  const displayResults = filteredResults.slice(0, 4);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-red-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-300" />;
      case 'Award':
        return <Award className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 lg:py-24 selection:bg-red-500/30">
      {/* Background Algolia-Style Ambient Gradient Glowing Lines & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glow Spheres */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#800020]/30 rounded-full blur-[160px]" />
        <div className="absolute -bottom-32 left-1/3 w-[650px] h-[350px] bg-amber-500/10 rounded-full blur-[150px]" />

        {/* Dynamic Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

        {/* Laser Accent Beam */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-gradient-to-r from-[#800020]/40 to-red-950/40 text-red-200 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-red-950/40"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{badgeText}</span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]"
          >
            {titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
              {titleHighlight}
            </span>{' '}
            {titleSuffix}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* ALGOLIA-STYLE INTERACTIVE SEARCH SYSTEM & ENGINE SHOWCASE */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Interactive Search Bar Container */}
          <div className="relative group">
            {/* Outer Glowing Border Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 opacity-30 group-hover:opacity-60 blur-md transition-all duration-500" />

            <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 sm:p-3 shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={searchPlaceholder}
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none font-medium pr-10"
                />

                {/* Auto-type hint when empty */}
                {!query && !isFocused && (
                  <div className="absolute inset-0 pointer-events-none flex items-center text-slate-500 text-sm sm:text-base font-medium truncate pr-16">
                    <span className="hidden sm:inline mr-1">Contoh: </span>
                    <span className="text-red-400/90 font-mono">"{autoTypePhrases[autoTypeIndex]}"</span>
                  </div>
                )}
              </div>

              {/* Clear button or shortcut badge */}
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-400 hover:text-white font-mono transition-colors"
                >
                  Clear
                </button>
              ) : (
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-400 text-xs font-mono">
                  <span>⌘</span>
                  <span>K</span>
                </div>
              )}

              {/* Action Submit Button */}
              <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-[#800020] hover:from-red-500 hover:to-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 flex-shrink-0">
                <Zap className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">Cari</span>
              </button>
            </div>
          </div>

          {/* Suggested Query Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Populer:
            </span>
            {suggestedQueries.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(item.text);
                  if (inputRef.current) inputRef.current.focus();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                  query === item.text
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>

          {/* ALGOLIA LIVE INSTANT SEARCH RESULTS CARD GRID */}
          <div className="mt-8 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden">
            {/* Header Performance Status Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-emerald-400 font-bold">Algolia Neural Engine</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">{filteredResults.length} hasil ditemukan</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                <Zap className="w-3 h-3" />
                <span>1.8ms</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <AnimatePresence mode="popLayout">
                {displayResults.length > 0 ? (
                  displayResults.map((item) => (
                    <motion.a
                      key={item.id || item.title}
                      href={item.link || '#'}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="group p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-red-500/50 hover:bg-slate-950 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-red-500/40 transition-colors">
                              {getIcon(item.icon)}
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                              {item.category}
                            </span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors flex items-center gap-1">
                          <span>{item.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-red-400" />
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.a>
                  ))
                ) : (
                  <div className="col-span-2 py-10 text-center space-y-2">
                    <p className="text-slate-400 text-sm">Tidak ada hasil untuk "{query}"</p>
                    <button
                      onClick={() => setQuery('')}
                      className="text-xs font-bold text-red-400 hover:underline"
                    >
                      Reset kata kunci pencarian
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCtaText && (
              <a
                href={primaryCtaLink}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-[#800020] hover:from-red-500 hover:to-red-700 text-white font-extrabold text-sm shadow-xl shadow-red-950/60 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            {secondaryCtaText && (
              <a
                href={secondaryCtaLink}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-red-400" />
                <span>{secondaryCtaText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
