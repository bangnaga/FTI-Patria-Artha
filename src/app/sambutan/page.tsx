"use client";

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { AcademicProfile } from '../../components/AcademicProfile';

export default function SambutanPage() {
  return (
    <div className="pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Profil Fakultas', href: '/profil' }, { label: 'Sambutan Dekan' }]} />
      </div>
      <AcademicProfile />
    </div>
  );
}
