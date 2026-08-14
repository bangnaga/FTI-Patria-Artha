import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  GraduationCap, 
  Users, 
  FlaskConical, 
  Award, 
  UserCheck, 
  Calculator, 
  Calendar, 
  Newspaper, 
  Building2,
  ArrowUp,
  Search,
  Compass,
  FileText
} from 'lucide-react';

export interface BreadcrumbProps {
  activeSection?: string;
  setActiveSection?: (sectionId: string) => void;
  onOpenSearch?: () => void;
}

interface SectionMapping {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
}

const SECTION_MAPPINGS: Record<string, SectionMapping> = {
  hero: {
    id: 'hero',
    title: 'Beranda Utatama',
    category: 'Situs Utama',
    icon: <Home className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
  },
  profil: {
    id: 'profil',
    title: 'Profil & Akreditasi',
    category: 'Tentang Fakultas',
    icon: <Building2 className="w-3.5 h-3.5 text-blue-500" />
  },
  organisasi: {
    id: 'organisasi',
    title: 'Struktur Organisasi',
    category: 'Tentang Fakultas',
    icon: <Building2 className="w-3.5 h-3.5 text-indigo-500" />
  },
  'struktur-organisasi': {
    id: 'organisasi',
    title: 'Struktur Organisasi',
    category: 'Tentang Fakultas',
    icon: <Building2 className="w-3.5 h-3.5 text-indigo-500" />
  },
  prodi: {
    id: 'prodi',
    title: 'Program Studi',
    category: 'Akademik',
    icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
  },
  'prodi-ti': {
    id: 'prodi',
    title: 'S1 Teknik Informatika',
    category: 'Program Studi',
    icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
  },
  'prodi-te': {
    id: 'prodi',
    title: 'S1 Teknik Elektro',
    category: 'Program Studi',
    icon: <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
  },
  'prodi-tm': {
    id: 'prodi',
    title: 'S1 Teknik Mesin',
    category: 'Program Studi',
    icon: <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
  },
  kurikulum: {
    id: 'kurikulum',
    title: 'Kurikulum & Mata Kuliah',
    category: 'Akademik',
    icon: <BookOpen className="w-3.5 h-3.5 text-purple-500" />
  },
  dosen: {
    id: 'dosen',
    title: 'Direktori Dosen',
    category: 'Civitas Akademika',
    icon: <Users className="w-3.5 h-3.5 text-teal-500" />
  },
  laboratorium: {
    id: 'laboratorium',
    title: 'Laboratorium & Fasilitas',
    category: 'Fasilitas & Riset',
    icon: <FlaskConical className="w-3.5 h-3.5 text-rose-500" />
  },
  riset: {
    id: 'riset',
    title: 'Riset, Jurnal & Showcase',
    category: 'Fasilitas & Riset',
    icon: <Award className="w-3.5 h-3.5 text-amber-500" />
  },
  kemahasiswaan: {
    id: 'kemahasiswaan',
    title: 'Kemahasiswaan & Alumni',
    category: 'Civitas Akademika',
    icon: <UserCheck className="w-3.5 h-3.5 text-cyan-500" />
  },
  pmb: {
    id: 'pmb',
    title: 'PMB & Layanan UKT',
    category: 'Pendaftaran & Layanan',
    icon: <Calculator className="w-3.5 h-3.5 text-emerald-600" />
  },
  kalender: {
    id: 'kalender',
    title: 'Kalender Akademik',
    category: 'Pendaftaran & Layanan',
    icon: <Calendar className="w-3.5 h-3.5 text-blue-600" />
  },
  berita: {
    id: 'berita',
    title: 'Berita & Agenda',
    category: 'Informasi Terkini',
    icon: <Newspaper className="w-3.5 h-3.5 text-red-500" />
  }
};

const ALL_NAV_SECTIONS = [
  { id: 'profil', title: 'Profil & Akreditasi', category: 'Tentang' },
  { id: 'organisasi', title: 'Struktur Organisasi', category: 'Tentang' },
  { id: 'prodi', title: 'Program Studi', category: 'Akademik' },
  { id: 'kurikulum', title: 'Kurikulum & Matkul', category: 'Akademik' },
  { id: 'dosen', title: 'Direktori Dosen', category: 'Civitas' },
  { id: 'laboratorium', title: 'Laboratorium', category: 'Fasilitas' },
  { id: 'riset', title: 'Riset & Showcase', category: 'Fasilitas' },
  { id: 'kemahasiswaan', title: 'Kemahasiswaan & Alumni', category: 'Civitas' },
  { id: 'pmb', title: 'PMB & UKT', category: 'Layanan' },
  { id: 'kalender', title: 'Kalender Akademik', category: 'Layanan' },
  { id: 'berita', title: 'Berita & Agenda', category: 'Informasi' }
];

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  activeSection = 'profil',
  setActiveSection,
  onOpenSearch
}) => {
  const [currentSectionId, setCurrentSectionId] = useState<string>(activeSection);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Auto detect active section when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      const sectionIds = ALL_NAV_SECTIONS.map(s => s.id);
      let foundSection = 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            foundSection = id;
            break;
          }
        }
      }

      if (foundSection !== currentSectionId) {
        setCurrentSectionId(foundSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSectionId]);

  // Keep synced with prop if activeSection changes
  useEffect(() => {
    if (activeSection) {
      setCurrentSectionId(activeSection);
    }
  }, [activeSection]);

  const handleJumpToSection = (targetId: string) => {
    setIsDropdownOpen(false);
    if (setActiveSection) {
      setActiveSection(targetId);
    }
    setCurrentSectionId(targetId);

    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const cleanSectionId = currentSectionId
    .replace(/^https?:\/\/[^\/]+/i, '')
    .replace(/^\/halaman\//i, '')
    .replace(/^halaman\//i, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .trim();

  const matchedMapping = SECTION_MAPPINGS[currentSectionId] || SECTION_MAPPINGS[cleanSectionId];

  const formattedTitle = cleanSectionId
    ? cleanSectionId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Halaman FTI';

  const currentInfo = matchedMapping || {
    id: currentSectionId,
    title: formattedTitle,
    category: 'Halaman Custom',
    icon: <FileText className="w-3.5 h-3.5 text-red-600" />
  };

  return (
    <nav 
      aria-label="Breadcrumb Navigation"
      className="sticky top-16 sm:top-20 z-30 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-3 text-xs">
          
          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">
            
            {/* Home Icon Link */}
            <button
              onClick={() => handleJumpToSection('hero')}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors font-bold group"
              title="Kembali ke Beranda"
            >
              <Home className="w-3.5 h-3.5 text-[#9B2C2C] dark:text-red-400 group-hover:scale-110 transition-transform" />
              <span>Beranda</span>
            </button>

            {currentSectionId !== 'hero' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                {/* Parent Category Pill */}
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-semibold text-[11px]">
                  {currentInfo.category}
                </span>

                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline-block" />

                {/* Active Current Page / Section */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-[#9B2C2C] dark:text-red-300 font-extrabold border border-red-200/80 dark:border-red-900/60 shadow-2xs">
                  {currentInfo.icon}
                  <span className="truncate max-w-[180px] sm:max-w-none">{currentInfo.title}</span>
                </div>
              </>
            )}

          </div>

          {/* Quick Nav Dropdown & Search Actions */}
          <div className="flex items-center gap-2 shrink-0">
            
          {/* Quick Search Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#9B2C2C] transition-colors"
                title="Pencarian Cepat (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Back to Top */}
            {showBackToTop && (
              <button
                onClick={() => handleJumpToSection('hero')}
                className="p-1.5 rounded-lg bg-[#9B2C2C] hover:bg-[#800020] text-white transition-colors shadow-2xs flex items-center gap-1 text-[11px] font-bold"
                title="Kembali ke atas"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Ke Atas</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
};
