'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Rocket, ArrowRight, Brain, CodeXml, ShieldCheck, Cpu,
  GraduationCap, Zap, Users, FlaskConical, Briefcase,
  ChevronLeft, ChevronRight, Pause, Play,
  Star, Award, Globe, BookOpen,
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────

export interface HeroSlide {
  badge: string;
  badgeIcon: string; // emoji or icon name
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
  cta3Text: string;
  cta3Link: string;
  imageUrl: string;
  imageAlt: string;
  overlayGradient: string;
  floatingCard1Title: string;
  floatingCard1Sub: string;
  floatingCard1Color: string;
  floatingCard2Title: string;
  floatingCard2Sub: string;
  floatingCard2Color: string;
  imageBadgeTitle: string;
  imageBadgeSub: string;
  imageBadgeAccent: string;
}

export interface HeroStat {
  value: string;
  label: string;
  sub: string;
  color: string; // red | rose | amber | emerald | blue | purple
}

export interface HeroSpecTag {
  label: string;
  color: string; // red | rose | amber | emerald | blue
}

import { ParticlesBg } from './particles-bg';

export interface HeroSliderProps {
  slides: HeroSlide[];
  stats: HeroStat[];
  specTags: HeroSpecTag[];
  blob1Color: string;
  blob2Color: string;
  blob3Color: string;
  bgColor: string; // slate-950 | slate-900 | slate-800 | dark custom
  autoPlayInterval: number; // in seconds, 0 = off
  showSpecTags: boolean;
  showStats: boolean;
  showFloatingCards: boolean;
  showParticles?: boolean | string;
  particlesColor?: string;
}

// ─── Icon Map ──────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-3.5 h-3.5" />,
  star: <Star className="w-3.5 h-3.5" />,
  award: <Award className="w-3.5 h-3.5" />,
  globe: <Globe className="w-3.5 h-3.5" />,
  book: <BookOpen className="w-3.5 h-3.5" />,
  graduation: <GraduationCap className="w-3.5 h-3.5" />,
  zap: <Zap className="w-3.5 h-3.5" />,
  brain: <Brain className="w-3.5 h-3.5" />,
  shield: <ShieldCheck className="w-3.5 h-3.5" />,
  cpu: <Cpu className="w-3.5 h-3.5" />,
};

const STAT_ICON_MAP: Record<string, React.ReactNode> = {
  red: <Users className="w-5 h-5" />,
  rose: <GraduationCap className="w-5 h-5" />,
  amber: <FlaskConical className="w-5 h-5" />,
  emerald: <Briefcase className="w-5 h-5" />,
  blue: <Globe className="w-5 h-5" />,
  purple: <Award className="w-5 h-5" />,
};

const SPEC_ICON_MAP: Record<string, React.ReactNode> = {
  red: <Brain className="w-3.5 h-3.5 text-red-400" />,
  rose: <CodeXml className="w-3.5 h-3.5 text-rose-400" />,
  emerald: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
  amber: <Cpu className="w-3.5 h-3.5 text-amber-400" />,
  blue: <Globe className="w-3.5 h-3.5 text-blue-400" />,
  purple: <Award className="w-3.5 h-3.5 text-purple-400" />,
};

const COLOR_CLASSES = {
  stat: {
    red: { icon: 'text-red-400', bg: 'bg-red-500/10', text: 'text-red-400' },
    rose: { icon: 'text-rose-400', bg: 'bg-rose-500/10', text: 'text-rose-400' },
    amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', text: 'text-amber-400' },
    emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  },
  floatingCard: {
    rose: 'border-rose-500/30 text-rose-600 dark:text-rose-400',
    amber: 'border-amber-500/30 text-amber-600 dark:text-amber-400',
    blue: 'border-blue-500/30 text-blue-600 dark:text-blue-400',
    emerald: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    purple: 'border-purple-500/30 text-purple-600 dark:text-purple-400',
  },
  imageBadge: {
    red: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    rose: 'bg-rose-500/20 border-rose-500/40 text-rose-400',
    amber: 'bg-amber-500/20 border-amber-500/40 text-amber-400',
    emerald: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    blue: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
  }
};

// ─── Blob Background ───────────────────────────────────────────────────────

function AnimatedBlobs({ blob1, blob2, blob3 }: { blob1: string; blob2: string; blob3: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full blur-[130px]"
        style={{ backgroundColor: blob1 }}
        animate={{ x: [-20, 20, -10, 15, -20], y: [10, -15, 20, -5, 10], scale: [0.95, 1.05, 0.92, 1.08, 0.95] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[120px]"
        style={{ backgroundColor: blob2 }}
        animate={{ x: [10, -15, 20, -10, 10], y: [-10, 15, -20, 5, -10], scale: [1.05, 0.95, 1.08, 0.92, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[600px] h-[300px] rounded-full blur-[140px]"
        style={{ backgroundColor: blob3 }}
        animate={{ scale: [0.98, 1.05, 0.96, 1.02, 0.98] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
    </div>
  );
}

// ─── Slide Content ─────────────────────────────────────────────────────────

function SlideContent({
  slide,
  specTags,
  showSpecTags,
  showFloatingCards,
}: {
  slide: HeroSlide;
  specTags: HeroSpecTag[];
  showSpecTags: boolean;
  showFloatingCards: boolean;
}) {
  const statColor = COLOR_CLASSES.floatingCard as Record<string, string>;
  const fc1Class = statColor[slide.floatingCard1Color] || statColor.rose;
  const fc2Class = statColor[slide.floatingCard2Color] || statColor.amber;
  const imgBadgeClass = (COLOR_CLASSES.imageBadge as Record<string, string>)[slide.imageBadgeAccent] || COLOR_CLASSES.imageBadge.emerald;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* Left: Text */}
      <motion.div
        key={slide.titleHighlight + '-left'}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7 space-y-6 text-center lg:text-left"
      >
        {/* Badge */}
        {slide.badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
            <div className="p-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300">
              {ICON_MAP[slide.badgeIcon] || <Rocket className="w-3.5 h-3.5" />}
            </div>
            <span className="text-xs font-bold text-slate-200 tracking-wide">{slide.badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          {slide.titlePrefix}{' '}
          {slide.titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
              {slide.titleHighlight}
            </span>
          )}{' '}
          {slide.titleSuffix}
        </h1>

        {/* Description */}
        {slide.description && (
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {slide.description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
          {slide.cta1Text && (
            <a
              href={slide.cta1Link || '#'}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9B2C2C] to-[#800020] hover:from-[#b33333] hover:to-[#990026] text-white font-extrabold text-sm shadow-xl shadow-red-950/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>{slide.cta1Text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {slide.cta2Text && (
            <a
              href={slide.cta2Link || '#'}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-sm transition-all shadow-md backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <CodeXml className="w-4 h-4 text-red-400" />
              <span>{slide.cta2Text}</span>
            </a>
          )}
          {slide.cta3Text && (
            <a
              href={slide.cta3Link || '#'}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>{slide.cta3Text}</span>
            </a>
          )}
        </div>

        {/* Specialization Tags */}
        {showSpecTags && specTags.length > 0 && (
          <div className="pt-6 border-t border-slate-800/80">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Peminatan Utama FTI Patria Artha
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {specTags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-semibold"
                >
                  {SPEC_ICON_MAP[tag.color] || <Brain className="w-3.5 h-3.5 text-red-400" />}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Right: Image */}
      <motion.div
        key={slide.imageUrl + '-right'}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5 relative"
      >
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
            {slide.imageUrl ? (
              <img
                src={slide.imageUrl}
                alt={slide.imageAlt || 'Hero Image'}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <span className="text-slate-600 text-sm">Pilih gambar dari Media Manager</span>
              </div>
            )}

            {/* Gradient overlays */}
            <div
              className="absolute inset-0 opacity-60 mix-blend-multiply"
              style={{ background: slide.overlayGradient || 'linear-gradient(to top, #9B2C2C, #800020, #581c87)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

            {/* Image bottom badge */}
            {slide.imageBadgeTitle && (
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                    Universitas Patria Artha
                  </span>
                  <h4 className="text-xs font-extrabold text-white">{slide.imageBadgeTitle}</h4>
                </div>
                {slide.imageBadgeSub && (
                  <div className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold ${imgBadgeClass}`}>
                    {slide.imageBadgeSub}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Floating Cards */}
          {showFloatingCards && (
            <>
              {slide.floatingCard1Title && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute top-10 left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl border shadow-xl backdrop-blur-md z-20 bg-white/90 dark:bg-slate-900/90 ${fc1Class}`}
                >
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black leading-tight">{slide.floatingCard1Title}</p>
                    <p className="text-[10px] opacity-75 font-medium">{slide.floatingCard1Sub}</p>
                  </div>
                </motion.div>
              )}
              {slide.floatingCard2Title && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className={`absolute bottom-8 right-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl border shadow-xl backdrop-blur-md z-20 bg-white/90 dark:bg-slate-900/90 ${fc2Class}`}
                >
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black leading-tight">{slide.floatingCard2Title}</p>
                    <p className="text-[10px] opacity-75 font-medium">{slide.floatingCard2Sub}</p>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function HeroSlider({
  slides = [],
  stats = [],
  specTags = [],
  blob1Color = 'rgba(155,44,44,0.25)',
  blob2Color = 'rgba(220,38,38,0.20)',
  blob3Color = 'rgba(245,158,11,0.10)',
  bgColor = 'bg-slate-950',
  autoPlayInterval = 5,
  showSpecTags = true,
  showStats = true,
  showFloatingCards = true,
  showParticles,
  particlesColor = 'white',
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlayInterval > 0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length || 1;

  const goNext = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  // Auto-play
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPlaying && autoPlayInterval > 0 && total > 1) {
      timerRef.current = setInterval(goNext, autoPlayInterval * 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying, autoPlayInterval, goNext, total]);

  const activeSlide = slides[current] || {
    badge: '', badgeIcon: 'rocket', titlePrefix: 'Judul Slide',
    titleHighlight: 'Highlight', titleSuffix: '',
    description: 'Deskripsi slide akan muncul di sini.',
    cta1Text: 'Tombol 1', cta1Link: '#',
    cta2Text: 'Tombol 2', cta2Link: '#',
    cta3Text: '', cta3Link: '#',
    imageUrl: '', imageAlt: '', overlayGradient: '',
    floatingCard1Title: '', floatingCard1Sub: '', floatingCard1Color: 'rose',
    floatingCard2Title: '', floatingCard2Sub: '', floatingCard2Color: 'amber',
    imageBadgeTitle: '', imageBadgeSub: '', imageBadgeAccent: 'emerald',
  };

  return (
    <section className={`relative overflow-hidden ${bgColor} text-white transition-colors`}>
      {/* Background Particles.js Canvas Animation */}
      {showParticles && showParticles !== 'false' && (
        <ParticlesBg color={particlesColor} count={50} speed={0.9} />
      )}
      {/* Animated background blobs */}
      <AnimatedBlobs blob1={blob1Color} blob2={blob2Color} blob3={blob3Color} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <AnimatePresence mode="wait">
          <SlideContent
            key={current}
            slide={activeSlide}
            specTags={specTags}
            showSpecTags={showSpecTags}
            showFloatingCards={showFloatingCards}
          />
        </AnimatePresence>

        {/* Slide Controls */}
        {total > 1 && (
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`relative h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-10 bg-gradient-to-r from-red-500 to-rose-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {i === current && isPlaying && (
                    <motion.div
                      key={`progress-${current}`}
                      className="absolute inset-0 rounded-full bg-white/30 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: autoPlayInterval, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
              <span className="text-xs font-mono font-bold text-slate-400 ml-2">
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Nav buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(p => !p)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
                title={isPlaying ? 'Jeda Auto Play' : 'Mulai Auto Play'}
              >
                {isPlaying
                  ? <Pause className="w-3.5 h-3.5 text-amber-400" />
                  : <Play className="w-3.5 h-3.5 text-emerald-400" />
                }
                <span className="text-[11px] font-semibold">{isPlaying ? 'Auto' : 'Manual'}</span>
              </button>
              <button
                onClick={goPrev}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors"
                aria-label="Slide Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors"
                aria-label="Slide Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        {showStats && stats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const c = (COLOR_CLASSES.stat as Record<string, { icon: string; bg: string; text: string }>)[stat.color] || COLOR_CLASSES.stat.red;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2.5 rounded-xl ${c.bg} ${c.icon}`}>
                      {STAT_ICON_MAP[stat.color] || <Users className="w-5 h-5" />}
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-200">{stat.label}</p>
                  {stat.sub && <p className={`text-[11px] mt-1 font-semibold ${c.text}`}>{stat.sub}</p>}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
