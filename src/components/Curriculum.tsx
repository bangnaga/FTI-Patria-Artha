import React, { useState, useEffect } from 'react';
import { Course, SpecializationType } from '../types';
import { api } from '../services/api';
import { ensureArray } from '../utils/toArray';
import { 
  BookOpen, 
  Search, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  X,
  Sparkles,
  FileText,
  Download,
  Filter
} from 'lucide-react';

interface CurriculumProps {
  courses?: Course[];
}

export const Curriculum: React.FC<CurriculumProps> = ({ courses: propCourses }) => {
  const [fetchedCourses, setFetchedCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!propCourses || propCourses.length === 0) {
      api.getCourses().then(data => {
        if (data) setFetchedCourses(data);
      }).catch(err => console.warn('Curriculum courses fetch error:', err));
    }
  }, [propCourses]);

  const coursesList = propCourses && propCourses.length > 0 ? propCourses : fetchedCourses;
  const [selectedSemester, setSelectedSemester] = useState<number>(0); // 0 means All Semesters
  const [selectedProdiFilter, setSelectedProdiFilter] = useState<string>('Teknik Informatika');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const [openSemesters, setOpenSemesters] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const toggleSemester = (sem: number) => {
    setOpenSemesters(prev => ({ ...prev, [sem]: !prev[sem] }));
  };

  const toggleAllSemesters = (expand: boolean) => {
    const updated: Record<number, boolean> = {};
    for (let i = 1; i <= 8; i++) {
      updated[i] = expand;
    }
    setOpenSemesters(updated);
  };

  const isAllOpen = [1, 2, 3, 4, 5, 6, 7, 8].every(sem => openSemesters[sem]);

  // Dynamic program study list without 'ALL'
  const defaultProdis = ['Teknik Informatika', 'Sistem Informasi', 'Teknik Elektro', 'Teknik Mesin', 'Rekayasa Perangkat Lunak'];
  const dynamicProdis = Array.from(new Set(coursesList.map(c => c.studyProgram).filter(p => Boolean(p) && p !== 'Semua' && p !== 'Semua Prodi')));
  const availableProdis = Array.from(new Set([...defaultProdis, ...dynamicProdis]));

  // Filter courses based on semester, program studi, and search query
  const filteredCourses = coursesList.filter((course) => {
    const matchesSemester = selectedSemester === 0 || course.semester === selectedSemester;
    const matchesProdi = course.studyProgram === selectedProdiFilter || course.studyProgram === 'Semua Prodi' || !course.studyProgram;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSemester && matchesProdi && matchesSearch;
  });

  const totalSksCount = coursesList.reduce((acc, c) => acc + c.sks, 0);

  // Semesters to render
  const displayedSemesters = selectedSemester === 0 ? [1, 2, 3, 4, 5, 6, 7, 8] : [selectedSemester];

  return (
    <section id="kurikulum" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Kurikulum OBE FTI Patria Artha
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peta Mata Kuliah & Kurikulum Studi
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Struktur kurikulum 8 semester dengan total <strong className="text-red-600 dark:text-red-400">{totalSksCount} SKS</strong> berbasis Outcome-Based Education (OBE) untuk mempersiapkan lulusan berkualitas tinggi.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm mb-8 space-y-4">
          
          {/* Program Studi Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100 dark:border-slate-700/60">
            <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-red-600" /> Program Studi:
            </span>
            {availableProdis.map((pCode) => {
              const isSelected = selectedProdiFilter === pCode;
              return (
                <button
                  key={pCode}
                  onClick={() => setSelectedProdiFilter(pCode)}
                  className={`px-3.5 py-1.5 text-xs font-extrabold rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#9B2C2C] text-white border-[#9B2C2C] shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {pCode}
                </button>
              );
            })}
          </div>

          {/* Semester Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 shrink-0 mr-1">Semester:</span>
              <button
                onClick={() => setSelectedSemester(0)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedSemester === 0
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                Semua (1-8)
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <button
                  key={sem}
                  onClick={() => {
                    setSelectedSemester(sem);
                    setOpenSemesters(prev => ({ ...prev, [sem]: true }));
                  }}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    selectedSemester === sem
                      ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Sem {sem}
                </button>
              ))}
            </div>

            {/* Quick Actions & Search Input */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {selectedSemester === 0 && (
                <button
                  type="button"
                  onClick={() => toggleAllSemesters(!isAllOpen)}
                  className="px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 shrink-0 transition-colors cursor-pointer"
                >
                  {isAllOpen ? 'Tutup Semua' : 'Buka Semua'}
                </button>
              )}

              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari mata kuliah / kode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* ACCORDION BY SEMESTER 1 - 8 */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Tidak ditemukan mata kuliah yang sesuai dengan filter Program Studi / pencarian "{searchQuery}".
            </p>
            <button
              onClick={() => { setSelectedSemester(0); setSelectedProdiFilter('Teknik Informatika'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedSemesters.map((sem) => {
              const semCourses = filteredCourses.filter(c => c.semester === sem);
              const semTotalSks = semCourses.reduce((sum, c) => sum + (c.sks || 0), 0);
              const isOpen = selectedSemester !== 0 || !!openSemesters[sem];

              return (
                <div 
                  key={sem}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleSemester(sem)}
                    className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer border-b border-transparent data-[open=true]:border-slate-200 dark:data-[open=true]:border-slate-700"
                    data-open={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#9B2C2C] text-white font-black flex items-center justify-center text-xs shadow-sm shrink-0">
                        S{sem}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Semester {sem}</span>
                        </h3>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          {semCourses.length} Mata Kuliah • Total {semTotalSks} SKS
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900">
                        {semTotalSks} SKS
                      </span>
                      {selectedSemester === 0 && (
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 bg-white dark:bg-slate-900/60">
                      {semCourses.length === 0 ? (
                        <div className="py-6 text-center text-slate-400 text-xs italic bg-slate-50/50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                          Belum ada mata kuliah terdaftar di Semester {sem} untuk {selectedProdiFilter}.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                          {semCourses.map((course) => (
                            <div
                              key={course.id}
                              onClick={() => setActiveCourseModal(course)}
                              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer flex flex-col justify-between group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                                    {course.code}
                                  </span>
                                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                                    <Clock className="w-3.5 h-3.5 text-red-500" />
                                    <span>{course.sks} SKS</span>
                                  </div>
                                </div>

                                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-1">
                                  {course.name}
                                </h4>

                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                                  {course.description}
                                </p>
                              </div>

                              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between gap-2">
                                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                  course.category === 'Wajib Prodi' 
                                    ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                                    : (course.category as string) === 'Peminatan'
                                    ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                }`}>
                                  {course.category}
                                </span>

                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (course.rpsUrl) {
                                        window.open(course.rpsUrl, '_blank');
                                      } else {
                                        const rpsContent = `Rencana Pembelajaran Semester (RPS)\nKode: ${course.code}\nMata Kuliah: ${course.name}\nSKS: ${course.sks}\nKategori: ${course.category}\nDeskripsi: ${course.description || '-'}\n\nFakultas Teknik dan Informatika - Universitas Patria Artha`;
                                        const blob = new Blob([rpsContent], { type: 'text/plain;charset=utf-8' });
                                        const url = URL.createObjectURL(blob);
                                        const link = document.createElement('a');
                                        link.href = url;
                                        link.download = `RPS_${course.code}_${course.name.replace(/\s+/g, '_')}.txt`;
                                        link.click();
                                        URL.revokeObjectURL(url);
                                      }
                                    }}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-extrabold rounded-lg bg-red-50 hover:bg-red-100 text-[#9B2C2C] dark:bg-red-950 dark:hover:bg-red-900 dark:text-red-300 border border-red-200 dark:border-red-800 transition-colors cursor-pointer"
                                    title={`Unduh RPS ${course.name}`}
                                  >
                                    <Download className="w-3 h-3" />
                                    <span>Unduh RPS</span>
                                  </button>

                                  <div className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 shrink-0">
                                    <span>Silabus</span>
                                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Course Detail Syllabus Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 rounded">
                    {activeCourseModal.code}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Semester {activeCourseModal.semester} • {activeCourseModal.sks} SKS ({activeCourseModal.category})
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeCourseModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Deskripsi Mata Kuliah:</h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeCourseModal.description}
              </p>
            </div>

            {/* Prerequisites */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mata Kuliah Prasyarat:</h4>
              {ensureArray(activeCourseModal.prerequisites).length === 0 ? (
                <p className="text-xs text-slate-500 italic">Tidak ada prasyarat (Dapat diambil langsung).</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {ensureArray(activeCourseModal.prerequisites).map((pre, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 rounded-lg text-xs font-semibold">
                      ⚠ {pre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Syllabus Topics */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Materi / Topik Silabus Perkuliahan:</h4>
              <div className="space-y-2">
                {ensureArray(activeCourseModal.syllabusTopic).map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              {activeCourseModal.rpsUrl ? (
                <a
                  href={activeCourseModal.rpsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold rounded-xl text-xs flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download RPS ({activeCourseModal.code}) PDF</span>
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">Dokumen RPS belum diunggah</span>
              )}
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-5 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold rounded-xl text-xs"
              >
                Tutup Silabus
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
