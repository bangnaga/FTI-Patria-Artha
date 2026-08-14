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
  // Semester 1
  {
    id: 'if101',
    code: 'IF1101',
    name: 'Algoritma & Pemrograman I',
    sks: 4,
    semester: 1,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Dasar-dasar logika pemrograman, variabel, kontrol alur, fungsi, struktur data dasar menggunakan Python & C++.',
    prerequisites: [],
    syllabusTopic: ['Variables & Data Types', 'Control Flow & Loops', 'Functions & Recursion', 'Basic Data Structures', 'Problem Solving Techniques']
  },
  {
    id: 'if102',
    code: 'IF1102',
    name: 'Matematika Diskrit',
    sks: 3,
    semester: 1,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Konsep dasar matematika untuk ilmu komputer: logika proposisi, teori himpunan, relasi & fungsi, graf, dan kombinatorika.',
    prerequisites: [],
    syllabusTopic: ['Propositional Logic', 'Set Theory & Relations', 'Graph Theory', 'Combinatorics', 'Boolean Algebra']
  },
  {
    id: 'if103',
    code: 'IF1103',
    name: 'Pengantar Teknologi Informasi',
    sks: 2,
    semester: 1,
    category: 'Wajib Prodi',
    studyProgram: 'Semua Prodi',
    description: 'Gambaran umum ekosistem TI, sejarah komputer, sistem operasi, jaringan dasar, dan etika profesi TI.',
    prerequisites: [],
    syllabusTopic: ['History of Computing', 'Computer Architecture Overview', 'Operating System Fundamentals', 'Network Intro', 'IT Ethics']
  },
  {
    id: 'if104',
    code: 'KU1101',
    name: 'Kalkulus Informatika',
    sks: 3,
    semester: 1,
    category: 'Wajib Universitas',
    studyProgram: 'Semua Prodi',
    description: 'Fungsi, limit, turunan, dan integral serta aplikasinya dalam pemodelan matematis dan analisis performa algoritma.',
    prerequisites: [],
    syllabusTopic: ['Limits & Continuity', 'Derivatives & Applications', 'Integrals', 'Series & Sequences']
  },
  {
    id: 'te101',
    code: 'TE1101',
    name: 'Rangkaian Listrik & Sinyal',
    sks: 3,
    semester: 1,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Elektro',
    description: 'Teori dasar rangkaian DC/AC, hukum Ohm & Kirchhoff, analisis Nodal, serta pemrosesan sinyal analog.',
    prerequisites: [],
    syllabusTopic: ['DC & AC Circuits', 'Kirchhoff Laws', 'Phasors & Impedance', 'Signal Processing Intro']
  },
  {
    id: 'tm101',
    code: 'TM1101',
    name: 'Gambar Teknik & CAD 3D',
    sks: 3,
    semester: 1,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Mesin',
    description: 'Proyeksi orthografis, toleransi dimensi, serta pemodelan komponen mesin 3D dengan Autodesk Fusion 360.',
    prerequisites: [],
    syllabusTopic: ['2D Sketching & Dimensioning', '3D Solid Modeling', 'Assembly & Drafting', 'CAD Simulation']
  },

  // Semester 2
  {
    id: 'if201',
    code: 'IF1201',
    name: 'Algoritma & Struktur Data II',
    sks: 4,
    semester: 2,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Struktur data kompleks (Tree, Heap, Graph, Hash Table), dynamic programming, dan analisis kompleksitas Big-O.',
    prerequisites: ['Algoritma & Pemrograman I'],
    syllabusTopic: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Binary Search Trees', 'Graph Algorithms (BFS/DFS)', 'Big-O Analysis']
  },
  {
    id: 'if202',
    code: 'IF1202',
    name: 'Pemrograman Berorientasi Objek (PBO)',
    sks: 3,
    semester: 2,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Konsep Enkapsulasi, Inheritansi, Polimorfisme, Abstraksi, Design Patterns dasar menggunakan Java / TypeScript.',
    prerequisites: ['Algoritma & Pemrograman I'],
    syllabusTopic: ['Classes & Objects', 'Encapsulation & Inheritance', 'Polymorphism & Interfaces', 'SOLID Principles', 'Design Patterns Intro']
  },
  {
    id: 'if203',
    code: 'IF1203',
    name: 'Aljabar Linear & Matriks',
    sks: 3,
    semester: 2,
    category: 'Wajib Prodi',
    studyProgram: 'Semua Prodi',
    description: 'Sistem persamaan linear, matriks, vektor, eigenvalue/eigenvector, serta penerapannya dalam Grafik Komputer & Machine Learning.',
    prerequisites: ['Kalkulus Informatika'],
    syllabusTopic: ['Matrix Operations & Determinants', 'Vector Spaces', 'Eigenvalues & Eigenvectors', 'SVD & Dimensionality Reduction']
  },
  {
    id: 'te201',
    code: 'TE1201',
    name: 'Elektronika Digital & Mikrokontroler',
    sks: 3,
    semester: 2,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Elektro',
    description: 'Gerbang logika, flip-flop, register, pemrograman ARM/Arduino, dan antarmuka periferal digital.',
    prerequisites: [],
    syllabusTopic: ['Logic Gates & Boolean Algebra', 'Sequential Logic & Flip-Flops', 'Microcontroller Architecture', 'GPIO & Timers']
  },

  // Semester 3
  {
    id: 'if301',
    code: 'IF2101',
    name: 'Basis Data & SQL Modern',
    sks: 4,
    semester: 3,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Perancangan ERD, normalisasi data, query SQL tingkat lanjut, indexing, transaksi, ACID, serta pengenalan NoSQL.',
    prerequisites: ['Algoritma & Struktur Data II'],
    syllabusTopic: ['ERD Modeling', 'Relational Algebra & SQL', 'Normalization (1NF-BCNF)', 'Indexing & Performance', 'NoSQL & Document DBs']
  },
  {
    id: 'if302',
    code: 'IF2102',
    name: 'Jaringan Komputer & Komunikasi Data',
    sks: 4,
    semester: 3,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Model OSI & TCP/IP, IP Addressing (IPv4/IPv6), Subnetting, Routing Protocols, DNS, HTTP/S, dan Praktikum Jaringan Cisco.',
    prerequisites: [],
    syllabusTopic: ['OSI Layer & TCP/IP Stack', 'IP Subnetting & CIDR', 'Routing & Switching', 'Application Layer Protocols', 'Wireshark Analysis']
  },
  {
    id: 'if303',
    code: 'IF2103',
    name: 'Sistem Operasi & Virtualisasi',
    sks: 3,
    semester: 3,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Informatika',
    description: 'Manajemen proses, thread, penjadwalan CPU, memori virtual, deadlock, Linux CLI, dan teknologi Kontainerisasi (Docker).',
    prerequisites: [],
    syllabusTopic: ['Processes & Threads', 'CPU Scheduling', 'Memory Management', 'File Systems', 'Docker Containerization']
  },
  {
    id: 'tm301',
    code: 'TM2101',
    name: 'Termodinamika & Otomasi Mesin',
    sks: 3,
    semester: 3,
    category: 'Wajib Prodi',
    studyProgram: 'Teknik Mesin',
    description: 'Hukum termodinamika I & II, siklus energi, pneumatik, serta sistem kontrol PLC industri.',
    prerequisites: [],
    syllabusTopic: ['Thermodynamic Laws', 'Power Cycles', 'Pneumatics & Hydraulics', 'PLC Automation']
  },

  // Semester 4
  {
    id: 'if401',
    code: 'IF2201',
    name: 'Rekayasa Perangkat Lunak (RPL)',
    sks: 3,
    semester: 4,
    category: 'Wajib Prodi',
    specialization: 'RPL',
    studyProgram: 'Teknik Informatika',
    description: 'Metodologi SDLC, Agile / Scrum, UML Modeling, Requirement Engineering, Software Testing, dan CI/CD pipeline.',
    prerequisites: ['Pemrograman Berorientasi Objek (PBO)'],
    syllabusTopic: ['Agile & Scrum Framework', 'UML Architecture Diagrams', 'Requirement Analysis', 'Automated Testing', 'CI/CD Overview']
  },
  {
    id: 'if402',
    code: 'IF2202',
    name: 'Kecerdasan Buatan (AI) & Machine Learning',
    sks: 4,
    semester: 4,
    category: 'Wajib Prodi',
    specialization: 'AI',
    studyProgram: 'Teknik Informatika',
    description: 'Supervised & Unsupervised Learning, Supervised Classification, Regression, Clustering, Decision Trees, Neural Networks, PyTorch.',
    prerequisites: ['Aljabar Linear & Matriks'],
    syllabusTopic: ['Linear & Logistic Regression', 'Decision Trees & Random Forest', 'Support Vector Machines', 'Clustering (K-Means)', 'Neural Networks Intro']
  },
  {
    id: 'if403',
    code: 'IF2203',
    name: 'Pemrograman Web & API Service',
    sks: 3,
    semester: 4,
    category: 'Wajib Prodi',
    specialization: 'RPL',
    studyProgram: 'Teknik Informatika',
    description: 'Pengembangan Web Full-Stack modern (React, TypeScript, Node.js/Express, RESTful API, JWT Auth, Tailwind CSS).',
    prerequisites: ['Basis Data & SQL Modern'],
    syllabusTopic: ['HTML5/CSS3 & Modern Tailwind', 'React & State Management', 'Node.js Express REST APIs', 'Authentication & JWT', 'Web Deployment']
  },

  // Semester 5
  {
    id: 'if501',
    code: 'IF3101',
    name: 'Deep Learning & Computer Vision',
    sks: 3,
    semester: 5,
    category: 'Mata Kuliah Pilihan',
    specialization: 'AI',
    studyProgram: 'Teknik Informatika',
    description: 'Convolutional Neural Networks (CNN), Object Detection (YOLO), Segmentation, Vision Transformers, OpenCV & PyTorch.',
    prerequisites: ['Kecerdasan Buatan (AI) & Machine Learning'],
    syllabusTopic: ['CNN Architecture', 'Object Detection YOLO', 'Image Segmentation', 'Generative Adversarial Networks', 'PyTorch Deployment']
  },
  {
    id: 'if502',
    code: 'IF3102',
    name: 'Keamanan Siber & Ethical Hacking',
    sks: 3,
    semester: 5,
    category: 'Mata Kuliah Pilihan',
    specialization: 'CyberSecurity',
    studyProgram: 'Teknik Informatika',
    description: 'Penetration testing methodology, OWASP Top 10 vulnerabilities, Metasploit, Cryptography, Wireshark, SOC fundamentals.',
    prerequisites: ['Jaringan Komputer & Komunikasi Data'],
    syllabusTopic: ['Reconnaissance & Scanning', 'OWASP Web Exploitation', 'Network Penetration Testing', 'Cryptography Applications', 'Incident Response']
  },
  {
    id: 'if503',
    code: 'IF3103',
    name: 'Sistem Terdistribusi & Microservices',
    sks: 3,
    semester: 5,
    category: 'Mata Kuliah Pilihan',
    specialization: 'RPL',
    studyProgram: 'Teknik Informatika',
    description: 'Arsitektur Event-Driven, Message Broker (Kafka/RabbitMQ), gRPC, Kubernetes, Service Mesh, dan Fault Tolerance.',
    prerequisites: ['Rekayasa Perangkat Lunak (RPL)'],
    syllabusTopic: ['Monolith to Microservices', 'gRPC & Protocol Buffers', 'Kafka Event Streaming', 'Kubernetes Orchestration', 'Distributed Systems CAP Theorem']
  },

  // Semester 6
  {
    id: 'if601',
    code: 'IF3201',
    name: 'Internet of Things & Embedded Systems',
    sks: 3,
    semester: 6,
    category: 'Mata Kuliah Pilihan',
    specialization: 'IoT',
    studyProgram: 'Teknik Elektro',
    description: 'Mikrokontroler ESP32/Raspberry Pi, sensor & actuator, protokol MQTT/CoAP, Smart Campus IoT dashboard.',
    prerequisites: ['Jaringan Komputer & Komunikasi Data'],
    syllabusTopic: ['ESP32 Microcontroller Programming', 'MQTT Protocol & Cloud IoT', 'Sensors Integration', 'Edge Computing', 'IoT Security']
  },
  {
    id: 'if602',
    code: 'IF3202',
    name: 'Natural Language Processing (NLP) & LLM',
    sks: 3,
    semester: 6,
    category: 'Mata Kuliah Pilihan',
    specialization: 'AI',
    studyProgram: 'Teknik Informatika',
    description: 'Text Processing, Sentiment Analysis, Word Embeddings, Transformer Architecture, Prompt Engineering, Gemini & HuggingFace.',
    prerequisites: ['Kecerdasan Buatan (AI) & Machine Learning'],
    syllabusTopic: ['Tokenization & Lemmatization', 'Word2Vec & GloVe', 'Attention Mechanism & Transformers', 'RAG (Retrieval-Augmented Generation)', 'LLM Fine-tuning']
  },

  // Semester 7 & 8
  {
    id: 'if701',
    code: 'IF4101',
    name: 'Metodologi Penelitian & Seminar Proposal',
    sks: 3,
    semester: 7,
    category: 'Wajib Prodi',
    studyProgram: 'Semua Prodi',
    description: 'Penyusunan rencana riset Skripsi, kajian literatur ilmiah (Scopus/Sinta), penulisan sitasi IEEE, dan presentasi proposal.',
    prerequisites: [],
    syllabusTopic: ['Research Problem Formulation', 'Systematic Literature Review', 'Citation Management (Zotero/Mendeley)', 'Academic Writing', 'Proposal Defense']
  },
  {
    id: 'if702',
    code: 'IF4102',
    name: 'Kerja Praktik / Magang Industri (MBKM)',
    sks: 4,
    semester: 7,
    category: 'Wajib Prodi',
    studyProgram: 'Semua Prodi',
    description: 'Pengalaman kerja langsung selama 3-6 bulan di perusahaan teknologi mitra atau BUMN bidang IT.',
    prerequisites: [],
    syllabusTopic: ['Industry Placement', 'Sprint Tasks Execution', 'Logbook Documentation', 'Final Internship Presentation']
  },
  {
    id: 'if801',
    code: 'IF4201',
    name: 'Skripsi / Tugas Akhir',
    sks: 6,
    semester: 8,
    category: 'Wajib Prodi',
    studyProgram: 'Semua Prodi',
    description: 'Proyek riset mandiri atau pembuatan sistem perangkat lunak berakurasi tinggi di bawah bimbingan 2 dosen pembimbing.',
    prerequisites: ['Metodologi Penelitian & Seminar Proposal'],
    syllabusTopic: ['System Implementation', 'Experimental Evaluation', 'Thesis Writing', 'Sidang Skripsi Defense']
  }
];

export const LECTURERS_DATA: Lecturer[] = [
  {
    id: 'doc-01',
    name: 'Dr. Andi Nur Putri, S.Pd., M.T',
    nidn: '907058603',
    title: 'Dosen Tetap Teknik Elektro',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
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
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
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
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300',
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
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
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
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
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
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
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
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
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
