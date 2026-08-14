"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '../components/Hero';
import { AcademicProfile } from '../components/AcademicProfile';
import { FacultyStructure } from '../components/FacultyStructure';
import { StudyPrograms } from '../components/StudyPrograms';
import { Curriculum } from '../components/Curriculum';
import { Lecturers } from '../components/Lecturers';
import { StudentAndAlumni } from '../components/StudentAndAlumni';
import { AcademicCalendar } from '../components/AcademicCalendar';
import { NewsAndAgenda } from '../components/NewsAndAgenda';
import { ContactSection } from '../components/ContactSection';
import { CustomPageViewer } from '../components/CustomPageViewer';
import { useApp } from '../context/AppContext';

export default function HomePage() {
  const router = useRouter();
  const { 
    setIsAiChatOpen, 
    newsList, 
    lecturersList, 
    studyProgramsList, 
    coursesList, 
    studentOrgData,
    customPagesList
  } = useApp();

  const customBeranda = customPagesList.find(p => p && (p.slug === 'beranda' || p.slug === 'home'));

  if (customBeranda) {
    return (
      <CustomPageViewer 
        page={customBeranda} 
        onBackToHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        onNavigateSection={(sec) => router.push(`/halaman/${sec}`)} 
      />
    );
  }

  return (
    <>
      {/* 1. Hero Banner Utama */}
      <Hero onOpenAIAssistant={() => setIsAiChatOpen(true)} />

      {/* 2. Profil & Akreditasi */}
      <AcademicProfile />

      {/* 3. Struktur Organisasi Dekanat */}
      <FacultyStructure />

      {/* 4. Program Studi */}
      <StudyPrograms programs={studyProgramsList} />

      {/* 5. Kurikulum & Silabus */}
      <Curriculum courses={coursesList} />

      {/* 6. Direktori Dosen */}
      <Lecturers lecturerList={lecturersList} />

      {/* 8. Kemahasiswaan & Alumni */}
      <StudentAndAlumni studentOrg={studentOrgData} />

      {/* 9. Kalender Akademik */}
      <AcademicCalendar />

      {/* 10. Berita & Agenda */}
      <NewsAndAgenda newsList={newsList} />

      {/* 11. Kontak & Lokasi Kampus */}
      <ContactSection />
    </>
  );
}
