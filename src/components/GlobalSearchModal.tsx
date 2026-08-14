import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { FACULTY_STRUCTURE_DATA } from './FacultyStructure';
import { Course, Lecturer, Laboratory, NewsItem, Publication } from '../types';
import { 
  Search, 
  X, 
  BookOpen, 
  Users, 
  FlaskConical, 
  Newspaper, 
  FileText, 
  ChevronRight,
  Terminal,
  Briefcase
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (sectionId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);
  const [labs, setLabs] = useState<Laboratory[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    if (isOpen) {
      Promise.all([
        api.getCourses(),
        api.getLecturers(),
        api.getLaboratories(),
        api.getNews(),
        api.getPublications()
      ]).then(([c, l, lb, n, p]) => {
        if (c) setCourses(c);
        if (l) setLecturers(l);
        if (lb) setLabs(lb);
        if (n) setNews(n);
        if (p) setPublications(p);
      }).catch(err => console.warn('Search data fetch error:', err));
    }
  }, [isOpen]);

  // Keyboard shortcut listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCourses = q ? courses.filter(c => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)) : [];
  const matchingLecturers = q ? lecturers.filter(l => l.name.toLowerCase().includes(q) || l.title.toLowerCase().includes(q)) : [];
  const matchingLeaders = q ? FACULTY_STRUCTURE_DATA.filter(f => f.name.toLowerCase().includes(q) || f.role.toLowerCase().includes(q) || f.department?.toLowerCase().includes(q)) : [];
  const matchingLabs = q ? labs.filter(lb => lb.name.toLowerCase().includes(q) || lb.code.toLowerCase().includes(q)) : [];
  const matchingNews = q ? news.filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)) : [];
  const matchingPapers = q ? publications.filter(p => p.title.toLowerCase().includes(q)) : [];

  const totalResults = matchingCourses.length + matchingLecturers.length + matchingLeaders.length + matchingLabs.length + matchingNews.length + matchingPapers.length;

  const handleJump = (sectionId: string) => {
    onSelectResult(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Cari mata kuliah, dosen, lab, berita, atau riset..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!q ? (
            <div className="text-center py-10 space-y-2">
              <Terminal className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ketik kata kunci untuk mencari di seluruh portal FTI Universitas Patria Artha
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['Machine Learning', 'Cyber Security', 'Akreditasi', 'Kecerdasan Buatan', 'SNBP'].map((k) => (
                  <button
                    key={k}
                    onClick={() => setQuery(k)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    + {k}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-xs text-slate-500">
              Tidak ada hasil yang cocok dengan kata kunci "{query}".
            </div>
          ) : (
            <>
              {/* Courses */}
              {matchingCourses.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" /> Mata Kuliah ({matchingCourses.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingCourses.slice(0, 4).map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleJump('kurikulum')}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-600 rounded mr-2">
                            {c.code}
                          </span>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{c.name}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Leaders */}
              {matchingLeaders.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-red-500" /> Pimpinan Fakultas ({matchingLeaders.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingLeaders.map((fl) => (
                      <div
                        key={fl.id}
                        onClick={() => handleJump('organisasi')}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-red-50 dark:hover:bg-red-950/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{fl.name}</p>
                          <p className="text-[10px] text-red-600 font-bold">{fl.role} — {fl.department}</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lecturers */}
              {matchingLecturers.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-500" /> Dosen & Pengajar ({matchingLecturers.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingLecturers.slice(0, 3).map((l) => (
                      <div
                        key={l.id}
                        onClick={() => handleJump('dosen')}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-purple-50 dark:hover:bg-purple-950/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{l.name}</p>
                          <p className="text-[10px] text-slate-500">{l.title}</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Labs */}
              {matchingLabs.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-emerald-500" /> Laboratorium ({matchingLabs.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingLabs.map((lb) => (
                      <div
                        key={lb.id}
                        onClick={() => handleJump('prodi')}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{lb.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {matchingNews.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-amber-500" /> Berita & Pengumuman ({matchingNews.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingNews.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => handleJump('berita')}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{n.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex justify-between">
          <span>Pencarian Cepat Portal Teknik Informatika</span>
          <span>Gunakan ⌘K untuk membuka cepat</span>
        </div>

      </div>
    </div>
  );
};
