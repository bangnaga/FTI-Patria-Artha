import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak & Lokasi Kampus',
  description: 'Alamat kampus, lokasi peta google, nomor telepon/WhatsApp resmi, serta formulir pesan Fakultas Teknik & Informatika Universitas Patria Artha.',
  openGraph: {
    title: 'Kontak & Lokasi Kampus | FTI Universitas Patria Artha',
    description: 'Alamat kampus, lokasi peta google, nomor telepon/WhatsApp resmi, serta formulir pesan Fakultas Teknik & Informatika Universitas Patria Artha.',
    url: 'https://fti.patria-artha.ac.id/kontak',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id/kontak',
  },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
