import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sambutan Dekan Fakultas',
  description: 'Sambutan dan ucapan selamat datang dari Dekan Fakultas Teknik & Informatika Universitas Patria Artha.',
  openGraph: {
    title: 'Sambutan Dekan Fakultas | FTI Universitas Patria Artha',
    description: 'Sambutan dan ucapan selamat datang dari Dekan Fakultas Teknik & Informatika Universitas Patria Artha.',
    url: 'https://fti.patria-artha.ac.id/sambutan',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/sambutan',
  },
};

export default function SambutanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
