"use client";

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { StudyPrograms } from '../../components/StudyPrograms';
import { Curriculum } from '../../components/Curriculum';
import { useApp } from '../../context/AppContext';

export default function ProdiPage() {
  const { studyProgramsList, coursesList } = useApp();

  return (
    <div className="pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Program Studi & Kurikulum' }]} />
      </div>
      <StudyPrograms programs={studyProgramsList} />
      <Curriculum courses={coursesList} />
    </div>
  );
}
