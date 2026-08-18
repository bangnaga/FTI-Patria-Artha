import {
  VisiMisi,
  AccreditationInfo,
  Course,
  Lecturer,
  Laboratory,
  ResearchGroup,
  Publication,
  InnovationProduct,
  StudentOrg,
  StudentAchievement,
  AlumniTestimonial,
  JobVacancy,
  PMBTrack,
  AcademicCalendarItem,
  NewsItem,
  FAQItem,
  QuickLink,
  StudyProgram,
  MenuItem,
  MediaFile
} from '../types';

export const PRODI_STATS = {
  accreditation: 'Unggul (LAM INFOKOM)',
  internationalAccreditation: 'IABEE Accredited',
  activeStudents: 1850,
  lecturersCount: 42,
  doctorateLecturers: 22,
  labsCount: 8,
  employmentRate: '97.2%',
  avgStartingSalary: 'Rp 8.5M - 16M/bln',
  partnerCompanies: 75,
};

export const VISI_MISI_DATA: VisiMisi = {
  visi: 'Menjadi Fakultas Teknik dan Informatika Universitas Patria Artha yang terkemuka, unggul, dan berdaya saing global pada tahun 2030 dalam bidang Rekayasa Teknologi, Artificial Intelligence, dan Sistem Informasi Terintegrasi berjiwa technopreneurship.',
  misi: [
    'Menyelenggarakan pendidikan tinggi Teknik & Informatika berstandar internasional dengan kurikulum adaptif berbasis Outcome-Based Education (OBE).',
    'Melaksanakan penelitian unggulan di bidang Artificial Intelligence, Cyber Security, Cloud Computing, Software Engineering, dan IoT yang berkontribusi nyata bagi kemajuan industri & masyarakat.',
    'Menyelenggarakan pengabdian masyarakat berbasis produk teknologi tepat guna dan solusi digital terintegrasi di Universitas Patria Artha.',
    'Membangun kemitraan strategis dengan industri teknologi nasional maupun multinasional untuk memperkuat kesiapan kerja alumni Fakultas Teknik dan Informatika Universitas Patria Artha.'
  ],
  tujuan: [
    'Lulusan FTI Universitas Patria Artha yang menguasai konsep dasar komputerisasi, rekayasa sistem terdistribusi, serta AI terkini.',
    'Lulusan yang mampu beradaptasi cepat dengan stack teknologi industri modern.',
    'Lulusan yang menjunjung tinggi etika profesi, keamanan informasi, serta memiliki jiwa kepemimpinan.',
    'Terciptanya inovasi hak kekayaan intelektual (HKI) dan startup berbasis riset di Fakultas Teknik dan Informatika Universitas Patria Artha.'
  ],
  fokusKeahlian: [
    {
      title: 'Artificial Intelligence & Data Science',
      description: 'Fokus pada Machine Learning, Deep Learning, Computer Vision, NLP, Big Data Analytics, dan Generative AI.',
      icon: 'Brain',
      code: 'AI'
    },
    {
      title: 'Software Engineering & Cloud Computing',
      description: 'Fokus pada Arsitektur Microservices, Full-Stack Web/Mobile, DevOps, Clean Code, dan System Architecture.',
      icon: 'Code',
      code: 'RPL'
    },
    {
      title: 'Cyber Security & Network Infrastructure',
      description: 'Fokus pada Ethical Hacking, Penetration Testing, Cryptography, Cloud Security, dan Network Engineering.',
      icon: 'ShieldCheck',
      code: 'CyberSecurity'
    },
    {
      title: 'Internet of Things & Embedded Systems',
      description: 'Fokus pada Smart City, Autonomous Systems, Sensor Networks, Microcontrollers, dan Robotics.',
      icon: 'Cpu',
      code: 'IoT'
    }
  ]
};

export const ACCREDITATION_DATA: AccreditationInfo = {
  nasional: {
    status: 'Unggul',
    badan: 'LAM INFOKOM',
    skNumber: '084/SK/LAM-INFOKOM/Akred/S1/XII/2024',
    validUntil: '2029-12-31'
  },
  internasional: [
    {
      status: 'Full Accreditation',
      badan: 'IABEE (Indonesian Accreditation Board for Engineering Education)',
      year: '2024'
    },
    {
      status: 'Provisional Member',
      badan: 'ASIIN e.V. Germany',
      year: '2025'
    }
  ]
};

export const COURSES_DATA: Course[] = [
  // ================= TEKNIK INFORMATIKA (51 Mata Kuliah) =================
  // Semester 1
  { id: 'tif101-2', code: 'TIF101-2', name: 'Pemrograman I', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrograman I', prerequisites: [], syllabusTopic: [] },
  { id: 'tif102-3', code: 'TIF102-3', name: 'Pengantar Teknologi Informasi', sks: 3, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pengantar Teknologi Informasi', prerequisites: [], syllabusTopic: [] },
  { id: 'tif103-2', code: 'TIF103-2', name: 'Kalkulus I', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kalkulus I', prerequisites: [], syllabusTopic: [] },
  { id: 'tif104-3', code: 'TIF104-3', name: 'Fisika Dasar', sks: 3, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Fisika Dasar', prerequisites: [], syllabusTopic: [] },
  { id: 'tif105-2', code: 'TIF105-2', name: 'Aplikasi Komputer Dasardasar', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Aplikasi Komputer Dasardasar', prerequisites: [], syllabusTopic: [] },
  { id: 'tif106-2', code: 'TIF106-2', name: 'Pendidikan Agama', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pendidikan Agama', prerequisites: [], syllabusTopic: [] },
  { id: 'tif107-2', code: 'TIF107-2', name: 'Bahasa Indonesia', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Bahasa Indonesia', prerequisites: [], syllabusTopic: [] },
  { id: 'tif108-2', code: 'TIF108-2', name: 'Pendidikan Pancasila', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pendidikan Pancasila', prerequisites: [], syllabusTopic: [] },

  // Semester 2
  { id: 'tif201-3', code: 'TIF201-3', name: 'Pemrograman II', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrograman II', prerequisites: [], syllabusTopic: [] },
  { id: 'tif202-3', code: 'TIF202-3', name: 'Struktur Data', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Struktur Data', prerequisites: [], syllabusTopic: [] },
  { id: 'tif203-2', code: 'TIF203-2', name: 'Sistem Digital', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Sistem Digital', prerequisites: [], syllabusTopic: [] },
  { id: 'tif204-2', code: 'TIF204-2', name: 'Kalkulus II', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kalkulus II', prerequisites: [], syllabusTopic: [] },
  { id: 'tif205-2', code: 'TIF205-2', name: 'Logika Matematika', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Logika Matematika', prerequisites: [], syllabusTopic: [] },
  { id: 'tif206-2', code: 'TIF206-2', name: 'Organisasi & Arsitektur Komputer', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Organisasi & Arsitektur Komputer', prerequisites: [], syllabusTopic: [] },
  { id: 'tif207-2', code: 'TIF207-2', name: 'Bahasa Inggris I', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Bahasa Inggris I', prerequisites: [], syllabusTopic: [] },
  { id: 'tif208-2', code: 'TIF208-2', name: 'Pendidikan Kewarganegaraan', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pendidikan Kewarganegaraan', prerequisites: [], syllabusTopic: [] },

  // Semester 3
  { id: 'tif301-3', code: 'TIF301-3', name: 'Pemrograman Berorientasi Objek', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrograman Berorientasi Objek', prerequisites: [], syllabusTopic: [] },
  { id: 'tif302-3', code: 'TIF302-3', name: 'Basis Data', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Basis Data', prerequisites: [], syllabusTopic: [] },
  { id: 'tif303-3', code: 'TIF303-3', name: 'Jaringan Komputer', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Jaringan Komputer', prerequisites: [], syllabusTopic: [] },
  { id: 'tif304-2', code: 'TIF304-2', name: 'Aljabar Linear & Matriks', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Aljabar Linear & Matriks', prerequisites: [], syllabusTopic: [] },
  { id: 'tif305-2', code: 'TIF305-2', name: 'Sistem Operasi', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Sistem Operasi', prerequisites: [], syllabusTopic: [] },
  { id: 'tif306-2', code: 'TIF306-2', name: 'Analisis & Perancangan Sistem', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Analisis & Perancangan Sistem', prerequisites: [], syllabusTopic: [] },
  { id: 'tif307-2', code: 'TIF307-2', name: 'Bahasa Inggris II', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Bahasa Inggris II', prerequisites: [], syllabusTopic: [] },

  // Semester 4
  { id: 'tif401-3', code: 'TIF401-3', name: 'Pemrograman Web', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrograman Web', prerequisites: [], syllabusTopic: [] },
  { id: 'tif402-3', code: 'TIF402-3', name: 'Rekayasa Perangkat Lunak', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Rekayasa Perangkat Lunak', prerequisites: [], syllabusTopic: [] },
  { id: 'tif403-3', code: 'TIF403-3', name: 'Kecerdasan Buatan', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kecerdasan Buatan', prerequisites: [], syllabusTopic: [] },
  { id: 'tif404-2', code: 'TIF404-2', name: 'Grafika Komputer', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Grafika Komputer', prerequisites: [], syllabusTopic: [] },
  { id: 'tif405-2', code: 'TIF405-2', name: 'Sistem Basis Data Lanjut', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Sistem Basis Data Lanjut', prerequisites: [], syllabusTopic: [] },
  { id: 'tif406-2', code: 'TIF406-2', name: 'Interaksi Manusia & Komputer', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Interaksi Manusia & Komputer', prerequisites: [], syllabusTopic: [] },
  { id: 'tif407-2', code: 'TIF407-2', name: 'Kewirausahaan', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kewirausahaan', prerequisites: [], syllabusTopic: [] },

  // Semester 5
  { id: 'tif501-3', code: 'TIF501-3', name: 'Pemrograman Mobile', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrograman Mobile', prerequisites: [], syllabusTopic: [] },
  { id: 'tif502-3', code: 'TIF502-3', name: 'Keamanan Komputer & Jaringan', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Keamanan Komputer & Jaringan', prerequisites: [], syllabusTopic: [] },
  { id: 'tif503-3', code: 'TIF503-3', name: 'Pengolahan Citra Digital', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pengolahan Citra Digital', prerequisites: [], syllabusTopic: [] },
  { id: 'tif504-2', code: 'TIF504-2', name: 'Etika Profesi & Hukum Cyber', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Etika Profesi & Hukum Cyber', prerequisites: [], syllabusTopic: [] },
  { id: 'tif505-2', code: 'TIF505-2', name: 'Metode Numerik', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Metode Numerik', prerequisites: [], syllabusTopic: [] },
  { id: 'tif506-2', code: 'TIF506-2', name: 'Metodologi Penelitian', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Metodologi Penelitian', prerequisites: [], syllabusTopic: [] },

  // Semester 6
  { id: 'tif601-3', code: 'TIF601-3', name: 'Data Mining & Data Warehouse', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Data Mining & Data Warehouse', prerequisites: [], syllabusTopic: [] },
  { id: 'tif602-3', code: 'TIF602-3', name: 'Cloud Computing', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Cloud Computing', prerequisites: [], syllabusTopic: [] },
  { id: 'tif603-3', code: 'TIF603-3', name: 'Internet of Things (IoT)', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Internet of Things (IoT)', prerequisites: [], syllabusTopic: [] },
  { id: 'tif604-2', code: 'TIF604-2', name: 'Kriptografi', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kriptografi', prerequisites: [], syllabusTopic: [] },
  { id: 'tif605-2', code: 'TIF605-2', name: 'Sistem Terdistribusi', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Sistem Terdistribusi', prerequisites: [], syllabusTopic: [] },
  { id: 'tif606-2', code: 'TIF606-2', name: 'Manajemen Proyek IT', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Manajemen Proyek IT', prerequisites: [], syllabusTopic: [] },

  // Semester 7
  { id: 'tif701-3', code: 'TIF701-3', name: 'Pembelajaran Mesin (Machine Learning)', sks: 3, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pembelajaran Mesin (Machine Learning)', prerequisites: [], syllabusTopic: [] },
  { id: 'tif702-3', code: 'TIF702-3', name: 'Computer Vision & Pattern Recognition', sks: 3, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Computer Vision & Pattern Recognition', prerequisites: [], syllabusTopic: [] },
  { id: 'tif703-3', code: 'TIF703-3', name: 'Big Data Analytics', sks: 3, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Big Data Analytics', prerequisites: [], syllabusTopic: [] },
  { id: 'tif704-2', code: 'TIF704-2', name: 'Bioinformatika', sks: 2, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Bioinformatika', prerequisites: [], syllabusTopic: [] },
  { id: 'tif705-2', code: 'TIF705-2', name: 'Robotika & Sistem Cerdas', sks: 2, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Robotika & Sistem Cerdas', prerequisites: [], syllabusTopic: [] },
  { id: 'tif706-2', code: 'TIF706-2', name: 'Pemrosesan Bahasa Alami (NLP)', sks: 2, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Pemrosesan Bahasa Alami (NLP)', prerequisites: [], syllabusTopic: [] },
  { id: 'tif707-2', code: 'TIF707-2', name: 'Seminar Proposal', sks: 2, semester: 7, category: 'BISA DIIMBANGI', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Seminar Proposal', prerequisites: [], syllabusTopic: [] },
  { id: 'tif708-3', code: 'TIF708-3', name: 'Kerja Praktik / Magang', sks: 3, semester: 7, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Kerja Praktik / Magang', prerequisites: [], syllabusTopic: [] },

  // Semester 8
  { id: 'tif801-6', code: 'TIF801-6', name: 'Skripsi / Tugas Akhir', sks: 6, semester: 8, category: 'PILIHAN', studyProgram: 'Teknik Informatika', description: 'Mata kuliah Skripsi / Tugas Akhir', prerequisites: [], syllabusTopic: [] },

  // ================= TEKNIK SIPIL (66 Mata Kuliah) =================
  // Semester 1
  { id: 'ts101-2', code: 'TS101-2', name: 'Statika', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Statika', prerequisites: [], syllabusTopic: [] },
  { id: 'ts102-2', code: 'TS102-2', name: 'Menggambar Rekayasa', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Menggambar Rekayasa', prerequisites: [], syllabusTopic: [] },
  { id: 'ts103-2', code: 'TS103-2', name: 'Matematika I', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Matematika I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts104-3', code: 'TS104-3', name: 'Fisika Dasar', sks: 3, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Fisika Dasar', prerequisites: [], syllabusTopic: [] },
  { id: 'ts105-2', code: 'TS105-2', name: 'Kimia Dasar', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Kimia Dasar', prerequisites: [], syllabusTopic: [] },
  { id: 'ts106-2', code: 'TS106-2', name: 'Pendidikan Agama', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Pendidikan Agama', prerequisites: [], syllabusTopic: [] },
  { id: 'ts107-2', code: 'TS107-2', name: 'Bahasa Indonesia', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Bahasa Indonesia', prerequisites: [], syllabusTopic: [] },
  { id: 'ts108-2', code: 'TS108-2', name: 'Pendidikan Pancasila', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Pendidikan Pancasila', prerequisites: [], syllabusTopic: [] },

  // Semester 2
  { id: 'ts201-3', code: 'TS201-3', name: 'Mekanika Bahan', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Mekanika Bahan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts202-3', code: 'TS202-3', name: 'Mekanika Tanah I', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Mekanika Tanah I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts203-2', code: 'TS203-2', name: 'Rekayasa Hidrologi', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Hidrologi', prerequisites: [], syllabusTopic: [] },
  { id: 'ts204-2', code: 'TS204-2', name: 'Matematika II', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Matematika II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts205-2', code: 'TS205-2', name: 'Ukur Tanah', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Ukur Tanah', prerequisites: [], syllabusTopic: [] },
  { id: 'ts206-2', code: 'TS206-2', name: 'Teknologi Bahan Konstruksi', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Teknologi Bahan Konstruksi', prerequisites: [], syllabusTopic: [] },
  { id: 'ts207-2', code: 'TS207-2', name: 'Bahasa Inggris I', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Bahasa Inggris I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts208-2', code: 'TS208-2', name: 'Pendidikan Kewarganegaraan', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Pendidikan Kewarganegaraan', prerequisites: [], syllabusTopic: [] },

  // Semester 3
  { id: 'ts301-3', code: 'TS301-3', name: 'Analisis Struktur I', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Analisis Struktur I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts302-3', code: 'TS302-3', name: 'Mekanika Tanah II', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Mekanika Tanah II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts303-3', code: 'TS303-3', name: 'Mekanika Fluida & Hidraulika', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Mekanika Fluida & Hidraulika', prerequisites: [], syllabusTopic: [] },
  { id: 'ts304-2', code: 'TS304-2', name: 'Rekayasa Jalan Raya', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Jalan Raya', prerequisites: [], syllabusTopic: [] },
  { id: 'ts305-2', code: 'TS305-2', name: 'Geologi Teknik', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Geologi Teknik', prerequisites: [], syllabusTopic: [] },
  { id: 'ts306-2', code: 'TS306-2', name: 'Statistika & Probabilitas', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Statistika & Probabilitas', prerequisites: [], syllabusTopic: [] },
  { id: 'ts307-2', code: 'TS307-2', name: 'Bahasa Inggris II', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Bahasa Inggris II', prerequisites: [], syllabusTopic: [] },

  // Semester 4
  { id: 'ts401-3', code: 'TS401-3', name: 'Analisis Struktur II', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Analisis Struktur II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts402-3', code: 'TS402-3', name: 'Struktur Beton Bertulang I', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Struktur Beton Bertulang I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts403-3', code: 'TS403-3', name: 'Struktur Baja I', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Struktur Baja I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts404-2', code: 'TS404-2', name: 'Rekayasa Pondasi I', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Pondasi I', prerequisites: [], syllabusTopic: [] },
  { id: 'ts405-2', code: 'TS405-2', name: 'Rekayasa Irigasi & Bangunan Air', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Irigasi & Bangunan Air', prerequisites: [], syllabusTopic: [] },
  { id: 'ts406-2', code: 'TS406-2', name: 'Perencanaan Geometrik Jalan', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Perencanaan Geometrik Jalan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts407-2', code: 'TS407-2', name: 'Kewirausahaan', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Kewirausahaan', prerequisites: [], syllabusTopic: [] },

  // Semester 5
  { id: 'ts501-3', code: 'TS501-3', name: 'Struktur Beton Bertulang II', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Struktur Beton Bertulang II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts502-3', code: 'TS502-3', name: 'Struktur Baja II', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Struktur Baja II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts503-3', code: 'TS503-3', name: 'Rekayasa Pondasi II', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Pondasi II', prerequisites: [], syllabusTopic: [] },
  { id: 'ts504-2', code: 'TS504-2', name: 'Manajemen Konstruksi', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Manajemen Konstruksi', prerequisites: [], syllabusTopic: [] },
  { id: 'ts505-2', code: 'TS505-2', name: 'Perancangan Perkerasan Jalan', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Perancangan Perkerasan Jalan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts506-2', code: 'TS506-2', name: 'Metodologi Penelitian', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Metodologi Penelitian', prerequisites: [], syllabusTopic: [] },

  // Semester 6
  { id: 'ts601-3', code: 'TS601-3', name: 'Dinamika Struktur & Rekayasa Gempa', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Dinamika Struktur & Rekayasa Gempa', prerequisites: [], syllabusTopic: [] },
  { id: 'ts602-3', code: 'TS602-3', name: 'Ekonomi Teknik', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Ekonomi Teknik', prerequisites: [], syllabusTopic: [] },
  { id: 'ts603-3', code: 'TS603-3', name: 'Drainase Perkotaan', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Drainase Perkotaan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts604-2', code: 'TS604-2', name: 'Estimasi Biaya Konstruksi (RAB)', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Estimasi Biaya Konstruksi (RAB)', prerequisites: [], syllabusTopic: [] },
  { id: 'ts605-2', code: 'TS605-2', name: 'Rekayasa Lalu Lintas', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Lalu Lintas', prerequisites: [], syllabusTopic: [] },
  { id: 'ts606-2', code: 'TS606-2', name: 'AMDAL & Rekayasa Lingkungan', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah AMDAL & Rekayasa Lingkungan', prerequisites: [], syllabusTopic: [] },

  // Semester 7
  { id: 'ts701-3', code: 'TS701-3', name: 'Perancangan Bangunan Gedung', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Perancangan Bangunan Gedung', prerequisites: [], syllabusTopic: [] },
  { id: 'ts702-3', code: 'TS702-3', name: 'Perancangan Jembatan', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Perancangan Jembatan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts703-3', code: 'TS703-3', name: 'Perancangan Bangunan Air', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Perancangan Bangunan Air', prerequisites: [], syllabusTopic: [] },
  { id: 'ts704-2', code: 'TS704-2', name: 'Rekayasa Pelabuhan', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Pelabuhan', prerequisites: [], syllabusTopic: [] },
  { id: 'ts705-2', code: 'TS705-2', name: 'Rekayasa Bandar Udara', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Rekayasa Bandar Udara', prerequisites: [], syllabusTopic: [] },
  { id: 'ts706-2', code: 'TS706-2', name: 'Manajemen Proyek Konstruksi', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Manajemen Proyek Konstruksi', prerequisites: [], syllabusTopic: [] },
  { id: 'ts707-2', code: 'TS707-2', name: 'Seminar Proposal', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Seminar Proposal', prerequisites: [], syllabusTopic: [] },
  { id: 'ts708-3', code: 'TS708-3', name: 'Kerja Praktik / Magang', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Kerja Praktik / Magang', prerequisites: [], syllabusTopic: [] },

  // Semester 8
  { id: 'ts801-6', code: 'TS801-6', name: 'Skripsi / Tugas Akhir', sks: 6, semester: 8, category: 'Wajib', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Skripsi / Tugas Akhir', prerequisites: [], syllabusTopic: [] },

  // Konsentrasi (Semester 7)
  { id: 'tms701-3', code: 'TMS701-3', name: 'Konsentrasi Struktur (Struktur Beton Bertulang Lanjut)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Struktur', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Struktur (Struktur Beton Bertulang Lanjut)', prerequisites: [], syllabusTopic: [] },
  { id: 'tms702-3', code: 'TMS702-3', name: 'Konsentrasi Struktur (Struktur Baja Lanjut)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Struktur', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Struktur (Struktur Baja Lanjut)', prerequisites: [], syllabusTopic: [] },
  { id: 'tms703-3', code: 'TMS703-3', name: 'Konsentrasi Struktur (Struktur Kayu & Bambu)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Struktur', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Struktur (Struktur Kayu & Bambu)', prerequisites: [], syllabusTopic: [] },

  { id: 'tmg701-3', code: 'TMG701-3', name: 'Konsentrasi Geoteknik (Perbaikan Tanah & Geosintetik)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Geoteknik', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Geoteknik (Perbaikan Tanah & Geosintetik)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmg702-3', code: 'TMG702-3', name: 'Konsentrasi Geoteknik (Mekanika Batuan & Terowongan)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Geoteknik', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Geoteknik (Mekanika Batuan & Terowongan)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmg703-3', code: 'TMG703-3', name: 'Konsentrasi Geoteknik (Stabilitas Lereng & Dinding Penahan Tanah)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Geoteknik', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Geoteknik (Stabilitas Lereng & Dinding Penahan Tanah)', prerequisites: [], syllabusTopic: [] },

  { id: 'tma701-3', code: 'TMA701-3', name: 'Konsentrasi Air (Pengembangan Sumber Daya Air)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Air', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Air (Pengembangan Sumber Daya Air)', prerequisites: [], syllabusTopic: [] },
  { id: 'tma702-3', code: 'TMA702-3', name: 'Konsentrasi Air (Bangunan Pantai & Lepas Pantai)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Air', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Air (Bangunan Pantai & Lepas Pantai)', prerequisites: [], syllabusTopic: [] },
  { id: 'tma703-3', code: 'TMA703-3', name: 'Konsentrasi Air (Erosi & Sedimentasi)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Air', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Air (Erosi & Sedimentasi)', prerequisites: [], syllabusTopic: [] },

  { id: 'tmt701-3', code: 'TMT701-3', name: 'Konsentrasi Transportasi (Perencanaan Transportasi)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Transportasi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Transportasi (Perencanaan Transportasi)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmt702-3', code: 'TMT702-3', name: 'Konsentrasi Transportasi (Sistem Angkutan Umum)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Transportasi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Transportasi (Sistem Angkutan Umum)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmt703-3', code: 'TMT703-3', name: 'Konsentrasi Transportasi (Keselamatan Jalan Raya)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Transportasi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Transportasi (Keselamatan Jalan Raya)', prerequisites: [], syllabusTopic: [] },

  { id: 'tmk701-3', code: 'TMK701-3', name: 'Konsentrasi Manajemen Konstruksi (K3 Konstruksi)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Manajemen Konstruksi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Manajemen Konstruksi (K3 Konstruksi)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmk702-3', code: 'TMK702-3', name: 'Konsentrasi Manajemen Konstruksi (Aspek Hukum Konstruksi)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Manajemen Konstruksi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Manajemen Konstruksi (Aspek Hukum Konstruksi)', prerequisites: [], syllabusTopic: [] },
  { id: 'tmk703-3', code: 'TMK703-3', name: 'Konsentrasi Manajemen Konstruksi (BIM dalam Manajemen Konstruksi)', sks: 3, semester: 7, category: 'BISA DIIMBANGI', specialization: 'Manajemen Konstruksi', studyProgram: 'Teknik Sipil', description: 'Mata kuliah Konsentrasi Manajemen Konstruksi (BIM dalam Manajemen Konstruksi)', prerequisites: [], syllabusTopic: [] },

  // ================= TEKNIK ELEKTRO (51 Mata Kuliah) =================
  // Semester 1
  { id: 'te101-2', code: 'TE101-2', name: 'Rangkaian Listrik I', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Rangkaian Listrik I', prerequisites: [], syllabusTopic: [] },
  { id: 'te102-2', code: 'TE102-2', name: 'Pengantar Teknik Elektro', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pengantar Teknik Elektro', prerequisites: [], syllabusTopic: [] },
  { id: 'te103-2', code: 'TE103-2', name: 'Pemrograman Komputer', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pemrograman Komputer', prerequisites: [], syllabusTopic: [] },
  { id: 'te104-3', code: 'TE104-3', name: 'Fisika Dasar I', sks: 3, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Fisika Dasar I', prerequisites: [], syllabusTopic: [] },
  { id: 'te105-2', code: 'TE105-2', name: 'Kalkulus I', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Kalkulus I', prerequisites: [], syllabusTopic: [] },
  { id: 'te106-2', code: 'TE106-2', name: 'Pendidikan Agama', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pendidikan Agama', prerequisites: [], syllabusTopic: [] },
  { id: 'te107-2', code: 'TE107-2', name: 'Bahasa Indonesia', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Bahasa Indonesia', prerequisites: [], syllabusTopic: [] },
  { id: 'te108-2', code: 'TE108-2', name: 'Pendidikan Pancasila', sks: 2, semester: 1, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pendidikan Pancasila', prerequisites: [], syllabusTopic: [] },

  // Semester 2
  { id: 'te201-3', code: 'TE201-3', name: 'Rangkaian Listrik II', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Rangkaian Listrik II', prerequisites: [], syllabusTopic: [] },
  { id: 'te202-3', code: 'TE202-3', name: 'Elektronika I', sks: 3, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Elektronika I', prerequisites: [], syllabusTopic: [] },
  { id: 'te203-2', code: 'TE203-2', name: 'Sistem Digital', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sistem Digital', prerequisites: [], syllabusTopic: [] },
  { id: 'te204-2', code: 'TE204-2', name: 'Medan Elektromagnetik I', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Medan Elektromagnetik I', prerequisites: [], syllabusTopic: [] },
  { id: 'te205-2', code: 'TE205-2', name: 'Fisika Dasar II', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Fisika Dasar II', prerequisites: [], syllabusTopic: [] },
  { id: 'te206-2', code: 'TE206-2', name: 'Kalkulus II', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Kalkulus II', prerequisites: [], syllabusTopic: [] },
  { id: 'te207-2', code: 'TE207-2', name: 'Bahasa Inggris I', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Bahasa Inggris I', prerequisites: [], syllabusTopic: [] },
  { id: 'te208-2', code: 'TE208-2', name: 'Pendidikan Kewarganegaraan', sks: 2, semester: 2, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pendidikan Kewarganegaraan', prerequisites: [], syllabusTopic: [] },

  // Semester 3
  { id: 'te301-3', code: 'TE301-3', name: 'Elektronika II', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Elektronika II', prerequisites: [], syllabusTopic: [] },
  { id: 'te302-3', code: 'TE302-3', name: 'Sinyal & Sistem', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sinyal & Sistem', prerequisites: [], syllabusTopic: [] },
  { id: 'te303-3', code: 'TE303-3', name: 'Mesin-Mesin Listrik I', sks: 3, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Mesin-Mesin Listrik I', prerequisites: [], syllabusTopic: [] },
  { id: 'te304-2', code: 'TE304-2', name: 'Medan Elektromagnetik II', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Medan Elektromagnetik II', prerequisites: [], syllabusTopic: [] },
  { id: 'te305-2', code: 'TE305-2', name: 'Matematika Teknik I', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Matematika Teknik I', prerequisites: [], syllabusTopic: [] },
  { id: 'te306-2', code: 'TE306-2', name: 'Pengukuran Besaran Listrik', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pengukuran Besaran Listrik', prerequisites: [], syllabusTopic: [] },
  { id: 'te307-2', code: 'TE307-2', name: 'Bahasa Inggris II', sks: 2, semester: 3, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Bahasa Inggris II', prerequisites: [], syllabusTopic: [] },

  // Semester 4
  { id: 'te401-3', code: 'TE401-3', name: 'Mikrokontroler & Sistem Tertanam', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Mikrokontroler & Sistem Tertanam', prerequisites: [], syllabusTopic: [] },
  { id: 'te402-3', code: 'TE402-3', name: 'Sistem Pengaturan I', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sistem Pengaturan I', prerequisites: [], syllabusTopic: [] },
  { id: 'te403-3', code: 'TE403-3', name: 'Analisis Sistem Tenaga Listrik', sks: 3, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Analisis Sistem Tenaga Listrik', prerequisites: [], syllabusTopic: [] },
  { id: 'te404-2', code: 'TE404-2', name: 'Mesin-Mesin Listrik II', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Mesin-Mesin Listrik II', prerequisites: [], syllabusTopic: [] },
  { id: 'te405-2', code: 'TE405-2', name: 'Dasar Sistem Telekomunikasi', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Dasar Sistem Telekomunikasi', prerequisites: [], syllabusTopic: [] },
  { id: 'te406-2', code: 'TE406-2', name: 'Matematika Teknik II', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Matematika Teknik II', prerequisites: [], syllabusTopic: [] },
  { id: 'te407-2', code: 'TE407-2', name: 'Kewirausahaan', sks: 2, semester: 4, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Kewirausahaan', prerequisites: [], syllabusTopic: [] },

  // Semester 5
  { id: 'te501-3', code: 'TE501-3', name: 'Elektronika Daya', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Elektronika Daya', prerequisites: [], syllabusTopic: [] },
  { id: 'te502-3', code: 'TE502-3', name: 'Pemrosesan Sinyal Digital', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Pemrosesan Sinyal Digital', prerequisites: [], syllabusTopic: [] },
  { id: 'te503-3', code: 'TE503-3', name: 'Transmisi & Distribusi Tenaga Listrik', sks: 3, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Transmisi & Distribusi Tenaga Listrik', prerequisites: [], syllabusTopic: [] },
  { id: 'te504-2', code: 'TE504-2', name: 'Sistem Pengaturan II', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sistem Pengaturan II', prerequisites: [], syllabusTopic: [] },
  { id: 'te505-2', code: 'TE505-2', name: 'Otomasi Industri & PLC', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Otomasi Industri & PLC', prerequisites: [], syllabusTopic: [] },
  { id: 'te506-2', code: 'TE506-2', name: 'Metodologi Penelitian', sks: 2, semester: 5, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Metodologi Penelitian', prerequisites: [], syllabusTopic: [] },

  // Semester 6
  { id: 'te601-3', code: 'TE601-3', name: 'Proteksi Sistem Tenaga Listrik', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Proteksi Sistem Tenaga Listrik', prerequisites: [], syllabusTopic: [] },
  { id: 'te602-3', code: 'TE602-3', name: 'Sistem Kendali Terdistribusi', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sistem Kendali Terdistribusi', prerequisites: [], syllabusTopic: [] },
  { id: 'te603-3', code: 'TE603-3', name: 'Energi Terbarukan & Pembangkit Listrik', sks: 3, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Energi Terbarukan & Pembangkit Listrik', prerequisites: [], syllabusTopic: [] },
  { id: 'te604-2', code: 'TE604-2', name: 'Komunikasi Data & Jaringan', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Komunikasi Data & Jaringan', prerequisites: [], syllabusTopic: [] },
  { id: 'te605-2', code: 'TE605-2', name: 'Sensor & Aktuator', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Sensor & Aktuator', prerequisites: [], syllabusTopic: [] },
  { id: 'te606-2', code: 'TE606-2', name: 'Manajemen Energi', sks: 2, semester: 6, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Manajemen Energi', prerequisites: [], syllabusTopic: [] },

  // Semester 7
  { id: 'te701-3', code: 'TE701-3', name: 'Perancangan Sistem Elektronika', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Perancangan Sistem Elektronika', prerequisites: [], syllabusTopic: [] },
  { id: 'te702-3', code: 'TE702-3', name: 'Perancangan Sistem Tenaga', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Perancangan Sistem Tenaga', prerequisites: [], syllabusTopic: [] },
  { id: 'te703-3', code: 'TE703-3', name: 'Perancangan Sistem Kendali', sks: 3, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Perancangan Sistem Kendali', prerequisites: [], syllabusTopic: [] },
  { id: 'te704-2', code: 'TE704-2', name: 'Teknik Tegangan Tinggi', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Teknik Tegangan Tinggi', prerequisites: [], syllabusTopic: [] },
  { id: 'te705-2', code: 'TE705-2', name: 'Robotika & Otomasi', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Robotika & Otomasi', prerequisites: [], syllabusTopic: [] },
  { id: 'te706-2', code: 'TE706-2', name: 'Internet of Things Industri (IIoT)', sks: 2, semester: 7, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Internet of Things Industri (IIoT)', prerequisites: [], syllabusTopic: [] },
  { id: 'te707-2', code: 'TE707-2', name: 'Seminar Proposal', sks: 2, semester: 7, category: 'BISA DIIMBANGI', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Seminar Proposal', prerequisites: [], syllabusTopic: [] },
  { id: 'te708-3', code: 'TE708-3', name: 'Kerja Praktik / Magang', sks: 3, semester: 7, category: 'BISA DIIMBANGI', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Kerja Praktik / Magang', prerequisites: [], syllabusTopic: [] },

  // Semester 8
  { id: 'te801-6', code: 'TE801-6', name: 'Skripsi / Tugas Akhir', sks: 6, semester: 8, category: 'Wajib', studyProgram: 'Teknik Elektro', description: 'Mata kuliah Skripsi / Tugas Akhir', prerequisites: [], syllabusTopic: [] }
];

export const LECTURERS_DATA: Lecturer[] = [
  {
    id: 'doc-01',
    name: 'Dr. Andi Nur Putri, S.Pd., M.T',
    nidn: '907058603',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Elektro', 'Sistem Isyarat', 'Elektronika'],
    email: 'andinurputri@patria-artha.ac.id',
    lab: 'Lab Robotika & Elektro',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Teknik Elektro ITB', 'S3 Doktor Teknik Elektro Unhas'],
    googleScholar: 'https://scholar.google.com/citations?user=sample1',
    scopus: '57200192801',
    sinta: '6012891',
    orcid: '0000-0002-1825-0097',
    coursesTaught: ['Rangkaian Listrik', 'Sistem Kontrol', 'Internet of Things'],
    publicationsCount: 12,
    studyProgram: 'Teknik Elektro'
  },
  {
    id: 'doc-02',
    name: 'Ir. Irwan Syarif, S.Pd., M.T',
    nidn: '903078801',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Elektro', 'Mikrokontroler', 'Telekomunikasi'],
    email: 'irwansyarif@patria-artha.ac.id',
    lab: 'Lab Sistem Tertanam',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Teknik Elektro Unhas'],
    googleScholar: 'https://scholar.google.com/citations?user=sample2',
    scopus: '57193019283',
    sinta: '6023910',
    coursesTaught: ['Mikrokontroler & IoT', 'Sistem Digital', 'Pemrosesan Sinyal'],
    publicationsCount: 15,
    studyProgram: 'Teknik Elektro'
  },
  {
    id: 'doc-03',
    name: 'Ir. Muh. Rais, S.Pd., M.T',
    nidn: '901128901',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Elektro', 'Sistem Tenaga', 'Elektronika Daya'],
    email: 'muhrais@patria-artha.ac.id',
    lab: 'Lab Listrik & Energi',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Teknik Elektro Unhas'],
    googleScholar: 'https://scholar.google.com',
    sinta: '6031209',
    coursesTaught: ['Medan Elektromagnetik', 'Mesin Listrik'],
    publicationsCount: 10,
    studyProgram: 'Teknik Elektro'
  },
  {
    id: 'doc-04',
    name: 'Dr. Syamsumarlin Taha, S.Pd., M.Pd',
    nidn: '907018604',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Elektro', 'Pendidikan Teknologi', 'Sistem Kontrol'],
    email: 'syamsumarlin@patria-artha.ac.id',
    lab: 'Lab Otomasi Industri',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Pendidikan Teknologi UNM', 'S3 Doktor Ilmu Pendidikan UNM'],
    googleScholar: 'https://scholar.google.com',
    scopus: '57192830192',
    sinta: '6041823',
    coursesTaught: ['Elektronika Analog', 'Dasar Teknik Elektro', 'Otomasi Industri'],
    publicationsCount: 18,
    studyProgram: 'Teknik Elektro'
  },
  {
    id: 'doc-05',
    name: 'Ir. Asnefi, M.M',
    nidn: '911087404',
    title: 'Dosen Tetap Teknik Informatika',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['RPL', 'DataScience'],
    expertiseTags: ['Teknik Informatika', 'Manajemen IT', 'Sistem Informasi'],
    email: 'asnefi@patria-artha.ac.id',
    lab: 'Lab Rekayasa Perangkat Lunak',
    education: ['S1 Teknik Komputer', 'S2 Magister Manajemen UPA'],
    googleScholar: 'https://scholar.google.com',
    sinta: '6051982',
    coursesTaught: ['Manajemen Proyek IT', 'Sistem Informasi Manajemen', 'Tata Kelola TI'],
    publicationsCount: 14,
    studyProgram: 'Teknik Informatika'
  },
  {
    id: 'doc-06',
    name: 'Dayanti, S.Kom, M.Kom',
    nidn: '930129602',
    title: 'Dosen Tetap Teknik Informatika',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['AI', 'DataScience'],
    expertiseTags: ['Teknik Informatika', 'Algoritma', 'Pemrograman Web'],
    email: 'dayanti@patria-artha.ac.id',
    lab: 'Lab Pemrograman Komputer',
    education: ['S1 Teknik Informatika UMI', 'S2 Ilmu Komputer IPB'],
    googleScholar: 'https://scholar.google.com',
    scopus: '57319201928',
    sinta: '6062910',
    orcid: '0000-0001-9283-1029',
    coursesTaught: ['Pemrograman Web', 'Struktur Data', 'Kecerdasan Buatan'],
    publicationsCount: 11,
    studyProgram: 'Teknik Informatika'
  },
  {
    id: 'doc-07',
    name: 'Jumiati Usman, S.Kom., M.M',
    nidn: '930037301',
    title: 'Dosen Tetap Teknik Informatika',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['RPL'],
    expertiseTags: ['Teknik Informatika', 'Basis Data', 'Sistem Informasi Enterprise'],
    email: 'jumiati.usman@patria-artha.ac.id',
    lab: 'Lab Basis Data & Informasi',
    education: ['S1 Teknik Informatika UPA', 'S2 Magister Manajemen UPA'],
    googleScholar: 'https://scholar.google.com',
    sinta: '6073829',
    coursesTaught: ['Basis Data', 'Analisis & Perancangan Sistem'],
    publicationsCount: 9,
    studyProgram: 'Teknik Informatika'
  },
  {
    id: 'doc-08',
    name: 'Andi Nurfadly, S.Pd., M.Kom',
    nidn: '911058808',
    title: 'Dosen Tetap Teknik Informatika',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['CyberSecurity', 'RPL'],
    expertiseTags: ['Teknik Informatika', 'Jaringan Komputer', 'Keamanan Siber'],
    email: 'andinurfadly@patria-artha.ac.id',
    lab: 'Lab Jaringan & Cyber Security',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Magister Komputer ITB'],
    googleScholar: 'https://scholar.google.com',
    scopus: '57419203918',
    sinta: '6081920',
    coursesTaught: ['Jaringan Komputer', 'Keamanan Informasi', 'Kriptografi'],
    publicationsCount: 13,
    studyProgram: 'Teknik Informatika'
  },
  {
    id: 'doc-09',
    name: 'Ir. Muhammad Arham, S.Pd., M.T',
    nidn: '905049006',
    title: 'Dosen Tetap Teknik Mesin',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Mesin', 'Termodinamika', 'Konversi Energi'],
    email: 'muhammad.arham@patria-artha.ac.id',
    lab: 'Lab Fenomena Mesin',
    education: ['S1 Pendidikan Teknik UNM', 'S2 Teknik Mesin Unhas'],
    googleScholar: 'https://scholar.google.com',
    sinta: '6091823',
    coursesTaught: ['Termodinamika', 'Mekanika Fluida'],
    publicationsCount: 8,
    studyProgram: 'Teknik Mesin'
  },
  {
    id: 'doc-10',
    name: 'Akhsan Hamka, S.Kom., S.T., M.T.',
    nidn: '912088706',
    title: 'Dosen Tetap Teknik Mesin',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT', 'RPL'],
    expertiseTags: ['Teknik Mesin', 'CAD/CAM', 'Mekatronika'],
    email: 'akhsan.hamka@patria-artha.ac.id',
    lab: 'Lab Desain Mesin & CAD',
    education: ['S1 Teknik Komputer & S1 Teknik Mesin', 'S2 Teknik Mesin Unhas'],
    googleScholar: 'https://scholar.google.com',
    scopus: '57519283019',
    sinta: '6102918',
    coursesTaught: ['Gambar Teknik CAD', 'Elemen Mesin', 'Robotika Industri'],
    publicationsCount: 16,
    studyProgram: 'Teknik Mesin'
  },
  {
    id: 'doc-11',
    name: 'Husni Mubarak, S.T., M.T',
    nidn: '6452775676130170',
    title: 'Dosen Tetap Teknik Mesin',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Mesin', 'Material Teknik', 'Proses Manufaktur'],
    email: 'husnimubarak@patria-artha.ac.id',
    lab: 'Lab Manufaktur & Bahan',
    education: ['S1 Teknik', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Ilmu Bahan Teknik', 'Proses Pemesinan'],
    publicationsCount: 7,
    studyProgram: 'Teknik Mesin'
  },
  {
    id: 'doc-12',
    name: 'Aras M Parenreng, S.Si., M.T',
    nidn: '356762663130253',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT', 'DataScience'],
    expertiseTags: ['Teknik Elektro', 'Fisika Material', 'Telekomunikasi'],
    email: 'aras.parenreng@patria-artha.ac.id',
    lab: 'Lab Telekomunikasi',
    education: ['S1 Sains', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Fisika Teknik', 'Sistem Telekomunikasi'],
    publicationsCount: 14,
    studyProgram: 'Teknik Elektro'
  },
  {
    id: 'doc-13',
    name: 'Amal All Gazali, S.T., M.T',
    nidn: '4857768669130510',
    title: 'Dosen Tetap Teknik Mesin',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Mesin', 'Otomotif', 'Sistem Dinamik'],
    email: 'amal.gazali@patria-artha.ac.id',
    lab: 'Lab Otomotif & Mesin',
    education: ['S1 Teknik', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Dinamika Teknik', 'Motor Bakar'],
    publicationsCount: 10,
    studyProgram: 'Teknik Mesin'
  },
  {
    id: 'doc-14',
    name: 'Sony Malino, S.T., M.T',
    nidn: '8241767668130500',
    title: 'Dosen Tetap Teknik Mesin',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Mesin', 'Getaran Mekanis', 'Konstruksi'],
    email: 'sony.malino@patria-artha.ac.id',
    lab: 'Lab Uji Material',
    education: ['S1 Teknik', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Getaran Mekanis', 'Mekanika Kekuatan Bahan'],
    publicationsCount: 9,
    studyProgram: 'Teknik Mesin'
  },
  {
    id: 'doc-15',
    name: 'Priyo Wicaksono, S.T., M.T',
    nidn: '928037902',
    title: 'Dosen Tetap Teknik Informatika',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['AI', 'RPL'],
    expertiseTags: ['Teknik Informatika', 'Kecerdasan Buatan', 'Pengolahan Citra'],
    email: 'priyo.wicaksono@patria-artha.ac.id',
    lab: 'Lab Artificial Intelligence',
    education: ['S1 Teknik', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Kecerdasan Buatan', 'Pengolahan Citra Digital'],
    publicationsCount: 15,
    studyProgram: 'Teknik Informatika'
  },
  {
    id: 'doc-16',
    name: 'Pratiwi Natsir Putri, S.T., M.T',
    nidn: '921108601',
    title: 'Dosen Tetap Teknik Elektro',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    expertise: ['IoT'],
    expertiseTags: ['Teknik Elektro', 'Sistem Kendali', 'Instrumentasi'],
    email: 'pratiwi.natsir@patria-artha.ac.id',
    lab: 'Lab Kendali & Instrumentasi',
    education: ['S1 Teknik', 'S2 Teknik'],
    googleScholar: 'https://scholar.google.com',
    coursesTaught: ['Instrumentasi Industri', 'Sistem Linear'],
    publicationsCount: 12,
    studyProgram: 'Teknik Elektro'
  }
];

export const LABORATORIES_DATA: Laboratory[] = [
  {
    id: 'lab-ai',
    code: 'LAB-01',
    name: 'Laboratorium Artificial Intelligence & Big Data',
    shortDesc: 'Pusat riset komputasi tinggi dilengkapi server GPU NVIDIA RTX 4090 & A100 untuk Deep Learning.',
    headOfLab: 'Prof. Dr. Ir. Budi Santoso, M.Sc.',
    headPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    labAssistants: ['Muhammad Farhan (Angkatan 2023)', 'Nadia Putri (Angkatan 2023)'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    location: 'Gedung Laboratorium Terpadu Lt. 3, Ruang L301',
    capacity: 40,
    specifications: [
      '40 Unit PC Workstation Intel Core i9-14900K, RAM 64GB, RTX 4080 Super',
      '1 Unit Server GPU NVIDIA A100 Tensor Core (Cluster Riset)',
      'High-Speed Fibre Optic Internet 1 Gbps Dedicated',
      'Smart Interactive Whiteboard 85 inch & Audio Conference'
    ],
    equipmentList: [
      { name: 'PC Workstation High-End', qty: 40, status: 'Baik' },
      { name: 'Server Compute Cluster AI', qty: 2, status: 'Baik' },
      { name: 'VR Headset Meta Quest 3', qty: 8, status: 'Baik' },
      { name: 'Server NAS Backup 100TB', qty: 1, status: 'Baik' }
    ],
    softwareInstalled: ['PyTorch', 'TensorFlow', 'CUDA Toolkit', 'JupyterHub Server', 'VS Code Studio', 'Docker Desktop'],
    virtualTour360Url: 'https://example.com/virtual-tour-ai-lab'
  },
  {
    id: 'lab-cyber',
    code: 'LAB-02',
    name: 'Laboratorium Cyber Security & Network Operations',
    shortDesc: 'Fasilitas simulasi serangan/pertahanan siber (Red Team vs Blue Team) dengan isolated subnet.',
    headOfLab: 'Dr. Eng. Siska Rahmawati, S.T., M.T.',
    headPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    labAssistants: ['Rian Hidayat (Angkatan 2022)', 'Ahmad Zaki (Angkatan 2023)'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    location: 'Gedung Laboratorium Terpadu Lt. 3, Ruang L302',
    capacity: 36,
    specifications: [
      '36 Unit PC Dual Boot Kali Linux & Windows 11 Enterprise',
      'Cisco Enterprise Router & Switch Rack (ISR 4331, Catalyst 9300)',
      'Fortinet FortiGate Next-Gen Firewall Hardware Appliance',
      'Air-gapped Cyber Range Testbed Arena'
    ],
    equipmentList: [
      { name: 'Cisco Router & Switch Rack', qty: 6, status: 'Baik' },
      { name: 'Hardware Firewall Appliance', qty: 2, status: 'Baik' },
      { name: 'Wifi Hacking Testbed Nodes', qty: 10, status: 'Baik' }
    ],
    softwareInstalled: ['Kali Linux Suite', 'Wireshark', 'Metasploit Framework', 'Burp Suite Pro', 'GNS3 & Packet Tracer']
  },
  {
    id: 'lab-rpl',
    code: 'LAB-03',
    name: 'Laboratorium Rekayasa Perangkat Lunak & Cloud',
    shortDesc: 'Studio riset & pengembangan produk software full-stack, mobile apps, dan arsitektur cloud.',
    headOfLab: 'Aris Setiawan, S.Kom., M.S.I., Ph.D.',
    headPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    labAssistants: ['Daffa Pratama (Angkatan 2023)'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    location: 'Gedung Laboratorium Terpadu Lt. 2, Ruang L204',
    capacity: 45,
    specifications: [
      '45 Unit PC Dual Monitor (Intel i7, RAM 32GB, SSD 1TB)',
      'Akses Cloud Platform AWS & Google Cloud Platform for Education',
      'Scrum Board & Agile Stand-up Space'
    ],
    equipmentList: [
      { name: 'PC Dual Monitor Workstation', qty: 45, status: 'Baik' },
      { name: 'Mac Studio M2 Max (iOS Build)', qty: 4, status: 'Baik' }
    ],
    softwareInstalled: ['Node.js', 'Docker', 'Android Studio', 'Xcode', 'Postman', 'Git & GitHub Desktop']
  },
  {
    id: 'lab-iot',
    code: 'LAB-04',
    name: 'Laboratorium Internet of Things & Embedded Robotics',
    shortDesc: 'Tempat merancang hardware pintar, robotika, drone autonomous, dan smart city sensors.',
    headOfLab: 'Dian Nugraha, S.T., M.Eng.',
    headPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    labAssistants: ['Kevin Sanjaya (Angkatan 2023)'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    location: 'Gedung Laboratorium Terpadu Lt. 1, Ruang L102',
    capacity: 30,
    specifications: [
      'Workstation Solder & Oscilloscope Rig',
      '3D Printer Creality K1 Max High-Speed',
      'Set Kit ESP32, Raspberry Pi 4/5, Arduino, LiDAR Sensor, Camera Module'
    ],
    equipmentList: [
      { name: '3D Printer High-Speed', qty: 3, status: 'Baik' },
      { name: 'Oscilloscope Digital Rig', qty: 8, status: 'Baik' },
      { name: 'Drone Kit Autonomous LiDAR', qty: 4, status: 'Baik' }
    ],
    softwareInstalled: ['Arduino IDE', 'PlatformIO', 'ROS2 (Robot Operating System)', 'Autodesk Fusion 360', 'KiCad PCB']
  }
];

export const RESEARCH_GROUPS: ResearchGroup[] = [
  {
    id: 'rg-ai',
    name: 'Artificial Intelligence & Intelligent Systems (AIIS)',
    code: 'RG-AIIS',
    leadLecturer: 'Prof. Dr. Ir. Budi Santoso, M.Sc.',
    membersCount: 12,
    description: 'Fokus pada pengembangan model Generative AI, pemrosesan bahasa alami bahasa Indonesia/daerah, dan pengenalan citra medis.',
    topics: ['Multimodal LLM', 'Indonesian NLP', 'Medical Image Segmentation', 'Autonomous Computer Vision']
  },
  {
    id: 'rg-cyber',
    name: 'Cyber Security & Forensics (CSF)',
    code: 'RG-CSF',
    leadLecturer: 'Dr. Eng. Siska Rahmawati, S.T., M.T.',
    membersCount: 8,
    description: 'Fokus pada riset ketahanan infrastruktur kritis, deteksi malware berbasis AI, dan keamanan sistem IoT.',
    topics: ['AI Malware Detection', 'Blockchain Smart Contract Security', 'Zero-Trust Network Architecture']
  },
  {
    id: 'rg-se',
    name: 'Software Engineering & Distributed Systems (SEDS)',
    code: 'RG-SEDS',
    leadLecturer: 'Aris Setiawan, S.Kom., M.S.I., Ph.D.',
    membersCount: 10,
    description: 'Fokus pada riset metodologi pengujian otomatis, refactoring arsitektur microservices, dan green computing.',
    topics: ['Microservices Performance', 'Automated Code Generation', 'Cloud Cost Optimization']
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'pub-01',
    title: 'IndoLLM: Pre-training Large Language Models for Indonesian Regional Dialects using Multi-Task Learning',
    authors: ['Budi Santoso', 'Siti Nurhaliza', 'M. Farhan'],
    year: 2025,
    publisher: 'IEEE Transactions on Neural Networks and Learning Systems (Q1)',
    type: 'Jurnal Internasional',
    doi: '10.1109/TNNLS.2025.342100',
    specialization: 'AI'
  },
  {
    id: 'pub-02',
    title: 'Real-Time Intrusion Detection System in Hybrid Cloud Infrastructure Using Lightweight Deep Autoencoders',
    authors: ['Siska Rahmawati', 'Rian Hidayat'],
    year: 2025,
    publisher: 'ACM Journal on Cybersecurity & Privacy (Q1)',
    type: 'Jurnal Internasional',
    specialization: 'CyberSecurity'
  },
  {
    id: 'pub-03',
    title: 'Penerapan Microservices Architecture dan Kafka Message Queue pada Sistem E-Katalog Produk UMKM Terdistribusi',
    authors: ['Aris Setiawan', 'Daffa Pratama'],
    year: 2024,
    publisher: 'Jurnal Teknologi Informasi dan Ilmu Komputer (JTIK - Sinta 2)',
    type: 'Jurnal Nasional Sinta 1-2',
    specialization: 'RPL'
  },
  {
    id: 'pub-04',
    title: 'Smart Campus Agriculture Monitoring System using ESP32 Mesh Network and LoRaWAN Gateway',
    authors: ['Dian Nugraha', 'Kevin Sanjaya'],
    year: 2024,
    publisher: '2024 IEEE International Conference on Internet of Things (IEEE Xplore)',
    type: 'Konferensi IEEE/ACM',
    specialization: 'IoT'
  }
];

export const INNOVATION_PRODUCTS: InnovationProduct[] = [
  {
    id: 'prod-01',
    title: 'AgroVision AI: Detektor Hama & Penyakit Tanaman Padi Real-Time',
    developer: 'Tim Riset Lab AI (Dosen & Mahasiswa S1)',
    category: 'Mobile App',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=600',
    description: 'Aplikasi mobile berbasis TensorFlow Lite yang dapat mendeteksi 18 jenis penyakit tanaman padi hanya dengan mengambil foto daun.',
    techStack: ['Flutter', 'TensorFlow Lite', 'FastAPI', 'PyTorch'],
    demoUrl: 'https://example.com/agrovision',
    githubUrl: 'https://github.com/utn-ti/agrovision-ai',
    award: 'Juara 1 National Tech Innovation Award 2025'
  },
  {
    id: 'prod-02',
    title: 'CyberShield Sentinel: Automated PenTesting & Vulnerability Scanner',
    developer: 'Grup Riset Cyber Security',
    category: 'Cyber Tool',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    description: 'Platform keamanan siber internal untuk memindai celah keamanan server kampus dan memberikan rekomendasi perbaikan otomatis.',
    techStack: ['Python', 'Go', 'React', 'Docker', 'OWASP ZAP Core'],
    githubUrl: 'https://github.com/utn-ti/cybershield',
    award: 'Hibah Inovasi Kedaireka Dikti 2024'
  },
  {
    id: 'prod-03',
    title: 'SmartEnergy Campus: IoT Building Management System',
    developer: 'Lab IoT & Robotics',
    category: 'IoT Device',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    description: 'Sistem penghemat energi otomatis ruangan kelas menggunakan sensor suhu, hunian, dan kontrol daya berbasis ESP32.',
    techStack: ['ESP32', 'MQTT', 'Node-RED', 'Grafana', 'InfluxDB'],
    demoUrl: 'https://example.com/smartenergy'
  }
];

export const STUDENT_ORG_DATA: StudentOrg = {
  name: 'Ikatan Mahasiswa FTI Universitas Patria Artha',
  abbreviation: 'IMFTI UPA',
  logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200',
  description: 'Wadah organisasi resmi Ikatan Mahasiswa Fakultas Teknik dan Informatika Universitas Patria Artha (IMFTI UPA) yang bergerak dalam bidang akademik, kepemimpinan, riset mahasiswa, dan pengabdian masyarakat.',
  cabinetName: 'Kabinet Patria Inovatif',
  cabinetYear: '2025/2026',
  leaderName: 'Reyhan Pratama',
  leaderPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
  viceLeaderName: 'Alya Syahrani',
  divisions: [
    {
      name: 'Departemen Pengembangan Riset & Teknologi (Ristek)',
      description: 'Menyelenggarakan Bootcamp Coding, Study Club AI/Cyber/Web, dan pembinaan Lomba Hackathon.'
    },
    {
      name: 'Departemen Hubungan Luar & Industri (Humas)',
      description: 'Menjalin kerja sama dengan Ikatan Mahasiswa TI/FTI kampus lain, alumni, dan sponsor event IT.'
    },
    {
      name: 'Departemen Pengembangan Sumber Daya Mahasiswa (PSDM)',
      description: 'Mengelola kaderisasi, latihan kepemimpinan, dan kegiatan keakraban mahasiswa IMFTI UPA.'
    },
    {
      name: 'Departemen Minat & Bakat (Mikat)',
      description: 'Wadah e-sports, olahraga, seni digital, dan media informasi mahasiswa IMFTI UPA.'
    }
  ],
  upcomingEvents: [
    {
      title: 'PATRIA TECH HACKATHON 2026: AI & Smart Solutions',
      date: '25 - 27 September 2026',
      category: 'Hackathon',
      location: 'Auditorium Utama Universitas Patria Artha',
      registrationUrl: 'https://example.com/hackathon2026'
    },
    {
      title: 'National Seminar: Building Scalable Microservices with Go & Kubernetes',
      date: '12 Oktober 2026',
      category: 'Seminar',
      location: 'Hybrid (Zoom & Hall FTI Patria Artha)'
    },
    {
      title: 'Workshop Cyber Security: Hands-on Web Bug Bounty Hunting',
      date: '08 November 2026',
      category: 'Workshop',
      location: 'Lab Cyber Security FTI'
    }
  ]
};

export const STUDENT_ACHIEVEMENTS: StudentAchievement[] = [
  {
    id: 'ach-01',
    competition: 'Gemastik XVII (Pagelaran Mahasiswa Nasional TIK)',
    title: 'Juara 1 Divisi Penambangan Data (Data Mining) & Machine Learning',
    rank: 'Juara 1 Nasional (Gold Medal)',
    level: 'Nasional',
    year: 2025,
    studentNames: ['Muhammad Farhan', 'Nadia Putri', 'Aditya Perkasa'],
    mentorLecturer: 'Prof. Dr. Ir. Budi Santoso, M.Sc.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ach-02',
    competition: 'ASEAN Cyber Defense Competition 2025',
    title: 'Top 3 Best Capture The Flag (CTF) Ethical Hacking Team',
    rank: 'Juara 3 Se-Asia Tenggara',
    level: 'Internasional',
    year: 2025,
    studentNames: ['Rian Hidayat', 'Ahmad Zaki', 'Bagas Wibowo'],
    mentorLecturer: 'Dr. Eng. Siska Rahmawati, S.T., M.T.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ach-03',
    competition: 'Google Solution Challenge 2024',
    title: 'Global Top 50 Finalist for AI Flood Early Warning System',
    rank: 'Top 50 Global Finalist',
    level: 'Internasional',
    year: 2024,
    studentNames: ['Daffa Pratama', 'Siti Rahma', 'Lutfi Zubaidi'],
    mentorLecturer: 'Aris Setiawan, Ph.D.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
  }
];

export const ALUMNI_TESTIMONIALS: AlumniTestimonial[] = [
  // --- TEKNIK INFORMATIKA (2 Testimoni) ---
  {
    id: 'alum-tif-01',
    name: 'Rizky Ramadhan, S.Kom.',
    gradYear: 2021,
    role: 'Senior AI & Software Engineer (Alumni S1 Teknik Informatika UPA)',
    company: 'GoTo Group (Tokopedia/Gojek)',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Kurikulum berbasis riset dan fasilitas Lab AI & Cyber Security di Teknik Informatika Universitas Patria Artha memberikan fondasi sangat kuat dalam pemodelan Machine Learning, Cloud Architecture, dan pengolahan Big Data skala industri.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-tif-02',
    name: 'Siti Sarah Fitriani, S.Kom.',
    gradYear: 2022,
    role: 'Lead Cyber Security Analyst (Alumni S1 Teknik Informatika UPA)',
    company: 'Bank Central Asia (BCA)',
    companyLogo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Praktikum intensif di Lab Komputer UPA membuat saya terbiasa dengan skenario penanganan insiden siber riil. Pembelajaran arsitektur perangkat lunak dan etika peretasan di UPA membuat karir saya melesat pesat.',
    linkedinUrl: 'https://linkedin.com'
  },

  // --- TEKNIK ELEKTRO (2 Testimoni) ---
  {
    id: 'alum-te-01',
    name: 'Bagus Kurniawan, S.T.',
    gradYear: 2022,
    role: 'IoT & Automation Engineer (Alumni S1 Teknik Elektro UPA)',
    company: 'PT Schneider Electric Indonesia',
    companyLogo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Teknik Elektro Universitas Patria Artha memberikan bimbingan praktis langsung dalam perancangan mikrokontroler, IoT, dan sistem kontrol cerdas. Keterampilan riset terapan di UPA mempercepat kesiapan kami terjun di industri otomatisasi.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-te-02',
    name: 'Dian Pertiwi, S.T.',
    gradYear: 2023,
    role: 'Power System & Automation Specialist (Alumni S1 Teknik Elektro UPA)',
    company: 'PT PLN (Persero) Transmisi',
    companyLogo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Kuliah di Teknik Elektro Universitas Patria Artha sangat berkesan. Penguasaan instrumen daya, sistem kendali linear, serta pengerjaan proyek laboratorium terpadu menjadi modal berharga bekerja di BUMN sektor ketenagalistrikan.',
    linkedinUrl: 'https://linkedin.com'
  },

  // --- TEKNIK MESIN (2 Testimoni) ---
  {
    id: 'alum-tm-01',
    name: 'Andi Pratama, S.T.',
    gradYear: 2022,
    role: 'Design & Mechanical Reliability Engineer (Alumni S1 Teknik Mesin UPA)',
    company: 'PT Pertamina Heavy Industry',
    companyLogo: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Studi S1 Teknik Mesin Universitas Patria Artha membekali saya dengan pemahaman mendalam tentang mekanika bahan, simulasi CAD/CAM, dan analisis dinamika fluida. Praktikum di Lab Uji Material UPA sangat relevan dengan industri manufaktur & energi.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-tm-02',
    name: 'Fikri Syahputra, S.T.',
    gradYear: 2023,
    role: 'Automotive Maintenance Lead (Alumni S1 Teknik Mesin UPA)',
    company: 'PT Astra Heavy Machinery',
    companyLogo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=100',
    photo: '/uploads/noface-1787027055368-je087.jpg',
    quote: 'Pengalaman belajar di Teknik Mesin Universitas Patria Artha sangat luar biasa. Para dosen yang berpengalaman di bidang mesin termal dan manufaktur presisi membentuk mental keinsinyuran yang tangguh dan siap kerja.',
    linkedinUrl: 'https://linkedin.com'
  }
];

export const JOB_VACANCIES: JobVacancy[] = [
  {
    id: 'job-01',
    title: 'Junior AI / ML Software Engineer',
    company: 'PT Bukalapak.com Tbk',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=100',
    location: 'Jakarta South / Hybrid',
    type: 'Full-time',
    specialization: 'AI',
    postedDate: '01 Agu 2026',
    applyDeadline: '30 Agu 2026',
    requirements: ['Lulusan S1 Teknik Informatika / Ilmu Komputer', 'Menguasai Python, PyTorch / TensorFlow', 'Pemahaman REST API & Docker'],
    applyLink: 'https://example.com/jobs/bukalapak-ai'
  },
  {
    id: 'job-02',
    title: 'Cyber Security Operations Center (SOC) Internship',
    company: 'PT Telkom Indonesia (Persero) Tbk',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100',
    location: 'Bandung / Onsite',
    type: 'Internship',
    specialization: 'CyberSecurity',
    postedDate: '04 Agu 2026',
    applyDeadline: '15 Sep 2026',
    requirements: ['Mahasiswa Aktif Semester 6/7 atau Fresh Graduate', 'Familiar dengan SIEM (Splunk/Elastic), Wireshark', 'Lulus seleksi berkas'],
    applyLink: 'https://example.com/jobs/telkom-cyber'
  },
  {
    id: 'job-03',
    title: 'Frontend React Developer (TypeScript)',
    company: 'Traveloka Tech Hub',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    specialization: 'RPL',
    postedDate: '05 Agu 2026',
    applyDeadline: '25 Sep 2026',
    requirements: ['Pengalaman React.js, Next.js, TypeScript', 'Memahami Responsive Web Design & Tailwind', 'Mengerti Git Flow'],
    applyLink: 'https://example.com/jobs/traveloka-fe'
  }
];

export const PMB_TRACKS: PMBTrack[] = [
  {
    id: 'pmb-snbp',
    name: 'Jalur SNBP (Seleksi Nasional Berdasarkan Prestasi)',
    code: 'SNBP',
    description: 'Seleksi bebas tes berbasis nilai rapor SMA/SMK/MA serta portofolio prestasi akademik/non-akademik.',
    capacity: 60,
    period: 'Januari - Februari 2027',
    requirements: [
      'Siswa eligible kuota sekolah',
      'Nilai rata-rata rapor minimal 85 (fokus Matematika & IPA/Kejuruan)',
      'Sertifikat kejuaraan keilmuan/komputer jika ada'
    ],
    benefits: [
      'Bebas Biaya Pendaftaran',
      'Peluang memperoleh Beasiswa KIP Kuliah / Beasiswa Unggulan',
      'Pengangkatan Asisten Lab Prioritas'
    ],
    feeEstimate: 'UKT Golongan 1 - 5 (Rp 500.000 - Rp 6.500.000 / semester)'
  },
  {
    id: 'pmb-snbt',
    name: 'Jalur SNBT (Seleksi Nasional Berdasarkan Tes UTBK)',
    code: 'SNBT',
    description: 'Seleksi nasional berbasis skor Tes Potensi Skolastik (TPS) dan Penalaran Matematika UTBK.',
    capacity: 100,
    period: 'Maret - Mei 2027',
    requirements: [
      'Lulusan SMA/SMK/MA sederajat tahun berjalan atau 2 tahun sebelumnya',
      'Memiliki akun SNPMB aktif & mengikuti UTBK'
    ],
    benefits: [
      'Subsidi biaya pendidikan',
      'Fasilitas akses penuh laboratorium 24 jam'
    ],
    feeEstimate: 'UKT Golongan 3 - 6 (Rp 3.500.000 - Rp 7.800.000 / semester)'
  },
  {
    id: 'pmb-mandiri',
    name: 'Jalur Mandiri Prestasi & CBT Utama',
    code: 'MANDIRI',
    description: 'Jalur seleksi internal UPA menggunakan Computer Based Test (CBT) atau nilai UTBK plus portofolio keahlian coding.',
    capacity: 80,
    period: 'April - Juli 2027',
    requirements: [
      'Ijazah / Surat Keterangan Lulus (SKL) SMA/SMK',
      'Mengikuti Ujian CBT Online / Offline',
      'Bebas Narkoba & Sehat Jasmani'
    ],
    benefits: [
      'Beasiswa Potongan BPP hingga 50% bagi peraih nilai CBT Top 10',
      'Jadwal pilihan kelas Reguler Pagi / Malam'
    ],
    feeEstimate: 'Biaya Kuliah Rp 7.500.000 / semester (Tanpa Uang Pangkal bagi Jalur Prestasi)'
  }
];

export const ACADEMIC_CALENDAR_DATA: AcademicCalendarItem[] = [
  {
    id: 'cal-01',
    title: 'Awal Perkuliahan Semester Ganjil 2026/2027',
    startDate: '2026-09-01',
    endDate: '2026-09-01',
    category: 'Perkuliahan',
    semester: 'Ganjil 2026/2027'
  },
  {
    id: 'cal-02',
    title: 'Ujian Tengah Semester (UTS) Ganjil',
    startDate: '2026-10-20',
    endDate: '2026-10-31',
    category: 'Ujian',
    semester: 'Ganjil 2026/2027'
  },
  {
    id: 'cal-03',
    title: 'Hackathon & Pameran Karya Teknologi Mahasiswa',
    startDate: '2026-11-25',
    endDate: '2026-11-27',
    category: 'Perkuliahan',
    semester: 'Ganjil 2026/2027'
  },
  {
    id: 'cal-04',
    title: 'Ujian Akhir Semester (UAS) Ganjil',
    startDate: '2026-12-15',
    endDate: '2026-12-28',
    category: 'Ujian',
    semester: 'Ganjil 2026/2027'
  },
  {
    id: 'cal-05',
    title: 'Wisuda Sarjana Informatika Periode I 2027',
    startDate: '2027-02-14',
    endDate: '2027-02-14',
    category: 'Wisuda',
    semester: 'Ganjil 2026/2027'
  },
  {
    id: 'cal-06',
    title: 'Pembukaan Pendaftaran PMB Gelombang 1',
    startDate: '2027-01-10',
    endDate: '2027-03-31',
    category: 'PMB',
    semester: 'Genap 2025/2026'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-01',
    title: 'Fakultas Teknik dan Informatika Universitas Patria Artha Raih Akreditasi "Unggul" dari LAM INFOKOM dan Sertifikasi IABEE',
    slug: 'fti-patria-artha-raih-akreditasi-unggul',
    category: 'Berita',
    date: '02 Agustus 2026',
    author: 'Humas FTI Patria Artha',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    summary: 'Capaian tertinggi akreditasi nasional dan internasional menguatkan posisi Fakultas Teknik dan Informatika Universitas Patria Artha sebagai pusat keunggulan pendidikan komputer.',
    content: `Fakultas Teknik dan Informatika Universitas Patria Artha secara resmi berhasil meraih peringkat Akreditasi "Unggul" dari Lembaga Akreditasi Mandiri Informatika dan Komputer (LAM INFOKOM). 

Selain capaian akreditasi nasional tersebut, FTI Universitas Patria Artha juga mendapatkan sertifikasi akreditasi internasional dari IABEE (Indonesian Accreditation Board for Engineering Education) yang diakui secara global dalam Washington Accord.

Dekan FTI Universitas Patria Artha menyampaikan apresiasi setinggi-tingginya kepada seluruh sivitas akademika, tim dosen, mahasiswa, alumni, serta mitra industri. "Capaian ini menjadi bukti komitmen kami dalam menghadirkan kurikulum berbasis Outcome-Based Education (OBE) yang relevan dengan perkembangan industri AI, Cloud, dan Cyber Security," ujarnya.`,
    tags: ['Akreditasi', 'LAM INFOKOM', 'IABEE', 'Patria Artha'],
    featured: true
  },
  {
    id: 'news-02',
    title: 'Tim Mahasiswa FTI Universitas Patria Artha Sabet Medali Emas Gemastik XVII Divisi Machine Learning',
    slug: 'tim-mahasiswa-patria-artha-sabet-emas-gemastik',
    category: 'Prestasi',
    date: '28 Juli 2026',
    author: 'Tim Ristek HIMA FTI',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    summary: 'Inovasi model AI pendeteksi penyakit tanaman AgroVision berhasil mengantarkan tim Universitas Patria Artha menjuarai kompetisi TIK mahasiswa bergengsi nasional.',
    content: `Kabar membanggakan datang dari ajang Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi (Gemastik) XVII. Tim 'ByteForce' dari Fakultas Teknik dan Informatika Universitas Patria Artha berhasil meraih Medali Emas (Juara 1) pada Divisi Penambangan Data & Machine Learning.

Di bawah bimbingan dosen pembimbing, tim mempresentasikan karya berjudul "AgroVision: Real-Time Plant Disease Detection with Edge Neural Networks". Karya ini memanfaatkan arsitektur vision transformer yang dikompresi agar dapat berjalan dengan cepat pada smartphone tanpa koneksi internet.`,
    tags: ['Gemastik', 'Machine Learning', 'Patria Artha', 'Emas'],
    featured: true
  },
  {
    id: 'news-03',
    title: 'Pengumuman Kuliah Tamu Industri: "Building Production-Grade AI Systems with Generative AI"',
    slug: 'kuliah-tamu-generative-ai-production',
    category: 'Agenda',
    date: '10 Agustus 2026',
    author: 'Admin Akademik FTI',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    summary: 'Kuliah tamu menghadirkan Principal AI Architect dari Silicon Valley yang akan mengupas arsitektur RAG dan fine-tuning LLM skala besar.',
    content: `Diundang kepada seluruh mahasiswa Fakultas Teknik dan Informatika Universitas Patria Artha untuk menghadiri Kuliah Tamu Spesial Semester Ganjil 2026/2027.

Topik: Building Production-Grade AI Systems with Generative AI & RAG
Narasumber: Dr. Hendra Wijaya (Principal AI Architect, San Francisco, USA)
Hari/Tanggal: Jumat, 21 Agustus 2026
Waktu: 13.30 - 16.00 WITA
Tempat: Auditorium Gedung Utama Universitas Patria Artha & Live Zoom.

Pendaftaran gratis melalui SSO Kampus. Disediakan e-sertifikat 2 SKPK bagi mahasiswa aktif.`,
    tags: ['Kuliah Tamu', 'Generative AI', 'LLM', 'Event'],
    featured: false
  },
  {
    id: 'news-04',
    title: 'Kerjasama Strategis FTI Universitas Patria Artha dengan Google Cloud & AWS Cloud Academy',
    slug: 'kerjasama-patria-artha-google-aws-cloud',
    category: 'Berita',
    date: '15 Agustus 2026',
    author: 'Kerjasama & Humas UPA',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    summary: 'Mahasiswa FTI kini mendapatkan akses sertifikasi internasional Cloud Engineer dan DevOps secara gratis melalui program Kemitraan Industri Global.',
    content: `Fakultas Teknik dan Informatika Universitas Patria Artha resmi menandatangani Nota Kesepahaman (MoU) dengan Google Cloud Academy dan AWS Educate. 

Melalui kemitraan strategis ini, seluruh mahasiswa aktif prodi Teknik Informatika dan Teknik Sipil mendapatkan akses langsung ke platform pembelajaran Cloud Computing, pelatihan Kubernetes, AWS Solutions Architect, serta voucher sertifikasi resmi berstandar internasional.

Program ini terintegrasi langsung dengan mata kuliah Cloud Computing dan Sistem Terdistribusi pada semester 5.`,
    tags: ['Google Cloud', 'AWS', 'Kerjasama', 'Sertifikasi'],
    featured: true
  },
  {
    id: 'news-05',
    title: 'Jadwal dan Ketentuan Pelaksanaan Ujian Tengah Semester (UTS) Ganjil TA 2026/2027',
    slug: 'jadwal-ketentuan-uts-ganjil-2026-2027',
    category: 'Pengumuman',
    date: '17 Agustus 2026',
    author: 'Bagian Akademik & Evaluasi',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    summary: 'Informasi lengkap mengenai jadwal ujian, tata tertib perkuliahan, dan pengunduhan Kartu Ujian Digital bagi seluruh mahasiswa FTI.',
    content: `Diumumkan kepada seluruh mahasiswa Fakultas Teknik dan Informatika Universitas Patria Artha bahwa pelaksanaan Ujian Tengah Semester (UTS) Ganjil Tahun Akademik 2026/2027 akan dilangsungkan pada:

Tanggal: 07 - 18 September 2026
Metode: Tatap Muka & Computer Based Test (CBT) Kampus

Persyaratan Peserta Ujian:
1. Telah melunasi kewajiban keuangan semester Ganjil.
2. Membawa Kartu Ujian Digital yang telah diunduh via Portal Akademik UPA.
3. Kehadiran tatap muka minimal 75%.`,
    tags: ['Pengumuman', 'UTS', 'Akademik', 'Jadwal Ujian'],
    featured: false
  },
  {
    id: 'news-06',
    title: 'Workshop Internasional: "Cyber Security Threat Hunting & Ethical Hacking Framework 2026"',
    slug: 'workshop-cyber-security-threat-hunting-2026',
    category: 'Agenda',
    date: '18 Agustus 2026',
    author: 'Laboratorium Siber & Jaringan FTI',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    summary: 'Pelatihan hands-on keamanan siber yang dipandu oleh praktisi Certified Ethical Hacker (CEH) dan tim Forensik Keamanan Siber.',
    content: `Laboratorium Keamanan Siber FTI Universitas Patria Artha menggelar Workshop Praktis Threat Hunting & Penetration Testing.

Materi Pelatihan:
- Network Traffic Analysis with Wireshark & Suricata
- Automated Vulnerability Assessment & Patching
- Incident Response Protocols & Memory Forensics

Fasilitas: Virtual Lab Access, Sertifikat Kompetensi, Konsumsi, dan e-Book materi eksklusif.`,
    tags: ['Cyber Security', 'Workshop', 'Ethical Hacking', 'Laboratorium'],
    featured: false
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'PMB',
    question: 'Berapa daya tampung mahasiswa baru Fakultas Teknik dan Informatika Universitas Patria Artha per tahun?',
    answer: 'Daya tampung total per tahun ajaran adalah 300 mahasiswa, yang terbagi dalam jalur Seleksi Prestasi, SNBT, dan Jalur Mandiri Universitas Patria Artha.'
  },
  {
    id: 'faq-02',
    category: 'Kurikulum',
    question: 'Apakah calon mahasiswa harus sudah bisa koding sebelum mendaftar?',
    answer: 'Tidak wajib! Kurikulum semester 1 di FTI Universitas Patria Artha dirancang dari tingkat dasar (Algoritma & Pemrograman I). Yang terpenting adalah logika berpikir, minat belajar, dan ketekunan.'
  },
  {
    id: 'faq-03',
    category: 'PMB',
    question: 'Apakah ada fasilitas beasiswa untuk mahasiswa Fakultas Teknik dan Informatika?',
    answer: 'Ya! Tersedia Beasiswa KIP-Kuliah, Beasiswa Prestasi Patria Artha (Potongan UKT hingga 100%), Beasiswa Industri, dan Beasiswa Asisten Laboratorium.'
  },
  {
    id: 'faq-04',
    category: 'Fasilitas',
    question: 'Apakah mahasiswa memiliki akses laboratorium di luar jam perkuliahan?',
    answer: 'Mahasiswa dapat mengakses laboratorium FTI Universitas Patria Artha untuk riset, pengerjaan tugas besar, dan persiapan lomba hingga pukul 22.00 WITA dengan KTM Digital.'
  },
  {
    id: 'faq-05',
    category: 'Karir',
    question: 'Bagaimana prospek kerja alumni Fakultas Teknik dan Informatika Universitas Patria Artha?',
    answer: 'Lebih dari 97% alumni mendapatkan pekerjaan kurang dari 3 bulan setelah lulus dengan posisi seperti Software Engineer, AI Developer, Data Scientist, Cyber Security Specialist, dan Network Engineer.'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  {
    name: 'SIAKAD Patria Artha',
    desc: 'Sistem Informasi Akademik, KRS Online, & Transkrip Nilai',
    url: 'https://siakad.patria-artha.ac.id',
    iconName: 'GraduationCap',
    badge: 'Akademik'
  },
  {
    name: 'LMS E-Learning Patria Artha',
    desc: 'Portal Pembelajaran Digital, Materi Kuliah, & Tugas',
    url: 'https://lms.patria-artha.ac.id',
    iconName: 'BookOpen',
    badge: 'E-Learning'
  },
  {
    name: 'Repositori Riset FTI',
    desc: 'Arsip Ilmiah, Kode Sumber, & Dokumen Tugas Akhir',
    url: 'https://repository.fti.patria-artha.ac.id',
    iconName: 'FileCode2',
    badge: 'Riset'
  },
  {
    name: 'Perpustakaan Digital UPA',
    desc: 'Akses E-Book Komputer, Jurnal IEEE, & ACM Digital Library',
    url: 'https://digilib.patria-artha.ac.id',
    iconName: 'Library',
    badge: 'Pustaka'
  },
  {
    name: 'GitHub FTI Patria Artha',
    desc: 'Repositori Kode Sumber Terbuka & Lab Project',
    url: 'https://github.com/fti-patria-artha',
    iconName: 'Github',
    badge: 'Open Source'
  }
];

export const STUDY_PROGRAMS_DATA: StudyProgram[] = [
  {
    id: 'prodi-tif',
    code: 'TIF-S1',
    name: 'Teknik Informatika',
    degree: 'S1',
    accreditation: 'Unggul (LAM INFOKOM)',
    headOfProgram: 'Dayanti, S.Kom., M.Kom.',
    headOfProdi: 'Dayanti, S.Kom., M.Kom.',
    description: 'Program Studi S1 Teknik Informatika berfokus pada pengembangan kecerdasan buatan (AI), rekayasa perangkat lunak cloud, cyber security, dan data science.',
    totalSks: 144,
    activeStudents: 1250,
    capacity: 350,
    vision: 'Menjadi program studi unggulan dunia dalam bidang Artificial Intelligence & Software Engineering pada tahun 2030.',
    logoUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prodi-te',
    code: 'TE-S1',
    name: 'Teknik Elektro',
    degree: 'S1',
    accreditation: 'Sangat Baik (LAM Teknik)',
    headOfProgram: 'Ir. Irwan Syarif, S.Pd., M.T.',
    headOfProdi: 'Ir. Irwan Syarif, S.Pd., M.T.',
    description: 'Fokus pada sistem tertanam (Embedded Systems), Internet of Things (IoT), robotika otonom, dan jaringan energi listrik.',
    totalSks: 144,
    activeStudents: 420,
    capacity: 120,
    vision: 'Menghasilkan insinyur elektro & IoT berkemampuan riset tinggi berstandar IABEE.',
    logoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prodi-tm',
    code: 'TM-S1',
    name: 'Teknik Mesin',
    degree: 'S1',
    accreditation: 'Baik Sekali (LAM Teknik)',
    headOfProgram: 'Ir. Muhammd Arham, S.Pd., M.T.',
    headOfProdi: 'Ir. Muhammd Arham, S.Pd., M.T.',
    description: 'Mengintegrasikan perancangan mekanik, otomasi industri, konversi energi, dan manufaktur presisi modern.',
    totalSks: 144,
    activeStudents: 380,
    capacity: 120,
    vision: 'Pusat keunggulan inovasi teknik mesin dan manufaktur otomatisasi terdepan.',
    logoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80'
  }
];

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { id: 'm-beranda', label: 'Beranda', line1: 'Beranda Utama', line2: 'Halaman Depan & Pengumuman PMB', icon: 'Home', url: 'hero', isVisible: true, order: 1 },
  { 
    id: 'm-profil-fakultas', 
    label: 'Profil Fakultas', 
    line1: 'Profil Fakultas',
    line2: 'Visi Misi, Akreditasi & Pimpinan',
    icon: 'Building2',
    url: 'profil', 
    isVisible: true, 
    order: 2,
    children: [
      { id: 'm-visi-misi', label: 'Visi-Misi', line1: 'Visi & Misi', line2: 'Tujuan & Strategi Keunggulan', icon: 'Sparkles', url: 'profil', isVisible: true, order: 1 },
      { id: 'm-organisasi', label: 'Struktur Organisasi', line1: 'Struktur Organisasi', line2: 'Bagan Pimpinan & Pengelola', icon: 'Users', url: 'organisasi', isVisible: true, order: 2 }
    ]
  },
  { id: 'm-dosen', label: 'Dosen', line1: 'Dosen & Pengajar', line2: 'Profil Tenaga Pendidik & Riset', icon: 'GraduationCap', url: 'dosen', isVisible: true, order: 3 },
  { 
    id: 'm-prodi-group', 
    label: 'Program Studi', 
    line1: 'Program Studi',
    line2: 'Informatika, Elektro & Mesin',
    icon: 'BookOpen',
    url: 'prodi', 
    isVisible: true, 
    order: 4,
    children: [
      { id: 'm-prodi-tif', label: 'Teknik Informatika', line1: 'Teknik Informatika (S1)', line2: 'AI, RPL & Cyber Security', icon: 'Cpu', url: 'prodi-tif', isVisible: true, order: 1 },
      { id: 'm-prodi-te', label: 'Teknik Elektro', line1: 'Teknik Elektro (S1)', line2: 'IoT, Otomasi & Robotika', icon: 'ShieldCheck', url: 'prodi-te', isVisible: true, order: 2 },
      { id: 'm-prodi-tm', label: 'Teknik Mesin', line1: 'Teknik Mesin (S1)', line2: 'Konstruksi & Konversi Energi', icon: 'Layers', url: 'prodi-tm', isVisible: true, order: 3 }
    ]
  },
  { id: 'm-berita', label: 'Berita', line1: 'Berita & Artikel', line2: 'Kabar Terbaru & Agenda Kampus', icon: 'Newspaper', url: 'berita', isVisible: true, order: 5 },
  { id: 'm-laboratorium', label: 'Laboratorium', line1: 'Laboratorium', line2: 'Fasilitas Praktikum & Riset', icon: 'FlaskConical', url: 'laboratorium', isVisible: true, order: 6 },
  { id: 'm-kontak', label: 'Kontak', line1: 'Kontak Kami', line2: 'Lokasi Kampus & Pusat Informasi', icon: 'PhoneCall', url: 'kontak', isVisible: true, order: 7 }
];

export const DEFAULT_MEDIA: MediaFile[] = [
  {
    id: 'med-01',
    fileName: 'kingfisher-bird.webp',
    originalName: 'kingfisher-bird.jpg',
    sizeBytes: 124500,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-01 10:15',
    dimensions: { width: 1200, height: 800 }
  },
  {
    id: 'med-02',
    fileName: 'rainbow-parrot.webp',
    originalName: 'rainbow-parrot.jpg',
    sizeBytes: 185200,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-02 14:20',
    dimensions: { width: 1200, height: 800 }
  },
  {
    id: 'med-03',
    fileName: 'macaw-flying.webp',
    originalName: 'macaw-flying.jpg',
    sizeBytes: 98400,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-05 09:45',
    dimensions: { width: 1000, height: 667 }
  },
  {
    id: 'med-04',
    fileName: 'lab-ai-patria-artha.webp',
    originalName: 'lab-ai-patria-artha.png',
    sizeBytes: 142000,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-06 11:30',
    dimensions: { width: 1200, height: 800 }
  },
  {
    id: 'med-05',
    fileName: 'gedung-fti-kampus.webp',
    originalName: 'gedung-fti-kampus.jpg',
    sizeBytes: 195000,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-07 16:10',
    dimensions: { width: 1200, height: 800 }
  },
  {
    id: 'med-06',
    fileName: 'dosen-seminar-ai.webp',
    originalName: 'dosen-seminar-ai.png',
    sizeBytes: 112000,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-08 08:00',
    dimensions: { width: 1000, height: 667 }
  },
  {
    id: 'med-07',
    fileName: 'cat-portrait.webp',
    originalName: 'cat-portrait.jpg',
    sizeBytes: 135000,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-08 10:20',
    dimensions: { width: 1000, height: 1000 }
  },
  {
    id: 'med-08',
    fileName: 'dog-golden-retriever.webp',
    originalName: 'dog-golden.jpg',
    sizeBytes: 168000,
    type: 'image/webp',
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    uploadedAt: '2026-08-08 12:45',
    dimensions: { width: 1000, height: 1000 }
  }
];
