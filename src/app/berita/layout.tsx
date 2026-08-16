import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berita & Informasi Kampus',
  description: 'Kumpulan berita terkini, pengumuman akademik, riset, dan agenda kegiatan Fakultas Teknik & Informatika Universitas Patria Artha.',
  openGraph: {
    title: 'Berita & Informasi Kampus | FTI Universitas Patria Artha',
    description: 'Kumpulan berita terkini, pengumuman akademik, riset, dan agenda kegiatan Fakultas Teknik & Informatika Universitas Patria Artha.',
    url: 'https://fti.patria-artha.ac.id/berita',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/berita',
  },
};

export default function BeritaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
