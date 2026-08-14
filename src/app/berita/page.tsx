"use client";

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { NewsAndAgenda } from '../../components/NewsAndAgenda';
import { AcademicCalendar } from '../../components/AcademicCalendar';
import { useApp } from '../../context/AppContext';

export default function BeritaPage() {
  const { newsList } = useApp();

  return (
    <div className="pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Portal Berita & Agenda' }]} />
      </div>
      <NewsAndAgenda newsList={newsList} />
      <AcademicCalendar />
    </div>
  );
}
