import type { Metadata } from 'next';
import CustomPageSlugClient from './CustomPageSlugClient';
import { defaultCustomPages } from '../../../data/defaultCustomPages';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || '';
  const cleanTargetSlug = rawSlug
    .replace(/^\/halaman\//i, '')
    .replace(/^halaman\//i, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .trim();

  let pageTitle = cleanTargetSlug.charAt(0).toUpperCase() + cleanTargetSlug.slice(1).replace(/-/g, ' ');
  let pageDesc = `Informasi resmi ${pageTitle} Fakultas Teknik & Informatika Universitas Patria Artha.`;

  const defaultPage = defaultCustomPages.find(p => p && (
    (p.slug || '').replace(/^\/halaman\//i, '').replace(/^halaman\//i, '').replace(/^\//, '').replace(/\/$/, '').trim() === cleanTargetSlug ||
    p.id === cleanTargetSlug
  ));
  if (defaultPage && defaultPage.title) {
    pageTitle = defaultPage.title;
  }

  const fullTitle = `${pageTitle} | FTI Universitas Patria Artha`;
  const canonicalUrl = `https://fti.patria-artha.ac.id/halaman/${cleanTargetSlug}`;

  return {
    title: fullTitle,
    description: pageDesc,
    keywords: [pageTitle, 'Fakultas Teknik', 'Informatika', 'Universitas Patria Artha', 'FTI UPA Makassar'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: 'Fakultas Teknik & Informatika UPA',
      locale: 'id_ID',
      type: 'article',
      images: [
        {
          url: '/images/hero-bg.jpg',
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDesc,
      images: ['/images/hero-bg.jpg'],
    },
  };
}

export default async function CustomSlugPage({ params }: Props) {
  const resolvedParams = await params;
  return <CustomPageSlugClient slug={resolvedParams?.slug || ''} />;
}
