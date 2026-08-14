import { NewsItem, Lecturer, StudyProgram, Course, StudentOrg, MediaFile, MediaFolder, MenuItem, AcademicCalendarItem, AlumniTestimonial, User } from '../types';
import { ensureArray } from '../utils/toArray';

/**
 * API Service for interacting with Prisma SQLite Express Backend
 */

export const api = {
  // 1. News
  async getNews(): Promise<NewsItem[]> {
    try {
      const res = await fetch('/api/news');
      if (!res.ok) throw new Error('Failed to fetch news');
      const data = await res.json();
      if (!Array.isArray(data)) return [];
      return data.map((n: any) => ({
        ...n,
        tags: ensureArray(n.tags)
      }));
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async createNews(item: Partial<NewsItem>): Promise<NewsItem> {
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to create news');
    const created = await res.json();
    return { ...created, tags: ensureArray(created.tags) };
  },

  async updateNews(id: string, item: Partial<NewsItem>): Promise<NewsItem> {
    const res = await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to update news');
    const updated = await res.json();
    return { ...updated, tags: ensureArray(updated.tags) };
  },

  async deleteNews(id: string): Promise<boolean> {
    const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete news');
    return true;
  },

  // 2. Lecturers
  async getLecturers(): Promise<Lecturer[]> {
    try {
      const res = await fetch('/api/lecturers');
      if (!res.ok) throw new Error('Failed to fetch lecturers');
      const data = await res.json();
      if (!Array.isArray(data)) return [];
      return data.map((l: any) => ({
        ...l,
        expertise: ensureArray(l.expertise),
        expertiseTags: ensureArray(l.expertiseTags),
        education: ensureArray(l.education),
        coursesTaught: ensureArray(l.coursesTaught)
      }));
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async createLecturer(item: Partial<Lecturer>): Promise<Lecturer> {
    const res = await fetch('/api/lecturers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to create lecturer');
    const created = await res.json();
    return {
      ...created,
      expertise: ensureArray(created.expertise),
      expertiseTags: ensureArray(created.expertiseTags),
      education: ensureArray(created.education),
      coursesTaught: ensureArray(created.coursesTaught)
    };
  },

  async updateLecturer(id: string, item: Partial<Lecturer>): Promise<Lecturer> {
    const res = await fetch(`/api/lecturers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to update lecturer');
    const updated = await res.json();
    return {
      ...updated,
      expertise: ensureArray(updated.expertise),
      expertiseTags: ensureArray(updated.expertiseTags),
      education: ensureArray(updated.education),
      coursesTaught: ensureArray(updated.coursesTaught)
    };
  },

  async deleteLecturer(id: string): Promise<boolean> {
    const res = await fetch(`/api/lecturers/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete lecturer');
    return true;
  },

  // 3. Study Programs
  async getStudyPrograms(): Promise<StudyProgram[]> {
    try {
      const res = await fetch('/api/study-programs');
      if (!res.ok) throw new Error('Failed to fetch study programs');
      return await res.json();
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async createStudyProgram(item: Partial<StudyProgram>): Promise<StudyProgram> {
    const res = await fetch('/api/study-programs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to create study program');
    return await res.json();
  },

  async updateStudyProgram(id: string, item: Partial<StudyProgram>): Promise<StudyProgram> {
    const res = await fetch(`/api/study-programs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to update study program');
    return await res.json();
  },

  async deleteStudyProgram(id: string): Promise<boolean> {
    const res = await fetch(`/api/study-programs/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete study program');
    return true;
  },

  // 4. Courses
  async getCourses(): Promise<Course[]> {
    try {
      const res = await fetch('/api/courses');
      if (!res.ok) throw new Error('Failed to fetch courses');
      const data = await res.json();
      if (!Array.isArray(data)) return [];
      return data.map((c: any) => ({
        ...c,
        prerequisites: ensureArray(c.prerequisites),
        syllabusTopic: ensureArray(c.syllabusTopic)
      }));
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async createCourse(item: Partial<Course>): Promise<Course> {
    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to create course');
    return await res.json();
  },

  async updateCourse(id: string, item: Partial<Course>): Promise<Course> {
    const res = await fetch(`/api/courses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to update course');
    return await res.json();
  },

  async deleteCourse(id: string): Promise<boolean> {
    const res = await fetch(`/api/courses/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete course');
    return true;
  },

  // 5. Student Organization
  async getStudentOrg(): Promise<StudentOrg> {
    try {
      const res = await fetch('/api/student-org');
      if (!res.ok) throw new Error('Failed to fetch student org');
      return await res.json();
    } catch (err) {
      console.warn('API fetch failed:', err);
      return {} as StudentOrg;
    }
  },

  async updateStudentOrg(item: StudentOrg): Promise<StudentOrg> {
    const res = await fetch('/api/student-org', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to update student org');
    return await res.json();
  },

  // 6. Media Files & Folders
  async getMediaFiles(): Promise<MediaFile[]> {
    try {
      const res = await fetch('/api/media-files');
      if (!res.ok) throw new Error('Failed to fetch media files');
      return await res.json();
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async createMediaFile(file: Partial<MediaFile>): Promise<MediaFile> {
    const res = await fetch('/api/media-files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(file),
    });
    if (!res.ok) throw new Error('Failed to save media file');
    return await res.json();
  },

  async uploadMediaFile(file: File): Promise<MediaFile> {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/media/upload', {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) throw new Error('Failed to upload file');
    return await res.json();
  },

  async updateMediaFile(id: string, file: Partial<MediaFile>): Promise<MediaFile> {
    const res = await fetch(`/api/media-files/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(file),
    });
    if (!res.ok) throw new Error('Failed to update media file');
    return await res.json();
  },

  async deleteMediaFile(id: string): Promise<boolean> {
    const res = await fetch(`/api/media-files/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete media file');
    return true;
  },

  // Media Folders
  async getMediaFolders(): Promise<MediaFolder[]> {
    try {
      const res = await fetch('/api/media-folders');
      if (!res.ok) throw new Error('Failed to fetch media folders');
      return await res.json();
    } catch (err) {
      console.warn('API fetch folders failed:', err);
      return [];
    }
  },

  async createMediaFolder(name: string, parentId?: string | null): Promise<MediaFolder> {
    const res = await fetch('/api/media-folders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, parentId }),
    });
    if (!res.ok) throw new Error('Failed to create media folder');
    return await res.json();
  },

  async updateMediaFolder(id: string, name: string): Promise<MediaFolder> {
    const res = await fetch(`/api/media-folders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw new Error('Failed to update media folder');
    return await res.json();
  },

  async deleteMediaFolder(id: string): Promise<boolean> {
    const res = await fetch(`/api/media-folders/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete media folder');
    return true;
  },

  // 7. Menu Items
  async getMenuItems(): Promise<MenuItem[]> {
    try {
      const res = await fetch('/api/menu-items');
      if (!res.ok) throw new Error('Failed to fetch menu items');
      return await res.json();
    } catch (err) {
      console.warn('API fetch failed:', err);
      return [];
    }
  },

  async updateMenuItems(menuItems: MenuItem[]): Promise<boolean> {
    const res = await fetch('/api/menu-items/bulk', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuItems),
    });
    if (!res.ok) throw new Error('Failed to update menu items');
    return true;
  },

  // 8. Additional Entities
  async getLaboratories() {
    const res = await fetch('/api/laboratories');
    if (!res.ok) throw new Error('Failed to fetch laboratories');
    return await res.json();
  },

  async getResearchGroups() {
    const res = await fetch('/api/research-groups');
    if (!res.ok) throw new Error('Failed to fetch research groups');
    return await res.json();
  },

  async getPublications() {
    const res = await fetch('/api/publications');
    if (!res.ok) throw new Error('Failed to fetch publications');
    return await res.json();
  },

  async getInnovationProducts() {
    const res = await fetch('/api/innovation-products');
    if (!res.ok) throw new Error('Failed to fetch innovation products');
    return await res.json();
  },

  async getStudentAchievements() {
    const res = await fetch('/api/student-achievements');
    if (!res.ok) throw new Error('Failed to fetch student achievements');
    return await res.json();
  },

  async getAlumniTestimonials(): Promise<AlumniTestimonial[]> {
    const res = await fetch('/api/alumni-testimonials');
    if (!res.ok) throw new Error('Failed to fetch alumni testimonials');
    return await res.json();
  },

  async createAlumniTestimonial(data: Partial<AlumniTestimonial>): Promise<AlumniTestimonial> {
    const res = await fetch('/api/alumni-testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to create alumni testimonial');
    return await res.json();
  },

  async updateAlumniTestimonial(id: string, data: Partial<AlumniTestimonial>): Promise<AlumniTestimonial> {
    const res = await fetch(`/api/alumni-testimonials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update alumni testimonial');
    return await res.json();
  },

  async deleteAlumniTestimonial(id: string): Promise<boolean> {
    const res = await fetch(`/api/alumni-testimonials/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete alumni testimonial');
    return true;
  },

  async getJobVacancies() {
    const res = await fetch('/api/job-vacancies');
    if (!res.ok) throw new Error('Failed to fetch job vacancies');
    return await res.json();
  },

  async getPMBTracks() {
    const res = await fetch('/api/pmb-tracks');
    if (!res.ok) throw new Error('Failed to fetch PMB tracks');
    return await res.json();
  },

  async getAcademicCalendar(): Promise<AcademicCalendarItem[]> {
    const res = await fetch('/api/academic-calendar');
    if (!res.ok) throw new Error('Failed to fetch academic calendar');
    return await res.json();
  },

  async createAcademicCalendar(data: Partial<AcademicCalendarItem>): Promise<AcademicCalendarItem> {
    const res = await fetch('/api/academic-calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to create academic calendar item');
    return await res.json();
  },

  async updateAcademicCalendar(id: string, data: Partial<AcademicCalendarItem>): Promise<AcademicCalendarItem> {
    const res = await fetch(`/api/academic-calendar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update academic calendar item');
    return await res.json();
  },

  async deleteAcademicCalendar(id: string): Promise<boolean> {
    const res = await fetch(`/api/academic-calendar/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete academic calendar item');
    return true;
  },

  async getFAQs() {
    const res = await fetch('/api/faqs');
    if (!res.ok) throw new Error('Failed to fetch FAQs');
    return await res.json();
  },

  async getQuickLinks() {
    const res = await fetch('/api/quick-links');
    if (!res.ok) throw new Error('Failed to fetch quick links');
    return await res.json();
  },

  async getSiteData() {
    const res = await fetch('/api/site-data');
    if (!res.ok) throw new Error('Failed to fetch site data');
    return await res.json();
  },

  async saveSiteData(key: string, value: any) {
    const res = await fetch('/api/site-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    });
    if (!res.ok) throw new Error('Failed to save site data');
    return await res.json();
  },

  // Users API (Manajemen User & Akses Admin / Penulis)
  async getUsers(): Promise<User[]> {
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error('Gagal mengambil daftar pengguna');
    return await res.json();
  },

  async createUser(data: Partial<User>): Promise<User> {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData.error || 'Gagal membuat pengguna baru';
      if (msg.includes('Unique constraint') || msg.includes('User_email_key')) {
        throw new Error(`Email '${data.email}' sudah terdaftar di database! Harap gunakan email yang berbeda.`);
      }
      throw new Error(msg);
    }
    return await res.json();
  },

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const res = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData.error || 'Gagal memperbarui data pengguna';
      if (msg.includes('Unique constraint') || msg.includes('User_email_key')) {
        throw new Error(`Email '${data.email}' sudah digunakan oleh pengguna lain!`);
      }
      throw new Error(msg);
    }
    return await res.json();
  },

  async deleteUser(id: string): Promise<boolean> {
    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete user');
    return true;
  },

  // Custom Pages API
  async getCustomPages() {
    const res = await fetch('/api/custom-pages');
    if (!res.ok) throw new Error('Failed to fetch custom pages');
    return await res.json();
  },

  async getCustomPageBySlug(slugOrId: string) {
    const res = await fetch(`/api/custom-pages/${slugOrId}`);
    if (!res.ok) throw new Error('Failed to fetch custom page');
    return await res.json();
  },

  async createCustomPage(data: any) {
    const res = await fetch('/api/custom-pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to create custom page');
    return await res.json();
  },

  async updateCustomPage(id: string, data: any) {
    const res = await fetch(`/api/custom-pages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update custom page');
    return await res.json();
  },

  async deleteCustomPage(id: string) {
    const res = await fetch(`/api/custom-pages/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete custom page');
    return await res.json();
  },

  // Navigation Menu API
  async getMenuItems() {
    const res = await fetch('/api/menu-items');
    if (!res.ok) throw new Error('Failed to fetch menu items');
    return await res.json();
  },

  async saveMenuItems(menuItems: any[]) {
    const res = await fetch('/api/menu-items/bulk', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuItems)
    });
    if (!res.ok) throw new Error('Failed to save menu items');
    return await res.json();
  },

  // 9. System Health Check
  async checkHealth() {
    try {
      const res = await fetch('/api/health');
      return await res.json();
    } catch (err) {
      return { status: 'offline', error: String(err) };
    }
  }
};
