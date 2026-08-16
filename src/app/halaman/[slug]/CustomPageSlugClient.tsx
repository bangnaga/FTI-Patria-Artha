"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CustomPageViewer } from '../../../components/CustomPageViewer';
import { useApp } from '../../../context/AppContext';
import { defaultCustomPages } from '../../../data/defaultCustomPages';

export default function CustomPageSlugClient({ slug }: { slug: string }) {
  const router = useRouter();
  const { customPagesList } = useApp();

  const cleanTargetSlug = (slug || '')
    .replace(/^\/halaman\//i, '')
    .replace(/^halaman\//i, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .trim();

  const targetPage = 
    customPagesList.find(p => {
      if (!p) return false;
      const cleanP = (p.slug || '').replace(/^\/halaman\//i, '').replace(/^halaman\//i, '').replace(/^\//, '').replace(/\/$/, '').trim();
      return cleanP === cleanTargetSlug || p.id === cleanTargetSlug;
    }) ||
    defaultCustomPages.find(p => {
      if (!p) return false;
      const cleanP = (p.slug || '').replace(/^\/halaman\//i, '').replace(/^halaman\//i, '').replace(/^\//, '').replace(/\/$/, '').trim();
      return cleanP === cleanTargetSlug || p.id === cleanTargetSlug;
    });

  if (!targetPage) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-400 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
          404
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
          Halaman dengan URL <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs">/halaman/{slug}</code> tidak ditemukan atau belum dipublikasikan.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 rounded-xl bg-[#800020] hover:bg-[#9B2C2C] text-white font-bold text-sm shadow-md transition-all"
        >
          ← Kembali ke Beranda Utama
        </button>
      </div>
    );
  }

  return (
    <CustomPageViewer
      page={targetPage}
      onBackToHome={() => router.push('/')}
      onNavigateSection={(sec) => {
        if (sec === 'hero') router.push('/');
        else router.push(`/${sec}`);
      }}
    />
  );
}
