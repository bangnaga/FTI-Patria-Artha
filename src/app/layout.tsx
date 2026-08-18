import type { Metadata } from 'next'
import '../index.css'
import { AppProvider } from '../context/AppContext'
import { MainLayout } from '../components/MainLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://fti.patria-artha.ac.id'),
  title: {
    default: 'Fakultas Teknik & Informatika | Universitas Patria Artha',
    template: '%s | FTI Universitas Patria Artha',
  },
  description: 'Fakultas Teknik & Informatika Universitas Patria Artha. Menyelenggarakan pendidikan tinggi vokasi dan sarjana berkualitas global di bidang rekayasa teknologi, ilmu komputer, dan teknik sipil.',
  keywords: [
    'Fakultas Teknik',
    'Informatika',
    'Universitas Patria Artha',
    'FTI UPA Makassar',
    'Teknik Informatika',
    'Sistem Informasi',
    'Teknik Sipil',
    'Kampus Makassar',
    'Kuliah Teknik Makassar',
    'Patria Artha'
  ],
  authors: [{ name: 'Fakultas Teknik & Informatika UPA', url: 'https://fti.patria-artha.ac.id' }],
  creator: 'Universitas Patria Artha',
  publisher: 'Universitas Patria Artha',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://fti.patria-artha.ac.id',
    siteName: 'Fakultas Teknik & Informatika Universitas Patria Artha',
    title: 'Fakultas Teknik & Informatika | Universitas Patria Artha',
    description: 'Menyelenggarakan pendidikan tinggi vokasi dan sarjana berkualitas global di bidang rekayasa teknologi, ilmu komputer, dan teknik sipil.',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Fakultas Teknik & Informatika Universitas Patria Artha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fakultas Teknik & Informatika | Universitas Patria Artha',
    description: 'Menyelenggarakan pendidikan tinggi vokasi dan sarjana berkualitas global di Makassar.',
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://fti.patria-artha.ac.id',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Fakultas Teknik & Informatika Universitas Patria Artha',
    alternateName: 'FTI UPA Makassar',
    url: 'https://fti.patria-artha.ac.id',
    logo: 'https://fti.patria-artha.ac.id/logo.png',
    description: 'Menyelenggarakan pendidikan tinggi vokasi dan sarjana berkualitas di bidang rekayasa teknologi, teknik informatika, sistem informasi, dan teknik sipil.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Tun Abdul Razak',
      addressLocality: 'Makassar',
      addressRegion: 'Sulawesi Selatan',
      postalCode: '92111',
      addressCountry: 'ID'
    }
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Outfit:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-red-500/30">
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  )
}
