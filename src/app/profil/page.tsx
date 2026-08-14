"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CustomPageViewer } from '../../components/CustomPageViewer';
import { useApp } from '../../context/AppContext';
import { defaultCustomPages } from '../../data/defaultCustomPages';

export default function ProfilPage() {
  const router = useRouter();
  const { customPagesList } = useApp();
  const targetPage = 
    customPagesList.find(p => p && p.slug === 'profil') || 
    defaultCustomPages.find(p => p && p.slug === 'profil');

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
