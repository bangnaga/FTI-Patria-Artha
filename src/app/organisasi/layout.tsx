import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Struktur Organisasi Dekanat',
  description: 'Bagan dan struktur pimpinan Fakultas Teknik & Informatika Universitas Patria Artha, mulai dari Dekan, Wakil Dekan, hingga Ketua Program Studi.',
  openGraph: {
    title: 'Struktur Organisasi Dekanat | FTI Universitas Patria Artha',
    description: 'Bagan dan struktur pimpinan Fakultas Teknik & Informatika Universitas Patria Artha, mulai dari Dekan, Wakil Dekan, hingga Ketua Program Studi.',
    url: 'https://fti.patria-artha.ac.id/organisasi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/organisasi',
  },
};

export default function OrganisasiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
