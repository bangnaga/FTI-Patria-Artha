"use client";

import React, { useState, useRef } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  Loader2,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export interface PmbRegistrationIframeProps {
  src?: string;
  height?: string;
  title?: string;
  subtitle?: string;
  showCardHeader?: boolean;
  showFooterNotice?: boolean;
  themeStyle?: 'maroon' | 'dark' | 'light' | 'glass';
  className?: string;
}

export const PmbRegistrationIframe: React.FC<PmbRegistrationIframeProps> = ({
  src = 'https://pmb.patria-artha.ac.id/join/reg/camaba.php',
  height = '850px',
  title = 'Formulir Pendaftaran Mahasiswa Baru (CAMABA)',
  subtitle = 'Portal Resmi Penerimaan Mahasiswa Baru Universitas Patria Artha',
  showCardHeader = true,
  showFooterNotice = true,
  themeStyle = 'maroon',
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Base theme classes for container header
  const getHeaderTheme = () => {
    switch (themeStyle) {
      case 'dark':
        return 'bg-slate-900 border-slate-800 text-white';
      case 'light':
        return 'bg-white border-slate-200 text-slate-900';
      case 'glass':
        return 'bg-slate-900/90 backdrop-blur-md border-slate-700/60 text-white';
      case 'maroon':
      default:
        return 'bg-gradient-to-r from-[#800020] via-[#9B2C2C] to-[#600018] border-red-900/40 text-white';
    }
  };

  const containerContent = (
    <div className={`w-full flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 ${className}`}>
      
      {/* 1. Header Bar */}
      {showCardHeader && (
        <div className={`px-4 sm:px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${getHeaderTheme()}`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 shrink-0">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-base sm:text-lg tracking-tight leading-snug">
                  {title}
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <ShieldCheck className="w-3 h-3" /> System Active
                </span>
              </div>
              <p className="text-xs opacity-85 font-medium mt-0.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{subtitle}</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Reload Button */}
            <button
              onClick={handleRefresh}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold flex items-center gap-1.5 border border-white/20"
              title="Muat ulang formulir iframe"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline">Refresh</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold flex items-center gap-1.5 border border-white/20"
              title={isFullscreen ? 'Keluar Mode Layar Penuh' : 'Layar Penuh (Fullscreen)'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden md:inline">Tutup Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden md:inline">Fullscreen</span>
                </>
              )}
            </button>

            {/* Direct Open in New Tab */}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 shrink-0"
              title="Buka pendaftaran langsung di tab baru"
            >
              <span>Buka Tab Baru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 2. Iframe Body Wrapper */}
      <div 
        className="relative w-full bg-slate-50 dark:bg-slate-950 overflow-hidden"
        style={{ height: isFullscreen ? 'calc(100vh - 80px)' : height }}
      >
        {/* Loading Spinner Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 text-center">
            <Loader2 className="w-10 h-10 text-[#800020] dark:text-red-400 animate-spin mb-3" />
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
              Memuat Formulir Pendaftaran PMB...
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1">
              Menghubungkan secara aman ke server pmb.patria-artha.ac.id
            </p>
          </div>
        )}

        {/* Embedded Iframe */}
        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={src}
          title={title}
          className="w-full h-full border-0 bg-white"
          onLoad={() => setIsLoading(false)}
          allow="geolocation; microphone; camera; payment; autoplay; clipboard-write"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        />
      </div>

      {/* 3. Footer Notice / Fallback Helper */}
      {showFooterNotice && (
        <div className="px-4 sm:px-6 py-3.5 bg-slate-100 dark:bg-slate-800/90 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              Kendala tampilan formulir? Klik tombol <strong>Buka Tab Baru</strong> untuk pendaftaran langsung.
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto shrink-0">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20PMB%20UPA,%20saya%20butuh%20bantuan%20pendaftaran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Bantuan WA PMB</span>
            </a>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#800020] dark:text-red-400 font-extrabold hover:underline"
            >
              <span>Direct Link Form PMB</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md flex items-center justify-center animate-in fade-in">
        <div className="w-full h-full max-w-7xl">
          {containerContent}
        </div>
      </div>
    );
  }

  return containerContent;
};
