"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CustomPageViewer } from '../../../components/CustomPageViewer';
import { useApp } from '../../../context/AppContext';
import { defaultCustomPages } from '../../../data/defaultCustomPages';

export default function ProdiSlugClient({ slug }: { slug: string }) {
  const router = useRouter();
  const { customPagesList } = useApp();

  const targetPage = 
    customPagesList.find(p => p && (p.slug === slug || p.slug === `prodi-${slug}` || p.id === slug)) || 
    defaultCustomPages.find(p => p && (p.slug === slug || p.slug === `prodi-${slug}` || p.id === slug));

  if (targetPage) {
    return (
      <CustomPageViewer 
        page={targetPage} 
        onBackToHome={() => router.push('/')} 
        onNavigateSection={(sec) => router.push(`/halaman/${sec}`)} 
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Program Studi Tidak Ditemukan</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Program studi dengan URL /prodi/{slug} tidak ditemukan.</p>
      <button onClick={() => router.push('/')} className="px-6 py-3 rounded-xl bg-[#800020] text-white font-bold text-sm">
        ← Kembali ke Beranda
      </button>
    </div>
  );
}
