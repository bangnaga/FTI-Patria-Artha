import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MenuItem, QuickLink } from '../types';
import { UpaLogo } from './UpaLogo';
import { api } from '../services/api';
import { 
  Terminal, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  FileCode2, 
  Library, 
  Github, 
  ChevronDown,
  Sparkles,
  LayoutGrid,
  ShieldCheck,
  Home,
  Building2,
  Newspaper,
  FlaskConical,
  PhoneCall,
  Users,
  Cpu,
  Layers,
  Globe,
  FileText,
  Award,
  Briefcase,
  Calendar,
  Folder,
  Info,
  Star,
  Zap,
  Type
} from 'lucide-react';

interface NavbarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
  onOpenSearch: () => void;
  onOpenAIAssistant: () => void;
  onOpenPageBuilder?: () => void;
  onOpenAdminLogin?: () => void;
  isAdminLoggedIn?: boolean;
  customMenuItems?: MenuItem[];
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  isDarkMode,
  toggleDarkMode,
  onOpenSearch,
  onOpenAIAssistant,
  onOpenPageBuilder,
  onOpenAdminLogin,
  isAdminLoggedIn,
  customMenuItems,
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [quickLinks, setQuickLinks] = useState<QuickLink[]>([
    { name: 'SIAKAD UPA', desc: 'Sistem Informasi Akademik', url: 'https://siakad.patria-artha.ac.id', iconName: 'GraduationCap', badge: 'v2.4' },
    { name: 'E-Learning (LMS)', desc: 'Portal Pembelajaran Daring', url: 'https://lms.patria-artha.ac.id', iconName: 'BookOpen' },
    { name: 'SIM-LPPM', desc: 'Sistem Riset & Pengabdian', url: 'https://lppm.patria-artha.ac.id', iconName: 'FileText' },
    { name: 'E-Journal FTI', desc: 'Jurnal Ilmiah SINTA FTI', url: 'https://journal.patria-artha.ac.id', iconName: 'Library', badge: 'SINTA 3' },
    { name: 'Repository Digital', desc: 'Arsip Skripsi & Jurnal', url: 'https://repository.patria-artha.ac.id', iconName: 'Database' }
  ]);

  useEffect(() => {
    api.getQuickLinks().then(data => {
      if (data && data.length > 0) setQuickLinks(data);
    }).catch(err => console.warn('Navbar quickLinks fetch error:', err));
  }, []);

  const [websiteSettings, setWebsiteSettings] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fti_website_settings');
      if (saved) {
        setWebsiteSettings(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const handleSettingsUpdate = () => {
      try {
        const saved = localStorage.getItem('fti_website_settings');
        if (saved) setWebsiteSettings(JSON.parse(saved));
      } catch (e) { /* ignore */ }
    };
    window.addEventListener('fti_settings_updated', handleSettingsUpdate);
    window.addEventListener('storage', handleSettingsUpdate);
    return () => {
      window.removeEventListener('fti_settings_updated', handleSettingsUpdate);
      window.removeEventListener('storage', handleSettingsUpdate);
    };
  }, []);
  const [currentFontSize, setCurrentFontSize] = useState<number>(18);

  useEffect(() => {
    try {
      const savedFonts = localStorage.getItem('fti_custom_theme_fonts');
      if (savedFonts) {
        const parsed = JSON.parse(savedFonts);
        if (parsed.baseFontSize) setCurrentFontSize(parsed.baseFontSize);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleCycleFontSize = () => {
    const nextSize = currentFontSize === 16 ? 18 : currentFontSize === 18 ? 20 : 16;
    setCurrentFontSize(nextSize);
    const root = document.documentElement;
    root.style.setProperty('--base-font-size', `${nextSize}px`);
    root.style.fontSize = `${nextSize}px`;
    document.body.style.fontSize = `${nextSize}px`;

    try {
      const saved = localStorage.getItem('fti_custom_theme_fonts');
      const parsed = saved ? JSON.parse(saved) : {};
      parsed.baseFontSize = nextSize;
      localStorage.setItem('fti_custom_theme_fonts', JSON.stringify(parsed));
      window.dispatchEvent(new Event('fti_settings_updated'));
    } catch {
      // ignore
    }
  };

  const darkModeActive = isDarkMode ?? (theme === 'dark');
  const handleToggleTheme = toggleDarkMode || onToggleTheme || (() => {});

  const defaultNavItems: MenuItem[] = [
    { id: 'm-beranda', label: 'Beranda', url: 'hero', isVisible: true, order: 1, icon: 'Home' },
    { 
      id: 'm-profil-fakultas', 
      label: 'Profil Fakultas', 
      url: 'profil', 
      isVisible: true, 
      order: 2,
      icon: 'Building2',
      children: [
        { id: 'm-profil-utama', label: 'Profil Utama FTI', url: 'profil', isVisible: true, order: 1, icon: 'Building2', line2: 'Sejarah, Visi & Keunggulan' },
        { id: 'm-visi-misi', label: 'Visi & Misi 2035', url: 'visi-misi', isVisible: true, order: 2, icon: 'Sparkles', line2: 'Rencana strategis & sasaran 2035' },
        { id: 'm-organisasi', label: 'Struktur Organisasi', url: 'organisasi', isVisible: true, order: 3, icon: 'Users', line2: 'Susunan Dekanat & Pimpinan' },
        { id: 'm-sambutan', label: 'Sambutan Dekan', url: 'sambutan', isVisible: true, order: 4, icon: 'Award', line2: 'Pesan sambutan dari Dekan FTI' }
      ]
    },
    { id: 'm-dosen', label: 'Dosen', url: 'dosen', isVisible: true, order: 3, icon: 'GraduationCap' },
    { 
      id: 'm-prodi-group', 
      label: 'Program Studi', 
      url: 'prodi', 
      isVisible: true, 
      order: 4,
      icon: 'BookOpen',
      children: [
        { id: 'm-prodi-semua', label: 'Semua Program Studi', url: 'prodi', isVisible: true, order: 1, icon: 'BookOpen', line2: 'Ikhtisar 3 Prodi Sarjana S1' },
        { id: 'm-prodi-tif', label: 'Teknik Informatika (S1)', url: 'prodi-tif', isVisible: true, order: 2, icon: 'Cpu', badge: 'UNGGUL', line2: 'AI, Cyber Security & Software Eng' },
        { id: 'm-prodi-te', label: 'Teknik Elektro (S1)', url: 'prodi-te', isVisible: true, order: 3, icon: 'Zap', line2: 'IoT, Robotika & Smart Energy' },
        { id: 'm-prodi-tm', label: 'Teknik Mesin (S1)', url: 'prodi-tm', isVisible: true, order: 4, icon: 'Layers', line2: 'CAD/CAM, Otomotif & Manufaktur' }
      ]
    },
    { id: 'm-berita', label: 'Berita', url: 'berita', isVisible: true, order: 5, icon: 'Newspaper' },
    { id: 'm-kontak', label: 'Kontak', url: 'kontak', isVisible: true, order: 6, icon: 'PhoneCall' }
  ];

  const displayNavItems = customMenuItems && Array.isArray(customMenuItems)
    ? customMenuItems.filter(m => m.isVisible)
    : defaultNavItems;

  const pathname = usePathname();
  const router = useRouter();

  const normalizeSlug = (url?: string) => {
    if (!url) return '';
    return url
      .replace(/^https?:\/\/[^\/]+/i, '')
      .replace(/^\/halaman\//i, '')
      .replace(/^halaman\//i, '')
      .replace(/^\//, '')
      .replace(/\/$/, '')
      .trim();
  };

  const isUrlActive = (itemUrl?: string) => {
    if (!itemUrl) return false;
    const cleanItem = normalizeSlug(itemUrl);
    if (!cleanItem || cleanItem === 'hero') {
      return pathname === '/' || pathname === '';
    }
    if (pathname) {
      if (pathname === `/${cleanItem}`) return true;
      if (pathname.endsWith(`/${cleanItem}`)) return true;
      if (cleanItem.startsWith('prodi-') && pathname.includes('/prodi')) return true;
    }
    if (activeSection) {
      const cleanActive = normalizeSlug(activeSection);
      if (cleanActive === cleanItem) return true;
    }
    return false;
  };

  const handleNavClick = (targetUrl: string) => {
    if (!targetUrl) return;

    // Handle external links
    if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
      if (!targetUrl.includes(window.location.hostname) && !targetUrl.includes('/halaman/')) {
        window.open(targetUrl, '_blank');
        return;
      }
    }

    const cleanSlug = normalizeSlug(targetUrl);
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    if (setActiveSection) {
      setActiveSection(targetUrl);
    }

    if (cleanSlug === 'hero' || targetUrl === 'hero') {
      router.push('/');
      return;
    }

    const routeMap: Record<string, string> = {
      'profil': '/profil',
      'visi-misi': '/visi-misi',
      'organisasi': '/organisasi',
      'sambutan': '/sambutan',
      'dosen': '/dosen',
      'prodi': '/prodi',
      'prodi-tif': '/prodi/prodi-tif',
      'prodi-te': '/prodi/prodi-te',
      'prodi-tm': '/prodi/prodi-tm',
      'berita': '/berita',
      'laboratorium': '/laboratorium',
      'kontak': '/kontak',
    };

    if (routeMap[cleanSlug]) {
      router.push(routeMap[cleanSlug]);
    } else {
      const path = cleanSlug.startsWith('halaman/') ? `/${cleanSlug}` : `/halaman/${cleanSlug}`;
      router.push(path);
    }
  };

  const renderMenuIcon = (iconName?: string, className: string = "w-4 h-4") => {
    if (!iconName) return null;
    if (iconName.startsWith('http://') || iconName.startsWith('https://') || iconName.startsWith('data:image')) {
      return <img src={iconName} alt="" className={`${className} object-contain rounded`} />;
    }
    switch (iconName) {
      case 'Home': return <Home className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Newspaper': return <Newspaper className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'PhoneCall': return <PhoneCall className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Calendar': return <Calendar className={className} />;
      case 'Folder': return <Folder className={className} />;
      case 'Info': return <Info className={className} />;
      case 'Star': return <Star className={className} />;
      case 'Zap': return <Zap className={className} />;
      default:
        return <span className="text-xs font-normal leading-none shrink-0">{iconName}</span>;
    }
  };

  const getQuickIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'FileCode2': return <FileCode2 className="w-4 h-4 text-purple-500" />;
      case 'Library': return <Library className="w-4 h-4 text-amber-500" />;
      case 'Github': return <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />;
      default: return <GraduationCap className="w-4 h-4" />;
    }
  };

  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleDropdownMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(id);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  return (
    <header 
      className="sticky top-0 z-40 w-full shadow-md border-b border-[#9B2C2C]/30 transition-colors duration-200"
      style={{ backgroundColor: 'var(--header-bg, #800020)', color: 'var(--header-text, #FFF5F5)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Department Branding */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            {(websiteSettings?.logoUrl || websiteSettings?.logoDarkUrl) ? (
              <img 
                src={darkModeActive && websiteSettings?.logoDarkUrl ? websiteSettings.logoDarkUrl : (websiteSettings?.logoUrl || websiteSettings?.logoDarkUrl)} 
                alt="Logo FTI UPA" 
                style={{ height: `${websiteSettings?.logoHeightPx || 46}px` }} 
                className="object-contain max-w-[220px]" 
              />
            ) : (
              <UpaLogo size={websiteSettings?.logoHeightPx || 46} />
            )}
            <div className="flex flex-col justify-center">
              <span 
                className="font-extrabold leading-tight transition-all block"
                style={{ 
                  fontSize: websiteSettings?.logoTextFontSize ? `${websiteSettings.logoTextFontSize}px` : '14px',
                  letterSpacing: websiteSettings?.logoTextLetterSpacing !== undefined ? `${websiteSettings.logoTextLetterSpacing}px` : 'normal',
                  color: 'var(--header-text, #FFF5F5)'
                }}
              >
                {websiteSettings?.logoText || 'Fakultas Teknik & Informatika'}
              </span>
              <span className="text-[10px] sm:text-[11px] opacity-80 font-medium leading-tight block">
                {websiteSettings?.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {displayNavItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isParentActive = isUrlActive(item.url) || (item.children && item.children.some(c => isUrlActive(c.url)));

              if (hasChildren) {
                return (
                  <div 
                    key={item.id} 
                    className="relative py-2"
                    onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (openDropdown === item.id) {
                          setOpenDropdown(null);
                        } else {
                          handleDropdownMouseEnter(item.id);
                        }
                        handleNavClick(item.url);
                      }}
                      className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        isParentActive
                          ? 'text-[#800020] bg-[#FFF5F5] shadow-sm font-extrabold'
                          : 'text-[#FFF5F5]/90 hover:text-[#FFF5F5] hover:bg-white/10'
                      }`}
                    >
                      {renderMenuIcon(item.icon, "w-4 h-4 shrink-0")}
                      <span>{item.line1 || item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === item.id && (
                      <div 
                        className="absolute left-0 top-full pt-1 w-64 z-50"
                        onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="bg-white text-slate-900 border border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1">
                          {item.children!.map((child) => (
                            <button
                              key={child.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                setOpenDropdown(null);
                                handleNavClick(child.url);
                              }}
                              className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-2.5 cursor-pointer ${
                                isUrlActive(child.url)
                                  ? 'text-[#800020] dark:text-red-400 font-extrabold bg-red-50 dark:bg-slate-800' 
                                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-[#800020]'
                              }`}
                            >
                              {child.icon ? (
                                <div className="p-1.5 rounded-lg bg-red-50 dark:bg-slate-800 text-[#9B2C2C] dark:text-red-400 shrink-0 mt-0.5">
                                  {renderMenuIcon(child.icon, "w-4 h-4")}
                                </div>
                              ) : null}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold truncate">{child.line1 || child.label}</span>
                                  {child.badge && (
                                    <span className="px-1.5 py-0.2 text-[9px] font-black rounded bg-amber-400 text-slate-900 shrink-0">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.line2 && (
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-normal leading-tight line-clamp-1 mt-0.5">
                                    {child.line2}
                                  </p>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.url)}
                  className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                    isUrlActive(item.url)
                      ? 'text-[#800020] bg-[#FFF5F5] shadow-sm font-extrabold'
                      : 'text-[#FFF5F5]/90 hover:text-[#FFF5F5] hover:bg-white/10'
                  }`}
                >
                  {renderMenuIcon(item.icon, "w-4 h-4 shrink-0")}
                  <span>{item.line1 || item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-black rounded bg-amber-400 text-slate-900">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
              title="Pencarian Cepat (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline-block text-xs font-mono text-red-200 bg-white/20 px-1.5 py-0.5 rounded border border-white/30">
                ⌘K
              </span>
            </button>

            {/* Portal Admin / Login Button */}
            {onOpenAdminLogin && (
              <button
                onClick={onOpenAdminLogin}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-lg transition-all shadow-xs ${
                  isAdminLoggedIn
                    ? 'bg-amber-400 text-slate-900 border border-amber-300'
                    : 'bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] border border-white/20'
                }`}
                title="Portal Kelola Admin FTI"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>{isAdminLoggedIn ? 'Panel Admin' : 'Login Admin'}</span>
              </button>
            )}

            {/* Font Size Toggle Button */}
            <button
              onClick={handleCycleFontSize}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-1 border border-white/20"
              title={`Ukuran Font Teks: ${currentFontSize}px (Klik untuk ubah: 16px / 18px / 20px)`}
            >
              <Type className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="text-xs font-black text-amber-200">{currentFontSize}px</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              title={darkModeActive ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkModeActive ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#9B2C2C] bg-[#800020] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col gap-1.5 pt-2">
            {displayNavItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div key={item.id} className="space-y-1">
                  {hasChildren ? (
                    <div className="bg-black/15 rounded-xl p-2.5 space-y-2 border border-white/10">
                      <div className="flex items-center gap-2 px-1 text-xs font-black text-[#FFF5F5] uppercase tracking-wider">
                        {renderMenuIcon(item.icon, "w-4 h-4 text-amber-300")}
                        <span>{item.line1 || item.label}</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-white/30 ml-1">
                        {item.children!.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.url)}
                            className={`text-left p-2 text-xs rounded-lg transition-colors flex items-start gap-2 ${
                              isUrlActive(child.url)
                                ? 'text-[#800020] bg-[#FFF5F5] font-bold shadow-xs'
                                : 'text-[#FFF5F5]/90 hover:bg-white/10'
                            }`}
                          >
                            {child.icon ? (
                              <div className="mt-0.5 shrink-0">
                                {renderMenuIcon(child.icon, "w-3.5 h-3.5")}
                              </div>
                            ) : null}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1 font-semibold">
                                <span>{child.line1 || child.label}</span>
                                {child.badge && (
                                  <span className="px-1 py-0.2 text-[9px] font-black rounded bg-amber-400 text-slate-900 shrink-0">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              {child.line2 && (
                                <p className="text-[10px] opacity-75 font-normal line-clamp-1 mt-0.5">
                                  {child.line2}
                                </p>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.url)}
                      className={`w-full text-left p-2.5 text-xs font-semibold rounded-xl transition-colors flex items-center justify-between ${
                        isUrlActive(item.url)
                          ? 'text-[#800020] bg-[#FFF5F5] font-bold shadow-xs'
                          : 'text-[#FFF5F5]/90 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {renderMenuIcon(item.icon, "w-4 h-4")}
                        <div>
                          <div>{item.line1 || item.label}</div>
                          {item.line2 && (
                            <div className="text-[10px] opacity-75 font-normal line-clamp-1">{item.line2}</div>
                          )}
                        </div>
                      </div>
                      {item.badge && (
                        <span className="px-1 py-0.2 text-[9px] font-black rounded bg-amber-400 text-slate-900">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#9B2C2C]">
            <p className="text-[11px] font-bold text-[#FFF5F5]/80 uppercase tracking-wider mb-2">
              Layanan Sistem Informasi
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-xs rounded-lg bg-black/20 text-[#FFF5F5] hover:bg-black/30"
                >
                  {getQuickIcon(link.iconName)}
                  <span className="truncate">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
