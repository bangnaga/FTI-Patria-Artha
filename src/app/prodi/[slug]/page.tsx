"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CustomPageViewer } from '../../../components/CustomPageViewer';
import { useApp } from '../../../context/AppContext';
import { defaultCustomPages } from '../../../data/defaultCustomPages';

export default function ProdiSlugPage() {
  const params = useParams();
  const router = useRouter();
  const rawSlug = params?.slug as string || '';
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

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

  return null;
}
