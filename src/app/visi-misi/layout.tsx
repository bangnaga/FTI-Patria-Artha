import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visi, Misi & Tujuannya',
  description: 'Visi utama dan Misi strategis Fakultas Teknik & Informatika Universitas Patria Artha dalam mencetak lulusan berdaya saing global.',
  openGraph: {
    title: 'Visi, Misi & Tujuannya | FTI Universitas Patria Artha',
    description: 'Visi utama dan Misi strategis Fakultas Teknik & Informatika Universitas Patria Artha dalam mencetak lulusan berdaya saing global.',
    url: 'https://fti.patria-artha.ac.id/visi-misi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/visi-misi',
  },
};

export default function VisiMisiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
