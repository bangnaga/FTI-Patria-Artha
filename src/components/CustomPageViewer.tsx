import React from 'react';
import { Render } from '@measured/puck';
import { puckConfig } from './PageBuilder';
import { ArrowLeft, Calendar, Eye, Sparkles, Tag, Layers } from 'lucide-react';
import { CustomPageItem } from '../data/defaultCustomPages';

interface CustomPageViewerProps {
  page: CustomPageItem;
  onBackToHome?: () => void;
  onNavigateSection?: (section: string) => void;
}

export const CustomPageViewer: React.FC<CustomPageViewerProps> = ({
  page,
  onBackToHome,
  onNavigateSection
}) => {
  // Parse Puck data safely
  let puckData = page.content;
  if (typeof puckData === 'string') {
    try {
      puckData = JSON.parse(puckData);
    } catch {
      puckData = { root: { props: { title: page.title } }, content: [] };
    }
  }

  if (!puckData || !puckData.content) {
    puckData = { root: { props: { title: page.title } }, content: [] };
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 pb-16">
      {/* Dynamic Sub-header Banner */}
      <div className="bg-gradient-to-r from-[#800020] via-[#9B2C2C] to-slate-900 text-white border-b border-red-900/50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-1.5 text-xs font-semibold backdrop-blur-xs"
                title="Kembali ke Beranda"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Kembali</span>
              </button>
            )}
            <div>
              <div className="flex items-center gap-2 text-red-200 text-xs mb-1 font-medium">
                <Layers className="w-3.5 h-3.5 text-amber-300" />
                <span>Halaman Custom</span>
                <span>/</span>
                <span className="text-amber-200 font-mono">/halaman/{page.slug}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                {page.title}
              </h1>
            </div>
          </div>

        </div>
      </div>

      {/* Puck Custom Canvas Rendering */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          {puckData.content.length === 0 ? (
            <div className="py-20 text-center text-slate-400 dark:text-slate-500">
              <Sparkles className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-700 animate-pulse" />
              <p className="text-base font-semibold">Halaman ini belum memiliki konten visual block.</p>
              <p className="text-xs mt-1">Gunakan Admin Dashboard &gt; Halaman Custom &gt; Visual Page Builder untuk mendesain halaman ini.</p>
            </div>
          ) : (
            <Render config={puckConfig} data={puckData} />
          )}
        </div>
      </div>
    </div>
  );
};
