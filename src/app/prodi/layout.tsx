import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Studi Unggulan',
  description: 'Program studi jenjang Sarjana & Vokasi unggulan di Fakultas Teknik & Informatika Universitas Patria Artha: Teknik Informatika, Sistem Informasi, dan Teknik Sipil.',
  openGraph: {
    title: 'Program Studi Unggulan | FTI Universitas Patria Artha',
    description: 'Program studi jenjang Sarjana & Vokasi unggulan di Fakultas Teknik & Informatika Universitas Patria Artha: Teknik Informatika, Sistem Informasi, dan Teknik Sipil.',
    url: 'https://fti.patria-artha.ac.id/prodi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/prodi',
  },
};

export default function ProdiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
