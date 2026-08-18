import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lecturer, SpecializationType } from '../types';
import { api } from '../services/api';
import { 
  Users, 
  Search, 
  Mail, 
  BookOpen, 
  GraduationCap, 
  ExternalLink, 
  X,
  Award,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  Grid,
  LayoutList
} from 'lucide-react';

import { ensureArray } from '../utils/toArray';

interface LecturersProps {
  lecturerList?: Lecturer[];
}

export const Lecturers: React.FC<LecturersProps> = ({ lecturerList: propLecturerList }) => {
  const [fetchedLecturers, setFetchedLecturers] = useState<Lecturer[]>([]);

  useEffect(() => {
    if (!propLecturerList || propLecturerList.length === 0) {
      api.getLecturers().then(data => {
        if (data) setFetchedLecturers(data);
      }).catch(err => console.warn('Lecturers fetch error:', err));
    }
  }, [propLecturerList]);

  const lecturersList = propLecturerList && propLecturerList.length > 0 ? propLecturerList : fetchedLecturers;
  const [selectedProdi, setSelectedProdi] = useState<string>('ALL');
  const [selectedExpertise, setSelectedExpertise] = useState<string>('ALL');
  const [selectedTitle, setSelectedTitle] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLecturerModal, setActiveLecturerModal] = useState<Lecturer | null>(null);

  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activeLecturerModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLecturerModal]);

  const filteredLecturers = lecturersList.filter((lecturer) => {
    const matchesProdi = selectedProdi === 'ALL' || 
                         (lecturer.studyProgram && lecturer.studyProgram.toLowerCase().includes(selectedProdi.toLowerCase())) ||
                         (selectedProdi === 'Teknik Informatika' && (!lecturer.studyProgram || lecturer.studyProgram.includes('Informatika')));
    const matchesTitle = selectedTitle === 'ALL' || (lecturer.title && lecturer.title.toLowerCase().includes(selectedTitle.toLowerCase()));
    const matchesExpertise = selectedExpertise === 'ALL' || ensureArray(lecturer.expertise).includes(selectedExpertise as SpecializationType);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery ||
                          lecturer.name.toLowerCase().includes(searchLower) ||
                          (lecturer.nidn && lecturer.nidn.includes(searchQuery)) ||
                          (lecturer.title && lecturer.title.toLowerCase().includes(searchLower)) ||
                          (lecturer.jabatan && lecturer.jabatan.toLowerCase().includes(searchLower)) ||
                          (lecturer.studyProgram && lecturer.studyProgram.toLowerCase().includes(searchLower)) ||
                          (lecturer.email && lecturer.email.toLowerCase().includes(searchLower)) ||
                          (lecturer.lab && lecturer.lab.toLowerCase().includes(searchLower)) ||
                          ensureArray(lecturer.expertiseTags).some(t => t.toLowerCase().includes(searchLower));
    return matchesProdi && matchesTitle && matchesExpertise && matchesSearch;
  });

  return (
    <section id="dosen" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" /> Direktori Pengajar & Dosen FTI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Profil Dosen & Peneliti FTI Patria Artha
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Direktori tenaga pengajar berkualifikasi Doktor (S3) dan Magister (S2) Fakultas Teknik dan Informatika Universitas Patria Artha.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama dosen, NIDN, jabatan, kepakaran..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 text-xs font-medium rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#800020] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Prodi Filter Tabs & Controls */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {[
              { id: 'ALL', label: '🎓 Semua Prodi' },
              { id: 'Teknik Informatika', label: '💻 S1 Informatika' },
              { id: 'Teknik Elektro', label: '⚡ S1 Elektro' },
              { id: 'Teknik Mesin', label: '⚙️ S1 Mesin' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedProdi(item.id)}
                className={`px-3 py-2 text-xs font-extrabold rounded-xl border transition-all cursor-pointer ${
                  selectedProdi === item.id
                    ? 'bg-[#800020] text-white border-[#800020] shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Filter Jabatan Akademik Dropdown */}
            <select
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
              className="px-3 py-2 text-xs font-extrabold rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#800020] cursor-pointer"
            >
              <option value="ALL">👨‍🏫 Semua Jabatan</option>
              <option value="Guru Besar">Guru Besar / Profesor</option>
              <option value="Lektor Kepala">Lektor Kepala</option>
              <option value="Lektor">Lektor</option>
              <option value="Asisten Ahli">Asisten Ahli</option>
            </select>

            {/* Layout View Toggle (Grid vs Carousel Scroll) */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-700 ml-auto lg:ml-2">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-800 text-[#800020] dark:text-red-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Tampilan Grid Responsif"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white dark:bg-slate-800 text-[#800020] dark:text-red-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Tampilan Horizontal Scroll Carousel"
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Carousel Navigation Controls (Visible in Carousel View Mode) */}
        {viewMode === 'carousel' && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span>↔️ Geser kartu ke kanan / kiri atau gunakan tombol navigasi</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-[#800020] hover:text-white dark:hover:bg-[#800020] transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll Kiri"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-[#800020] hover:text-white dark:hover:bg-[#800020] transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll Kanan"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Lecturers Grid / Carousel Container with Smooth Animation */}
        <AnimatePresence mode="popLayout">
          {viewMode === 'grid' ? (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
            >
              {filteredLecturers.map((lecturer) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  key={lecturer.id}
                  onClick={() => setActiveLecturerModal(lecturer)}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-3 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-[#800020]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4 mb-3 sm:mb-4 text-center sm:text-left">
                      {/* Pas Foto 3:4 Ratio Frame */}
                      <div className="w-16 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={lecturer.photo || lecturer.avatar || '/uploads/noface-1787027055368-je087.jpg'}
                          alt={lecturer.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1 w-full">
                        <div className="flex items-center justify-center sm:justify-start gap-1 flex-wrap">
                          <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                            NIDN: {lecturer.nidn}
                          </span>
                          {lecturer.studyProgram && (
                            <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 truncate max-w-[110px] sm:max-w-none">
                              {lecturer.studyProgram}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-base mt-1 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {lecturer.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {lecturer.title}
                        </p>
                        {lecturer.jabatan && (
                          <div className="mt-1">
                            <span className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 inline-block">
                              💼 {lecturer.jabatan}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs border-t border-slate-100 dark:border-slate-700/80 pt-2.5 sm:pt-3">
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-600 dark:text-slate-300">
                        <FlaskConical className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{lecturer.lab || 'Lab FTI UPA'}</span>
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-500 dark:text-slate-400">
                        <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{lecturer.email}</span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 mt-3 sm:mt-4">
                      {ensureArray(lecturer.expertiseTags).map((tag, idx) => (
                        <span key={idx} className="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-center sm:justify-end text-[11px] sm:text-xs font-semibold text-red-600 dark:text-red-400">
                    <span className="group-hover:translate-x-1 transition-transform">Profil Detail →</span>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              layout
              ref={scrollContainerRef}
              className="flex items-stretch gap-3 sm:gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700"
            >
              {filteredLecturers.map((lecturer) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  key={lecturer.id}
                  onClick={() => setActiveLecturerModal(lecturer)}
                  className="min-w-[160px] sm:min-w-[320px] max-w-[180px] sm:max-w-[320px] bg-white dark:bg-slate-800 rounded-2xl p-3 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-[#800020]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between group snap-start hover:-translate-y-1 shrink-0"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4 mb-3 sm:mb-4 text-center sm:text-left">
                      {/* Pas Foto 3:4 Ratio Frame */}
                      <div className="w-16 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={lecturer.photo || lecturer.avatar || '/uploads/noface-1787027055368-je087.jpg'}
                          alt={lecturer.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1 w-full">
                        <div className="flex items-center justify-center sm:justify-start gap-1 flex-wrap">
                          <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                            NIDN: {lecturer.nidn}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-base mt-1 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {lecturer.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {lecturer.title}
                        </p>
                        {lecturer.jabatan && (
                          <div className="mt-1">
                            <span className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 inline-block">
                              💼 {lecturer.jabatan}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs border-t border-slate-100 dark:border-slate-700/80 pt-2.5 sm:pt-3">
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-600 dark:text-slate-300">
                        <FlaskConical className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{lecturer.lab || 'Lab FTI UPA'}</span>
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-500 dark:text-slate-400">
                        <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{lecturer.email}</span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 mt-3 sm:mt-4">
                      {ensureArray(lecturer.expertiseTags).map((tag, idx) => (
                        <span key={idx} className="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-center sm:justify-end text-[11px] sm:text-xs font-semibold text-red-600 dark:text-red-400">
                    <span className="group-hover:translate-x-1 transition-transform">Profil Detail →</span>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lecturer Detail Profile Modal */}
      <AnimatePresence>
        {activeLecturerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveLecturerModal(null)}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-24 sm:w-28 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#800020]/30 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-md">
                    <img
                      src={activeLecturerModal.photo || activeLecturerModal.avatar || '/uploads/noface-1787027055368-je087.jpg'}
                      alt={activeLecturerModal.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeLecturerModal.name}
                    </h3>
                    <p className="text-xs text-red-600 dark:text-red-400 font-semibold mt-0.5">
                      {activeLecturerModal.title}
                    </p>
                    {activeLecturerModal.jabatan && (
                      <div className="mt-1.5">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-amber-400 text-slate-950 shadow-xs border border-amber-300 inline-block">
                          💼 {activeLecturerModal.jabatan}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-slate-500 mt-1">
                      NIDN: {activeLecturerModal.nidn} • {activeLecturerModal.lab || 'Lab FTI'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveLecturerModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Riwayat Pendidikan */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  Riwayat Pendidikan Akademik:
                </h4>
                <div className="space-y-1.5">
                  {ensureArray(activeLecturerModal.education).map((edu, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200">
                      • {edu}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mata Kuliah Yang Diampu */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  Mata Kuliah Yang Diampu:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {ensureArray(activeLecturerModal.coursesTaught).map((course, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-200 dark:border-blue-800">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Profiles & Contact */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Tautan Profil Riset & Publikasi Ilmiah:
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {activeLecturerModal.googleScholar && (
                      <a
                        href={activeLecturerModal.googleScholar.startsWith('http') ? activeLecturerModal.googleScholar : `https://${activeLecturerModal.googleScholar}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>Google Scholar</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {activeLecturerModal.scopus && (
                      <a
                        href={activeLecturerModal.scopus.startsWith('http') ? activeLecturerModal.scopus : `https://www.scopus.com/authid/detail.uri?authorId=${activeLecturerModal.scopus}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 border border-amber-200 dark:border-amber-800 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Scopus ID</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {activeLecturerModal.sinta && (
                      <a
                        href={activeLecturerModal.sinta.startsWith('http') ? activeLecturerModal.sinta : `https://sinta.kemdikbud.go.id/authors/profile/${activeLecturerModal.sinta}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>SINTA Kemdikbud</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {activeLecturerModal.orcid && (
                      <a
                        href={activeLecturerModal.orcid.startsWith('http') ? activeLecturerModal.orcid : `https://orcid.org/${activeLecturerModal.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900 border border-teal-200 dark:border-teal-800 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        <span>ORCID</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {activeLecturerModal.researchGate && (
                      <a
                        href={activeLecturerModal.researchGate.startsWith('http') ? activeLecturerModal.researchGate : `https://${activeLecturerModal.researchGate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900 border border-sky-200 dark:border-sky-800 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        <span>ResearchGate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <a
                    href={`mailto:${activeLecturerModal.email}`}
                    className="px-4 py-2 bg-[#9B2C2C] hover:bg-[#800020] text-white font-extrabold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Kirim Email</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
