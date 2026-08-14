"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  NewsItem, 
  Lecturer, 
  StudyProgram, 
  Course, 
  MenuItem, 
  MediaFile, 
  User,
  StudentOrg
} from '../types';
import { defaultCustomPages, CustomPageItem } from '../data/defaultCustomPages';
import { api } from '../services/api';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isAiChatOpen: boolean;
  setIsAiChatOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAdminLoginModalOpen: boolean;
  setIsAdminLoginModalOpen: (open: boolean) => void;
  adminUser: User | null;
  setAdminUser: (user: User | null) => void;
  handleLoginSuccess: (user: User) => void;
  handleAdminLogout: () => void;
  newsList: NewsItem[];
  setNewsList: React.Dispatch<React.SetStateAction<NewsItem[]>>;
  lecturersList: Lecturer[];
  setLecturersList: React.Dispatch<React.SetStateAction<Lecturer[]>>;
  studyProgramsList: StudyProgram[];
  setStudyProgramsList: React.Dispatch<React.SetStateAction<StudyProgram[]>>;
  coursesList: Course[];
  setCoursesList: React.Dispatch<React.SetStateAction<Course[]>>;
  menuItemsList: MenuItem[];
  setMenuItemsList: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  mediaFilesList: MediaFile[];
  setMediaFilesList: React.Dispatch<React.SetStateAction<MediaFile[]>>;
  studentOrgData: StudentOrg;
  setStudentOrgData: React.Dispatch<React.SetStateAction<StudentOrg>>;
  customPagesList: CustomPageItem[];
  setCustomPagesList: React.Dispatch<React.SetStateAction<CustomPageItem[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<User | null>(null);

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [lecturersList, setLecturersList] = useState<Lecturer[]>([]);
  const [studyProgramsList, setStudyProgramsList] = useState<StudyProgram[]>([]);
  const [coursesList, setCoursesList] = useState<Course[]>([]);
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>([]);
  const [mediaFilesList, setMediaFilesList] = useState<MediaFile[]>([]);
  const [studentOrgData, setStudentOrgData] = useState<StudentOrg>({
    name: 'Himpunan Mahasiswa FTI',
    abbreviation: 'HIMA-FTI',
    logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=200',
    description: 'Wadah organisasi mahasiswa Fakultas Teknik & Informatika UPA.',
    cabinetName: 'Kabinet Sinergi Inovasi',
    cabinetYear: '2026/2027',
    leaderName: 'Muh. Fadel Rahman',
    leaderPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    viceLeaderName: 'Andi Nurul Fatima',
    divisions: [],
    upcomingEvents: []
  });
  const [customPagesList, setCustomPagesList] = useState<CustomPageItem[]>(defaultCustomPages);

  // Sync Admin User from localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('fti_admin_user');
        if (saved) setAdminUser(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Load initial backend data on mount
  useEffect(() => {
    let isMounted = true;
    async function loadBackendData() {
      try {
        const [news, lecturers, sps, courses, org, files, menus, pages, siteData] = await Promise.all([
          api.getNews(),
          api.getLecturers(),
          api.getStudyPrograms(),
          api.getCourses(),
          api.getStudentOrg(),
          api.getMediaFiles(),
          api.getMenuItems(),
          api.getCustomPages(),
          api.getSiteData().catch(() => ({}))
        ]);
        if (isMounted) {
          if (news && news.length > 0) setNewsList(news);
          if (lecturers && lecturers.length > 0) setLecturersList(lecturers);
          if (sps && sps.length > 0) setStudyProgramsList(sps);
          if (courses && courses.length > 0) setCoursesList(courses);
          if (org && org.name) setStudentOrgData(org);
          if (files && files.length > 0) setMediaFilesList(files);
          if (menus && menus.length > 0) setMenuItemsList(menus);
          if (pages && pages.length > 0) {
            setCustomPagesList(pages);
          } else {
            setCustomPagesList(defaultCustomPages);
          }
          if (siteData) {
            if (siteData.WEBSITE_SETTINGS) {
              localStorage.setItem('fti_website_settings', JSON.stringify(siteData.WEBSITE_SETTINGS));
              window.dispatchEvent(new Event('fti_settings_updated'));
            }
            if (siteData.CUSTOM_THEME_COLORS) {
              localStorage.setItem('fti_custom_theme_colors', JSON.stringify(siteData.CUSTOM_THEME_COLORS));
            }
            if (siteData.CUSTOM_THEME_FONTS) {
              localStorage.setItem('fti_custom_theme_fonts', JSON.stringify(siteData.CUSTOM_THEME_FONTS));
            }
            if (siteData.CUSTOM_THEME_SPACING) {
              localStorage.setItem('fti_custom_theme_spacing', JSON.stringify(siteData.CUSTOM_THEME_SPACING));
            }
          }
        }
      } catch (e) {
        console.warn('Backend API load error:', e);
      }
    }
    loadBackendData();
    return () => { isMounted = false; };
  }, []);

  // Apply custom theme colors, fonts, and spacing from localStorage
  useEffect(() => {
    try {
      const root = document.documentElement;
      const savedColors = localStorage.getItem('fti_custom_theme_colors');
      if (savedColors) {
        const colors = JSON.parse(savedColors);
        if (colors.primaryColor) root.style.setProperty('--primary-accent', colors.primaryColor);
        if (colors.secondaryColor) root.style.setProperty('--secondary-accent', colors.secondaryColor);
        if (colors.accentColor) root.style.setProperty('--accent-color', colors.accentColor);
        if (colors.headerBgColor) root.style.setProperty('--header-bg', colors.headerBgColor);
        if (colors.headerTextColor) root.style.setProperty('--header-text', colors.headerTextColor);
        if (colors.bodyBgColor) {
          root.style.setProperty('--body-bg', colors.bodyBgColor);
          document.body.style.backgroundColor = colors.bodyBgColor;
        }
        if (colors.cardBgColor) root.style.setProperty('--card-bg', colors.cardBgColor);
        if (colors.mainTextColor) {
          root.style.setProperty('--main-text', colors.mainTextColor);
          document.body.style.color = colors.mainTextColor;
        }
        if (colors.headingTextColor) root.style.setProperty('--heading-text', colors.headingTextColor);
      }

      const savedFonts = localStorage.getItem('fti_custom_theme_fonts');
      if (savedFonts) {
        const fonts = JSON.parse(savedFonts);
        if (fonts.bodyFont) {
          root.style.setProperty('--font-body', fonts.bodyFont);
          document.body.style.fontFamily = fonts.bodyFont;
        }
        if (fonts.headingFont) {
          root.style.setProperty('--font-heading', fonts.headingFont);
        }
        const baseSize = fonts.baseFontSize || 18;
        root.style.setProperty('--base-font-size', `${baseSize}px`);
        root.style.fontSize = `${baseSize}px`;
        document.body.style.fontSize = `${baseSize}px`;
      }
    } catch (e) {
      console.error('Error applying theme settings:', e);
    }
  }, []);

  // Dark mode class toggle
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleLoginSuccess = (user: User) => {
    setAdminUser(user);
    setIsAdminLoginModalOpen(false);
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('fti_admin_user');
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        isAiChatOpen,
        setIsAiChatOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAdminLoginModalOpen,
        setIsAdminLoginModalOpen,
        adminUser,
        setAdminUser,
        handleLoginSuccess,
        handleAdminLogout,
        newsList,
        setNewsList,
        lecturersList,
        setLecturersList,
        studyProgramsList,
        setStudyProgramsList,
        coursesList,
        setCoursesList,
        menuItemsList,
        setMenuItemsList,
        mediaFilesList,
        setMediaFilesList,
        studentOrgData,
        setStudentOrgData,
        customPagesList,
        setCustomPagesList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
