export type SpecializationType = 'AI' | 'RPL' | 'CyberSecurity' | 'IoT' | 'DataScience';

export interface VisiMisi {
  visi: string;
  misi: string[];
  tujuan: string[];
  fokusKeahlian: {
    title: string;
    description: string;
    icon: string;
    code: SpecializationType;
  }[];
}

export interface AccreditationInfo {
  nasional: {
    status: string; // e.g. "Unggul"
    badan: string; // e.g. "LAM INFOKOM"
    skNumber: string;
    validUntil: string;
  };
  internasional: {
    status: string; // e.g. "Provisional Accreditation" / "Full Accreditation"
    badan: string; // e.g. "IABEE"
    year: string;
  }[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  sks: number;
  semester: number;
  category: 'Wajib Prodi' | 'Wajib Universitas' | 'Mata Kuliah Pilihan';
  specialization?: SpecializationType;
  studyProgram?: string;
  description: string;
  prerequisites: string[];
  syllabusTopic: string[];
  rpsUrl?: string;
}

export type UserRole = 'superadmin' | 'admin' | 'editor' | 'Superadmin' | 'Admin' | 'Editor' | 'Dosen';

export interface User {
  id: string;
  name: string;
  username?: string;
  email: string;
  password?: string;
  role: UserRole | string;
  avatar?: string;
  avatarUrl?: string;
  department?: string;
  status?: 'active' | 'suspended' | 'Active' | 'Inactive';
  createdAt?: string;
  lastLogin?: string;
}

export interface StudyProgram {
  id: string;
  code: string;
  name: string;
  degree: 'S1' | 'S2' | 'D3';
  accreditation: string;
  headOfProgram: string;
  headOfProdi?: string;
  headOfProdiNidn?: string;
  headOfProdiPhoto?: string;
  description: string;
  totalSks: number;
  activeStudents: number;
  capacity: number;
  vision: string;
  careerProspects?: string;
  logoUrl?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  isExternal?: boolean;
  isVisible: boolean;
  badge?: string;
  order: number;
  icon?: string;
  line1?: string;
  line2?: string;
  children?: MenuItem[];
}

export interface MediaFile {
  id: string;
  fileName: string;
  originalName: string;
  sizeBytes: number;
  type: string;
  url: string;
  uploadedAt: string;
  dimensions?: { width: number; height: number };
  folderId?: string;
}

export interface MediaFolder {
  id: string;
  name: string;
  parentId?: string | null;
  count?: number;
}

export interface Lecturer {
  id: string;
  name: string;
  nidn: string;
  title: string;
  jabatan?: string;
  photo: string;
  avatar?: string;
  expertise: SpecializationType[] | string[];
  expertiseTags: string[];
  email: string;
  lab: string;
  education: string[];
  googleScholar?: string;
  scopus?: string;
  sinta?: string;
  orcid?: string;
  researchGate?: string;
  coursesTaught: string[];
  publicationsCount: number;
  studyProgram?: string;
}

export interface Laboratory {
  id: string;
  code: string;
  name: string;
  shortDesc: string;
  headOfLab: string;
  headPhoto: string;
  labAssistants: string[];
  image: string;
  location: string;
  capacity: number;
  specifications: string[];
  equipmentList: { name: string; qty: number; status: 'Baik' | 'Maintenance' }[];
  softwareInstalled: string[];
  virtualTour360Url?: string;
}

export interface ResearchGroup {
  id: string;
  name: string;
  code: string;
  leadLecturer: string;
  membersCount: number;
  description: string;
  topics: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  publisher: string;
  type: 'Jurnal Internasional' | 'Jurnal Nasional Sinta 1-2' | 'Konferensi IEEE/ACM' | 'Skripsi/TA';
  pdfUrl?: string;
  doi?: string;
  specialization: SpecializationType;
}

export interface InnovationProduct {
  id: string;
  title: string;
  developer: string; // Students or Lecturers
  category: 'Web App' | 'Mobile App' | 'AI Model' | 'IoT Device' | 'Cyber Tool';
  year: number;
  thumbnail: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  award?: string;
}

export interface StudentOrg {
  name: string;
  abbreviation: string;
  logo: string;
  description: string;
  cabinetName: string;
  cabinetYear: string;
  leaderName: string;
  leaderPhoto: string;
  viceLeaderName: string;
  divisions: {
    name: string;
    description: string;
  }[];
  upcomingEvents: {
    title: string;
    date: string;
    category: 'Hackathon' | 'Workshop' | 'Seminar' | 'Competition';
    location: string;
    registrationUrl?: string;
  }[];
}

export interface StudentAchievement {
  id: string;
  competition: string;
  title: string;
  rank: string; // e.g. "Juara 1", "Gold Medal"
  level: 'Internasional' | 'Nasional' | 'Regional';
  year: number;
  studentNames: string[];
  mentorLecturer: string;
  image: string;
}

export interface AlumniTestimonial {
  id: string;
  name: string;
  gradYear: number;
  role: string; // e.g., "Senior AI Engineer"
  company: string; // e.g., "GoTo / Tokopedia"
  companyLogo: string;
  photo: string;
  quote: string;
  linkedinUrl?: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Part-time';
  specialization: SpecializationType | 'General';
  postedDate: string;
  applyDeadline: string;
  requirements: string[];
  applyLink: string;
}

export interface PMBTrack {
  id: string;
  name: string;
  code: string;
  description: string;
  capacity: number;
  period: string;
  requirements: string[];
  benefits: string[];
  feeEstimate: string;
}

export interface AcademicCalendarItem {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  category: 'Perkuliahan' | 'Ujian' | 'PMB' | 'Wisuda' | 'Libur';
  semester: 'Ganjil 2026/2027' | 'Genap 2025/2026';
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Berita' | 'Pengumuman' | 'Agenda' | 'Prestasi';
  date: string;
  author: string;
  thumbnail: string;
  summary: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'PMB' | 'Kurikulum' | 'Beasiswa' | 'Karir' | 'Fasilitas';
  question: string;
  answer: string;
}

export interface QuickLink {
  name: string;
  desc: string;
  url: string;
  iconName: string;
  badge?: string;
}
