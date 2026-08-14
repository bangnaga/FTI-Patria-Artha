import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { 
  Palette, 
  Type, 
  Sliders, 
  Sparkles, 
  RotateCcw, 
  Check, 
  Copy, 
  Eye, 
  Download, 
  Upload, 
  Layers, 
  Layout, 
  Zap, 
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Box,
  Heading,
  MousePointer
} from 'lucide-react';

export interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  headerBgColor: string;
  headerTextColor: string;
  bodyBgColor: string;
  cardBgColor: string;
  mainTextColor: string;
  headingTextColor: string;
  adminSidebarBgColor?: string;
  adminSidebarTextColor?: string;
}

export interface ThemeFonts {
  bodyFont: string;
  bodyFontName: string;
  headingFont: string;
  headingFontName: string;
  baseFontSize: number;
  headingWeight: string;
  letterSpacing: string;
}

export interface ThemeSpacing {
  borderRadius: number;
  sectionSpacingY: number;
  containerMaxWidth: number;
  cardPadding: number;
  shadowPreset: 'flat' | 'subtle' | 'medium' | 'glow';
}

const DEFAULT_COLORS: ThemeColors = {
  primaryColor: '#9B2C2C',
  secondaryColor: '#EDF2F7',
  accentColor: '#F59E0B',
  headerBgColor: '#800020',
  headerTextColor: '#FFF5F5',
  bodyBgColor: '#FFFFFF',
  cardBgColor: '#FFFFFF',
  mainTextColor: '#1E293B',
  headingTextColor: '#0F172A',
  adminSidebarBgColor: '#5A0017',
  adminSidebarTextColor: '#FFF5F5',
};

const DEFAULT_FONTS: ThemeFonts = {
  bodyFont: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  bodyFontName: 'Plus Jakarta Sans',
  headingFont: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  headingFontName: 'Plus Jakarta Sans',
  baseFontSize: 18,
  headingWeight: '800',
  letterSpacing: 'normal',
};

const DEFAULT_SPACING: ThemeSpacing = {
  borderRadius: 12,
  sectionSpacingY: 3.5,
  containerMaxWidth: 1280,
  cardPadding: 1.5,
  shadowPreset: 'medium',
};

export const FONT_OPTIONS = [
  { name: 'Plus Jakarta Sans', css: "'Plus Jakarta Sans', sans-serif" },
  { name: 'Inter', css: "'Inter', sans-serif" },
  { name: 'Outfit', css: "'Outfit', sans-serif" },
  { name: 'Poppins', css: "'Poppins', sans-serif" },
  { name: 'Roboto', css: "'Roboto', sans-serif" },
  { name: 'Playfair Display', css: "'Playfair Display', serif" },
  { name: 'Montserrat', css: "'Montserrat', sans-serif" },
  { name: 'Space Grotesk', css: "'Space Grotesk', sans-serif" },
  { name: 'Cinzel', css: "'Cinzel', serif" },
  { name: 'System Sans', css: "system-ui, -apple-system, sans-serif" },
];

export const PRESET_THEMES = [
  {
    id: 'fti-official',
    name: 'FTI Merah-Putih Official',
    tag: 'Resmi Kampus UPA',
    desc: 'Latar putih bersih dengan kombinasi Merah Marun FTI (#9B2C2C) dan Emas (#F59E0B). Elegan dan terpercaya.',
    colors: {
      primaryColor: '#9B2C2C',
      secondaryColor: '#EDF2F7',
      accentColor: '#F59E0B',
      headerBgColor: '#800020',
      headerTextColor: '#FFF5F5',
      bodyBgColor: '#FFFFFF',
      cardBgColor: '#FFFFFF',
      mainTextColor: '#1E293B',
      headingTextColor: '#0F172A',
    },
    fonts: {
      bodyFont: "'Plus Jakarta Sans', sans-serif",
      bodyFontName: 'Plus Jakarta Sans',
      headingFont: "'Plus Jakarta Sans', sans-serif",
      headingFontName: 'Plus Jakarta Sans',
      baseFontSize: 16,
      headingWeight: '800',
      letterSpacing: 'normal',
    },
    spacing: {
      borderRadius: 12,
      sectionSpacingY: 3.5,
      containerMaxWidth: 1280,
      cardPadding: 1.5,
      shadowPreset: 'medium' as const,
    }
  },
  {
    id: 'modern-slate-blue',
    name: 'Modern Tech Blue',
    tag: 'Teknologi & AI',
    desc: 'Warna biru laut modern (#1D4ED8) dengan latar Slate (#F8FAFC). Sangat cocok untuk nuansa lab AI dan Cyber Security.',
    colors: {
      primaryColor: '#2563EB',
      secondaryColor: '#EFF6FF',
      accentColor: '#3B82F6',
      headerBgColor: '#1E3A8A',
      headerTextColor: '#FFFFFF',
      bodyBgColor: '#F8FAFC',
      cardBgColor: '#FFFFFF',
      mainTextColor: '#0F172A',
      headingTextColor: '#1E3A8A',
    },
    fonts: {
      bodyFont: "'Inter', sans-serif",
      bodyFontName: 'Inter',
      headingFont: "'Outfit', sans-serif",
      headingFontName: 'Outfit',
      baseFontSize: 15,
      headingWeight: '800',
      letterSpacing: 'tight',
    },
    spacing: {
      borderRadius: 10,
      sectionSpacingY: 3.0,
      containerMaxWidth: 1280,
      cardPadding: 1.25,
      shadowPreset: 'subtle' as const,
    }
  },
  {
    id: 'emerald-academic',
    name: 'Emerald Green Innovation',
    tag: 'Akademik Segar',
    desc: 'Nuansa hijau zamrud (#059669) yang menenangkan, melambangkan pertumbuhan riset dan inovasi teknologi.',
    colors: {
      primaryColor: '#059669',
      secondaryColor: '#ECFDF5',
      accentColor: '#10B981',
      headerBgColor: '#064E3B',
      headerTextColor: '#ECFDF5',
      bodyBgColor: '#FAFAF9',
      cardBgColor: '#FFFFFF',
      mainTextColor: '#1C1917',
      headingTextColor: '#064E3B',
    },
    fonts: {
      bodyFont: "'Outfit', sans-serif",
      bodyFontName: 'Outfit',
      headingFont: "'Outfit', sans-serif",
      headingFontName: 'Outfit',
      baseFontSize: 16,
      headingWeight: '800',
      letterSpacing: 'normal',
    },
    spacing: {
      borderRadius: 16,
      sectionSpacingY: 4.0,
      containerMaxWidth: 1280,
      cardPadding: 1.5,
      shadowPreset: 'medium' as const,
    }
  },
  {
    id: 'warm-cream-gold',
    name: 'Warm Ivory & Gold',
    tag: 'Klasik Mewah',
    desc: 'Latar krem lembut (#FDFBF7) dipadu aksen emas tua (#B45309). Menampilkan sejarah panjang dan wibawa akademis.',
    colors: {
      primaryColor: '#B45309',
      secondaryColor: '#FEF3C7',
      accentColor: '#D97706',
      headerBgColor: '#78350F',
      headerTextColor: '#FFFBEB',
      bodyBgColor: '#FDFBF7',
      cardBgColor: '#FFFFFF',
      mainTextColor: '#27272A',
      headingTextColor: '#451A03',
    },
    fonts: {
      bodyFont: "'Plus Jakarta Sans', sans-serif",
      bodyFontName: 'Plus Jakarta Sans',
      headingFont: "'Playfair Display', serif",
      headingFontName: 'Playfair Display',
      baseFontSize: 16,
      headingWeight: '700',
      letterSpacing: 'wide',
    },
    spacing: {
      borderRadius: 12,
      sectionSpacingY: 3.5,
      containerMaxWidth: 1200,
      cardPadding: 1.75,
      shadowPreset: 'subtle' as const,
    }
  },
  {
    id: 'luxury-dark-maroon',
    name: 'Midnight Dark Crimson',
    tag: 'Dark Mode Mewah',
    desc: 'Mode Gelap eksklusif dengan latar belakang Slate Kegelapan (#0F172A) dan sorotan Marun Menyala (#EF4444).',
    colors: {
      primaryColor: '#DC2626',
      secondaryColor: '#1E293B',
      accentColor: '#F59E0B',
      headerBgColor: '#450A0A',
      headerTextColor: '#FEE2E2',
      bodyBgColor: '#0F172A',
      cardBgColor: '#1E293B',
      mainTextColor: '#E2E8F0',
      headingTextColor: '#F8FAFC',
    },
    fonts: {
      bodyFont: "'Inter', sans-serif",
      bodyFontName: 'Inter',
      headingFont: "'Space Grotesk', sans-serif",
      headingFontName: 'Space Grotesk',
      baseFontSize: 15,
      headingWeight: '800',
      letterSpacing: 'normal',
    },
    spacing: {
      borderRadius: 16,
      sectionSpacingY: 4.0,
      containerMaxWidth: 1280,
      cardPadding: 1.5,
      shadowPreset: 'glow' as const,
    }
  },
  {
    id: 'clean-minimalist',
    name: 'Minimalist Monochrome',
    tag: 'Ultra Bersih',
    desc: 'Gaya monokrom presisi tinggi. Garis tajam (#0F172A), sangat kontras dan mudah dibaca untuk penyampaian informasi cepat.',
    colors: {
      primaryColor: '#0F172A',
      secondaryColor: '#F1F5F9',
      accentColor: '#475569',
      headerBgColor: '#1E293B',
      headerTextColor: '#FFFFFF',
      bodyBgColor: '#FFFFFF',
      cardBgColor: '#F8FAFC',
      mainTextColor: '#334155',
      headingTextColor: '#0F172A',
    },
    fonts: {
      bodyFont: "'Inter', sans-serif",
      bodyFontName: 'Inter',
      headingFont: "'Inter', sans-serif",
      headingFontName: 'Inter',
      baseFontSize: 15,
      headingWeight: '800',
      letterSpacing: 'tight',
    },
    spacing: {
      borderRadius: 6,
      sectionSpacingY: 2.5,
      containerMaxWidth: 1280,
      cardPadding: 1.25,
      shadowPreset: 'flat' as const,
    }
  }
];

interface ThemeCustomizerProps {
  onShowToast?: (message: string) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ onShowToast }) => {
  const [activeSubTab, setActiveSubTab] = useState<'colors' | 'fonts' | 'spacing' | 'presets'>('colors');

  // Theme State
  const [colors, setColors] = useState<ThemeColors>(() => {
    const saved = localStorage.getItem('fti_custom_theme_colors');
    if (saved) {
      try { return { ...DEFAULT_COLORS, ...JSON.parse(saved) }; } catch (e) {}
    }
    return DEFAULT_COLORS;
  });

  const [fonts, setFonts] = useState<ThemeFonts>(() => {
    const saved = localStorage.getItem('fti_custom_theme_fonts');
    if (saved) {
      try { return { ...DEFAULT_FONTS, ...JSON.parse(saved) }; } catch (e) {}
    }
    return DEFAULT_FONTS;
  });

  const [spacing, setSpacing] = useState<ThemeSpacing>(() => {
    const saved = localStorage.getItem('fti_custom_theme_spacing');
    if (saved) {
      try { return { ...DEFAULT_SPACING, ...JSON.parse(saved) }; } catch (e) {}
    }
    return DEFAULT_SPACING;
  });

  const [copiedCss, setCopiedCss] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);

  // Helper to load Google Fonts on demand
  const loadGoogleFontIfNeeded = (fontName: string) => {
    if (!fontName || fontName === 'System Sans') return;
    const fontId = `gfont-${fontName.toLowerCase().replace(/\s+/g, '-')}`;
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;500;600;700;800;900&display=swap`;
      document.head.appendChild(link);
    }
  };

  // Real-time CSS custom property application
  const applyThemeLive = (c: ThemeColors, f: ThemeFonts, s: ThemeSpacing) => {
    const root = document.documentElement;

    // Apply Colors
    root.style.setProperty('--primary-accent', c.primaryColor);
    root.style.setProperty('--secondary-accent', c.secondaryColor);
    root.style.setProperty('--accent-color', c.accentColor);
    root.style.setProperty('--header-bg', c.headerBgColor);
    root.style.setProperty('--header-text', c.headerTextColor);
    root.style.setProperty('--body-bg', c.bodyBgColor);
    document.body.style.backgroundColor = c.bodyBgColor;
    root.style.setProperty('--card-bg', c.cardBgColor);
    root.style.setProperty('--main-text', c.mainTextColor);
    document.body.style.color = c.mainTextColor;
    root.style.setProperty('--heading-text', c.headingTextColor);
    root.style.setProperty('--admin-sidebar-bg', c.adminSidebarBgColor || '#5A0017');
    root.style.setProperty('--admin-sidebar-text', c.adminSidebarTextColor || '#FFF5F5');

    // Apply Fonts
    if (f.bodyFont) {
      root.style.setProperty('--font-body', f.bodyFont);
      document.body.style.fontFamily = f.bodyFont;
      loadGoogleFontIfNeeded(f.bodyFontName);
    }
    if (f.headingFont) {
      root.style.setProperty('--font-heading', f.headingFont);
      loadGoogleFontIfNeeded(f.headingFontName);
    }
    if (f.baseFontSize) {
      root.style.setProperty('--base-font-size', `${f.baseFontSize}px`);
      root.style.fontSize = `${f.baseFontSize}px`;
      document.body.style.fontSize = `${f.baseFontSize}px`;
    }
    if (f.headingWeight) {
      root.style.setProperty('--heading-font-weight', f.headingWeight);
    }
    if (f.letterSpacing) {
      root.style.setProperty('--letter-spacing-heading', f.letterSpacing);
    }

    // Apply Spacing
    root.style.setProperty('--global-border-radius', `${s.borderRadius}px`);
    root.style.setProperty('--section-spacing-y', `${s.sectionSpacingY}rem`);
    root.style.setProperty('--container-max-width', `${s.containerMaxWidth}px`);
    root.style.setProperty('--card-inner-padding', `${s.cardPadding}rem`);

    // Save to localStorage
    localStorage.setItem('fti_custom_theme_colors', JSON.stringify(c));
    localStorage.setItem('fti_custom_theme_fonts', JSON.stringify(f));
    localStorage.setItem('fti_custom_theme_spacing', JSON.stringify(s));

    // Save to backend database
    api.saveSiteData('CUSTOM_THEME_COLORS', c).catch(() => {});
    api.saveSiteData('CUSTOM_THEME_FONTS', f).catch(() => {});
    api.saveSiteData('CUSTOM_THEME_SPACING', s).catch(() => {});
  };

  // Trigger live updates on state change
  useEffect(() => {
    applyThemeLive(colors, fonts, spacing);
  }, [colors, fonts, spacing]);

  // Handle Preset Select
  const handleSelectPreset = (preset: typeof PRESET_THEMES[0]) => {
    setColors(preset.colors);
    setFonts(preset.fonts);
    setSpacing(preset.spacing);
    applyThemeLive(preset.colors, preset.fonts, preset.spacing);
    if (onShowToast) onShowToast(`Preset tema '${preset.name}' berhasil diterapkan seketika!`);
  };

  // Reset to default FTI Theme
  const handleResetToDefault = () => {
    setColors(DEFAULT_COLORS);
    setFonts(DEFAULT_FONTS);
    setSpacing(DEFAULT_SPACING);
    applyThemeLive(DEFAULT_COLORS, DEFAULT_FONTS, DEFAULT_SPACING);
    if (onShowToast) onShowToast('Tema telah direset ke FTI Merah-Putih Official!');
  };

  // Copy CSS Variables snippet
  const handleCopyCssSnippet = () => {
    const cssText = `:root {
  /* FTI Custom Theme Variables */
  --primary-accent: ${colors.primaryColor};
  --secondary-accent: ${colors.secondaryColor};
  --accent-color: ${colors.accentColor};
  --header-bg: ${colors.headerBgColor};
  --header-text: ${colors.headerTextColor};
  --body-bg: ${colors.bodyBgColor};
  --card-bg: ${colors.cardBgColor};
  --main-text: ${colors.mainTextColor};
  --heading-text: ${colors.headingTextColor};
  --font-body: ${fonts.bodyFont};
  --font-heading: ${fonts.headingFont};
  --base-font-size: ${fonts.baseFontSize}px;
  --heading-font-weight: ${fonts.headingWeight};
  --global-border-radius: ${spacing.borderRadius}px;
  --section-spacing-y: ${spacing.sectionSpacingY}rem;
  --container-max-width: ${spacing.containerMaxWidth}px;
  --card-inner-padding: ${spacing.cardPadding}rem;
}`;
    navigator.clipboard.writeText(cssText);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
    if (onShowToast) onShowToast('Kode CSS Variables berhasil disalin ke clipboard!');
  };

  // Export JSON Config
  const handleExportJson = () => {
    const exportData = { colors, fonts, spacing };
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fti-theme-config-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    if (onShowToast) onShowToast('Berkas tema JSON berhasil diunduh!');
  };

  // Import JSON Config
  const handleImportJsonSubmit = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (parsed.colors) setColors({ ...DEFAULT_COLORS, ...parsed.colors });
      if (parsed.fonts) setFonts({ ...DEFAULT_FONTS, ...parsed.fonts });
      if (parsed.spacing) setSpacing({ ...DEFAULT_SPACING, ...parsed.spacing });
      setShowImportModal(false);
      setImportJsonText('');
      if (onShowToast) onShowToast('Konfigurasi tema JSON berhasil diimpor!');
    } catch (err) {
      alert('Format JSON tidak valid. Pastikan struktur JSON benar.');
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* HEADER BANNER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950 via-[#800020] to-[#9B2C2C] text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Centralized Live Theme Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Kustomisasi Tema & Tampilan Website Global
          </h2>
          <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed">
            Kelola warna, font, dan jarak spasi website secara terpusat. Setiap perubahan slider, warna, atau font akan <span className="font-bold underline decoration-amber-400">langsung berdampak seketika</span> di seluruh halaman website tanpa perlu reload.
          </p>
        </div>

        {/* TOP ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2.5 relative z-10">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/20"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>
          
          <button
            type="button"
            onClick={handleExportJson}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            type="button"
            onClick={() => setShowImportModal(true)}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-black rounded-2xl shadow-md transition-all flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import JSON</span>
          </button>
        </div>
      </div>

      {/* NAVIGATION SUB-TABS */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSubTab('colors')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 ${
            activeSubTab === 'colors' 
              ? 'bg-[#9B2C2C] text-white shadow-md' 
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>Skema Warna ({Object.keys(colors).length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('fonts')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 ${
            activeSubTab === 'fonts' 
              ? 'bg-[#9B2C2C] text-white shadow-md' 
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Type className="w-4 h-4" />
          <span>Tipografi & Font</span>
        </button>

        <button
          onClick={() => setActiveSubTab('spacing')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 ${
            activeSubTab === 'spacing' 
              ? 'bg-[#9B2C2C] text-white shadow-md' 
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Jarak & Layout ({spacing.borderRadius}px / {spacing.sectionSpacingY}rem)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('presets')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 ${
            activeSubTab === 'presets' 
              ? 'bg-[#9B2C2C] text-white shadow-md' 
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Preset Tema Siap Pakai ({PRESET_THEMES.length})</span>
        </button>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE (60% CONTROLS, 40% STICKY LIVE PREVIEW) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: CONTROL PANELS */}
        <div className="lg:col-span-7 space-y-6">

          {/* TAB 1: COLORS */}
          {activeSubTab === 'colors' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#9B2C2C]" />
                    <span>Atur Masing-Masing Elemen Warna</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Klik kotak warna untuk menggunakan Color Picker bawaan browser atau masukkan kode HEX secara manual.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Primary Accent */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Warna Utama (Primary Accent)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Digunakan untuk tombol utama, ikon aktif, & garis aksen.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.primaryColor}
                      onChange={(e) => setColors({ ...colors, primaryColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.primaryColor}
                      onChange={(e) => setColors({ ...colors, primaryColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Header Navbar Background */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Latar Navbar / Header (`--header-bg`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Navigasi bagian atas website (Marun FTI, Biru, atau Gelap).</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.headerBgColor}
                      onChange={(e) => setColors({ ...colors, headerBgColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.headerBgColor}
                      onChange={(e) => setColors({ ...colors, headerBgColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Header Text Color */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Teks Navbar (`--header-text`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Warna teks menu & logo di bagian header.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.headerTextColor}
                      onChange={(e) => setColors({ ...colors, headerTextColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.headerTextColor}
                      onChange={(e) => setColors({ ...colors, headerTextColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Page Body Background */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Latar Belakang Website (`--body-bg`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Canvas latar belakang utama seluruh halaman website.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.bodyBgColor}
                      onChange={(e) => setColors({ ...colors, bodyBgColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.bodyBgColor}
                      onChange={(e) => setColors({ ...colors, bodyBgColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Card Background */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Latar Kartu / Modul (`--card-bg`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Warna kontainer berita, dosen, & statistik.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.cardBgColor}
                      onChange={(e) => setColors({ ...colors, cardBgColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.cardBgColor}
                      onChange={(e) => setColors({ ...colors, cardBgColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Heading Text Color */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Warna Judul (`--heading-text`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Warna teks H1, H2, H3 di seluruh halaman.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.headingTextColor}
                      onChange={(e) => setColors({ ...colors, headingTextColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.headingTextColor}
                      onChange={(e) => setColors({ ...colors, headingTextColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Main Body Text Color */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Teks Paragraf (`--main-text`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Warna teks isi berita & deskripsi.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.mainTextColor}
                      onChange={(e) => setColors({ ...colors, mainTextColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.mainTextColor}
                      onChange={(e) => setColors({ ...colors, mainTextColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Accent Highlight Color */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Aksen Sorotan (`--accent-color`)
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Warna lencana, bintang, & highlight promo PMB.</p>
                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="color"
                      value={colors.accentColor}
                      onChange={(e) => setColors({ ...colors, accentColor: e.target.value })}
                      className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                    />
                    <input
                      type="text"
                      value={colors.accentColor}
                      onChange={(e) => setColors({ ...colors, accentColor: e.target.value })}
                      className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Admin Sidebar Background Color */}
                <div className="p-4 rounded-2xl bg-[#FFF5F5] dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 space-y-2 col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#800020] animate-pulse" />
                    <label className="block text-xs font-extrabold text-slate-900 dark:text-slate-100">
                      Latar Belakang Menu Sidebar Admin (`--admin-sidebar-bg`)
                    </label>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">Kustomisasi warna latar belakang menu samping (Sidebar) pada Dashboard Admin.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={colors.adminSidebarBgColor || '#5A0017'}
                        onChange={(e) => setColors({ ...colors, adminSidebarBgColor: e.target.value })}
                        className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                      />
                      <div className="flex-1">
                        <span className="text-[10px] text-slate-500 font-bold block">Warna Latar Sidebar:</span>
                        <input
                          type="text"
                          value={colors.adminSidebarBgColor || '#5A0017'}
                          onChange={(e) => setColors({ ...colors, adminSidebarBgColor: e.target.value })}
                          className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={colors.adminSidebarTextColor || '#FFF5F5'}
                        onChange={(e) => setColors({ ...colors, adminSidebarTextColor: e.target.value })}
                        className="w-12 h-10 rounded-xl border-0 cursor-pointer p-0 shadow-sm shrink-0"
                      />
                      <div className="flex-1">
                        <span className="text-[10px] text-slate-500 font-bold block">Warna Teks & Ikon Sidebar:</span>
                        <input
                          type="text"
                          value={colors.adminSidebarTextColor || '#FFF5F5'}
                          onChange={(e) => setColors({ ...colors, adminSidebarTextColor: e.target.value })}
                          className="w-full p-2 text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: FONTS */}
          {activeSubTab === 'fonts' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Type className="w-5 h-5 text-[#9B2C2C]" />
                    <span>Pengaturan Tipografi & Google Fonts</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Pilih jenis font untuk judul dan isi teks, serta sesuaikan ukuran dan ketebalannya secara fleksibel.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                
                {/* Body Font Family */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Font Paragraf Utama (Body Font Family)
                  </label>
                  <select
                    value={fonts.bodyFontName}
                    onChange={(e) => {
                      const selected = FONT_OPTIONS.find(f => f.name === e.target.value);
                      if (selected) {
                        setFonts({
                          ...fonts,
                          bodyFontName: selected.name,
                          bodyFont: selected.css
                        });
                      }
                    }}
                    className="w-full p-3 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f.name} value={f.name}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Heading Font Family */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    Font Judul / Headings (Heading Font Family)
                  </label>
                  <select
                    value={fonts.headingFontName}
                    onChange={(e) => {
                      const selected = FONT_OPTIONS.find(f => f.name === e.target.value);
                      if (selected) {
                        setFonts({
                          ...fonts,
                          headingFontName: selected.name,
                          headingFont: selected.css
                        });
                      }
                    }}
                    className="w-full p-3 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f.name} value={f.name}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Base Font Size Slider */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      Ukuran Teks Dasar (Base Font Size)
                    </label>
                    <span className="px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-900/40 text-[#9B2C2C] dark:text-red-300 text-xs font-black">
                      {fonts.baseFontSize}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={20}
                    step={1}
                    value={fonts.baseFontSize}
                    onChange={(e) => setFonts({ ...fonts, baseFontSize: Number(e.target.value) })}
                    className="w-full accent-[#9B2C2C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>12px (Rapat)</span>
                    <span>16px (Standar)</span>
                    <span>20px (Besar)</span>
                  </div>
                </div>

                {/* Heading Weight & Spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      Ketebalan Judul (Heading Weight)
                    </label>
                    <select
                      value={fonts.headingWeight}
                      onChange={(e) => setFonts({ ...fonts, headingWeight: e.target.value })}
                      className="w-full p-2.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                      <option value="600">600 - Semi-Bold</option>
                      <option value="700">700 - Bold</option>
                      <option value="800">800 - Extra Bold (Rekomendasi)</option>
                      <option value="900">900 - Black Heavy</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      Jarak Antar Huruf Judul (Letter Spacing)
                    </label>
                    <select
                      value={fonts.letterSpacing}
                      onChange={(e) => setFonts({ ...fonts, letterSpacing: e.target.value })}
                      className="w-full p-2.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                      <option value="-0.03em">Tight (-0.03em)</option>
                      <option value="normal">Normal (0em)</option>
                      <option value="0.05em">Wide (+0.05em)</option>
                    </select>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SPACING & LAYOUT */}
          {activeSubTab === 'spacing' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-[#9B2C2C]" />
                    <span>Jarak Spasi, Radius, & Densitas Layout</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Atur kelengkungan sudut modul (Border Radius), kerapatan antar seksi, dan lebar maksimal kontainer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                
                {/* Border Radius Slider */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Box className="w-4 h-4 text-[#9B2C2C]" />
                      <span>Kelengkungan Sudut Modul (Border Radius Global)</span>
                    </label>
                    <span className="px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-900/40 text-[#9B2C2C] dark:text-red-300 text-xs font-black">
                      {spacing.borderRadius}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={24}
                    step={2}
                    value={spacing.borderRadius}
                    onChange={(e) => setSpacing({ ...spacing, borderRadius: Number(e.target.value) })}
                    className="w-full accent-[#9B2C2C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>0px (Tajam)</span>
                    <span>12px (Modern)</span>
                    <span>24px (Pill / Bulat)</span>
                  </div>
                </div>

                {/* Section Spacing Y Slider */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-[#9B2C2C]" />
                      <span>Jarak Vertikal Antar Seksi (Section Spacing)</span>
                    </label>
                    <span className="px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-900/40 text-[#9B2C2C] dark:text-red-300 text-xs font-black">
                      {spacing.sectionSpacingY}rem
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1.5}
                    max={6.0}
                    step={0.5}
                    value={spacing.sectionSpacingY}
                    onChange={(e) => setSpacing({ ...spacing, sectionSpacingY: Number(e.target.value) })}
                    className="w-full accent-[#9B2C2C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>1.5rem (Ketat)</span>
                    <span>3.5rem (Standar)</span>
                    <span>6.0rem (Spasius)</span>
                  </div>
                </div>

                {/* Card Inner Padding & Max Width */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card Inner Padding Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                        Padding Dalam Kartu
                      </label>
                      <span className="text-xs font-black text-[#9B2C2C]">{spacing.cardPadding}rem</span>
                    </div>
                    <input
                      type="range"
                      min={0.75}
                      max={2.5}
                      step={0.25}
                      value={spacing.cardPadding}
                      onChange={(e) => setSpacing({ ...spacing, cardPadding: Number(e.target.value) })}
                      className="w-full accent-[#9B2C2C] cursor-pointer"
                    />
                  </div>

                  {/* Container Max Width */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      Lebar Maksimal Kontainer
                    </label>
                    <select
                      value={spacing.containerMaxWidth}
                      onChange={(e) => setSpacing({ ...spacing, containerMaxWidth: Number(e.target.value) })}
                      className="w-full p-2.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                      <option value={1200}>1200px (Compact Classic)</option>
                      <option value={1280}>1280px (Standard Desktop)</option>
                      <option value={1440}>1440px (Wide Screen)</option>
                      <option value={1600}>1600px (Ultra-Wide HD)</option>
                    </select>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 4: PRESETS */}
          {activeSubTab === 'presets' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span>Preset Tema Siap Pakai (1-Click Presets)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Pilih preset tema profesional yang dirancang khusus untuk langsung mengubah warna, font, dan jarak spasi sekaligus.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRESET_THEMES.map((preset) => (
                  <div
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[#9B2C2C] dark:hover:border-red-500 bg-slate-50/60 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer space-y-3 group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-900/40 text-[#9B2C2C] dark:text-red-300 text-[10px] font-black uppercase tracking-wider mb-1">
                          {preset.tag}
                        </span>
                        <h4 className="text-sm font-black text-slate-900 dark:text-slate-100 group-hover:text-[#9B2C2C] transition-colors">
                          {preset.name}
                        </h4>
                      </div>
                      <span className="p-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[#9B2C2C] transition-colors border border-slate-200 dark:border-slate-600">
                        <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {preset.desc}
                    </p>

                    {/* Color Swatch Strip */}
                    <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200/80 dark:border-slate-700/80">
                      <div className="w-6 h-6 rounded-lg shadow-xs" style={{ backgroundColor: preset.colors.primaryColor }} title={`Primary: ${preset.colors.primaryColor}`} />
                      <div className="w-6 h-6 rounded-lg shadow-xs" style={{ backgroundColor: preset.colors.headerBgColor }} title={`Header: ${preset.colors.headerBgColor}`} />
                      <div className="w-6 h-6 rounded-lg shadow-xs border border-slate-300 dark:border-slate-600" style={{ backgroundColor: preset.colors.bodyBgColor }} title={`Body BG: ${preset.colors.bodyBgColor}`} />
                      <div className="w-6 h-6 rounded-lg shadow-xs" style={{ backgroundColor: preset.colors.accentColor }} title={`Accent: ${preset.colors.accentColor}`} />
                      <span className="text-[10px] font-bold text-slate-400 ml-auto">
                        Font: {preset.fonts.headingFontName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LOWER CODE GENERATOR & SAVE BAR */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CodeIcon className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">Live CSS Variables Status</h4>
              </div>

              <button
                type="button"
                onClick={handleCopyCssSnippet}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 border border-slate-700"
              >
                {copiedCss ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCss ? 'Tersalin!' : 'Salin Kode CSS'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 font-mono text-[11px] text-amber-300/90 overflow-x-auto scrollbar-none border border-slate-800 leading-relaxed">
{`:root {
  --primary-accent: ${colors.primaryColor};
  --header-bg: ${colors.headerBgColor};
  --header-text: ${colors.headerTextColor};
  --body-bg: ${colors.bodyBgColor};
  --card-bg: ${colors.cardBgColor};
  --main-text: ${colors.mainTextColor};
  --font-body: '${fonts.bodyFontName}';
  --font-heading: '${fonts.headingFontName}';
  --global-border-radius: ${spacing.borderRadius}px;
  --section-spacing-y: ${spacing.sectionSpacingY}rem;
}`}
            </pre>
          </div>

        </div>

        {/* RIGHT COLUMN: STICKY REAL-TIME INTERACTIVE PREVIEW */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-4">
          
          <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Simulasi Tampilan Real-Time
                </h3>
              </div>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                Live Interactive
              </span>
            </div>

            {/* PREVIEW CANVAS CONTAINER */}
            <div 
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner transition-all space-y-4 overflow-hidden"
              style={{
                backgroundColor: colors.bodyBgColor,
                color: colors.mainTextColor,
                fontFamily: fonts.bodyFont,
                fontSize: `${fonts.baseFontSize}px`
              }}
            >
              
              {/* Mini Navbar Preview */}
              <div 
                className="p-3 rounded-xl flex items-center justify-between shadow-xs transition-all"
                style={{
                  backgroundColor: colors.headerBgColor,
                  color: colors.headerTextColor,
                  borderRadius: `${Math.min(spacing.borderRadius, 12)}px`
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-xs font-black">
                    F
                  </div>
                  <span className="font-extrabold text-xs">FTI Patria Artha</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] opacity-90 font-bold">
                  <span>Berita</span>
                  <span>Prodi</span>
                  <span 
                    className="px-2 py-0.5 rounded-md text-[9px] font-black"
                    style={{ backgroundColor: colors.accentColor, color: '#0F172A' }}
                  >
                    PMB 2026
                  </span>
                </div>
              </div>

              {/* Mini Hero Banner Preview */}
              <div 
                className="p-4 rounded-xl border border-slate-200/60 shadow-xs space-y-2 transition-all"
                style={{
                  backgroundColor: colors.cardBgColor,
                  borderRadius: `${spacing.borderRadius}px`,
                  padding: `${spacing.cardPadding * 0.8}rem`
                }}
              >
                <span 
                  className="inline-block px-2 py-0.5 rounded-md text-[10px] font-black"
                  style={{
                    backgroundColor: `${colors.primaryColor}15`,
                    color: colors.primaryColor
                  }}
                >
                  🚀 Fakultas Teknik & Informatika
                </span>
                <h4 
                  className="text-base leading-snug"
                  style={{
                    fontFamily: fonts.headingFont,
                    fontWeight: fonts.headingWeight as any,
                    letterSpacing: fonts.letterSpacing,
                    color: colors.headingTextColor
                  }}
                >
                  Inovasi Tanpa Batas Berbasis Artificial Intelligence
                </h4>
                <p className="text-[11px] opacity-80 leading-relaxed">
                  Menghasilkan lulusan IT unggulan yang menguasai Software Engineering, Cyber Security, dan AI.
                </p>

                {/* Mini Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition-all"
                    style={{
                      backgroundColor: colors.primaryColor,
                      borderRadius: `${Math.max(spacing.borderRadius - 4, 4)}px`
                    }}
                  >
                    Daftar PMB Online
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 text-[11px] font-bold border transition-all"
                    style={{
                      borderColor: colors.primaryColor,
                      color: colors.primaryColor,
                      borderRadius: `${Math.max(spacing.borderRadius - 4, 4)}px`
                    }}
                  >
                    Lihat Prodi
                  </button>
                </div>
              </div>

              {/* Mini News Card Sample */}
              <div 
                className="p-3.5 rounded-xl border border-slate-200/60 shadow-xs space-y-2 transition-all flex items-start gap-3"
                style={{
                  backgroundColor: colors.cardBgColor,
                  borderRadius: `${spacing.borderRadius}px`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-white font-black text-xs"
                  style={{ backgroundColor: colors.primaryColor }}
                >
                  NEWS
                </div>
                <div className="space-y-1">
                  <h5 
                    className="text-xs font-bold leading-tight"
                    style={{
                      fontFamily: fonts.headingFont,
                      color: colors.headingTextColor
                    }}
                  >
                    Seminar Nasional AI & Big Data 2026
                  </h5>
                  <p className="text-[10px] opacity-75 line-clamp-2">
                    FTI UPA menggelar simposium kecerdasan buatan nasional menghadirkan pakar industri.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Helper Note */}
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <span className="font-bold">Info:</span> Pengaturan ini secara otomatis disimpan di browser (localStorage) dan langsung diperbarui di seluruh halaman website publik FTI.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* MODAL IMPORT JSON */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 border border-slate-200 dark:border-slate-700 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#9B2C2C]" />
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                  Import Konfigurasi Tema (JSON)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tempelkan (paste) teks konfigurasi JSON tema yang sebelumnya di-export untuk menerapkan seluruh warna, font, dan spacing sekaligus.
            </p>

            <textarea
              rows={6}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='{"colors": {...}, "fonts": {...}, "spacing": {...}}'
              className="w-full p-3 font-mono text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
            />

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-2xl transition-all"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleImportJsonSubmit}
                className="px-5 py-2 bg-[#9B2C2C] hover:bg-red-900 text-white text-xs font-black rounded-2xl shadow-md transition-all"
              >
                Terapkan Tema JSON
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
