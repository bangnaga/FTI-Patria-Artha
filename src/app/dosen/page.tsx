"use client";

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Lecturers } from '../../components/Lecturers';
import { useApp } from '../../context/AppContext';

export default function DosenPage() {
  const { lecturersList } = useApp();

  return (
    <div className="pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Direktori Dosen & Tenaga Pengajar' }]} />
      </div>
      <Lecturers lecturerList={lecturersList} />
    </div>
  );
}
