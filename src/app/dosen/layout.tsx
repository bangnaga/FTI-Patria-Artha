import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direktori Dosen & Pengajar',
  description: 'Profil pengajar, dosen ahli, peneliti, serta publikasi karya ilmiah dosen Fakultas Teknik & Informatika Universitas Patria Artha.',
  openGraph: {
    title: 'Direktori Dosen & Pengajar | FTI Universitas Patria Artha',
    description: 'Profil pengajar, dosen ahli, peneliti, serta publikasi karya ilmiah dosen Fakultas Teknik & Informatika Universitas Patria Artha.',
    url: 'https://fti.patria-artha.ac.id/dosen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/dosen',
  },
};

export default function DosenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
