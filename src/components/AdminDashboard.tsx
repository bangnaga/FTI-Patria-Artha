import React, { useState, useEffect } from 'react';
import { Render } from '@measured/puck';
import { puckConfig } from './PageBuilder';
import { api } from '../services/api';
import { defaultCustomPages } from '../data/defaultCustomPages';
import { 
  NewsItem, 
  Lecturer, 
  StudyProgram, 
  Course, 
  MenuItem, 
  MediaFile,
  SpecializationType,
  AcademicCalendarItem,
  AlumniTestimonial,
  User
} from '../types';
import { MediaManager } from './MediaManager';
import { ThemeCustomizer } from './ThemeCustomizer';
import { UpaLogo } from './UpaLogo';
import { ensureArray } from '../utils/toArray';
import { 
  LayoutDashboard, 
  Newspaper, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Menu as MenuIcon, 
  Image as ImageIcon, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  AlertTriangle,
  Filter, 
  FileText,
  Building2,
  Code2,
  ShieldCheck,
  ChevronRight,
  LogOut,
  Layers,
  Settings,
  Upload,
  RefreshCw,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  GripVertical,
  Home,
  Layout,
  ArrowUp,
  ArrowDown,
  Palette,
  Database,
  Save,
  Smartphone,
  Tablet,
  Monitor,
  Calendar,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  UserCheck,
  UserX,
  Lock,
  Key,
  EyeOff
} from 'lucide-react';

interface AdminDashboardProps {
  newsList?: NewsItem[];
  setNewsList?: (news: NewsItem[]) => void;
  onUpdateNews?: (news: NewsItem[]) => void;

  lecturerList?: Lecturer[];
  lecturersList?: Lecturer[];
  setLecturersList?: (lecturers: Lecturer[]) => void;
  onUpdateLecturers?: (lecturers: Lecturer[]) => void;

  studyPrograms?: StudyProgram[];
  studyProgramsList?: StudyProgram[];
  setStudyProgramsList?: (prodi: StudyProgram[]) => void;
  onUpdateStudyPrograms?: (prodi: StudyProgram[]) => void;

  coursesList?: Course[];
  setCoursesList?: (courses: Course[]) => void;
  onUpdateCourses?: (courses: Course[]) => void;

  menuItems?: MenuItem[];
  menuItemsList?: MenuItem[];
  setMenuItemsList?: (menus: MenuItem[]) => void;
  onUpdateMenuItems?: (menus: MenuItem[]) => void;

  mediaFiles?: MediaFile[];
  mediaFilesList?: MediaFile[];
  setMediaFilesList?: (media: MediaFile[]) => void;
  onUpdateMediaFiles?: (media: MediaFile[]) => void;

  initialTab?: string;
  onOpenPageBuilder?: (page?: any) => void;
  onBackToWebsite?: () => void;
  user?: { name: string; role: string; email: string } | null;
  currentUser?: { name: string; role: string; email: string } | null;
  onLogout: () => void;
  studentOrg?: any;
  setStudentOrg?: any;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  initialTab,
  newsList: propNewsList,
  setNewsList,
  onUpdateNews,

  lecturerList: propLecturerList,
  lecturersList: propLecturersList,
  setLecturersList,
  onUpdateLecturers,

  studyPrograms: propStudyPrograms,
  studyProgramsList: propStudyProgramsList,
  setStudyProgramsList,
  onUpdateStudyPrograms,

  coursesList: propCoursesList,
  setCoursesList,
  onUpdateCourses,

  menuItems: propMenuItems,
  menuItemsList: propMenuItemsList,
  setMenuItemsList,
  onUpdateMenuItems,

  mediaFiles: propMediaFiles,
  mediaFilesList: propMediaFilesList,
  setMediaFilesList,
  onUpdateMediaFiles,

  onOpenPageBuilder,
  onBackToWebsite,
  user,
  currentUser,
  onLogout
}) => {
  const activeUser = currentUser || user || { name: 'Admin FTI', role: 'Superadmin', email: 'admin@local.lan' };

  // Data Resolvers
  const news = propNewsList || [];
  const lecturers = propLecturersList || propLecturerList || [];
  const prodis = propStudyProgramsList || propStudyPrograms || [];
  const courses = propCoursesList || [];
  const menus = propMenuItemsList || propMenuItems || [];
  const media = propMediaFilesList || propMediaFiles || [];

  // Data Updaters
  const handleUpdateNews = (items: NewsItem[]) => {
    if (setNewsList) setNewsList(items);
    if (onUpdateNews) onUpdateNews(items);
  };

  const handleUpdateLecturers = (items: Lecturer[]) => {
    if (setLecturersList) setLecturersList(items);
    if (onUpdateLecturers) onUpdateLecturers(items);
  };

  const handleUpdateProdi = (items: StudyProgram[]) => {
    if (setStudyProgramsList) setStudyProgramsList(items);
    if (onUpdateStudyPrograms) onUpdateStudyPrograms(items);
  };

  const handleUpdateCourses = (items: Course[]) => {
    if (setCoursesList) setCoursesList(items);
    if (onUpdateCourses) onUpdateCourses(items);
  };

  // --- MENU SAVE STATUS STATES ---
  const [menuSaveStatus, setMenuSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [menuSaveMessage, setMenuSaveMessage] = useState<string>('');

  const handleUpdateMenus = (items: MenuItem[]) => {
    if (setMenuItemsList) setMenuItemsList(items);
    if (onUpdateMenuItems) onUpdateMenuItems(items);
    // Note: auto-save happens silently in background; explicit save uses saveMenuToDatabase
  };

  const saveMenuToDatabase = async (items?: MenuItem[]) => {
    const menuList = items || menus;
    setMenuSaveStatus('saving');
    setMenuSaveMessage('Menyimpan menu ke database...');
    try {
      const res = await fetch('/api/menu-items/bulk', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menuList),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gagal menyimpan');
      setMenuSaveStatus('saved');
      setMenuSaveMessage(data.message || `${menuList.length} menu berhasil disimpan!`);
      showToast(`✅ ${data.message || 'Menu berhasil disimpan ke database!'}`);
      setTimeout(() => setMenuSaveStatus('idle'), 3000);
    } catch (err: any) {
      setMenuSaveStatus('error');
      setMenuSaveMessage(`Gagal menyimpan: ${err.message}`);
      showToast(`❌ Gagal simpan menu: ${err.message}`);
      setTimeout(() => setMenuSaveStatus('idle'), 5000);
    }
  };

  const handleUpdateMedia = (items: MediaFile[]) => {
    if (setMediaFilesList) setMediaFilesList(items);
    if (onUpdateMediaFiles) onUpdateMediaFiles(items);
  };

  // Tab State
  const [activeTab, setActiveTab] = useState<'overview' | 'berita' | 'dosen' | 'prodi' | 'kurikulum' | 'custom-page' | 'menu' | 'media' | 'tema' | 'pengaturan' | 'kalender' | 'testimoni' | 'pengguna' | 'footer-editor'>((initialTab as any) || 'overview');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab as any);
    }
  }, [initialTab]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [prodiFilter, setProdiFilter] = useState<string>('all');

  // Media Picker Target state (function callback when media selected)
  const [mediaPickerTarget, setMediaPickerTarget] = useState<((url: string) => void) | null>(null);

  // Helper Toast
  const [toast, setToast] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Error Dialog Box State
  const [errorDialog, setErrorDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    details?: string;
  }>({
    isOpen: false,
    title: '',
    message: '',
    details: ''
  });

  const showErrorDialog = (title: string, message: string, details?: string) => {
    setErrorDialog({
      isOpen: true,
      title,
      message,
      details: details || ''
    });
  };

  const closeErrorDialog = () => {
    setErrorDialog(prev => ({ ...prev, isOpen: false }));
  };

  // Database Connection Indicator State
  const [dbHealth, setDbHealth] = useState<{
    status: 'checking' | 'active' | 'failed' | 'cached';
    database: string;
    stats?: Record<string, number>;
    lastChecked?: string;
    error?: string;
  }>({
    status: 'checking',
    database: 'MySQL / TiDB Cloud'
  });

  const checkDbConnection = async () => {
    setDbHealth(prev => ({ ...prev, status: 'checking' }));
    try {
      const res = await api.checkHealth();
      if (res && res.status === 'ok') {
        setDbHealth({
          status: 'active',
          database: res.database || 'MySQL / TiDB Cloud (Prisma ORM)',
          stats: res.dbStats,
          lastChecked: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        });
      } else {
        setDbHealth({
          status: 'cached',
          database: 'Data Lokal (Cached)',
          error: res.error || 'Server database offline, menggunakan data lokal.',
          lastChecked: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        });
      }
    } catch (err) {
      setDbHealth({
        status: 'failed',
        database: 'Koneksi TiDB Gagal',
        error: String(err),
        lastChecked: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
    }
  };

  useEffect(() => {
    checkDbConnection();
    const interval = setInterval(checkDbConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  // --- CUSTOM PAGES CRUD STATES ---
  const [customPages, setCustomPages] = useState<any[]>([]);

  // --- ACADEMIC CALENDAR STATES ---
  const [academicCalendarItems, setAcademicCalendarItems] = useState<AcademicCalendarItem[]>([]);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [editingCalendarItem, setEditingCalendarItem] = useState<AcademicCalendarItem | null>(null);
  const [calendarForm, setCalendarForm] = useState<Partial<AcademicCalendarItem>>({
    title: '', startDate: '', endDate: '', category: 'Perkuliahan', semester: 'Ganjil 2026/2027'
  });

  const fetchAcademicCalendar = async () => {
    try {
      const data = await api.getAcademicCalendar();
      setAcademicCalendarItems(data);
    } catch (err) {
      console.warn('Failed to fetch academic calendar', err);
    }
  };

  useEffect(() => {
    if (activeTab === 'kalender' && academicCalendarItems.length === 0) {
      fetchAcademicCalendar();
    }
  }, [activeTab]);

  // --- TESTIMONI STATES ---
  const [testimonials, setTestimonials] = useState<AlumniTestimonial[]>([]);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<AlumniTestimonial | null>(null);
  const [testimonialForm, setTestimonialForm] = useState<Partial<AlumniTestimonial>>({
    name: '', gradYear: new Date().getFullYear(), role: '', company: '', companyLogo: '', photo: '', quote: '', linkedinUrl: ''
  });

  const fetchTestimonials = async () => {
    try {
      const data = await api.getAlumniTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.warn('Failed to fetch testimonials', err);
    }
  };

  useEffect(() => {
    if (activeTab === 'testimoni' && testimonials.length === 0) {
      fetchTestimonials();
    }
  }, [activeTab]);

  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.quote) {
      showToast('❌ Nama dan Kutipan Testimoni wajib diisi!');
      return;
    }
    try {
      if (editingTestimonial) {
        const updated = await api.updateAlumniTestimonial(editingTestimonial.id, testimonialForm);
        setTestimonials(prev => prev.map(t => t.id === editingTestimonial.id ? updated : t));
        showToast(`✅ Testimoni '${updated.name}' berhasil diperbarui!`);
      } else {
        const created = await api.createAlumniTestimonial({
          name: testimonialForm.name,
          gradYear: Number(testimonialForm.gradYear) || new Date().getFullYear(),
          role: testimonialForm.role || '',
          company: testimonialForm.company || '',
          companyLogo: testimonialForm.companyLogo || '',
          photo: testimonialForm.photo || '',
          quote: testimonialForm.quote || '',
          linkedinUrl: testimonialForm.linkedinUrl || '',
        });
        setTestimonials(prev => [created, ...prev]);
        showToast(`✅ Testimoni '${created.name}' berhasil ditambahkan!`);
      }
      setIsTestimonialModalOpen(false);
      setEditingTestimonial(null);
      setTestimonialForm({ name: '', gradYear: new Date().getFullYear(), role: '', company: '', companyLogo: '', photo: '', quote: '', linkedinUrl: '' });
    } catch (err: any) {
      showToast(`❌ Gagal menyimpan testimoni: ${err.message}`);
    }
  };

  const handleDeleteTestimonial = (id: string) => {
    const item = testimonials.find(t => t.id === id);
    const itemName = item ? item.name : 'testimoni ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Testimoni',
      itemName,
      async () => {
        try {
          await api.deleteAlumniTestimonial(id);
          setTestimonials(prev => prev.filter(t => t.id !== id));
          showToast(`Testimoni '${itemName}' berhasil dihapus.`);
        } catch (err: any) {
          showToast(`❌ Gagal menghapus testimoni: ${err.message}`);
        }
      },
      `Apakah Anda yakin ingin menghapus testimoni dari "${itemName}"? Data ini akan dihapus permanen.`
    );
  };

  // --- USER MANAGEMENT STATES & HANDLERS ---
  const [usersList, setUsersList] = useState<User[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fti_users_list');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed.filter((u: User) => 
              !u.email.includes('admin@patria-artha') && 
              !u.email.includes('operator@patria-artha') &&
              !u.email.includes('admin@local') &&
              !u.email.includes('operator@gmail')
            );
          }
        } catch (e) {}
      }
    }
    return [];
  });
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [userForm, setUserForm] = useState<Partial<User>>({
    name: '', email: '', password: '', role: 'Admin', status: 'active', avatarUrl: ''
  });
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleGenerateRandomPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
    let res = 'UPA-';
    for (let i = 0; i < 8; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setUserForm(prev => ({ ...prev, password: res }));
    showToast('🔑 Password acak berhasil dibuat!');
  };

  const fetchUsers = async () => {
    try {
      const data = await api.getUsers();
      if (Array.isArray(data)) {
        const dbUsers: User[] = data.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          password: u.password || 'UPA2026!',
          role: (u.role as any) || 'Admin',
          status: (u.status as any) || 'Active',
          avatarUrl: u.avatar || u.avatarUrl || '',
          createdAt: u.createdAt ? new Date(u.createdAt).toISOString().split('T')[0] : '-'
        }));
        setUsersList(dbUsers);
        if (typeof window !== 'undefined') {
          localStorage.setItem('fti_users_list', JSON.stringify(dbUsers));
        }
      }
    } catch (err) {
      console.warn('Failed to fetch users from server API', err);
    }
  };

  useEffect(() => {
    if (activeTab === 'pengguna') {
      fetchUsers();
    }
  }, [activeTab]);

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = (userForm.name || '').trim();
    const cleanEmail = (userForm.email || '').trim().toLowerCase();
    const cleanPassword = (userForm.password || '').trim();

    if (!cleanName) {
      showErrorDialog('Nama Pengguna Kosong', 'Nama lengkap pengguna wajib diisi. Silakan ketik nama pengguna terlebih dahulu.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      showErrorDialog('Format Email Tidak Valid', 'Format email yang Anda masukkan tidak sesuai standar. Harap gunakan alamat email yang sah (contoh: user@patria-artha.ac.id).');
      return;
    }

    if (!editingUser && (!cleanPassword || cleanPassword.length < 4)) {
      showErrorDialog('Kata Sandi Terlalu Pendek', 'Kata sandi (password) minimal 4 karakter wajib diisi untuk membuat akun pengguna baru.');
      return;
    }

    // Check for duplicate email before saving
    const duplicateUser = usersList.find(u => 
      editingUser ? (u.id !== editingUser.id && u.email.toLowerCase() === cleanEmail) : u.email.toLowerCase() === cleanEmail
    );

    if (duplicateUser) {
      showErrorDialog(
        'Email Sudah Terdaftar',
        `Alamat email '${cleanEmail}' sudah terdaftar dan digunakan oleh pengguna '${duplicateUser.name}' di sistem. Harap gunakan alamat email yang lain.`
      );
      return;
    }

    try {
      if (editingUser) {
        const payload: any = {
          name: cleanName,
          email: cleanEmail,
          role: userForm.role || 'Admin',
          status: userForm.status || 'Active',
          avatar: userForm.avatarUrl || userForm.avatar || ''
        };
        if (cleanPassword) {
          payload.password = cleanPassword;
        }

        const updatedFromApi = await api.updateUser(editingUser.id, payload);

        setUsersList(prev => prev.map(u => u.id === editingUser.id ? { 
          ...u, 
          name: updatedFromApi.name || cleanName,
          email: updatedFromApi.email || cleanEmail,
          role: (updatedFromApi.role as any) || payload.role,
          status: (updatedFromApi.status as any) || payload.status,
          avatarUrl: updatedFromApi.avatar || payload.avatar,
          password: cleanPassword ? cleanPassword : (u.password || 'UPA2026!') 
        } : u));

        showToast(`✅ Data pengguna '${cleanName}' & kata sandi berhasil disimpan di database!`);
      } else {
        const payload = {
          name: cleanName,
          email: cleanEmail,
          password: cleanPassword || 'UPA2026!',
          role: userForm.role || 'Admin',
          status: (userForm.status || 'active') as any,
          avatar: userForm.avatarUrl || userForm.avatar || ''
        };

        const created = await api.createUser(payload);

        const newUser: User = {
          id: created.id || `usr-${Date.now()}`,
          name: created.name || cleanName,
          email: created.email || cleanEmail,
          password: created.password || cleanPassword || 'UPA2026!',
          role: (created.role as any) || payload.role,
          status: (created.status as any) || payload.status,
          avatarUrl: created.avatar || payload.avatar,
          createdAt: new Date().toISOString().split('T')[0],
          lastLogin: '-'
        };

        setUsersList(prev => [...prev.filter(u => u.id !== newUser.id), newUser]);
        showToast(`✅ Akun pengguna baru '${cleanName}' (${newUser.role}) berhasil disimpan di database!`);
      }

      setIsUserModalOpen(false);
      setEditingUser(null);
      setUserForm({ name: '', email: '', password: '', role: 'Admin', status: 'active', avatarUrl: '' });
      setShowUserPassword(false);
    } catch (err: any) {
      console.error('Save user error:', err);
      showErrorDialog(
        'Gagal Menyimpan Data Pengguna',
        err.message || 'Terjadi kesalahan sistem saat menghubungi database server.',
        `Rincian: ${err.stack || err.name || 'API Error'}`
      );
    }
  };

  const handleDeleteUser = (id: string) => {
    const item = usersList.find(u => u.id === id);
    const itemName = item ? item.name : 'pengguna ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Pengguna',
      itemName,
      async () => {
        try {
          await api.deleteUser(id);
          await fetchUsers();
          showToast(`✅ Pengguna '${itemName}' berhasil dihapus dari database.`);
        } catch (err: any) {
          showErrorDialog(
            'Gagal Menghapus Pengguna',
            err.message || 'Terjadi kesalahan sistem saat menghapus data pengguna dari database database.'
          );
        }
      },
      `Apakah Anda yakin ingin menghapus akses untuk pengguna "${itemName}"? Pengguna ini tidak akan bisa login lagi.`
    );
  };


  const [loadingCustomPages, setLoadingCustomPages] = useState(false);
  const [editingCustomPageMeta, setEditingCustomPageMeta] = useState<any | null>(null);
  const [isCustomPageModalOpen, setIsCustomPageModalOpen] = useState(false);
  const [previewCustomPage, setPreviewCustomPage] = useState<any | null>(null);
  const [previewViewport, setPreviewViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [customPageForm, setCustomPageForm] = useState<{
    id: string;
    title: string;
    slug: string;
    published: boolean;
    seoTitle: string;
    seoDesc: string;
    metaKeywords: string;
  }>({
    id: '',
    title: '',
    slug: '',
    published: true,
    seoTitle: '',
    seoDesc: '',
    metaKeywords: '',
  });

  const loadCustomPages = async () => {
    setLoadingCustomPages(true);
    try {
      const res = await api.getCustomPages();
      if (Array.isArray(res) && res.length > 0) {
        const resIds = new Set(res.map((r: any) => r.id));
        const resSlugs = new Set(res.map((r: any) => r.slug));
        const missing = defaultCustomPages.filter(dp => !resIds.has(dp.id) && !resSlugs.has(dp.slug));
        setCustomPages([...res, ...missing]);
      } else {
        setCustomPages(defaultCustomPages);
      }
    } catch (err) {
      console.error('Failed to load custom pages:', err);
      setCustomPages(defaultCustomPages);
    } finally {
      setLoadingCustomPages(false);
    }
  };

  useEffect(() => {
    loadCustomPages();
  }, []);

  const handleOpenCreateCustomPageModal = () => {
    setEditingCustomPageMeta(null);
    const ts = Date.now();
    setCustomPageForm({
      id: `cp_${ts}`,
      title: 'Halaman Kustom Baru',
      slug: `halaman-${ts}`,
      published: true,
      seoTitle: '',
      seoDesc: '',
      metaKeywords: '',
    });
    setIsCustomPageModalOpen(true);
  };

  const handleOpenEditCustomPageModal = (page: any) => {
    setEditingCustomPageMeta(page);
    setCustomPageForm({
      id: page.id,
      title: page.title || '',
      slug: page.slug || '',
      published: page.published !== undefined ? Boolean(page.published) : true,
      seoTitle: page.seoTitle || '',
      seoDesc: page.seoDesc || '',
      metaKeywords: page.metaKeywords || '',
    });
    setIsCustomPageModalOpen(true);
  };

  const handleSaveCustomPageMetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCustomPageMeta) {
        await api.updateCustomPage(customPageForm.id, {
          ...editingCustomPageMeta,
          ...customPageForm
        });
        showToast(`✅ Metadata Halaman "${customPageForm.title}" berhasil diperbarui!`);
      } else {
        await api.createCustomPage({
          ...customPageForm,
          content: []
        });
        showToast(`✨ Halaman Custom baru "${customPageForm.title}" berhasil dibuat!`);
      }
      setIsCustomPageModalOpen(false);
      loadCustomPages();
    } catch (err: any) {
      alert(`Gagal menyimpan halaman custom: ${err.message}`);
    }
  };

  const handleTogglePublishCustomPage = async (page: any) => {
    try {
      await api.updateCustomPage(page.id, {
        ...page,
        published: !page.published
      });
      showToast(`Status publikasi halaman "${page.title}" diubah.`);
      loadCustomPages();
    } catch (err: any) {
      alert(`Gagal merubah status: ${err.message}`);
    }
  };

  const handleDeleteCustomPage = async (page: any) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus halaman custom "${page.title}"?`)) {
      try {
        await api.deleteCustomPage(page.id);
        showToast(`🗑️ Halaman "${page.title}" berhasil dihapus.`);
        loadCustomPages();
      } catch (err: any) {
        alert(`Gagal menghapus halaman: ${err.message}`);
      }
    }
  };

  // --- BERITA CRUD STATES ---
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [newsForm, setNewsForm] = useState<Partial<NewsItem>>({
    title: '', category: 'Berita', date: new Date().toISOString().split('T')[0],
    author: activeUser.name || 'Humas FTI UPA', thumbnail: '', summary: '', content: '', tags: [], featured: false
  });

  // --- DOSEN CRUD STATES ---
  const [editingLecturer, setEditingLecturer] = useState<Lecturer | null>(null);
  const [isLecturerModalOpen, setIsLecturerModalOpen] = useState(false);
  const [lecturerForm, setLecturerForm] = useState<Partial<Lecturer>>({
    name: '', nidn: '', title: 'Dosen Tetap FTI', studyProgram: 'Teknik Informatika', photo: '',
    expertise: ['AI'], expertiseTags: ['AI', 'Python'], email: '', lab: 'Lab FTI',
    education: ['S1 Komputer', 'S2 Komputer'], googleScholar: '', scopus: '', sinta: '',
    orcid: '', researchGate: '', coursesTaught: ['Algoritma & Pemrograman'], publicationsCount: 5
  });

  // --- PRODI CRUD STATES ---
  const [editingProdi, setEditingProdi] = useState<StudyProgram | null>(null);
  const [isProdiModalOpen, setIsProdiModalOpen] = useState(false);
  const [prodiForm, setProdiForm] = useState<Partial<StudyProgram>>({
    code: '', name: '', degree: 'S1', accreditation: 'Unggul (LAM INFOKOM)',
    headOfProgram: '', headOfProdi: '', headOfProdiNidn: '', headOfProdiPhoto: '', description: '', totalSks: 144, activeStudents: 500, capacity: 150, vision: '', logoUrl: ''
  });

  // --- KURIKULUM CRUD STATES ---
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [courseForm, setCourseForm] = useState<Partial<Course>>({
    code: '', name: '', sks: 3, semester: 1, category: 'Wajib Prodi', specialization: 'AI', studyProgram: 'Teknik Informatika', description: '', rpsUrl: ''
  });

  // --- MENU CRUD STATES ---
  const [editingMenu, setEditingMenu] = useState<MenuItem | null>(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuForm, setMenuForm] = useState<Partial<MenuItem>>({
    label: '', line1: '', line2: '', icon: '', url: '', isVisible: true, badge: '', order: menus.length + 1
  });

  const [isSubMenuModalOpen, setIsSubMenuModalOpen] = useState(false);
  const [editingSubMenuInfo, setEditingSubMenuInfo] = useState<{ parentIndex: number; childIndex: number | null } | null>(null);
  const [subMenuForm, setSubMenuForm] = useState<{
    label: string;
    line1: string;
    line2: string;
    icon: string;
    url: string;
    badge: string;
  }>({
    label: '',
    line1: '',
    line2: '',
    icon: '',
    url: '',
    badge: ''
  });

  // --- DELETE CONFIRMATION DIALOG STATE ---
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    itemName: string;
    message?: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    itemName: '',
    message: '',
    onConfirm: () => {}
  });

  const openDeleteConfirm = (title: string, itemName: string, onConfirmAction: () => void, customMsg?: string) => {
    setDeleteConfirmDialog({
      isOpen: true,
      title,
      itemName,
      message: customMsg || `Apakah Anda yakin ingin menghapus "${itemName}"? Data yang dihapus tidak dapat dikembalikan.`,
      onConfirm: () => {
        onConfirmAction();
        setDeleteConfirmDialog(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  // --- PENGATURAN FAKULTAS STATE & PRESET TEMA MERAH PUTIH ---
  const THEME_PRESETS = [
    {
      id: 'putih-bersih-semua',
      name: 'Latar Putih Bersih (Full White Clean)',
      desc: 'Pengaturan latar belakang putih bersih (#FFFFFF) di seluruh website dengan aksen Merah Cerah FTI (#DC2626) yang kontras & modern',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      bgColor: '#FFFFFF',
      cardColor: '#FFFFFF',
      mainTextColor: '#1E293B',
      headerBgColor: '#DC2626',
      headerTextColor: '#FFF5F5',
      accentColor: '#F59E0B',
      previewGradient: 'from-red-600 via-red-500 to-white',
      badge: 'Bg Putih Semua'
    },
    {
      id: 'merah-cerah-putih',
      name: 'Merah Cerah & Putih FTI (Default Resmi)',
      desc: 'Warna identitas resmi FTI Patria Artha: Merah Cerah (#DC2626), Merah Cabai Modern, Putih Bersih & Emas FTI',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      bgColor: '#FFFFFF',
      cardColor: '#FFFFFF',
      mainTextColor: '#1E293B',
      headerBgColor: '#DC2626',
      headerTextColor: '#FFF5F5',
      accentColor: '#F59E0B',
      previewGradient: 'from-red-600 via-red-500 to-white',
      badge: 'Resmi FTI'
    },
    {
      id: 'putih-minimalis-header-white',
      name: 'Minimalis All-White (Header & Body Putih)',
      desc: 'Tema serba putih dengan Navbar header putih (#FFFFFF), teks gelap, dan aksen Merah Cerah modern',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      bgColor: '#FFFFFF',
      cardColor: '#FAFAFA',
      mainTextColor: '#0F172A',
      headerBgColor: '#FFFFFF',
      headerTextColor: '#0F172A',
      accentColor: '#DC2626',
      previewGradient: 'from-slate-200 via-white to-red-600',
      badge: 'Full White Header'
    },
    {
      id: 'merah-putih-nasional',
      name: 'Merah Putih Nasional (Bendera Indonesia)',
      desc: 'Kombinasi patriotik Merah Bendera cerah (#DC2626) dan Putih Suci (#FFFFFF) dengan kontras tegas & bersih',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      bgColor: '#FFFFFF',
      cardColor: '#FFFFFF',
      mainTextColor: '#0F172A',
      headerBgColor: '#DC2626',
      headerTextColor: '#FFFFFF',
      accentColor: '#2563EB',
      previewGradient: 'from-red-600 via-red-500 to-slate-50',
      badge: 'Nasional'
    },
    {
      id: 'merah-crimson-cream',
      name: 'Merah Crimson & Krem Putih Halus',
      desc: 'Tema hangat dengan warna Crimson Bright, latar Krem Putih Halus (#FFFDF8) & aksen Amber Emas',
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      bgColor: '#FFFDF8',
      cardColor: '#FFFFFF',
      mainTextColor: '#2D3748',
      headerBgColor: '#B91C1C',
      headerTextColor: '#FFF5F5',
      accentColor: '#D97706',
      previewGradient: 'from-red-700 via-red-600 to-amber-50',
      badge: 'Elegance'
    },
    {
      id: 'dark-maroon-putih',
      name: 'Dark Mode Red & Slate',
      desc: 'Tampilan modern latar gelap Slate Navy (#0F172A) dengan aksen Merah Cerah & Teks Putih Kontras',
      primaryColor: '#EF4444',
      secondaryColor: '#DC2626',
      bgColor: '#0F172A',
      cardColor: '#1E293B',
      mainTextColor: '#F8FAFC',
      headerBgColor: '#0F172A',
      headerTextColor: '#F8FAFC',
      accentColor: '#38BDF8',
      previewGradient: 'from-slate-900 via-red-600 to-red-500',
      badge: 'Dark Mode'
    }
  ];

  const [selectedThemePreset, setSelectedThemePreset] = useState<string>(() => {
    return localStorage.getItem('fti_web_theme_preset') || 'putih-bersih-semua';
  });

  const [settingsSubTab, setSettingsSubTab] = useState<'identitas' | 'logo' | 'tampilan' | 'kontak' | 'seo' | 'sistem'>('identitas');

  const [customColors, setCustomColors] = useState(() => {
    const saved = localStorage.getItem('fti_custom_theme_colors');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      primaryColor: '#DC2626',
      secondaryColor: '#B91C1C',
      accentColor: '#F59E0B',
      headerBgColor: '#DC2626',
      headerTextColor: '#FFF5F5',
      bodyBgColor: '#FFFFFF',
      cardBgColor: '#FFFFFF',
      mainTextColor: '#1E293B'
    };
  });

  const applyCustomColorsToRoot = (colors: { 
    primaryColor: string; 
    secondaryColor: string; 
    accentColor: string; 
    headerBgColor: string;
    headerTextColor?: string;
    bodyBgColor?: string;
    cardBgColor?: string;
    mainTextColor?: string;
  }) => {
    if (!colors) return;
    const root = document.documentElement;
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
  };

  const [websiteSettings, setWebsiteSettings] = useState(() => {
    const saved = localStorage.getItem('fti_website_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      siteTitle: 'Situs Resmi FTI Universitas Patria Artha',
      siteTagline: 'Unggul, Inovatif, & Berbasis Artificial Intelligence',
      runningText: '📢 Penerimaan Mahasiswa Baru (PMB) FTI T.A. 2026/2027 Gelombang 2 Telah Dibuka! Dapatkan Beasiswa Potongan Biaya Kuliah.',
      isMaintenanceMode: false,
      logoUrl: '',
      logoDarkUrl: '',
      faviconUrl: '',
      logoText: 'Fakultas Teknik & Informatika',
      logoSubtitle: 'Universitas Patria Artha (U.P.A)',
      logoTextFontSize: 14,
      logoTextLetterSpacing: 0,
      logoHeightPx: 46,
      useCustomLogoImage: false,
      
      facultyName: 'Fakultas Teknik dan Informatika',
      universityName: 'Universitas Patria Artha',
      deanName: 'Prof. Dr. Ir. H. M. Said, M.T.',
      accreditationText: 'Unggul & Terakreditasi BAN-PT / LAM INFOKOM',
      email: 'fti@patria-artha.ac.id',
      phone: '+62 411 888 9999',
      whatsappSpmb: '+62 812 3456 7890',
      address: 'Jl. Tun Abdul Razak No. 1, Gowa - Makassar, Sulawesi Selatan',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5!2d119.45!3d-5.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTAnNDguMCJTIDExOcKwMjcnMDAwLjAiRQ!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid',
      
      vision: 'Menjadi Fakultas Teknik & Informatika unggulan nasional berstandar internasional berbasis Artificial Intelligence dan kewirausahaan digital.',
      mission: '1. Menyelenggarakan pendidikan berkualitas di bidang TI dan Teknik.\n2. Melaksanakan penelitian inovatif berstandar nasional dan internasional.\n3. Mengabdi kepada masyarakat berbasis solusi digital nyata.',

      instagram: '@fti_patriaartha',
      facebook: 'FTI Universitas Patria Artha',
      youtube: 'FTI Patria Artha Official',
      linkedin: 'fti-patria-artha',
      tiktok: '@fti_patriaartha',

      navbarLayout: 'sticky',
      footerCopyright: '© 2026 Fakultas Teknik & Informatika - Universitas Patria Artha. All Rights Reserved.',

      metaTitle: 'FTI Patria Artha - Fakultas Teknik & Informatika',
      metaDescription: 'Situs resmi Fakultas Teknik dan Informatika Universitas Patria Artha Makassar. Program Studi Teknik Informatika, Sistem Informasi, dan AI.',
      metaKeywords: 'FTI Patria Artha, Teknik Informatika, Sistem Informasi, Kuliah AI Makassar, Kampus IT Makassar',
      googleAnalyticsId: 'G-FTIPATRIA2026',

      isPmbActive: true,
      showAiAssistant: true
    };
  });

  const persistWebsiteSettings = (settings: typeof websiteSettings) => {
    localStorage.setItem('fti_website_settings', JSON.stringify(settings));
    window.dispatchEvent(new Event('fti_settings_updated'));
    api.saveSiteData('WEBSITE_SETTINGS', settings).catch((err) => {
      console.warn('Gagal menyimpan settings ke database:', err);
    });
  };

  const [facultyInfo, setFacultyInfo] = useState({
    facultyName: websiteSettings.facultyName,
    universityName: websiteSettings.universityName,
    deanName: websiteSettings.deanName,
    email: websiteSettings.email,
    phone: websiteSettings.phone,
    address: websiteSettings.address,
    vision: websiteSettings.vision,
    instagram: websiteSettings.instagram,
    website: 'https://fti.patria-artha.ac.id'
  });

  const handleSelectThemePreset = (presetId: string, autoReload = true) => {
    setSelectedThemePreset(presetId);
    localStorage.setItem('fti_web_theme_preset', presetId);
    setWebsiteSettings(prev => ({ ...prev, selectedThemePreset: presetId }));
    const presetObj = THEME_PRESETS.find(p => p.id === presetId);
    if (presetObj) {
      const newColors = {
        primaryColor: presetObj.primaryColor,
        secondaryColor: presetObj.secondaryColor,
        accentColor: presetObj.accentColor,
        headerBgColor: presetObj.headerBgColor || presetObj.secondaryColor,
        headerTextColor: presetObj.headerTextColor || '#FFF5F5',
        bodyBgColor: presetObj.bgColor || '#FFFFFF',
        cardBgColor: presetObj.cardColor || '#FFFFFF',
        mainTextColor: presetObj.mainTextColor || '#1E293B'
      };
      setCustomColors(newColors);
      localStorage.setItem('fti_custom_theme_colors', JSON.stringify(newColors));
      applyCustomColorsToRoot(newColors);
    }
    showToast(`Preset '${presetObj?.name || presetId}' disimpan. Memuat ulang tampilan...`);
    if (autoReload) {
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  };

  // --- HANDLERS ---
  const handleSaveNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.summary) return;

    try {
      if (editingNews) {
        const updatedEntry = { ...editingNews, ...newsForm } as NewsItem;
        const saved = await api.updateNews(editingNews.id, updatedEntry);
        const updated = news.map(n => n.id === editingNews.id ? saved : n);
        handleUpdateNews(updated);
        showToast('✅ Berita berhasil diperbarui di database!');
      } else {
        const newEntry: Partial<NewsItem> = {
          title: newsForm.title || '',
          slug: (newsForm.title || '').toLowerCase().replace(/[^a-z0-9]/g, '-'),
          category: (newsForm.category as any) || 'Berita',
          date: newsForm.date || new Date().toISOString().split('T')[0],
          author: newsForm.author || activeUser.name || 'Admin FTI',
          thumbnail: newsForm.thumbnail || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
          summary: newsForm.summary || '',
          content: newsForm.content || newsForm.summary || '',
          tags: typeof newsForm.tags === 'string' ? (newsForm.tags as string).split(',').map(t => t.trim()) : (newsForm.tags || ['FTI']),
          featured: newsForm.featured || false
        };
        const saved = await api.createNews(newEntry);
        handleUpdateNews([saved, ...news]);
        showToast('✅ Berita baru berhasil direkam ke database!');
      }
      setIsNewsModalOpen(false);
      setEditingNews(null);
    } catch (err: any) {
      console.error('Error saving news:', err);
      showToast(`❌ Gagal menyimpan berita ke database: ${err.message}`);
    }
    setEditingNews(null);
  };

  const handleDeleteNews = (id: string) => {
    const item = news.find(n => n.id === id);
    const itemName = item ? item.title : 'berita ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Berita',
      itemName,
      async () => {
        try {
          await api.deleteNews(id);
        } catch (err) {
          console.warn('Backend API delete failed, removing locally:', err);
        }
        handleUpdateNews(news.filter(n => n.id !== id));
        showToast('Berita berhasil dihapus secara permanen dari database.');
      },
      `Apakah Anda yakin ingin menghapus berita "${itemName}"? Artikel ini akan dihapus secara permanen dari database portal FTI.`
    );
  };

  const handleSaveCalendar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!calendarForm.title || !calendarForm.startDate) return;

    try {
      const processedData: Partial<AcademicCalendarItem> = {
        ...calendarForm,
        title: calendarForm.title || '',
        startDate: calendarForm.startDate || '',
        endDate: calendarForm.endDate || calendarForm.startDate || '',
        category: (calendarForm.category as any) || 'Perkuliahan',
        semester: (calendarForm.semester as any) || 'Ganjil 2026/2027',
      };

      if (editingCalendarItem) {
        const saved = await api.updateAcademicCalendar(editingCalendarItem.id, processedData);
        setAcademicCalendarItems(prev => prev.map(item => item.id === editingCalendarItem.id ? saved : item));
        showToast('Kalender Akademik berhasil diperbarui!');
      } else {
        const saved = await api.createAcademicCalendar(processedData);
        setAcademicCalendarItems(prev => [saved, ...prev]);
        showToast('Agenda Kalender baru berhasil ditambahkan!');
      }
    } catch (err: any) {
      console.error('Error saving calendar:', err);
      showToast('Gagal menyimpan kalender. Periksa koneksi.');
    }

    setIsCalendarModalOpen(false);
    setEditingCalendarItem(null);
  };

  const handleDeleteCalendar = (id: string) => {
    const item = academicCalendarItems.find(c => c.id === id);
    const itemName = item ? item.title : 'agenda ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Agenda Kalender',
      itemName,
      async () => {
        try {
          await api.deleteAcademicCalendar(id);
          setAcademicCalendarItems(prev => prev.filter(c => c.id !== id));
          showToast(`Agenda '${itemName}' berhasil dihapus.`);
        } catch (err) {
          console.warn('Backend API delete failed:', err);
          showToast('Gagal menghapus agenda.');
        }
      },
      `Apakah Anda yakin ingin menghapus agenda kalender "${itemName}"?`
    );
  };

  const handleSaveLecturer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lecturerForm.name || !lecturerForm.nidn) return;

    const parsedExpertise = typeof lecturerForm.expertise === 'string'
      ? (lecturerForm.expertise as string).split(',').map(s => s.trim()).filter(Boolean) as SpecializationType[]
      : (lecturerForm.expertise || ['AI']);

    const parsedExpertiseTags = typeof lecturerForm.expertiseTags === 'string'
      ? (lecturerForm.expertiseTags as string).split(',').map(s => s.trim()).filter(Boolean)
      : (lecturerForm.expertiseTags || ['Informatika']);

    const parsedEducation = typeof lecturerForm.education === 'string'
      ? (lecturerForm.education as string).split(',').map(s => s.trim()).filter(Boolean)
      : (lecturerForm.education || ['S1 Komputer', 'S2 Komputer']);

    const parsedCoursesTaught = typeof lecturerForm.coursesTaught === 'string'
      ? (lecturerForm.coursesTaught as string).split(',').map(s => s.trim()).filter(Boolean)
      : (lecturerForm.coursesTaught || ['Pemrograman']);

    const processedLecturer: Lecturer = {
      id: editingLecturer ? editingLecturer.id : `lec-${Date.now()}`,
      name: lecturerForm.name || '',
      nidn: lecturerForm.nidn || '',
      title: lecturerForm.title || 'Dosen Tetap FTI',
      jabatan: lecturerForm.jabatan || '',
      studyProgram: lecturerForm.studyProgram || 'Teknik Informatika',
      photo: lecturerForm.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: lecturerForm.email || 'dosen@patria-artha.ac.id',
      lab: lecturerForm.lab || 'Lab FTI',
      expertise: parsedExpertise,
      expertiseTags: parsedExpertiseTags,
      education: parsedEducation,
      coursesTaught: parsedCoursesTaught,
      publicationsCount: Number(lecturerForm.publicationsCount) || 0,
      googleScholar: lecturerForm.googleScholar || '',
      scopus: lecturerForm.scopus || '',
      sinta: lecturerForm.sinta || '',
      orcid: lecturerForm.orcid || '',
      researchGate: lecturerForm.researchGate || ''
    };

    try {
      if (editingLecturer) {
        const saved = await api.updateLecturer(editingLecturer.id, processedLecturer);
        const updated = lecturers.map(l => l.id === editingLecturer.id ? saved : l);
        handleUpdateLecturers(updated);
        showToast('✅ Data dosen berhasil diperbarui di database!');
      } else {
        const saved = await api.createLecturer(processedLecturer);
        handleUpdateLecturers([...lecturers, saved]);
        showToast('✅ Dosen baru berhasil direkam ke database!');
      }
      setIsLecturerModalOpen(false);
      setEditingLecturer(null);
    } catch (err: any) {
      console.error('Error saving lecturer:', err);
      showToast(`❌ Gagal menyimpan data dosen ke database: ${err.message}`);
    }
  };

  const handleDeleteLecturer = (id: string) => {
    const item = lecturers.find(l => l.id === id);
    const itemName = item ? item.name : 'dosen ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Data Dosen',
      itemName,
      async () => {
        try {
          await api.deleteLecturer(id);
          handleUpdateLecturers(lecturers.filter(l => l.id !== id));
          showToast('Data dosen dihapus dari database.');
        } catch (err: any) {
          showToast(`❌ Gagal menghapus dosen: ${err.message}`);
        }
      },
      `Apakah Anda yakin ingin menghapus profil dosen "${itemName}"?`
    );
  };

  const handleSaveProdi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodiForm.name || !prodiForm.code) return;

    try {
      if (editingProdi) {
        const updatedItem = { ...editingProdi, ...prodiForm } as StudyProgram;
        const saved = await api.updateStudyProgram(editingProdi.id, updatedItem);
        const updated = prodis.map(p => p.id === editingProdi.id ? saved : p);
        handleUpdateProdi(updated);
        showToast('✅ Program studi berhasil diperbarui di database!');
      } else {
        const newProdi: Partial<StudyProgram> = {
          code: prodiForm.code || 'FTI-01',
          name: prodiForm.name || '',
          degree: (prodiForm.degree as any) || 'S1',
          accreditation: prodiForm.accreditation || 'Unggul',
          headOfProgram: prodiForm.headOfProgram || prodiForm.headOfProdi || '',
          headOfProdi: prodiForm.headOfProgram || prodiForm.headOfProdi || '',
          headOfProdiNidn: prodiForm.headOfProdiNidn || '',
          headOfProdiPhoto: prodiForm.headOfProdiPhoto || '',
          description: prodiForm.description || '',
          totalSks: Number(prodiForm.totalSks) || 144,
          activeStudents: Number(prodiForm.activeStudents) || 300,
          capacity: Number(prodiForm.capacity) || 100,
          vision: prodiForm.vision || '',
          logoUrl: prodiForm.logoUrl || ''
        };
        const saved = await api.createStudyProgram(newProdi);
        handleUpdateProdi([...prodis, saved]);
        showToast('✅ Prodi baru berhasil direkam ke database!');
      }
      setIsProdiModalOpen(false);
      setEditingProdi(null);
    } catch (err: any) {
      showToast(`❌ Gagal menyimpan program studi: ${err.message}`);
    }
  };

  const handleDeleteProdi = (id: string) => {
    const item = prodis.find(p => p.id === id);
    const itemName = item ? item.name : 'program studi ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Program Studi',
      itemName,
      async () => {
        try {
          await api.deleteStudyProgram(id);
          handleUpdateProdi(prodis.filter(p => p.id !== id));
          showToast('Prodi berhasil dihapus.');
        } catch (err: any) {
          showToast(`❌ Gagal menghapus prodi: ${err.message}`);
        }
      },
      `Apakah Anda yakin ingin menghapus Program Studi "${itemName}"?`
    );
  };

  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseForm.name || !courseForm.code) return;

    try {
      if (editingCourse) {
        const updatedObj = { ...editingCourse, ...courseForm } as Course;
        const saved = await api.updateCourse(editingCourse.id, updatedObj);
        const updated = courses.map(c => c.id === editingCourse.id ? saved : c);
        handleUpdateCourses(updated);
        showToast('✅ Mata kuliah berhasil diperbarui di database!');
      } else {
        const newCourse: Partial<Course> = {
          code: courseForm.code || 'MK-01',
          name: courseForm.name || '',
          sks: Number(courseForm.sks) || 3,
          semester: Number(courseForm.semester) || 1,
          category: (courseForm.category as any) || 'Wajib Prodi',
          specialization: (courseForm.specialization as any) || 'AI',
          studyProgram: courseForm.studyProgram || 'Teknik Informatika',
          description: courseForm.description || '',
          prerequisites: courseForm.prerequisites || [],
          syllabusTopic: courseForm.syllabusTopic || [],
          rpsUrl: courseForm.rpsUrl || ''
        };
        const saved = await api.createCourse(newCourse);
        handleUpdateCourses([...courses, saved]);
        showToast('✅ Mata kuliah baru berhasil direkam ke database!');
      }
      setIsCourseModalOpen(false);
      setEditingCourse(null);
    } catch (err: any) {
      showToast(`❌ Gagal menyimpan mata kuliah: ${err.message}`);
    }
  };

  const handleDeleteCourse = (id: string) => {
    const item = courses.find(c => c.id === id);
    const itemName = item ? item.name : 'mata kuliah ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Mata Kuliah',
      itemName,
      async () => {
        try {
          await api.deleteCourse(id);
        } catch (err) {
          console.warn('Backend API delete course failed:', err);
        }
        handleUpdateCourses(courses.filter(c => c.id !== id));
        showToast('Mata kuliah dihapus dari database.');
      },
      `Apakah Anda yakin ingin menghapus mata kuliah "${itemName}" (${item?.code || 'Kode MK'})?`
    );
  };

  const handleSaveMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    const mainLabel = menuForm.line1 || menuForm.label || '';
    if (!mainLabel || !menuForm.url) return;

    if (editingMenu) {
      const updated = menus.map(m => m.id === editingMenu.id ? {
        ...m,
        label: mainLabel,
        line1: menuForm.line1 || mainLabel,
        line2: menuForm.line2 || '',
        icon: menuForm.icon || '',
        url: menuForm.url || '',
        badge: menuForm.badge || '',
      } : m);
      handleUpdateMenus(updated);
      showToast(`Menu '${mainLabel}' berhasil diperbarui!`);
    } else {
      const newItem: MenuItem = {
        id: `menu-${Date.now()}`,
        label: mainLabel,
        line1: menuForm.line1 || mainLabel,
        line2: menuForm.line2 || '',
        icon: menuForm.icon || '',
        url: menuForm.url || '',
        isVisible: menuForm.isVisible ?? true,
        badge: menuForm.badge || '',
        order: menus.length + 1,
        children: []
      };
      handleUpdateMenus([...menus, newItem]);
      showToast(`Menu navigasi '${mainLabel}' ditambahkan!`);
    }

    setIsMenuModalOpen(false);
    setEditingMenu(null);
    setMenuForm({ label: '', line1: '', line2: '', icon: '', url: '', isVisible: true, badge: '', order: menus.length + 1 });
  };

  const handleSaveSubMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubMenuInfo) return;
    const { parentIndex, childIndex } = editingSubMenuInfo;
    const mainLabel = subMenuForm.line1 || subMenuForm.label || '';
    if (!mainLabel || !subMenuForm.url) return;

    const parentMenu = menus[parentIndex];
    if (!parentMenu) return;

    const existingChildren = parentMenu.children || [];
    let newChildren: MenuItem[] = [];

    if (childIndex !== null && childIndex >= 0) {
      // Edit existing sub-menu
      newChildren = existingChildren.map((c, idx) => idx === childIndex ? {
        ...c,
        label: mainLabel,
        line1: subMenuForm.line1 || mainLabel,
        line2: subMenuForm.line2 || '',
        icon: subMenuForm.icon || '',
        url: subMenuForm.url || '',
        badge: subMenuForm.badge || '',
      } : c);
    } else {
      // Add new sub-menu
      const newChildItem: MenuItem = {
        id: `sub-${Date.now()}`,
        label: mainLabel,
        line1: subMenuForm.line1 || mainLabel,
        line2: subMenuForm.line2 || '',
        icon: subMenuForm.icon || '',
        url: subMenuForm.url || '',
        isVisible: true,
        badge: subMenuForm.badge || '',
        order: existingChildren.length + 1
      };
      newChildren = [...existingChildren, newChildItem];
    }

    const updatedMenus = [...menus];
    updatedMenus[parentIndex] = { ...parentMenu, children: newChildren };
    handleUpdateMenus(updatedMenus);

    showToast(childIndex !== null ? `Sub-menu '${mainLabel}' diperbarui!` : `Sub-menu '${mainLabel}' ditambahkan!`);
    setIsSubMenuModalOpen(false);
    setEditingSubMenuInfo(null);
  };

  const toggleMenuVisibility = (id: string) => {
    const updated = menus.map(m => m.id === id ? { ...m, isVisible: !m.isVisible } : m);
    handleUpdateMenus(updated);
    showToast('Status visibilitas menu diubah.');
  };

  const handleDeleteMenu = (id: string) => {
    const item = menus.find(m => m.id === id);
    const itemName = item ? item.label : 'item menu ini';
    openDeleteConfirm(
      'Konfirmasi Hapus Menu Navigasi',
      itemName,
      () => {
        handleUpdateMenus(menus.filter(m => m.id !== id));
        showToast(`Menu '${itemName}' berhasil dihapus.`);
      },
      `Apakah Anda yakin ingin menghapus menu "${itemName}"? Menu ini beserta seluruh sub-menunya (jika ada) akan dihapus dari navigasi header.`
    );
  };

  // --- DRAG AND DROP MENU REORDERING STATES AND HANDLERS ---
  const [draggedMenuIndex, setDraggedMenuIndex] = useState<number | null>(null);
  const [dragOverMenuIndex, setDragOverMenuIndex] = useState<number | null>(null);

  const handleMenuDragStart = (e: React.DragEvent, index: number) => {
    setDraggedMenuIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleMenuDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverMenuIndex !== index) {
      setDragOverMenuIndex(index);
    }
  };

  const handleMenuDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedMenuIndex === null || draggedMenuIndex === targetIndex) {
      setDraggedMenuIndex(null);
      setDragOverMenuIndex(null);
      return;
    }

    const updated = [...menus];
    const [movedItem] = updated.splice(draggedMenuIndex, 1);
    updated.splice(targetIndex, 0, movedItem);

    const reordered = updated.map((m, idx) => ({ ...m, order: idx + 1 }));
    handleUpdateMenus(reordered);
    showToast(`Urutan menu '${movedItem.label}' berhasil diperbarui!`);

    setDraggedMenuIndex(null);
    setDragOverMenuIndex(null);
  };

  const handleMenuDragEnd = () => {
    setDraggedMenuIndex(null);
    setDragOverMenuIndex(null);
  };

  const moveMenuPosition = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= menus.length) return;
    const updated = [...menus];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);

    const reordered = updated.map((m, idx) => ({ ...m, order: idx + 1 }));
    handleUpdateMenus(reordered);
    showToast(`Urutan menu '${movedItem.label}' diubah.`);
  };

  const moveSubMenuPosition = (parentIndex: number, fromChildIndex: number, toChildIndex: number) => {
    const parentMenu = menus[parentIndex];
    if (!parentMenu || !parentMenu.children) return;
    if (toChildIndex < 0 || toChildIndex >= parentMenu.children.length) return;

    const children = [...parentMenu.children];
    const [movedChild] = children.splice(fromChildIndex, 1);
    children.splice(toChildIndex, 0, movedChild);

    const updated = [...menus];
    updated[parentIndex] = { ...parentMenu, children };
    handleUpdateMenus(updated);
    showToast(`Urutan sub-menu '${movedChild.label}' diubah.`);
  };

  const handleDeleteSubMenu = (parentIndex: number, childIndex: number) => {
    const parentMenu = menus[parentIndex];
    if (!parentMenu || !parentMenu.children) return;
    const childItem = parentMenu.children[childIndex];
    const itemName = childItem ? childItem.label : 'sub-menu ini';

    openDeleteConfirm(
      'Konfirmasi Hapus Sub-Menu',
      itemName,
      () => {
        const children = parentMenu.children.filter((_, idx) => idx !== childIndex);
        const updated = [...menus];
        updated[parentIndex] = { ...parentMenu, children };
        handleUpdateMenus(updated);
        showToast(`Sub-menu '${itemName}' berhasil dihapus.`);
      },
      `Apakah Anda yakin ingin menghapus sub-menu "${itemName}" dari induk menu "${parentMenu.label}"?`
    );
  };

  const handleExportBackup = () => {
    const backupData = {
      news,
      lecturers,
      prodis,
      courses,
      menus,
      media,
      facultyInfo,
      exportDate: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `backup-fti-patria-artha-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showToast('Backup JSON data berhasil diunduh!');
  };

  // Sidebar Menu Sections Configuration
  const sidebarSections = [
    {
      groupTitle: 'UTAMA',
      items: [
        { id: 'overview', label: 'Ringkasan Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> }
      ]
    },
    {
      groupTitle: 'AKADEMIK & KONTEN',
      items: [
        { id: 'kalender', label: 'Kalender Akademik', icon: <Calendar className="w-4 h-4" /> },
        { id: 'berita', label: 'Berita & Pengumuman', icon: <Newspaper className="w-4 h-4" />, badge: news.length },
        { id: 'dosen', label: 'Dosen & Peneliti', icon: <Users className="w-4 h-4" />, badge: lecturers.length },
        { id: 'prodi', label: 'Program Studi', icon: <GraduationCap className="w-4 h-4" />, badge: prodis.length },
        { id: 'kurikulum', label: 'Kurikulum & RPS', icon: <BookOpen className="w-4 h-4" />, badge: courses.length },
        { id: 'testimoni', label: 'Testimoni Alumni', icon: <MessageSquare className="w-4 h-4" />, badge: testimonials.length }
      ]
    },
    {
      groupTitle: 'DESAIN & MEDIA',
      items: [
        { id: 'beranda-builder', label: 'Edit Beranda (Visual)', icon: <Home className="w-4 h-4 text-amber-300" />, badge: 'Puck' },
        { id: 'footer-editor', label: 'Editor Footer Website', icon: <Layout className="w-4 h-4 text-emerald-400" />, badge: 'Live' },
        { id: 'custom-page', label: 'Halaman Custom', icon: <Sparkles className="w-4 h-4" />, badge: 'Visual' },
        { id: 'menu', label: 'Management Menu', icon: <Layers className="w-4 h-4" />, badge: menus.length },
        { id: 'media', label: 'Media Manager', icon: <ImageIcon className="w-4 h-4" />, badge: media.length },
        { id: 'tema', label: 'Theme Customizer', icon: <Palette className="w-4 h-4" />, badge: 'Live' }
      ]
    },
    {
      groupTitle: 'SISTEM',
      items: [
        { id: 'pengguna', label: 'Manajemen Pengguna', icon: <ShieldCheck className="w-4 h-4" />, badge: usersList.length },
        { id: 'pengaturan', label: 'Pengaturan Website', icon: <Settings className="w-4 h-4" /> }
      ]
    }
  ];

  const getActiveTabTitle = (tab: string) => {
    switch (tab) {
      case 'overview': return 'Ringkasan Dashboard Admin';
      case 'berita': return 'Pengelolaan Berita & Pengumuman';
      case 'dosen': return 'Direktori Dosen & Peneliti FTI';
      case 'prodi': return 'Program Studi FTI Patria Artha';
      case 'kurikulum': return 'Kurikulum & Dokumen RPS Mata Kuliah';
      case 'custom-page': return 'Manajemen Halaman Custom & Visual Page Builder';
      case 'footer-editor': return 'Editor & Kustomisasi Footer Website';
      case 'menu': return 'Management Menu Navigasi Website';
      case 'media': return 'Media Manager & Galeri File';
      case 'tema': return 'Theme Customizer & Penataan Tampilan Global';
      case 'pengaturan': return 'Pengaturan & Identitas Resmi Fakultas';
      case 'kalender': return 'Manajemen Kalender Akademik';
      case 'testimoni': return 'Manajemen Testimoni Alumni & Mahasiswa';
      case 'pengguna': return 'Manajemen Pengguna & Level Akses (Admin / Operator)';
      default: return 'Dashboard Admin';
    }
  };


  // Filtered Lists
  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLecturers = lecturers.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) || l.nidn.includes(searchTerm)
  );

  const filteredProdis = prodis.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCourses = courses.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = categoryFilter === 'all' || c.semester.toString() === categoryFilter || c.category === categoryFilter;
    const matchProdi = prodiFilter === 'all' || c.studyProgram === prodiFilter || c.studyProgram === 'Semua Prodi' || !c.studyProgram;
    return matchSearch && matchCat && matchProdi;
  });

  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-[#2D3748] dark:text-slate-100 flex flex-col lg:flex-row font-sans">
      
      {/* LEFT SIDEBAR NAVIGATION */}
      <aside 
        style={{
          backgroundColor: 'var(--admin-sidebar-bg, #5A0017)',
          color: 'var(--admin-sidebar-text, #FFF5F5)'
        }}
        className={`fixed inset-y-0 left-0 z-50 w-64 xl:w-72 flex flex-col justify-between border-r border-white/10 shadow-2xl transition-all duration-300 lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen h-screen shrink-0 ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        
        {/* Top Header & User Info */}
        <div className="flex flex-col flex-1 min-h-0">
          
          {/* Brand Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/10 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              {websiteSettings?.logoDarkUrl || websiteSettings?.logoUrl ? (
                <img
                  src={websiteSettings.logoDarkUrl || websiteSettings.logoUrl}
                  alt="Logo Admin"
                  className="h-9 max-w-[120px] object-contain shrink-0"
                />
              ) : (
                <div className="shrink-0 drop-shadow-md">
                  <UpaLogo size={38} />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h2 className="font-black text-sm tracking-tight text-[#FFF5F5] leading-tight truncate">
                  {websiteSettings?.logoText || 'Portal Admin FTI'}
                </h2>
                <p className="text-[11px] font-medium text-white/70 truncate">
                  {websiteSettings?.logoSubtitle || 'Universitas Patria Artha'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Admin User Card */}
          <div className="p-3 mx-3 my-3 rounded-2xl bg-black/30 border border-white/10 flex items-center gap-3 shadow-inner shrink-0">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs shadow-sm shrink-0 border border-amber-200">
              {activeUser.name ? activeUser.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white truncate">{activeUser.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider truncate">{activeUser.role || 'Superadmin FTI'}</span>
              </div>
            </div>
          </div>

          {/* Grouped Navigation Menu List */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4 custom-scrollbar">
            {sidebarSections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                <p className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-200/60 mb-1.5">
                  {section.groupTitle}
                </p>
                
                {section.items.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'beranda-builder') {
                          const berandaPage = customPages.find(p => p.slug === 'beranda' || p.id === 'cp_beranda') || defaultCustomPages.find(p => p.slug === 'beranda');
                          if (onOpenPageBuilder && berandaPage) {
                            onOpenPageBuilder(berandaPage);
                            setMobileSidebarOpen(false);
                            return;
                          }
                        }
                        setActiveTab(item.id as any);
                        setSearchTerm('');
                        setCategoryFilter('all');
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all relative group ${
                        isActive 
                          ? 'bg-[#FFF5F5] text-[#800020] shadow-lg font-black transform scale-[1.01]' 
                          : 'text-white/85 hover:text-white hover:bg-white/12'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#800020] rounded-r-full" />
                        )}
                        <span className={`shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-[#800020]' : 'text-amber-300/90'
                        }`}>
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.badge !== undefined && (
                        <span className={`px-2 py-0.5 text-[10px] font-black rounded-full shrink-0 ml-1.5 ${
                          isActive 
                            ? 'bg-[#800020] text-white shadow-xs' 
                            : 'bg-white/20 text-white group-hover:bg-white/30'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

        </div>

        {/* Sidebar Bottom Action Footer */}
        <div className="p-3 border-t border-white/10 bg-[#3F0010] space-y-2 shrink-0 sticky bottom-0 z-10 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-2">
            {onBackToWebsite && (
              <button
                onClick={onBackToWebsite}
                className="w-full py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
                title="Kembali ke Website Utama"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Website</span>
              </button>
            )}

            {onLogout && (
              <button
                onClick={onLogout}
                className={`py-2 px-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 border border-rose-400/30 ${!onBackToWebsite ? 'col-span-2' : ''}`}
                title="Keluar dari Portal Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
          </div>

          <div className="text-center pt-1">
            <p className="text-[10px] font-semibold text-white/50">FTI Patria Artha Portal v2.5</p>
          </div>
        </div>

      </aside>

      {/* Backdrop for mobile sidebar */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* MAIN CONTENT WORKSPACE AREA */}
      <main className="flex-1 min-w-0 flex flex-col h-full overflow-y-auto bg-[#FDFBF7] dark:bg-slate-900">
        
        {/* Top Header Bar inside Main Workspace */}
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>{getActiveTabTitle(activeTab)}</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Sistem Informasi Pengelolaan Fakultas Teknik & Informatika
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Database Connection Status Indicator Badge */}
            <div className="relative group">
              <button
                onClick={checkDbConnection}
                className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 shadow-2xs ${
                  dbHealth.status === 'active'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100'
                    : dbHealth.status === 'checking'
                    ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                    : dbHealth.status === 'cached'
                    ? 'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                }`}
                title="Status Koneksi Database TiDB MySQL. Klik untuk re-test"
              >
                {/* Status Dot with pulse ring */}
                <span className="relative flex h-2.5 w-2.5">
                  {(dbHealth.status === 'active' || dbHealth.status === 'checking') && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      dbHealth.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      dbHealth.status === 'active'
                        ? 'bg-emerald-500'
                        : dbHealth.status === 'checking'
                        ? 'bg-amber-500'
                        : dbHealth.status === 'cached'
                        ? 'bg-orange-500'
                        : 'bg-rose-500'
                    }`}
                  ></span>
                </span>

                <Database className="w-3.5 h-3.5 opacity-80" />

                <span className="font-mono text-[11px] hidden sm:inline">
                  {dbHealth.status === 'active' && 'TiDB MySQL: Active'}
                  {dbHealth.status === 'checking' && 'Cek Koneksi...'}
                  {dbHealth.status === 'cached' && 'TiDB: Local Cache'}
                  {dbHealth.status === 'failed' && 'TiDB: Offline'}
                </span>

                <RefreshCw className={`w-3 h-3 opacity-60 ${dbHealth.status === 'checking' ? 'animate-spin' : ''}`} />
              </button>

              {/* Detail Popover Card */}
              <div className="absolute right-0 top-full mt-2 w-80 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl text-xs z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100 leading-tight">Status TiDB MySQL</p>
                      <p className="text-[10px] text-slate-400 font-mono">Prisma Client v6</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                    dbHealth.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300' :
                    dbHealth.status === 'checking' ? 'bg-amber-100 text-amber-800' :
                    dbHealth.status === 'cached' ? 'bg-orange-100 text-orange-800' :
                    'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
                  }`}>
                    {dbHealth.status === 'active' ? 'Terhubung' : dbHealth.status}
                  </span>
                </div>

                <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Database Engine:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">{dbHealth.database}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pengecekan Terakhir:</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300">{dbHealth.lastChecked || '-'}</span>
                  </div>
                  {dbHealth.error && (
                    <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-mono text-[10px] border border-rose-200 dark:border-rose-900/50 mt-1">
                      {dbHealth.error}
                    </div>
                  )}
                </div>

                {dbHealth.stats && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                    <p className="font-extrabold text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wider mb-2">
                      Jumlah Data Realtime di Database:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 flex justify-between">
                        <span className="text-slate-500">Dosen:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{dbHealth.stats.lecturers ?? 0}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 flex justify-between">
                        <span className="text-slate-500">Berita:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{dbHealth.stats.news ?? 0}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 flex justify-between">
                        <span className="text-slate-500">Prodi:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{dbHealth.stats.studyPrograms ?? 0}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 flex justify-between">
                        <span className="text-slate-500">Kurikulum:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{dbHealth.stats.courses ?? 0}</span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={checkDbConnection}
                  className="w-full py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold text-slate-700 dark:text-slate-200 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className={`w-3 h-3 ${dbHealth.status === 'checking' ? 'animate-spin' : ''}`} />
                  <span>Uji Ulang Koneksi TiDB</span>
                </button>
              </div>
            </div>

            {onOpenPageBuilder && (
              <button
                onClick={onOpenPageBuilder}
                className="px-3.5 py-2 rounded-xl bg-[#800020] hover:bg-[#9B2C2C] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Open Builder</span>
              </button>
            )}

            {onBackToWebsite && (
              <button
                onClick={onBackToWebsite}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden md:inline">Website</span>
              </button>
            )}

            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 border border-rose-200 dark:border-rose-900/50 text-xs font-bold transition-all flex items-center gap-1.5"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Workspace Body */}
        <div className="p-4 sm:p-8 max-w-7xl mx-auto w-full">
          {/* Default Password Warning Security Banner */}
          {((activeUser as any)?.isDefaultPassword || (usersList.find(u => u.email === activeUser?.email)?.password === 'admin*123') || activeUser?.email === 'admin@local.lan') && (
            <div className="mb-6 p-4.5 rounded-3xl bg-amber-500/10 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-700/80 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-500 text-slate-950 font-black shrink-0 mt-0.5 sm:mt-0 shadow-xs">
                  <AlertTriangle className="w-5 h-5 animate-pulse text-amber-950" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-amber-950 dark:text-amber-300 flex items-center gap-2">
                    <span>⚠️ PERINGATAN KEAMANAN: KATA SANDI DEFAULT AKTIF</span>
                  </h4>
                  <p className="text-xs text-amber-900/90 dark:text-amber-300/90 mt-0.5 font-medium">
                    Anda saat ini login menggunakan kredensial bawaan (<code className="bg-amber-200/80 dark:bg-amber-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-amber-950 dark:text-amber-100">admin@local.lan</code> / password: <code className="bg-amber-200/80 dark:bg-amber-900/80 px-1.5 py-0.5 rounded font-mono font-bold text-amber-950 dark:text-amber-100">admin*123</code>). Untuk menjaga keamanan sistem, silakan perbarui email & kata sandi Anda.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const currentObj = usersList.find(u => u.email === activeUser?.email || u.email === 'admin@local.lan') || {
                    id: 'admin-superadmin-main',
                    name: activeUser?.name || 'Admin FTI',
                    email: activeUser?.email || 'admin@local.lan',
                    password: 'admin*123',
                    role: 'Superadmin',
                    status: 'active'
                  };
                  setEditingUser(currentObj as User);
                  setUserForm({
                    name: currentObj.name,
                    email: currentObj.email,
                    password: '',
                    role: (currentObj.role as any) || 'Superadmin',
                    status: (currentObj.status as any) || 'active',
                    avatarUrl: (currentObj as any).avatarUrl || ''
                  });
                  setShowUserPassword(false);
                  setIsUserModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-2xl bg-[#9B2C2C] hover:bg-[#800020] text-white font-extrabold text-xs shadow-md transition-all shrink-0 flex items-center gap-1.5 border border-[#800020] cursor-pointer"
              >
                <Key className="w-4 h-4 text-amber-300" />
                <span>Ubah Email & Password Sekarang</span>
              </button>
            </div>
          )}

          {/* Floating Top-Center Toast Notification */}
          {toast && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-lg w-[90%] sm:w-auto animate-in fade-in slide-in-from-top-5 duration-300">
              <div className="px-5 py-3.5 rounded-2xl bg-[#800020]/95 dark:bg-slate-900/95 text-white text-xs font-extrabold shadow-2xl border-2 border-amber-400/80 dark:border-amber-500/80 backdrop-blur-md flex items-center justify-between gap-4 ring-4 ring-black/15">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <span className="truncate tracking-wide">{toast}</span>
                </div>
                <button 
                  onClick={() => setToast(null)}
                  className="p-1 rounded-full hover:bg-white/20 text-white/70 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Tutup Notifikasi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 0: OVERVIEW / STATS */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Welcome Banner */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-[#800020] via-[#9B2C2C] to-slate-900 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Portal Administrator FTI UPA</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">Selamat Datang, {activeUser.name}!</h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                    Kelola data akademik, pengumuman berita, direktori dosen, kurikulum RPS, media galeri, serta menu navigasi Fakultas Teknik & Informatika secara terpusat.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab('berita')}
                      className="px-4 py-2.5 rounded-xl bg-white text-[#800020] font-extrabold text-xs shadow-md hover:bg-slate-100 transition-all flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Buat Berita Baru</span>
                    </button>
                    {onOpenPageBuilder && (
                      <button
                        onClick={onOpenPageBuilder}
                        className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md hover:bg-amber-300 transition-all flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Kustomisasi Layout Halaman</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div 
                  onClick={() => setActiveTab('berita')}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <Newspaper className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{news.length}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Berita & Pengumuman</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Artikel publikasi & agenda</p>
                </div>

                <div 
                  onClick={() => setActiveTab('dosen')}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{lecturers.length}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Dosen & Peneliti</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pengajar & peneliti aktif</p>
                </div>

                <div 
                  onClick={() => setActiveTab('prodi')}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{prodis.length}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Program Studi</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Teknik Elektro, TIF, TM</p>
                </div>

                <div 
                  onClick={() => setActiveTab('kurikulum')}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{courses.length}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Mata Kuliah & RPS</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Silabus & dokumen PDF</p>
                </div>
              </div>

              {/* Database & System Connection Status Banner */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                      dbHealth.status === 'active'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : dbHealth.status === 'checking'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        : dbHealth.status === 'cached'
                        ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    }`}>
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">Status Database TiDB MySQL</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase font-mono ${
                          dbHealth.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300' :
                          dbHealth.status === 'checking' ? 'bg-amber-100 text-amber-800' :
                          dbHealth.status === 'cached' ? 'bg-orange-100 text-orange-800' :
                          'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
                        }`}>
                          {dbHealth.status === 'active' ? '● Active Connection' : dbHealth.status === 'checking' ? '● Checking' : dbHealth.status === 'cached' ? '● Local Cached' : '● Offline'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {dbHealth.status === 'active' && 'Sistem terhubung langsung secara realtime ke database cloud TiDB MySQL via Prisma ORM.'}
                        {dbHealth.status === 'checking' && 'Sedang menguji koneksi ke server database TiDB MySQL...'}
                        {dbHealth.status === 'cached' && 'Koneksi database menggunakan cache lokal (fallback state).'}
                        {dbHealth.status === 'failed' && 'Koneksi ke database TiDB MySQL mengalami gangguan.'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={checkDbConnection}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${dbHealth.status === 'checking' ? 'animate-spin' : ''}`} />
                    <span>Uji Ulang Koneksi</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-400 font-medium text-[11px]">Engine Database</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">{dbHealth.database}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-400 font-medium text-[11px]">ORM & Driver</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">Prisma Client v6</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-400 font-medium text-[11px]">Cek Terakhir</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">{dbHealth.lastChecked || 'Belum diuji'}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-400 font-medium text-[11px]">Total Record DB</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">
                      {dbHealth.stats ? Object.values(dbHealth.stats).reduce((a, b) => a + b, 0) : 0} item
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions Shortcuts */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#800020] dark:text-red-400" />
                  <span>Aksi Pengelolaan Cepat</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <button
                    onClick={() => {
                      const berandaPage = customPages.find(p => p.slug === 'beranda' || p.id === 'cp_beranda') || defaultCustomPages.find(p => p.slug === 'beranda');
                      if (onOpenPageBuilder && berandaPage) onOpenPageBuilder(berandaPage);
                    }}
                    className="p-4 rounded-2xl bg-red-50 dark:bg-slate-900/60 border border-red-200 dark:border-slate-700 hover:border-red-400 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Sparkles className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">Edit Visual Beranda</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Buka Page Builder Halaman Utama</p>
                  </button>

                  <button
                    onClick={() => setActiveTab('custom-page')}
                    className="p-4 rounded-2xl bg-amber-50 dark:bg-slate-900/60 border border-amber-200 dark:border-slate-700 hover:border-amber-400 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FileText className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">Halaman Custom</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Kelola daftar halaman web</p>
                  </button>

                  <button
                    onClick={() => setActiveTab('menu')}
                    className="p-4 rounded-2xl bg-rose-50 dark:bg-slate-900/60 border border-rose-200 dark:border-slate-700 hover:border-rose-400 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <MenuIcon className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">Management Menu</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Kelola susunan navbar</p>
                  </button>

                  <button
                    onClick={() => setActiveTab('media')}
                    className="p-4 rounded-2xl bg-blue-50 dark:bg-slate-900/60 border border-blue-200 dark:border-slate-700 hover:border-blue-400 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <ImageIcon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">Media Manager</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Upload gambar & berkas</p>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB: KALENDER AKADEMIK */}
          {activeTab === 'kalender' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>Manajemen Kalender Akademik</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Atur agenda kegiatan akademik, ujian, dan penerimaan mahasiswa baru.</p>
                </div>

                <button
                  onClick={() => {
                    setEditingCalendarItem(null);
                    setCalendarForm({
                      title: '', startDate: '', endDate: '', category: 'Perkuliahan', semester: 'Ganjil 2026/2027'
                    });
                    setIsCalendarModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Agenda Baru</span>
                </button>
              </div>

              {/* Calendar Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-extrabold text-[10px]">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Nama Agenda</th>
                      <th className="p-3.5">Tanggal</th>
                      <th className="p-3.5">Kategori</th>
                      <th className="p-3.5">Semester</th>
                      <th className="p-3.5 text-center rounded-r-xl">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                    {academicCalendarItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center p-8 text-slate-500">
                          Belum ada agenda kalender akademik yang ditambahkan.
                        </td>
                      </tr>
                    ) : (
                      academicCalendarItems.map(item => (
                        <tr key={item.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                            {item.title}
                          </td>
                          <td className="p-3.5 text-slate-600 dark:text-slate-300 font-medium">
                            {item.startDate} {item.endDate && item.endDate !== item.startDate ? ` - ${item.endDate}` : ''}
                          </td>
                          <td className="p-3.5">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                              {item.category}
                            </span>
                          </td>
                          <td className="p-3.5 text-slate-600 dark:text-slate-300">
                            {item.semester}
                          </td>
                          <td className="p-3.5 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => {
                                  setEditingCalendarItem(item);
                                  setCalendarForm({ ...item });
                                  setIsCalendarModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200"
                                title="Edit Agenda"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteCalendar(item.id)}
                                className="p-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200"
                                title="Hapus Agenda"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: TESTIMONI ALUMNI & MAHASISWA */}
          {activeTab === 'testimoni' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#9B2C2C] dark:text-red-400" />
                    <span>Testimoni Alumni & Mahasiswa</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kelola kisah sukses alumni FTI UPA, foto, angkatan, instansi/perusahaan, dan kutipan pengalaman kuliah.</p>
                </div>

                <button
                  onClick={() => {
                    setEditingTestimonial(null);
                    setTestimonialForm({ name: '', gradYear: new Date().getFullYear(), role: '', company: '', companyLogo: '', photo: '', quote: '', linkedinUrl: '' });
                    setIsTestimonialModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Testimoni Baru</span>
                </button>
              </div>

              {/* Filter & Search */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari nama alumni, perusahaan, atau pekerjaan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                  />
                </div>
              </div>

              {/* Grid Testimoni */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {testimonials
                  .filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()) || (t.company && t.company.toLowerCase().includes(searchTerm.toLowerCase())) || (t.role && t.role.toLowerCase().includes(searchTerm.toLowerCase())))
                  .map((t) => (
                    <div key={t.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/50 flex flex-col justify-between space-y-4 hover:border-amber-400/60 transition-all shadow-xs">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            {t.photo ? (
                              <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-2xl object-cover border border-slate-300 dark:border-slate-700 shrink-0" />
                            ) : (
                              <div className="w-11 h-11 rounded-2xl bg-[#9B2C2C] text-white flex items-center justify-center font-black text-sm shrink-0">
                                {t.name.charAt(0)}
                              </div>
                            )}
                            <div>
                              <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{t.name}</h4>
                              <p className="text-[11px] font-semibold text-rose-700 dark:text-red-400">{t.role} {t.company ? `@ ${t.company}` : ''}</p>
                              <span className="text-[10px] font-bold text-slate-400">Lulusan {t.gradYear}</span>
                            </div>
                          </div>
                          {t.companyLogo && (
                            <img src={t.companyLogo} alt={t.company} className="h-6 max-w-[60px] object-contain shrink-0" />
                          )}
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 italic line-clamp-4 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        {t.linkedinUrl ? (
                          <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                            <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
                          </a>
                        ) : <span className="text-[10px] text-slate-400">Tanpa LinkedIn</span>}

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setEditingTestimonial(t);
                              setTestimonialForm(t);
                              setIsTestimonialModalOpen(true);
                            }}
                            className="p-2 rounded-xl text-amber-600 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors"
                            title="Edit Testimoni"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteTestimonial(t.id)}
                            className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800 transition-colors"
                            title="Hapus Testimoni"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {testimonials.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Belum ada data testimoni alumni. Klik "Tambah Testimoni Baru" untuk menambahkan.
                </div>
              )}
            </div>
          )}

          {/* TAB: MANAJEMEN PENGGUNA & HAK AKSES */}
          {activeTab === 'pengguna' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              {/* Header Banner & Role Restriction Notification */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#9B2C2C] dark:text-red-400" />
                    <span>Manajemen Pengguna & Level Akses System</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Atur pengguna portal FTI UPA dengan 2 level hak akses utama: <strong>Admin</strong> (Akses Penuh Seluruh Sistem) dan <strong>Operator</strong> (Akses Pengelolaan Konten).
                  </p>
                </div>

                {activeUser.role !== 'Operator' ? (
                  <button
                    onClick={() => {
                      setEditingUser(null);
                      setUserForm({ name: '', email: '', role: 'Operator', status: 'active', avatar: '' });
                      setIsUserModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Pengguna Baru</span>
                  </button>
                ) : (
                  <div className="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span>Akses Baca Saja (Level Operator)</span>
                  </div>
                )}
              </div>

              {/* Access Levels Explainer Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-red-500/5 to-transparent border border-amber-300/40 dark:border-amber-700/30 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-slate-900 font-black shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-amber-900 dark:text-amber-200">Level 1: Admin (Hak Akses Penuh)</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                      Dapat mengedit seluruh halaman, mengelola visual builder Puck, pengaturan website, manajemen menu, serta menambah/menghapus akun pengguna lain.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-300/40 dark:border-blue-700/30 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white font-black shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-blue-900 dark:text-blue-200">Level 2: Operator (Hak Akses Konten)</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                      Dapat mengelola Berita, Dosen, Kurikulum, Kalender, Media, dan Testimoni. Terbatas untuk perubahan sensitif sistem dan pengguna.
                    </p>
                  </div>
                </div>
              </div>

              {/* Table of Users */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-extrabold border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="p-4">Pengguna</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Level Akses (Role)</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Tanggal Dibuat</th>
                      <th className="p-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                    {usersList.map((u) => {
                      const isAdminRole = u.role?.toLowerCase() === 'admin' || u.role?.toLowerCase() === 'superadmin';
                      return (
                        <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                          <td className="p-4 flex items-center gap-3">
                            {u.avatar ? (
                              <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" />
                            ) : (
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${isAdminRole ? 'bg-amber-400 text-slate-900' : 'bg-blue-600 text-white'}`}>
                                {u.name.charAt(0)}
                              </div>
                            )}
                            <div>
                              <p className="font-extrabold text-slate-900 dark:text-slate-100">{u.name}</p>
                              {u.username && <span className="text-[10px] text-slate-400">@{u.username}</span>}
                            </div>
                          </td>
                          <td className="p-4 font-mono text-slate-600 dark:text-slate-400">{u.email}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wide inline-flex items-center gap-1 ${
                              isAdminRole 
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700' 
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                            }`}>
                              {isAdminRole ? <ShieldCheck className="w-3 h-3 text-amber-600" /> : <UserCheck className="w-3 h-3 text-blue-600" />}
                              {u.role || 'Operator'}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              u.status === 'suspended'
                                ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            }`}>
                              {u.status === 'suspended' ? 'Nonaktif' : 'Aktif'}
                            </span>
                          </td>
                          <td className="p-4 text-slate-500 text-[11px]">
                            {u.createdAt ? new Date(u.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}
                          </td>
                          <td className="p-4 text-right">
                            {activeUser.role !== 'Operator' ? (
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => {
                                    setEditingUser(u);
                                    setUserForm(u);
                                    setIsUserModalOpen(true);
                                  }}
                                  className="p-2 rounded-xl text-amber-600 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors"
                                  title="Edit Pengguna"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteUser(u.id)}
                                  className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800 transition-colors"
                                  title="Hapus Pengguna"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <span className="text-[10px] text-slate-400 italic">Terbatas</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 1: BERITA & PENGUMUMAN */}
          {activeTab === 'berita' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Berita & Pengumuman</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kelola artikel publikasi, prestasi mahasiswa, seminar, dan berita fakultas.</p>
                </div>

                <button
                  onClick={() => {
                    setEditingNews(null);
                    setNewsForm({
                      title: '', category: 'Berita', date: new Date().toISOString().split('T')[0],
                      author: activeUser.name || 'Humas FTI UPA', thumbnail: '', summary: '', content: '', tags: [], featured: false
                    });
                    setIsNewsModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Berita Baru</span>
                </button>
              </div>

              {/* Search */}
              <div className="mt-6 relative max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari berita berdasarkan judul..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                />
              </div>

              {/* News Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-extrabold text-[10px]">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Info & Judul</th>
                      <th className="p-3.5">Kategori</th>
                      <th className="p-3.5">Tanggal</th>
                      <th className="p-3.5">Penulis</th>
                      <th className="p-3.5 text-center rounded-r-xl">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                    {filteredNews.map(n => (
                      <tr key={n.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
                        <td className="p-3.5">
                          <div className="flex items-center gap-3">
                            <img src={n.thumbnail} alt="" className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0" />
                            <div>
                              <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100 line-clamp-1">{n.title}</h4>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{n.summary}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3.5">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 dark:bg-red-950/60 text-[#800020] dark:text-red-300">
                            {n.category}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-300 font-medium">{n.date}</td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-300">{n.author}</td>
                        <td className="p-3.5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => {
                                setEditingNews(n);
                                setNewsForm({ ...n });
                                setIsNewsModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200"
                              title="Edit Berita"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteNews(n.id)}
                              className="p-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200"
                              title="Hapus Berita"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: DOSEN & PENELITI */}
          {activeTab === 'dosen' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Direktori Dosen & Peneliti</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kelola profil dosen, NIDN, laboratorium, bidang keahlian, dan statistik publikasi.</p>
                </div>

                <button
                  onClick={() => {
                    setEditingLecturer(null);
                    setLecturerForm({
                      name: '', nidn: '', title: 'Dosen Tetap FTI', studyProgram: 'Teknik Informatika', photo: '',
                      expertise: ['AI'], expertiseTags: ['AI'], email: '', lab: 'Lab FTI', education: ['S1 Komputer', 'S2 Komputer'],
                      googleScholar: '', scopus: '', sinta: '', orcid: '', researchGate: '', coursesTaught: ['Algoritma'], publicationsCount: 3
                    });
                    setIsLecturerModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Dosen Baru</span>
                </button>
              </div>

              {/* Search */}
              <div className="mt-6 relative max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari dosen berdasarkan nama, NIDN, atau prodi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                />
              </div>

              {/* Dosen Grid */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLecturers.map(l => (
                  <div key={l.id} className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <img src={l.photo} alt="" className="w-14 h-14 rounded-2xl object-cover border-2 border-[#9B2C2C]/20 shrink-0" />
                          <div>
                            <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 leading-snug">{l.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">NIDN: {l.nidn}</p>
                            <span className="text-[10px] font-bold text-[#800020] dark:text-red-400 block">{l.title}</span>
                            {l.jabatan && (
                              <span className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                                💼 {l.jabatan}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {l.studyProgram && (
                        <div className="mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-red-100 dark:bg-red-950/80 text-[#9B2C2C] dark:text-red-300 border border-red-200 dark:border-red-900">
                            {l.studyProgram}
                          </span>
                        </div>
                      )}

                      <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <p><span className="font-bold">Lab:</span> {l.lab}</p>
                        <p className="truncate"><span className="font-bold">Email:</span> {l.email}</p>
                        
                        {/* Tautan Profil Akademik Badges */}
                        <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                          {l.sinta ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              <span>SINTA</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-400">No SINTA</span>
                          )}

                          {l.scopus ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              <span>Scopus</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-400">No Scopus</span>
                          )}

                          {l.googleScholar && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              <span>Scholar</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {ensureArray(l.expertise).map((ex, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingLecturer(l);
                            setLecturerForm({ ...l });
                            setIsLecturerModalOpen(true);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 font-bold text-xs flex items-center gap-1 transition-colors"
                          title="Edit Data Dosen & Link Akademik"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteLecturer(l.id)}
                          className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900 transition-colors"
                          title="Hapus Dosen"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROGRAM STUDI */}
          {activeTab === 'prodi' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Program Studi FTI</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kelola data program studi, akreditasi, ketua prodi, dan kapasitas mahasiswa.</p>
                </div>

                <button
                  onClick={() => {
                    setEditingProdi(null);
                    setProdiForm({
                      code: '', name: '', degree: 'S1', accreditation: 'Unggul',
                      headOfProgram: '', headOfProdi: '', headOfProdiNidn: '', headOfProdiPhoto: '', description: '', totalSks: 144, activeStudents: 300, capacity: 100, vision: '', logoUrl: ''
                    });
                    setIsProdiModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Prodi Baru</span>
                </button>
              </div>

              {/* Prodi Cards */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProdis.map(p => (
                  <div key={p.id} className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:border-[#800020]/40 transition-all shadow-xs">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-2">{p.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{p.description}</p>

                      <div className="mt-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center gap-3">
                        {p.headOfProdiPhoto ? (
                          <img src={p.headOfProdiPhoto} alt="" className="w-10 h-10 rounded-xl object-cover border border-[#9B2C2C]/30 shrink-0" />
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-[#9B2C2C] dark:text-red-300 flex items-center justify-center font-black text-xs shrink-0">
                            {(p.headOfProgram || p.headOfProdi || 'KP').substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Ketua Program Studi:</span>
                          <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block truncate">{p.headOfProgram || p.headOfProdi || 'Belum Diatur'}</span>
                          {p.headOfProdiNidn && (
                            <span className="text-[10px] font-mono text-[#9B2C2C] dark:text-red-400 block font-semibold">NIDN: {p.headOfProdiNidn}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => {
                          setEditingProdi(p);
                          setProdiForm({ ...p });
                          setIsProdiModalOpen(true);
                        }}
                        className="p-2 rounded-xl bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900 transition-colors"
                        title="Edit Prodi"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProdi(p.id)}
                        className="p-2 rounded-xl bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:hover:bg-rose-900 transition-colors"
                        title="Hapus Prodi"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: KURIKULUM & RPS */}
          {activeTab === 'kurikulum' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Kurikulum & Dokumen RPS</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kelola daftar mata kuliah, jumlah SKS, semester, dan tautan dokumen RPS (PDF).</p>
                </div>

                <button
                  onClick={() => {
                    setEditingCourse(null);
                    setCourseForm({ code: '', name: '', sks: 3, semester: 1, category: 'Wajib Prodi', specialization: 'AI', description: '', rpsUrl: '' });
                    setIsCourseModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Mata Kuliah Baru</span>
                </button>
              </div>

              {/* Filter */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari kode atau mata kuliah..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <Filter className="w-4 h-4 text-slate-400" />
                  {/* Filter Program Studi */}
                  <select
                    value={prodiFilter}
                    onChange={(e) => setProdiFilter(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200"
                  >
                    <option value="all">Semua Program Studi</option>
                    <option value="Teknik Informatika">Teknik Informatika (S1)</option>
                    <option value="Teknik Elektro">Teknik Elektro (S1)</option>
                    <option value="Teknik Mesin">Teknik Mesin (S1)</option>
                  </select>

                  {/* Filter Semester */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200"
                  >
                    <option value="all">Semua Semester</option>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                    <option value="7">Semester 7</option>
                    <option value="8">Semester 8</option>
                  </select>
                </div>
              </div>

              {/* Courses Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-extrabold text-[10px]">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Kode</th>
                      <th className="p-3.5">Nama Mata Kuliah</th>
                      <th className="p-3.5">Program Studi</th>
                      <th className="p-3.5 text-center">SKS</th>
                      <th className="p-3.5 text-center">Semester</th>
                      <th className="p-3.5">Kategori</th>
                      <th className="p-3.5">Dokumen RPS</th>
                      <th className="p-3.5 text-center rounded-r-xl">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                    {filteredCourses.map(c => (
                      <tr key={c.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-[#800020] dark:text-red-400">{c.code}</td>
                        <td className="p-3.5 font-extrabold text-slate-900 dark:text-slate-100">{c.name}</td>
                        <td className="p-3.5">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
                            {c.studyProgram || 'Teknik Informatika'}
                          </span>
                        </td>
                        <td className="p-3.5 text-center font-bold text-slate-800 dark:text-slate-200">{c.sks}</td>
                        <td className="p-3.5 text-center font-bold text-slate-800 dark:text-slate-200">{c.semester}</td>
                        <td className="p-3.5">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                            {c.category}
                          </span>
                        </td>
                        <td className="p-3.5">
                          {c.rpsUrl ? (
                            <a
                              href={c.rpsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 font-bold text-[11px]"
                            >
                              <Download className="w-3 h-3" />
                              <span>PDF RPS</span>
                            </a>
                          ) : (
                            <span className="text-slate-400 italic text-[11px]">Belum diunggah</span>
                          )}
                        </td>
                        <td className="p-3.5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => {
                                setEditingCourse(c);
                                setCourseForm({ ...c });
                                setIsCourseModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200"
                              title="Edit MK"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteCourse(c.id)}
                              className="p-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200"
                              title="Hapus MK"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: CUSTOM PAGE & PUCK PAGE BUILDER CRUD */}
          {activeTab === 'custom-page' && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#800020] via-red-900 to-amber-900 text-white shadow-xl relative overflow-hidden">
                <div className="max-w-3xl relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider mb-3 backdrop-blur-xs border border-white/30">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Visual Page Builder & Custom CRUD Engine
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">Manajemen Custom Halaman</h2>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      Kelola halaman kustom, atur SEO metadata, dan rancang tata letak visual tanpa koding menggunakan editor Elementor-style Visual Page Builder.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        const berandaPage = customPages.find(p => p.slug === 'beranda' || p.id === 'cp_beranda') || defaultCustomPages.find(p => p.slug === 'beranda');
                        if (onOpenPageBuilder && berandaPage) onOpenPageBuilder(berandaPage);
                      }}
                      className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 border border-amber-200 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#800020]" />
                      <span>Edit Visual Beranda</span>
                    </button>

                    <button
                      onClick={handleOpenCreateCustomPageModal}
                      className="px-4 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2 border border-white/20 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Buat Halaman Baru</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Summary Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-xs">
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Custom Pages</p>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{customPages.length}</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-xs">
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Diterbitkan (Live)</p>
                    <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                      {customPages.filter(p => p.published).length}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-xs">
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Kunjungan (Views)</p>
                    <h3 className="text-2xl font-black text-[#800020] dark:text-red-400 mt-1">
                      {customPages.reduce((acc, p) => acc + (p.views || 0), 0)}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* CRUD Table Container */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#800020]/10 text-[#800020] dark:text-red-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                        Daftar Custom Page (Halaman Hasil Visual Builder)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Klik 'Edit Layout' untuk membuka Visual Builder atau 'SEO' untuk mengubah metadata.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={loadCustomPages}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-xs font-bold flex items-center gap-1.5"
                    title="Muat ulang data dari database"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingCustomPages ? 'animate-spin' : ''}`} />
                    <span>Segarkan</span>
                  </button>
                </div>

                {customPages.length === 0 ? (
                  <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl">
                    <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Belum ada Halaman Custom</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto mb-4">
                      Buat halaman custom pertama Anda untuk menambahkan landas profil, materi PMB, atau halaman khusus prodi.
                    </p>
                    <button
                      onClick={handleOpenCreateCustomPageModal}
                      className="px-4 py-2 rounded-xl bg-[#800020] text-white text-xs font-bold hover:bg-[#9B2C2C] transition-all inline-flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Buat Halaman Custom Pertama</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {[...customPages].sort((a, b) => {
                      if (a.slug === 'beranda' || a.id === 'cp_beranda') return -1;
                      if (b.slug === 'beranda' || b.id === 'cp_beranda') return 1;
                      return 0;
                    }).map((page, idx) => {
                      const isBerandaPage = page.slug === 'beranda' || page.id === 'cp_beranda';
                      return (
                        <div
                          key={page.id || idx}
                          className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 transition-all ${
                            isBerandaPage
                              ? 'bg-gradient-to-r from-amber-500/10 via-red-500/10 to-slate-900/10 dark:from-amber-950/40 dark:via-red-950/40 dark:to-slate-900 border-amber-400 dark:border-amber-600 shadow-md ring-2 ring-amber-400/30'
                              : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-[#800020]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-[240px]">
                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 border ${
                              isBerandaPage 
                                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md animate-bounce-slow' 
                                : 'bg-[#800020]/10 text-[#800020] dark:text-red-400 border-red-200/40'
                            }`}>
                              {isBerandaPage ? <Home className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{page.title}</h4>
                                {isBerandaPage && (
                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-400 text-slate-950 shadow-xs border border-amber-300 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-[#800020]" />
                                    <span>⭐ Halaman Utama / Beranda</span>
                                  </span>
                                )}
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                                  page.published
                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300/50'
                                    : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/50'
                                }`}>
                                  {page.published ? 'Diterbitkan' : 'Draft'}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                                Tautan: <strong className="text-indigo-600 dark:text-indigo-400">/halaman/{page.slug}</strong> • Views: {page.views || 0}
                              </p>
                            </div>
                          </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => {
                              setPreviewCustomPage(page);
                              setPreviewViewport('desktop');
                            }}
                            className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all flex items-center gap-1.5 shadow-xs text-xs font-bold cursor-pointer"
                            title="Pratinjau / Preview Halaman Custom"
                          >
                            <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Preview</span>
                          </button>

                          <button
                            onClick={() => handleTogglePublishCustomPage(page)}
                            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              page.published
                                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800'
                                : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800'
                            }`}
                            title="Ubah status publikasi"
                          >
                            {page.published ? 'Jadikan Draft' : 'Publikasikan'}
                          </button>

                          {onOpenPageBuilder && (
                            <button
                              onClick={() => onOpenPageBuilder(page)}
                              className="px-3 py-1.5 rounded-xl bg-[#800020] text-white text-xs font-bold hover:bg-[#9B2C2C] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                              title="Buka Visual Builder untuk halaman ini"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit Layout</span>
                            </button>
                          )}

                          <button
                            onClick={() => handleOpenEditCustomPageModal(page)}
                            className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors text-xs font-bold cursor-pointer"
                            title="Edit SEO & Metadata"
                          >
                            <Settings className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDeleteCustomPage(page)}
                            className="p-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 transition-colors text-xs font-bold cursor-pointer"
                            title="Hapus Halaman"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                )}
              </div>

              {/* MODAL: PREVIEW CUSTOM PAGE */}
              {previewCustomPage && (
                <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
                    {/* Header Controls */}
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#800020]/10 text-[#800020] dark:text-red-400 flex items-center justify-center font-bold">
                          <Eye className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                              Pratinjau: {previewCustomPage.title}
                            </h3>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                              previewCustomPage.published 
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            }`}>
                              {previewCustomPage.published ? 'Diterbitkan' : 'Draft'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-mono">
                            Tautan: /halaman/{previewCustomPage.slug}
                          </p>
                        </div>
                      </div>

                      {/* Viewport controls */}
                      <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-2xl">
                        <button
                          type="button"
                          onClick={() => setPreviewViewport('desktop')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            previewViewport === 'desktop'
                              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Desktop</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewViewport('tablet')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            previewViewport === 'tablet'
                              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                          }`}
                        >
                          <Tablet className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Tablet</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewViewport('mobile')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            previewViewport === 'mobile'
                              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Mobile</span>
                        </button>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2">
                        {onOpenPageBuilder && (
                          <button
                            type="button"
                            onClick={() => {
                              const pageToEdit = previewCustomPage;
                              setPreviewCustomPage(null);
                              onOpenPageBuilder(pageToEdit);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-[#800020] text-white text-xs font-bold hover:bg-[#9B2C2C] transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit di Visual Builder</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setPreviewCustomPage(null)}
                          className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                          title="Tutup Pratinjau"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Preview Canvas Area */}
                    <div className="flex-1 bg-slate-100 dark:bg-slate-950 overflow-y-auto p-4 sm:p-8 flex justify-center">
                      <div
                        className={`bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl transition-all duration-300 min-h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 ${
                          previewViewport === 'mobile'
                            ? 'w-[375px]'
                            : previewViewport === 'tablet'
                            ? 'w-[768px]'
                            : 'w-full'
                        }`}
                      >
                        {(() => {
                          let data: any = { content: [] };
                          try {
                            if (typeof previewCustomPage.content === 'string') {
                              data = JSON.parse(previewCustomPage.content);
                            } else if (previewCustomPage.content) {
                              data = previewCustomPage.content;
                            }
                          } catch (err) {
                            console.error("Error parsing custom page content:", err);
                          }

                          const hasContent = data && (
                            (Array.isArray(data.content) && data.content.length > 0) ||
                            (Array.isArray(data) && data.length > 0)
                          );

                          if (!hasContent) {
                            return (
                              <div className="p-12 text-center my-auto">
                                <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                                <h4 className="font-extrabold text-base text-slate-800 dark:text-slate-200">
                                  Halaman Masih Kosong
                                </h4>
                                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-4">
                                  Belum ada blok konten yang ditambahkan ke halaman ini. Gunakan Visual Builder untuk menyusun tata letak.
                                </p>
                                {onOpenPageBuilder && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const pageToEdit = previewCustomPage;
                                      setPreviewCustomPage(null);
                                      onOpenPageBuilder(pageToEdit);
                                    }}
                                    className="px-4 py-2 rounded-xl bg-[#800020] text-white text-xs font-bold hover:bg-[#9B2C2C] transition-all inline-flex items-center gap-2 cursor-pointer"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                    <span>Buka Visual Builder</span>
                                  </button>
                                )}
                              </div>
                            );
                          }

                          return (
                            <div className="puck-preview-render">
                              <Render config={puckConfig} data={data} />
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL: CREATE / EDIT CUSTOM PAGE METADATA */}
              {isCustomPageModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                      <h3 className="text-base font-extrabold flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#800020] dark:text-red-400" />
                        <span>{editingCustomPageMeta ? 'Edit SEO & Metadata Halaman' : 'Pengaturan Halaman Custom Baru'}</span>
                      </h3>
                      <button
                        onClick={() => setIsCustomPageModalOpen(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveCustomPageMetaSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Judul Halaman <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customPageForm.title || ''}
                          onChange={(e) => {
                            const title = e.target.value;
                            setCustomPageForm(prev => ({
                              ...prev,
                              title,
                              slug: editingCustomPageMeta ? prev.slug : title.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-')
                            }));
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold focus:outline-none focus:border-[#800020]"
                          placeholder="contoh: Beasiswa PMB Unggulan 2027"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Slug URL Tautan <span className="text-rose-500">*</span>
                        </label>
                        <div className="flex items-center">
                          <span className="px-3 py-2.5 bg-slate-100 dark:bg-slate-700 border border-r-0 border-slate-300 dark:border-slate-700 rounded-l-xl text-xs font-mono text-slate-500">
                            /halaman/
                          </span>
                          <input
                            type="text"
                            required
                            value={customPageForm.slug || ''}
                            onChange={(e) => setCustomPageForm(prev => ({
                              ...prev,
                              slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')
                            }))}
                            className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-bold focus:outline-none focus:border-[#800020]"
                            placeholder="beasiswa-pmb-2027"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Judul SEO (Title Tag)
                        </label>
                        <input
                          type="text"
                          value={customPageForm.seoTitle || ''}
                          onChange={(e) => setCustomPageForm(prev => ({ ...prev, seoTitle: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium focus:outline-none focus:border-[#800020]"
                          placeholder="Judul khusus untuk mesin pencari Google"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Deskripsi SEO (Meta Description)
                        </label>
                        <textarea
                          value={customPageForm.seoDesc || ''}
                          onChange={(e) => setCustomPageForm(prev => ({ ...prev, seoDesc: e.target.value }))}
                          rows={2}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium focus:outline-none focus:border-[#800020]"
                          placeholder="Deskripsi singkat seputar halaman..."
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <input
                          type="checkbox"
                          id="publishedCheckbox"
                          checked={customPageForm.published}
                          onChange={(e) => setCustomPageForm(prev => ({ ...prev, published: e.target.checked }))}
                          className="w-4 h-4 text-[#800020] rounded border-slate-300 focus:ring-[#800020]"
                        />
                        <label htmlFor="publishedCheckbox" className="text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                          Publikasikan langsung halaman ini agar dapat diakses publik
                        </label>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setIsCustomPageModalOpen(false)}
                          className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200"
                        >
                          Batal
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-xl bg-[#800020] hover:bg-[#9B2C2C] text-white text-xs font-black shadow-md flex items-center gap-1.5"
                        >
                          <Save className="w-4 h-4" />
                          <span>Simpan Metadata</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: MENU NAVIGASI (MANAGEMENT MENU) */}
          {activeTab === 'menu' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Struktur Menu Navigasi (Management Menu)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Atur menu navigasi utama website FTI UPA, status visibilitas, urutan, dan dropdown sub-menu.</p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Simpan ke Database Button */}
                  <button
                    onClick={() => saveMenuToDatabase()}
                    disabled={menuSaveStatus === 'saving'}
                    className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 shadow-sm transition-all ${
                      menuSaveStatus === 'saving'
                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                        : menuSaveStatus === 'saved'
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : menuSaveStatus === 'error'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white'
                    }`}
                  >
                    {menuSaveStatus === 'saving' ? (
                      <><span className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" /> Menyimpan...</>
                    ) : menuSaveStatus === 'saved' ? (
                      <><CheckCircle className="w-4 h-4" /> Tersimpan!</>
                    ) : menuSaveStatus === 'error' ? (
                      <><AlertCircle className="w-4 h-4" /> Gagal — Coba Lagi</>
                    ) : (
                      <><Database className="w-4 h-4" /> Simpan ke Database</>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setMenuForm({ label: '', url: '', isVisible: true, badge: '', order: menus.length + 1 });
                      setIsMenuModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs hover:bg-[#800020] transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Item Menu Baru</span>
                  </button>
                </div>
              </div>

              {/* Save Status Banner */}
              {menuSaveStatus !== 'idle' && (
                <div className={`mt-4 px-4 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                  menuSaveStatus === 'saving' ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50'
                  : menuSaveStatus === 'saved' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                  : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50'
                }`}>
                  {menuSaveStatus === 'saving' && <span className="w-3.5 h-3.5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin shrink-0" />}
                  {menuSaveStatus === 'saved' && <CheckCircle className="w-3.5 h-3.5 shrink-0" />}
                  {menuSaveStatus === 'error' && <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                  <span>{menuSaveMessage}</span>
                </div>
              )}

              {/* Drag & Drop Instruction Helper */}
              <div className="mt-4 p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-center justify-between text-xs text-amber-900 dark:text-amber-200">
                <div className="flex items-center gap-2.5">
                  <GripVertical className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span><strong>Fitur Drag & Drop Menu:</strong> Klik & tahan pegangan <code className="px-1 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900/60 font-mono font-bold">::</code> untuk menarik & mengurutkan menu. Setelah mengurutkan, klik <strong>Simpan ke Database</strong> untuk menyimpan perubahan.</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {menus.map((m, idx) => {
                  const isBeingDragged = draggedMenuIndex === idx;
                  const isDragOver = dragOverMenuIndex === idx;

                  return (
                    <div 
                      key={m.id}
                      draggable
                      onDragStart={(e) => handleMenuDragStart(e, idx)}
                      onDragOver={(e) => handleMenuDragOver(e, idx)}
                      onDrop={(e) => handleMenuDrop(e, idx)}
                      onDragEnd={handleMenuDragEnd}
                      className={`p-4 rounded-2xl border transition-all duration-150 flex flex-col gap-3 cursor-grab active:cursor-grabbing ${
                        isBeingDragged 
                          ? 'opacity-40 border-dashed border-amber-500 bg-amber-50 dark:bg-slate-900 scale-[0.99]' 
                          : isDragOver 
                          ? 'ring-2 ring-[#800020] border-[#800020] bg-amber-50/90 dark:bg-slate-700/80 shadow-md'
                          : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* Drag Handle Icon */}
                          <div 
                            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-grab active:cursor-grabbing"
                            title="Tarik untuk mengurutkan"
                          >
                            <GripVertical className="w-5 h-5" />
                          </div>

                          <span className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>

                          <div>
                            <div className="flex items-center gap-2">
                              {m.icon && (
                                <span className="px-1.5 py-0.5 rounded bg-red-100 text-[#9B2C2C] dark:bg-red-950 dark:text-red-300 font-mono text-xs font-bold">
                                  {m.icon}
                                </span>
                              )}
                              <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{m.line1 || m.label}</h4>
                              {m.badge && (
                                <span className="px-2 py-0.2 rounded text-[9px] font-black bg-amber-400 text-slate-900">
                                  {m.badge}
                                </span>
                              )}
                            </div>
                            {m.line2 && (
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">{m.line2}</p>
                            )}
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] text-slate-400 font-mono">Tautan ID: #{m.url}</span>
                              {customPages.some(p => p.slug === m.url || p.id === m.url) && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                                  <FileText className="w-3 h-3 text-[#9B2C2C] dark:text-amber-400" />
                                  Halaman Custom: {customPages.find(p => p.slug === m.url || p.id === m.url)?.title}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMenu(m);
                              setMenuForm({
                                label: m.label,
                                line1: m.line1 || m.label,
                                line2: m.line2 || '',
                                icon: m.icon || '',
                                url: m.url,
                                badge: m.badge || '',
                                isVisible: m.isVisible
                              });
                              setIsMenuModalOpen(true);
                            }}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-[#9B2C2C] hover:text-white transition-all flex items-center gap-1 text-xs font-bold"
                            title="Edit Menu"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>

                          {/* Reorder Up / Down Arrow Fallback Buttons */}
                          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                            <button
                              type="button"
                              onClick={() => moveMenuPosition(idx, idx - 1)}
                              disabled={idx === 0}
                              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                              title="Pindah ke Atas"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => moveMenuPosition(idx, idx + 1)}
                              disabled={idx === menus.length - 1}
                              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                              title="Pindah ke Bawah"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleMenuVisibility(m.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              m.isVisible 
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                                : 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                            }`}
                          >
                            {m.isVisible ? 'Tampil' : 'Sembunyi'}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteMenu(m.id)}
                            className="p-2 rounded-xl bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-950/60 dark:text-rose-300"
                            title="Hapus Menu"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Sub-menu Dropdown items display & sub-reordering */}
                      <div className="pl-10 pt-2 border-t border-slate-200/60 dark:border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                            Sub-Menu Item Dropdown ({m.children?.length || 0}):
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingSubMenuInfo({ parentIndex: idx, childIndex: null });
                              setSubMenuForm({ label: '', line1: '', line2: '', icon: '', url: '', badge: '' });
                              setIsSubMenuModalOpen(true);
                            }}
                            className="text-[11px] font-extrabold text-[#9B2C2C] dark:text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Tambah Sub-Menu</span>
                          </button>
                        </div>

                        {m.children && m.children.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {m.children.map((child, childIdx) => (
                              <div key={child.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs shadow-xs">
                                <div className="flex flex-col min-w-0 pr-2">
                                  <div className="flex items-center gap-1.5">
                                    {child.icon && (
                                      <span className="px-1 py-0.2 rounded bg-red-50 text-[#9B2C2C] dark:bg-slate-700 dark:text-red-300 font-mono text-[10px] font-bold">
                                        {child.icon}
                                      </span>
                                    )}
                                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate">{child.line1 || child.label}</span>
                                    {child.badge && (
                                      <span className="px-1.5 py-0.2 text-[8px] font-black rounded bg-amber-400 text-slate-900 shrink-0">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  {child.line2 && (
                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 font-normal mt-0.5">
                                      {child.line2}
                                    </span>
                                  )}
                                  <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                                    <span className="text-[9px] font-mono text-slate-400">#{child.url}</span>
                                    {customPages.some(p => p.slug === child.url || p.id === child.url) && (
                                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[8px] font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                                        <FileText className="w-2.5 h-2.5 text-[#9B2C2C] dark:text-amber-400" /> Custom Page
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingSubMenuInfo({ parentIndex: idx, childIndex: childIdx });
                                      setSubMenuForm({
                                        label: child.label,
                                        line1: child.line1 || child.label,
                                        line2: child.line2 || '',
                                        icon: child.icon || '',
                                        url: child.url,
                                        badge: child.badge || ''
                                      });
                                      setIsSubMenuModalOpen(true);
                                    }}
                                    className="p-1 rounded text-slate-500 hover:text-[#9B2C2C] dark:hover:text-red-400"
                                    title="Edit Sub-Menu"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveSubMenuPosition(idx, childIdx, childIdx - 1)}
                                    disabled={childIdx === 0}
                                    className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-20"
                                    title="Pindah Sub-Menu ke Atas"
                                  >
                                    <ArrowUp className="w-3 h-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveSubMenuPosition(idx, childIdx, childIdx + 1)}
                                    disabled={childIdx === (m.children?.length ?? 0) - 1}
                                    className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-20"
                                    title="Pindah Sub-Menu ke Bawah"
                                  >
                                    <ArrowDown className="w-3 h-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSubMenu(idx, childIdx)}
                                    className="p-1 rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-700"
                                    title="Hapus Sub-Menu"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[11px] text-slate-400 italic">Belum ada sub-menu dropdown. Klik "Tambah Sub-Menu" di atas untuk menambahkan.</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 7: MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <MediaManager
                mediaFiles={media}
                onUpdateMediaFiles={handleUpdateMedia}
              />
            </div>
          )}

          {/* TAB: FOOTER EDITOR */}
          {activeTab === 'footer-editor' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-[#800020] via-[#9B2C2C] to-red-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Layout className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-amber-200 inline-flex items-center gap-1.5 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pengaturan Live Footer Website
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Editor & Kustomisasi Footer Website
                  </h2>
                  <p className="text-xs sm:text-sm text-red-100/90 mt-2 leading-relaxed">
                    Kustomisasi identitas fakultas, deskripsi profil, akreditasi, alamat sekretariat, nomor kontak, jam operasional, tautan media sosial, serta gaya warna footer secara real-time.
                  </p>
                </div>
              </div>

              {/* Form & Live Preview */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  persistWebsiteSettings(websiteSettings);
                  showToast('✅ Pengaturan Footer Website berhasil diperbarui & disimpan!');
                }}
                className="space-y-6"
              >
                {/* PRESET TEMA WARNA FOOTER */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                        <Palette className="w-4 h-4 text-amber-500" />
                        Gaya Tema Warna Footer
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pilih skema warna latar belakang untuk footer bagian bawah situs web.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {[
                      { id: 'maroon', name: 'Maroon Classic', bg: 'bg-[#800020] text-white border-red-500' },
                      { id: 'dark', name: 'Midnight Dark', bg: 'bg-slate-950 text-slate-100 border-slate-700' },
                      { id: 'navy', name: 'Royal Navy', bg: 'bg-slate-900 text-slate-100 border-slate-700' },
                      { id: 'emerald', name: 'Emerald Forest', bg: 'bg-emerald-950 text-emerald-100 border-emerald-700' },
                      { id: 'black', name: 'Pitch Black', bg: 'bg-black text-white border-slate-800' }
                    ].map(theme => (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => setWebsiteSettings({ ...websiteSettings, footerStyle: theme.id })}
                        className={`p-3 rounded-2xl border-2 text-left font-bold text-xs transition-all cursor-pointer flex flex-col justify-between h-20 shadow-xs ${theme.bg} ${
                          (websiteSettings.footerStyle || 'maroon') === theme.id 
                            ? 'ring-4 ring-amber-400 scale-[1.02]' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <span>{theme.name}</span>
                        {(websiteSettings.footerStyle || 'maroon') === theme.id && (
                          <span className="text-[10px] font-black uppercase text-amber-300">✓ Aktif</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BAGIAN 1: IDENTITAS & DESKRIPSI FAKULTAS */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
                    <FileText className="w-4 h-4 text-red-600 dark:text-red-400" />
                    1. Identitas & Deskripsi Profil Fakultas
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Teks Nama Fakultas di Footer</label>
                      <input
                        type="text"
                        value={websiteSettings.logoText || 'Fakultas Teknik & Informatika'}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoText: e.target.value })}
                        placeholder="Fakultas Teknik & Informatika"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Teks Nama Universitas</label>
                      <input
                        type="text"
                        value={websiteSettings.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoSubtitle: e.target.value })}
                        placeholder="Universitas Patria Artha (U.P.A)"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Deskripsi Singkat Profil Fakultas di Footer</label>
                    <textarea
                      rows={3}
                      value={websiteSettings.aboutText || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, aboutText: e.target.value })}
                      placeholder="Fakultas Teknik dan Informatika Universitas Patria Artha terakreditasi UNGGUL & Sertifikasi Internasional..."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Teks Badge Akreditasi & SK BAN-PT / LAM-INFOKOM</label>
                    <input
                      type="text"
                      value={websiteSettings.accreditationText || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, accreditationText: e.target.value })}
                      placeholder="Akreditasi UNGGUL • SK No: 0482/SK/LAM-INFOKOM/2024"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                    />
                  </div>
                </div>

                {/* BAGIAN 2: KONTAK & SEKRETARIAT */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    2. Alamat Kampus, Kontak & Sekretariat
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Alamat Lengkap Kampus & Sekretariat</label>
                    <input
                      type="text"
                      value={websiteSettings.address || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, address: e.target.value })}
                      placeholder="Jl. Tun Abdul Razak, (Terusan Jl. Hertasning Baru - Makassar), Kab. Gowa (SUL-SEL)"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nomor Telepon / WhatsApp Informasi SPMB</label>
                      <input
                        type="text"
                        value={websiteSettings.phone || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, phone: e.target.value })}
                        placeholder="(0411) 898-7654 / WA: 0812-3456-7890"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Resmi Fakultas</label>
                      <input
                        type="email"
                        value={websiteSettings.email || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, email: e.target.value })}
                        placeholder="info@patria-artha.ac.id"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Jam Operasional Pelayanan Sekretariat</label>
                    <input
                      type="text"
                      value={websiteSettings.officeHours || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, officeHours: e.target.value })}
                      placeholder="Senin - Jumat: 08:00 - 16:00 WITA | Sabtu: 08:00 - 12:00 WITA"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                </div>

                {/* BAGIAN 3: MEDIA SOSIAL & COPYRIGHT */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    3. Tautan Media Sosial Resmi & Teks Copyright Footer
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL Instagram Resmi</label>
                      <input
                        type="text"
                        value={websiteSettings.instagram || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, instagram: e.target.value })}
                        placeholder="https://instagram.com/fti_patriaartha"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL Saluran YouTube</label>
                      <input
                        type="text"
                        value={websiteSettings.youtube || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, youtube: e.target.value })}
                        placeholder="https://youtube.com/@ftipatriaartha"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL LinkedIn Resmi</label>
                      <input
                        type="text"
                        value={websiteSettings.linkedin || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/school/fti-patria-artha"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">URL Repositori GitHub</label>
                      <input
                        type="text"
                        value={websiteSettings.github || ''}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, github: e.target.value })}
                        placeholder="https://github.com/fti-patria-artha"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Teks Hak Cipta (Copyright Footer)</label>
                    <input
                      type="text"
                      value={websiteSettings.copyrightText || ''}
                      onChange={(e) => setWebsiteSettings({ ...websiteSettings, copyrightText: e.target.value })}
                      placeholder="© 2026 Fakultas Teknik & Informatika - Universitas Patria Artha. All Rights Reserved."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                    />
                  </div>
                </div>

                {/* PRATINJAU LIVE FOOTER PREVIEW BOX */}
                <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-700 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Pratinjau Tampilan Footer (Live Preview)
                    </h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Real-Time Sync
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-xs">
                    <div className="flex items-center gap-3">
                      {(websiteSettings.logoUrl) ? (
                        <img src={websiteSettings.logoUrl} alt="Logo" className="h-10 object-contain" />
                      ) : (
                        <UpaLogo size={36} />
                      )}
                      <div>
                        <h4 className="font-extrabold text-sm leading-tight text-white">{websiteSettings.logoText || 'FTI PATRIA ARTHA'}</h4>
                        <p className="text-[10px] text-amber-300 font-bold">{websiteSettings.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-xs max-w-xl">{websiteSettings.aboutText || 'Deskripsi fakultas akan tampil di sini...'}</p>

                    <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                      <span>{websiteSettings.address || 'Alamat Kampus...'}</span>
                      <span className="text-amber-200">{websiteSettings.email || 'info@patria-artha.ac.id'}</span>
                    </div>

                    <div className="pt-2 text-[10px] text-slate-500 border-t border-white/5">
                      {websiteSettings.copyrightText || '© 2026 Fakultas Teknik & Informatika - Universitas Patria Artha. All Rights Reserved.'}
                    </div>
                  </div>
                </div>

                {/* TOMBOL SIMPAN */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-300" />
                    <span>Simpan Seluruh Pengaturan Footer</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 8: THEME CUSTOMIZER */}
          {activeTab === 'tema' && (
            <ThemeCustomizer onShowToast={showToast} />
          )}

          {/* TAB 8: PENGATURAN WEBSITE LENGKAP */}
          {activeTab === 'pengaturan' && (
            <div className="space-y-6">
              
              {/* Header Banner for Website Settings */}
              <div className="bg-gradient-to-r from-[#800020] via-[#9B2C2C] to-red-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Settings className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-amber-200 inline-flex items-center gap-1.5 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pusat Konfigurasi Situs Web
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black">Pengaturan Website FTI Patria Artha</h3>
                  <p className="text-xs sm:text-sm text-red-100 mt-2 leading-relaxed">
                    Kelola identitas visual, informasi fakultas, skema warna Merah & Putih, kontak sosial, SEO meta tag, serta cadangan sistem website FTI secara terpusat.
                  </p>
                </div>

                {/* Sub-Tabs Selector Bar */}
                <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-2">
                  {[
                    { id: 'identitas', label: 'Identitas & Fakultas', icon: <Building2 className="w-4 h-4" /> },
                    { id: 'logo', label: 'Pengaturan Logo', icon: <ImageIcon className="w-4 h-4" /> },
                    { id: 'tampilan', label: 'Tema & Color Picker', icon: <Palette className="w-4 h-4" /> },
                    { id: 'kontak', label: 'Kontak & Medsos', icon: <Mail className="w-4 h-4" /> },
                    { id: 'seo', label: 'SEO & Analytics', icon: <Search className="w-4 h-4" /> },
                    { id: 'sistem', label: 'Pendaftaran & Backup', icon: <ShieldCheck className="w-4 h-4" /> },
                  ].map((sub) => {
                    const isActive = settingsSubTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSettingsSubTab(sub.id as any)}
                        className={`px-4 py-2 rounded-2xl text-xs font-black flex items-center gap-2 transition-all ${
                          isActive
                            ? 'bg-white text-[#9B2C2C] shadow-lg scale-105'
                            : 'bg-black/20 hover:bg-white/10 text-white/90'
                        }`}
                      >
                        {sub.icon}
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SUB-TAB 1: IDENTITAS WEBSITE & FAKULTAS */}
              {settingsSubTab === 'identitas' && (
                <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fadeIn">
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-slate-100">Identitas Situs & Profil Fakultas</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Konfigurasi judul situs, tagline, running text, dan dekanat.</p>
                    </div>
                    <span className="p-2 rounded-2xl bg-red-50 dark:bg-slate-700 text-[#9B2C2C] dark:text-red-400">
                      <Building2 className="w-5 h-5" />
                    </span>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      persistWebsiteSettings(websiteSettings);
                      setFacultyInfo({
                        facultyName: websiteSettings.facultyName,
                        universityName: websiteSettings.universityName,
                        deanName: websiteSettings.deanName,
                        email: websiteSettings.email,
                        phone: websiteSettings.phone,
                        address: websiteSettings.address,
                        vision: websiteSettings.vision,
                        instagram: websiteSettings.instagram,
                        website: 'https://fti.patria-artha.ac.id'
                      });
                      showToast('Identitas website & fakultas berhasil disimpan!');
                    }} 
                    className="mt-6 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Judul Utama Website (Site Title)</label>
                        <input
                          type="text"
                          value={websiteSettings.siteTitle}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, siteTitle: e.target.value })}
                          required
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Slogan / Tagline Website</label>
                        <input
                          type="text"
                          value={websiteSettings.siteTagline}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, siteTagline: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Nama Fakultas Resmi</label>
                        <input
                          type="text"
                          value={websiteSettings.facultyName}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, facultyName: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Nama Universitas</label>
                        <input
                          type="text"
                          value={websiteSettings.universityName}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, universityName: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Nama Dekan Fakultas</label>
                        <input
                          type="text"
                          value={websiteSettings.deanName}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, deanName: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Status Akreditasi Resmi</label>
                        <input
                          type="text"
                          value={websiteSettings.accreditationText}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, accreditationText: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>
                    </div>

                    {/* Running Text Headline */}
                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Running Text Banner Pengumuman Atas Website</label>
                      <input
                        type="text"
                        value={websiteSettings.runningText}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, runningText: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    {/* Visi & Misi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Visi Utama Fakultas</label>
                        <textarea
                          value={websiteSettings.vision}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, vision: e.target.value })}
                          rows={4}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Misi Utama Fakultas</label>
                        <textarea
                          value={websiteSettings.mission}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, mission: e.target.value })}
                          rows={4}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold rounded-2xl shadow-md transition-colors flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Simpan Identitas Website</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* SUB-TAB 2: PENGATURAN LOGO WEBSITE */}
              {settingsSubTab === 'logo' && (
                <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fadeIn space-y-8">
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-slate-100">Pengaturan Logo Header & Branding Website</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Atur berkas logo gambar, lambang SVG crest resmi U.P.A, ukuran, favicon browser, dan teks header navbar.</p>
                    </div>
                    <span className="p-2 rounded-2xl bg-red-50 dark:bg-slate-700 text-[#9B2C2C] dark:text-red-400">
                      <ImageIcon className="w-5 h-5" />
                    </span>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      persistWebsiteSettings(websiteSettings);
                      showToast('Pengaturan Logo & Branding Website berhasil disimpan!');
                    }}
                    className="space-y-6"
                  >
                    {/* Quick Button to Use Vector Transparent Logo */}
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h5 className="text-xs font-bold text-amber-900 dark:text-amber-200">Mode Logo Transparan</h5>
                        <p className="text-[11px] text-amber-700 dark:text-amber-400">Gunakan Lambang SVG Resmi UPA versi transparan tanpa bingkai/card putih.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = { ...websiteSettings, logoUrl: '', logoDarkUrl: '', useCustomLogoImage: false };
                          setWebsiteSettings(updated);
                          persistWebsiteSettings(updated);
                          showToast('Logo berhasil diubah ke Vector Transparan UPA!');
                        }}
                        className="px-4 py-2 rounded-xl bg-[#800020] text-white text-xs font-bold hover:bg-[#9B2C2C] transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Gunakan Logo Vector Transparan</span>
                      </button>
                    </div>

                    {/* Image Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Logo Utama Light Mode */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300">URL Gambar Logo Utama (Light Mode - PNG / WebP / JPG / SVG)</label>
                          <button
                            type="button"
                            onClick={() => setMediaPickerTarget(() => (url: string) => setWebsiteSettings(s => ({ ...s, logoUrl: url, useCustomLogoImage: true })))}
                            className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                          >
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Pilih dari Media Manager</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="Kosongkan untuk menggunakan logo vector transparan"
                            value={websiteSettings.logoUrl || ''}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoUrl: e.target.value, useCustomLogoImage: !!e.target.value })}
                            className="flex-1 p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                          />
                          {websiteSettings.logoUrl && (
                            <img src={websiteSettings.logoUrl} alt="Logo Light" className="w-10 h-10 object-contain" />
                          )}
                        </div>
                      </div>

                      {/* Logo Versi Gelap / Dark Mode */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300">URL Gambar Logo Dark Mode (PNG / WebP / JPG / SVG)</label>
                          <button
                            type="button"
                            onClick={() => setMediaPickerTarget(() => (url: string) => setWebsiteSettings(s => ({ ...s, logoDarkUrl: url, useCustomLogoImage: true })))}
                            className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                          >
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Pilih dari Media Manager</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="https://.../logo-dark.webp atau logo-dark.png"
                            value={websiteSettings.logoDarkUrl || ''}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoDarkUrl: e.target.value, useCustomLogoImage: true })}
                            className="flex-1 p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                          />
                          {websiteSettings.logoDarkUrl && (
                            <img src={websiteSettings.logoDarkUrl} alt="Logo Dark" className="w-10 h-10 object-contain p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900" />
                          )}
                        </div>
                      </div>

                      {/* Favicon Browser */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300">URL Favicon Browser Tab</label>
                          <button
                            type="button"
                            onClick={() => setMediaPickerTarget(() => (url: string) => setWebsiteSettings(s => ({ ...s, faviconUrl: url })))}
                            className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                          >
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Pilih dari Media Manager</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="https://..."
                            value={websiteSettings.faviconUrl || ''}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, faviconUrl: e.target.value })}
                            className="flex-1 p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                          />
                          {websiteSettings.faviconUrl && (
                            <img src={websiteSettings.faviconUrl} alt="Favicon" className="w-8 h-8 object-contain p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white" />
                          )}
                        </div>
                      </div>

                      {/* Ukuran Logo Height Slider */}
                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Ukuran Tinggi Logo Gambar Header (Pixel: {websiteSettings.logoHeightPx || 46}px)</label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min="32"
                            max="90"
                            step="2"
                            value={websiteSettings.logoHeightPx || 46}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoHeightPx: parseInt(e.target.value) })}
                            className="flex-1 accent-[#9B2C2C]"
                          />
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono text-xs font-bold rounded-lg">
                            {websiteSettings.logoHeightPx || 46}px
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Logo Text & Subtitle Input */}
                    <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Teks Utama Nama Logo Header</label>
                          <input
                            type="text"
                            value={websiteSettings.logoText || 'Fakultas Teknik & Informatika'}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoText: e.target.value })}
                            className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Teks Subtitle Nama Logo Header</label>
                          <input
                            type="text"
                            value={websiteSettings.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}
                            onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoSubtitle: e.target.value })}
                            className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                          />
                        </div>
                      </div>

                      {/* Font Size & Spacing Controls */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">
                            Ukuran Font Teks Utama Header (Pixel: {websiteSettings.logoTextFontSize || 14}px)
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="11"
                              max="28"
                              step="1"
                              value={websiteSettings.logoTextFontSize || 14}
                              onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoTextFontSize: parseInt(e.target.value) })}
                              className="flex-1 accent-[#9B2C2C]"
                            />
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono text-xs font-bold rounded-lg shrink-0">
                              {websiteSettings.logoTextFontSize || 14}px
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">
                            Jarak Font / Spacing (Tracking) Teks Utama Header (Pixel: {websiteSettings.logoTextLetterSpacing ?? 0}px)
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="-2"
                              max="10"
                              step="0.5"
                              value={websiteSettings.logoTextLetterSpacing ?? 0}
                              onChange={(e) => setWebsiteSettings({ ...websiteSettings, logoTextLetterSpacing: parseFloat(e.target.value) })}
                              className="flex-1 accent-[#9B2C2C]"
                            />
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono text-xs font-bold rounded-lg shrink-0">
                              {websiteSettings.logoTextLetterSpacing ?? 0}px
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pratinjau Live Logo Box */}
                    <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pratinjau Live Tampilan Logo Navbar</h5>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Live Preview</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Light Header Preview */}
                        <div className="p-4 rounded-2xl bg-[#800020] text-white flex items-center gap-3 shadow-sm">
                          {(websiteSettings.logoUrl) ? (
                            <img src={websiteSettings.logoUrl} alt="Logo" style={{ height: `${websiteSettings.logoHeightPx || 46}px` }} className="object-contain max-w-[180px]" />
                          ) : (
                            <UpaLogo size={websiteSettings.logoHeightPx || 46} />
                          )}
                          <div>
                            <p 
                              className="font-extrabold text-[#FFF5F5] leading-tight"
                              style={{ 
                                fontSize: `${websiteSettings.logoTextFontSize || 14}px`,
                                letterSpacing: `${websiteSettings.logoTextLetterSpacing ?? 0}px`
                              }}
                            >
                              {websiteSettings.logoText || 'Fakultas Teknik & Informatika'}
                            </p>
                            <p className="text-[11px] text-[#FFF5F5]/80 font-medium">{websiteSettings.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}</p>
                          </div>
                        </div>

                        {/* Dark Header Preview */}
                        <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-700 flex items-center gap-3 shadow-sm">
                          {(websiteSettings.logoDarkUrl || websiteSettings.logoUrl) ? (
                            <img src={websiteSettings.logoDarkUrl || websiteSettings.logoUrl} alt="Logo" style={{ height: `${websiteSettings.logoHeightPx || 46}px` }} className="object-contain max-w-[180px]" />
                          ) : (
                            <UpaLogo size={websiteSettings.logoHeightPx || 46} />
                          )}
                          <div>
                            <p 
                              className="font-extrabold text-slate-100 leading-tight"
                              style={{ 
                                fontSize: `${websiteSettings.logoTextFontSize || 14}px`,
                                letterSpacing: `${websiteSettings.logoTextLetterSpacing ?? 0}px`
                              }}
                            >
                              {websiteSettings.logoText || 'Fakultas Teknik & Informatika'}
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">{websiteSettings.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold rounded-2xl shadow-md transition-colors flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Simpan Pengaturan Logo Website</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* SUB-TAB 3: TEMA & COLOR PICKER CUSTOM */}
              {settingsSubTab === 'tampilan' && (
                <div className="animate-fadeIn">
                  <ThemeCustomizer onShowToast={showToast} />
                </div>
              )}

              {/* SUB-TAB 3: KONTAK & MEDIA SOSIAL */}
              {settingsSubTab === 'kontak' && (
                <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fadeIn">
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-slate-100">Kontak Resmi & Tautan Media Sosial</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Atur email, nomor telepon WhatsApp SPMB, alamat kampus, serta akun media sosial resmi FTI.</p>
                    </div>
                    <span className="p-2 rounded-2xl bg-red-50 dark:bg-slate-700 text-[#9B2C2C] dark:text-red-400">
                      <Mail className="w-5 h-5" />
                    </span>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      persistWebsiteSettings(websiteSettings);
                      setFacultyInfo({ ...facultyInfo, email: websiteSettings.email, phone: websiteSettings.phone, address: websiteSettings.address, instagram: websiteSettings.instagram });
                      showToast('Informasi kontak & medsos berhasil disimpan!');
                    }}
                    className="mt-6 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Email Resmi Fakultas</label>
                        <input
                          type="email"
                          value={websiteSettings.email}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, email: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Telepon Layanan Akademik</label>
                        <input
                          type="text"
                          value={websiteSettings.phone}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, phone: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Hotline WhatsApp PMB</label>
                        <input
                          type="text"
                          value={websiteSettings.whatsappSpmb}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, whatsappSpmb: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Instagram Resmi (@username)</label>
                        <input
                          type="text"
                          value={websiteSettings.instagram}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, instagram: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Channel YouTube Resmi</label>
                        <input
                          type="text"
                          value={websiteSettings.youtube}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, youtube: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Halaman Facebook Resmi</label>
                        <input
                          type="text"
                          value={websiteSettings.facebook}
                          onChange={(e) => setWebsiteSettings({ ...websiteSettings, facebook: e.target.value })}
                          className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Alamat Lengkap Kampus FTI Patria Artha</label>
                      <input
                        type="text"
                        value={websiteSettings.address}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, address: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">URL Embed Google Maps Kampus</label>
                      <input
                        type="text"
                        value={websiteSettings.mapsEmbedUrl}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, mapsEmbedUrl: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold rounded-2xl shadow-md transition-colors"
                      >
                        Simpan Kontak & Medsos
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* SUB-TAB 4: SEO & ANALYTICS */}
              {settingsSubTab === 'seo' && (
                <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fadeIn">
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-slate-100">Optimasi Mesin Pencari (SEO) & Tracking Analytics</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sesuaikan judul pencarian Google, deskripsi meta, kata kunci, dan ID Google Analytics.</p>
                    </div>
                    <span className="p-2 rounded-2xl bg-red-50 dark:bg-slate-700 text-[#9B2C2C] dark:text-red-400">
                      <Search className="w-5 h-5" />
                    </span>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      persistWebsiteSettings(websiteSettings);
                      showToast('Pengaturan SEO & Meta Tags berhasil disimpan!');
                    }}
                    className="mt-6 space-y-6 max-w-3xl"
                  >
                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Default Meta Title (Google Search Title)</label>
                      <input
                        type="text"
                        value={websiteSettings.metaTitle}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, metaTitle: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Default Meta Description</label>
                      <textarea
                        value={websiteSettings.metaDescription}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, metaDescription: e.target.value })}
                        rows={3}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Meta Keywords (Dipisahkan Koma)</label>
                      <input
                        type="text"
                        value={websiteSettings.metaKeywords}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, metaKeywords: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold mb-1.5 text-slate-700 dark:text-slate-300">Google Analytics Tracking Measurement ID</label>
                      <input
                        type="text"
                        placeholder="G-XXXXXXXXXX"
                        value={websiteSettings.googleAnalyticsId}
                        onChange={(e) => setWebsiteSettings({ ...websiteSettings, googleAnalyticsId: e.target.value })}
                        className="w-full p-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#9B2C2C]"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold rounded-2xl shadow-md transition-colors"
                      >
                        Simpan Meta Tag & SEO
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* SUB-TAB 5: PENDAFTARAN & SISTEM BACKUP */}
              {settingsSubTab === 'sistem' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Status Fitur System Toggles */}
                  <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-4">Kontrol Layanan Online & Fitur AI</h4>
                    
                    <div className="space-y-4 max-w-2xl">
                      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-between gap-4">
                        <div>
                          <h5 className="font-extrabold text-xs text-slate-900 dark:text-slate-100">Pendaftaran Mahasiswa Baru (PMB Online)</h5>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">Aktifkan atau nonaktifkan formulir pendaftaran online mahasiswa baru di situs web.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = !websiteSettings.isPmbActive;
                            const newSettings = { ...websiteSettings, isPmbActive: updated };
                            setWebsiteSettings(newSettings);
                            persistWebsiteSettings(newSettings);
                            showToast(`Status PMB Online diubah menjadi: ${updated ? 'AKTIF' : 'NONAKTIF'}`);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                            websiteSettings.isPmbActive 
                              ? 'bg-emerald-600 text-white shadow-sm' 
                              : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {websiteSettings.isPmbActive ? '✓ PMB BUKA' : 'PMB TUTUP'}
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-between gap-4">
                        <div>
                          <h5 className="font-extrabold text-xs text-slate-900 dark:text-slate-100">Widget AI Assistant Chatbot FTI</h5>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">Tampilkan widget asisten AI di pojok kanan bawah untuk pengunjung situs.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = !websiteSettings.showAiAssistant;
                            const newSettings = { ...websiteSettings, showAiAssistant: updated };
                            setWebsiteSettings(newSettings);
                            persistWebsiteSettings(newSettings);
                            showToast(`Widget AI Chatbot diubah menjadi: ${updated ? 'DITAMPILKAN' : 'DISEMBUNYIKAN'}`);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                            websiteSettings.showAiAssistant 
                              ? 'bg-blue-600 text-white shadow-sm' 
                              : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {websiteSettings.showAiAssistant ? '✓ WIDGET AKTIF' : 'WIDGET NONAKTIF'}
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl border border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between gap-4">
                        <div>
                          <h5 className="font-extrabold text-xs text-rose-900 dark:text-rose-300">Mode Perbaikan (Maintenance Mode)</h5>
                          <p className="text-[11px] text-rose-700 dark:text-rose-400">Jika diaktifkan, pengunjung akan melihat halaman pemeliharaan sistem.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = !websiteSettings.isMaintenanceMode;
                            const newSettings = { ...websiteSettings, isMaintenanceMode: updated };
                            setWebsiteSettings(newSettings);
                            persistWebsiteSettings(newSettings);
                            showToast(`Mode Maintenance: ${updated ? 'AKTIF' : 'NONAKTIF'}`);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                            websiteSettings.isMaintenanceMode 
                              ? 'bg-rose-600 text-white shadow-sm' 
                              : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {websiteSettings.isMaintenanceMode ? '⚠️ MAINTENANCE' : 'NORMAL'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Backup & Restore Data */}
                  <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-1">Cadangan & Pemulihan Data Website (JSON Export)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Unduh seluruh berkas berita, kurikulum, data dosen, prodi, dan pengaturan situs sebagai cadangan aman.</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleExportBackup}
                        className="px-5 py-2.5 rounded-2xl bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold shadow-md flex items-center gap-2 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Unduh Backup JSON Website</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm('Apakah Anda yakin ingin mengembalikan seluruh pengaturan website ke setelan awal pabrik?')) {
                            localStorage.removeItem('fti_website_settings');
                            localStorage.removeItem('fti_web_theme_preset');
                            showToast('Pengaturan website berhasil di-reset ke default.');
                            window.location.reload();
                          }
                        }}
                        className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-rose-100 hover:text-rose-700 text-xs font-extrabold transition-colors"
                      >
                        Reset Pengaturan Default
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* ─── 👥 MANAJEMEN PENGGUNA & LEVEL AKSES TAB ───────────────────── */}
              {(activeTab as string) === 'pengguna' && (
                <div className="space-y-6">
                  {/* Top Bar Header & Action */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                          <ShieldCheck className="w-5 h-5" />
                        </span>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">Manajemen Pengguna & Level Akses System</h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Kelola daftar akun administrator, operator, dan dosen. Atur kata sandi (password), level otorisasi akses, serta status keaktifan pengguna.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setEditingUser(null);
                        setUserForm({ name: '', email: '', password: '', role: 'Admin', status: 'active', department: 'Teknik Informatika', avatarUrl: '' });
                        setShowUserPassword(false);
                        setIsUserModalOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-extrabold shadow-md flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4 text-amber-300" />
                      <span>Tambah Pengguna Baru</span>
                    </button>
                  </div>

                  {/* Users Table Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                      <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Cari nama atau email pengguna..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#9B2C2C]"
                        />
                      </div>

                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Total Pengguna: <span className="text-[#9B2C2C] dark:text-red-400 font-extrabold">{usersList.length} Akun</span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 font-black uppercase text-[10px] tracking-wider">
                            <th className="p-4">Pengguna & Email</th>
                            <th className="p-4">Level Akses (Role)</th>
                            <th className="p-4">Kata Sandi / Password System</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-center">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                          {usersList.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())).map((userItem) => {
                            const isPasswordVisible = visiblePasswords[userItem.id];
                            return (
                              <tr key={userItem.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                <td className="p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-[#800020] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs border border-white/20">
                                      {userItem.avatarUrl ? (
                                        <img src={userItem.avatarUrl} alt={userItem.name} className="w-full h-full rounded-2xl object-cover" />
                                      ) : (
                                        userItem.name.substring(0, 2).toUpperCase()
                                      )}
                                    </div>
                                    <div>
                                      <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{userItem.name}</h4>
                                      <p className="text-[11px] text-slate-500 font-mono">{userItem.email}</p>
                                    </div>
                                  </div>
                                </td>

                                <td className="p-4">
                                  <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border shadow-2xs ${
                                    userItem.role === 'Superadmin'
                                      ? 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950 dark:text-purple-300'
                                      : userItem.role === 'Admin'
                                      ? 'bg-red-100 text-[#800020] border-red-300 dark:bg-red-950 dark:text-red-300'
                                      : userItem.role === 'Editor'
                                      ? 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-300'
                                      : 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                                  }`}>
                                    {userItem.role || 'Admin'}
                                  </span>
                                </td>

                                <td className="p-4">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs p-1.5 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold min-w-[110px] inline-block text-center">
                                      {isPasswordVisible 
                                        ? (userItem.password || 'UPA2026!') 
                                        : '••••••••••••'}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => togglePasswordVisibility(userItem.id)}
                                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#9B2C2C] transition-colors"
                                      title={isPasswordVisible ? "Sembunyikan Password" : "Tampilkan Password"}
                                    >
                                      {isPasswordVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                    </button>
                                  </div>
                                </td>

                                <td className="p-4">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                                    userItem.status === 'active' || (userItem.status as string) === 'Active' || !userItem.status
                                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200'
                                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                                  }`}>
                                    {userItem.status === 'active' || (userItem.status as string) === 'Active' || !userItem.status ? '● Aktif' : '○ Nonaktif'}
                                  </span>
                                </td>

                                <td className="p-4 text-center">
                                  <div className="flex items-center justify-center gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setEditingUser(userItem);
                                        setUserForm({
                                          name: userItem.name,
                                          email: userItem.email,
                                          password: userItem.password || '',
                                          role: userItem.role || 'Admin',
                                          status: (userItem.status || 'active') as any,
                                          avatarUrl: userItem.avatarUrl || ''
                                        });
                                        setShowUserPassword(false);
                                        setIsUserModalOpen(true);
                                      }}
                                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-[#9B2C2C] hover:text-white transition-colors cursor-pointer"
                                      title="Edit Data & Password User"
                                    >
                                      <Edit3 className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleDeleteUser(userItem.id)}
                                      className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                                      title="Hapus Pengguna"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      {/* --- BERITA MODAL FORM --- */}
      {isNewsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-2xl w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsNewsModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-4">
              {editingNews ? 'Edit Berita & Pengumuman' : 'Tambah Berita Baru'}
            </h3>

            <form onSubmit={handleSaveNews} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">Judul Berita</label>
                <input
                  type="text"
                  value={newsForm.title || ''}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  required
                  placeholder="Contoh: Tim Mahasiswa FTI Meraih Juara 1 AI Hackathon"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Kategori</label>
                  <select
                    value={newsForm.category || 'Berita'}
                    onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Berita">Berita</option>
                    <option value="Pengumuman">Pengumuman</option>
                    <option value="Prestasi">Prestasi</option>
                    <option value="Seminar">Seminar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Tanggal Rilis</label>
                  <input
                    type="date"
                    value={newsForm.date || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold">Thumbnail URL Gambar</label>
                  <button
                    type="button"
                    onClick={() => setMediaPickerTarget(() => (url: string) => setNewsForm(f => ({ ...f, thumbnail: url })))}
                    className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Pilih dari Media Manager</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={newsForm.thumbnail || ''}
                  onChange={(e) => setNewsForm({ ...newsForm, thumbnail: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Ringkasan Singkat</label>
                <textarea
                  value={newsForm.summary || ''}
                  onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                  rows={2}
                  required
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Isi Lengkap Berita</label>
                <textarea
                  value={newsForm.content || ''}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  rows={4}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors">
                Simpan Berita
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- DOSEN MODAL FORM --- */}
      {isLecturerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-3xl w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            <button onClick={() => setIsLecturerModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-xl bg-red-100 dark:bg-red-950/60 text-[#9B2C2C] dark:text-red-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400">
                {editingLecturer ? 'Edit Profil & Link Akademik Dosen' : 'Tambah Data Dosen Baru'}
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Lengkapi informasi pribadi, prodi, riwayat pendidikan, serta tautan profil publikasi ilmiah (SINTA, Scopus, Google Scholar, ORCID).
            </p>

            <form onSubmit={handleSaveLecturer} className="space-y-6">
              {/* BAGIAN 1: PROFIL & IDENTITAS DOKTOR/DOSEN */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#9B2C2C] dark:text-red-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  1. Profil Utama & Identitas Pegawai
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Nama Lengkap & Gelar Akademik <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={lecturerForm.name || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, name: e.target.value })}
                      required
                      placeholder="Dr. Eng. Ahmad, S.T., M.T."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">NIDN / NUPTK <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={lecturerForm.nidn || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, nidn: e.target.value })}
                      required
                      placeholder="0912038801"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Program Studi</label>
                    <select
                      value={lecturerForm.studyProgram || 'Teknik Informatika'}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, studyProgram: e.target.value })}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                    >
                      <option value="Teknik Informatika">Teknik Informatika</option>
                      <option value="Teknik Elektro">Teknik Elektro</option>
                      <option value="Teknik Mesin">Teknik Mesin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">Jabatan Fungsional</label>
                    <input
                      type="text"
                      value={lecturerForm.title || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, title: e.target.value })}
                      placeholder="Lektor Kepala / Dosen Tetap"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold mb-1 text-amber-700 dark:text-amber-400">Jabatan Struktural / Akademik</label>
                    <input
                      type="text"
                      value={lecturerForm.jabatan || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, jabatan: e.target.value })}
                      placeholder="misal: Ketua Program Studi TIF / Kepala Lab AI"
                      className="w-full p-2.5 text-xs rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50/40 dark:bg-slate-900 focus:ring-2 focus:ring-amber-500 outline-none font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">Email Resmi Dosen</label>
                    <input
                      type="email"
                      value={lecturerForm.email || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, email: e.target.value })}
                      placeholder="dosen@patria-artha.ac.id"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Laboratorium Utama</label>
                    <input
                      type="text"
                      value={lecturerForm.lab || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, lab: e.target.value })}
                      placeholder="Lab Kecerdasan Buatan & Big Data"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold">Foto Dosen URL</label>
                      <button
                        type="button"
                        onClick={() => setMediaPickerTarget(() => (url: string) => setLecturerForm(f => ({ ...f, photo: url })))}
                        className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Pilih dari Media</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={lecturerForm.photo || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, photo: e.target.value })}
                      placeholder="https://..."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* BAGIAN 2: PENDIDIKAN & PENGAJARAN */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#9B2C2C] dark:text-red-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  2. Riwayat Pendidikan & Pengajaran
                </h4>

                <div>
                  <label className="block text-xs font-bold mb-1">Riwayat Pendidikan (pisahkan dengan koma)</label>
                  <input
                    type="text"
                    value={Array.isArray(lecturerForm.education) ? lecturerForm.education.join(', ') : (lecturerForm.education || '')}
                    onChange={(e) => setLecturerForm({ ...lecturerForm, education: e.target.value as any })}
                    placeholder="S1 Teknik Informatika UNM, S2 Komputer ITB, S3 Doktor Unhas"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Mata Kuliah Yang Diampu (pisahkan dengan koma)</label>
                    <input
                      type="text"
                      value={Array.isArray(lecturerForm.coursesTaught) ? lecturerForm.coursesTaught.join(', ') : (lecturerForm.coursesTaught || '')}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, coursesTaught: e.target.value as any })}
                      placeholder="Algoritma, Pemrograman Web, AI"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">Bidang Keahlian / Kepakaran (pisahkan dengan koma)</label>
                    <input
                      type="text"
                      value={Array.isArray(lecturerForm.expertise) ? lecturerForm.expertise.join(', ') : (lecturerForm.expertise || '')}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, expertise: e.target.value as any })}
                      placeholder="Machine Learning, IoT, Robotics"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Jumlah Total Publikasi Ilmiah</label>
                  <input
                    type="number"
                    value={lecturerForm.publicationsCount ?? 0}
                    onChange={(e) => setLecturerForm({ ...lecturerForm, publicationsCount: Number(e.target.value) })}
                    placeholder="12"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                  />
                </div>
              </div>

              {/* BAGIAN 3: TAUTAN PROFIL RISET & PUBLIKASI ILMIAH (SINTA, SCOPUS, SCHOLAR, ORCID) */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    3. Integrasi Profil Riset & Link Publikasi Ilmiah
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-[10px] font-extrabold">
                    Akreditasi FTI
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Link / ID SINTA Kemdikbud</span>
                    </label>
                    <input
                      type="text"
                      value={lecturerForm.sinta || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, sinta: e.target.value })}
                      placeholder="6012891 atau https://sinta.kemdikbud.go.id/authors/profile/6012891"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Scopus Author ID / Link</span>
                    </label>
                    <input
                      type="text"
                      value={lecturerForm.scopus || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, scopus: e.target.value })}
                      placeholder="57200192801 atau https://www.scopus.com/..."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>Link Google Scholar</span>
                    </label>
                    <input
                      type="text"
                      value={lecturerForm.googleScholar || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, googleScholar: e.target.value })}
                      placeholder="https://scholar.google.com/citations?user=..."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <span>ORCID iD</span>
                    </label>
                    <input
                      type="text"
                      value={lecturerForm.orcid || ''}
                      onChange={(e) => setLecturerForm({ ...lecturerForm, orcid: e.target.value })}
                      placeholder="0000-0002-1825-0097"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>Link ResearchGate (Opsional)</span>
                  </label>
                  <input
                    type="text"
                    value={lecturerForm.researchGate || ''}
                    onChange={(e) => setLecturerForm({ ...lecturerForm, researchGate: e.target.value })}
                    placeholder="https://www.researchgate.net/profile/..."
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLecturerModalOpen(false)}
                  className="w-1/3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simpan Perubahan Data Dosen</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- PRODI MODAL FORM --- */}
      {isProdiModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative">
            <button onClick={() => setIsProdiModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-4">
              {editingProdi ? 'Edit Program Studi' : 'Tambah Prodi Baru'}
            </h3>

            <form onSubmit={handleSaveProdi} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Kode Prodi</label>
                  <input
                    type="text"
                    value={prodiForm.code || ''}
                    onChange={(e) => setProdiForm({ ...prodiForm, code: e.target.value })}
                    required
                    placeholder="TIF / TE / TM"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Jenjang</label>
                  <select
                    value={prodiForm.degree || 'S1'}
                    onChange={(e) => setProdiForm({ ...prodiForm, degree: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="D3">D3</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Nama Program Studi</label>
                <input
                  type="text"
                  value={prodiForm.name || ''}
                  onChange={(e) => setProdiForm({ ...prodiForm, name: e.target.value })}
                  required
                  placeholder="Teknik Informatika"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Nama Ketua Program Studi (Kaprodi)</label>
                <input
                  type="text"
                  value={prodiForm.headOfProgram || prodiForm.headOfProdi || ''}
                  onChange={(e) => setProdiForm({ ...prodiForm, headOfProgram: e.target.value, headOfProdi: e.target.value })}
                  placeholder="Dr. Ir. Budi Santoso, M.T."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">NIDN Kaprodi</label>
                <input
                  type="text"
                  value={prodiForm.headOfProdiNidn || ''}
                  onChange={(e) => setProdiForm({ ...prodiForm, headOfProdiNidn: e.target.value })}
                  placeholder="0912058801"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Foto Kaprodi</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={prodiForm.headOfProdiPhoto || ''}
                    onChange={(e) => setProdiForm({ ...prodiForm, headOfProdiPhoto: e.target.value })}
                    placeholder="Tempel URL atau pilih dari Media Manager..."
                    className="flex-1 p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                  <button
                    type="button"
                    onClick={() => setMediaPickerTarget(() => (url: string) => setProdiForm(f => ({ ...f, headOfProdiPhoto: url })))}
                    className="px-3 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700 transition-colors shrink-0"
                  >
                    Media Manager
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors">
                Simpan Program Studi
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- COURSE MODAL FORM --- */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative">
            <button onClick={() => setIsCourseModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-4">
              {editingCourse ? 'Edit Mata Kuliah & RPS' : 'Tambah Mata Kuliah Baru'}
            </h3>

            <form onSubmit={handleSaveCourse} className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Kode MK</label>
                  <input
                    type="text"
                    value={courseForm.code || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, code: e.target.value })}
                    required
                    placeholder="TIF101"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold mb-1">Nama Mata Kuliah</label>
                  <input
                    type="text"
                    value={courseForm.name || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                    required
                    placeholder="Pemrograman Cloud AI"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">SKS</label>
                  <input
                    type="number"
                    value={courseForm.sks || 3}
                    onChange={(e) => setCourseForm({ ...courseForm, sks: Number(e.target.value) })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Semester</label>
                  <input
                    type="number"
                    value={courseForm.semester || 1}
                    onChange={(e) => setCourseForm({ ...courseForm, semester: Number(e.target.value) })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Kategori</label>
                  <select
                    value={courseForm.category || 'Wajib Prodi'}
                    onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Wajib Prodi">Wajib Prodi</option>
                    <option value="Wajib Universitas">Wajib Universitas</option>
                    <option value="Peminatan">Peminatan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Program Studi</label>
                  <select
                    value={courseForm.studyProgram || 'Teknik Informatika'}
                    onChange={(e) => setCourseForm({ ...courseForm, studyProgram: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-bold"
                  >
                    <option value="Teknik Informatika">Teknik Informatika (S1)</option>
                    <option value="Teknik Elektro">Teknik Elektro (S1)</option>
                    <option value="Teknik Mesin">Teknik Mesin (S1)</option>
                    <option value="Semua Prodi">Semua Prodi / Umum</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 text-[#9B2C2C] dark:text-red-400">Tautan Download Dokumen RPS (PDF)</label>
                  <input
                    type="text"
                    value={courseForm.rpsUrl || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, rpsUrl: e.target.value })}
                    placeholder="https://fti.patria-artha.ac.id/rps/sample.pdf"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors">
                Simpan Mata Kuliah & RPS
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- MENU MODAL FORM --- */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => { setIsMenuModalOpen(false); setEditingMenu(null); }} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-1">
              {editingMenu ? 'Edit Item Menu Navigasi' : 'Tambah Item Menu Navigasi Baru'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Kelola teks menu utama, deskripsi baris ke-2 (opsional), icon visual, dan tautan section.
            </p>

            <form onSubmit={handleSaveMenuItem} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">
                  Baris Ke-1 / Label Menu Utama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={menuForm.line1 || menuForm.label || ''}
                  onChange={(e) => setMenuForm({ ...menuForm, line1: e.target.value, label: e.target.value })}
                  required
                  placeholder="Contoh: Program Studi / Fasilitas / PMB"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Baris Ke-2 / Subtitle Deskripsi <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={menuForm.line2 || ''}
                  onChange={(e) => setMenuForm({ ...menuForm, line2: e.target.value })}
                  placeholder="Contoh: Pilihan prodi S1 Unggul berakreditasi"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Pilihan Icon (Nama Icon Lucide / URL Gambar)
                </label>
                <div className="flex gap-2 mb-2">
                  <select
                    value={menuForm.icon || ''}
                    onChange={(e) => setMenuForm({ ...menuForm, icon: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                  >
                    <option value="">-- Tanpa Icon / Kustom --</option>
                    <option value="Home">Home (Beranda)</option>
                    <option value="Building2">Building2 (Gedung / Fakultas)</option>
                    <option value="GraduationCap">GraduationCap (Akademik / Pendidikan)</option>
                    <option value="BookOpen">BookOpen (Kurikulum / Modul)</option>
                    <option value="Newspaper">Newspaper (Berita & Artikel)</option>
                    <option value="FlaskConical">FlaskConical (Riset & Lab)</option>
                    <option value="PhoneCall">PhoneCall (Kontak & Layanan)</option>
                    <option value="Sparkles">Sparkles (PMB & Keunggulan)</option>
                    <option value="Users">Users (Dosen & Staf)</option>
                    <option value="Cpu">Cpu (AI & Teknologi)</option>
                    <option value="ShieldCheck">ShieldCheck (Akreditasi & Mutu)</option>
                    <option value="Layers">Layers (Fasilitas Utama)</option>
                    <option value="Globe">Globe (Internasional & Web)</option>
                    <option value="FileText">FileText (Dokumen & RPS)</option>
                    <option value="Award">Award (Prestasi & Beasiswa)</option>
                    <option value="Briefcase">Briefcase (Karir & Alumni)</option>
                    <option value="Calendar">Calendar (Agenda Akademik)</option>
                    <option value="Folder">Folder (Arsip & File)</option>
                    <option value="Info">Info (Tentang FTI)</option>
                    <option value="Star">Star (Highlight / Unggulan)</option>
                    <option value="Zap">Zap (Akses Cepat)</option>
                  </select>
                </div>
                <input
                  type="text"
                  value={menuForm.icon || ''}
                  onChange={(e) => setMenuForm({ ...menuForm, icon: e.target.value })}
                  placeholder="Atau ketik nama icon Lucide / URL Gambar..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono text-[11px]"
                />
              </div>

              {/* Custom Page Quick Selector */}
              <div className="p-3.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#9B2C2C] dark:text-red-400" />
                    Pilih dari Halaman Custom (List Halaman Custom)
                  </label>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                    {customPages.length} Halaman
                  </span>
                </div>

                <select
                  value={customPages.some(p => p.slug === menuForm.url || p.id === menuForm.url) ? (customPages.find(p => p.slug === menuForm.url || p.id === menuForm.url)?.slug || '') : ''}
                  onChange={(e) => {
                    const selectedSlug = e.target.value;
                    if (!selectedSlug) return;
                    const selectedPage = customPages.find(p => p.slug === selectedSlug || p.id === selectedSlug);
                    if (selectedPage) {
                      setMenuForm(prev => ({
                        ...prev,
                        url: selectedPage.slug,
                        line1: prev.line1 || prev.label ? prev.line1 || prev.label : selectedPage.title,
                        label: prev.label ? prev.label : selectedPage.title,
                        line2: prev.line2 ? prev.line2 : `Halaman Custom: ${selectedPage.title}`,
                        icon: prev.icon ? prev.icon : 'FileText'
                      }));
                    }
                  }}
                  className="w-full p-2.5 text-xs rounded-xl border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                >
                  <option value="">-- Hubungkan Ke Halaman Custom --</option>
                  {customPages.map((page) => (
                    <option key={page.id} value={page.slug}>
                      📄 {page.title} ({page.published ? 'Live' : 'Draf'}) — /halaman/{page.slug}
                    </option>
                  ))}
                </select>

                {customPages.length === 0 ? (
                  <p className="text-[11px] text-amber-700 dark:text-amber-300 italic">
                    Belum ada halaman custom. Anda dapat membuatnya di tab "Halaman Custom".
                  </p>
                ) : (
                  <p className="text-[10px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    💡 Memilih halaman custom akan otomatis mengisi URL (<code className="font-mono bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">slug</code>), label, dan icon jika belum diisi.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Tautan ID Section / URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={menuForm.url || ''}
                  onChange={(e) => setMenuForm({ ...menuForm, url: e.target.value })}
                  required
                  placeholder="Contoh: prodi, beranda, fasilitas, atau https://..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
                {customPages.some(p => p.slug === menuForm.url || p.id === menuForm.url) && (
                  <div className="mt-1.5 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5 truncate pr-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Terhubung ke Halaman Custom: "{customPages.find(p => p.slug === menuForm.url || p.id === menuForm.url)?.title}"
                    </span>
                    <span className="font-mono text-[10px] bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded shrink-0">
                      /halaman/{menuForm.url}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Badge Teks <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={menuForm.badge || ''}
                  onChange={(e) => setMenuForm({ ...menuForm, badge: e.target.value })}
                  placeholder="Contoh: Baru / Hot / PMB"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors shadow-md">
                  {editingMenu ? 'Simpan Perubahan Menu' : 'Tambah Menu Navigasi'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- SUB-MENU MODAL FORM --- */}
      {isSubMenuModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => { setIsSubMenuModalOpen(false); setEditingSubMenuInfo(null); }} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-1">
              {editingSubMenuInfo && editingSubMenuInfo.childIndex !== null ? 'Edit Item Sub-Menu' : 'Tambah Item Sub-Menu Baru'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Lengkapi label baris ke-1, deskripsi baris ke-2 (opsional), icon, dan tautan untuk dropdown menu.
            </p>

            <form onSubmit={handleSaveSubMenuItem} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">
                  Baris Ke-1 / Label Sub-Menu <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subMenuForm.line1 || subMenuForm.label || ''}
                  onChange={(e) => setSubMenuForm({ ...subMenuForm, line1: e.target.value, label: e.target.value })}
                  required
                  placeholder="Contoh: S1 Teknik Informatika"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Baris Ke-2 / Subtitle Deskripsi <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={subMenuForm.line2 || ''}
                  onChange={(e) => setSubMenuForm({ ...subMenuForm, line2: e.target.value })}
                  placeholder="Contoh: Fokus AI, Cyber Security, & Software Engineering"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Pilihan Icon (Nama Icon Lucide / URL Gambar)
                </label>
                <div className="flex gap-2 mb-2">
                  <select
                    value={subMenuForm.icon || ''}
                    onChange={(e) => setSubMenuForm({ ...subMenuForm, icon: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                  >
                    <option value="">-- Tanpa Icon / Kustom --</option>
                    <option value="Cpu">Cpu (AI & Teknologi)</option>
                    <option value="GraduationCap">GraduationCap (Program Studi / Gelar)</option>
                    <option value="BookOpen">BookOpen (Kurikulum & RPS)</option>
                    <option value="FlaskConical">FlaskConical (Laboratorium / Riset)</option>
                    <option value="ShieldCheck">ShieldCheck (Akreditasi Unggul)</option>
                    <option value="Sparkles">Sparkles (Beasiswa & Unggulan)</option>
                    <option value="Users">Users (Dosen & Staf)</option>
                    <option value="Building2">Building2 (Fasilitas Kampus)</option>
                    <option value="Newspaper">Newspaper (Pengumuman & Berita)</option>
                    <option value="PhoneCall">PhoneCall (Kontak SPMB)</option>
                    <option value="Award">Award (Prestasi & Juara)</option>
                    <option value="FileText">FileText (Dokumen & Panduan)</option>
                    <option value="Globe">Globe (Portal Kemahasiswaan)</option>
                  </select>
                </div>
                <input
                  type="text"
                  value={subMenuForm.icon || ''}
                  onChange={(e) => setSubMenuForm({ ...subMenuForm, icon: e.target.value })}
                  placeholder="Atau ketik nama icon Lucide / URL Gambar..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono text-[11px]"
                />
              </div>

              {/* Custom Page Quick Selector */}
              <div className="p-3.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#9B2C2C] dark:text-red-400" />
                    Pilih dari Halaman Custom (List Halaman Custom)
                  </label>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                    {customPages.length} Halaman
                  </span>
                </div>

                <select
                  value={customPages.some(p => p.slug === subMenuForm.url || p.id === subMenuForm.url) ? (customPages.find(p => p.slug === subMenuForm.url || p.id === subMenuForm.url)?.slug || '') : ''}
                  onChange={(e) => {
                    const selectedSlug = e.target.value;
                    if (!selectedSlug) return;
                    const selectedPage = customPages.find(p => p.slug === selectedSlug || p.id === selectedSlug);
                    if (selectedPage) {
                      setSubMenuForm(prev => ({
                        ...prev,
                        url: selectedPage.slug,
                        line1: prev.line1 || prev.label ? prev.line1 || prev.label : selectedPage.title,
                        label: prev.label ? prev.label : selectedPage.title,
                        line2: prev.line2 ? prev.line2 : `Halaman Custom: ${selectedPage.title}`,
                        icon: prev.icon ? prev.icon : 'FileText'
                      }));
                    }
                  }}
                  className="w-full p-2.5 text-xs rounded-xl border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                >
                  <option value="">-- Hubungkan Ke Halaman Custom --</option>
                  {customPages.map((page) => (
                    <option key={page.id} value={page.slug}>
                      📄 {page.title} ({page.published ? 'Live' : 'Draf'}) — /halaman/{page.slug}
                    </option>
                  ))}
                </select>

                {customPages.length === 0 ? (
                  <p className="text-[11px] text-amber-700 dark:text-amber-300 italic">
                    Belum ada halaman custom. Anda dapat membuatnya di tab "Halaman Custom".
                  </p>
                ) : (
                  <p className="text-[10px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    💡 Memilih halaman custom akan otomatis mengisi URL (<code className="font-mono bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">slug</code>), label, dan icon jika belum diisi.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Tautan ID Section / URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subMenuForm.url || ''}
                  onChange={(e) => setSubMenuForm({ ...subMenuForm, url: e.target.value })}
                  required
                  placeholder="Contoh: prodi, kurikulum, lab-ai, atau https://..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
                {customPages.some(p => p.slug === subMenuForm.url || p.id === subMenuForm.url) && (
                  <div className="mt-1.5 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5 truncate pr-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Terhubung ke Halaman Custom: "{customPages.find(p => p.slug === subMenuForm.url || p.id === subMenuForm.url)?.title}"
                    </span>
                    <span className="font-mono text-[10px] bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded shrink-0">
                      /halaman/{subMenuForm.url}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">
                  Badge Teks <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={subMenuForm.badge || ''}
                  onChange={(e) => setSubMenuForm({ ...subMenuForm, badge: e.target.value })}
                  placeholder="Contoh: Favorit / Akreditasi A"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors shadow-md">
                  {editingSubMenuInfo && editingSubMenuInfo.childIndex !== null ? 'Simpan Perubahan Sub-Menu' : 'Tambah Sub-Menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MEDIA PICKER MODAL OVERLAY --- */}
      {mediaPickerTarget && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">

          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <MediaManager
              mediaFiles={media}
              onUpdateMediaFiles={handleUpdateMedia}
              isModalMode={true}
              onCloseModal={() => setMediaPickerTarget(null)}
              onSelectImage={(url) => {
                mediaPickerTarget(url);
                setMediaPickerTarget(null);
                showToast('Gambar dipilih dari Media Manager!');
              }}
            />
          </div>
        </div>
      )}

      {/* --- CONFIRMATION DIALOG MODAL FOR DELETION --- */}
      {deleteConfirmDialog.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative space-y-5 animate-scaleUp">
            <button
              onClick={() => setDeleteConfirmDialog(prev => ({ ...prev, isOpen: false }))}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
              title="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 pt-1">
              <div className="p-3.5 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 leading-tight">
                  {deleteConfirmDialog.title || 'Konfirmasi Hapus Data'}
                </h3>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 mt-1">
                  Tindakan Permanen
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {deleteConfirmDialog.message}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmDialog(prev => ({ ...prev, isOpen: false }))}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-extrabold transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={deleteConfirmDialog.onConfirm}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-xs font-black shadow-md transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Trash2 className="w-4 h-4" />
                <span>Ya, Hapus Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- KALENDER AKADEMIK MODAL --- */}
      {isCalendarModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-700">
            <div className="p-5 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-800 z-10">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                {editingCalendarItem ? 'Edit Agenda Kalender' : 'Tambah Agenda Kalender'}
              </h3>
              <button onClick={() => setIsCalendarModalOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveCalendar} className="p-6 overflow-y-auto custom-scrollbar space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">
                  Nama Agenda/Kegiatan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={calendarForm.title || ''}
                  onChange={(e) => setCalendarForm({ ...calendarForm, title: e.target.value })}
                  required
                  placeholder="Contoh: Ujian Tengah Semester (UTS)"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">
                    Tanggal Mulai <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={calendarForm.startDate || ''}
                    onChange={(e) => setCalendarForm({ ...calendarForm, startDate: e.target.value })}
                    required
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Tanggal Selesai (Opsional)</label>
                  <input
                    type="date"
                    value={calendarForm.endDate || ''}
                    onChange={(e) => setCalendarForm({ ...calendarForm, endDate: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Kategori</label>
                  <select
                    value={calendarForm.category || 'Perkuliahan'}
                    onChange={(e) => setCalendarForm({ ...calendarForm, category: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Perkuliahan">Perkuliahan</option>
                    <option value="Ujian">Ujian</option>
                    <option value="PMB">PMB</option>
                    <option value="Wisuda">Wisuda</option>
                    <option value="Libur">Libur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Semester</label>
                  <select
                    value={calendarForm.semester || 'Ganjil 2026/2027'}
                    onChange={(e) => setCalendarForm({ ...calendarForm, semester: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
                    <option value="Genap 2025/2026">Genap 2025/2026</option>
                    <option value="Ganjil 2025/2026">Ganjil 2025/2026</option>
                    <option value="Genap 2024/2025">Genap 2024/2025</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] shadow-md">
                  {editingCalendarItem ? 'Simpan Perubahan' : 'Tambah Agenda'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- TESTIMONIAL MODAL FORM --- */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-xl w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsTestimonialModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-black text-[#9B2C2C] dark:text-red-400 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>{editingTestimonial ? 'Edit Testimoni Alumni' : 'Tambah Testimoni Baru'}</span>
            </h3>

            <form onSubmit={handleSaveTestimonial} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">Nama Lengkap Alumni <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={testimonialForm.name || ''}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  required
                  placeholder="Budi Santoso, S.Kom."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Tahun Kelulusan</label>
                  <input
                    type="number"
                    value={testimonialForm.gradYear || new Date().getFullYear()}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, gradYear: Number(e.target.value) })}
                    placeholder="2024"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Pekerjaan / Role</label>
                  <input
                    type="text"
                    value={testimonialForm.role || ''}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                    placeholder="Senior AI Engineer"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Perusahaan / Instansi</label>
                <input
                  type="text"
                  value={testimonialForm.company || ''}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                  placeholder="GoTo / Tokopedia"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold">Foto Profil URL</label>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget(() => (url: string) => setTestimonialForm(f => ({ ...f, photo: url })))}
                      className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Media</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={testimonialForm.photo || ''}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, photo: e.target.value })}
                    placeholder="https://..."
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold">Logo Perusahaan URL</label>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget(() => (url: string) => setTestimonialForm(f => ({ ...f, companyLogo: url })))}
                      className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Media</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={testimonialForm.companyLogo || ''}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, companyLogo: e.target.value })}
                    placeholder="https://..."
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Pesan & Kutipan Testimoni <span className="text-red-500">*</span></label>
                <textarea
                  value={testimonialForm.quote || ''}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })}
                  rows={4}
                  required
                  placeholder="Tuliskan pengalaman belajar di FTI Patria Artha..."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">URL Profil LinkedIn</label>
                <input
                  type="text"
                  value={testimonialForm.linkedinUrl || ''}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
              </div>

              <button type="submit" className="w-full py-3 bg-[#9B2C2C] text-[#FFF5F5] font-extrabold text-xs rounded-xl hover:bg-[#800020] transition-colors shadow-md">
                Simpan Testimoni
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- USER MODAL FORM --- */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden border-l-6 border-l-[#800020]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-700/80 shrink-0">
              <h3 className="text-lg font-black text-[#800020] dark:text-red-400 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#9B2C2C] dark:text-red-400" />
                <span>{editingUser ? 'Edit Pengguna & Hak Akses' : 'Tambah Pengguna Baru'}</span>
              </h3>
              <button 
                onClick={() => setIsUserModalOpen(false)} 
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                title="Tutup Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleSaveUser} className="flex-1 overflow-y-auto custom-scrollbar pr-1.5 space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">Nama Lengkap & Gelar Pengguna <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={userForm.name || ''}
                  onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  required
                  placeholder="Contoh: Dr. Eng. Ir. Herman, S.T., M.T."
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-bold focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Alamat Email Resmi / Username Login <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={userForm.email || ''}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  required
                  placeholder="Contoh: nama.pengguna@patria-artha.ac.id"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                />
              </div>

              {/* 🔑 PASSWORD SYSTEM INPUT WITH GENERATOR & EYE TOGGLE */}
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-900/80 border border-amber-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-[#9B2C2C] dark:text-red-400" />
                    Kata Sandi / Password System {!editingUser && <span className="text-red-500">*</span>}
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateRandomPassword}
                    className="px-2.5 py-1 rounded-lg bg-[#9B2C2C] text-white text-[10px] font-bold hover:bg-[#800020] transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Generate Password Acak</span>
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showUserPassword ? "text" : "password"}
                    value={userForm.password || ''}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    placeholder={editingUser ? "Kosongkan jika tidak ingin mengubah password..." : "Masukkan kata sandi baru (min. 4 karakter)"}
                    className="w-full p-2.5 pr-10 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 font-mono text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowUserPassword(!showUserPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                    title={showUserPassword ? "Sembunyikan Password" : "Tampilkan Password"}
                  >
                    {showUserPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {editingUser && (
                  <p className="text-[10px] text-amber-800 dark:text-amber-300 italic">
                    💡 Tips: Masukkan kata sandi baru di atas hanya jika Anda ingin memperbarui password akun ini.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Level Akses (Role)</label>
                  <select
                    value={userForm.role || 'Admin'}
                    onChange={(e) => setUserForm({ ...userForm, role: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-bold focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                  >
                    <option value="Superadmin">Superadmin (Akses Penuh Seluruh Sistem)</option>
                    <option value="Admin">Admin (Akses Kelola Konten & Data)</option>
                    <option value="Editor">Editor (Akses Berita & Media)</option>
                    <option value="Dosen">Dosen (Akses Profil & RPS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Status Keaktifan Akun</label>
                  <select
                    value={userForm.status || 'Active'}
                    onChange={(e) => setUserForm({ ...userForm, status: e.target.value as any })}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-semibold focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                  >
                    <option value="Active">● Aktif (Bisa Login)</option>
                    <option value="Inactive">○ Nonaktif (Akses Diblokir)</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold">Foto Profil / Avatar URL</label>
                  <button
                    type="button"
                    onClick={() => setMediaPickerTarget(() => (url: string) => setUserForm(f => ({ ...f, avatarUrl: url, avatar: url })))}
                    className="text-[11px] font-bold text-[#800020] dark:text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Pilih dari Media Manager</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={userForm.avatarUrl || userForm.avatar || ''}
                  onChange={(e) => setUserForm({ ...userForm, avatarUrl: e.target.value, avatar: e.target.value })}
                  placeholder="https://images.unsplash.com/... (opsional)"
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                />
              </div>

              {/* Sticky Action Footer */}
              <div className="flex items-center justify-end gap-2 pt-3 mt-4 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 sticky bottom-0 z-10">
                <button
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs rounded-xl transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>{editingUser ? 'Simpan Perubahan User & Password' : 'Daftarkan Pengguna Baru'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- ERROR HANDLING DIALOG BOX MODAL --- */}
      {errorDialog.isOpen && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border-2 border-rose-500/80 dark:border-rose-600 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative overflow-hidden transform scale-100 transition-all">
            {/* Header Glowing Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-600 via-red-500 to-amber-500" />
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 shrink-0 border border-rose-200 dark:border-rose-800 shadow-xs mt-1">
                <AlertTriangle className="w-7 h-7 animate-pulse text-rose-600 dark:text-rose-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-900">
                    Sistem Error Handling
                  </span>
                  <button
                    type="button"
                    onClick={closeErrorDialog}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 leading-tight mt-1.5">
                  {errorDialog.title || 'Terjadi Kesalahan!'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-2 leading-relaxed">
                  {errorDialog.message}
                </p>

                {errorDialog.details && (
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-rose-800 dark:text-rose-300 break-words max-h-32 overflow-y-auto">
                    <span className="font-bold block text-[10px] uppercase text-slate-500 dark:text-slate-400 mb-1">Pesan Detail Server:</span>
                    {errorDialog.details}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-6 flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={closeErrorDialog}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-rose-500"
              >
                <span>Tutup & Perbaiki</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

