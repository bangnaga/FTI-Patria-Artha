import type { Metadata } from 'next';
import ProdiSlugClient from './ProdiSlugClient';
import { prisma } from '../../../db/prisma';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  
  let prodiTitle = slug.toUpperCase().replace(/-/g, ' ');
  let prodiDesc = `Informasi kurikulum, silabus, prospek karir, dan profil Program Studi ${prodiTitle} Fakultas Teknik & Informatika Universitas Patria Artha.`;

  try {
    const dbProdi = await prisma.studyProgram.findFirst({
      where: {
        OR: [
          { code: slug },
          { name: { contains: slug } }
        ]
      }
    });
    if (dbProdi && dbProdi.name) {
      prodiTitle = dbProdi.name;
    }
  } catch (e) {
    // Keep formatted slug title fallback
  }

  const fullTitle = `Program Studi ${prodiTitle} | FTI Universitas Patria Artha`;
  const canonicalUrl = `https://fti.patria-artha.ac.id/prodi/${slug}`;

  return {
    title: fullTitle,
    description: prodiDesc,
    keywords: [prodiTitle, 'Program Studi', 'Teknik', 'Informatika', 'Universitas Patria Artha', 'FTI UPA Makassar'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: prodiDesc,
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
      description: prodiDesc,
      images: ['/images/hero-bg.jpg'],
    },
  };
}

export default async function ProdiSlugPage({ params }: Props) {
  const resolvedParams = await params;
  return <ProdiSlugClient slug={resolvedParams?.slug || ''} />;
}
