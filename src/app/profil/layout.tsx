import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Fakultas & Akreditasi',
  description: 'Sejarah, status akreditasi BAN-PT, sarana fasilitas, dan keunggulan kompetitif Fakultas Teknik & Informatika Universitas Patria Artha.',
  openGraph: {
    title: 'Profil Fakultas & Akreditasi | FTI Universitas Patria Artha',
    description: 'Sejarah, status akreditasi BAN-PT, sarana fasilitas, dan keunggulan kompetitif Fakultas Teknik & Informatika Universitas Patria Artha.',
    url: 'https://fti.patria-artha.ac.id/profil',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/profil',
  },
};

export default function ProfilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
