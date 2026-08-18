export interface CustomPageItem {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  views?: number;
  updatedAt?: string;
  content: any; // Puck Data structure or string
}

export const defaultCustomPages: CustomPageItem[] = [
  {
    id: 'cp_sambutan',
    title: 'Sambutan Dekan FTI',
    slug: 'sambutan',
    published: true,
    views: 890,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Sambutan Dekan FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-sambutan',
            title: 'Sambutan Dekan Fakultas Teknik & Informatika',
            subtitle: 'Komitmen menyelenggarakan pendidikan berkualitas global dan berintegritas.',
            badge: 'Sambutan Dekan',
            breadcrumb: 'Beranda / Sambutan Dekan',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'SambutanBlock',
          props: {
            id: 'dean-welcome-main',
            badgeText: 'Sambutan Pimpinan',
            heading: 'Membangun Generasi Unggul Berbasis',
            highlightHeading: 'Inovasi & Teknologi',
            paragraph1: '"Selamat datang di Fakultas Teknik & Informatika. Kami berkomitmen untuk menyelenggarakan pendidikan tinggi berkualitas global yang mengintegrasikan kecerdasan akademis dengan integritas moral."',
            paragraph2: 'Di era transformasi digital yang bergerak cepat, kami terus beradaptasi dengan menghadirkan kurikulum berbasis industri, riset mutakhir, serta kolaborasi lintas disiplin demi mencetak lulusan yang siap bersaing secara global.',
            pimpinanName: 'Prof. Dr. Ir. H. Ahmad Dahlan, M.T.',
            pimpinanTitle: 'Pimpinan Fakultas Teknik & Informatika',
            pimpinanPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
            buttonText: 'Baca Sambutan Selengkapnya',
            buttonLink: '#sambutan-lengkap',
            signatureText: 'A. Dahlan',
            signatureLabel: 'Tanda Tangan Resmi',
            themeStyle: 'dark',
            showSignature: 'true',
            showDecorativeBlobs: 'true',
            bgStyle: 'transparent',
            fontFamily: 'sans',
            textAlign: 'left',
            paddingY: 'xl',
            paddingX: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_detail_berita',
    title: 'Detail Berita',
    slug: 'detail-berita',
    published: true,
    views: 0,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Detail Berita' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-news-detail',
            title: 'Detail Artikel & Berita Kampus',
            subtitle: 'Informasi resmi dari Redaksi Humas Fakultas Teknik & Informatika.',
            badge: 'Berita FTI',
            breadcrumb: 'Beranda / Berita / Detail',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'DbNewsDetailBlock',
          props: {
            id: 'news-detail-1',
            bgStyle: 'white',
            borderRadius: 'lg',
            paddingY: 'lg',
            paddingX: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_beranda',
    title: 'Halaman Utama / Beranda Custom',
    slug: 'beranda',
    published: true,
    views: 1250,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Halaman Utama FTI UPA' } },
      content: [
        {
          type: 'HeroSlideshowBlock',
          props: {
            id: 'hero-slideshow-1',
            autoPlay: true,
            autoPlayIntervalMs: '6500',
            heightPreset: 'large'
          }
        },
        {
          type: 'AlertBannerBlock',
          props: {
            id: 'alert-1',
            message: '📢 Pendaftaran Mahasiswa Baru (PMB) Gelombang 2 Jalur Beasiswa Prestasi Resmi Dibuka!',
            type: 'urgent',
            linkText: 'Daftar SPMB Online →',
            bgStyle: 'white',
            borderRadius: 'md',
            paddingY: 'sm',
            paddingX: 'md'
          }
        },
        {
          type: 'StatsGridBlock',
          props: {
            id: 'stats-1',
            stat1Number: '98.4%',
            stat1Label: 'Lulusan Bekerja < 3 Bulan',
            stat2Number: 'Unggul',
            stat2Label: 'Akreditasi LAM INFOKOM',
            stat3Number: '24+',
            stat3Label: 'Mitra Industri Tech & AI',
            stat4Number: '144 SKS',
            stat4Label: 'Kurikulum Merdeka Kampus',
            bgStyle: 'slate',
            paddingY: 'lg'
          }
        },
        {
          type: 'SubMenuGridBlock',
          props: {
            id: 'subnav-1',
            heading: 'Pilihan Menu & Navigasi Utama',
            subheading: 'Jelajahi informasi lengkap mengenai Fakultas Teknik & Informatika Universitas Patria Artha',
            item1Title: 'Profil & Visi Misi',
            item1Desc: 'Sejarah berdiri, visi kepemimpinan, dan nilai keunggulan akademik.',
            item1Link: 'profil',
            item2Title: 'Program Studi S1',
            item2Desc: 'Teknik Informatika, Teknik Elektro, dan Teknik Mesin.',
            item2Link: 'prodi',
            item3Title: 'Direktori Dosen',
            item3Desc: 'Gelar, kepakaran, dan rekam jejak riset dosen pengajar.',
            item3Link: 'dosen',
            item4Title: 'Laboratorium & Riset',
            item4Desc: 'Fasilitas komputer high-end GPU Nvidia & laboratorium teknik.',
            item4Link: 'laboratorium',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_profil',
    title: 'Profil Fakultas Teknik & Informatika',
    slug: 'profil',
    published: true,
    views: 1240,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Profil FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-profil',
            title: 'Profil Fakultas Teknik & Informatika',
            subtitle: 'Pusat keunggulan pendidikan tinggi di bidang sains komputasi, kecerdasan buatan, dan teknologi rekayasa.',
            badge: 'Profil Fakultas',
            breadcrumb: 'Beranda / Profil',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'SambutanBlock',
          props: {
            id: 'dean-welcome-profil',
            badgeText: 'Sambutan Pimpinan FTI UPA',
            heading: 'Mencetak Talenta Digital Unggul Berbasis',
            highlightHeading: 'Inovasi & Integritas',
            paragraph1: '"Selamat datang di Fakultas Teknik & Informatika Universitas Patria Artha. Kami berkomitmen untuk menyelenggarakan pendidikan tinggi berkualitas global yang mengintegrasikan keunggulan komputasi dengan nilai-nilai etika profesional."',
            paragraph2: 'Di era transformasi digital dan revolusi industri AI yang bergerak cepat, FTI UPA secara konsisten menerapkan kurikulum berbasis Outcome-Based Education (OBE), fasilitas riset modern, serta kemitraan dengan industri teknologi terkemuka demi menjamin lulusan yang langsung terserap di dunia kerja.',
            pimpinanName: 'Dr. Eng. Ir. Herman Pratama, S.T., M.T.',
            pimpinanTitle: 'Pimpinan Fakultas Teknik & Informatika UPA',
            pimpinanPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
            buttonText: 'Lihat Profil Lengkap Dekanat',
            buttonLink: 'organisasi',
            signatureText: 'Herman Pratama',
            signatureLabel: 'Dekan FTI Universitas Patria Artha',
            themeStyle: 'dark',
            showSignature: 'true',
            showDecorativeBlobs: 'true',
            paddingY: 'xl',
            paddingX: 'lg'
          }
        },
        {
          type: 'StatsGridBlock',
          props: {
            id: 'stats-profil',
            stat1Number: 'UNGGUL',
            stat1Label: 'Akreditasi LAM INFOKOM',
            stat2Number: '98.4%',
            stat2Label: 'Keterserapan Kerja < 3 Bulan',
            stat3Number: '40+',
            stat3Label: 'Workstation High-End GPU AI Lab',
            stat4Number: '24+',
            stat4Label: 'Mitra Industri Tech & AI',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        },
        {
          type: 'ProfileVisionBlock',
          props: {
            id: 'vision-accred-profil',
            badgeText: '🏆 Mutu & Standar Global',
            heading: 'Akreditasi Unggul & Sertifikasi Internasional',
            description: 'Fakultas Teknik & Informatika UPA memenuhi standar penjaminan mutu nasional dan kualifikasi akreditasi internasional untuk mencetak lulusan berdaya saing global.',
            bgStyle: 'white',
            paddingY: 'lg'
          }
        },
        {
          type: 'FeaturesGridBlock',
          props: {
            id: 'features-profil-4pilars',
            heading: '4 Pilar Utama Keunggulan FTI UPA',
            subheading: 'Ekosistem akademik modern dirancang khusus untuk mempercepat karir mahasiswa di bidang teknologi',
            item1Title: '1. Kurikulum Industri & OBE',
            item1Desc: 'Struktur kurikulum 144 SKS diselaraskan langsung dengan sertifikasi AWS, Cisco, Oracle, dan standar MBKM.',
            item2Title: '2. Laboratorium Riset AI & Cyber Security',
            item2Desc: 'Fasilitas komputer spesifikasi tinggi Nvidia RTX 4090, Fortinet firewall, dan laboratorium otomasi teknik.',
            item3Title: '3. Dosen Berkualifikasi S2/S3 & Praktisi',
            item3Desc: 'Tenaga pendidik bergelar Magister dan Doktor lulusan perguruan tinggi ternama dalam dan luar negeri.',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'md'
          }
        },
        {
          type: 'RichTextBlock',
          props: {
            id: 'rich-history-profil',
            heading: 'Sejarah Singkat & Komitmen Kualitas',
            content: 'Fakultas Teknik & Informatika Universitas Patria Artha (FTI UPA) didirikan dengan visi menjadi pusat keunggulan pendidikan tinggi di bidang rekayasa teknologi dan sains komputasi. Menggabungkan teori akademis dengan praktikum berbasis problem-solving, FTI UPA terus berkembang pesat dan melahirkan lulusan unggul yang kini berkiprah sebagai Software Engineer, Data Scientist, AI Specialist, Cyber Security Analyst, dan Tech Entrepreneur di berbagai perusahaan nasional maupun internasional.',
            bgStyle: 'white',
            paddingY: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_visi_misi',
    title: 'Visi, Misi & Sasaran Strategis',
    slug: 'visi-misi',
    published: true,
    views: 640,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Visi Misi FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-vm',
            title: 'Visi, Misi & Sasaran Strategis',
            subtitle: 'Arah pembangunan pendidikan dan riset Fakultas Teknik & Informatika UPA hingga 2035.',
            badge: 'Visi & Misi',
            breadcrumb: 'Beranda / Profil / Visi Misi',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'FeaturesGridBlock',
          props: {
            id: 'features-vm',
            heading: '4 Pilar Misi Utama FTI UPA',
            subheading: 'Landasan operasional dalam tri dharma perguruan tinggi',
            item1Title: '1. Pendidikan Berkualitas',
            item1Desc: 'Menyelenggarakan pendidikan sains & teknik berbasis Outcome-Based Education (OBE) dan kurikulum MBKM.',
            item2Title: '2. Riset Inovatif & AI',
            item2Desc: 'Mengembangkan riset terapan berkelanjutan di bidang Artificial Intelligence, Cyber Security, dan IoT.',
            item3Title: '3. Pengabdian Masyarakat',
            item3Desc: 'Menerapkan solusi teknologi tepat guna untuk mendukung digitalisasi UMKM dan masyarakat daerah.',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'md'
          }
        },
        {
          type: 'AccordionFaqBlock',
          props: {
            id: 'faq-vm',
            heading: 'Sasaran Mutu & Target Akademik',
            q1: 'Berapa target lama tunggu kerja alumni FTI UPA?',
            a1: 'Target sasaran mutu menetapkan 95% lulusan terserap kerja atau berwirausaha dalam waktu kurang dari 3 bulan setelah wisuda.',
            q2: 'Bagaimana integrasi sertifikasi profesi di FTI UPA?',
            a2: 'Setiap lulusan wajib mengantongi minimal 1 sertifikasi kompetensi bertaraf nasional (BNSP) atau internasional (AWS/Cisco/Oracle).',
            q3: 'Apakah mahasiswa dilibatkan dalam riset dosen?',
            a3: 'Ya, melalui jalur Skripsi Riset dan MBKM Magang Riset, mahasiswa berkolaborasi langsung mempublikasikan jurnal Scopus.',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_organisasi',
    title: 'Struktur Organisasi Fakultas',
    slug: 'organisasi',
    published: true,
    views: 520,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Struktur Organisasi FTI' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-so',
            title: 'Struktur Organisasi FTI UPA',
            subtitle: 'Jajaran pimpinan Dekanat, Ketua Program Studi, dan Unit Operasional Akademik.',
            badge: 'Tata Kelola',
            breadcrumb: 'Beranda / Profil / Organisasi',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'FacultyOrgChartBlock',
          props: {
            id: 'org-chart-1',
            heading: 'Pimpinan Dekanat FTI UPA 2026-2030',
            subheading: 'Kepemimpinan berdedikasi menciptakan ekosistem belajar kondusif & berdaya saing',
            leader1Name: 'Dr. Eng. Ir. Herman Pratama, S.T., M.T.',
            leader1Title: 'Dekan Fakultas Teknik & Informatika',
            leader1Role: 'S3 Kyushu University Japan • Pakar Smart Grids & AI Systems',
            leader2Name: 'Ir. Siti Rahmawati, S.Kom., M.Kom.',
            leader2Role: 'S2 Institut Teknologi Bandung • Pakar Enterprise Architecture & UI/UX',
            leader2Title: 'Wakil Dekan I (Bidang Akademik & Riset)',
            leader3Name: 'Budi Santoso, S.T., M.Eng.',
            leader3Role: 'S2 Universitas Gadjah Mada • Pakar Otomasi Industri & Robotika',
            leader3Title: 'Wakil Dekan II (Bidang Kemahasiswaan & Keuangan)',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_dosen',
    title: 'Direktori Dosen & Staf Pengajar',
    slug: 'dosen',
    published: true,
    views: 1100,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Direktori Dosen FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-dosen',
            title: 'Direktori Dosen & Peneliti FTI UPA',
            subtitle: 'Tenaga pendidik profesional bergelar Magister dan Doktor lulusan kampus ternama.',
            badge: 'Direktori Dosen',
            breadcrumb: 'Beranda / Dosen',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'LecturerGridBlock',
          props: {
            id: 'lecturer-grid-1',
            heading: 'Dosen Pengajar Utama',
            subheading: 'Para akademisi yang berdedikasi mengajar dan membimbing riset mahasiswa FTI UPA',
            dosen1Name: 'Prof. Dr. Ir. H. Hendra Wijaya, M.T.',
            dosen1Title: 'Guru Besar / NIDN: 0912047501',
            dosen1Expertise: 'Artificial Intelligence, Machine Learning, Computer Vision',
            dosen2Name: 'Dr. Rina Anggraini, S.Kom., M.T.',
            dosen2Title: 'Lektor Kepala / NIDN: 0928088202',
            dosen2Expertise: 'Cyber Security, Cryptography, Cloud Computing',
            dosen3Name: 'Ir. Muhammad Aris, S.T., M.Eng.',
            dosen3Title: 'Lektor / NIDN: 0915118803',
            dosen3Expertise: 'Embedded Systems, Internet of Things (IoT), Robotics',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_prodi',
    title: 'Program Studi Unggulan FTI UPA',
    slug: 'prodi',
    published: true,
    views: 1420,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Program Studi FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-prodi',
            title: 'Program Studi Sarjana (S1)',
            subtitle: 'Pilihan program studi terakreditasi dengan kurikulum mutakhir industri digital.',
            badge: 'Program Studi',
            breadcrumb: 'Beranda / Program Studi',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'AcademicProgramBlock',
          props: {
            id: 'prodi-tif-card',
            programTitle: 'Teknik Informatika (S1)',
            degree: 'Sarjana Komputer (S.Kom)',
            accreditation: 'A (Unggul LAM INFOKOM)',
            totalSks: '144 SKS (8 Semester)',
            headOfProdi: 'Dr. Rina Anggraini, S.Kom., M.T.',
            vision: 'Menjadi Program Studi Informatika unggulan dalam bidang Artificial Intelligence dan Software Engineering di Indonesia.',
            careerProspects: 'AI Engineer, Full-Stack Developer, Cybersecurity Analyst, Data Scientist, Cloud Architect',
            ctaText: 'Buka Detail Prodi Informatika →',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg',
            boxShadow: 'md'
          }
        },
        {
          type: 'AcademicProgramBlock',
          props: {
            id: 'prodi-te-card',
            programTitle: 'Teknik Elektro (S1)',
            degree: 'Sarjana Teknik (S.T)',
            accreditation: 'Baik Sekali (LAM Teknik)',
            totalSks: '144 SKS (8 Semester)',
            headOfProdi: 'Ir. Muhammad Aris, S.T., M.Eng.',
            vision: 'Menghasilkan sarjana teknik elektro terampil dalam bidang Internet of Things (IoT), Energi Terbarukan, dan Sistem Otomasi.',
            careerProspects: 'IoT Engineer, Renewable Energy Specialist, Control System Engineer, Telecommunication Expert',
            ctaText: 'Buka Detail Prodi Elektro →',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'lg',
            boxShadow: 'md'
          }
        },
        {
          type: 'AcademicProgramBlock',
          props: {
            id: 'prodi-tm-card',
            programTitle: 'Teknik Mesin (S1)',
            degree: 'Sarjana Teknik (S.T)',
            accreditation: 'Baik Sekali (LAM Teknik)',
            totalSks: '144 SKS (8 Semester)',
            headOfProdi: 'Ir. Bambang Setyawan, M.T.',
            vision: 'Pusat pendidikan teknik mesin fokus pada manufaktur presisi, konversi energi, dan CAD/CAM mekatronika.',
            careerProspects: 'Maintenance Engineer, CAD/CAM Specialist, Automotive Engineer, Manufacturing Manager',
            ctaText: 'Buka Detail Prodi Mesin →',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg',
            boxShadow: 'md'
          }
        }
      ]
    }
  },
  {
    id: 'cp_prodi_tif',
    title: 'Program Studi S1 Teknik Informatika',
    slug: 'prodi-tif',
    published: true,
    views: 980,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'S1 Teknik Informatika' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-tif',
            title: 'S1 Teknik Informatika',
            subtitle: 'Fokus Peminatan: Artificial Intelligence, Cyber Security, Software Engineering, dan Data Science.',
            badge: 'Prodi Informatika',
            breadcrumb: 'Beranda / Prodi / Teknik Informatika',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'CurriculumTableBlock',
          props: {
            id: 'curr-tif',
            heading: 'Struktur Kurikulum & Mata Kuliah Utama TIF',
            prodiName: 'Teknik Informatika (S1)',
            semester1List: 'Algoritma & Pemrograman (3 SKS), Matematika Diskrit (3 SKS), Pengantar Teknologi Informasi (2 SKS), Kalkulus (3 SKS)',
            semester2List: 'Struktur Data & Algoritma (3 SKS), Pemrograman Berbasis Objek (3 SKS), Sistem Operasi (3 SKS), Basis Data (3 SKS)',
            totalSksTarget: '144 SKS Total Wajib Lulus',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_prodi_te',
    title: 'Program Studi S1 Teknik Elektro',
    slug: 'prodi-te',
    published: true,
    views: 740,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'S1 Teknik Elektro' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-te',
            title: 'S1 Teknik Elektro',
            subtitle: 'Menguasai Teknologi Internet of Things (IoT), Otomasi Industri, Microcontroller, & Smart Energy Grid.',
            badge: 'Prodi Elektro',
            breadcrumb: 'Beranda / Prodi / Teknik Elektro',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'CurriculumTableBlock',
          props: {
            id: 'curr-te',
            heading: 'Mata Kuliah Inti Teknik Elektro',
            prodiName: 'Teknik Elektro (S1)',
            semester1List: 'Rangkaian Listrik I (3 SKS), Fisika Dasar & Lab (4 SKS), Kalkulus Lanjut (3 SKS), Dasar Teknik Elektro (2 SKS)',
            semester2List: 'Elektronika Analog (3 SKS), Rangkaian Digital (3 SKS), Sistem Mikroprosesor (3 SKS), Medan Elektromagnetik (3 SKS)',
            totalSksTarget: '144 SKS Total Wajib Lulus',
            bgStyle: 'slate',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_prodi_tm',
    title: 'Program Studi S1 Teknik Mesin',
    slug: 'prodi-tm',
    published: true,
    views: 610,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'S1 Teknik Mesin' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-tm',
            title: 'S1 Teknik Mesin',
            subtitle: 'Keahlian Perancangan Mekanikal CAD/CAM, Konversi Energi, Otomotif, & Material Teknik.',
            badge: 'Prodi Mesin',
            breadcrumb: 'Beranda / Prodi / Teknik Mesin',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'CurriculumTableBlock',
          props: {
            id: 'curr-tm',
            heading: 'Struktur Kurikulum Teknik Mesin',
            prodiName: 'Teknik Mesin (S1)',
            semester1List: 'Gambar Teknik & CAD (3 SKS), Mekanika Teknik (3 SKS), Fisika Mekanika (3 SKS), Kimia Material (2 SKS)',
            semester2List: 'Termodinamika I (3 SKS), Kinematika & Dinamika (3 SKS), Process Manufaktur (3 SKS), Elemen Mesin I (3 SKS)',
            totalSksTarget: '144 SKS Total Wajib Lulus',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_berita',
    title: 'Berita & Event Kampus',
    slug: 'berita',
    published: true,
    views: 1350,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Berita & Event FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-berita',
            title: 'Berita & Informasi Kegiatan FTI UPA',
            subtitle: 'Kabar terbaru prestasi mahasiswa, seminar nasional, kegiatan pengabdian, dan info akademik.',
            badge: 'Berita Kampus',
            breadcrumb: 'Beranda / Berita',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'NewsListBlock',
          props: {
            id: 'news-list-1',
            heading: 'Artikel Berita Terpopuler',
            subheading: 'Update informasi seputar perkuliahan dan inovasi fakultas',
            news1Title: 'Tim Robotika FTI UPA Raih Juara 1 Kontes Robot Nasional 2026',
            news1Category: 'PRESTASI',
            news1Date: '10 Mei 2026',
            news2Title: 'Kuliah Umum AI bersama Senior Cloud Architect dari Google Cloud Indonesia',
            news2Category: 'SEMINAR',
            news2Date: '02 Mei 2026',
            news3Title: 'Jadwal Pendaftaran Wisuda & Pembekalan Lulusan Periode Semester Genap',
            news3Category: 'PENGUMUMAN',
            news3Date: '28 April 2026',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_laboratorium',
    title: 'Laboratorium & Fasilitas Riset',
    slug: 'laboratorium',
    published: true,
    views: 890,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Laboratorium FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-lab',
            title: 'Laboratorium & Pusat Riset FTI UPA',
            subtitle: 'Fasilitas komputasi dan praktikum canggih untuk mendukung pembelajaran berbasis hands-on.',
            badge: 'Fasilitas Riset',
            breadcrumb: 'Beranda / Laboratorium',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'LabCardBlock',
          props: {
            id: 'lab-ai',
            labName: 'Laboratorium Artificial Intelligence & Data Science',
            description: 'Dilengkapi 40 Workstation High-End GPU Nvidia RTX 4090, server cluster HPC, dan PyTorch framework untuk pelatihan model Deep Learning.',
            headOfLab: 'Dr. Ahmad Fauzi, S.Kom., M.T.',
            capacity: '40 Workstations',
            equipmentTags: 'Nvidia RTX 4090, High Performance Cluster, Python Rig, Tensor Core',
            bgStyle: 'white',
            paddingY: 'md',
            borderRadius: 'lg'
          }
        },
        {
          type: 'LabCardBlock',
          props: {
            id: 'lab-cyber',
            labName: 'Laboratorium Cyber Security & Computer Network',
            description: 'Perangkat Cisco Router/Switch enterprise, firewall Fortinet, dan lingkungan simulasi penetration testing terisolasi.',
            headOfLab: 'Dr. Rina Anggraini, S.Kom., M.T.',
            capacity: '35 Workstations',
            equipmentTags: 'Cisco Catalyst, FortiGate 60F, Wireshark, Kali Linux Environment',
            bgStyle: 'slate',
            paddingY: 'md',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_kontak',
    title: 'Kontak & Lokasi Kampus',
    slug: 'kontak',
    published: true,
    views: 780,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Kontak FTI UPA' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-kontak',
            title: 'Hubungi Kami (FTI UPA)',
            subtitle: 'Layanan informasi pendaftaran, admisi akademik, dan pimpinan Fakultas Teknik & Informatika.',
            badge: 'Layanan Kontak',
            breadcrumb: 'Beranda / Kontak',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'ContactMapBlock',
          props: {
            id: 'contact-box-1',
            heading: 'Layanan Sekretariat FTI Universitas Patria Artha',
            address: 'Jl. Tun Abdul Razak, (Terusan Jl. Hertasning Baru - Makassar), Kabupaten Gowa (SUL-SEL)',
            addressSub: 'Gedung Utama FTI Universitas Patria Artha',
            email: 'info@patria-artha.ac.id',
            phone: '(0411) 898-7654 / WA: 0812-3456-7890',
            operatingHoursWeekday: 'Senin - Jum\'at: 08:00 - 16:00 WITA',
            operatingHoursSaturday: 'Sabtu: 08:00 - 14:00 WITA',
            mapEmbedUrl: 'https://maps.google.com/maps?q=-5.1884872,119.4764326&hl=id&z=16&output=embed',
            directMapUrl: 'https://maps.google.com/?q=-5.1884872,119.4764326',
            gpsCoords: '-5.1884872, 119.4764326',
            bgStyle: 'white',
            paddingY: 'lg',
            borderRadius: 'lg'
          }
        }
      ]
    }
  },
  {
    id: 'cp_pendaftaran',
    title: 'Pendaftaran PMB Online (Iframe)',
    slug: 'pendaftaran',
    published: true,
    views: 2410,
    updatedAt: new Date().toISOString(),
    content: {
      root: { props: { title: 'Pendaftaran PMB Patria Artha' } },
      content: [
        {
          type: 'PageBannerBlock',
          props: {
            id: 'banner-pmb-reg',
            title: 'Pendaftaran Mahasiswa Baru (PMB)',
            subtitle: 'Formulir Online Penerimaan Calon Mahasiswa Baru Universitas Patria Artha',
            badge: 'PMB Online',
            breadcrumb: 'Beranda / Pendaftaran PMB',
            bannerHeight: 'compact',
            bgType: 'gradient',
            accentColor: 'maroon'
          }
        },
        {
          type: 'IframeBlock',
          props: {
            id: 'pmb-iframe-main',
            src: 'https://pmb.patria-artha.ac.id/join/reg/camaba.php',
            title: 'Formulir Pendaftaran Mahasiswa Baru (CAMABA)',
            subtitle: 'Portal Resmi Penerimaan Mahasiswa Baru Universitas Patria Artha',
            height: '850px',
            themeStyle: 'maroon',
            showCardHeader: true,
            showFooterNotice: true
          }
        }
      ]
    }
  }
];
