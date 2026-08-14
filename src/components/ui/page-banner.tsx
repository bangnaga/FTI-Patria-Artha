'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home, Calendar, User, Eye, Sparkles } from 'lucide-react';

export interface PageBannerProps {
  badge?: string;
  badgeColor?: 'blue' | 'maroon' | 'amber' | 'emerald' | 'purple';
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  date?: string;
  author?: string;
  views?: string;
  bgType?: 'image' | 'gradient' | 'youtube';
  bgImageUrl?: string;
  youtubeUrl?: string;
  customGradient?: string;
  overlayOpacity?: '30' | '50' | '70' | '85' | '95';
  gradientType?: 'dark-bottom' | 'dark-top' | 'dark-full' | 'radial-center' | 'dark-left';
  bannerHeight?: 'compact' | 'medium' | 'tall' | 'h150';
  textAlign?: 'left' | 'center' | 'right';
  accentColor?: 'maroon' | 'amber' | 'emerald' | 'blue' | 'purple';
}

const getYoutubeId = (urlOrId?: string) => {
  if (!urlOrId) return '';
  if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId.trim())) return urlOrId.trim();
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
};

const HEIGHT_CLASSES = {
  compact: 'py-2 sm:py-3 h-[150px] min-h-[150px]',
  h150: 'py-2 sm:py-3 h-[150px] min-h-[150px]',
  medium: 'py-8 sm:py-12 min-h-[220px]',
  tall: 'py-14 sm:py-20 min-h-[320px]',
};

const OVERLAY_CLASSES = {
  '30': 'bg-black/30',
  '50': 'bg-black/50',
  '70': 'bg-black/70',
  '85': 'bg-black/85',
  '95': 'bg-black/95',
};

const GRADIENT_CLASSES = {
  'dark-bottom': 'bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30',
  'dark-top': 'bg-gradient-to-b from-slate-950 via-slate-950/75 to-transparent',
  'dark-full': 'bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70',
  'radial-center': 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/60 via-slate-950/90 to-slate-950',
  'dark-left': 'bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent',
};

const ACCENT_BORDER = {
  maroon: 'from-[#800020] via-amber-400 to-[#9B2C2C]',
  amber: 'from-amber-400 via-amber-500 to-amber-600',
  emerald: 'from-emerald-400 via-teal-500 to-emerald-600',
  blue: 'from-blue-500 via-cyan-400 to-indigo-600',
  purple: 'from-purple-500 via-pink-500 to-purple-800',
};

const BADGE_COLOR_CLASSES = {
  blue: 'bg-blue-600/90 text-white border-blue-400/30',
  maroon: 'bg-[#9B2C2C]/90 text-white border-red-400/30',
  amber: 'bg-amber-400 text-slate-950 border-amber-300 font-extrabold',
  emerald: 'bg-emerald-600/90 text-white border-emerald-400/30',
  purple: 'bg-purple-600/90 text-white border-purple-400/30',
};

export default function PageBanner({
  badge = 'Berita Kampus',
  badgeColor = 'blue',
  title = 'UKM Seni UPA Gelar Aksara Competition 2026',
  subtitle = '',
  breadcrumb = '',
  date = '16 Juli 2026',
  author = 'Humas UPA',
  views = '1.245 Dibaca',
  bgType = 'image',
  bgImageUrl = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80',
  youtubeUrl = '',
  customGradient = '',
  overlayOpacity = '70',
  gradientType = 'dark-bottom',
  bannerHeight = 'compact',
  textAlign = 'left',
  accentColor = 'maroon',
}: PageBannerProps) {
  const heightClass = HEIGHT_CLASSES[bannerHeight] || HEIGHT_CLASSES.compact;
  const overlayClass = OVERLAY_CLASSES[overlayOpacity] || OVERLAY_CLASSES['70'];
  const gradientClass = GRADIENT_CLASSES[gradientType] || GRADIENT_CLASSES['dark-bottom'];
  const accentGradient = ACCENT_BORDER[accentColor] || ACCENT_BORDER.maroon;
  const badgeClass = BADGE_COLOR_CLASSES[badgeColor] || BADGE_COLOR_CLASSES.blue;

  const bgMode = bgType || (youtubeUrl ? 'youtube' : bgImageUrl ? 'image' : 'gradient');
  const youtubeId = getYoutubeId(youtubeUrl);

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[textAlign];

  const breadcrumbItems = breadcrumb ? breadcrumb.split('/').map(s => s.trim()).filter(Boolean) : [];

  return (
    <section className="relative overflow-hidden w-full bg-slate-950 text-white isolate shadow-xl">
      {/* Background Mode: YouTube Video */}
      {bgMode === 'youtube' && youtubeId && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&enablejsapi=1`}
            title="Hero YouTube Video Background"
            className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full aspect-video scale-150"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      )}

      {/* Background Mode: Custom Image */}
      {bgMode === 'image' && bgImageUrl && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 transition-transform duration-1000"
          />
        </div>
      )}

      {/* Background Mode: Custom Gradient */}
      {bgMode === 'gradient' && (
        <div className={`absolute inset-0 z-0 ${customGradient || 'bg-gradient-to-br from-[#800020] via-red-950 to-slate-950'}`} />
      )}

      {/* Ambient Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-16 right-1/4 w-80 h-80 bg-[#800020]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl" />
      </div>

      {/* Black Overlay & Gradient Effects */}
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />
      <div className={`absolute inset-0 z-10 ${gradientClass}`} />

      {/* Decorative Radial Grid Pattern */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* Top Gradient Line Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r ${accentGradient} shadow-sm`} />

      {/* Main Content Container */}
      <div className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center ${heightClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex flex-col max-w-4xl ${alignClass} space-y-1 sm:space-y-1.5`}
        >
          {/* Top Row: Breadcrumb or Pill Badge */}
          <div className="flex flex-wrap items-center gap-2">
            {breadcrumbItems.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 text-[11px] text-slate-200 font-semibold shadow-xs"
              >
                <Home className="w-3 h-3 text-amber-300" />
                {breadcrumbItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <ChevronRight className="w-2.5 h-2.5 text-slate-400" />}
                    <span className={idx === breadcrumbItems.length - 1 ? 'text-white font-extrabold' : 'text-slate-300 hover:text-white transition-colors'}>
                      {item}
                    </span>
                  </React.Fragment>
                ))}
              </motion.nav>
            )}

            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${badgeClass} border text-[10px] font-black uppercase tracking-wider shadow-sm`}
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>{badge}</span>
              </motion.div>
            )}
          </div>

          {/* Main Title (H1) with Modern Text Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight drop-shadow-md"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-amber-200">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-slate-200/90 text-xs sm:text-sm font-medium leading-normal max-w-2xl drop-shadow-xs line-clamp-1"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Bottom Meta Bar (Date, Author, Views) */}
          {(date || author || views) && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-0.5 flex flex-wrap items-center gap-2.5 text-[11px] font-medium text-slate-300"
            >
              {date && (
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-slate-200">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{date}</span>
                </span>
              )}
              {author && (
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-slate-200">
                  <User className="w-3 h-3 text-amber-400" />
                  <span>{author}</span>
                </span>
              )}
              {views && (
                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-slate-200">
                  <Eye className="w-3 h-3 text-amber-400" />
                  <span>{views}</span>
                </span>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Accent Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent z-20" />
    </section>
  );
}
