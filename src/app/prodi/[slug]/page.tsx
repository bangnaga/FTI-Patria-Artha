"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { StudyPrograms } from '../../../components/StudyPrograms';
import { Curriculum } from '../../../components/Curriculum';
import { useApp } from '../../../context/AppContext';

export default function DynamicProdiPage() {
  const params = useParams();
  const rawSlug = params?.slug as string || '';
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const { studyProgramsList, coursesList } = useApp();

  const prodiTitles: Record<string, string> = {
    'prodi-tif': 'Teknik Informatika (S1)',
    'prodi-te': 'Teknik Elektro (S1)',
    'prodi-tm': 'Teknik Mesin (S1)',
  };

  const currentTitle = prodiTitles[slug] || 'Detail Program Studi';

  return (
    <div className="pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumb 
          items={[
            { label: 'Beranda', href: '/' }, 
            { label: 'Program Studi', href: '/prodi' },
            { label: currentTitle }
          ]} 
        />
      </div>
      <StudyPrograms programs={studyProgramsList} />
      <Curriculum courses={coursesList} />
    </div>
  );
}
