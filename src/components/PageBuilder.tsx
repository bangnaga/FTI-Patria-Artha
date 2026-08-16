"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Puck, Render, Config, Data, usePuck, DropZone } from '@measured/puck';
import '@measured/puck/puck.css';
import { api } from '../services/api';
import { NewsItem, Lecturer, StudyProgram, Course, AlumniTestimonial } from '../types';
import { renderMarkdownToHtml } from '../utils/markdown';
import Hero10, { type Hero10Props } from './ui/hero-10';
import LogoCloud, { type LogoCloudProps } from './ui/logo-cloud';
import { GalleryGrid, GalleryGridCell, ContainerStagger } from './ui/gallery-grid';
import AboutApps, { type AboutAppsProps } from './ui/about-apps';
import { ModernBookCover, BookHeader, BookTitle, BookDescription } from './ui/modern-book-cover';
import DarkHero from './ui/dark-hero';
import IntegrationMarquee from './ui/integration-marquee';
import FeatureTabs from './ui/feature-tabs';
import GradientTileGrid from './ui/gradient-tile-grid';
import MetricsCounter from './ui/metrics-counter';
import DarkCta from './ui/dark-cta';
import HeroSlider, { type HeroSliderProps, type HeroSlide, type HeroStat, type HeroSpecTag } from './ui/hero-slider';
import PageBanner, { type PageBannerProps } from './ui/page-banner';
import ModernSvgBanner, { type ModernSvgBannerProps } from './ui/modern-svg-banner';
import { MediaManager } from './MediaManager';
import { Skeleton, NewsCardSkeleton, LecturerCardSkeleton, ProdiCardSkeleton } from './ui/Skeleton';

import { 
  Sparkles, 
  Save, 
  Book, 
  RotateCcw, 
  Eye, 
  Edit3, 
  Download, 
  Upload, 
  CheckCircle2, 
  ArrowLeft,
  Terminal,
  Award,
  BookOpen,
  Users,
  Building2,
  Calendar,
  ExternalLink,
  Brain,
  MessageSquare,
  ShieldCheck,
  Zap,
  Code,
  Code2,
  HelpCircle,
  Image as ImageIcon,
  Video,
  ChevronDown,
  Globe,
  Sliders,
  Palette,
  Layout,
  Globe2,
  FileText,
  GraduationCap,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Layers,
  Newspaper,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Grid,
  Briefcase,
  Copy,
  Plus,
  Search,
  X,
  LayoutGrid,
  Filter,
  Database,
  RefreshCw,
  Navigation,
  Send,
  User,
  Tag,
  Quote,
  Star
} from 'lucide-react';

// --- ELEMENTOR-STYLE ADVANCED STYLING UTILITIES ---

// ─── HTML Sanitizer ─────────────────────────────────────────────────────────
// Strips <script>, <style>, <iframe>, and inline event handlers from HTML strings
// to prevent React warnings and XSS risks when rendering user-generated content.
const sanitizeHtml = (html: string): string => {
  if (!html) return '';
  return html
    // Remove script tags and their content, including self-closing or standalone script tags
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<script\b[^>]*\/?>/gi, '')
    // Remove style tags and their content
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<style\b[^>]*\/?>/gi, '')
    // Remove iframe tags
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<iframe\b[^>]*\/?>/gi, '')
    // Remove inline event handlers (onclick, onload, onerror, etc.)
    .replace(/\s+on\w+="[^"]*"/gi, '')
    .replace(/\s+on\w+='[^']*'/gi, '')
    // Remove javascript: protocol in href/src
    .replace(/href="javascript:[^"]*"/gi, 'href="#"')
    .replace(/src="javascript:[^"]*"/gi, 'src=""');
};

interface AdvancedStyleProps {
  fontFamily?: 'sans' | 'serif' | 'mono';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  bgStyle?: 'white' | 'slate' | 'maroon' | 'dark' | 'gradientDark' | 'gradientLight' | 'transparent';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  paddingX?: 'none' | 'sm' | 'md' | 'lg';
  marginTop?: 'none' | 'sm' | 'md' | 'lg';
  marginBottom?: 'none' | 'sm' | 'md' | 'lg';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  borderStyle?: 'none' | 'solid' | 'accent' | 'dashed';
  boxShadow?: 'none' | 'sm' | 'md' | 'lg' | 'glow';
  motionEffect?: 'none' | 'slideUp' | 'zoomIn' | 'fadeIn' | 'pulse';
}

const getAdvancedStyleClasses = (p: AdvancedStyleProps = {}) => {
  const fontClass = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
  }[p.fontFamily || 'sans'];

  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
    justify: 'text-justify',
  }[p.textAlign || 'left'];

  const pyClass = {
    none: 'py-0',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
    xl: 'py-16',
  }[p.paddingY || 'md'];

  const pxClass = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-8',
    lg: 'px-12',
  }[p.paddingX || 'md'];

  const mtClass = {
    none: 'mt-0',
    sm: 'mt-4',
    md: 'mt-8',
    lg: 'mt-12',
  }[p.marginTop || 'none'];

  const mbClass = {
    none: 'mb-0',
    sm: 'mb-4',
    md: 'mb-8',
    lg: 'mb-12',
  }[p.marginBottom || 'none'];

  const radiusClass = {
    none: 'rounded-none',
    sm: 'rounded-lg',
    md: 'rounded-2xl',
    lg: 'rounded-3xl',
    full: 'rounded-full',
  }[p.borderRadius || 'md'];

  const shadowClass = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-xl',
    glow: 'shadow-2xl shadow-red-500/20',
  }[p.boxShadow || 'sm'];

  const motionClass = {
    none: '',
    slideUp: 'transition-all duration-300 transform hover:-translate-y-1',
    zoomIn: 'transition-all duration-300 transform hover:scale-[1.01]',
    fadeIn: 'animate-fadeIn',
    pulse: 'animate-pulse',
  }[p.motionEffect || 'none'];

  const borderClass = {
    none: 'border-0',
    solid: 'border border-slate-200 dark:border-slate-800',
    accent: 'border-2 border-[#800020] dark:border-red-600',
    dashed: 'border border-dashed border-slate-300 dark:border-slate-700',
  }[p.borderStyle || 'solid'];

  const bgStyleClass = {
    white: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
    slate: 'bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100',
    maroon: 'bg-[#800020] text-white',
    dark: 'bg-slate-950 text-white',
    gradientDark: 'bg-gradient-to-br from-[#800020] via-slate-900 to-indigo-950 text-white',
    gradientLight: 'bg-gradient-to-br from-red-50 via-white to-blue-50 text-slate-900 dark:text-slate-100',
    transparent: 'bg-transparent',
  }[p.bgStyle || 'white'];

  return `${fontClass} ${alignClass} ${pyClass} ${pxClass} ${mtClass} ${mbClass} ${radiusClass} ${shadowClass} ${motionClass} ${borderClass} ${bgStyleClass}`;
};

const commonElementorFields = {
  bgStyle: {
    type: 'select' as const,
    label: '🎨 Background Style',
    options: [
      { label: 'Putih Clean', value: 'white' },
      { label: 'Slate Soft', value: 'slate' },
      { label: 'Merah Cabai (#800020)', value: 'maroon' },
      { label: 'Dark Mode Slate-950', value: 'dark' },
      { label: 'Gradient Maroon-Indigo Tech', value: 'gradientDark' },
      { label: 'Gradient Light Red-Blue', value: 'gradientLight' },
      { label: 'Transparan', value: 'transparent' },
    ],
  },
  fontFamily: {
    type: 'select' as const,
    label: '🔤 Font Family',
    options: [
      { label: 'Sans-Serif (Plus Jakarta)', value: 'sans' },
      { label: 'Serif (Playfair Display)', value: 'serif' },
      { label: 'Monospace (Code / Tech)', value: 'mono' },
    ],
  },
  textAlign: {
    type: 'select' as const,
    label: '📐 Alignment Teks',
    options: [
      { label: 'Rata Kiri', value: 'left' },
      { label: 'Rata Tengah', value: 'center' },
      { label: 'Rata Kanan', value: 'right' },
      { label: 'Rata Kiri-Kanan (Justify)', value: 'justify' },
    ],
  },
  paddingY: {
    type: 'select' as const,
    label: '↕️ Padding Vertikal (Atas/Bawah)',
    options: [
      { label: 'Tanpa Padding (0)', value: 'none' },
      { label: 'Kecil (16px)', value: 'sm' },
      { label: 'Sedang (32px)', value: 'md' },
      { label: 'Besar (48px)', value: 'lg' },
      { label: 'Sangat Besar (64px)', value: 'xl' },
    ],
  },
  paddingX: {
    type: 'select' as const,
    label: '↔️ Padding Horisontal (Kiri/Kanan)',
    options: [
      { label: 'Tanpa Padding (0)', value: 'none' },
      { label: 'Kecil (16px)', value: 'sm' },
      { label: 'Sedang (32px)', value: 'md' },
      { label: 'Besar (48px)', value: 'lg' },
    ],
  },
  marginTop: {
    type: 'select' as const,
    label: '⬆️ Margin Atas',
    options: [
      { label: '0px', value: 'none' },
      { label: '16px', value: 'sm' },
      { label: '32px', value: 'md' },
      { label: '48px', value: 'lg' },
    ],
  },
  marginBottom: {
    type: 'select' as const,
    label: '⬇️ Margin Bawah',
    options: [
      { label: '0px', value: 'none' },
      { label: '16px', value: 'sm' },
      { label: '32px', value: 'md' },
      { label: '48px', value: 'lg' },
    ],
  },
  borderRadius: {
    type: 'select' as const,
    label: '🔲 Border Radius',
    options: [
      { label: 'Kotak Tajam (0px)', value: 'none' },
      { label: 'Sudut Halus (8px)', value: 'sm' },
      { label: 'Sudut Rounded (16px)', value: 'md' },
      { label: 'Sudut Super Rounded (24px)', value: 'lg' },
      { label: 'Pill / Oval', value: 'full' },
    ],
  },
  borderStyle: {
    type: 'select' as const,
    label: '✏️ Gaya Border',
    options: [
      { label: 'Tanpa Border', value: 'none' },
      { label: 'Garis Tipis Standard', value: 'solid' },
      { label: 'Garis Aksentuasi Merah', value: 'accent' },
      { label: 'Garis Putus-Putus', value: 'dashed' },
    ],
  },
  boxShadow: {
    type: 'select' as const,
    label: '🌌 Shadow / Bayangan Card',
    options: [
      { label: 'Tanpa Bayangan', value: 'none' },
      { label: 'Bayangan Halus (Soft)', value: 'sm' },
      { label: 'Bayangan Sedang', value: 'md' },
      { label: 'Bayangan Dalam (Elevated)', value: 'lg' },
      { label: 'Glow Red Cabai', value: 'glow' },
    ],
  },
  motionEffect: {
    type: 'select' as const,
    label: '✨ Effect & Animasi Motion',
    options: [
      { label: 'Static (Tanpa Animasi)', value: 'none' },
      { label: 'Slide Up / Float Hover', value: 'slideUp' },
      { label: 'Zoom Scale Hover', value: 'zoomIn' },
      { label: 'Fade In Smooth', value: 'fadeIn' },
      { label: 'Pulse Glow', value: 'pulse' },
    ],
  },
};

const commonPaginationFields = {
  enablePagination: {
    type: 'select' as const,
    label: '📄 Status Pagination (Navigasi Halaman)',
    options: [
      { label: 'Aktifkan Pagination (Halaman & Tombol Next/Prev)', value: 'true' },
      { label: 'Non-aktifkan Pagination (Tampilkan Semua Data)', value: 'false' },
    ],
  },
  itemsPerPage: {
    type: 'select' as const,
    label: '🔢 Jumlah Item per Halaman',
    options: [
      { label: '2 Item / Halaman', value: '2' },
      { label: '3 Item / Halaman', value: '3' },
      { label: '4 Item / Halaman', value: '4' },
      { label: '5 Item / Halaman', value: '5' },
      { label: '6 Item / Halaman', value: '6' },
      { label: '8 Item / Halaman', value: '8' },
      { label: '10 Item / Halaman', value: '10' },
      { label: '12 Item / Halaman', value: '12' },
    ],
  },
};

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs">
      <div className="text-slate-500 dark:text-slate-400 font-semibold">
        Menampilkan <span className="font-extrabold text-slate-800 dark:text-slate-200">{startItem}-{endItem}</span> dari <span className="font-extrabold text-slate-800 dark:text-slate-200">{totalItems}</span> data
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-bold flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
          {pageNumbers.map((p) => {
            const isCurrent = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                className={`w-8 h-8 rounded-xl font-extrabold transition-all cursor-pointer shrink-0 ${
                  isCurrent
                    ? 'bg-[#800020] text-white shadow-sm scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-bold flex items-center gap-1 cursor-pointer"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

// --- DATABASE LIVE BLOCK RENDER COMPONENTS ---

const DbNewsBlockRender: React.FC<Props['DbNewsBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getNews();
      setItems(data || []);
    } catch (err: any) {
      console.error('Failed to fetch news:', err);
      setError('Gagal memuat berita dari database');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const isPaginationActive = props.enablePagination !== 'false';
  const pageSize = Number(props.itemsPerPage) || Number(props.limit) || 3;

  const filtered = items.filter(
    item => {
      const matchConfigCat = !props.categoryFilter || props.categoryFilter === 'Semua' || item.category === props.categoryFilter;
      const matchActiveCat = activeCategory === 'ALL' || item.category === activeCategory;
      const matchSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchConfigCat && matchActiveCat && matchSearch;
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [props.categoryFilter, props.itemsPerPage, props.enablePagination, items.length, activeCategory, searchQuery]);

  const totalPages = isPaginationActive ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const currentPageValid = Math.min(currentPage, totalPages);

  const displayed = isPaginationActive
    ? filtered.slice((currentPageValid - 1) * pageSize, currentPageValid * pageSize)
    : filtered.slice(0, Number(props.limit) || 3);

  return (
    <div className={styleClass}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <button
          onClick={fetchNews}
          type="button"
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
          title="Refresh Data dari DB"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Sync DB</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {['ALL', 'Berita', 'Pengumuman', 'Prestasi', 'Seminar'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-[#800020] text-white shadow-md' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#800020] hover:text-[#800020]'
              }`}
            >
              {cat === 'ALL' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64 lg:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#800020] transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-3 w-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="p-4 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200">
          ⚠️ {error}
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-2xl">
          Belum ada data berita di database. Tambahkan melalui Dashboard Admin!
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayed.map(item => (
              <div key={item.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#800020] transition-all flex flex-col justify-between group">
                <div>
                  {item.thumbnail && (
                    <div className="w-full h-32 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-extrabold text-xs text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-[#800020] transition-colors">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{item.summary}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                  {props.showAuthor !== 'false' ? (
                    <span>Penulis: {item.author || 'Admin FTI'}</span>
                  ) : (
                    <span></span>
                  )}
                  <a 
                    href={`/?page=detail-berita&berita=${item.slug || item.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', `/?page=detail-berita&berita=${item.slug || item.id}`);
                      window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'detail-berita' }));
                    }}
                    className="font-bold text-[#800020] dark:text-red-400 flex items-center gap-0.5 hover:underline"
                  >
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {isPaginationActive && (
            <PaginationControl
              currentPage={currentPageValid}
              totalPages={totalPages}
              totalItems={filtered.length}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};



const DbNewsDetailBlockRender: React.FC<Props['DbNewsDetailBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarSearch, setSidebarSearch] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const data = await api.getNews();
        if (data) {
          setNewsList(data);
          const urlParams = new URLSearchParams(window.location.search);
          const slug = urlParams.get('berita');
          if (slug) {
            const found = data.find(n => n.slug === slug || n.id === slug);
            setArticle(found || null);
          } else if (data.length > 0) {
            setArticle(data[0]);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, []);

  if (loading) {
    return (
      <div className={styleClass}>
        <div className="animate-pulse space-y-4 max-w-7xl mx-auto px-4">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
          <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
          <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styleClass}>
        <div className="text-center p-12 bg-rose-50 dark:bg-rose-950/30 rounded-3xl border border-rose-100 dark:border-rose-900/50 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-rose-800 dark:text-rose-300 mb-2">Berita Tidak Ditemukan</h2>
          <p className="text-rose-600 dark:text-rose-400 mb-6">Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
          <a 
            href="/?page=hero#berita" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/?page=hero#berita');
              window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'hero' }));
            }}
            className="px-6 py-2.5 rounded-xl bg-[#800020] text-white font-bold hover:bg-[#9B2C2C] transition-colors inline-block"
          >
            Kembali ke Daftar Berita
          </a>
        </div>
      </div>
    );
  }

  const recentArticles = newsList.filter(n => n.id !== article.id).slice(0, 5);

  return (
    <div className={styleClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Action Bar (Back to List) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <a
            href="/?page=hero#berita"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/?page=hero#berita');
              window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'hero' }));
            }}
            className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#9B2C2C] dark:hover:text-red-400 text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#9B2C2C] dark:text-red-400" />
            <span>Kembali ke Daftar Berita</span>
          </a>
        </div>

        {/* TWO COLUMN MAIN GRID: MAIN CONTENT (70%) + SIDEBAR (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN ARTICLE COLUMN */}
          <div className="lg:col-span-8 space-y-6">
            <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-[#9B2C2C] text-white font-black text-xs uppercase tracking-wider shadow-xs">
                    {article.category}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-bold text-xs flex items-center gap-1 border border-amber-300 dark:border-amber-800">
                    <Sparkles className="w-3.5 h-3.5 text-[#9B2C2C]" /> Warta Resmi Universitas Patria Artha
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#9B2C2C]" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#9B2C2C]" />
                    Redaksi: <strong className="text-slate-800 dark:text-slate-200">{article.author}</strong>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#9B2C2C]" />
                    3 Menit Baca
                  </span>
                </div>
              </div>

              {article.summary && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-slate-950/80 border-l-4 border-[#9B2C2C] text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  <p className="font-bold text-[#9B2C2C] dark:text-red-400 mb-1 uppercase tracking-wider text-[10px]">Ringkasan Berita:</p>
                  {article.summary}
                </div>
              )}

              {article.thumbnail && (
                <div className="space-y-2 my-6">
                  <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md p-2 flex items-center justify-center">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-auto max-h-[700px] object-contain rounded-2xl mx-auto block"
                    />
                  </div>
                  <p className="text-[11px] text-center text-slate-400 italic">
                    Visual Dokumentasi: {article.title}
                  </p>
                </div>
              )}

              <div 
                className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pt-2 space-y-4"
                dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(article.content || article.summary) }}
              />

              {/* ARTICLE TAGS */}
              {article.tags && article.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <Tag className="w-4 h-4 text-[#9B2C2C] mr-1" />
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

            </article>
          </div>

          {/* RIGHT SIDEBAR COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Search className="w-4 h-4 text-[#9B2C2C]" /> Cari Berita & Informasi
              </h3>
              <p className="text-xs text-slate-500">Temukan berita, kegiatan kampus, dan pengumuman terbaru UPA.</p>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder="Kata kunci berita..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#9B2C2C]"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Layers className="w-4 h-4 text-[#9B2C2C]" /> Kategori Berita Utama
              </h3>
              <div className="space-y-1.5">
                {[
                  { name: 'Pendidikan', desc: 'Berita akademik & pembelajaran' },
                  { name: 'Kemahasiswaan', desc: 'Kegiatan & organisasi mahasiswa' },
                  { name: 'Prestasi', desc: 'Pencapaian mahasiswa & dosen' },
                  { name: 'Kerjasama', desc: 'Kolaborasi & kemitraan institusi' }
                ].map((cat) => (
                  <div
                    key={cat.name}
                    className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950 text-left transition-all border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cat.name}</h4>
                      <p className="text-[10px] text-slate-400">{cat.desc}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Newspaper className="w-4 h-4 text-[#9B2C2C]" /> Berita Terkini Lainnya
              </h3>
              <div className="space-y-3">
                {recentArticles.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setArticle(item);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-start gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-800"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] font-extrabold text-[#9B2C2C] uppercase block mb-0.5">{item.category}</span>
                      <h4 className="text-xs font-bold text-[#9B2C2C] group-hover:text-[#9B2C2C] line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#800020] to-red-950 text-white shadow-xl space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-amber-200 text-[10px] font-black uppercase">Media Terverifikasi</span>
              <h4 className="text-sm font-black">Portal Berita Resmi UPA</h4>
              <p className="text-xs text-red-100/90 leading-relaxed">
                Universitas Patria Artha terverifikasi dan berkomitmen menyajikan informasi akademik yang akurat dan terpercaya.
              </p>
              <a
                href="https://www.youtube.com/@Official.Univ_PatriaArtha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Tonton YouTube Official UPA
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

const ProfileVisionBlockRender: React.FC<Props['ProfileVisionBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);

  return (
    <div className={styleClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {props.badgeText && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-3.5 h-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              {props.badgeText}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{props.heading}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">{props.description}</p>
        </div>

        {/* Accreditation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/80 rounded-xl text-emerald-600 dark:text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-white font-extrabold text-xs rounded-full uppercase tracking-wider">Unggul</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Akreditasi Nasional (LAM INFOKOM)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Badan Akreditasi Mandiri Informatika &amp; Komputer Indonesia</p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between"><span className="text-slate-400">Nomor SK:</span><span className="font-mono font-medium">084/SK/LAM-INFOKOM/Akred/S1/XII/2024</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Masa Berlaku:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">Hingga 31 Desember 2029</span></div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-950/80 rounded-xl text-red-600 dark:text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <span className="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full uppercase tracking-wider">Sertifikasi Internasional</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sertifikasi &amp; Keanggotaan Internasional</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Washington Accord Global Engineering Standard</p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs">
              <div className="flex items-center justify-between"><span className="text-slate-700 dark:text-slate-300 font-medium">IABEE (Indonesian Accreditation Board for Engineering Education)</span><span className="px-2 py-0.5 rounded bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">Full Accreditation (2024)</span></div>
              <div className="flex items-center justify-between"><span className="text-slate-700 dark:text-slate-300 font-medium">ASIIN e.V. Germany</span><span className="px-2 py-0.5 rounded bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">Provisional Member (2025)</span></div>
            </div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900 via-rose-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Visi FTI Patria Artha 2030
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-100 font-medium italic">"Menjadi Fakultas Teknik dan Informatika Universitas Patria Artha yang terkemuka, unggul, dan berdaya saing global pada tahun 2030 dalam bidang Rekayasa Teknologi, Artificial Intelligence, dan Sistem Informasi Terintegrasi berjiwa technopreneurship."</p>
            <div className="mt-6 pt-4 border-t border-red-800/80 text-xs text-red-200">✓ Berfokus pada AI, Cybersecurity, Software Engineering, dan Technopreneurship.</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              Misi Strategis FTI
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Menyelenggarakan pendidikan tinggi Teknik &amp; Informatika berstandar internasional dengan kurikulum adaptif berbasis Outcome-Based Education (OBE).</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Melaksanakan penelitian unggulan di bidang Artificial Intelligence, Cyber Security, Cloud Computing, Software Engineering, dan IoT yang berkontribusi nyata bagi kemajuan industri &amp; masyarakat.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Menyelenggarakan pengabdian masyarakat berbasis produk teknologi tepat guna dan solusi digital terintegrasi di Universitas Patria Artha.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Membangun kemitraan strategis dengan industri teknologi nasional maupun multinasional untuk memperkuat kesiapan kerja alumni Fakultas Teknik dan Informatika Universitas Patria Artha.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Focus Areas */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4 Fokus Keahlian &amp; Peminatan Studi</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Mahasiswa memilih spesialisasi pada semester 5 sesuai minat bakat dan cita-cita karir</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-blue-500" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Artificial Intelligence &amp; Data Science</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Fokus pada Machine Learning, Deep Learning, Computer Vision, NLP, Big Data Analytics, dan Generative AI.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400">
                <span>Rincian Kurikulum &amp; Karir</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-purple-500" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Software Engineering &amp; Cloud Computing</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Fokus pada Arsitektur Microservices, Full-Stack Web/Mobile, DevOps, Clean Code, dan System Architecture.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400">
                <span>Rincian Kurikulum &amp; Karir</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6 text-emerald-500" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Cyber Security &amp; Network Infrastructure</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Fokus pada Ethical Hacking, Penetration Testing, Cryptography, Cloud Security, dan Network Engineering.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400">
                <span>Rincian Kurikulum &amp; Karir</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu w-6 h-6 text-amber-500" aria-hidden="true"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Internet of Things &amp; Embedded Systems</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Fokus pada Smart City, Autonomous Systems, Sensor Networks, Microcontrollers, dan Robotics.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400">
                <span>Rincian Kurikulum &amp; Karir</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const DbStudyProgramBlockRender: React.FC<Props['DbStudyProgramBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [prodis, setProdis] = useState<StudyProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProdis = async () => {
    setLoading(true);
    try {
      const data = await api.getStudyPrograms();
      setProdis(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdis();
  }, []);

  const isPaginationActive = props.enablePagination !== 'false';
  const pageSize = Number(props.itemsPerPage) || 2;

  useEffect(() => {
    setCurrentPage(1);
  }, [props.itemsPerPage, props.enablePagination, prodis.length]);

  const totalPages = isPaginationActive ? Math.max(1, Math.ceil(prodis.length / pageSize)) : 1;
  const currentPageValid = Math.min(currentPage, totalPages);

  const displayed = isPaginationActive
    ? prodis.slice((currentPageValid - 1) * pageSize, currentPageValid * pageSize)
    : prodis;

  return (
    <div className={styleClass}>
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <button
          onClick={fetchProdis}
          type="button"
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Sync DB</span>
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map(i => (
            <ProdiCardSkeleton key={i} />
          ))}
        </div>
      ) : prodis.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-2xl">
          Belum ada data Program Studi di database.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayed.map(p => (
              <div key={p.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-400 font-black text-sm">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{p.name} ({p.degree || 'S1'})</h4>
                        <p className="text-[11px] text-slate-500 font-semibold">{p.code} • {p.totalSks ? `${p.totalSks} SKS` : '144 SKS'}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300">
                      Akreditasi {p.accreditation || 'A'}
                    </span>
                  </div>
                  {p.vision && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-3">
                      <strong>Visi:</strong> {p.vision}
                    </p>
                  )}
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 flex items-center gap-2.5">
                    {p.headOfProdiPhoto ? (
                      <img src={p.headOfProdiPhoto} alt="" className="w-8 h-8 rounded-lg object-cover border border-[#9B2C2C]/30 shrink-0" />
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 text-[#800020] flex items-center justify-center font-bold text-xs shrink-0">
                        👤
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block truncate">
                        Kaprodi: {p.headOfProgram || p.headOfProdi || 'Belum Diatur'}
                      </span>
                      {p.headOfProdiNidn && (
                        <span className="text-[9px] font-mono text-[#9B2C2C] dark:text-red-400 block font-bold">NIDN: {p.headOfProdiNidn}</span>
                      )}
                    </div>
                  </div>
                </div>
                {p.careerProspects && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Karir:</span> {p.careerProspects}
                  </div>
                )}
              </div>
            ))}
          </div>

          {isPaginationActive && (
            <PaginationControl
              currentPage={currentPageValid}
              totalPages={totalPages}
              totalItems={prodis.length}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

const DbCurriculumBlockRender: React.FC<Props['DbCurriculumBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProdi, setSelectedProdi] = useState<string>(
    props.prodiFilter && props.prodiFilter !== 'Semua' ? props.prodiFilter : 'ALL'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [openSemesters, setOpenSemesters] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await api.getCourses();
      setCourses(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (props.prodiFilter && props.prodiFilter !== 'Semua') {
      setSelectedProdi(props.prodiFilter);
    }
  }, [props.prodiFilter]);

  const defaultProdis = ['ALL', 'Teknik Informatika', 'Sistem Informasi', 'Teknik Elektro', 'Teknik Mesin', 'Rekayasa Perangkat Lunak'];
  const dynamicProdis = Array.from(new Set(courses.map(c => c.studyProgram).filter(p => Boolean(p) && p !== 'Semua' && p !== 'Semua Prodi')));
  const allProdis = Array.from(new Set([...defaultProdis, ...dynamicProdis]));

  const isLockedSingleProdi = props.showProdiTabs === 'false' && props.prodiFilter && props.prodiFilter !== 'ALL' && props.prodiFilter !== 'Semua';
  const activeProdiFilter = isLockedSingleProdi ? props.prodiFilter : selectedProdi;

  const filtered = courses.filter(c => {
    const matchesProdi = activeProdiFilter === 'ALL' || activeProdiFilter === 'Semua'
      ? true
      : (c.studyProgram === activeProdiFilter || c.studyProgram === 'Semua Prodi' || !c.studyProgram);
    const matchesSearch = !searchQuery || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesProdi && matchesSearch;
  });

  const toggleSemester = (sem: number) => {
    setOpenSemesters(prev => ({ ...prev, [sem]: !prev[sem] }));
  };

  const toggleAllSemesters = (expand: boolean) => {
    const updated: Record<number, boolean> = {};
    for (let i = 1; i <= 8; i++) {
      updated[i] = expand;
    }
    setOpenSemesters(updated);
  };

  const isAllOpen = [1, 2, 3, 4, 5, 6, 7, 8].every(sem => openSemesters[sem]);

  return (
    <div className={styleClass}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleAllSemesters(!isAllOpen)}
            type="button"
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
          >
            {isAllOpen ? 'Tutup Semua' : 'Buka Semua'}
          </button>
          <button
            onClick={fetchCourses}
            type="button"
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync DB</span>
          </button>
        </div>
      </div>

      {/* Program Studi Filter Bar & Search */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
        {isLockedSingleProdi ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#800020] dark:text-red-400" />
              <span>Program Studi:</span>
            </span>
            <span className="px-3.5 py-1 bg-[#800020] text-white font-extrabold rounded-xl text-xs shadow-sm flex items-center gap-2 border border-red-900">
              <span>🎓 {props.prodiFilter}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-white/20 text-white">
                {filtered.length} Mata Kuliah
              </span>
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#800020] dark:text-red-400" />
              <span>Prodi:</span>
            </span>
            {allProdis.map(prodi => {
              const isAll = prodi === 'ALL' || prodi === 'Semua';
              const label = isAll ? 'Semua Prodi' : prodi;
              const count = isAll 
                ? courses.length 
                : courses.filter(c => c.studyProgram === prodi || c.studyProgram === 'Semua Prodi' || !c.studyProgram).length;
              const isSelected = selectedProdi === prodi;
              return (
                <button
                  key={prodi}
                  type="button"
                  onClick={() => setSelectedProdi(prodi)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#800020] text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-black ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Quick Search inside Curriculum */}
        <div className="relative min-w-[200px] flex-1 sm:flex-none">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari mata kuliah / kode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#800020]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse h-40" />
      ) : filtered.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
          Tidak ada mata kuliah yang cocok dengan Program Studi <strong className="text-slate-700 dark:text-slate-300">"{selectedProdi}"</strong>.
        </div>
      ) : (
        /* ACCORDION GROUPED BY SEMESTER 1 - 8 */
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
            const semCourses = filtered.filter(c => c.semester === sem);
            const semTotalSks = semCourses.reduce((sum, c) => sum + (c.sks || 0), 0);
            const isOpen = !!openSemesters[sem];

            return (
              <div 
                key={sem}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleSemester(sem)}
                  className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer border-b border-transparent data-[open=true]:border-slate-200 dark:data-[open=true]:border-slate-800"
                  data-open={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#800020] text-white font-extrabold flex items-center justify-center text-xs shadow-sm shrink-0">
                      S{sem}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Semester {sem}</span>
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {semCourses.length} Mata Kuliah • Total {semTotalSks} SKS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {semTotalSks} SKS
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="p-3 sm:p-4 bg-white dark:bg-slate-900">
                    {semCourses.length === 0 ? (
                      <div className="p-4 text-center text-slate-400 text-xs italic bg-slate-50/50 dark:bg-slate-800/30 rounded-xl">
                        Belum ada mata kuliah terdaftar di Semester {sem} untuk {selectedProdi}.
                      </div>
                    ) : (
                      <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-extrabold uppercase text-[10px]">
                            <tr>
                              <th className="p-3">Kode MK</th>
                              <th className="p-3">Nama Mata Kuliah</th>
                              <th className="p-3 text-center">SKS</th>
                              <th className="p-3">Kategori</th>
                              <th className="p-3 text-center">Link Unduh RPS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {semCourses.map((c) => (
                              <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-mono font-bold text-[#800020] dark:text-red-400 shrink-0">
                                  {c.code}
                                </td>
                                <td className="p-3 font-bold text-slate-900 dark:text-white">
                                  <div>{c.name}</div>
                                  {c.description && (
                                    <div className="text-[11px] font-normal text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                      {c.description}
                                    </div>
                                  )}
                                </td>
                                <td className="p-3 font-extrabold text-slate-800 dark:text-slate-200 whitespace-nowrap text-center">
                                  {c.sks} SKS
                                </td>
                                <td className="p-3 whitespace-nowrap">
                                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                                    (c.category as string) === 'Wajib Prodi' || (c.category as string) === 'Wajib FTI'
                                      ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900'
                                      : (c.category as string) === 'Peminatan'
                                      ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900'
                                      : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900'
                                  }`}>
                                    {c.category || 'Mata Kuliah'}
                                  </span>
                                </td>
                                <td className="p-3 text-center whitespace-nowrap">
                                  <a
                                    href={c.rpsUrl || `#rps-${c.code}`}
                                    onClick={(e) => {
                                      if (!c.rpsUrl) {
                                        e.preventDefault();
                                        const rpsContent = `Rencana Pembelajaran Semester (RPS)\nKode: ${c.code}\nMata Kuliah: ${c.name}\nSKS: ${c.sks}\nKategori: ${c.category}\nDeskripsi: ${c.description || '-'}\n\nFakultas Teknik dan Informatika - Universitas Patria Artha`;
                                        const blob = new Blob([rpsContent], { type: 'text/plain;charset=utf-8' });
                                        const url = URL.createObjectURL(blob);
                                        const link = document.createElement('a');
                                        link.href = url;
                                        link.download = `RPS_${c.code}_${c.name.replace(/\s+/g, '_')}.txt`;
                                        link.click();
                                        URL.revokeObjectURL(url);
                                      }
                                    }}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold bg-[#800020] hover:bg-[#5A0017] text-white shadow-sm transition-all cursor-pointer"
                                    title={`Unduh Dokumen RPS ${c.name}`}
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Unduh RPS</span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const DbLecturerBlockRender: React.FC<Props['DbLecturerBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const blockRef = useRef<HTMLDivElement>(null);
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLecturerModal, setSelectedLecturerModal] = useState<Lecturer | null>(null);
  const [selectedProdi, setSelectedProdi] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    blockRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (selectedLecturerModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedLecturerModal]);

  const fetchLecturers = async () => {
    setLoading(true);
    try {
      const data = await api.getLecturers();
      setLecturers(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLecturers();
  }, []);

  const filteredLecturers = lecturers.filter((lec) => {
    const matchesProdi = selectedProdi === 'ALL' ||
                         (lec.studyProgram && lec.studyProgram.toLowerCase().includes(selectedProdi.toLowerCase())) ||
                         (selectedProdi === 'Teknik Informatika' && (!lec.studyProgram || lec.studyProgram.includes('Informatika')));
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery ||
                          lec.name.toLowerCase().includes(searchLower) ||
                          (lec.nidn && lec.nidn.includes(searchQuery)) ||
                          (lec.title && lec.title.toLowerCase().includes(searchLower)) ||
                          (lec.jabatan && lec.jabatan.toLowerCase().includes(searchLower)) ||
                          (lec.studyProgram && lec.studyProgram.toLowerCase().includes(searchLower)) ||
                          (lec.email && lec.email.toLowerCase().includes(searchLower)) ||
                          (lec.lab && lec.lab.toLowerCase().includes(searchLower)) ||
                          (lec.expertise && String(lec.expertise).toLowerCase().includes(searchLower));
    return matchesProdi && matchesSearch;
  });

  const isPaginationActive = props.enablePagination !== 'false';
  const pageSize = Number(props.itemsPerPage) || Number(props.limit) || 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [props.limit, props.itemsPerPage, props.enablePagination, filteredLecturers.length, selectedProdi, searchQuery]);

  const totalPages = isPaginationActive ? Math.max(1, Math.ceil(filteredLecturers.length / pageSize)) : 1;
  const currentPageValid = Math.min(currentPage, totalPages);

  const displayed = isPaginationActive
    ? filteredLecturers.slice((currentPageValid - 1) * pageSize, currentPageValid * pageSize)
    : (props.limit ? filteredLecturers.slice(0, Number(props.limit)) : filteredLecturers);

  const cardStyle = props.cardStyle || 'grid-classic';

  return (
    <div ref={blockRef} className={styleClass}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <button
          onClick={fetchLecturers}
          type="button"
          className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Sync DB</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mb-6 flex flex-col lg:flex-row items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama dosen, NIDN, jabatan, kepakaran..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs font-medium rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#800020] transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Prodi Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
          {[
            { id: 'ALL', label: '🎓 Semua Prodi' },
            { id: 'Teknik Informatika', label: '💻 S1 Informatika' },
            { id: 'Teknik Elektro', label: '⚡ S1 Elektro' },
            { id: 'Teknik Mesin', label: '⚙️ S1 Mesin' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedProdi(item.id)}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-xl border transition-all cursor-pointer ${
                selectedProdi === item.id
                  ? 'bg-[#800020] text-white border-[#800020] shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <LecturerCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredLecturers.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-2xl">
          {searchQuery || selectedProdi !== 'ALL' ? 'Dosen tidak ditemukan untuk filter ini.' : 'Belum ada data Dosen di database.'}
        </div>
      ) : (
        <>
          {/* CARD STYLE 1: GRID CLASSIC (PAS FOTO PORTRAIT RATIO) */}
          {cardStyle === 'grid-classic' && (
            <motion.div key={`grid-classic-${currentPageValid}`} layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {displayed.map((lec, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    key={lec.id || lec.nidn || `lec-classic-${idx}`} 
                    onClick={() => setSelectedLecturerModal(lec)}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5 hover:border-[#800020] hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                  >
                    <div className="w-16 sm:w-20 aspect-[3/4] rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden shrink-0 shadow-xs border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform duration-300">
                      {(lec.avatar || lec.photo) ? (
                        <img src={lec.avatar || lec.photo} alt={lec.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-[#800020] text-white flex items-center justify-center font-bold">
                          <Users className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-xs text-slate-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {lec.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{lec.title || 'Dosen Pengajar'}</p>
                      {lec.jabatan && (
                        <span className="mt-1 inline-block px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                          💼 {lec.jabatan}
                        </span>
                      )}
                      <p className="text-[10px] font-mono text-slate-400 mt-1">NIDN: {lec.nidn}</p>
                      {lec.expertise && (
                        <span className="inline-block mt-2 px-2 py-0.5 rounded text-[9px] font-extrabold bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300">
                          {Array.isArray(lec.expertise) ? lec.expertise.join(', ') : String(lec.expertise)}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* CARD STYLE 2: GRID MODERN (PORTRAIT PAS FOTO BANNER) */}
          {cardStyle === 'grid-modern' && (
            <motion.div key={`grid-modern-${currentPageValid}`} layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {displayed.map((lec, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    key={lec.id || lec.nidn || `lec-modern-${idx}`} 
                    onClick={() => setSelectedLecturerModal(lec)}
                    className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-red-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="relative aspect-[3/4] max-h-64 overflow-hidden bg-slate-900">
                      <img 
                        src={lec.photo || lec.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'} 
                        alt={lec.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      {lec.studyProgram && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-xl text-[10px] font-extrabold bg-black/60 backdrop-blur-md text-amber-300 border border-white/20">
                          {lec.studyProgram}
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {lec.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{lec.title || 'Dosen FTI'}</p>

                        {lec.jabatan && (
                          <div className="mt-1.5">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 border border-amber-300 inline-block shadow-xs">
                              💼 {lec.jabatan}
                            </span>
                          </div>
                        )}

                        <p className="text-[11px] font-mono text-slate-400 mt-1">NIDN: {lec.nidn}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                        <span className="text-[11px] text-slate-500 font-normal">{lec.lab || 'Lab FTI'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">Profil Detail →</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* CARD STYLE 3: PREMIUM MAROON GLASS */}
          {cardStyle === 'grid-maroon' && (
            <motion.div key={`grid-maroon-${currentPageValid}`} layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {displayed.map((lec, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    key={lec.id || lec.nidn || `lec-maroon-${idx}`} 
                    onClick={() => setSelectedLecturerModal(lec)}
                    className="bg-gradient-to-br from-[#800020] via-[#9B2C2C] to-red-950 text-white rounded-3xl p-5 shadow-lg border border-red-500/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="flex items-start gap-4">
                      <img 
                        src={lec.photo || lec.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'} 
                        alt={lec.name} 
                        className="w-16 sm:w-20 aspect-[3/4] rounded-xl object-cover object-top border-2 border-amber-300/80 shadow-md shrink-0 group-hover:rotate-1 transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-extrabold text-sm text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                          {lec.name}
                        </h4>
                        <p className="text-xs text-red-100/90 font-medium">{lec.title}</p>
                        {lec.jabatan && (
                          <span className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-black bg-amber-400 text-slate-950">
                            💼 {lec.jabatan}
                          </span>
                        )}
                        <p className="text-[10px] font-mono text-amber-200 mt-0.5">NIDN: {lec.nidn}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-red-100 font-semibold">
                      <span className="truncate">{lec.email}</span>
                      <span className="font-bold text-amber-300 group-hover:translate-x-1 transition-transform">Detail →</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* CARD STYLE 4: COMPACT LIST BAR */}
          {cardStyle === 'compact-list' && (
            <motion.div key={`compact-list-${currentPageValid}`} layout className="space-y-2.5">
              <AnimatePresence mode="popLayout">
                {displayed.map((lec, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    key={lec.id || lec.nidn || `lec-compact-${idx}`} 
                    onClick={() => setSelectedLecturerModal(lec)}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-[#800020] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-wrap items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img 
                        src={lec.photo || lec.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'} 
                        alt={lec.name} 
                        className="w-12 aspect-[3/4] rounded-lg object-cover object-top border border-slate-200 dark:border-slate-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-xs text-slate-900 dark:text-white truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {lec.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-mono">NIDN: {lec.nidn} • {lec.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {lec.jabatan && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300">
                          💼 {lec.jabatan}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-700 text-[#800020] dark:text-red-300 font-bold text-[11px] group-hover:bg-[#800020] group-hover:text-white transition-colors">
                        Buka Profil
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* CARD STYLE 5: CENTERED AVATAR BADGE */}
          {cardStyle === 'avatar-badge' && (
            <motion.div key={`avatar-badge-${currentPageValid}`} layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {displayed.map((lec, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    key={lec.id || lec.nidn || `lec-badge-${idx}`} 
                    onClick={() => setSelectedLecturerModal(lec)}
                    className="bg-slate-50 dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="relative w-20 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-2xl border-2 border-white dark:border-slate-700 shadow-md bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={lec.photo || lec.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'} 
                          alt={lec.name} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <h4 className="font-black text-sm text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {lec.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{lec.title}</p>

                      {lec.jabatan && (
                        <div className="mt-2">
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 border border-amber-300 inline-block shadow-xs">
                            💼 {lec.jabatan}
                          </span>
                        </div>
                      )}

                      <p className="text-[10px] font-mono text-slate-400 mt-1">NIDN: {lec.nidn}</p>
                    </div>

                    <button
                      type="button"
                      className="mt-5 w-full py-2 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 font-extrabold text-xs text-slate-700 dark:text-slate-200 group-hover:bg-[#800020] group-hover:text-white group-hover:border-[#800020] transition-colors shadow-xs"
                    >
                      Lihat Detail Dosen
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {isPaginationActive && (
            <PaginationControl
              currentPage={currentPageValid}
              totalPages={totalPages}
              totalItems={filteredLecturers.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {/* LECTURER DETAIL MODAL */}
      <AnimatePresence>
        {selectedLecturerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedLecturerModal(null)}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              
              {/* Header Modal */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-24 sm:w-28 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#800020]/30 shadow-md bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img
                      src={selectedLecturerModal.photo || selectedLecturerModal.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
                      alt={selectedLecturerModal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {selectedLecturerModal.name}
                    </h3>
                    <p className="text-xs text-[#800020] dark:text-red-400 font-extrabold">
                      {selectedLecturerModal.title}
                    </p>
                    {selectedLecturerModal.jabatan && (
                      <div className="mt-1">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-amber-400 text-slate-950 shadow-xs border border-amber-300 inline-block">
                          💼 {selectedLecturerModal.jabatan}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      NIDN: {selectedLecturerModal.nidn} • {selectedLecturerModal.lab || 'Lab FTI'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLecturerModal(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Riwayat Pendidikan */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  Riwayat Pendidikan Akademik:
                </h4>
                <div className="space-y-1.5">
                  {Array.isArray(selectedLecturerModal.education)
                    ? selectedLecturerModal.education.map((edu: any, idx: number) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700/60">
                          🎓 {edu}
                        </div>
                      ))
                    : (
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700/60">
                        🎓 {selectedLecturerModal.education || 'S1 Komputer, S2 Komputer'}
                      </div>
                    )}
                </div>
              </div>

              {/* Mata Kuliah Yang Diampu */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  Mata Kuliah Yang Diampu:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {Array.isArray(selectedLecturerModal.coursesTaught)
                    ? selectedLecturerModal.coursesTaught.map((course: any, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-bold border border-blue-200 dark:border-blue-800">
                          {course}
                        </span>
                      ))
                    : (
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-bold border border-blue-200 dark:border-blue-800">
                        {selectedLecturerModal.coursesTaught || 'Algoritma & Pemrograman'}
                      </span>
                    )}
                </div>
              </div>

              {/* Tautan Profil Riset & Kontak */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Tautan Profil Riset & Publikasi Ilmiah:
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {selectedLecturerModal.googleScholar && (
                      <a
                        href={selectedLecturerModal.googleScholar.startsWith('http') ? selectedLecturerModal.googleScholar : `https://${selectedLecturerModal.googleScholar}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 font-extrabold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>Google Scholar</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {selectedLecturerModal.scopus && (
                      <a
                        href={selectedLecturerModal.scopus.startsWith('http') ? selectedLecturerModal.scopus : `https://www.scopus.com/authid/detail.uri?authorId=${selectedLecturerModal.scopus}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 border border-amber-200 dark:border-amber-800 font-extrabold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Scopus ID</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {selectedLecturerModal.sinta && (
                      <a
                        href={selectedLecturerModal.sinta.startsWith('http') ? selectedLecturerModal.sinta : `https://sinta.kemdikbud.go.id/authors/profile/${selectedLecturerModal.sinta}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 font-extrabold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>SINTA Kemdikbud</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <a
                    href={`mailto:${selectedLecturerModal.email}`}
                    className="px-4 py-2 bg-[#9B2C2C] hover:bg-[#800020] text-white font-extrabold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Kirim Email</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DbAcademicCalendarBlockRender: React.FC<Props['DbAcademicCalendarBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCalendar = async () => {
    setLoading(true);
    try {
      const data = await api.getAcademicCalendar();
      setEvents(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendar();
  }, []);

  const isPaginationActive = props.enablePagination !== 'false';
  const pageSize = Number(props.itemsPerPage) || 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [props.itemsPerPage, props.enablePagination, events.length]);

  const totalPages = isPaginationActive ? Math.max(1, Math.ceil(events.length / pageSize)) : 1;
  const currentPageValid = Math.min(currentPage, totalPages);

  const displayed = isPaginationActive
    ? events.slice((currentPageValid - 1) * pageSize, currentPageValid * pageSize)
    : events;

  return (
    <div className={styleClass}>
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <button
          onClick={fetchCalendar}
          type="button"
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Sync DB</span>
        </button>
      </div>

      {loading ? (
        <div className="p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse h-40" />
      ) : events.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-2xl">
          Belum ada jadwal Kalender Akademik di database.
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {displayed.map((ev, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#800020] text-white font-black text-xs shrink-0 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">{ev.title || ev.activity}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{ev.date || `${ev.startDate || ''} ${ev.endDate ? 's/d ' + ev.endDate : ''}`}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200">
                  {ev.category || 'Akademik'}
                </span>
              </div>
            ))}
          </div>

          {isPaginationActive && (
            <PaginationControl
              currentPage={currentPageValid}
              totalPages={totalPages}
              totalItems={events.length}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

const DbTestimonialCarouselBlockRender: React.FC<Props['DbTestimonialCarouselBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);
  const [testimonials, setTestimonials] = useState<AlumniTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(props.autoPlay !== 'false');

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const data = await api.getAlumniTestimonials();
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        setTestimonials([]);
      }
    } catch (err) {
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!isAutoPlay || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, Number(props.autoPlayIntervalMs) || 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length, props.autoPlayIntervalMs]);

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex] || null;

  return (
    <div className={styleClass}>
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#9B2C2C]/10 text-[#9B2C2C] dark:text-red-400 border border-[#9B2C2C]/30 flex items-center gap-1">
              <Quote className="w-3 h-3" />
              <span>TESTIMONIAL SLIDESHOW</span>
            </span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading || 'Testimoni Alumni FTI'}</h3>
          </div>
          {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-colors cursor-pointer ${
              isAutoPlay 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300' 
                : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400'
            }`}
          >
            {isAutoPlay ? '▶ Auto Slideshow' : '⏸ Paused'}
          </button>
          <button
            onClick={fetchTestimonials}
            type="button"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse h-64 flex items-center justify-center text-xs text-slate-400">
          Memuat Testimoni...
        </div>
      ) : testimonials.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs border border-dashed rounded-3xl">
          Belum ada data Testimoni di database.
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-[#500014] text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Quote className="w-32 h-32 text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative shrink-0">
              <img
                src={current?.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                alt={current?.name || 'Alumni'}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-[#9B2C2C]/50 shadow-xl"
              />
              {current?.companyLogo && (
                <img
                  src={current.companyLogo}
                  alt={current.company}
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-white p-1 object-contain border border-slate-200 shadow-md"
                />
              )}
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
                "{current?.quote}"
              </p>

              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-white">{current?.name}</h4>
                <p className="text-xs text-red-300 font-semibold">
                  {current?.role} di <strong className="text-white">{current?.company}</strong> (Lulusan {current?.gradYear})
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[#9B2C2C]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-white/60">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── 📰 TRENDING NEWS MAGAZINE BLOCK ─────────────────────────────────────────
export type TrendingNewsProps = {
  sectionTitle?: string;
  categoryTabs?: string;
  useLiveData?: boolean;
  featuredTitle?: string;
  featuredCategory?: string;
  featuredAuthor?: string;
  featuredDate?: string;
  featuredSummary?: string;
  featuredImageUrl?: string;
  sideArticles?: {
    title: string;
    category?: string;
    date?: string;
    imageUrl?: string;
  }[];
} & AdvancedStyleProps;

export const TrendingNewsBlock: React.FC<TrendingNewsProps> = (props) => {
  const [activeCategory, setActiveCategory] = React.useState('SEMUA');
  const [liveNews, setLiveNews] = React.useState<NewsItem[]>([]);

  const useLiveData = props.useLiveData !== false;

  React.useEffect(() => {
    if (useLiveData) {
      api.getNews().then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLiveNews(data);
        }
      }).catch(err => console.warn('Trending news fetch err:', err));
    }
  }, [useLiveData]);

  const styleClass = getAdvancedStyleClasses(props);

  // Categories tabs
  const categoriesList = props.categoryTabs 
    ? props.categoryTabs.split(',').map(s => s.trim()).filter(Boolean)
    : ['SEMUA', 'PENDIDIKAN', 'KEMAHASISWAAN', 'PRESTASI', 'KERJASAMA'];

  // Determine items to display
  let featuredItem = {
    title: props.featuredTitle || 'Congress rolls out ‘Better Deal,’ new economic agenda',
    category: props.featuredCategory || 'Berita Utama',
    author: props.featuredAuthor || 'Redaksi FTI',
    date: props.featuredDate || '14 Agustus 2026',
    summary: props.featuredSummary || 'Adderall and flirting with bulimia in an attempt to whittle herself to represents progress released this campaign and were like Whoa look this plus size model...',
    imageUrl: props.featuredImageUrl || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    slug: 'featured-1'
  };

  let sideItems = props.sideArticles && props.sideArticles.length > 0
    ? props.sideArticles
    : [
        {
          title: 'Carson says no ‘path forward’ after losses in recent election',
          category: 'Politik',
          date: '14 Jul 2026',
          imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80'
        },
        {
          title: 'GOP nomination fight rumbles forward with intense debate',
          category: 'Nasional',
          date: '12 Jul 2026',
          imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=400&q=80'
        },
        {
          title: 'Trump approves new Russia sanctions for violating arms pact',
          category: 'Internasional',
          date: '10 Jul 2026',
          imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=400&q=80'
        },
        {
          title: 'Democrats Want to Change the Democratic Party. They Just Disagree...',
          category: 'Politik',
          date: '08 Jul 2026',
          imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80'
        }
      ];

  if (useLiveData && liveNews.length > 0) {
    const filteredLive = activeCategory === 'SEMUA' 
      ? liveNews 
      : liveNews.filter(n => (n.category || '').toUpperCase().includes(activeCategory) || activeCategory.includes((n.category || '').toUpperCase()));

    const listToUse = filteredLive.length > 0 ? filteredLive : liveNews;

    if (listToUse.length > 0) {
      const topNews = listToUse[0];
      featuredItem = {
        title: topNews.title,
        category: topNews.category,
        author: topNews.author || 'Redaksi FTI',
        date: topNews.date,
        summary: topNews.summary || topNews.content.slice(0, 160) + '...',
        imageUrl: topNews.thumbnail || featuredItem.imageUrl,
        slug: topNews.slug || topNews.id
      };

      sideItems = listToUse.slice(1, 5).map(n => ({
        title: n.title,
        category: n.category,
        date: n.date,
        imageUrl: n.thumbnail || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80',
        slug: n.slug || n.id
      }));
    }
  }

  return (
    <div className={styleClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-[#9B2C2C] rounded-full shrink-0"></div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {props.sectionTitle || 'Trending Today'}
            </h2>
          </div>

          {/* Category Tabs Header */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categoriesList.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#9B2C2C] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7-COLUMN BIG FEATURED ARTICLE CARD */}
          <div className="lg:col-span-7 group cursor-pointer" onClick={() => {
            const url = `/?berita=${(featuredItem as any).slug}#berita`;
            window.history.pushState({}, '', url);
            window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'berita' }));
          }}>
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img
                  src={featuredItem.imageUrl}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 text-white text-xs font-black tracking-wide shadow-md backdrop-blur-xs">
                  {featuredItem.category}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-[#9B2C2C] dark:group-hover:text-red-400 transition-colors">
                  {featuredItem.title}
                </h3>
                
                <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                  <span className="text-slate-600 dark:text-slate-300 font-bold">{featuredItem.author}</span>
                  <span>•</span>
                  <span>{featuredItem.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed line-clamp-3">
                  {featuredItem.summary}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT 5-COLUMN STACKED SIDE ARTICLES LIST */}
          <div className="lg:col-span-5 space-y-4">
            {sideItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const slug = (item as any).slug || idx;
                  const url = `/?berita=${slug}#berita`;
                  window.history.pushState({}, '', url);
                  window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'berita' }));
                }}
                className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#9B2C2C]/50 hover:shadow-md transition-all group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-24 sm:w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.imageUrl || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80'}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 group-hover:text-[#9B2C2C] dark:group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  {item.date && (
                    <p className="text-[11px] font-semibold text-slate-400">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

// ─── 🎠 NEWS CAROUSEL BLOCK ──────────────────────────────────────────────────
export type NewsCarouselProps = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  useLiveData?: boolean;
  autoPlay?: boolean;
  cardsToShow?: '2' | '3' | '4';
  items?: {
    title: string;
    category?: string;
    date?: string;
    author?: string;
    summary?: string;
    imageUrl?: string;
  }[];
} & AdvancedStyleProps;

export const NewsCarouselBlock: React.FC<NewsCarouselProps> = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [liveNews, setLiveNews] = React.useState<NewsItem[]>([]);
  const [isAutoPlay, setIsAutoPlay] = React.useState(props.autoPlay !== false);

  const useLiveData = props.useLiveData !== false;

  React.useEffect(() => {
    if (useLiveData) {
      api.getNews().then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLiveNews(data);
        }
      }).catch(err => console.warn('Carousel news fetch err:', err));
    }
  }, [useLiveData]);

  const defaultItems = [
    {
      title: 'Fakultas Teknik UPA Gelar Seminar Nasional AI & Data Science 2026',
      category: 'Pendidikan',
      date: '14 Agustus 2026',
      author: 'Humas FTI',
      summary: 'Menghadirkan pakar teknologi papan atas untuk membahas tren kecerdasan buatan terdepan.',
      imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mahasiswa Teknik Informatika Raih Juara 1 Hackathon Tingkat Nasional',
      category: 'Prestasi',
      date: '10 Agustus 2026',
      author: 'Kemahasiswaan',
      summary: 'Tim robotik dan AI FTI memenangkan kejuaraan bergengsi dengan inovasi IoT pintar.',
      imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kerjasama Strategis FTI Patria Artha dengan Industri Teknologi Internasional',
      category: 'Kerjasama',
      date: '05 Agustus 2026',
      author: 'Redaksi FTI',
      summary: 'Program magang industri mandiri & sertifikasi internasional untuk seluruh mahasiswa aktif.',
      imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Pelatihan Sertifikasi Cyber Security & Cloud Architecture Bagi Dosen',
      category: 'Pendidikan',
      date: '01 Agustus 2026',
      author: 'Lab FTI',
      summary: 'Peningkatan kompetensi tenaga pengajar dalam bidang keamanan jaringan dan cloud.',
      imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const newsItems = useLiveData && liveNews.length > 0
    ? liveNews.map(n => ({
        title: n.title,
        category: n.category,
        date: n.date,
        author: n.author || 'Redaksi FTI',
        summary: n.summary || n.content.slice(0, 120) + '...',
        imageUrl: n.thumbnail || defaultItems[0].imageUrl,
        slug: n.slug || n.id
      }))
    : (props.items && props.items.length > 0 ? props.items : defaultItems);

  const numVisible = parseInt(props.cardsToShow || '3', 10);
  const maxIndex = Math.max(0, newsItems.length - numVisible);

  React.useEffect(() => {
    if (!isAutoPlay || newsItems.length <= numVisible) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, maxIndex, newsItems.length, numVisible]);

  const styleClass = getAdvancedStyleClasses(props);

  return (
    <div className={styleClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full bg-[#9B2C2C]/10 text-[#9B2C2C] dark:text-red-400 text-xs font-black uppercase tracking-wider border border-[#9B2C2C]/20 flex items-center gap-1">
                <Newspaper className="w-3.5 h-3.5 text-[#9B2C2C]" />
                <span>BERITA & AGENDA SLIDESHOW</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {props.sectionTitle || 'Kilas Berita & Carousel Informasi'}
            </h2>
            {props.sectionSubtitle && (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {props.sectionSubtitle}
              </p>
            )}
          </div>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                isAutoPlay
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
                  : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
              }`}
            >
              {isAutoPlay ? '▶ Auto Play' : '⏸ Paused'}
            </button>

            <button
              type="button"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
              title="Berita Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-500 font-bold px-1">
              {currentIndex + 1} / {Math.max(1, maxIndex + 1)}
            </span>

            <button
              type="button"
              onClick={() => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))}
              disabled={currentIndex >= maxIndex}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
              title="Berita Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Track Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / numVisible)}%)` }}
          >
            {newsItems.map((item, idx) => (
              <div 
                key={idx}
                style={{ flex: `0 0 calc(${100 / numVisible}% - ${((numVisible - 1) * 24) / numVisible}px)` }}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const slug = (item as any).slug || idx;
                  const url = `/?berita=${slug}#berita`;
                  window.history.pushState({}, '', url);
                  window.dispatchEvent(new CustomEvent('fti_navigate', { detail: 'berita' }));
                }}
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#9B2C2C] text-white text-[11px] font-extrabold shadow-md">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                      {item.author && <span className="text-slate-600 dark:text-slate-300 font-bold">{item.author}</span>}
                      {item.author && item.date && <span>•</span>}
                      {item.date && <span>{item.date}</span>}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#9B2C2C] dark:group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>

                    {item.summary && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-normal leading-relaxed">
                        {item.summary}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#9B2C2C] dark:text-red-400 group-hover:translate-x-1 transition-transform">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {newsItems.length > numVisible && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#9B2C2C]' : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                title={`Halaman ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

// ─── 🌄 HERO SLIDESHOW BLOCK WITH ANIMATED GRADIENT ──────────────────────────
export type HeroSlideItem = {
  imageUrl: string;
  badgeText?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  gradientOverlay?: 'maroon' | 'slate-dark' | 'emerald' | 'royal-blue' | 'sunset-gold';
};

export type HeroSlideshowProps = {
  autoPlay?: boolean;
  autoPlayIntervalMs?: string;
  heightPreset?: 'screen' | 'large' | 'medium';
  slides?: HeroSlideItem[];
} & AdvancedStyleProps;

export const HeroSlideshowBlock: React.FC<HeroSlideshowProps> = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const defaultSlides: HeroSlideItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=2000&q=85',
      badgeText: '✨ PMB GELOMBANG 2 DISKON 50% BEASISWA',
      titlePrefix: 'Mewujudkan Generasi',
      titleHighlight: 'Unggul & Inovatif',
      titleSuffix: 'di Bidang Teknologi',
      description: 'Fakultas Teknik & Informatika Patria Artha menghadirkan kurikulum berbasis kecerdasan buatan, cloud computing, dan sertifikasi industri internasional.',
      ctaPrimaryText: 'Daftar PMB Sekarang',
      ctaPrimaryLink: '#pmb',
      ctaSecondaryText: 'Jelajahi Program Studi',
      ctaSecondaryLink: '#prodi',
      gradientOverlay: 'maroon'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=2000&q=85',
      badgeText: '🚀 LABORATORIUM CANGGIH & RISET AI',
      titlePrefix: 'Fasilitas Belajar Kelas',
      titleHighlight: 'Dunia & Praktikum',
      titleSuffix: 'Berbasis Proyek Real',
      description: 'Dilengkapi dengan server komputasi tinggi, laboratorium robotika, cyber security, dan studio desain digital standar industri modern.',
      ctaPrimaryText: 'Lihat Laboratorium',
      ctaPrimaryLink: '#lab',
      ctaSecondaryText: 'Kurikulum Merdeka',
      ctaSecondaryLink: '#kurikulum',
      gradientOverlay: 'royal-blue'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
      badgeText: '🎓 98% LULUSAN LANGSUNG BEKERJA',
      titlePrefix: 'Kemitraan Karir dengan',
      titleHighlight: '100+ Perusahaan',
      titleSuffix: 'Teknologi Ternama',
      description: 'Program magang bersertifikat dan penyaluran kerja langsung sebelum wisuda untuk mencetak profesional siap pakai di era digital.',
      ctaPrimaryText: 'Info Karir & Alumni',
      ctaPrimaryLink: '#alumni',
      ctaSecondaryText: 'Kontak Pendaftaran',
      ctaSecondaryLink: '#kontak',
      gradientOverlay: 'emerald'
    }
  ];

  const slides = props.slides && props.slides.length > 0 ? props.slides : defaultSlides;
  const isAutoPlay = props.autoPlay !== false;
  const intervalMs = parseInt(props.autoPlayIntervalMs || '5000', 10);

  React.useEffect(() => {
    if (!isAutoPlay || isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isAutoPlay, isPaused, slides.length, intervalMs]);

  // Height preset class
  const heightClass = props.heightPreset === 'screen' 
    ? 'min-h-screen' 
    : props.heightPreset === 'medium' 
      ? 'min-h-[520px] h-[55vh]' 
      : 'min-h-[640px] h-[75vh]';

  // Gradient Overlay Class generator
  const getGradientClass = (type?: string) => {
    switch (type) {
      case 'royal-blue':
        return 'from-blue-950/95 via-indigo-950/80 to-slate-950/90';
      case 'emerald':
        return 'from-emerald-950/95 via-teal-950/80 to-slate-950/90';
      case 'slate-dark':
        return 'from-slate-950/95 via-slate-900/85 to-slate-950/90';
      case 'sunset-gold':
        return 'from-[#500014]/95 via-amber-950/85 to-slate-950/95';
      case 'maroon':
      default:
        return 'from-[#800020]/95 via-[#9B2C2C]/75 to-slate-950/90';
    }
  };

  const styleClass = getAdvancedStyleClasses(props);

  return (
    <div className={`relative overflow-hidden ${heightClass} ${styleClass}`}>
      {/* BACKGROUND IMAGE WITH KEN BURNS ANIMATED SLIDES */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated Zoom Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.imageUrl || defaultSlides[0].imageUrl}
              alt={slide.titleHighlight || 'Slide'}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                idx === currentIndex ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>

          {/* DYNAMIC ANIMATED GRADIENT OVERLAY */}
          <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass(slide.gradientOverlay)}`} />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/70 opacity-80" />

          {/* SLIDE CONTENT CONTAINER */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-20 text-white">
            <div className="max-w-3xl space-y-6 animate-fadeIn">
              
              {/* Pill Badge */}
              {slide.badgeText && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 text-xs font-black text-amber-300 tracking-wider shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{slide.badgeText}</span>
                </div>
              )}

              {/* Main Headline Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] drop-shadow-md">
                {slide.titlePrefix && <span className="block text-white">{slide.titlePrefix}</span>}
                {slide.titleHighlight && (
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent underline decoration-amber-400/40 decoration-4 underline-offset-8">
                    {slide.titleHighlight}
                  </span>
                )}
                {slide.titleSuffix && <span className="block text-slate-100 text-2xl sm:text-4xl mt-1">{slide.titleSuffix}</span>}
              </h1>

              {/* Subtitle / Description Paragraph */}
              {slide.description && (
                <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-xs">
                  {slide.description}
                </p>
              )}

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {slide.ctaPrimaryText && (
                  <a
                    href={slide.ctaPrimaryLink || '#'}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#9B2C2C] to-[#800020] hover:from-red-600 hover:to-[#9B2C2C] text-white text-sm font-extrabold tracking-wide shadow-xl hover:shadow-red-900/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 border border-red-500/30 cursor-pointer"
                  >
                    <span>{slide.ctaPrimaryText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                {slide.ctaSecondaryText && (
                  <a
                    href={slide.ctaSecondaryLink || '#'}
                    className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>{slide.ctaSecondaryText}</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* CONTROLS: PREV & NEXT BUTTONS */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 shadow-xl cursor-pointer"
            title="Slide Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentIndex(prev => (prev + 1) % slides.length)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 shadow-xl cursor-pointer"
            title="Slide Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* BOTTOM PAGINATION INDICATORS */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// --- PUCK CONFIGURATION WITH ADVANCED ELEMENTOR-STYLE PROPERTIES ---

// ─── 📸 IMAGE PICKER FIELD (Custom Puck Field → Media Manager Modal) ───────
const ImagePickerField: React.FC<{
  value: string;
  onChange: (url: string) => void;
  label?: string;
}> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Preview thumbnail + actions */}
      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-video bg-slate-50 dark:bg-slate-800">
          <img src={value} alt="Selected" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-bold shadow hover:bg-slate-100"
            >🖼️ Ganti Gambar</button>
            <button
              type="button"
              onClick={() => onChange('')}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold shadow hover:bg-red-700"
            >✕ Hapus</button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex flex-col items-center justify-center gap-2 w-full py-5 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 hover:border-[#800020] hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-slate-500 dark:text-slate-400 text-xs font-semibold"
        >
          <span className="text-2xl">🖼️</span>
          <span>Pilih Gambar dari Media Manager</span>
        </button>
      )}
      {/* URL text fallback */}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Atau tempel URL gambar..."
        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#800020]"
      />
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>

          <div className="w-full max-w-5xl max-h-[90vh] overflow-auto rounded-3xl shadow-2xl">
            <MediaManager
              isModalMode
              onCloseModal={() => setOpen(false)}
              onSelectImage={(url: string) => { onChange(url); setOpen(false); }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Helper: create a Puck custom field for image picking
const makeImageField = (label: string) => ({
  type: 'custom' as const,
  label,
  render: ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
    <ImagePickerField value={value || ''} onChange={onChange} />
  ),
});

// Helper: Common Advanced Style Fields for Puck Components
const advancedStyleFields = {
  fontFamily: {
    type: 'select' as const, label: '🔤 Jenis Font',
    options: [
      { label: 'Sans-Serif Modern (Inter / Default)', value: 'sans' },
      { label: 'Serif Formal / Klasik', value: 'serif' },
      { label: 'Monospace / Coding', value: 'mono' },
    ],
  },
  textAlign: {
    type: 'select' as const, label: '📐 Ratakan Teks',
    options: [
      { label: 'Rata Kiri', value: 'left' },
      { label: 'Rata Tengah', value: 'center' },
      { label: 'Rata Kanan', value: 'right' },
      { label: 'Rata Kiri Kanan (Justify)', value: 'justify' },
    ],
  },
  bgStyle: {
    type: 'select' as const, label: '🎨 Gaya Latar Belakang (Background)',
    options: [
      { label: 'Putih (White)', value: 'white' },
      { label: 'Slate Terang (Light Slate)', value: 'slate' },
      { label: 'Maroon Khas UPA', value: 'maroon' },
      { label: 'Dark Mode Gelap', value: 'dark' },
      { label: 'Gradasi Gelap Elegant', value: 'gradientDark' },
      { label: 'Gradasi Terang Minimalis', value: 'gradientLight' },
      { label: 'Transparan (Mengikuti Induk)', value: 'transparent' },
    ],
  },
  paddingY: {
    type: 'select' as const, label: '↕️ Spasi Vertikal (Padding Atas-Bawah)',
    options: [
      { label: 'Standar (Medium)', value: 'md' },
      { label: 'Kecil (Small)', value: 'sm' },
      { label: 'Besar (Large)', value: 'lg' },
      { label: 'Ekstra Besar (XL)', value: 'xl' },
      { label: 'Tanpa Padding', value: 'none' },
    ],
  },
  boxShadow: {
    type: 'select' as const, label: '✨ Bayangan (Box Shadow)',
    options: [
      { label: 'Tanpa Bayangan', value: 'none' },
      { label: 'Bayangan Halus (Soft)', value: 'sm' },
      { label: 'Bayangan Sedang (Medium)', value: 'md' },
      { label: 'Bayangan Tebal (Elevated)', value: 'lg' },
      { label: 'Efek Glow Menyala', value: 'glow' },
    ],
  },
};

// ─── 📐 LAYOUT RENDER COMPONENTS (SECTION, COLUMNS, GRID) ───────────────────
const SectionLayoutBlockRender: React.FC<Props['SectionLayoutBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);

  const bgClasses = {
    white: 'bg-white text-slate-900 dark:bg-slate-950 dark:text-white',
    slate: 'bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white border-y border-slate-200 dark:border-slate-800',
    dark: 'bg-slate-950 text-white border-y border-slate-800',
    maroon: 'bg-gradient-to-br from-[#800020] via-[#9B2C2C] to-red-950 text-white shadow-xl',
    'gradient-red': 'bg-gradient-to-r from-[#800020] to-[#9B2C2C] text-white',
    'gradient-dark': 'bg-gradient-to-b from-slate-900 to-slate-950 text-white',
    glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl'
  }[props.bgStyle || 'slate'];

  const widthClass = {
    boxed: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    compact: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-8'
  }[props.width || 'boxed'];

  const borderTopClass = {
    none: '',
    maroon: 'border-t-4 border-[#800020]',
    amber: 'border-t-4 border-amber-400',
    emerald: 'border-t-4 border-emerald-500'
  }[props.borderTop || 'none'];

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[props.alignment || 'left'];

  return (
    <section className={`${bgClasses} ${props.paddingY || 'py-12'} ${borderTopClass} ${styleClass} transition-all`}>
      <div className={widthClass}>
        {(props.heading || props.subheading) && (
          <div className={`mb-8 flex flex-col ${alignClass} space-y-1.5`}>
            {props.heading && (
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{props.heading}</h2>
            )}
            {props.subheading && (
              <p className="text-sm opacity-80 max-w-2xl font-medium">{props.subheading}</p>
            )}
          </div>
        )}
        <div className="w-full">
          <DropZone zone="section-content" />
        </div>
      </div>
    </section>
  );
};

const ColumnsLayoutBlockRender: React.FC<Props['ColumnsLayoutBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);

  const layout = props.layout || '2-equal';
  const gap = props.gap || 'gap-6';
  const alignItems = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }[props.alignItems || 'start'];

  const cardStyle = {
    transparent: '',
    'white-card': 'bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm',
    'dark-card': 'bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-lg',
    'glass-card': 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-md'
  }[props.bgCard || 'transparent'];

  let colCount = 2;
  let gridColsClass = 'grid grid-cols-1 md:grid-cols-2';

  if (layout === '2-equal') {
    colCount = 2;
    gridColsClass = 'grid grid-cols-1 md:grid-cols-2';
  } else if (layout === '2-left-wide') {
    colCount = 2;
    gridColsClass = 'grid grid-cols-1 md:grid-cols-12';
  } else if (layout === '2-right-wide') {
    colCount = 2;
    gridColsClass = 'grid grid-cols-1 md:grid-cols-12';
  } else if (layout === '3-equal') {
    colCount = 3;
    gridColsClass = 'grid grid-cols-1 md:grid-cols-3';
  } else if (layout === '4-equal') {
    colCount = 4;
    gridColsClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
  }

  return (
    <div className={`w-full py-4 ${styleClass}`}>
      <div className={`${gridColsClass} ${gap} ${alignItems}`}>
        {layout === '2-left-wide' ? (
          <>
            <div className={`md:col-span-8 ${cardStyle}`}>
              <DropZone zone="col-1" />
            </div>
            <div className={`md:col-span-4 ${cardStyle}`}>
              <DropZone zone="col-2" />
            </div>
          </>
        ) : layout === '2-right-wide' ? (
          <>
            <div className={`md:col-span-4 ${cardStyle}`}>
              <DropZone zone="col-1" />
            </div>
            <div className={`md:col-span-8 ${cardStyle}`}>
              <DropZone zone="col-2" />
            </div>
          </>
        ) : (
          Array.from({ length: colCount }).map((_, idx) => (
            <div key={idx} className={`w-full ${cardStyle}`}>
              <DropZone zone={`col-${idx + 1}`} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const GridLayoutBlockRender: React.FC<Props['GridLayoutBlock']> = (props) => {
  const styleClass = getAdvancedStyleClasses(props);

  const gridCols = {
    'grid-2': 'grid-cols-1 sm:grid-cols-2',
    'grid-3': 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    'grid-4': 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
    'grid-auto': 'grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'
  }[props.gridCols || 'grid-3'];

  const borderClass = {
    none: '',
    'subtle-border': 'p-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50',
    'card-box': 'p-6 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'
  }[props.borderStyle || 'none'];

  return (
    <div className={`w-full py-4 ${styleClass}`}>
      <div className={`grid ${gridCols} ${props.gap || 'gap-6'} ${borderClass} ${props.padding || 'p-0'}`}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="w-full">
            <DropZone zone={`grid-item-${num}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
  PageBannerBlock: PageBannerProps;
  ModernSvgBannerBlock: ModernSvgBannerProps;
  HeroSliderBlock: HeroSliderProps;
  Hero10Block: Omit<Hero10Props, 'images' | 'imageAlts'> & {
    images?: { url: string }[];
    imageAlts?: { alt: string }[];
  } & AdvancedStyleProps;
  LogoCloudBlock: LogoCloudProps & AdvancedStyleProps;
  AboutAppsBlock: AboutAppsProps & {
    imageStyle?: string;
    layoutDirection?: 'row' | 'row-reverse';
  } & AdvancedStyleProps;
  GalleryGridBlock: {
    heading?: string;
    images?: { url: string; caption?: string }[];
    aspectRatio?: string;
  } & AdvancedStyleProps;
  ModernBookCoverGridBlock: {
    heading: string;
    subheading: string;
    books?: {
      size: 'sm' | 'md' | 'lg';
      color: 'slate' | 'neutral' | 'stone' | 'red' | 'amber' | 'emerald' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'fuchsia' | 'rose';
      title: string;
      description: string;
      coverImageUrl?: string;
    }[];
  } & AdvancedStyleProps;
  HeroBlock: {
    badgeText: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    ctaPrimaryText: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText: string;
    ctaSecondaryLink?: string;
    imageUrl: string;
    bgGradient: string;
    overlayOpacity?: string;
    minHeight?: string;
  } & AdvancedStyleProps;

  ProfileVisionBlock: {
    badgeText: string;
    heading: string;
    description: string;
  } & AdvancedStyleProps;

  ProfileHeaderBlock: {
    badge: string;
    heading: string;
    description: string;
    style: 'simple' | 'gradient' | 'split' | 'centered-bold';
    accentColor: 'red' | 'blue' | 'green' | 'orange' | 'purple';
    showDivider: string;
  } & AdvancedStyleProps;

  AccreditationBlock: {
    heading: string;
    style: 'cards' | 'timeline' | 'compact-list' | 'badge-grid';
    accentColor: 'green' | 'blue' | 'red' | 'amber';
    items?: {
      title: string;
      body: string;
      issuer: string;
      status: string;
      year: string;
      color: 'green' | 'blue' | 'red' | 'amber' | 'purple';
    }[];
  } & AdvancedStyleProps;

  VisionMissionBlock: {
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    style: 'side-by-side' | 'stacked' | 'dark-card' | 'timeline-list';
    accentColor: 'red' | 'blue' | 'green' | 'indigo';
    missions?: { text: string }[];
  } & AdvancedStyleProps;

  FocusAreasBlock: {
    heading: string;
    subheading: string;
    style: 'icon-cards' | 'horizontal-list' | 'numbered-grid' | 'pill-tags';
    columns: '2' | '3' | '4';
    accentColor: 'red' | 'blue' | 'green' | 'purple';
    areas?: {
      icon: string;
      title: string;
      description: string;
      color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'amber';
      ctaLabel: string;
    }[];
  } & AdvancedStyleProps;

  AlertBannerBlock: {
    message: string;
    type: 'info' | 'warning' | 'success' | 'urgent';
    linkText: string;
  } & AdvancedStyleProps;

  StatsGridBlock: {
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat4Number: string;
    stat4Label: string;
  } & AdvancedStyleProps;

  FeaturesGridBlock: {
    heading: string;
    subheading: string;
    layout?: '2' | '3' | '4';
    cardStyle?: 'soft' | 'bordered' | 'elevated' | 'gradient';
    items?: { icon: string; title: string; desc: string; color?: string }[];
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  } & AdvancedStyleProps;

  LecturerHighlightBlock: {
    name: string;
    title: string;
    expertise: string;
    bio: string;
    scholarLink: string;
  } & AdvancedStyleProps;

  LabCardBlock: {
    labName: string;
    description: string;
    headOfLab: string;
    capacity: string;
    equipmentTags: string;
  } & AdvancedStyleProps;

  RichTextBlock: {
    heading: string;
    content: string;
  } & AdvancedStyleProps;

  CtaBoxBlock: {
    title: string;
    description: string;
    buttonLabel: string;
    badge: string;
  } & AdvancedStyleProps;

  EventScheduleBlock: {
    eventTitle: string;
    date: string;
    time: string;
    location: string;
    speaker: string;
    category: string;
  } & AdvancedStyleProps;

  TestimonialBlock: {
    quote: string;
    authorName: string;
    batch: string;
    currentPosition: string;
  } & AdvancedStyleProps;

  AccordionFaqBlock: {
    heading: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
  } & AdvancedStyleProps;

  ImageGalleryBlock: {
    heading: string;
    layoutCols?: '2' | '3' | '4';
    galleryStyle?: 'grid' | 'masonry' | 'highlighted';
    img1: string;
    img1Caption: string;
    img2: string;
    img2Caption: string;
    img3: string;
    img3Caption: string;
    img4?: string;
    img4Caption?: string;
    img5?: string;
    img5Caption?: string;
    img6?: string;
    img6Caption?: string;
  } & AdvancedStyleProps;

  VideoEmbedBlock: {
    title: string;
    videoUrl: string;
    caption: string;
  } & AdvancedStyleProps;

  SubMenuGridBlock: {
    heading: string;
    subheading: string;
    item1Title: string;
    item1Desc: string;
    item1Link: string;
    item2Title: string;
    item2Desc: string;
    item2Link: string;
    item3Title: string;
    item3Desc: string;
    item3Link: string;
    item4Title: string;
    item4Desc: string;
    item4Link: string;
  } & AdvancedStyleProps;

  AcademicProgramBlock: {
    programTitle: string;
    degree: string;
    accreditation: string;
    totalSks: string;
    headOfProdi: string;
    vision: string;
    careerProspects: string;
    ctaText: string;
  } & AdvancedStyleProps;

  FacultyOrgChartBlock: {
    heading: string;
    subheading: string;
    leader1Name: string;
    leader1Title: string;
    leader1Role: string;
    leader2Name: string;
    leader2Title: string;
    leader2Role: string;
    leader3Name: string;
    leader3Title: string;
    leader3Role: string;
  } & AdvancedStyleProps;

  ContactMapBlock: {
    heading: string;
    subheading?: string;
    address: string;
    addressSub?: string;
    email: string;
    phone: string;
    operatingHours?: string;
    operatingHoursWeekday?: string;
    operatingHoursSaturday?: string;
    mapUrl?: string;
    mapEmbedUrl?: string;
    directMapUrl?: string;
    gpsCoords?: string;
  } & AdvancedStyleProps;

  CurriculumTableBlock: {
    heading: string;
    prodiName: string;
    semester1List: string;
    semester2List: string;
    totalSksTarget: string;
  } & AdvancedStyleProps;

  NewsListBlock: {
    heading: string;
    subheading: string;
    news1Title: string;
    news1Category: string;
    news1Date: string;
    news2Title: string;
    news2Category: string;
    news2Date: string;
    news3Title: string;
    news3Category: string;
    news3Date: string;
  } & AdvancedStyleProps;

  LecturerGridBlock: {
    heading: string;
    subheading: string;
    dosen1Name: string;
    dosen1Title: string;
    dosen1Expertise: string;
    dosen2Name: string;
    dosen2Title: string;
    dosen2Expertise: string;
    dosen3Name: string;
    dosen3Title: string;
    dosen3Expertise: string;
  } & AdvancedStyleProps;

  DbNewsBlock: {
    heading: string;
    subheading: string;
    limit: string;
    categoryFilter: string;
    showAuthor?: string;
    enablePagination?: string;
    itemsPerPage?: string;
  } & AdvancedStyleProps;

  DbNewsDetailBlock: {} & AdvancedStyleProps;

  DbTestimonialCarouselBlock: {
    heading: string;
    subheading: string;
    autoPlay?: string;
    autoPlayIntervalMs?: string;
  } & AdvancedStyleProps;

  DbStudyProgramBlock: {
    heading: string;
    subheading: string;
    enablePagination?: string;
    itemsPerPage?: string;
  } & AdvancedStyleProps;

  DbCurriculumBlock: {
    heading: string;
    subheading: string;
    prodiFilter: string;
    showProdiTabs?: string;
    enablePagination?: string;
    itemsPerPage?: string;
  } & AdvancedStyleProps;

  DbLecturerBlock: {
    heading: string;
    subheading: string;
    limit: string;
    cardStyle?: string;
    enablePagination?: string;
    itemsPerPage?: string;
  } & AdvancedStyleProps;

  DbAcademicCalendarBlock: {
    heading: string;
    subheading: string;
    enablePagination?: string;
    itemsPerPage?: string;
  } & AdvancedStyleProps;

  DeanWelcomeBlock: {
    badgeText: string;
    heading: string;
    highlightHeading: string;
    paragraph1: string;
    paragraph2: string;
    deanName: string;
    deanTitle: string;
    deanPhoto: string;
    buttonText: string;
    buttonLink: string;
    signatureText: string;
    signatureLabel: string;
    themeStyle: 'dark' | 'maroon' | 'indigo' | 'light';
    showSignature: string;
    showDecorativeBlobs: string;
  } & AdvancedStyleProps;

  // ===== 6 N8N-INSPIRED BLOCKS =====
  DarkHeroBlock: {
    theme: 'light' | 'dark';
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    accentColor: 'orange' | 'blue' | 'green' | 'purple' | 'red';
    showNodes: string;
  };

  IntegrationMarqueeBlock: {
    theme: 'light' | 'dark';
    heading: string;
    subheading: string;
    speed: 'slow' | 'medium' | 'fast';
    integrations?: { name: string; icon: string }[];
  };

  FeatureTabsBlock: {
    theme: 'light' | 'dark';
    layout: 'left-tabs' | 'top-tabs';
    heading: string;
    subheading: string;
    tabs?: { icon: string; title: string; description: string; badge: string }[];
  };

  GradientTileGridBlock: {
    theme: 'light' | 'dark';
    heading: string;
    subheading: string;
    columns: '2' | '3';
    tiles?: { icon: string; title: string; description: string; color: 'orange' | 'purple' | 'blue' | 'green' | 'red' | 'default' }[];
  };

  MetricsCounterBlock: {
    theme: 'light' | 'dark';
    heading: string;
    subheading: string;
    animateOnScroll: string;
    metrics?: { value: number; prefix: string; suffix: string; label: string; description: string }[];
  };

  DarkCtaBlock: {
    theme: 'light' | 'dark';
    title: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    accentColor: 'red-orange' | 'blue-purple' | 'green-teal';
    size: 'default' | 'compact';
  };

  TrendingNewsBlock: TrendingNewsProps;
  NewsCarouselBlock: NewsCarouselProps;
  HeroSlideshowBlock: HeroSlideshowProps;

  SectionLayoutBlock: {
    bgStyle?: string;
    width?: string;
    paddingY?: string;
    heading?: string;
    subheading?: string;
    alignment?: string;
    borderTop?: string;
  } & AdvancedStyleProps;

  ColumnsLayoutBlock: {
    layout?: string;
    gap?: string;
    alignItems?: string;
    padding?: string;
    bgCard?: string;
  } & AdvancedStyleProps;

  GridLayoutBlock: {
    gridCols?: string;
    gap?: string;
    borderStyle?: string;
    padding?: string;
  } & AdvancedStyleProps;
};

export const puckConfig: Config<Props> = {
  root: {
    render: ({ children }) => <div className="w-full overflow-x-hidden">{children}</div>,
  },
  categories: {
    layout: {
      title: '📐 Layout & Struktur (Section, Kolom, Grid)',
      components: ['SectionLayoutBlock', 'ColumnsLayoutBlock', 'GridLayoutBlock'],
    },
    databaseLive: {
      title: '🗄️ Database Live Blocks',
      components: ['TrendingNewsBlock', 'NewsCarouselBlock', 'DbNewsBlock', 'DbNewsDetailBlock', 'DbTestimonialCarouselBlock', 'DbStudyProgramBlock', 'DbCurriculumBlock', 'DbLecturerBlock', 'DbAcademicCalendarBlock'],
    },
    hero: {
      title: '🚀 Hero & Banner Utama',
      components: ['ModernSvgBannerBlock', 'HeroSlideshowBlock', 'PageBannerBlock', 'HeroSliderBlock', 'Hero10Block', 'LogoCloudBlock', 'AboutAppsBlock', 'GalleryGridBlock', 'HeroBlock', 'DeanWelcomeBlock', 'AlertBannerBlock', 'SubMenuGridBlock'],
    },
    content: {
      title: '📝 Konten & Teks',
      components: ['RichTextBlock', 'AccordionFaqBlock', 'TestimonialBlock', 'ProfileVisionBlock', 'ProfileHeaderBlock', 'AccreditationBlock', 'VisionMissionBlock', 'FocusAreasBlock', 'CtaBoxBlock', 'ModernBookCoverGridBlock'],
    },
    dataAndMedia: {
      title: '📊 Statistik & Media',
      components: ['StatsGridBlock', 'FeaturesGridBlock', 'ImageGalleryBlock', 'VideoEmbedBlock'],
    },
    academic: {
      title: '🎓 Akademik & Struktur',
      components: ['TrendingNewsBlock', 'NewsCarouselBlock', 'AcademicProgramBlock', 'CurriculumTableBlock', 'FacultyOrgChartBlock', 'LecturerGridBlock', 'LecturerHighlightBlock', 'LabCardBlock', 'NewsListBlock'],
    },
    agendaAndContact: {
      title: '📅 Agenda & Kontak',
      components: ['EventScheduleBlock', 'ContactMapBlock'],
    },
    n8nBlocks: {
      title: '⚡ n8n-Style Blocks',
      components: ['DarkHeroBlock', 'IntegrationMarqueeBlock', 'FeatureTabsBlock', 'GradientTileGridBlock', 'MetricsCounterBlock', 'DarkCtaBlock'],
    },
  },
  components: {
    // ─── 📐 SECTION LAYOUT BLOCK ──────────────────────────────────────────
    SectionLayoutBlock: {
      fields: {
        ...advancedStyleFields,
        bgStyle: {
          type: 'select', label: '🎨 Latar Belakang Section',
          options: [
            { label: 'White (Putih Clean)', value: 'white' },
            { label: 'Slate Terang (Light Slate)', value: 'slate' },
            { label: 'Dark Mode (Hitam / Gelap)', value: 'dark' },
            { label: 'Maroon UPA Premium', value: 'maroon' },
            { label: 'Gradasi Merah Elegant', value: 'gradient-red' },
            { label: 'Gradasi Dark Minimalis', value: 'gradient-dark' },
            { label: 'Glassmorphism Kaca Transparan', value: 'glass' },
          ],
        },
        width: {
          type: 'select', label: '📐 Lebar Kontainer (Container Width)',
          options: [
            { label: 'Standar Boxed (Max 7XL)', value: 'boxed' },
            { label: 'Rapat Compact (Max 5XL)', value: 'compact' },
            { label: 'Full Width (Layar Penuh)', value: 'full' },
          ],
        },
        heading: { type: 'text', label: '🏷️ Judul Section (Opsional)' },
        subheading: { type: 'textarea', label: '📝 Subjudul / Deskripsi Section (Opsional)' },
        alignment: {
          type: 'select', label: '🎯 Posisi Teks Judul',
          options: [
            { label: 'Rata Kiri (Left)', value: 'left' },
            { label: 'Rata Tengah (Center)', value: 'center' },
            { label: 'Rata Kanan (Right)', value: 'right' },
          ],
        },
        borderTop: {
          type: 'select', label: '🎨 Garis Aksen Atas (Border Top Accent)',
          options: [
            { label: 'Tanpa Garis Aksen', value: 'none' },
            { label: 'Garis Aksen Maroon UPA', value: 'maroon' },
            { label: 'Garis Aksen Amber Emas', value: 'amber' },
            { label: 'Garis Aksen Emerald Hijau', value: 'emerald' },
          ],
        },
      },
      defaultProps: {
        bgStyle: 'slate',
        width: 'boxed',
        paddingY: 'md',
        heading: 'Seksi Konten Baru',
        subheading: 'Tambahkan komponen atau kolom di dalam seksi ini',
        alignment: 'left',
        borderTop: 'none',
      },
      render: (props) => <SectionLayoutBlockRender {...props} />,
    },

    // ─── 🏛️ COLUMNS LAYOUT BLOCK ──────────────────────────────────────────
    ColumnsLayoutBlock: {
      fields: {
        layout: {
          type: 'select', label: '🏛️ Susunan & Jumlah Kolom',
          options: [
            { label: '2 Kolom Seimbang (50% | 50%)', value: '2-equal' },
            { label: '2 Kolom Kiri Lebar (70% | 30%)', value: '2-left-wide' },
            { label: '2 Kolom Kanan Lebar (30% | 70%)', value: '2-right-wide' },
            { label: '3 Kolom Seimbang (33% | 33% | 33%)', value: '3-equal' },
            { label: '4 Kolom Seimbang (25% | 25% | 25% | 25%)', value: '4-equal' },
          ],
        },
        gap: {
          type: 'select', label: '↔️ Jarak Antar Kolom (Gap)',
          options: [
            { label: 'Rapat (Rapat / Small - gap-3)', value: 'gap-3' },
            { label: 'Sedang (Standar / Medium - gap-6)', value: 'gap-6' },
            { label: 'Longgar (Lebar / Large - gap-10)', value: 'gap-10' },
          ],
        },
        alignItems: {
          type: 'select', label: '↕️ Align Vertikal Konten',
          options: [
            { label: 'Atas (Start)', value: 'start' },
            { label: 'Tengah (Center)', value: 'center' },
            { label: 'Bawah (End)', value: 'end' },
            { label: 'Sama Tinggi (Stretch)', value: 'stretch' },
          ],
        },
        bgCard: {
          type: 'select', label: '🎴 Gaya Latar Kartu Kolom',
          options: [
            { label: 'Transparan (Tanpa Kartu)', value: 'transparent' },
            { label: 'Kartu Putih (White Card)', value: 'white-card' },
            { label: 'Kartu Dark (Dark Card)', value: 'dark-card' },
            { label: 'Kartu Glassmorphism (Frosted Glass)', value: 'glass-card' },
          ],
        },
        ...advancedStyleFields,
      },
      defaultProps: {
        layout: '2-equal',
        gap: 'gap-6',
        alignItems: 'start',
        bgCard: 'transparent',
      },
      render: (props) => <ColumnsLayoutBlockRender {...props} />,
    },

    // ─── 🔳 GRID LAYOUT BLOCK ──────────────────────────────────────────
    GridLayoutBlock: {
      fields: {
        gridCols: {
          type: 'select', label: '🔳 Jumlah Kolom Grid Responsif',
          options: [
            { label: '2 Kolom (Grid 2)', value: 'grid-2' },
            { label: '3 Kolom (Grid 3)', value: 'grid-3' },
            { label: '4 Kolom (Grid 4)', value: 'grid-4' },
            { label: 'Auto Fit (Otomatis Menyesuaikan Layar)', value: 'grid-auto' },
          ],
        },
        gap: {
          type: 'select', label: '↔️ Jarak Antar Sel Grid (Gap)',
          options: [
            { label: 'Rapat (gap-3)', value: 'gap-3' },
            { label: 'Sedang (gap-6)', value: 'gap-6' },
            { label: 'Longgar (gap-8)', value: 'gap-8' },
          ],
        },
        borderStyle: {
          type: 'select', label: '🖼️ Bingkai Container Grid',
          options: [
            { label: 'Tanpa Bingkai', value: 'none' },
            { label: 'Garis Tipis Elegant (Subtle Border)', value: 'subtle-border' },
            { label: 'Kotak Dashed Card (Card Box)', value: 'card-box' },
          ],
        },
        padding: {
          type: 'select', label: '📦 Padding Container Grid',
          options: [
            { label: 'Tanpa Padding (p-0)', value: 'p-0' },
            { label: 'Sedang (p-4)', value: 'p-4' },
            { label: 'Besar (p-8)', value: 'p-8' },
          ],
        },
        ...advancedStyleFields,
      },
      defaultProps: {
        gridCols: 'grid-3',
        gap: 'gap-6',
        borderStyle: 'none',
        padding: 'p-0',
      },
      render: (props) => <GridLayoutBlockRender {...props} />,
    },
    // ─── 🌄 HERO SLIDESHOW BLOCK ──────────────────────────────────────────
    HeroSlideshowBlock: {
      fields: {
        autoPlay: {
          type: 'select', label: '▶ Otomatis Putar (Auto Slideshow)?',
          options: [
            { label: 'Ya (Slideshow Berjalan Otomatis)', value: true as any },
            { label: 'Tidak (Manual Navigasi)', value: false as any },
          ],
        },
        autoPlayIntervalMs: {
          type: 'select', label: '⏱️ Durasi Tiap Slide (Detik)',
          options: [
            { label: '3 Detik', value: '3000' },
            { label: '5 Detik (Standar)', value: '5000' },
            { label: '7 Detik', value: '7000' },
            { label: '10 Detik', value: '10000' },
          ],
        },
        heightPreset: {
          type: 'select', label: '📐 Tinggi Banner Hero Slideshow',
          options: [
            { label: 'Layar Penuh (100vh Fullscreen)', value: 'screen' },
            { label: 'Tinggi Standar (75vh / 640px)', value: 'large' },
            { label: 'Sedang (55vh / 520px)', value: 'medium' },
          ],
        },
        slides: {
          type: 'array',
          label: '🌄 Daftar Slide Hero (Gambar & Konten)',
          getItemSummary: (item) => item.titleHighlight || item.badgeText || 'Slide Hero',
          arrayFields: {
            imageUrl: makeImageField('🖼️ Gambar Latar Hero Slide') as any,
            badgeText: { type: 'text', label: '✨ Teks Badge / Pill Highlight' },
            titlePrefix: { type: 'text', label: '📌 Judul Awalan (Baris 1)' },
            titleHighlight: { type: 'text', label: '🌟 Judul Utama Highlight (Gradasi Kuning)' },
            titleSuffix: { type: 'text', label: '📌 Judul Akhiran (Baris 3)' },
            description: { type: 'textarea', label: '📝 Deskripsi / Sub-judul Hero' },
            ctaPrimaryText: { type: 'text', label: '🔘 Teks Tombol Utama' },
            ctaPrimaryLink: { type: 'text', label: '🔗 Link Tombol Utama' },
            ctaSecondaryText: { type: 'text', label: '🔘 Teks Tombol Sekunder' },
            ctaSecondaryLink: { type: 'text', label: '🔗 Link Tombol Sekunder' },
            gradientOverlay: {
              type: 'select', label: '🎨 Gradasi Overlay Warna Latar',
              options: [
                { label: '🔴 Merah UPA & Maroon Elegant', value: 'maroon' },
                { label: '🔵 Royal Blue & Indigo Digital', value: 'royal-blue' },
                { label: '🟢 Emerald Green & Teal', value: 'emerald' },
                { label: '⚫ Dark Slate Cyber Modern', value: 'slate-dark' },
                { label: '🟡 Sunset Gold & Amber Dark', value: 'sunset-gold' },
              ],
            },
          },
        },
        ...advancedStyleFields,
      },
      defaultProps: {
        autoPlay: true as any,
        autoPlayIntervalMs: '5000',
        heightPreset: 'large',
        slides: [
          {
            imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=2000&q=85',
            badgeText: '✨ PMB GELOMBANG 2 DISKON 50% BEASISWA',
            titlePrefix: 'Mewujudkan Generasi',
            titleHighlight: 'Unggul & Inovatif',
            titleSuffix: 'di Bidang Teknologi',
            description: 'Fakultas Teknik & Informatika Patria Artha menghadirkan kurikulum berbasis kecerdasan buatan, cloud computing, dan sertifikasi industri internasional.',
            ctaPrimaryText: 'Daftar PMB Sekarang',
            ctaPrimaryLink: '#pmb',
            ctaSecondaryText: 'Jelajahi Program Studi',
            ctaSecondaryLink: '#prodi',
            gradientOverlay: 'maroon'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=2000&q=85',
            badgeText: '🚀 LABORATORIUM CANGGIH & RISET AI',
            titlePrefix: 'Fasilitas Belajar Kelas',
            titleHighlight: 'Dunia & Praktikum',
            titleSuffix: 'Berbasis Proyek Real',
            description: 'Dilengkapi dengan server komputasi tinggi, laboratorium robotika, cyber security, dan studio desain digital standar industri modern.',
            ctaPrimaryText: 'Lihat Laboratorium',
            ctaPrimaryLink: '#lab',
            ctaSecondaryText: 'Kurikulum Merdeka',
            ctaSecondaryLink: '#kurikulum',
            gradientOverlay: 'royal-blue'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
            badgeText: '🎓 98% LULUSAN LANGSUNG BEKERJA',
            titlePrefix: 'Kemitraan Karir dengan',
            titleHighlight: '100+ Perusahaan',
            titleSuffix: 'Teknologi Ternama',
            description: 'Program magang bersertifikat dan penyaluran kerja langsung sebelum wisuda untuk mencetak profesional siap pakai di era digital.',
            ctaPrimaryText: 'Info Karir & Alumni',
            ctaPrimaryLink: '#alumni',
            ctaSecondaryText: 'Kontak Pendaftaran',
            ctaSecondaryLink: '#kontak',
            gradientOverlay: 'emerald'
          }
        ],
      },
      render: (props) => <HeroSlideshowBlock {...props} />,
    },

    // ─── 📰 TRENDING NEWS MAGAZINE BLOCK ─────────────────────────────────
    TrendingNewsBlock: {
      fields: {
        sectionTitle: { type: 'text', label: '📌 Judul Seksi (mis: Trending Today / Berita Terkini)' },
        categoryTabs: { type: 'text', label: '🏷️ Kategori Tab Dipisah Koma (mis: SEMUA, PENDIDIKAN, KEMAHASISWAAN, PRESTASI)' },
        useLiveData: {
          type: 'select', label: '📡 Sumber Data Live Database?',
          options: [
            { label: 'Ya (Ambil Otomatis dari Database Berita Realtime)', value: true as any },
            { label: 'Tidak (Gunakan Konten Kustom Manual)', value: false as any },
          ],
        },
        featuredTitle: { type: 'text', label: '📌 Judul Berita Utama (Kiri)' },
        featuredCategory: { type: 'text', label: '🏷️ Kategori Berita Utama' },
        featuredAuthor: { type: 'text', label: '👤 Penulis Berita Utama' },
        featuredDate: { type: 'text', label: '📅 Tanggal Berita Utama' },
        featuredSummary: { type: 'textarea', label: '📝 Ringkasan Berita Utama' },
        featuredImageUrl: makeImageField('🖼️ Gambar Thumbnail Berita Utama') as any,
        sideArticles: {
          type: 'array',
          label: '📰 Daftar 4 Berita Samping (Kanan)',
          getItemSummary: (item) => item.title || 'Artikel Berita',
          arrayFields: {
            title: { type: 'text', label: '📌 Judul Artikel' },
            category: { type: 'text', label: '🏷️ Kategori' },
            date: { type: 'text', label: '📅 Tanggal' },
            imageUrl: makeImageField('🖼️ Gambar Thumbnail') as any,
          },
        },
        ...advancedStyleFields,
      },
      defaultProps: {
        sectionTitle: 'Trending Today',
        categoryTabs: 'SEMUA, PENDIDIKAN, KEMAHASISWAAN, PRESTASI, KERJASAMA',
        useLiveData: true as any,
        featuredTitle: 'Fakultas Teknik & Informatika UPA Luncurkan Pusat Riset Kecerdasan Buatan Terpadu',
        featuredCategory: 'Berita Utama',
        featuredAuthor: 'Redaksi FTI UPA',
        featuredDate: '14 Agustus 2026',
        featuredSummary: 'Fakultas Teknik & Informatika Patria Artha secara resmi meluncurkan fasilitas laboratorium AI dan pusat riset sains data tingkat lanjut untuk mendukung inovasi mahasiswa.',
        featuredImageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
        sideArticles: [
          {
            title: 'Mahasiswa Teknik Informatika Raih Juara 1 Hackathon Nasional 2026',
            category: 'Prestasi',
            date: '12 Agustus 2026',
            imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80'
          },
          {
            title: 'Kerjasama Strategis FTI Patria Artha dengan Perusahaan Teknologi Internasional',
            category: 'Kerjasama',
            date: '10 Agustus 2026',
            imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=400&q=80'
          },
          {
            title: 'Pelatihan Sertifikasi Cloud Architecture & Cyber Security Bagi Dosen FTI',
            category: 'Pendidikan',
            date: '08 Agustus 2026',
            imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=400&q=80'
          },
          {
            title: 'Penerimaan Mahasiswa Baru Gelombang 2 Resmi Dibuka Untuk Semua Prodi',
            category: 'Pendaftaran',
            date: '05 Agustus 2026',
            imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80'
          }
        ],
        paddingY: 'md',
        bgStyle: 'white',
      },
      render: (props) => <TrendingNewsBlock {...props} />,
    },

    // ─── 🎠 NEWS CAROUSEL BLOCK ──────────────────────────────────────────
    NewsCarouselBlock: {
      fields: {
        sectionTitle: { type: 'text', label: '📌 Judul Seksi Carousel' },
        sectionSubtitle: { type: 'textarea', label: '📝 Sub-judul / Keterangan Tambahan' },
        useLiveData: {
          type: 'select', label: '📡 Sumber Data Live Database?',
          options: [
            { label: 'Ya (Ambil Otomatis dari Database Berita Realtime)', value: true as any },
            { label: 'Tidak (Gunakan Konten Kustom Manual)', value: false as any },
          ],
        },
        autoPlay: {
          type: 'select', label: '▶ Otomatis Putar (Auto Slideshow)?',
          options: [
            { label: 'Ya (Slideshow Otomatis Berjalan)', value: true as any },
            { label: 'Tidak (Manual Klik)', value: false as any },
          ],
        },
        cardsToShow: {
          type: 'select', label: '🖼️ Jumlah Kartu Berita yang Tampil per Slide',
          options: [
            { label: '2 Kartu / Slide', value: '2' },
            { label: '3 Kartu / Slide (Standar)', value: '3' },
            { label: '4 Kartu / Slide', value: '4' },
          ],
        },
        items: {
          type: 'array',
          label: '📰 Daftar Kartu Berita (Jika Manual)',
          getItemSummary: (item) => item.title || 'Kartu Berita',
          arrayFields: {
            title: { type: 'text', label: '📌 Judul Berita' },
            category: { type: 'text', label: '🏷️ Kategori' },
            date: { type: 'text', label: '📅 Tanggal' },
            author: { type: 'text', label: '👤 Penulis' },
            summary: { type: 'textarea', label: '📝 Ringkasan' },
            imageUrl: makeImageField('🖼️ Gambar Thumbnail') as any,
          },
        },
        ...advancedStyleFields,
      },
      defaultProps: {
        sectionTitle: 'Kilas Berita & Carousel Informasi',
        sectionSubtitle: 'Informasi dan agenda kegiatan terbaru seputar akademik & kemahasiswaan Fakultas Teknik UPA.',
        useLiveData: true as any,
        autoPlay: true as any,
        cardsToShow: '3',
        paddingY: 'lg',
        bgStyle: 'slate',
      },
      render: (props) => <NewsCarouselBlock {...props} />,
    },

    // ─── 🚩 PAGE BANNER BLOCK ─────────────────────────────────────────────
    PageBannerBlock: {
      fields: {
        badge: { type: 'text', label: '🏷️ Teks Badge / Pill Tag (mis: Berita Kampus)' },
        badgeColor: {
          type: 'select', label: '🎨 Warna Latar Pill Badge',
          options: [
            { label: 'Biru (Blue Accent)', value: 'blue' },
            { label: 'Maroon / Merah UPA', value: 'maroon' },
            { label: 'Amber / Kuning', value: 'amber' },
            { label: 'Emerald / Hijau', value: 'emerald' },
            { label: 'Ungu / Purple', value: 'purple' },
          ],
        },
        title: { type: 'text', label: '📌 Judul Utama H1 Banner' },
        subtitle: { type: 'textarea', label: '📝 Sub-judul / Deskripsi Banner' },
        breadcrumb: { type: 'text', label: '🗺️ Breadcrumb (mis: Beranda / Berita / Aksara 2026)' },
        date: { type: 'text', label: '📅 Tanggal Publikasi (mis: 16 Juli 2026)' },
        author: { type: 'text', label: '👤 Penulis / Redaksi (mis: Humas UPA)' },
        views: { type: 'text', label: '👁️ Jumlah Pembaca (mis: 1.245 Dibaca)' },
        bgType: {
          type: 'select', label: '🎭 Mode Latar Belakang (Background)',
          options: [
            { label: '🖼️ Gambar Latar (Background Image)', value: 'image' },
            { label: '🌌 Gradasi Warna (Gradient Color)', value: 'gradient' },
            { label: '🎬 Video YouTube Background (Loop & Auto-play Mute)', value: 'youtube' },
          ],
        },
        bgImageUrl: makeImageField('🖼️ Latar Gambar Hero Banner') as any,
        youtubeUrl: { type: 'text', label: '🎬 URL Video YouTube (mis: https://www.youtube.com/watch?v=dQw4w9WgXcQ)' },
        customGradient: { type: 'text', label: '🎨 Gradasi Warna Custom (Tailwind Class, mis: bg-gradient-to-br from-[#800020] via-red-950 to-slate-950)' },
        overlayOpacity: {
          type: 'select', label: '⬛ Opasitas Overlay Hitam',
          options: [
            { label: '30% Opasitas (Transparan)', value: '30' },
            { label: '50% Opasitas (Sedang)', value: '50' },
            { label: '70% Opasitas (Standar)', value: '70' },
            { label: '85% Opasitas (Gelap)', value: '85' },
            { label: '95% Opasitas (Sangat Gelap)', value: '95' },
          ],
        },
        gradientType: {
          type: 'select', label: '🌌 Jenis Efek Gradasi Hitam',
          options: [
            { label: 'Gradasi Hitam Bawah (Fade to Dark)', value: 'dark-bottom' },
            { label: 'Gradasi Hitam Atas', value: 'dark-top' },
            { label: 'Gradasi Hitam Kiri-Kanan (Horizontal Fade)', value: 'dark-full' },
            { label: 'Gradasi Hitam Kiri (Focus Text)', value: 'dark-left' },
            { label: 'Gradasi Hitam Radial Center', value: 'radial-center' },
          ],
        },
        bannerHeight: {
          type: 'select', label: '📏 Tinggi Banner',
          options: [
            { label: 'Ringkas (150px)', value: 'compact' },
            { label: 'Sedang (Medium - 220px)', value: 'medium' },
            { label: 'Tinggi (Tall - 320px)', value: 'tall' },
          ],
        },
        textAlign: {
          type: 'select', label: '📐 Perataan Teks',
          options: [
            { label: 'Rata Kiri (Left)', value: 'left' },
            { label: 'Rata Tengah (Center)', value: 'center' },
            { label: 'Rata Kanan (Right)', value: 'right' },
          ],
        },
        accentColor: {
          type: 'select', label: '🎨 Warna Garis Aksen Tepi',
          options: [
            { label: 'Maroon / Merah FTI', value: 'maroon' },
            { label: 'Amber / Kuning', value: 'amber' },
            { label: 'Emerald / Hijau', value: 'emerald' },
            { label: 'Biru', value: 'blue' },
            { label: 'Ungu', value: 'purple' },
          ],
        },
      },
      defaultProps: {
        badge: 'Berita Kampus',
        badgeColor: 'blue',
        title: 'UKM Seni UPA Gelar Aksara Competition 2026',
        subtitle: 'Wadah kreativitas dan pengembangan minat bakat mahasiswa Universitas Patria Artha.',
        breadcrumb: '',
        date: '16 Juli 2026',
        author: 'Humas UPA',
        views: '1.245 Dibaca',
        bgType: 'image',
        bgImageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80',
        youtubeUrl: '',
        customGradient: 'bg-gradient-to-br from-[#800020] via-red-950 to-slate-950',
        overlayOpacity: '70',
        gradientType: 'dark-bottom',
        bannerHeight: 'compact',
        textAlign: 'left',
        accentColor: 'maroon',
      },
      render: (props) => <PageBanner {...props} />,
    },

    // ─── 📐 MODERN SVG BANNER BLOCK (REFERENSI GEOMETRIC SLASH) ───────────
    ModernSvgBannerBlock: {
      fields: {
        titleTop: { type: 'text', label: '📌 Judul Atas (mis: BANNER / FAKULTAS TEKNIK)' },
        titleBottom: { type: 'text', label: '📌 Judul Bawah (mis: Template / INFORMATIKA)' },
        subtitle: { type: 'textarea', label: '📝 Sub-judul / Deskripsi' },
        badgeText: { type: 'text', label: '🏷️ Teks Badge (opsional)' },
        ctaText: { type: 'text', label: '🔘 Teks Tombol CTA (opsional)' },
        ctaLink: { type: 'text', label: '🔗 Link Tombol CTA' },
        accentColor: {
          type: 'select', label: '🎨 Warna Garis Aksen Geometric',
          options: [
            { label: 'Orange / Kuning Emas (Sesuai Referensi)', value: 'orange' },
            { label: 'Maroon / Merah UPA', value: 'maroon' },
            { label: 'Amber / Yellow', value: 'amber' },
            { label: 'Emerald / Hijau', value: 'emerald' },
            { label: 'Blue / Biru', value: 'blue' },
          ],
        },
        rightTheme: {
          type: 'select', label: '🌌 Tema Warna Sisi Kanan (Gelap)',
          options: [
            { label: 'Dark Navy (Sesuai Referensi)', value: 'dark-navy' },
            { label: 'Maroon Dark (Khas UPA)', value: 'maroon-dark' },
            { label: 'Emerald Dark', value: 'emerald-dark' },
            { label: 'Slate Dark', value: 'slate-dark' },
          ],
        },
        height: {
          type: 'select', label: '📏 Tinggi Banner',
          options: [
            { label: 'Kompak (150px)', value: 'compact' },
            { label: 'Sedang (220px)', value: 'medium' },
            { label: 'Tinggi (300px)', value: 'tall' },
          ],
        },
        breadcrumb: { type: 'text', label: '🗺️ Breadcrumb Navigasi' },
      },
      defaultProps: {
        titleTop: 'BANNER',
        titleBottom: 'Template',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        badgeText: 'FAKULTAS UNGGUL',
        ctaText: '',
        ctaLink: '#',
        accentColor: 'orange',
        rightTheme: 'dark-navy',
        height: 'compact',
        breadcrumb: 'Beranda / Informasi',
      },
      render: (props) => <ModernSvgBanner {...props} />,
    },

    // ─── 🎠 HERO SLIDER BLOCK ─────────────────────────────────────────────
    HeroSliderBlock: {
      fields: {
        bgColor: {
          type: 'select', label: '🎨 Warna Background',
          options: [
            { label: 'Slate 950 (Sangat Gelap)', value: 'bg-slate-950' },
            { label: 'Slate 900 (Gelap)', value: 'bg-slate-900' },
            { label: 'Slate 800', value: 'bg-slate-800' },
            { label: 'Zinc 950', value: 'bg-zinc-950' },
            { label: 'Neutral 950', value: 'bg-neutral-950' },
          ],
        },
        blob1Color: { type: 'text', label: '🔴 Warna Blob Kiri Atas (rgba/hex)' },
        blob2Color: { type: 'text', label: '🟠 Warna Blob Kanan Tengah (rgba/hex)' },
        blob3Color: { type: 'text', label: '🟡 Warna Blob Bawah Tengah (rgba/hex)' },
        autoPlayInterval: { type: 'number', label: '⏱️ Interval Auto-Play (detik, 0=mati)' },
        showSpecTags: {
          type: 'select', label: '🏷️ Tampilkan Tag Peminatan',
          options: [{ label: 'Tampilkan', value: 'true' }, { label: 'Sembunyikan', value: 'false' }],
        },
        showStats: {
          type: 'select', label: '📊 Tampilkan Grid Statistik',
          options: [{ label: 'Tampilkan', value: 'true' }, { label: 'Sembunyikan', value: 'false' }],
        },
        showFloatingCards: {
          type: 'select', label: '💳 Tampilkan Floating Card',
          options: [{ label: 'Tampilkan', value: 'true' }, { label: 'Sembunyikan', value: 'false' }],
        },

        // ── SLIDES ARRAY ────────────────────────────────────────────────────
        slides: {
          type: 'array',
          label: '🎠 Daftar Slide',
          getItemSummary: (item: any, i: number) => item.titlePrefix || `Slide ${(i || 0) + 1}`,
          arrayFields: {
            badge: { type: 'text', label: 'Teks Badge (atas kiri)' },
            badgeIcon: {
              type: 'select', label: 'Icon Badge',
              options: [
                { label: '🚀 Roket', value: 'rocket' },
                { label: '⭐ Bintang', value: 'star' },
                { label: '🏆 Award', value: 'award' },
                { label: '🌐 Globe', value: 'globe' },
                { label: '📚 Buku', value: 'book' },
                { label: '🎓 Wisuda', value: 'graduation' },
                { label: '⚡ Kilat', value: 'zap' },
                { label: '🧠 Otak', value: 'brain' },
                { label: '🛡️ Shield', value: 'shield' },
                { label: '💻 CPU', value: 'cpu' },
              ],
            },
            titlePrefix: { type: 'text', label: 'Judul (bagian awal)' },
            titleHighlight: { type: 'text', label: 'Judul Highlight (gradient merah-amber)' },
            titleSuffix: { type: 'text', label: 'Judul (bagian akhir)' },
            description: { type: 'textarea', label: 'Deskripsi / Sub-judul' },
            cta1Text: { type: 'text', label: '🔴 Tombol 1 - Teks' },
            cta1Link: { type: 'text', label: '🔴 Tombol 1 - Link' },
            cta2Text: { type: 'text', label: '⚫ Tombol 2 - Teks' },
            cta2Link: { type: 'text', label: '⚫ Tombol 2 - Link' },
            cta3Text: { type: 'text', label: '▶️ Tombol 3 (video) - Teks' },
            cta3Link: { type: 'text', label: '▶️ Tombol 3 - Link' },
            imageUrl: makeImageField('🖼️ Gambar Utama Slide') as any,
            imageAlt: { type: 'text', label: 'Alt Text Gambar' },
            overlayGradient: {
              type: 'select', label: '🌈 Overlay Gradient Gambar',
              options: [
                { label: 'Merah-Ungu (default)', value: 'linear-gradient(to top, #9B2C2C, #800020, #581c87)' },
                { label: 'Merah-Amber', value: 'linear-gradient(to top, #9B2C2C, #b45309, #78350f)' },
                { label: 'Biru-Ungu', value: 'linear-gradient(to top, #1e3a8a, #4c1d95, #0f172a)' },
                { label: 'Hijau-Biru', value: 'linear-gradient(to top, #065f46, #0369a1, #0f172a)' },
                { label: 'Hitam (gelap)', value: 'linear-gradient(to top, #000000, #0f172a, transparent)' },
              ],
            },
            imageBadgeTitle: { type: 'text', label: '🏷️ Label Bawah Gambar (Nama Fakultas)' },
            imageBadgeSub: { type: 'text', label: '🏷️ Badge Akreditasi (mis: Akreditasi UNGGUL)' },
            imageBadgeAccent: {
              type: 'select', label: 'Warna Badge Akreditasi',
              options: [
                { label: 'Hijau (Unggul)', value: 'emerald' },
                { label: 'Merah', value: 'red' },
                { label: 'Amber', value: 'amber' },
                { label: 'Biru', value: 'blue' },
              ],
            },
            floatingCard1Title: { type: 'text', label: '💳 Floating Card 1 - Judul' },
            floatingCard1Sub: { type: 'text', label: '💳 Floating Card 1 - Sub-judul' },
            floatingCard1Color: {
              type: 'select', label: '💳 Floating Card 1 - Warna',
              options: [
                { label: 'Rose/Merah', value: 'rose' },
                { label: 'Amber/Kuning', value: 'amber' },
                { label: 'Biru', value: 'blue' },
                { label: 'Hijau', value: 'emerald' },
                { label: 'Ungu', value: 'purple' },
              ],
            },
            floatingCard2Title: { type: 'text', label: '💳 Floating Card 2 - Judul' },
            floatingCard2Sub: { type: 'text', label: '💳 Floating Card 2 - Sub-judul' },
            floatingCard2Color: {
              type: 'select', label: '💳 Floating Card 2 - Warna',
              options: [
                { label: 'Amber/Kuning', value: 'amber' },
                { label: 'Rose/Merah', value: 'rose' },
                { label: 'Biru', value: 'blue' },
                { label: 'Hijau', value: 'emerald' },
                { label: 'Ungu', value: 'purple' },
              ],
            },
          },
        },

        // ── SPEC TAGS ARRAY ──────────────────────────────────────────────────
        specTags: {
          type: 'array',
          label: '🏷️ Tag Peminatan (bawah teks)',
          getItemSummary: (item: any, i: number) => item.label || `Tag ${(i || 0) + 1}`,
          arrayFields: {
            label: { type: 'text', label: 'Nama Peminatan' },
            color: {
              type: 'select', label: 'Warna Icon',
              options: [
                { label: '🔴 Merah (AI)', value: 'red' },
                { label: '🌹 Rose (Software)', value: 'rose' },
                { label: '🟢 Hijau (Cyber)', value: 'emerald' },
                { label: '🟡 Amber (IoT)', value: 'amber' },
                { label: '🔵 Biru', value: 'blue' },
                { label: '🟣 Ungu', value: 'purple' },
              ],
            },
          },
        },

        // ── STATS ARRAY ──────────────────────────────────────────────────────
        stats: {
          type: 'array',
          label: '📊 Statistik (grid bawah)',
          getItemSummary: (item: any, i: number) => item.label || `Statistik ${(i || 0) + 1}`,
          arrayFields: {
            value: { type: 'text', label: 'Angka/Nilai (mis: 1850+)' },
            label: { type: 'text', label: 'Label Utama' },
            sub: { type: 'text', label: 'Keterangan Tambahan' },
            color: {
              type: 'select', label: 'Warna Aksen',
              options: [
                { label: '🔴 Merah', value: 'red' },
                { label: '🌹 Rose', value: 'rose' },
                { label: '🟡 Amber', value: 'amber' },
                { label: '🟢 Emerald', value: 'emerald' },
                { label: '🔵 Biru', value: 'blue' },
                { label: '🟣 Ungu', value: 'purple' },
              ],
            },
          },
        },
      },
      defaultProps: {
        bgColor: 'bg-slate-950',
        blob1Color: 'rgba(155,44,44,0.25)',
        blob2Color: 'rgba(220,38,38,0.20)',
        blob3Color: 'rgba(245,158,11,0.10)',
        autoPlayInterval: 5,
        showSpecTags: 'true' as any,
        showStats: 'true' as any,
        showFloatingCards: 'true' as any,
        slides: [
          {
            badge: 'PMB Gelombang Tiga T.A. 2026/2027',
            badgeIcon: 'rocket',
            titlePrefix: 'Raih Beasiswa',
            titleHighlight: 'Technopreneur Digital',
            titleSuffix: 'Hingga 100%',
            description: 'Bergabunglah bersama keluarga besar FTI Universitas Patria Artha. Nikmati fasilitas potongan UKT, pendampingan inkubator bisnis, dan sertifikasi internasional.',
            cta1Text: 'Daftar PMB Sekarang',
            cta1Link: '#',
            cta2Text: 'Kalkulator Simulasi UKT',
            cta2Link: '#',
            cta3Text: 'Video Profil',
            cta3Link: '#',
            imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'FTI Patria Artha Campus',
            overlayGradient: 'linear-gradient(to top, #9B2C2C, #800020, #581c87)',
            imageBadgeTitle: 'Fakultas Teknik & Informatika',
            imageBadgeSub: 'Akreditasi UNGGUL',
            imageBadgeAccent: 'emerald',
            floatingCard1Title: 'Beasiswa Unggulan',
            floatingCard1Sub: 'Bebas Biaya Masuk',
            floatingCard1Color: 'rose',
            floatingCard2Title: 'Jalur Prestasi',
            floatingCard2Sub: 'Tanpa Tes Tertulis',
            floatingCard2Color: 'amber',
          },
          {
            badge: 'Akreditasi LAM INFOKOM',
            badgeIcon: 'award',
            titlePrefix: 'Kurikulum Berbasis',
            titleHighlight: 'AI & Industri 4.0',
            titleSuffix: 'Siap Kerja',
            description: 'Program studi terakreditasi dengan kurikulum terkini yang mengintegrasikan kecerdasan buatan, cloud computing, dan keamanan siber untuk karir impian Anda.',
            cta1Text: 'Lihat Program Studi',
            cta1Link: '#prodi',
            cta2Text: 'Kurikulum & SKS',
            cta2Link: '#kurikulum',
            cta3Text: 'Tur Kampus Virtual',
            cta3Link: '#tur',
            imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Laboratorium FTI UPA',
            overlayGradient: 'linear-gradient(to top, #1e3a8a, #4c1d95, #0f172a)',
            imageBadgeTitle: 'Laboratorium HPC & AI',
            imageBadgeSub: 'GPU Server A100',
            imageBadgeAccent: 'blue',
            floatingCard1Title: 'Sertifikasi Internasional',
            floatingCard1Sub: 'AWS, Cisco, Microsoft',
            floatingCard1Color: 'blue',
            floatingCard2Title: 'Program Magang MBKM',
            floatingCard2Sub: 'Di perusahaan tech nasional',
            floatingCard2Color: 'emerald',
          },
          {
            badge: 'Lulusan Unggul Berbasis Riset',
            badgeIcon: 'graduation',
            titlePrefix: 'Alumni FTI UPA di',
            titleHighlight: 'Perusahaan Global',
            titleSuffix: '& Startup Unicorn',
            description: 'Bergabunglah dengan ribuan alumni sukses yang berkarir di Google, Gojek, Tokopedia, Bank Indonesia, dan ratusan perusahaan teknologi terkemuka.',
            cta1Text: 'Kisah Sukses Alumni',
            cta1Link: '#alumni',
            cta2Text: 'Lowongan Mitra Industri',
            cta2Link: '#karir',
            cta3Text: 'Profil Alumni',
            cta3Link: '#profil',
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Alumni FTI UPA bekerja',
            overlayGradient: 'linear-gradient(to top, #065f46, #0369a1, #0f172a)',
            imageBadgeTitle: 'Alumni Excellence Awards',
            imageBadgeSub: '97.2% Terserap Kerja',
            imageBadgeAccent: 'emerald',
            floatingCard1Title: 'Rata-rata Gaji Alumni',
            floatingCard1Sub: 'Rp 8.5M - 16M/bulan',
            floatingCard1Color: 'emerald',
            floatingCard2Title: 'Hiring Partners',
            floatingCard2Sub: '24+ Mitra Industri Tech',
            floatingCard2Color: 'amber',
          },
        ],
        specTags: [
          { label: 'AI & Machine Learning', color: 'red' },
          { label: 'Software & Cloud Engineering', color: 'rose' },
          { label: 'Cyber Security & Cryptography', color: 'emerald' },
          { label: 'Internet of Things & Robotics', color: 'amber' },
        ],
        stats: [
          { value: '1850+', label: 'Mahasiswa Aktif', sub: 'Berbagai daerah & internasional', color: 'red' },
          { value: '42', label: 'Dosen Pengajar', sub: '22 Bergelar Doktor (S3)', color: 'rose' },
          { value: '8 Lab', label: 'Laboratorium Terpadu', sub: 'Dilengkapi GPU Server A100', color: 'amber' },
          { value: '97.2%', label: 'Serapan Kerja Alumni', sub: 'Rata-rata Rp 8.5M - 16M/bln', color: 'emerald' },
        ],
      },
      render: (props) => {
        return (
          <HeroSlider
            {...props}
            showSpecTags={(props.showSpecTags as any) !== 'false'}
            showStats={(props.showStats as any) !== 'false'}
            showFloatingCards={(props.showFloatingCards as any) !== 'false'}
          />
        );
      },
    },

    Hero10Block: {
      fields: {
        title: { type: 'text', label: 'Judul Baris 1' },
        titleLine2Prefix: { type: 'text', label: 'Judul Baris 2' },
        titleHighlight: { type: 'text', label: 'Kata Highlight Gradient' },
        description: { type: 'textarea', label: 'Deskripsi / Sub-judul' },
        socialProof: { type: 'text', label: 'Teks Social Proof (di bawah tombol)' },
        images: {
          type: 'array',
          label: '🖼️ Daftar Gambar (3 gambar mosaic)',
          getItemSummary: (item, i) => item.url ? `Gambar ${(i || 0) + 1} ✓` : `Gambar ${(i || 0) + 1} (belum dipilih)`,
          arrayFields: {
            url: makeImageField('URL / Pilih Gambar') as any,
          }
        },
        primaryCTA: {
          type: 'object',
          label: '🟢 Tombol Utama',
          objectFields: {
            ctaEnabled: { type: 'radio', label: 'Aktifkan?', options: [{label: 'Ya', value: true}, {label: 'Tidak', value: false}] },
            text: { type: 'text', label: 'Teks Tombol' },
            href: { type: 'text', label: 'Link URL' },
            variant: { type: 'select', label: 'Gaya', options: [{label: 'Solid (Terisi)', value: 'solid'}, {label: 'Outline (Garis)', value: 'outline'}] }
          }
        },
        secondaryCTA: {
          type: 'object',
          label: '⚪ Tombol Sekunder',
          objectFields: {
            ctaEnabled: { type: 'radio', label: 'Aktifkan?', options: [{label: 'Ya', value: true}, {label: 'Tidak', value: false}] },
            text: { type: 'text', label: 'Teks Tombol' },
            href: { type: 'text', label: 'Link URL' },
            variant: { type: 'select', label: 'Gaya', options: [{label: 'Solid (Terisi)', value: 'solid'}, {label: 'Outline (Garis)', value: 'outline'}] }
          }
        },
        animation: { type: 'select', label: '🎬 Animasi', options: [{ label: 'Tidak Ada', value: 'none' }, { label: 'Halus (Fade-in)', value: 'subtle' }] },
        variant: { type: 'select', label: '📐 Layout', options: [{ label: 'Standard (Full)', value: 'standard' }, { label: 'Compact (Ringkas)', value: 'compact' }] },
      },
      defaultProps: {
        title: 'Mencetak Talenta Digital',
        titleLine2Prefix: 'Berdaya Saing Global',
        titleHighlight: '& Inovatif',
        description: 'Pendidikan vokasi & sarjana berbasis Outcome-Based Education (OBE) yang mengintegrasikan Artificial Intelligence, Cloud Software, Cyber Security, dan Internet of Things.',
        socialProof: 'Bergabunglah dengan ratusan mahasiswa lainnya',
        images: [{ url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' }, { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' }, { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' }],
        animation: 'subtle',
        variant: 'standard',
        primaryCTA: { ctaEnabled: true, text: 'Daftar Sekarang', href: '#', variant: 'solid' },
        secondaryCTA: { ctaEnabled: true, text: 'Pelajari Lebih Lanjut', href: '#', variant: 'outline' }
      },
      render: (props) => {
        const imageList = (props.images || []).map((img: any) => img.url);
        const imageAltsList = (props.imageAlts || []).map((img: any) => img.alt);
        return <Hero10 {...props} images={imageList} imageAlts={imageAltsList} />;
      }
    },
    LogoCloudBlock: {
      fields: {
        title: { type: 'text', label: 'Judul Section' },
        logos: {
          type: 'array',
          label: '🏷️ Daftar Logo Mitra',
          getItemSummary: (item) => item.alt || 'Logo',
          arrayFields: {
            src: makeImageField('Gambar Logo') as any,
            alt: { type: 'text', label: 'Nama Mitra / Alt Text' },
            height: { type: 'number', label: 'Tinggi Logo (px)' }
          }
        }
      },
      defaultProps: {
        title: 'Your favorite companies are our partners.',
        logos: []
      },
      render: (props) => {
        return <LogoCloud title={props.title} logos={props.logos} />;
      }
    },
    AboutAppsBlock: {
      fields: {
        title: { type: 'text', label: 'Judul Section' },
        description: { type: 'textarea', label: 'Deskripsi Singkat' },
        imageSrc: makeImageField('🖼️ Gambar Utama (Side Visual)') as any,
        imageStyle: {
          type: 'select', label: '🖼️ Gaya Gambar',
          options: [
            { label: 'Rounded (sudut bulat)', value: 'rounded-xl' },
            { label: 'Square (kotak)', value: 'rounded-none' },
            { label: 'Circular (bulat)', value: 'rounded-full' },
            { label: 'Pill (kotak sangat bulat)', value: 'rounded-3xl' },
          ],
        },
        layoutDirection: {
          type: 'select', label: '🔄 Posisi Gambar',
          options: [
            { label: 'Gambar di Kanan', value: 'row' },
            { label: 'Gambar di Kiri', value: 'row-reverse' },
          ],
        },
        featuresTitle: { type: 'text', label: 'Judul Sub-fitur' },
        featuresDescription: { type: 'textarea', label: 'Deskripsi Sub-fitur' },
        features: {
          type: 'array',
          label: '✨ Daftar Fitur Unggulan',
          getItemSummary: (item, i) => item.title || `Fitur ${(i || 0) + 1}`,
          arrayFields: {
            img: makeImageField('Icon / Gambar Kecil') as any,
            title: { type: 'text', label: 'Nama Fitur' },
            desc: { type: 'textarea', label: 'Deskripsi Fitur' }
          }
        }
      },
      defaultProps: {
        title: 'About our apps',
        description: 'A visual collection of our most recent works — each piece crafted with intention, emotion and style.',
        imageSrc: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop',
        featuresTitle: 'Our Latest Features',
        featuresDescription: 'Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.',
        features: [
          { img: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png', title: 'Lightning-Fast Performance', desc: 'Built with speed — minimal load times and optimized.' }
        ]
      },
      render: (props) => <AboutApps {...props} />
    },
    GalleryGridBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Gallery (opsional)' },
        images: {
          type: 'array',
          label: '🖼️ Koleksi Gambar Gallery',
          getItemSummary: (item, i) => item.url ? `Foto ${(i || 0) + 1} ✓` : `Foto ${(i || 0) + 1} (kosong)`,
          arrayFields: {
            url: makeImageField('Pilih / URL Gambar') as any,
            caption: { type: 'text', label: 'Keterangan (opsional)' },
          }
        },
        aspectRatio: {
          type: 'select', label: '📐 Rasio Gambar',
          options: [
            { label: 'Square (1:1)', value: 'aspect-square' },
            { label: 'Landscape (16:9)', value: 'aspect-video' },
            { label: 'Portrait (3:4)', value: 'aspect-[3/4]' },
          ],
        },
      },
      defaultProps: {
        images: [
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
          { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
          { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
          { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' },
        ]
      },
      render: (props) => {
        const imageList = props.images || [];
        return (
          <ContainerStagger className="max-w-3xl mx-auto py-10 px-4">
            <GalleryGrid>
              {imageList.map((img, idx) => (
                <GalleryGridCell key={idx} index={idx}>
                  <img src={img.url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </GalleryGridCell>
              ))}
            </GalleryGrid>
          </ContainerStagger>
        );
      }
    },
    HeroBlock: {
      fields: {
        badgeText: { type: 'text', label: '🏷️ Teks Badge (Atas)' },
        titlePrefix: { type: 'text', label: 'Teks Judul (Awal)' },
        titleHighlight: { type: 'text', label: 'Teks Judul (Highlight Gradient)' },
        titleSuffix: { type: 'text', label: 'Teks Judul (Akhir)' },
        description: { type: 'textarea', label: 'Sub-judul / Deskripsi' },
        ctaPrimaryText: { type: 'text', label: 'Teks Tombol Utama' },
        ctaPrimaryLink: { type: 'text', label: '🔗 Link Tombol Utama' },
        ctaSecondaryText: { type: 'text', label: 'Teks Tombol Sekunder' },
        ctaSecondaryLink: { type: 'text', label: '🔗 Link Tombol Sekunder' },
        imageUrl: makeImageField('🖼️ Gambar Background Hero') as any,
        overlayOpacity: {
          type: 'select', label: '🌫️ Kegelapan Overlay',
          options: [
            { label: 'Ringan (30%)', value: '30' },
            { label: 'Sedang (60%)', value: '60' },
            { label: 'Gelap (80%)', value: '80' },
            { label: 'Sangat Gelap (95%)', value: '95' },
          ],
        },
        bgGradient: { 
          type: 'select', 
          label: '🎨 Warna Gradien Overlay',
          options: [
            { label: 'Maroon to Slate (default)', value: 'from-[#800020]/90 via-[#9B2C2C]/80 to-slate-900' },
            { label: 'Slate to Maroon', value: 'from-slate-900 via-blue-950 to-[#800020]/80' },
            { label: 'Maroon to Purple', value: 'from-[#9B2C2C] via-[#800020] to-purple-950' },
            { label: 'Dark Blue', value: 'from-slate-950 via-blue-950 to-slate-900' },
            { label: 'Dark Green', value: 'from-slate-950 via-emerald-950 to-slate-900' },
          ]
        },
        minHeight: {
          type: 'select', label: '📏 Tinggi Minimum Hero',
          options: [
            { label: 'Normal (80vh)', value: 'min-h-[80vh]' },
            { label: 'Full Screen (100vh)', value: 'min-h-screen' },
            { label: 'Compact (60vh)', value: 'min-h-[60vh]' },
            { label: 'Half Screen (50vh)', value: 'min-h-[50vh]' },
          ],
        },
        ...commonElementorFields,
      },
      defaultProps: {
        badgeText: 'Fakultas Teknik & Informatika Patria Artha',
        titlePrefix: 'Mencetak Talenta Digital',
        titleHighlight: 'Berdaya Saing Global',
        titleSuffix: '& Inovatif',
        description: 'Pendidikan vokasi & sarjana berbasis Outcome-Based Education (OBE) yang mengintegrasikan Artificial Intelligence, Cloud Software, Cyber Security, dan Internet of Things.',
        ctaPrimaryText: 'Daftar PMB Patria Artha',
        ctaSecondaryText: 'Jelajahi Kurikulum & SKS',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        bgGradient: 'from-[#800020]/90 via-[#9B2C2C]/80 to-slate-900',
        bgStyle: 'dark',
        fontFamily: 'sans',
        textAlign: 'left',
        paddingY: 'xl',
        paddingX: 'none',
        borderRadius: 'none',
        boxShadow: 'none',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        return (
          <div className={`relative overflow-hidden ${styleClass}`}>
            {/* Background Animated Floating Orbs & Light Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[#9B2C2C]/25 rounded-full blur-[130px]" />
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[450px] h-[450px] bg-red-600/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px]" />
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  {/* Badge Header */}
                  {props.badgeText && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 backdrop-blur-md shadow-sm">
                      <div className="p-1 rounded-full bg-emerald-500/20">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-xs font-bold tracking-wide">
                        {props.badgeText}
                      </span>
                    </div>
                  )}

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                    {props.titlePrefix}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                      {props.titleHighlight}
                    </span>{' '}
                    {props.titleSuffix}
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
                    {props.description}
                  </p>

                  {/* CTA Buttons Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                    {props.ctaPrimaryText && (
                      <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9B2C2C] to-[#800020] hover:from-[#b33333] hover:to-[#990026] text-white font-extrabold text-sm shadow-xl shadow-red-950/50 transition-all flex items-center justify-center gap-2 group">
                        <span>{props.ctaPrimaryText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                    {props.ctaSecondaryText && (
                      <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-sm transition-all shadow-md backdrop-blur-sm flex items-center justify-center gap-2">
                        <Code2 className="w-4 h-4 text-red-400" />
                        <span>{props.ctaSecondaryText}</span>
                      </button>
                    )}
                  </div>

                  {/* Specialization Tags Row */}
                  <div className="pt-6 border-t border-slate-800/80">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Peminatan Utama FTI
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-semibold">
                        <Brain className="w-3.5 h-3.5 text-red-400" /> AI & ML
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-semibold">
                        <Code2 className="w-3.5 h-3.5 text-rose-400" /> Software & Cloud
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Cyber Security
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Media Showcase Column */}
                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                      <img
                        src={props.imageUrl}
                        alt="Hero Media"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${props.bgGradient || 'from-[#800020]/90 via-[#9B2C2C]/80 to-slate-900'} opacity-60 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                            Universitas Patria Artha
                          </span>
                          <h4 className="text-xs font-extrabold text-white">
                            Fakultas Teknik & Informatika
                          </h4>
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
                          Akreditasi UNGGUL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    ProfileVisionBlock: {
      fields: {
        badgeText: { type: 'text', label: 'Teks Lencana (Badge)' },
        heading: { type: 'text', label: 'Judul Visi & Misi' },
        description: { type: 'textarea', label: 'Deskripsi Profil' },
        ...commonElementorFields,
      },
      defaultProps: {
        badgeText: 'Profil Fakultas',
        heading: 'Visi & Misi FTI',
        description: 'Menjadi fakultas unggulan di bidang teknologi informasi yang berdaya saing global pada tahun 2030.',
        bgStyle: 'white',
        borderRadius: 'none',
        paddingY: 'xl',
        paddingX: 'none',
      },
      render: (props) => <ProfileVisionBlockRender {...props} />,
    },

    // ===== PROFILE HEADER BLOCK =====
    ProfileHeaderBlock: {
      fields: {
        badge: { type: 'text', label: '🏷️ Teks Badge' },
        heading: { type: 'text', label: 'Judul Utama' },
        description: { type: 'textarea', label: 'Deskripsi' },
        style: {
          type: 'select', label: '🎨 Gaya Tampilan',
          options: [
            { label: 'Simple (Bersih)', value: 'simple' },
            { label: 'Gradient Banner', value: 'gradient' },
            { label: 'Split (Teks + Highlight)', value: 'split' },
            { label: 'Centered Bold', value: 'centered-bold' },
          ],
        },
        accentColor: {
          type: 'select', label: '🎨 Warna Aksen',
          options: [
            { label: 'Merah Kampus', value: 'red' },
            { label: 'Biru', value: 'blue' },
            { label: 'Hijau', value: 'green' },
            { label: 'Oranye', value: 'orange' },
            { label: 'Ungu', value: 'purple' },
          ],
        },
        showDivider: { type: 'select', label: 'Tampilkan Garis Bawah', options: [{ label: 'Ya', value: 'true' }, { label: 'Tidak', value: 'false' }] },
        ...commonElementorFields,
      },
      defaultProps: {
        badge: 'Profil Institusi',
        heading: 'Visi & Misi Fakultas Teknik dan Informatika',
        description: 'Menjadi fakultas unggulan di bidang teknologi informasi yang berdaya saing global pada tahun 2030, dengan fokus pada AI, Cybersecurity, dan Software Engineering.',
        style: 'simple',
        accentColor: 'red',
        showDivider: 'true',
        bgStyle: 'white',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const sClass = getAdvancedStyleClasses(props);
        const ACCENT: Record<string, { bg: string; text: string; border: string; badge: string; grad: string }> = {
          red:    { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'bg-red-100 text-[#800020] border-red-200', grad: 'from-[#800020] to-red-600' },
          blue:   { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700 border-blue-200', grad: 'from-blue-700 to-indigo-600' },
          green:  { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', grad: 'from-emerald-700 to-teal-600' },
          orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700 border-orange-200', grad: 'from-orange-600 to-amber-500' },
          purple: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700 border-violet-200', grad: 'from-violet-700 to-purple-600' },
        };
        const a = ACCENT[props.accentColor || 'red'];
        const s = props.style || 'simple';
        const showDiv = props.showDivider !== 'false';

        if (s === 'gradient') {
          return (
            <div className={`bg-gradient-to-br ${a.grad} text-white ${sClass.replace(/bg-\S+/g, '').replace(/text-\S+/g, '')}`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {props.badge && <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest opacity-75">{props.badge}</span>}
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{props.heading}</h2>
                {props.description && <p className="text-base opacity-80 max-w-2xl leading-relaxed">{props.description}</p>}
                {showDiv && <div className="mt-8 h-px bg-white/20 w-24" />}
              </div>
            </div>
          );
        }
        if (s === 'split') {
          return (
            <div className={sClass}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
                <div>
                  {props.badge && <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-4 ${a.badge}`}><span className="w-1.5 h-1.5 rounded-full bg-current" />{props.badge}</span>}
                  <h2 className={`text-2xl sm:text-3xl font-black ${a.text} leading-tight`}>{props.heading}</h2>
                </div>
                <div>
                  {props.description && <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{props.description}</p>}
                  {showDiv && <div className={`mt-6 h-0.5 rounded-full w-16 bg-gradient-to-r ${a.grad}`} />}
                </div>
              </div>
            </div>
          );
        }
        if (s === 'centered-bold') {
          return (
            <div className={`text-center ${sClass}`}>
              <div className="max-w-3xl mx-auto px-4">
                {props.badge && <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border mb-5 ${a.badge}`}><span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />{props.badge}</span>}
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white mb-4">{props.heading}</h2>
                {props.description && <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">{props.description}</p>}
                {showDiv && <div className={`mt-8 mx-auto h-1 rounded-full w-16 bg-gradient-to-r ${a.grad}`} />}
              </div>
            </div>
          );
        }
        // simple (default)
        return (
          <div className={sClass}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              {props.badge && <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-4 ${a.badge}`}><span className="w-1.5 h-1.5 rounded-full bg-current" />{props.badge}</span>}
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">{props.heading}</h2>
              {props.description && <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-2xl">{props.description}</p>}
              {showDiv && <div className={`mt-6 h-px bg-gradient-to-r ${a.grad} opacity-30 w-full`} />}
            </div>
          </div>
        );
      },
    },

    // ===== ACCREDITATION BLOCK =====
    AccreditationBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Section Akreditasi' },
        style: {
          type: 'select', label: '🎨 Gaya Tampilan',
          options: [
            { label: 'Cards (Kartu dengan ikon)', value: 'cards' },
            { label: 'Timeline (Garis waktu)', value: 'timeline' },
            { label: 'Compact List (Daftar ringkas)', value: 'compact-list' },
            { label: 'Badge Grid (Grid lencana)', value: 'badge-grid' },
          ],
        },
        accentColor: {
          type: 'select', label: '🎨 Warna Utama',
          options: [
            { label: 'Hijau (Unggul)', value: 'green' },
            { label: 'Biru (Baik Sekali)', value: 'blue' },
            { label: 'Merah (Kampus)', value: 'red' },
            { label: 'Kuning (Pending)', value: 'amber' },
          ],
        },
        items: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.title || `Akreditasi ${(i || 0) + 1}`,
          arrayFields: {
            title: { type: 'text', label: 'Nama Lembaga/Akreditasi' },
            body: { type: 'textarea', label: 'Keterangan' },
            issuer: { type: 'text', label: 'Penyelenggara' },
            status: { type: 'text', label: 'Status (mis: Unggul, Full Accreditation)' },
            year: { type: 'text', label: 'Tahun Berlaku' },
            color: {
              type: 'select', label: 'Warna Kartu',
              options: [
                { label: 'Hijau', value: 'green' },
                { label: 'Biru', value: 'blue' },
                { label: 'Merah', value: 'red' },
                { label: 'Kuning', value: 'amber' },
                { label: 'Ungu', value: 'purple' },
              ],
            },
          },
        },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Akreditasi & Sertifikasi',
        style: 'cards',
        accentColor: 'green',
        items: [
          { title: 'LAM INFOKOM (Nasional)', body: 'Akreditasi Program Studi Informatika', issuer: 'LAM INFOKOM Indonesia', status: 'Unggul', year: '2024–2029', color: 'green' },
          { title: 'IABEE (Internasional)', body: 'International Accreditation Board for Engineering Education', issuer: 'IABEE Indonesia', status: 'Full Accreditation', year: '2024', color: 'blue' },
          { title: 'ASIIN e.V. Germany', body: 'Keanggotaan & Sertifikasi Standar Eropa', issuer: 'ASIIN Germany', status: 'Provisional Member', year: '2025', color: 'red' },
        ],
        bgStyle: 'white',
        paddingY: 'xl',
        paddingX: 'lg',
      },
      render: (props) => {
        const sClass = getAdvancedStyleClasses(props);
        const items = props.items || [];
        const s = props.style || 'cards';
        const COLOR_MAP: Record<string, { badge: string; icon: string; border: string; dot: string }> = {
          green:  { badge: 'bg-emerald-500 text-white', icon: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600', border: 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400', dot: 'bg-emerald-500' },
          blue:   { badge: 'bg-blue-600 text-white', icon: 'bg-blue-100 dark:bg-blue-950 text-blue-600', border: 'border-blue-200 dark:border-blue-800 hover:border-blue-400', dot: 'bg-blue-500' },
          red:    { badge: 'bg-red-600 text-white', icon: 'bg-red-100 dark:bg-red-950 text-red-600', border: 'border-red-200 dark:border-red-800 hover:border-red-400', dot: 'bg-red-500' },
          amber:  { badge: 'bg-amber-500 text-white', icon: 'bg-amber-100 dark:bg-amber-950 text-amber-600', border: 'border-amber-200 dark:border-amber-800 hover:border-amber-400', dot: 'bg-amber-500' },
          purple: { badge: 'bg-violet-600 text-white', icon: 'bg-violet-100 dark:bg-violet-950 text-violet-600', border: 'border-violet-200 dark:border-violet-800 hover:border-violet-400', dot: 'bg-violet-500' },
        };

        if (s === 'cards') return (
          <div className={sClass}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center">{props.heading}</h2>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => {
                  const c = COLOR_MAP[item.color || 'green'];
                  return (
                    <div key={i} className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border transition-all shadow-sm hover:shadow-md ${c.border}`}>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 text-lg ${c.icon}`}>✓</div>
                      <h3 className="font-black text-slate-900 dark:text-white text-base mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{item.body}</p>
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                        <span className="text-xs text-slate-400">{item.issuer}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.badge}`}>{item.status}</span>
                      </div>
                      {item.year && <div className="mt-1 text-xs text-slate-400 text-right">{item.year}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

        if (s === 'timeline') return (
          <div className={sClass}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8">{props.heading}</h2>}
              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="space-y-6">
                  {items.map((item, i) => {
                    const c = COLOR_MAP[item.color || 'green'];
                    return (
                      <div key={i} className="relative pl-10 flex items-start gap-4">
                        <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${c.badge}`}>{i + 1}</div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex-1 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.badge}`}>{item.status}</span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{item.body} • {item.year}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

        if (s === 'compact-list') return (
          <div className={sClass}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">{props.heading}</h2>}
              <div className="space-y-3">
                {items.map((item, i) => {
                  const c = COLOR_MAP[item.color || 'green'];
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</span>
                        <span className="text-slate-400 text-xs ml-2">— {item.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.year && <span className="text-xs text-slate-400">{item.year}</span>}
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${c.badge}`}>{item.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

        // badge-grid
        return (
          <div className={sClass}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8">{props.heading}</h2>}
              <div className="flex flex-wrap gap-4 justify-center">
                {items.map((item, i) => {
                  const c = COLOR_MAP[item.color || 'green'];
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 px-6 py-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-[160px]">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-white ${c.badge}`}>✓</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm text-center">{item.title}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.badge}`}>{item.status}</span>
                      {item.year && <span className="text-xs text-slate-400">{item.year}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      },
    },

    // ===== VISION MISSION BLOCK =====
    VisionMissionBlock: {
      fields: {
        visionTitle: { type: 'text', label: '🔭 Label Visi' },
        visionText: { type: 'textarea', label: 'Teks Visi' },
        missionTitle: { type: 'text', label: '🎯 Label Misi' },
        style: {
          type: 'select', label: '🎨 Gaya Tampilan',
          options: [
            { label: 'Side by Side (Berdampingan)', value: 'side-by-side' },
            { label: 'Stacked (Bertumpuk)', value: 'stacked' },
            { label: 'Dark Card (Kartu Gelap)', value: 'dark-card' },
            { label: 'Timeline List (Daftar kronologis)', value: 'timeline-list' },
          ],
        },
        accentColor: {
          type: 'select', label: '🎨 Warna Aksen',
          options: [
            { label: 'Merah Kampus', value: 'red' },
            { label: 'Biru', value: 'blue' },
            { label: 'Hijau', value: 'green' },
            { label: 'Indigo', value: 'indigo' },
          ],
        },
        missions: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.text ? item.text.substring(0, 40) + '…' : `Misi ${(i || 0) + 1}`,
          arrayFields: {
            text: { type: 'textarea', label: 'Isi Misi' },
          },
        },
        ...commonElementorFields,
      },
      defaultProps: {
        visionTitle: 'Visi',
        visionText: 'Menjadi Fakultas Teknik dan Informatika Universitas Patria Artha yang terkemuka, unggul, dan berdaya saing global pada tahun 2030 dalam bidang Rekayasa Teknologi, Artificial Intelligence, dan Sistem Informasi Terintegrasi berjiwa technopreneurship.',
        missionTitle: 'Misi',
        style: 'side-by-side',
        accentColor: 'red',
        missions: [
          { text: 'Menyelenggarakan pendidikan tinggi Teknik & Informatika berstandar internasional dengan kurikulum adaptif berbasis Outcome-Based Education (OBE).' },
          { text: 'Melaksanakan penelitian unggulan di bidang Artificial Intelligence, Cyber Security, Cloud Computing, Software Engineering, dan IoT.' },
          { text: 'Menyelenggarakan pengabdian masyarakat berbasis produk teknologi tepat guna dan solusi digital terintegrasi.' },
          { text: 'Membangun kemitraan strategis dengan industri teknologi nasional maupun multinasional untuk memperkuat kesiapan kerja alumni.' },
        ],
        bgStyle: 'white',
        paddingY: 'xl',
        paddingX: 'lg',
      },
      render: (props) => {
        const sClass = getAdvancedStyleClasses(props);
        const missions = props.missions || [];
        const s = props.style || 'side-by-side';
        const ACCENT: Record<string, { grad: string; border: string; num: string; icon: string }> = {
          red:    { grad: 'from-red-900 via-rose-950 to-slate-900', border: 'border-red-300 dark:border-red-800', num: 'bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-400', icon: 'text-red-500' },
          blue:   { grad: 'from-blue-900 via-indigo-950 to-slate-900', border: 'border-blue-300 dark:border-blue-800', num: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400', icon: 'text-blue-500' },
          green:  { grad: 'from-emerald-900 via-teal-950 to-slate-900', border: 'border-emerald-300 dark:border-emerald-800', num: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400', icon: 'text-emerald-500' },
          indigo: { grad: 'from-indigo-900 via-violet-950 to-slate-900', border: 'border-indigo-300 dark:border-indigo-800', num: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400', icon: 'text-indigo-500' },
        };
        const a = ACCENT[props.accentColor || 'red'];

        const MissionList = () => (
          <div className="space-y-3">
            {missions.map((m, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${a.num}`}>{i + 1}</div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        );

        if (s === 'dark-card') return (
          <div className={sClass}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className={`rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-br ${a.grad} mb-6 shadow-xl`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 opacity-70`}>⭐ {props.visionTitle}</div>
                <p className="text-base sm:text-lg leading-relaxed font-medium italic">"{props.visionText}"</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${a.icon}`}>🎯 {props.missionTitle}</div>
                <MissionList />
              </div>
            </div>
          </div>
        );

        if (s === 'stacked') return (
          <div className={sClass}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
              <div className={`border-l-4 pl-5 ${a.border}`}>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">⭐ {props.visionTitle}</div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">"{props.visionText}"</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">🎯 {props.missionTitle}</div>
                <MissionList />
              </div>
            </div>
          </div>
        );

        if (s === 'timeline-list') return (
          <div className={sClass}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className={`bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border ${a.border} mb-6`}>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">⭐ {props.visionTitle}</div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{props.visionText}</p>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">🎯 {props.missionTitle}</div>
              <div className="relative pl-6">
                <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="space-y-4">
                  {missions.map((m, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-4 w-3 h-3 rounded-full top-1.5 ${a.num.replace('bg-', 'bg-').split(' ')[0]}`} />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

        // side-by-side (default)
        return (
          <div className={sClass}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`bg-gradient-to-br ${a.grad} text-white rounded-2xl p-6 shadow-lg`}>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">⭐ {props.visionTitle}</div>
                  <p className="text-sm sm:text-base leading-relaxed font-medium italic">"{props.visionText}"</p>
                </div>
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${a.icon}`}>🎯 {props.missionTitle}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {missions.map((m, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${a.num}`}>{i + 1}</div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{m.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    // ===== FOCUS AREAS BLOCK =====
    FocusAreasBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Section' },
        subheading: { type: 'text', label: 'Sub-judul' },
        style: {
          type: 'select', label: '🎨 Gaya Tampilan',
          options: [
            { label: 'Icon Cards (Kartu dengan ikon)', value: 'icon-cards' },
            { label: 'Horizontal List (Daftar horizontal)', value: 'horizontal-list' },
            { label: 'Numbered Grid (Grid bernomor)', value: 'numbered-grid' },
            { label: 'Pill Tags (Tag label)', value: 'pill-tags' },
          ],
        },
        columns: {
          type: 'select', label: 'Jumlah Kolom',
          options: [
            { label: '2 Kolom', value: '2' },
            { label: '3 Kolom', value: '3' },
            { label: '4 Kolom', value: '4' },
          ],
        },
        accentColor: {
          type: 'select', label: '🎨 Warna Hover Aksen',
          options: [
            { label: 'Merah Kampus', value: 'red' },
            { label: 'Biru', value: 'blue' },
            { label: 'Hijau', value: 'green' },
            { label: 'Ungu', value: 'purple' },
          ],
        },
        areas: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.title || `Area ${(i || 0) + 1}`,
          arrayFields: {
            icon: { type: 'text', label: 'Emoji Icon (mis: 🤖, 💻, 🔐)' },
            title: { type: 'text', label: 'Nama Fokus Keahlian' },
            description: { type: 'textarea', label: 'Deskripsi Keahlian' },
            color: {
              type: 'select', label: 'Warna Ikon',
              options: [
                { label: 'Biru', value: 'blue' },
                { label: 'Ungu', value: 'purple' },
                { label: 'Hijau', value: 'green' },
                { label: 'Oranye', value: 'orange' },
                { label: 'Merah', value: 'red' },
                { label: 'Kuning', value: 'amber' },
              ],
            },
            ctaLabel: { type: 'text', label: 'Teks Tombol/Link (opsional)' },
          },
        },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '4 Fokus Keahlian & Peminatan Studi',
        subheading: 'Mahasiswa memilih spesialisasi pada semester 5 sesuai minat bakat dan cita-cita karir',
        style: 'icon-cards',
        columns: '4',
        accentColor: 'red',
        areas: [
          { icon: '🤖', title: 'Artificial Intelligence & Data Science', description: 'Fokus pada Machine Learning, Deep Learning, Computer Vision, NLP, Big Data Analytics, dan Generative AI.', color: 'blue', ctaLabel: 'Rincian Kurikulum →' },
          { icon: '💻', title: 'Software Engineering & Cloud Computing', description: 'Fokus pada Arsitektur Microservices, Full-Stack Web/Mobile, DevOps, Clean Code, dan System Architecture.', color: 'purple', ctaLabel: 'Rincian Kurikulum →' },
          { icon: '🔐', title: 'Cyber Security & Network Infrastructure', description: 'Fokus pada Ethical Hacking, Penetration Testing, Cryptography, Cloud Security, dan Network Engineering.', color: 'green', ctaLabel: 'Rincian Kurikulum →' },
          { icon: '⚙️', title: 'Internet of Things & Embedded Systems', description: 'Fokus pada Smart City, Autonomous Systems, Sensor Networks, Microcontrollers, dan Robotics.', color: 'amber', ctaLabel: 'Rincian Kurikulum →' },
        ],
        bgStyle: 'white',
        paddingY: 'xl',
        paddingX: 'lg',
      },
      render: (props) => {
        const sClass = getAdvancedStyleClasses(props);
        const areas = props.areas || [];
        const s = props.style || 'icon-cards';
        const cols = props.columns || '4';
        const gridClass: Record<string, string> = {
          '2': 'grid-cols-1 sm:grid-cols-2',
          '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        };
        const ICON_BG: Record<string, string> = {
          blue: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50',
          purple: 'text-violet-500 bg-violet-50 dark:bg-violet-950/50',
          green: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50',
          orange: 'text-orange-500 bg-orange-50 dark:bg-orange-950/50',
          red: 'text-red-600 bg-red-50 dark:bg-red-950/50',
          amber: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50',
        };
        const HOVER_BORDER: Record<string, string> = {
          red: 'hover:border-[#800020]/60 dark:hover:border-red-500/60',
          blue: 'hover:border-blue-500/60',
          green: 'hover:border-emerald-500/60',
          purple: 'hover:border-violet-500/60',
        };
        const hoverClass = HOVER_BORDER[props.accentColor || 'red'];

        if (s === 'pill-tags') return (
          <div className={sClass}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{props.heading}</h2>}
              {props.subheading && <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">{props.subheading}</p>}
              <div className="flex flex-wrap gap-3 justify-center">
                {areas.map((area, i) => (
                  <span key={i} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm ${hoverClass} hover:shadow-md transition-all cursor-default`}>
                    <span className="text-base">{area.icon}</span>
                    {area.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

        if (s === 'horizontal-list') return (
          <div className={sClass}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{props.heading}</h2>}
              {props.subheading && <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">{props.subheading}</p>}
              <div className="space-y-4">
                {areas.map((area, i) => {
                  const ic = ICON_BG[area.color || 'blue'];
                  return (
                    <div key={i} className={`flex items-center gap-5 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm ${hoverClass} hover:shadow-md transition-all`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${ic}`}>{area.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">{area.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{area.description}</p>
                      </div>
                      {area.ctaLabel && <span className="text-xs font-semibold text-slate-400 whitespace-nowrap flex-shrink-0">{area.ctaLabel}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

        if (s === 'numbered-grid') return (
          <div className={sClass}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {(props.heading || props.subheading) && (
                <div className="text-center mb-10">
                  {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{props.heading}</h2>}
                  {props.subheading && <p className="text-sm text-slate-500 dark:text-slate-400">{props.subheading}</p>}
                </div>
              )}
              <div className={`grid ${gridClass[cols] || gridClass['4']} gap-5`}>
                {areas.map((area, i) => {
                  const ic = ICON_BG[area.color || 'blue'];
                  return (
                    <div key={i} className={`relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm ${hoverClass} hover:shadow-md transition-all`}>
                      <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 dark:text-slate-700 select-none">{String(i + 1).padStart(2, '0')}</div>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${ic}`}>{area.icon}</div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{area.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

        // icon-cards (default)
        return (
          <div className={sClass}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {(props.heading || props.subheading) && (
                <div className="text-center mb-10">
                  {props.heading && <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{props.heading}</h2>}
                  {props.subheading && <p className="text-sm text-slate-500 dark:text-slate-400">{props.subheading}</p>}
                </div>
              )}
              <div className={`grid ${gridClass[cols] || gridClass['4']} gap-6`}>
                {areas.map((area, i) => {
                  const ic = ICON_BG[area.color || 'blue'];
                  return (
                    <div key={i} className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm ${hoverClass} hover:shadow-md transition-all group flex flex-col justify-between`}>
                      <div>
                        <div className={`p-3 rounded-xl w-fit mb-4 text-2xl group-hover:scale-110 transition-transform ${ic}`}>{area.icon}</div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-[#800020] dark:group-hover:text-red-400 transition-colors">{area.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{area.description}</p>
                      </div>
                      {area.ctaLabel && (
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-[#800020] dark:group-hover:text-red-400 transition-colors">
                          <span>{area.ctaLabel}</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      },
    },

    ModernBookCoverGridBlock: {

      fields: {
        heading: { type: 'text', label: 'Judul Grid Buku' },
        subheading: { type: 'textarea', label: 'Sub-judul' },
        books: {
          type: 'array',
          getItemSummary: (item, i) => item.title || `Buku ${i || 0 + 1}`,
          arrayFields: {
            title: { type: 'text', label: 'Judul Buku' },
            description: { type: 'textarea', label: 'Deskripsi Buku' },
            coverImageUrl: makeImageField('🖼️ Gambar Cover Buku 3D (URL / Media)') as any,
            size: {
              type: 'select',
              label: '📐 Ukuran Buku 3D',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' }
              ]
            },
            color: {
              type: 'select',
              label: '🎨 Warna Latar Cover / Spine',
              options: [
                { label: 'Neutral', value: 'neutral' },
                { label: 'Amber', value: 'amber' },
                { label: 'Blue', value: 'blue' },
                { label: 'Rose', value: 'rose' },
                { label: 'Emerald', value: 'emerald' },
                { label: 'Indigo', value: 'indigo' },
                { label: 'Slate', value: 'slate' },
              ]
            }
          }
        },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Koleksi Buku & Modul Pembelajaran FTI 3D',
        subheading: 'Jelajahi berbagai karya ilmiah, modul praktikum, dan publikasi terbaik FTI UPA.',
        books: [
          { size: 'sm', color: 'neutral', title: 'Cyber Security Handbook', description: 'Panduan Praktikum Network Defense & Ethical Hacking.', coverImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80' },
          { size: 'md', color: 'amber', title: 'Kecerdasan Buatan & AI', description: 'Konsep Dasar Machine Learning & Neural Networks.', coverImageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
          { size: 'lg', color: 'blue', title: 'Modul Software Engineering', description: 'Outcome-Based Education & Software Design Patterns.', coverImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' }
        ],
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'xl',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const booksList = props.books || [];
        return (
          <div className={styleClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {(props.heading || props.subheading) && (
                <div className="text-center mb-16">
                  {props.heading && <h2 className="text-3xl font-black text-slate-900 dark:text-white">{props.heading}</h2>}
                  {props.subheading && <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{props.subheading}</p>}
                </div>
              )}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10">
                {booksList.map((book, idx) => (
                  <ModernBookCover key={idx} size={book.size as any} color={book.color as any} coverImageUrl={book.coverImageUrl}>
                    <BookHeader>
                      <Book className="w-5 h-5" />
                    </BookHeader>
                    <BookTitle>{book.title}</BookTitle>
                    <BookDescription>{book.description}</BookDescription>
                  </ModernBookCover>
                ))}
              </div>
            </div>
          </div>
        );
      }
    },

    CtaBoxBlock: {
      fields: {
        title: { type: 'text', label: 'Judul CTA' },
        description: { type: 'textarea', label: 'Deskripsi Singkat' },
        buttonLabel: { type: 'text', label: 'Label Tombol' },
        badge: { type: 'text', label: 'Badge / Label Kecil (Opsional)' },
        ...commonElementorFields,
      },
      defaultProps: {
        title: 'Siap Memulai Karir di Bidang Teknologi?',
        description: 'Bergabunglah dengan Fakultas Teknik & Informatika Universitas Patria Artha dan jadilah bagian dari inovator masa depan.',
        buttonLabel: 'Daftar Sekarang',
        badge: 'Pendaftaran Terbatas',
        bgStyle: 'maroon',
        borderRadius: 'lg',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${styleClass}`}>
            <div className="max-w-2xl text-left">
              {props.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md mb-3 inline-block">
                  {props.badge}
                </span>
              )}
              <h2 className="text-2xl font-black tracking-tight">{props.title}</h2>
              <p className="text-xs sm:text-sm opacity-90 mt-2 leading-relaxed">{props.description}</p>
            </div>
            {props.buttonLabel && (
              <button className="shrink-0 px-6 py-3.5 bg-white text-[#800020] font-black text-xs sm:text-sm rounded-xl shadow-lg hover:bg-amber-50 transition-all transform hover:scale-105">
                {props.buttonLabel}
              </button>
            )}
          </div>
        );
      },
    },


    DeanWelcomeBlock: {
      fields: {
        badgeText: { type: 'text', label: 'Teks Badge Top' },
        heading: { type: 'text', label: 'Judul Utama Sambutan' },
        highlightHeading: { type: 'text', label: 'Teks Highlight Gradient' },
        paragraph1: { type: 'textarea', label: 'Paragraf Utama (Kutipan)' },
        paragraph2: { type: 'textarea', label: 'Paragraf Kedua (Penjelas)' },
        deanName: { type: 'text', label: 'Nama Dekan & Gelar' },
        deanTitle: { type: 'text', label: 'Jabatan Dekan' },
        deanPhoto: makeImageField('📸 Foto Dekan (dari Media Manager)') as any,
        buttonText: { type: 'text', label: 'Teks Tombol CTA' },
        buttonLink: { type: 'text', label: 'Tautan / Link Tombol' },
        signatureText: { type: 'text', label: 'Tanda Tangan Teks / Inisial' },
        signatureLabel: { type: 'text', label: 'Keterangan Tanda Tangan' },
        themeStyle: {
          type: 'select',
          label: '🎨 Tema Warna & Suasana',
          options: [
            { label: 'Dark Tech Slate-900 (Blue Glow)', value: 'dark' },
            { label: 'Universitas Maroon (#800020 & Gold)', value: 'maroon' },
            { label: 'Deep Indigo Modern', value: 'indigo' },
            { label: 'Light Clean (Terang & Soft)', value: 'light' },
          ],
        },
        showSignature: {
          type: 'select',
          label: '✒️ Status Tanda Tangan',
          options: [
            { label: 'Tampilkan Tanda Tangan', value: 'true' },
            { label: 'Sembunyikan Tanda Tangan', value: 'false' },
          ],
        },
        showDecorativeBlobs: {
          type: 'select',
          label: '✨ Background Glow Animation',
          options: [
            { label: 'Aktifkan Background Glow', value: 'true' },
            { label: 'Non-aktifkan Background Glow', value: 'false' },
          ],
        },
        ...commonElementorFields,
      },
      defaultProps: {
        badgeText: 'Sambutan Dekan',
        heading: 'Membangun Generasi Unggul Berbasis',
        highlightHeading: 'Inovasi & Teknologi',
        paragraph1: '"Selamat datang di Fakultas Teknik & Teknologi. Kami berkomitmen untuk menyelenggarakan pendidikan tinggi berkualitas global yang mengintegrasikan kecerdasan akademis dengan integritas moral."',
        paragraph2: 'Di era transformasi digital yang bergerak cepat, kami terus beradaptasi dengan menghadirkan kurikulum berbasis industri, riset mutakhir, serta kolaborasi lintas disiplin demi mencetak lulusan yang siap bersaing secara global.',
        deanName: 'Prof. Dr. Ir. H. Ahmad Dahlan, M.T.',
        deanTitle: 'Dekan Fakultas Teknik & Teknologi',
        deanPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
        buttonText: 'Baca Sambutan Selengkapnya',
        buttonLink: '#sambutan-lengkap',
        signatureText: 'A. Dahlan',
        signatureLabel: 'Tanda Tangan Resmi',
        themeStyle: 'dark',
        showSignature: 'true',
        showDecorativeBlobs: 'true',
        bgStyle: 'transparent',
        fontFamily: 'sans',
        textAlign: 'left',
        paddingY: 'xl',
        paddingX: 'lg',
        borderRadius: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        };

        const itemVariants = {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
          },
        };

        const isMaroon = props.themeStyle === 'maroon';
        const isIndigo = props.themeStyle === 'indigo';
        const isLight = props.themeStyle === 'light';

        const bgSection = isMaroon 
          ? 'bg-gradient-to-br from-[#5A0017] via-[#800020] to-slate-950 text-white' 
          : isIndigo 
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white'
          : isLight 
          ? 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800'
          : 'bg-slate-900 text-white';

        const blob1Color = isMaroon ? 'bg-red-500/20' : isIndigo ? 'bg-purple-600/20' : isLight ? 'bg-red-400/10' : 'bg-blue-600/20';
        const blob2Color = isMaroon ? 'bg-amber-500/20' : isIndigo ? 'bg-indigo-600/20' : isLight ? 'bg-blue-400/10' : 'bg-indigo-600/20';

        const badgeClass = isMaroon
          ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
          : isIndigo
          ? 'border-purple-400/30 bg-purple-400/10 text-purple-300'
          : isLight
          ? 'border-[#800020]/30 bg-[#800020]/10 text-[#800020] dark:text-red-400'
          : 'border-blue-500/30 bg-blue-500/10 text-blue-400';

        const badgeDot = isMaroon ? 'bg-amber-400' : isIndigo ? 'bg-purple-400' : isLight ? 'bg-[#800020] dark:bg-red-400' : 'bg-blue-400';

        const gradientHeading = isMaroon
          ? 'bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent'
          : isIndigo
          ? 'bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent'
          : isLight
          ? 'bg-gradient-to-r from-[#800020] to-amber-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent';

        const deanTitleColor = isMaroon ? 'text-amber-300' : isIndigo ? 'text-purple-300' : isLight ? 'text-[#800020] dark:text-red-400' : 'text-blue-400';

        const frameGlow = isMaroon
          ? 'from-red-600 to-amber-500'
          : isIndigo
          ? 'from-purple-500 to-indigo-500'
          : isLight
          ? 'from-red-400 to-amber-400'
          : 'from-blue-500 to-indigo-500';

        const buttonBg = isMaroon
          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20'
          : isIndigo
          ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
          : isLight
          ? 'bg-[#800020] hover:bg-[#9B2C2C] text-white shadow-red-900/20'
          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30';

        return (
          <section className={`relative overflow-hidden rounded-3xl ${bgSection} ${styleClass}`}>
            {/* Background Decorative Blobs */}
            {props.showDecorativeBlobs !== 'false' && (
              <>
                <div className={`pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full ${blob1Color} blur-3xl`} />
                <div className={`pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full ${blob2Color} blur-3xl`} />
              </>
            )}

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Kolom Foto Dekan */}
                <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
                  {/* Frame Aksen Dekoratif */}
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${frameGlow} opacity-30 blur transition duration-500 group-hover:opacity-60`} />

                  <div className={`relative overflow-hidden rounded-3xl border ${
                    isLight ? 'border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80' : 'border-slate-700/50 bg-slate-800/50'
                  } p-3 backdrop-blur-xl shadow-2xl`}>
                    <div className="overflow-hidden rounded-2xl">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={props.deanPhoto || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                        alt={props.deanName || 'Foto Dekan'}
                        className="h-[380px] sm:h-[420px] w-full object-cover object-center"
                      />
                    </div>

                    {/* Tag Name Badge Overlay */}
                    <div className={`absolute bottom-6 left-6 right-6 rounded-xl border ${
                      isLight ? 'border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white' : 'border-white/10 bg-slate-900/80 text-white'
                    } p-4 backdrop-blur-md shadow-lg`}>
                      <h3 className={`text-base sm:text-lg font-bold ${isLight ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                        {props.deanName}
                      </h3>
                      <p className={`text-xs font-semibold ${deanTitleColor}`}>
                        {props.deanTitle}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Kolom Teks Sambutan */}
                <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                  {props.badgeText && (
                    <div className={`inline-flex items-center gap-2 rounded-full border ${badgeClass} px-4 py-1.5 text-xs font-bold uppercase tracking-wider`}>
                      <span className={`h-2 w-2 rounded-full ${badgeDot} animate-pulse`} />
                      {props.badgeText}
                    </div>
                  )}

                  <h2 className={`text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight ${isLight ? 'text-slate-900 dark:text-white' : 'text-white'} leading-tight`}>
                    {props.heading}{' '}
                    {props.highlightHeading && (
                      <span className={gradientHeading}>
                        {props.highlightHeading}
                      </span>
                    )}
                  </h2>

                  <div className={`space-y-4 font-normal leading-relaxed text-sm sm:text-base md:text-lg ${isLight ? 'text-slate-700 dark:text-slate-300' : 'text-slate-300'}`}>
                    {props.paragraph1 && (
                      <p className="italic font-medium">
                        {props.paragraph1}
                      </p>
                    )}
                    {props.paragraph2 && (
                      <p className={`text-xs sm:text-sm md:text-base ${isLight ? 'text-slate-600 dark:text-slate-400' : 'text-slate-400'}`}>
                        {props.paragraph2}
                      </p>
                    )}
                  </div>

                  {/* Tombol & Tanda Tangan */}
                  <div className={`pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t ${
                    isLight ? 'border-slate-200 dark:border-slate-800' : 'border-slate-800/80'
                  }`}>
                    {props.buttonText && (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={props.buttonLink || '#sambutan'}
                        className={`inline-flex items-center justify-center rounded-xl ${buttonBg} px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all focus:outline-none`}
                      >
                        {props.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.a>
                    )}

                    {/* Tanda tangan digital */}
                    {props.showSignature !== 'false' && (
                      <div className={`border-l-2 ${isLight ? 'border-slate-300 dark:border-slate-700' : 'border-slate-700'} pl-4`}>
                        <span className={`block font-serif text-2xl italic ${isLight ? 'text-slate-800 dark:text-slate-300' : 'text-slate-300'}`}>
                          {props.signatureText}
                        </span>
                        <span className={`text-[10px] sm:text-xs ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                          {props.signatureLabel}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      },
    },

    AlertBannerBlock: {
      fields: {
        message: { type: 'text', label: 'Pesan Pengumuman' },
        type: {
          type: 'select',
          label: 'Tipe Alert',
          options: [
            { label: 'Informasi (Biru)', value: 'info' },
            { label: 'Penting (Kuning)', value: 'warning' },
            { label: 'Sukses (Hijau)', value: 'success' },
            { label: 'Darurat / SPMB (Merah)', value: 'urgent' },
          ],
        },
        linkText: { type: 'text', label: 'Teks Tautan Tambahan' },
        ...commonElementorFields,
      },
      defaultProps: {
        message: '📢 Pendaftaran Mahasiswa Baru (PMB) Jalur Beasiswa Prestasi Gelombang 2 Resmi Dibuka!',
        type: 'urgent',
        linkText: 'Daftar Sekarang →',
        bgStyle: 'white',
        borderRadius: 'md',
        paddingY: 'sm',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const typeStyles = {
          info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200',
          warning: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200',
          success: 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200',
          urgent: 'bg-rose-50 text-rose-900 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200',
        }[props.type || 'info'];

        return (
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 ${typeStyles} ${styleClass}`}>
            <div className="flex items-center gap-3 font-medium text-sm">
              <Zap className="w-5 h-5 shrink-0 text-amber-500" />
              <span>{props.message}</span>
            </div>
            {props.linkText && (
              <span className="shrink-0 text-xs font-bold underline cursor-pointer hover:opacity-80">
                {props.linkText}
              </span>
            )}
          </div>
        );
      },
    },

    StatsGridBlock: {
      fields: {
        stat1Number: { type: 'text', label: 'Angka Statistik 1' },
        stat1Label: { type: 'text', label: 'Label Statistik 1' },
        stat2Number: { type: 'text', label: 'Angka Statistik 2' },
        stat2Label: { type: 'text', label: 'Label Statistik 2' },
        stat3Number: { type: 'text', label: 'Angka Statistik 3' },
        stat3Label: { type: 'text', label: 'Label Statistik 3' },
        stat4Number: { type: 'text', label: 'Angka Statistik 4' },
        stat4Label: { type: 'text', label: 'Label Statistik 4' },
        ...commonElementorFields,
      },
      defaultProps: {
        stat1Number: '98.4%',
        stat1Label: 'Lulusan Bekerja < 3 Bulan',
        stat2Number: 'Unggul',
        stat2Label: 'Akreditasi LAM INFOKOM',
        stat3Number: '24+',
        stat3Label: 'Mitra Industri Tech',
        stat4Number: '144 SKS',
        stat4Label: 'Total Kurikulum S1',
        bgStyle: 'transparent',
        borderRadius: 'none',
        paddingY: 'md',
      },
      render: (props) => {
        const stats = [
          { num: props.stat1Number, label: props.stat1Label, icon: <Award className="w-5 h-5 text-red-500" /> },
          { num: props.stat2Number, label: props.stat2Label, icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
          { num: props.stat3Number, label: props.stat3Label, icon: <Users className="w-5 h-5 text-purple-500" /> },
          { num: props.stat4Number, label: props.stat4Label, icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
        ];
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:border-[#800020] transition-all">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shadow-2xs">
                    {s.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {s.num}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    FeaturesGridBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Bagian Keunggulan' },
        subheading: { type: 'text', label: 'Sub-judul' },
        layout: {
          type: 'select', label: '📐 Layout Kolom',
          options: [
            { label: '3 Kolom (default)', value: '3' },
            { label: '2 Kolom', value: '2' },
            { label: '4 Kolom', value: '4' },
          ],
        },
        cardStyle: {
          type: 'select', label: '🎨 Gaya Kartu',
          options: [
            { label: 'Soft (slate bg)', value: 'soft' },
            { label: 'Bordered (garis)', value: 'bordered' },
            { label: 'Elevated (shadow)', value: 'elevated' },
            { label: 'Gradient (warna)', value: 'gradient' },
          ],
        },
        items: {
          type: 'array',
          label: '✨ Item Keunggulan',
          getItemSummary: (item: any, i: number) => item.title || `Keunggulan ${(i || 0) + 1}`,
          arrayFields: {
            icon: { type: 'text', label: 'Emoji Icon (mis: 🔬, 🌐, 🏆)' },
            title: { type: 'text', label: 'Judul Keunggulan' },
            desc: { type: 'textarea', label: 'Deskripsi' },
            color: {
              type: 'select', label: 'Warna Aksen Icon',
              options: [
                { label: 'Merah (default)', value: 'red' },
                { label: 'Biru', value: 'blue' },
                { label: 'Hijau', value: 'green' },
                { label: 'Kuning', value: 'amber' },
                { label: 'Ungu', value: 'purple' },
              ],
            },
          },
        },
        item1Title: { type: 'text', label: '⚡ Keunggulan 1 (legacy, pakai Items jika bisa)' },
        item1Desc: { type: 'textarea', label: 'Deskripsi 1' },
        item2Title: { type: 'text', label: 'Keunggulan 2' },
        item2Desc: { type: 'textarea', label: 'Deskripsi 2' },
        item3Title: { type: 'text', label: 'Keunggulan 3' },
        item3Desc: { type: 'textarea', label: 'Deskripsi 3' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Mengapa Memilih FTI UPA?',
        subheading: 'Kurikulum adaptif berbasis industri dengan laboratorium komputasi sains berteknologi tinggi.',
        item1Title: 'Peminatan AI & Data Science',
        item1Desc: 'Pendalaman Machine Learning, Deep Learning, Computer Vision, dan LLM dibimbing peneliti aktif.',
        item2Title: 'Sertifikasi Internasional AWS & Cisco',
        item2Desc: 'Mahasiswa berkesempatan meraih sertifikasi resmi pendamping ijazah (SKPI).',
        item3Title: 'Program Magang & MBKM Riset',
        item3Desc: 'Pengalaman kerja langsung di tech company, instansi pemerintah, dan partner industri.',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const items = [
          { title: props.item1Title, desc: props.item1Desc, icon: <Code className="w-6 h-6 text-[#800020]" /> },
          { title: props.item2Title, desc: props.item2Desc, icon: <Award className="w-6 h-6 text-indigo-500" /> },
          { title: props.item3Title, desc: props.item3Desc, icon: <Building2 className="w-6 h-6 text-amber-500" /> },
        ];
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{props.heading}</h2>
              {props.subheading && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">{props.subheading}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((it, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-red-300 transition-all">
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/80 w-fit mb-4">
                    {it.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{it.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    LecturerHighlightBlock: {
      fields: {
        name: { type: 'text', label: 'Nama Dosen & Gelar' },
        title: { type: 'text', label: 'Jabatan Akademik' },
        expertise: { type: 'text', label: 'Bidang Keahlian' },
        bio: { type: 'textarea', label: 'Profil Singkat' },
        scholarLink: { type: 'text', label: 'Tautan Google Scholar' },
        ...commonElementorFields,
      },
      defaultProps: {
        name: 'Prof. Dr. Ir. H. Hendra Wijaya, M.T., IPU',
        title: 'Guru Besar / Kepala Lab Artificial Intelligence',
        expertise: 'Artificial Intelligence & Autonomous Systems',
        bio: 'Menerbitkan lebih dari 45+ jurnal internasional bereputasi Scopus Q1/Q2 dan memegang 3 Hak Cipta Algoritma AI.',
        scholarLink: 'https://scholar.google.com',
        bgStyle: 'gradientDark',
        borderRadius: 'lg',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        return (
          <div className={`flex flex-col md:flex-row items-center gap-6 ${styleClass}`}>
            <div className="w-20 h-20 rounded-2xl bg-white/10 border-2 border-white/30 flex items-center justify-center shrink-0">
              <Users className="w-10 h-10 text-amber-300" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white border border-white/30">
                {props.expertise}
              </span>
              <h3 className="text-xl font-black mt-2">{props.name}</h3>
              <p className="text-xs opacity-80 mt-0.5">{props.title}</p>
              <p className="text-xs opacity-90 mt-2 leading-relaxed max-w-2xl">{props.bio}</p>
            </div>
            {props.scholarLink && (
              <a href={props.scholarLink} target="_blank" rel="noreferrer" className="shrink-0 px-4 py-2.5 bg-[#800020] hover:bg-[#9B2C2C] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-md">
                <span>Google Scholar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        );
      },
    },

    LabCardBlock: {
      fields: {
        labName: { type: 'text', label: 'Nama Laboratorium' },
        description: { type: 'textarea', label: 'Deskripsi Fasilitas' },
        headOfLab: { type: 'text', label: 'Kepala Lab' },
        capacity: { type: 'text', label: 'Kapasitas & Workstation' },
        equipmentTags: { type: 'text', label: 'Tag Peralatan (dipisah koma)' },
        ...commonElementorFields,
      },
      defaultProps: {
        labName: 'Laboratorium Kecerdasan Buatan & Big Data',
        description: 'Workstation High-End GPU Nvidia RTX, server cluster HPC, dan VR headset untuk riset sains komputasi.',
        headOfLab: 'Dr. Ahmad Fauzi, S.Kom., M.T.',
        capacity: '40 Workstation High Performance',
        equipmentTags: 'Nvidia RTX 4090, HPC Cluster, Oculus Quest 3, PyTorch Rig',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const tags = props.equipmentTags ? props.equipmentTags.split(',').map(t => t.trim()) : [];
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950 text-[#800020] dark:text-red-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{props.labName}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Kepala Lab: {props.headOfLab} • {props.capacity}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{props.description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  💻 {t}
                </span>
              ))}
            </div>
          </div>
        );
      },
    },

    RichTextBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Artikel / Informasi' },
        content: { type: 'textarea', label: 'Isi Teks Paragraf' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Standar Mutu & Visi Keunggulan Akademik FTI UPA',
        content: 'Fakultas Teknik & Informatika UPA secara konsisten memperbarui standar capaian pembelajaran lulusan (CPL) agar selaras dengan IEEE/ACM Curriculum Guidelines dan kebutuhan industri teknologi nasional dan internasional.',
        bgStyle: 'transparent',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={`max-w-4xl ${styleClass}`}>
            {props.heading && <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3">{props.heading}</h2>}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">{props.content}</p>
          </div>
        );
      },
    },

    EventScheduleBlock: {
      fields: {
        eventTitle: { type: 'text', label: 'Nama Agenda / Seminar' },
        date: { type: 'text', label: 'Tanggal' },
        time: { type: 'text', label: 'Waktu' },
        location: { type: 'text', label: 'Lokasi / Platform' },
        speaker: { type: 'text', label: 'Narasumber' },
        category: { type: 'text', label: 'Kategori' },
        ...commonElementorFields,
      },
      defaultProps: {
        eventTitle: 'International Guest Lecture: Generative AI in Software Architecture',
        date: '28 Oktober 2026',
        time: '09:00 - 12:00 WITA',
        location: 'Auditorium Gedung Rektorat & Zoom Live',
        speaker: 'Dr. Sarah Connor (Principal AI Researcher)',
        category: 'International Seminar',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${styleClass}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950 text-[#800020] dark:text-red-300 text-center shrink-0">
                <Calendar className="w-6 h-6 mx-auto" />
                <span className="text-[10px] font-bold block mt-1">{props.date}</span>
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                  {props.category}
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">{props.eventTitle}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  🎙️ {props.speaker} • 🕒 {props.time} • 📍 {props.location}
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-xs font-bold rounded-xl bg-[#800020] text-white hover:bg-[#9B2C2C] transition-colors shrink-0">
              Registrasi Seminar
            </button>
          </div>
        );
      },
    },

    TestimonialBlock: {
      fields: {
        quote: { type: 'textarea', label: 'Kutipan Testimoni' },
        authorName: { type: 'text', label: 'Nama Mahasiswa / Alumni' },
        batch: { type: 'text', label: 'Angkatan / Tahun Lulus' },
        currentPosition: { type: 'text', label: 'Pekerjaan / Perusahaan' },
        ...commonElementorFields,
      },
      defaultProps: {
        quote: 'Kurikulum berbasis proyek di FTI Universitas Patria Artha sangat membantu saya memahami arsitektur cloud enterprise. Sebelum lulus, saya sudah diterima bekerja!',
        authorName: 'Rizky Ramadhan, S.Kom.',
        batch: 'Alumni Angkatan 2022',
        currentPosition: 'Senior ML Engineer @ Tech Company',
        bgStyle: 'slate',
        borderRadius: 'lg',
        paddingY: 'md',
        paddingX: 'md',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={`relative ${styleClass}`}>
            <MessageSquare className="w-8 h-8 text-[#800020]/20 absolute top-4 right-4" />
            <p className="text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">"{props.quote}"</p>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#800020] text-white font-black flex items-center justify-center text-xs">
                {props.authorName ? props.authorName.charAt(0) : 'A'}
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">{props.authorName}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{props.currentPosition} • {props.batch}</p>
              </div>
            </div>
          </div>
        );
      },
    },

    AccordionFaqBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi FAQ' },
        q1: { type: 'text', label: 'Pertanyaan 1' },
        a1: { type: 'textarea', label: 'Jawaban 1' },
        q2: { type: 'text', label: 'Pertanyaan 2' },
        a2: { type: 'textarea', label: 'Jawaban 2' },
        q3: { type: 'text', label: 'Pertanyaan 3' },
        a3: { type: 'textarea', label: 'Jawaban 3' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Pertanyaan Umum (FAQ) Seputar Perkuliahan FTI UPA',
        q1: 'Bagaimana jalur seleksi dan biaya pendaftaran PMB FTI UPA?',
        a1: 'Seleksi dilakukan via jalur Prestasi Raport, SNBP, SNBT, dan Jalur Mandiri. Pendaftaran dapat dilakukan secara online melalui portal resmi PMB.',
        q2: 'Apakah FTI UPA menyediakan program beasiswa?',
        a2: 'Ya, tersedia Beasiswa Prestasi Akademik, Beasiswa KIP Kuliah, dan Beasiswa Ikatan Dinas Industri.',
        q3: 'Apakah lulusan FTI dibekali sertifikasi kompetensi?',
        a3: 'Setiap lulusan berkesempatan memperoleh Sertifikasi Mikrotik, Cisco CCNA, AWS Cloud, atau LSP Komputer.',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const faqs = [
          { q: props.q1, a: props.a1 },
          { q: props.q2, a: props.a2 },
          { q: props.q3, a: props.a3 },
        ].filter(f => f.q);

        return (
          <div className={styleClass}>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#800020]" />
              <span>{props.heading}</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-slate-900 dark:text-white">
                    <span>{f.q}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-500" />
                  </summary>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 pt-3">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        );
      },
    },

    ImageGalleryBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Galeri Foto' },
        layoutCols: {
          type: 'select', label: '📐 Jumlah Kolom',
          options: [
            { label: '3 Kolom (default)', value: '3' },
            { label: '2 Kolom', value: '2' },
            { label: '4 Kolom', value: '4' },
          ],
        },
        galleryStyle: {
          type: 'select', label: '🎨 Gaya Gallery',
          options: [
            { label: 'Grid Seragam', value: 'grid' },
            { label: 'Masonry (acak tinggi)', value: 'masonry' },
            { label: 'Highlighted (foto 1 besar)', value: 'highlighted' },
          ],
        },
        img1: makeImageField('📸 Foto 1') as any,
        img1Caption: { type: 'text', label: 'Keterangan Foto 1' },
        img2: makeImageField('📸 Foto 2') as any,
        img2Caption: { type: 'text', label: 'Keterangan Foto 2' },
        img3: makeImageField('📸 Foto 3') as any,
        img3Caption: { type: 'text', label: 'Keterangan Foto 3' },
        img4: makeImageField('📸 Foto 4 (opsional)') as any,
        img4Caption: { type: 'text', label: 'Keterangan Foto 4' },
        img5: makeImageField('📸 Foto 5 (opsional)') as any,
        img5Caption: { type: 'text', label: 'Keterangan Foto 5' },
        img6: makeImageField('📸 Foto 6 (opsional)') as any,
        img6Caption: { type: 'text', label: 'Keterangan Foto 6' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Galeri Fasilitas & Kegiatan Mahasiswa FTI UPA',
        img1: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
        img1Caption: 'Laboratorium Komputer High Performance HPC',
        img2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        img2Caption: 'Diskusi Kelompok Riset AI & Software Engineering',
        img3: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
        img3Caption: 'Workshop & Kuliah Umum Bersama Industri Tech',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const images = [
          { url: props.img1, cap: props.img1Caption },
          { url: props.img2, cap: props.img2Caption },
          { url: props.img3, cap: props.img3Caption },
        ];

        return (
          <div className={styleClass}>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[#800020]" />
              <span>{props.heading}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 relative">
                  <img src={img.url} alt={img.cap} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                  <div className="p-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-semibold">
                    {img.cap}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    VideoEmbedBlock: {
      fields: {
        title: { type: 'text', label: 'Judul Video' },
        videoUrl: { type: 'text', label: 'URL Embed Video YouTube / Vimeo' },
        caption: { type: 'text', label: 'Deskripsi Video' },
        ...commonElementorFields,
      },
      defaultProps: {
        title: 'Video Profil Resmi Fakultas Teknik & Informatika UPA',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'Saksikan tur fasilitas kampus, testimoni mahasiswa, dan cuplikan praktikum laboratorium.',
        bgStyle: 'slate',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-[#800020]" />
              <span>{props.title}</span>
            </h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-lg bg-black">
              <iframe
                src={props.videoUrl}
                title={props.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            {props.caption && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
                {props.caption}
              </p>
            )}
          </div>
        );
      },
    },

    SubMenuGridBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Grid Sub-Menu' },
        subheading: { type: 'text', label: 'Sub-judul' },
        item1Title: { type: 'text', label: 'Judul Item 1' },
        item1Desc: { type: 'text', label: 'Deskripsi 1' },
        item1Link: { type: 'text', label: 'Slug / Tautan 1' },
        item2Title: { type: 'text', label: 'Judul Item 2' },
        item2Desc: { type: 'text', label: 'Deskripsi 2' },
        item2Link: { type: 'text', label: 'Slug / Tautan 2' },
        item3Title: { type: 'text', label: 'Judul Item 3' },
        item3Desc: { type: 'text', label: 'Deskripsi 3' },
        item3Link: { type: 'text', label: 'Slug / Tautan 3' },
        item4Title: { type: 'text', label: 'Judul Item 4' },
        item4Desc: { type: 'text', label: 'Deskripsi 4' },
        item4Link: { type: 'text', label: 'Slug / Tautan 4' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Pilihan Menu & Halaman Terkait',
        subheading: 'Pilih halaman custom berikut untuk melihat informasi lebih detail',
        item1Title: 'Visi, Misi & Sasaran',
        item1Desc: 'Arah pembangunan dan standar mutu FTI UPA',
        item1Link: 'visi-misi',
        item2Title: 'Struktur Organisasi',
        item2Desc: 'Susunan Dekanat dan pimpinan fakultas',
        item2Link: 'organisasi',
        item3Title: 'Program Studi S1',
        item3Desc: 'Informatika, Elektro, dan Mesin',
        item3Link: 'prodi',
        item4Title: 'Direktori Dosen',
        item4Desc: 'Profil dosen pengajar dan staf',
        item4Link: 'dosen',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const items = [
          { title: props.item1Title, desc: props.item1Desc, link: props.item1Link },
          { title: props.item2Title, desc: props.item2Desc, link: props.item2Link },
          { title: props.item3Title, desc: props.item3Desc, link: props.item3Link },
          { title: props.item4Title, desc: props.item4Desc, link: props.item4Link },
        ].filter(it => it.title);

        return (
          <div className={styleClass}>
            {props.heading && (
              <div className="text-center max-w-xl mx-auto mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
                {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#800020] transition-all flex items-start gap-3 group">
                  <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Grid className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{it.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">{it.desc}</p>
                    {it.link && (
                      <span className="inline-block mt-2 text-[10px] font-mono text-[#800020] dark:text-red-400 font-bold">
                        → /halaman/{it.link}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    AcademicProgramBlock: {
      fields: {
        programTitle: { type: 'text', label: 'Nama Program Studi' },
        degree: { type: 'text', label: 'Gelar Kelulusan' },
        accreditation: { type: 'text', label: 'Status Akreditasi' },
        totalSks: { type: 'text', label: 'Total SKS & Masa Studi' },
        headOfProdi: { type: 'text', label: 'Ketua Program Studi' },
        vision: { type: 'textarea', label: 'Visi Program Studi' },
        careerProspects: { type: 'textarea', label: 'Peluang Karir Lulusan' },
        ctaText: { type: 'text', label: 'Teks Tombol Aksi' },
        ...commonElementorFields,
      },
      defaultProps: {
        programTitle: 'Teknik Informatika (S1)',
        degree: 'Sarjana Komputer (S.Kom)',
        accreditation: 'A (Unggul LAM INFOKOM)',
        totalSks: '144 SKS (8 Semester)',
        headOfProdi: 'Dr. Rina Anggraini, S.Kom., M.T.',
        vision: 'Menjadi Program Studi Informatika unggulan dalam bidang Artificial Intelligence dan Software Engineering di Indonesia.',
        careerProspects: 'AI Specialist, Software Engineer, Cybersecurity Analyst, Data Scientist, Cloud Architect',
        ctaText: 'Daftar SPMB Prodi Informatika →',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950 text-[#800020] dark:text-red-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.programTitle}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{props.degree} • {props.totalSks}</p>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                ✨ Akreditasi: {props.accreditation}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Visi Prodi & Kaprodi</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{props.vision}</p>
                <p className="mt-2 text-[11px] text-slate-500 font-bold">Kaprodi: {props.headOfProdi}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  <span>Peluang Karir Alumni</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{props.careerProspects}</p>
              </div>
            </div>

            {props.ctaText && (
              <div className="mt-5 text-right">
                <button className="px-5 py-2.5 rounded-xl bg-[#800020] hover:bg-[#9B2C2C] text-white font-extrabold text-xs shadow-md transition-all">
                  {props.ctaText}
                </button>
              </div>
            )}
          </div>
        );
      },
    },

    FacultyOrgChartBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Struktur Organisasi' },
        subheading: { type: 'text', label: 'Sub-judul' },
        leader1Name: { type: 'text', label: 'Nama Pimpinan 1' },
        leader1Title: { type: 'text', label: 'Jabatan 1' },
        leader1Role: { type: 'text', label: 'Keterangan 1' },
        leader2Name: { type: 'text', label: 'Nama Pimpinan 2' },
        leader2Title: { type: 'text', label: 'Jabatan 2' },
        leader2Role: { type: 'text', label: 'Keterangan 2' },
        leader3Name: { type: 'text', label: 'Nama Pimpinan 3' },
        leader3Title: { type: 'text', label: 'Jabatan 3' },
        leader3Role: { type: 'text', label: 'Keterangan 3' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Pimpinan Dekanat FTI UPA',
        subheading: 'Susun struktur organisasi dan pejabat pengelola fakultas',
        leader1Name: 'Dr. Eng. Ir. Herman Pratama, S.T., M.T.',
        leader1Title: 'Dekan FTI UPA',
        leader1Role: 'S3 Kyushu University Japan • Pakar AI Systems',
        leader2Name: 'Ir. Siti Rahmawati, S.Kom., M.Kom.',
        leader2Title: 'Wakil Dekan I (Akademik & Riset)',
        leader2Role: 'S2 ITB Bandung • Pakar Software Architecture',
        leader3Name: 'Budi Santoso, S.T., M.Eng.',
        leader3Title: 'Wakil Dekan II (Kemahasiswaan)',
        leader3Role: 'S2 UGM Yogyakarta • Pakar Otomasi Industri',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const leaders = [
          { name: props.leader1Name, title: props.leader1Title, role: props.leader1Role, highlight: true },
          { name: props.leader2Name, title: props.leader2Title, role: props.leader2Role },
          { name: props.leader3Name, title: props.leader3Title, role: props.leader3Role },
        ].filter(l => l.name);

        return (
          <div className={styleClass}>
            {props.heading && (
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{props.heading}</h3>
                {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{props.subheading}</p>}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaders.map((l, idx) => (
                <div key={idx} className={`p-5 rounded-2xl border text-center transition-all ${
                  l.highlight 
                    ? 'bg-red-50/70 dark:bg-slate-800 border-[#800020] shadow-md' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-[#800020] text-white flex items-center justify-center mx-auto mb-3 text-lg font-black shadow-md">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{l.name}</h4>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300 mt-1">
                    {l.title}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{l.role}</p>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    ContactMapBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Kontak' },
        subheading: { type: 'text', label: 'Sub-judul Seksi' },
        address: { type: 'textarea', label: 'Alamat Kampus' },
        addressSub: { type: 'text', label: 'Sub-alamat / Gedung' },
        email: { type: 'text', label: 'Email Resmi' },
        phone: { type: 'text', label: 'Telepon / WhatsApp' },
        operatingHoursWeekday: { type: 'text', label: 'Jam Layanan Senin - Jumat' },
        operatingHoursSaturday: { type: 'text', label: 'Jam Layanan Sabtu' },
        mapEmbedUrl: { type: 'textarea', label: '🗺️ Google Maps Embed URL / iFrame src' },
        directMapUrl: { type: 'text', label: '🔗 Tautan Direct Petunjuk Arah' },
        gpsCoords: { type: 'text', label: '📍 Koordinat GPS' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Kontak & Lokasi Kampus FTI UPA',
        subheading: 'Punya pertanyaan seputar prodi, kurikulum, atau PMB? Kunjungi sekretariat atau hubungi kami',
        address: 'Jl. Tun Abdul Razak, (Terusan Jl. Hertasning Baru - Makassar), Kabupaten Gowa (SUL-SEL)',
        addressSub: 'Gedung Utama FTI Universitas Patria Artha',
        email: 'info@patria-artha.ac.id',
        phone: '(0411) 898-7654 / WA: 0812-3456-7890',
        operatingHoursWeekday: 'Senin - Jum\'at: 08:00 - 16:00 WITA',
        operatingHoursSaturday: 'Sabtu: 08:00 - 14:00 WITA',
        mapEmbedUrl: 'https://maps.google.com/maps?q=-5.1884872,119.4764326&hl=id&z=16&output=embed',
        directMapUrl: 'https://maps.google.com/?q=-5.1884872,119.4764326',
        gpsCoords: '-5.1884872, 119.4764326',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        const getIframeSrc = (raw?: string) => {
          if (!raw || raw.trim() === '') {
            return 'https://maps.google.com/maps?q=-5.1884872,119.4764326&hl=id&z=16&output=embed';
          }
          let str = raw.trim();

          // Extract src attribute if full <iframe> tag was pasted
          if (str.includes('src=')) {
            const m = str.match(/src=["']([^"']+)["']/);
            if (m && m[1]) str = m[1];
          }

          // If it's already a valid embed URL with pb= or output=embed, use it directly
          if (str.includes('output=embed') || (str.includes('google.com/maps/embed') && str.includes('pb='))) {
            return str;
          }

          // Extract @lat,lng coordinates if present in Google Maps share URL
          const coordMatch = str.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
          if (coordMatch) {
            return `https://maps.google.com/maps?q=${coordMatch[1]},${coordMatch[2]}&hl=id&z=16&output=embed`;
          }

          // Extract direct lat,lng numbers
          const latLngDirect = str.match(/^(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)$/);
          if (latLngDirect) {
            return `https://maps.google.com/maps?q=${latLngDirect[1]},${latLngDirect[2]}&hl=id&z=16&output=embed`;
          }

          // Safe fallback for standard Google Maps web URLs
          if (str.includes('google.com') || str.includes('goo.gl')) {
            return 'https://maps.google.com/maps?q=-5.1884872,119.4764326&hl=id&z=16&output=embed';
          }

          return `https://maps.google.com/maps?q=${encodeURIComponent(str)}&hl=id&z=16&output=embed`;
        };

        const embedSrc = getIframeSrc(props.mapEmbedUrl || (props as any).mapUrl);
        const mapDirectLink = props.directMapUrl || (props as any).mapUrl || 'https://maps.google.com/?q=-5.1884872,119.4764326';

        return (
          <div className={styleClass}>
            {props.heading && (
              <div className="mb-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/80 text-[#9B2C2C] dark:text-red-400 text-xs font-black uppercase tracking-wider mb-2 border border-red-200 dark:border-red-900">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Sekretariat Akademik FTI UPA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {props.heading}
                </h3>
                {props.subheading && <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">{props.subheading}</p>}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Contact Details Cards (Light Style) */}
              <div className="lg:col-span-5 space-y-3.5">
                {/* Address Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950 text-[#9B2C2C] dark:text-red-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#9B2C2C] dark:text-red-400 block uppercase tracking-wider">Alamat Kampus</span>
                      <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">{props.address}</h4>
                      {props.addressSub && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{props.addressSub}</p>}
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-amber-800 dark:text-amber-300 block uppercase tracking-wider">Email Resmi</span>
                      <a href={`mailto:${props.email}`} className="font-extrabold text-xs text-[#9B2C2C] dark:text-red-400 mt-0.5 hover:underline block font-mono">{props.email}</a>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Layanan respon cepat sekretariat akademik</p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-black text-blue-800 dark:text-blue-300 block uppercase tracking-wider mb-1">Jam Operasional Layanan</span>
                      <div className="space-y-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-700/60">
                          <span>{props.operatingHoursWeekday || props.operatingHours || 'Senin - Jum\'at'}</span>
                          <span className="font-mono text-[#9B2C2C] dark:text-red-400 font-extrabold">08:00 - 16:00 WITA</span>
                        </div>
                        {props.operatingHoursSaturday && (
                          <div className="flex items-center justify-between pt-0.5">
                            <span>Sabtu</span>
                            <span className="font-mono text-[#9B2C2C] dark:text-red-400 font-extrabold">{props.operatingHoursSaturday}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone & Directions Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">Telepon & WhatsApp</span>
                      <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100 mt-0.5 font-mono">{props.phone}</h4>
                    </div>
                  </div>

                  {mapDirectLink && (
                    <a
                      href={mapDirectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs flex items-center justify-between shadow-md transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Petunjuk Arah Google Maps</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Google Maps Interactive iFrame */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <div className="flex-1 min-h-[380px] rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 p-3 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  {/* Map Header */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2.5 text-white bg-slate-900 rounded-2xl mb-3 z-10 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-black tracking-tight text-slate-100">Peta Lokasi Kampus Universitas Patria Artha</span>
                    </div>
                    <a
                      href={mapDirectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-bold text-amber-300 hover:underline flex items-center gap-1 transition-colors"
                    >
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Google Map iFrame */}
                  <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 min-h-[300px]">
                    <iframe
                      src={embedSrc}
                      title="Google Maps Location FTI UPA"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '300px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>

                  {/* Map Footer Bar */}
                  <div className="mt-3 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-[10px] text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2 border border-slate-200 dark:border-slate-800 font-medium">
                    {props.gpsCoords && (
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">Koordinat GPS: {props.gpsCoords}</span>
                    )}
                    <span className="font-bold text-[#9B2C2C] dark:text-red-400">Jl. Tun Abdul Razak, Kab. Gowa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    CurriculumTableBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Kurikulum' },
        prodiName: { type: 'text', label: 'Nama Program Studi' },
        semester1List: { type: 'textarea', label: 'Daftar Matakuliah Semester 1' },
        semester2List: { type: 'textarea', label: 'Daftar Matakuliah Semester 2' },
        totalSksTarget: { type: 'text', label: 'Target Total SKS' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Kurikulum & Matakuliah Unggulan',
        prodiName: 'Teknik Informatika (S1)',
        semester1List: 'Algoritma & Pemrograman (3 SKS), Matematika Diskrit (3 SKS), Pengantar TI (2 SKS), Kalkulus I (3 SKS)',
        semester2List: 'Struktur Data & Algoritma (3 SKS), Pemrograman Berbasis Objek (3 SKS), Sistem Operasi (3 SKS), Basis Data (3 SKS)',
        totalSksTarget: '144 SKS Lulus',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);

        return (
          <div className={styleClass}>
            <div className="flex items-center justify-between gap-3 mb-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#800020]" />
                <span>{props.heading}</span>
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                {props.prodiName} • {props.totalSksTarget}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h4 className="font-extrabold text-sm text-[#800020] dark:text-red-400 mb-2">📌 Semester 1 (Matakuliah Dasar)</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{props.semester1List}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h4 className="font-extrabold text-sm text-[#800020] dark:text-red-400 mb-2">📌 Semester 2 (Matakuliah Inti)</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{props.semester2List}</p>
              </div>
            </div>
          </div>
        );
      },
    },

    NewsListBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Berita' },
        subheading: { type: 'text', label: 'Sub-judul' },
        news1Title: { type: 'text', label: 'Judul Berita 1' },
        news1Category: { type: 'text', label: 'Kategori 1' },
        news1Date: { type: 'text', label: 'Tanggal 1' },
        news2Title: { type: 'text', label: 'Judul Berita 2' },
        news2Category: { type: 'text', label: 'Kategori 2' },
        news2Date: { type: 'text', label: 'Tanggal 2' },
        news3Title: { type: 'text', label: 'Judul Berita 3' },
        news3Category: { type: 'text', label: 'Kategori 3' },
        news3Date: { type: 'text', label: 'Tanggal 3' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Berita & Pengumuman Terbaru',
        subheading: 'Warta terkini kegiatan perkuliahan, riset, dan prestasi mahasiswa',
        news1Title: 'Tim Robotika FTI UPA Raih Juara 1 Kontes Robot Nasional 2026',
        news1Category: 'PRESTASI',
        news1Date: '10 Mei 2026',
        news2Title: 'Kuliah Umum AI bersama Senior Cloud Architect Google Cloud',
        news2Category: 'SEMINAR',
        news2Date: '02 Mei 2026',
        news3Title: 'Jadwal Pendaftaran Wisuda & Pembekalan Lulusan Semester Genap',
        news3Category: 'PENGUMUMAN',
        news3Date: '28 April 2026',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const news = [
          { title: props.news1Title, cat: props.news1Category, date: props.news1Date },
          { title: props.news2Title, cat: props.news2Category, date: props.news2Date },
          { title: props.news3Title, cat: props.news3Category, date: props.news3Date },
        ].filter(n => n.title);

        return (
          <div className={styleClass}>
            {props.heading && (
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-[#800020]" />
                  <span>{props.heading}</span>
                </h3>
                {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{props.subheading}</p>}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {news.map((n, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#800020] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300">
                        {n.cat}
                      </span>
                      <span className="text-[10px] text-slate-400">{n.date}</span>
                    </div>
                    <h4 className="font-extrabold text-xs text-slate-900 dark:text-white line-clamp-2 leading-snug">{n.title}</h4>
                  </div>
                  <span className="mt-4 text-[11px] font-bold text-[#800020] dark:text-red-400 flex items-center gap-1">
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    LecturerGridBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Direktori Dosen' },
        subheading: { type: 'text', label: 'Sub-judul' },
        dosen1Name: { type: 'text', label: 'Nama Dosen 1' },
        dosen1Title: { type: 'text', label: 'Jabatan 1' },
        dosen1Expertise: { type: 'text', label: 'Keahlian 1' },
        dosen2Name: { type: 'text', label: 'Nama Dosen 2' },
        dosen2Title: { type: 'text', label: 'Jabatan 2' },
        dosen2Expertise: { type: 'text', label: 'Keahlian 2' },
        dosen3Name: { type: 'text', label: 'Nama Dosen 3' },
        dosen3Title: { type: 'text', label: 'Jabatan 3' },
        dosen3Expertise: { type: 'text', label: 'Keahlian 3' },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: 'Direktori Dosen FTI UPA',
        subheading: 'Para akademisi dan peneliti di Fakultas Teknik & Informatika',
        dosen1Name: 'Prof. Dr. Ir. H. Hendra Wijaya, M.T.',
        dosen1Title: 'Guru Besar / Kepala Lab AI',
        dosen1Expertise: 'Artificial Intelligence & Machine Learning',
        dosen2Name: 'Dr. Rina Anggraini, S.Kom., M.T.',
        dosen2Title: 'Lektor Kepala / Kaprodi Informatika',
        dosen2Expertise: 'Cyber Security & Cryptography',
        dosen3Name: 'Ir. Muhammad Aris, S.T., M.Eng.',
        dosen3Title: 'Lektor / Kaprodi Elektro',
        dosen3Expertise: 'IoT & Microcontroller Systems',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => {
        const styleClass = getAdvancedStyleClasses(props);
        const dosens = [
          { name: props.dosen1Name, title: props.dosen1Title, exp: props.dosen1Expertise },
          { name: props.dosen2Name, title: props.dosen2Title, exp: props.dosen2Expertise },
          { name: props.dosen3Name, title: props.dosen3Title, exp: props.dosen3Expertise },
        ].filter(d => d.name);

        return (
          <div className={styleClass}>
            {props.heading && (
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#800020]" />
                  <span>{props.heading}</span>
                </h3>
                {props.subheading && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{props.subheading}</p>}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dosens.map((d, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#800020] transition-all flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">{d.name}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{d.title}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300">
                      {d.exp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    DbNewsBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Berita DB' },
        subheading: { type: 'text', label: 'Sub-judul' },
        limit: {
          type: 'select',
          label: 'Batas Maksimal Data (Fallback Non-pagination)',
          options: [
            { label: '3 Berita Terbaru', value: '3' },
            { label: '6 Berita Terbaru', value: '6' },
            { label: '9 Berita Terbaru', value: '9' },
          ],
        },
        categoryFilter: {
          type: 'select',
          label: 'Filter Kategori',
          options: [
            { label: 'Semua Kategori', value: 'Semua' },
            { label: 'Berita', value: 'Berita' },
            { label: 'Pengumuman', value: 'Pengumuman' },
            { label: 'Prestasi', value: 'Prestasi' },
            { label: 'Seminar', value: 'Seminar' },
          ],
        },
        showAuthor: {
          type: 'select',
          label: '👁️ Tampilkan Penulis',
          options: [
            { label: 'Ya', value: 'true' },
            { label: 'Sembunyikan', value: 'false' },
          ],
        },
        ...commonPaginationFields,
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '📰 Berita & Pengumuman (Database)',
        subheading: 'Data terhubung langsung ke Database Express & Prisma SQLite',
        limit: '3',
        categoryFilter: 'Semua',
        showAuthor: 'true',
        enablePagination: 'true',
        itemsPerPage: '3',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbNewsBlockRender {...props} />,
    },

    DbNewsDetailBlock: {
      fields: {
        ...commonElementorFields,
      },
      defaultProps: {
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbNewsDetailBlockRender {...props} />,
    },

    DbTestimonialCarouselBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Testimoni' },
        subheading: { type: 'text', label: 'Sub-judul Seksi' },
        autoPlay: {
          type: 'select',
          label: '▶ Auto Slideshow',
          options: [
            { label: 'Aktif (Otomatis)', value: 'true' },
            { label: 'Non-aktif (Manual)', value: 'false' },
          ],
        },
        autoPlayIntervalMs: {
          type: 'select',
          label: '⏱ Durasi Per Slide',
          options: [
            { label: '3 Detik', value: '3000' },
            { label: '4 Detik', value: '4000' },
            { label: '6 Detik', value: '6000' },
            { label: '8 Detik', value: '8000' },
          ],
        },
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '💬 Testimoni Alumni & Mahasiswa (Database Live)',
        subheading: 'Kesan dan pesan para alumni yang telah berkarir di berbagai industri global.',
        autoPlay: 'true',
        autoPlayIntervalMs: '4000',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbTestimonialCarouselBlockRender {...props} />,
    },


    DbStudyProgramBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Program Studi' },
        subheading: { type: 'text', label: 'Sub-judul' },
        ...commonPaginationFields,
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '🎓 Program Studi S1 / D3 (Database)',
        subheading: 'Daftar Program Studi resmi terdaftar di Database FTI UPA',
        enablePagination: 'true',
        itemsPerPage: '2',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbStudyProgramBlockRender {...props} />,
    },

    DbCurriculumBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Kurikulum' },
        subheading: { type: 'text', label: 'Sub-judul' },
        prodiFilter: {
          type: 'select',
          label: '🎓 Filter Program Studi',
          options: [
            { label: '🌐 Semua Program Studi (Bisa Pilih Tab)', value: 'ALL' },
            { label: '💻 S1 Teknik Informatika', value: 'Teknik Informatika' },
            { label: '📊 S1 Sistem Informasi', value: 'Sistem Informasi' },
            { label: '⚡ S1 Teknik Elektro', value: 'Teknik Elektro' },
            { label: '⚙️ S1 Teknik Mesin', value: 'Teknik Mesin' },
            { label: '💻 S1 Rekayasa Perangkat Lunak', value: 'Rekayasa Perangkat Lunak' },
          ],
        },
        showProdiTabs: {
          type: 'select',
          label: '🎛️ Mode Tampilan Tab Filter Prodi',
          options: [
            { label: '🔒 Sembunyikan Tab (Tampilkan Khusus Prodi Yang Difilter Saja)', value: 'false' },
            { label: '👁️ Tampilkan Bar Tab Filter Semua Prodi', value: 'true' },
          ],
        },
        ...commonPaginationFields,
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '📚 Kurikulum & Mata Kuliah (Database)',
        subheading: 'Daftar mata kuliah dan bobot SKS terdaftar di Database',
        prodiFilter: 'Teknik Informatika',
        showProdiTabs: 'false',
        enablePagination: 'true',
        itemsPerPage: '5',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbCurriculumBlockRender {...props} />,
    },

    DbLecturerBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Seksi Dosen' },
        subheading: { type: 'text', label: 'Sub-judul' },
        cardStyle: {
          type: 'select',
          label: 'Gaya Tampilan Kartu Dosen',
          options: [
            { label: '📇 Classic Grid (Avatar & Keahlian)', value: 'grid-classic' },
            { label: '🖼️ Modern Portrait (Foto Banner & Gold Badge)', value: 'grid-modern' },
            { label: '🏛️ Premium Maroon (Red Glass & Gold Accent)', value: 'grid-maroon' },
            { label: '📜 Compact List (Baris Ramping Horizontal)', value: 'compact-list' },
            { label: '🌟 Centered Avatar (Profil Bulat Besar)', value: 'avatar-badge' },
          ],
        },
        limit: {
          type: 'select',
          label: 'Batas Jumlah Dosen (Fallback Non-pagination)',
          options: [
            { label: '3 Dosen', value: '3' },
            { label: '6 Dosen', value: '6' },
            { label: '12 Dosen', value: '12' },
          ],
        },
        ...commonPaginationFields,
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '👥 Direktori Dosen & Peneliti (Database)',
        subheading: 'Profil para dosen dan akademisi FTI terdaftar di Database',
        cardStyle: 'grid-classic',
        limit: '6',
        enablePagination: 'true',
        itemsPerPage: '6',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbLecturerBlockRender {...props} />,
    },

    DbAcademicCalendarBlock: {
      fields: {
        heading: { type: 'text', label: 'Judul Kalender Akademik' },
        subheading: { type: 'text', label: 'Sub-judul' },
        ...commonPaginationFields,
        ...commonElementorFields,
      },
      defaultProps: {
        heading: '📅 Kalender Akademik & Agenda (Database)',
        subheading: 'Jadwal kegiatan akademik resmi dari Database FTI UPA',
        enablePagination: 'true',
        itemsPerPage: '5',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
      render: (props) => <DbAcademicCalendarBlockRender {...props} />,
    },

    // ===== ⚡ N8N-INSPIRED BLOCKS =====

    DarkHeroBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema (default: Light)',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        badge: { type: 'text', label: '🏷️ Teks Badge (opsional)' },
        title: { type: 'text', label: 'Judul Utama' },
        titleHighlight: { type: 'text', label: 'Kata yang Di-highlight (gradient)' },
        description: { type: 'textarea', label: 'Deskripsi' },
        primaryCtaLabel: { type: 'text', label: 'Teks Tombol Utama' },
        primaryCtaHref: { type: 'text', label: 'Link Tombol Utama' },
        secondaryCtaLabel: { type: 'text', label: 'Teks Tombol Sekunder (opsional)' },
        secondaryCtaHref: { type: 'text', label: 'Link Tombol Sekunder' },
        accentColor: {
          type: 'select', label: '🎨 Warna Aksen',
          options: [
            { label: 'Oranye (n8n style)', value: 'orange' },
            { label: 'Biru', value: 'blue' },
            { label: 'Hijau', value: 'green' },
            { label: 'Ungu', value: 'purple' },
            { label: 'Merah Kampus', value: 'red' },
          ],
        },
        showNodes: {
          type: 'select', label: 'Tampilkan Dekorasi Node',
          options: [{ label: 'Ya', value: 'true' }, { label: 'Tidak', value: 'false' }],
        },
      },
      defaultProps: {
        theme: 'light',
        badge: 'Universitas Patria Artha',
        title: 'Teknologi Masa Depan',
        titleHighlight: 'Dimulai di Sini',
        description: 'Fakultas Teknik dan Informatika UPA menyiapkan generasi engineer dan data scientist yang siap menghadapi era AI, Cloud, dan Cybersecurity.',
        primaryCtaLabel: 'Daftar Sekarang',
        primaryCtaHref: '#',
        secondaryCtaLabel: 'Lihat Program Studi',
        secondaryCtaHref: '#',
        accentColor: 'orange',
        showNodes: 'true',
      },
      render: (props) => (
        <DarkHero
          theme={props.theme}
          badge={props.badge}
          title={props.title}
          titleHighlight={props.titleHighlight}
          description={props.description}
          primaryCtaLabel={props.primaryCtaLabel}
          primaryCtaHref={props.primaryCtaHref}
          secondaryCtaLabel={props.secondaryCtaLabel}
          secondaryCtaHref={props.secondaryCtaHref}
          accentColor={props.accentColor}
          showNodes={props.showNodes !== 'false'}
        />
      ),
    },

    IntegrationMarqueeBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        heading: { type: 'text', label: 'Judul Section' },
        subheading: { type: 'textarea', label: 'Sub-judul' },
        speed: {
          type: 'select', label: '⏩ Kecepatan Scroll',
          options: [
            { label: 'Lambat', value: 'slow' },
            { label: 'Sedang', value: 'medium' },
            { label: 'Cepat', value: 'fast' },
          ],
        },
        integrations: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.name || `Partner ${(i || 0) + 1}`,
          arrayFields: {
            name: { type: 'text', label: 'Nama Mitra/Teknologi' },
            icon: { type: 'text', label: 'Emoji Icon (mis: 🏛️, ☁️, 🔍)' },
          },
        },
      },
      defaultProps: {
        theme: 'light',
        heading: 'Terhubung dengan Ekosistem Terpercaya',
        subheading: 'Kampus kami bermitra dengan berbagai institusi, industri, dan platform teknologi terkemuka.',
        speed: 'medium',
        integrations: [
          { name: 'Kemendikbud', icon: '🏛️' },
          { name: 'BAN-PT', icon: '✅' },
          { name: 'Microsoft', icon: '🪟' },
          { name: 'Google', icon: '🔍' },
          { name: 'GitHub', icon: '🐙' },
          { name: 'AWS', icon: '☁️' },
          { name: 'Cisco', icon: '🌐' },
          { name: 'Oracle', icon: '🔴' },
        ],
      },
      render: (props) => (
        <IntegrationMarquee
          theme={props.theme}
          heading={props.heading}
          subheading={props.subheading}
          speed={props.speed}
          integrations={props.integrations}
        />
      ),
    },

    FeatureTabsBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        layout: {
          type: 'select', label: '📐 Layout Tab',
          options: [
            { label: 'Kiri (Sidebar tabs)', value: 'left-tabs' },
            { label: 'Atas (Top tabs)', value: 'top-tabs' },
          ],
        },
        heading: { type: 'text', label: 'Judul Section' },
        subheading: { type: 'textarea', label: 'Sub-judul' },
        tabs: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.title || `Tab ${(i || 0) + 1}`,
          arrayFields: {
            icon: { type: 'text', label: 'Emoji Icon Tab' },
            title: { type: 'text', label: 'Judul Tab' },
            description: { type: 'textarea', label: 'Konten Tab' },
            badge: { type: 'text', label: 'Badge (opsional, mis: S1, Riset)' },
          },
        },
      },
      defaultProps: {
        theme: 'light',
        layout: 'left-tabs',
        heading: 'Apa yang Bisa Kamu Capai?',
        subheading: 'Temukan berbagai program dan kesempatan yang kami tawarkan untuk masa depanmu.',
        tabs: [
          { icon: '🎓', title: 'Program Sarjana', description: 'Program S1 dirancang untuk mempersiapkan lulusan kompeten di bidang teknik dengan kurikulum berbasis industri dan penelitian terkini.', badge: 'S1' },
          { icon: '🔬', title: 'Penelitian & Inovasi', description: 'Laboratorium penelitian modern mendukung riset mahasiswa dan dosen dalam menghasilkan karya ilmiah bermutu tinggi.', badge: 'Riset' },
          { icon: '🤝', title: 'Kerjasama Industri', description: 'Jaringan mitra industri luas membuka peluang magang, proyek kolaborasi, dan rekrutmen langsung bagi lulusan terbaik kami.', badge: 'Mitra' },
          { icon: '🌍', title: 'Pengabdian Masyarakat', description: 'Program KKN memberikan dampak nyata melalui teknologi dan keahlian teknik.', badge: 'KKN' },
        ],
      },
      render: (props) => (
        <FeatureTabs
          theme={props.theme}
          layout={props.layout}
          heading={props.heading}
          subheading={props.subheading}
          tabs={props.tabs}
        />
      ),
    },

    GradientTileGridBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        heading: { type: 'text', label: 'Judul Section' },
        subheading: { type: 'textarea', label: 'Sub-judul' },
        columns: {
          type: 'select', label: 'Jumlah Kolom',
          options: [{ label: '2 Kolom', value: '2' }, { label: '3 Kolom', value: '3' }],
        },
        tiles: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.title || `Tile ${(i || 0) + 1}`,
          arrayFields: {
            icon: { type: 'text', label: 'Emoji Icon' },
            title: { type: 'text', label: 'Judul' },
            description: { type: 'textarea', label: 'Deskripsi' },
            color: {
              type: 'select', label: 'Warna Gradient',
              options: [
                { label: 'Oranye', value: 'orange' },
                { label: 'Ungu', value: 'purple' },
                { label: 'Biru', value: 'blue' },
                { label: 'Hijau', value: 'green' },
                { label: 'Merah', value: 'red' },
                { label: 'Default (Abu)', value: 'default' },
              ],
            },
          },
        },
      },
      defaultProps: {
        theme: 'light',
        heading: 'Keunggulan Kami',
        subheading: 'Kami berkomitmen memberikan pengalaman akademik terbaik melalui teknologi dan inovasi.',
        columns: '3',
        tiles: [
          { icon: '🔒', title: 'Keamanan Data', description: 'Sistem pengelolaan data akademik dengan enkripsi tingkat tinggi.', color: 'blue' },
          { icon: '⚡', title: 'Kinerja Tinggi', description: 'Platform digital yang responsif dan cepat untuk akses informasi akademik kapan saja.', color: 'orange' },
          { icon: '🤝', title: 'Kolaborasi Tim', description: 'Fitur kolaborasi real-time antara mahasiswa, dosen, dan staf dalam satu ekosistem.', color: 'green' },
          { icon: '📊', title: 'Analitik Cerdas', description: 'Dashboard untuk memantau perkembangan akademik dan statistik kampus secara real-time.', color: 'purple' },
          { icon: '🌐', title: 'Aksesibilitas Global', description: 'Koneksi dengan jaringan internasional untuk mendukung mobilitas akademik.', color: 'red' },
          { icon: '🎯', title: 'Pembelajaran Adaptif', description: 'Kurikulum yang dirancang adaptif dengan kebutuhan industri terkini.', color: 'default' },
        ],
      },
      render: (props) => (
        <GradientTileGrid
          theme={props.theme}
          heading={props.heading}
          subheading={props.subheading}
          columns={props.columns === '2' ? 2 : 3}
          tiles={props.tiles}
        />
      ),
    },

    MetricsCounterBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        heading: { type: 'text', label: 'Judul Section (opsional)' },
        subheading: { type: 'text', label: 'Sub-judul (opsional)' },
        animateOnScroll: {
          type: 'select', label: '🎬 Animasi Count-Up saat Scroll',
          options: [{ label: 'Ya (direkomendasikan)', value: 'true' }, { label: 'Tidak', value: 'false' }],
        },
        metrics: {
          type: 'array',
          getItemSummary: (item: any, i: number) => item.label || `Metrik ${(i || 0) + 1}`,
          arrayFields: {
            value: { type: 'number', label: 'Nilai Angka' },
            prefix: { type: 'text', label: 'Prefix (mis: Rp, ~)' },
            suffix: { type: 'text', label: 'Suffix (mis: +, %, rb)' },
            label: { type: 'text', label: 'Label Metrik' },
            description: { type: 'text', label: 'Keterangan Kecil (opsional)' },
          },
        },
      },
      defaultProps: {
        theme: 'light',
        heading: '',
        subheading: '',
        animateOnScroll: 'true',
        metrics: [
          { value: 5000, prefix: '', suffix: '+', label: 'Mahasiswa Aktif', description: 'Terdaftar semester ini' },
          { value: 98, prefix: '', suffix: '%', label: 'Tingkat Kelulusan', description: 'Rata-rata 4 tahun terakhir' },
          { value: 150, prefix: '', suffix: '+', label: 'Dosen Berpengalaman', description: 'S2 dan S3 aktif' },
          { value: 25, prefix: '', suffix: '+', label: 'Tahun Berdiri', description: 'Melayani dunia pendidikan' },
        ],
      },
      render: (props) => (
        <MetricsCounter
          theme={props.theme}
          heading={props.heading || undefined}
          subheading={props.subheading || undefined}
          animateOnScroll={props.animateOnScroll !== 'false'}
          metrics={props.metrics?.map(m => ({
            value: Number(m.value) || 0,
            prefix: m.prefix || undefined,
            suffix: m.suffix || undefined,
            label: m.label,
            description: m.description || undefined,
          }))}
        />
      ),
    },

    DarkCtaBlock: {
      fields: {
        theme: {
          type: 'select', label: '🌗 Tema',
          options: [{ label: 'Light (Terang)', value: 'light' }, { label: 'Dark (Gelap)', value: 'dark' }],
        },
        title: { type: 'text', label: 'Judul CTA (besar)' },
        description: { type: 'textarea', label: 'Deskripsi (opsional)' },
        primaryCtaLabel: { type: 'text', label: 'Teks Tombol Utama' },
        primaryCtaHref: { type: 'text', label: 'Link Tombol Utama' },
        secondaryCtaLabel: { type: 'text', label: 'Teks Tombol Sekunder (opsional)' },
        secondaryCtaHref: { type: 'text', label: 'Link Tombol Sekunder' },
        accentColor: {
          type: 'select', label: '🎨 Warna Gradient Radial',
          options: [
            { label: 'Merah-Oranye (default kampus)', value: 'red-orange' },
            { label: 'Biru-Ungu', value: 'blue-purple' },
            { label: 'Hijau-Teal', value: 'green-teal' },
          ],
        },
        size: {
          type: 'select', label: '📐 Ukuran Section',
          options: [{ label: 'Full (besar)', value: 'default' }, { label: 'Compact (ringkas)', value: 'compact' }],
        },
      },
      defaultProps: {
        theme: 'light',
        title: 'Siap Memulai Perjalanan Akademikmu?',
        description: 'Bergabunglah dengan ribuan mahasiswa FTI UPA yang telah membuktikan kualitas pendidikan kami. Daftar sekarang dan raih masa depan gemilangmu.',
        primaryCtaLabel: 'Daftar SPMB Sekarang',
        primaryCtaHref: '#',
        secondaryCtaLabel: 'Lihat Program Studi',
        secondaryCtaHref: '#',
        accentColor: 'red-orange',
        size: 'default',
      },
      render: (props) => (
        <DarkCta
          theme={props.theme}
          title={props.title}
          description={props.description || undefined}
          primaryCtaLabel={props.primaryCtaLabel}
          primaryCtaHref={props.primaryCtaHref}
          secondaryCtaLabel={props.secondaryCtaLabel || undefined}
          secondaryCtaHref={props.secondaryCtaHref}
          accentColor={props.accentColor}
          size={props.size}
        />
      ),
    },

  },
};

// --- INITIAL DEFAULT DATA FOR PUCK PAGE BUILDER ---

export const initialPuckData: Data = {
  content: [
    {
      type: 'HeroBlock',
      props: {
        id: 'hero-1',
        title: 'Fakultas Teknik & Informatika UPA',
        subtitle: 'Susun dan rancang tata letak profil prodi, materi promosi PMB, serta artikel pengumuman dengan cepat menggunakan visual Page Builder.',
        badgeText: '🛠️ Elementor-Style Visual Page Builder',
        ctaPrimaryText: 'Jelajahi Blok Komponen',
        ctaSecondaryText: 'Panduan Penggunaan',
        bgStyle: 'gradientDark',
        fontFamily: 'sans',
        textAlign: 'center',
        paddingY: 'xl',
        paddingX: 'lg',
        borderRadius: 'lg',
        boxShadow: 'lg',
      },
    },
    {
      type: 'AlertBannerBlock',
      props: {
        id: 'alert-1',
        message: '💡 Tips: Gunakan panel editor di sebelah kanan untuk mengubah teks, urutan blok, atau properti styling Elementor (Margin, Padding, Background, Font, Motion).',
        type: 'urgent',
        linkText: 'Pelajari Selengkapnya',
        bgStyle: 'white',
        borderRadius: 'md',
        paddingY: 'sm',
        paddingX: 'md',
      },
    },
    {
      type: 'StatsGridBlock',
      props: {
        id: 'stats-1',
        stat1Number: '98.4%',
        stat1Label: 'Lulusan Langsung Bekerja',
        stat2Number: 'Unggul',
        stat2Label: 'Akreditasi LAM INFOKOM',
        stat3Number: '35+',
        stat3Label: 'Dosen Gelar Doktor & Prof',
        stat4Number: '12 Lab',
        stat4Label: 'Fasilitas Riset Komputasi',
        bgStyle: 'transparent',
        borderRadius: 'none',
        paddingY: 'md',
      },
    },
    {
      type: 'FeaturesGridBlock',
      props: {
        id: 'features-1',
        heading: 'Fasilitas & Layanan Pembelajaran Digital',
        subheading: 'Setiap blok di halaman ini dirancang responsif dan dapat disesuaikan kebutuhan website.',
        item1Title: 'Laboratorium AI & GPU HPC Cluster',
        item1Desc: 'Akses penuh ke server komputasi GPU tinggi untuk penelitian machine learning.',
        item2Title: 'Sertifikasi Internasional AWS & Cisco',
        item2Desc: 'Ujian sertifikasi yang diakui secara global bagi seluruh lulusan.',
        item3Title: 'Program Riset Bersama Mitra Industri',
        item3Desc: 'Kolaborasi nyata pengerjaan aplikasi komersial bersama praktisi.',
        bgStyle: 'white',
        borderRadius: 'lg',
        paddingY: 'lg',
        paddingX: 'lg',
      },
    },
  ],
  root: { props: { title: 'Custom Page' } },
};

// --- DUPLICATE ACTION BUTTON COMPONENTS FOR PUCK ---

const DuplicateActionButton: React.FC = () => {
  const { appState, dispatch } = usePuck();
  const itemSelector = appState.ui.itemSelector;

  if (!itemSelector) return null;

  const handleDuplicate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const zone = itemSelector.zone || 'root';
    const index = itemSelector.index;

    try {
      dispatch({
        type: 'duplicate',
        sourceIndex: index,
        sourceZone: zone,
      });
    } catch (err) {
      console.error('Duplikasi gagal:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDuplicate}
      className="px-2.5 py-1 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
      title="Duplikasi / Clone blok ini beserta gaya & isinya"
    >
      <Copy className="w-3.5 h-3.5" />
      <span>Duplikasi</span>
    </button>
  );
};

const DuplicateSidebarButton: React.FC = () => {
  const { appState, dispatch } = usePuck();
  const itemSelector = appState.ui.itemSelector;

  if (!itemSelector) return null;

  const handleDuplicate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const zone = itemSelector.zone || 'root';
    const index = itemSelector.index;

    try {
      dispatch({
        type: 'duplicate',
        sourceIndex: index,
        sourceZone: zone,
      });
    } catch (err) {
      console.error('Duplikasi dari sidebar gagal:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDuplicate}
      className="px-3 py-1.5 text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
      title="Duplikasi / Clone blok ini"
    >
      <Copy className="w-3.5 h-3.5" />
      <span>Duplikasi Blok</span>
    </button>
  );
};

// --- DEDICATED SIDEBAR PANEL FOR PRE-DESIGNED BUILDING BLOCKS ---

const PRE_DESIGNED_BLOCKS = [
  {
    type: 'HeroBlock',
    title: 'Hero & Banner Utama',
    category: 'Hero & Banner',
    icon: Sparkles,
    desc: 'Header visual utama dengan judul, sub-judul, tombol CTA, badge akreditasi, dan efek gradien.',
    badge: 'Popular',
  },
  {
    type: 'DeanWelcomeBlock',
    title: 'Sambutan Dekan (Welcome Section)',
    category: 'Hero & Banner',
    icon: Sparkles,
    desc: 'Block sambutan pimpinan/dekan dengan foto, badge, kutipan pesan, tombol CTA, dan tanda tangan digital.',
    badge: 'Spesial',
  },
  {
    type: 'AlertBannerBlock',
    title: 'Banner Pengumuman / Alert',
    category: 'Hero & Banner',
    icon: Zap,
    desc: 'Banner notifikasi pesan penting PMB, info darurat, atau tautan pengumuman.',
    badge: 'Urgent',
  },
  {
    type: 'SubMenuGridBlock',
    title: 'Grid Navigasi Sub-Menu',
    category: 'Hero & Banner',
    icon: Grid,
    desc: 'Tautan navigasi cepat ke halaman prodi, fasilitas, biaya kuliah, dan registrasi.',
    badge: 'Navigasi',
  },
  {
    type: 'RichTextBlock',
    title: 'Rich Text & Artikel',
    category: 'Konten & Teks',
    icon: FileText,
    desc: 'Blok paragraf teks bebas, format artikel, heading, serta penjelasan rinci.',
    badge: 'Standard',
  },
  {
    type: 'AccordionFaqBlock',
    title: 'Accordion FAQ & Tanya Jawab',
    category: 'Konten & Teks',
    icon: HelpCircle,
    desc: 'Daftar pertanyaan dan jawaban interaktif yang dapat dibuka-tutup.',
    badge: 'Interaktif',
  },
  {
    type: 'TestimonialBlock',
    title: 'Kutipan & Testimoni Alumni',
    category: 'Konten & Teks',
    icon: MessageSquare,
    desc: 'Kutipan kesan alumni, lulusan sukses, dan profil karir di industri tech.',
    badge: 'Sosial',
  },
  {
    type: 'CtaBoxBlock',
    title: 'Call to Action Box (PMB)',
    category: 'Konten & Teks',
    icon: Award,
    desc: 'Kotak ajakan pendaftaran mahasiswa baru dengan tombol aksi prominent.',
    badge: 'Konversi',
  },
  {
    type: 'StatsGridBlock',
    title: 'Grid Angka Statistik',
    category: 'Statistik & Media',
    icon: Award,
    desc: 'Counter pencapaian fakultas: persentase lulusan, akreditasi, jumlah lab & dosen.',
    badge: 'Data',
  },
  {
    type: 'FeaturesGridBlock',
    title: 'Grid Keunggulan & Fasilitas',
    category: 'Statistik & Media',
    icon: ShieldCheck,
    desc: 'Kartu keunggulan prodi, sertifikasi AWS/Cisco, dan laboratorium GPU AI.',
    badge: 'Fitur',
  },
  {
    type: 'ImageGalleryBlock',
    title: 'Galeri Foto & Fasilitas',
    category: 'Statistik & Media',
    icon: ImageIcon,
    desc: 'Showcase foto laboratorium komputasi, ruang kuliah, dan gedung kampus.',
    badge: 'Visual',
  },
  {
    type: 'VideoEmbedBlock',
    title: 'Embed Video Profil YouTube',
    category: 'Statistik & Media',
    icon: Video,
    desc: 'Pemutar video profil fakultas, tur kampus, atau rekaman webinar.',
    badge: 'Video',
  },
  {
    type: 'AcademicProgramBlock',
    title: 'Profil Program Studi S1/D3',
    category: 'Akademik & Dosen',
    icon: GraduationCap,
    desc: 'Detail akreditasi prodi, gelar lulusan, kaprodi, visi, dan prospek karir.',
    badge: 'Akademik',
  },
  {
    type: 'CurriculumTableBlock',
    title: 'Tabel Kurikulum & SKS',
    category: 'Akademik & Dosen',
    icon: BookOpen,
    desc: 'Daftar mata kuliah per semester beserta beban bobot SKS.',
    badge: 'Kurikulum',
  },
  {
    type: 'FacultyOrgChartBlock',
    title: 'Bagan Struktur Organisasi',
    category: 'Akademik & Dosen',
    icon: Layers,
    desc: 'Bagan pimpinan dekanat, wakil dekan, ketua program studi, dan tata usaha.',
    badge: 'Struktur',
  },
  {
    type: 'LecturerGridBlock',
    title: 'Direktori Dosen & Peneliti',
    category: 'Akademik & Dosen',
    icon: Users,
    desc: 'Daftar profil para dosen pengajar, gelar akademik, dan bidang riset.',
    badge: 'Dosen',
  },
  {
    type: 'NewsListBlock',
    title: 'Daftar Berita & Pengumuman',
    category: 'Akademik & Dosen',
    icon: Newspaper,
    desc: 'Tiga kolom berita akademik, jadwal wisuda, dan pendaftaran seminar.',
    badge: 'Berita',
  },
  {
    type: 'EventScheduleBlock',
    title: 'Jadwal Agenda & Workshop',
    category: 'Agenda & Kontak',
    icon: Calendar,
    desc: 'Detail acara seminar, tanggal, lokasi, jam, narasumber, dan pendaftaran.',
    badge: 'Agenda',
  },
  {
    type: 'ContactMapBlock',
    title: 'Kontak & Peta Lokasi Kampus',
    category: 'Agenda & Kontak',
    icon: MapPin,
    desc: 'Alamat resmi, email, telepon, jam operasional, dan embed peta lokasi.',
    badge: 'Kontak',
  },
  {
    type: 'DbNewsBlock',
    title: 'Live DB: Berita & Pengumuman',
    category: 'Database Live',
    icon: Newspaper,
    desc: 'Tampilkan artikel berita & warta kampus real-time disinkronkan dari Database.',
    badge: 'Live DB',
  },
  {
    type: 'DbStudyProgramBlock',
    title: 'Live DB: Profil Program Studi',
    category: 'Database Live',
    icon: GraduationCap,
    desc: 'Daftar prodi S1/D3, akreditasi, & kaprodi real-time dari Database.',
    badge: 'Live DB',
  },
  {
    type: 'DbCurriculumBlock',
    title: 'Live DB: Kurikulum & Mata Kuliah',
    category: 'Database Live',
    icon: BookOpen,
    desc: 'Tabel daftar mata kuliah, kode MK, & SKS real-time dari Database.',
    badge: 'Live DB',
  },
  {
    type: 'DbLecturerBlock',
    title: 'Live DB: Direktori Dosen',
    category: 'Database Live',
    icon: Users,
    desc: 'Kartu profil dosen pengajar, NIDN, & keahlian riset dari Database.',
    badge: 'Live DB',
  },
  {
    type: 'DbAcademicCalendarBlock',
    title: 'Live DB: Kalender Akademik',
    category: 'Database Live',
    icon: Calendar,
    desc: 'Timeline jadwal registrasi, UTS, UAS, & wisuda real-time dari Database.',
    badge: 'Live DB',
  },
  {
    type: 'DbTestimonialCarouselBlock',
    title: 'Live DB: Testimoni Slideshow & Carousel',
    category: 'Database Live',
    icon: Quote,
    desc: 'Carousel & slideshow testimoni alumni FTI dengan efek animasi, bintang rating, dan auto-play.',
    badge: 'Slideshow',
  },
];

const BuildingBlocksCatalogPanel: React.FC = () => {
  const { appState, dispatch } = usePuck();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const categories = ['Semua', 'Database Live', 'Hero & Banner', 'Konten & Teks', 'Statistik & Media', 'Akademik & Dosen', 'Agenda & Kontak'];

  const filteredBlocks = PRE_DESIGNED_BLOCKS.filter(block => {
    const matchesSearch = block.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          block.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          block.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || block.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInsert = (blockType: string, blockTitle: string) => {
    try {
      const newId = `${blockType}-${Date.now()}`;
      const defaultProps = (puckConfig.components as any)[blockType]?.defaultProps || {};
      const newBlock = {
        type: blockType,
        props: {
          id: newId,
          ...defaultProps,
        },
      };

      const currentContent = appState.data?.content || [];
      dispatch({
        type: 'setData',
        data: {
          ...appState.data,
          content: [...currentContent, newBlock],
        },
      });

      setAddedToast(blockTitle);
      setTimeout(() => setAddedToast(null), 2500);
    } catch (err) {
      console.error('Gagal menambahkan blok:', err);
    }
  };

  return (
    <>
      {/* Floating Panel Toggle Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#800020] via-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-white font-extrabold text-xs shadow-2xl flex items-center gap-2 border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Buka Katalog 18 Blok Pre-designed Komponen"
      >
        <LayoutGrid className="w-4 h-4 text-amber-300" />
        <span>Katalog Blok (18)</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
      </button>

      {/* Added Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-20 left-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-amber-300 text-xs font-bold shadow-2xl border border-amber-500/50 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Blok <strong>"{addedToast}"</strong> berhasil ditambahkan!</span>
        </div>
      )}

      {/* Dedicated Sidebar Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700 text-white flex flex-col shadow-2xl animate-in slide-in-from-left duration-200">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#800020] to-amber-600 flex items-center justify-center text-white font-black shadow-md">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-white tracking-tight">Katalog Blok Komponen</h3>
                <p className="text-[10px] text-slate-400">Klik +Tambah Ke Halaman atau Drag Blok</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-slate-800/80 bg-slate-950/30">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari blok (e.g. Hero, Stats, Dosen, Video)..."
                className="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 text-[10px] font-bold rounded-lg shrink-0 transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blocks List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {filteredBlocks.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                <Search className="w-8 h-8 mx-auto mb-2 text-slate-600 opacity-60" />
                <p>Tidak ada blok komponen yang cocok dengan kata kunci pencarian.</p>
              </div>
            ) : (
              filteredBlocks.map((block) => {
                const IconComp = block.icon;
                return (
                  <div
                    key={block.type}
                    className="p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 transition-all group shadow-sm flex flex-col justify-between gap-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-amber-400/60 text-amber-400 flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                              {block.title}
                            </h4>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 leading-tight">
                            {block.desc}
                          </p>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
                        {block.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-700/40">
                      <span className="text-[9px] font-mono text-slate-500">{block.category}</span>
                      <button
                        type="button"
                        onClick={() => handleInsert(block.type, block.title)}
                        className="px-2.5 py-1 text-[11px] font-extrabold bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 rounded-lg flex items-center gap-1 transition-all shadow-xs active:scale-95 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Tambah Ke Halaman</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Info */}
          <div className="p-3 border-t border-slate-800 bg-slate-950/80 text-[10px] text-slate-400 text-center">
            💡 Tips: Setiap blok dapat dikustomisasi warnanya, margin/padding, font, dan animasi motion via panel inspector.
          </div>
        </div>
      )}
    </>
  );
};

// --- PAGE BUILDER COMPONENT ---

export interface CustomPageData {
  id: string;
  title: string;
  slug: string;
  content: Data | string;
  published?: boolean;
  seoTitle?: string;
  seoDesc?: string;
  metaKeywords?: string;
  views?: number;
}

interface PageBuilderProps {
  onBackToMainSite?: () => void;
  editingPage?: CustomPageData | null;
  onSavePage?: (page: CustomPageData) => Promise<void> | void;
}

export const PageBuilder: React.FC<PageBuilderProps> = ({ 
  onBackToMainSite,
  editingPage,
  onSavePage
}) => {
  const [pageMeta, setPageMeta] = useState<{
    id: string;
    title: string;
    slug: string;
    published: boolean;
    seoTitle: string;
    seoDesc: string;
    metaKeywords: string;
  }>({
    id: editingPage?.id || `cp_${Date.now()}`,
    title: editingPage?.title || 'Halaman Custom Baru',
    slug: editingPage?.slug || `halaman-${Date.now()}`,
    published: editingPage?.published !== undefined ? editingPage.published : true,
    seoTitle: editingPage?.seoTitle || '',
    seoDesc: editingPage?.seoDesc || '',
    metaKeywords: editingPage?.metaKeywords || ''
  });

  const [data, setData] = useState<Data>(() => {
    if (editingPage && editingPage.content) {
      if (typeof editingPage.content === 'object' && editingPage.content.content) {
        return editingPage.content as Data;
      }
      try {
        return JSON.parse(editingPage.content as string);
      } catch {
        // fallback
      }
    }
    const saved = localStorage.getItem('ti_puck_page_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved puck data:', e);
      }
    }
    return initialPuckData;
  });

  const [mode, setMode] = useState<'editor' | 'preview'>('editor');
  const [showLeftSidebar, setShowLeftSidebar] = useState<boolean>(true);
  const [showRightSidebar, setShowRightSidebar] = useState<boolean>(true);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [saveNotification, setSaveNotification] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editingPage) {
      setPageMeta({
        id: editingPage.id,
        title: editingPage.title,
        slug: editingPage.slug,
        published: editingPage.published !== undefined ? editingPage.published : true,
        seoTitle: editingPage.seoTitle || '',
        seoDesc: editingPage.seoDesc || '',
        metaKeywords: editingPage.metaKeywords || ''
      });
      if (editingPage.content) {
        if (typeof editingPage.content === 'object' && (editingPage.content as Data).content) {
          setData(editingPage.content as Data);
        } else {
          try {
            setData(JSON.parse(editingPage.content as string));
          } catch {
            // fallback
          }
        }
      }
    }
  }, [editingPage]);

  // Auto-save notification helper
  const triggerNotification = (msg: string) => {
    setSaveNotification(msg);
    setTimeout(() => {
      setSaveNotification(null);
    }, 3000);
  };

  const handleSavePage = async (newDataToSave?: Data) => {
    const finalData = newDataToSave || data;
    setIsSaving(true);
    try {
      const pageObj: CustomPageData = {
        id: pageMeta.id,
        title: pageMeta.title,
        slug: pageMeta.slug,
        content: finalData,
        published: pageMeta.published,
        seoTitle: pageMeta.seoTitle,
        seoDesc: pageMeta.seoDesc,
        metaKeywords: pageMeta.metaKeywords
      };

      if (onSavePage) {
        await onSavePage(pageObj);
      }

      localStorage.setItem(`ti_puck_page_${pageMeta.id}`, JSON.stringify(finalData));
      localStorage.setItem('ti_puck_page_data', JSON.stringify(finalData));
      triggerNotification(`🚀 Halaman "${pageMeta.title}" Berhasil Disimpan & Dipublikasikan!`);
    } catch (err) {
      alert(`Gagal menyimpan halaman: ${String(err)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetDefault = () => {
    if (window.confirm('Apakah Anda yakin ingin mengembalikan tata letak ke standar awal?')) {
      setData(initialPuckData);
      localStorage.removeItem('ti_puck_page_data');
      triggerNotification('🔄 Tata letak berhasil direset ke standar awal!');
    }
  };

  const handleExportJson = () => {
    setJsonInput(JSON.stringify(data, null, 2));
    setShowJsonModal(true);
  };

  const handleImportJsonSubmit = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (parsed && Array.isArray(parsed.content)) {
        setData(parsed);
        localStorage.setItem('ti_puck_page_data', JSON.stringify(parsed));
        setShowJsonModal(false);
        triggerNotification('📥 Data JSON berhasil diimpor!');
      } else {
        alert('Format JSON tidak valid. Membutuhkan objek Puck dengan properti "content".');
      }
    } catch {
      alert('Gagal mengurai JSON. Pastikan format sintaks valid.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col">
      
      {/* Top Page Builder Control Toolbar */}
      <header className="sticky top-0 z-50 bg-[#5A0017] text-white px-4 py-3 border-b border-[#800020] shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {onBackToMainSite && (
            <button
              onClick={onBackToMainSite}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-black/30 hover:bg-black/50 text-white flex items-center gap-1.5 transition-colors border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Admin Dashboard</span>
            </button>
          )}

          <div className="flex items-center gap-2 border-l border-white/20 pl-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs shadow-md">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <input
                type="text"
                value={pageMeta.title || ''}
                onChange={(e) => setPageMeta(p => ({ ...p, title: e.target.value }))}
                className="text-sm font-black tracking-tight bg-transparent border-b border-dashed border-white/40 focus:border-white focus:outline-none text-white px-1"
                title="Klik untuk ubah judul halaman"
              />
              <div className="flex items-center gap-2 text-[10px] text-amber-200 mt-0.5">
                <span>Slug: /halaman/</span>
                <input
                  type="text"
                  value={pageMeta.slug || ''}
                  onChange={(e) => setPageMeta(p => ({ ...p, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') }))}
                  className="font-mono bg-black/30 px-1.5 py-0.5 rounded text-amber-300 border border-white/20 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View mode toggle & action tools */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Toggle left & right sidebars */}
          <div className="bg-black/30 p-1 rounded-xl flex items-center gap-1 border border-white/20">
            <button
              onClick={() => setShowLeftSidebar(prev => !prev)}
              className={`p-1.5 rounded-lg transition-all border relative group ${
                showLeftSidebar
                  ? 'bg-blue-500/20 border-blue-400 text-blue-400 font-bold shadow-xs'
                  : 'bg-transparent border-transparent text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title="Toggle left sidebar"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-bold px-2 py-1 rounded shadow-xl whitespace-nowrap z-50 border border-slate-700 pointer-events-none">
                Toggle left sidebar
              </span>
            </button>

            <button
              onClick={() => setShowRightSidebar(prev => !prev)}
              className={`p-1.5 rounded-lg transition-all border relative group ${
                showRightSidebar
                  ? 'bg-blue-500/20 border-blue-400 text-blue-400 font-bold shadow-xs'
                  : 'bg-transparent border-transparent text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title="Toggle right sidebar"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <line x1="15" y1="3" x2="15" y2="21" />
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-bold px-2 py-1 rounded shadow-xl whitespace-nowrap z-50 border border-slate-700 pointer-events-none">
                Toggle right sidebar
              </span>
            </button>
          </div>

          <div className="bg-black/30 p-1 rounded-xl flex items-center gap-1 border border-white/20">
            <button
              onClick={() => setMode('editor')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                mode === 'editor'
                  ? 'bg-[#800020] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Visual Editor</span>
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                mode === 'preview'
                  ? 'bg-[#800020] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Pratinjau Live</span>
            </button>
          </div>

          <div className="h-5 w-[1px] bg-white/20 mx-1" />

          <button
            onClick={() => handleSavePage()}
            disabled={isSaving}
            className="px-4 py-2 text-xs font-extrabold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-all shadow-md"
            title="Simpan perubahan ke database"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isSaving ? 'Menyimpan...' : 'Simpan & Publis'}</span>
          </button>

          <button
            onClick={handleExportJson}
            className="px-3 py-2 text-xs font-bold rounded-xl bg-black/30 hover:bg-black/50 text-white border border-white/20 flex items-center gap-1.5 transition-colors"
            title="Ekspor / Impor JSON data"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">JSON</span>
          </button>

          <button
            onClick={handleResetDefault}
            className="p-2 rounded-xl bg-black/30 hover:bg-black/50 text-white/80 hover:text-rose-300 border border-white/20 transition-colors"
            title="Reset ke Template Default"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Floating Save Notification Toast */}
      {saveNotification && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-2xl border border-emerald-500/50 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{saveNotification}</span>
        </div>
      )}

      {/* Main Workspace Area */}
      <div className="flex-1 overflow-auto">
        {mode === 'editor' ? (
          <div className="puck-editor-container bg-white dark:bg-slate-900 min-h-[calc(100vh-60px)]">
            <Puck
              config={puckConfig}
              data={data}
              iframe={{ enabled: false }}
              onPublish={(newData) => {
                setData(newData);
                handleSavePage(newData);
              }}
              onChange={(newData) => {
                setData(newData);
              }}
            >
              <div className="flex h-[calc(100vh-60px)] w-full overflow-hidden relative">
                {showLeftSidebar && (
                  <div className="w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto shrink-0 transition-all duration-300">
                    <Puck.Components />
                  </div>
                )}
                <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 relative">
                  <Puck.Preview />
                </div>
                {showRightSidebar && (
                  <div className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto shrink-0 transition-all duration-300">
                    <Puck.Fields />
                  </div>
                )}
                <BuildingBlocksCatalogPanel />
              </div>
            </Puck>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 flex items-center justify-between text-xs text-red-900 dark:text-red-200 shadow-sm">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#800020] dark:text-red-400" />
                <span>Pratinjau Live Halaman Custom: <strong>/halaman/{pageMeta.slug}</strong></span>
              </div>
              <button
                onClick={() => setMode('editor')}
                className="px-3 py-1 font-bold rounded-xl bg-[#800020] text-white hover:bg-[#9B2C2C] transition-colors"
              >
                Kembali Edit
              </button>
            </div>

            {/* Rendered View using Puck Render */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <Render config={puckConfig} data={data} />
            </div>
          </div>
        )}
      </div>

      {/* JSON Import / Export Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="text-base font-bold flex items-center gap-2">
                <Code className="w-4 h-4 text-amber-400" />
                Ekspor / Impor Konfigurasi JSON Puck
              </h3>
              <button
                onClick={() => setShowJsonModal(false)}
                className="text-slate-400 hover:text-white text-xs font-semibold px-2 py-1"
              >
                Tutup ✕
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              Salin data JSON di bawah ini untuk cadangan, atau tempelkan struktur data Puck baru.
            </p>

            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full flex-1 min-h-[250px] p-3 text-xs font-mono bg-slate-950 border border-slate-800 rounded-xl text-emerald-400 focus:outline-none focus:border-red-500"
              placeholder="Paste JSON configuration here..."
            />

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(jsonInput);
                  alert('JSON berhasil disalin ke clipboard!');
                }}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Salin ke Clipboard</span>
              </button>

              <button
                onClick={handleImportJsonSubmit}
                className="px-5 py-2 text-xs font-black rounded-xl bg-[#800020] hover:bg-[#9B2C2C] text-white flex items-center gap-1.5 shadow-md"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Terapkan JSON Baru</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
