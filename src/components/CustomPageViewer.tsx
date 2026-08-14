import React from 'react';
import { Render } from '@measured/puck';
import { puckConfig } from './PageBuilder';
import { Sparkles } from 'lucide-react';
import { CustomPageItem } from '../data/defaultCustomPages';

interface CustomPageViewerProps {
  page: CustomPageItem;
  onBackToHome?: () => void;
  onNavigateSection?: (section: string) => void;
}

export const CustomPageViewer: React.FC<CustomPageViewerProps> = ({
  page,
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full overflow-x-hidden">
      {/* Full width Puck Visual Canvas Rendering */}
      <div className="w-full min-h-screen">
        {puckData.content.length === 0 ? (
          <div className="max-w-4xl mx-auto py-24 px-4 text-center text-slate-400 dark:text-slate-500">
            <Sparkles className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-700 animate-pulse" />
            <p className="text-base font-semibold">Halaman ini belum memiliki konten visual block.</p>
            <p className="text-xs mt-1">Gunakan Admin Dashboard &gt; Halaman Custom &gt; Visual Page Builder untuk mendesain halaman ini.</p>
          </div>
        ) : (
          <Render config={puckConfig} data={puckData} />
        )}
      </div>
    </div>
  );
};
