import { PrismaClient } from '../src/db/generated/client/index.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Custom Pages to TiDB Cloud Database (SiteData)...');

  // Read defaultCustomPages.ts content
  const tsContent = fs.readFileSync(path.join(process.cwd(), 'src/data/defaultCustomPages.ts'), 'utf-8');
  
  const jsonStart = tsContent.indexOf('export const defaultCustomPages: CustomPageItem[] = ');
  if (jsonStart === -1) {
    throw new Error('Could not find defaultCustomPages in file');
  }

  const rawArrayCode = tsContent.slice(jsonStart + 'export const defaultCustomPages: CustomPageItem[] = '.length).trim();
  const defaultCustomPages = eval(`(function(){ return ${rawArrayCode}; })()`);

  for (const page of defaultCustomPages) {
    const key = `page_${page.id}`;
    const valueStr = JSON.stringify(page);
    await prisma.siteData.upsert({
      where: { key },
      update: { value: valueStr },
      create: { key, value: valueStr },
    });
    console.log(` Saved Custom Page to DB: [${key}] - ${page.title}`);
  }

  console.log('🌱 Seeding Navigation Menu Items to TiDB Cloud Database (MenuItem)...');

  const menuItems = [
    {
      id: 'm-beranda',
      label: 'Beranda',
      line1: 'Beranda',
      line2: 'Halaman utama portal FTI UPA',
      url: 'hero',
      order: 1,
      icon: 'Home',
      isVisible: true,
      isExternal: false
    },
    {
      id: 'm-profil-fakultas',
      label: 'Profil Fakultas',
      line1: 'Profil Fakultas',
      line2: 'Profil & pimpinan fakultas',
      url: 'profil',
      order: 2,
      icon: 'Building2',
      isVisible: true,
      isExternal: false,
      children: [
        { id: 'm-profil-utama', label: 'Profil Utama FTI', line1: 'Profil Utama FTI', line2: 'Sejarah, Visi & Keunggulan', url: 'profil', order: 1, icon: 'Building2' },
        { id: 'm-visi-misi', label: 'Visi & Misi 2035', line1: 'Visi & Misi 2035', line2: 'Rencana strategis & sasaran 2035', url: 'visi-misi', order: 2, icon: 'Sparkles' },
        { id: 'm-organisasi', label: 'Struktur Organisasi', line1: 'Struktur Organisasi', line2: 'Susunan Dekanat & Pimpinan', url: 'organisasi', order: 3, icon: 'Users' },
        { id: 'm-sambutan', label: 'Sambutan Dekan', line1: 'Sambutan Dekan', line2: 'Pesan sambutan dari Dekan FTI', url: 'sambutan', order: 4, icon: 'Award' }
      ]
    },
    {
      id: 'm-dosen',
      label: 'Dosen',
      line1: 'Dosen',
      line2: 'Direktori tenaga pendidik',
      url: 'dosen',
      order: 3,
      icon: 'GraduationCap',
      isVisible: true,
      isExternal: false
    },
    {
      id: 'm-prodi-group',
      label: 'Program Studi',
      line1: 'Program Studi',
      line2: 'Pilihan prodi sarjana S1',
      url: 'prodi',
      order: 4,
      icon: 'BookOpen',
      isVisible: true,
      isExternal: false,
      children: [
        { id: 'm-prodi-semua', label: 'Semua Program Studi', line1: 'Semua Program Studi', line2: 'Ikhtisar 3 Prodi Sarjana S1', url: 'prodi', order: 1, icon: 'BookOpen' },
        { id: 'm-prodi-tif', label: 'Teknik Informatika (S1)', line1: 'Teknik Informatika (S1)', line2: 'AI, Cyber Security & Software Eng', url: 'prodi-tif', order: 2, icon: 'Cpu', badge: 'UNGGUL' },
        { id: 'm-prodi-te', label: 'Teknik Elektro (S1)', line1: 'Teknik Elektro (S1)', line2: 'IoT, Robotika & Smart Energy', url: 'prodi-te', order: 3, icon: 'Zap' },
        { id: 'm-prodi-tm', label: 'Teknik Mesin (S1)', line1: 'Teknik Mesin (S1)', line2: 'CAD/CAM, Otomotif & Manufaktur', url: 'prodi-tm', order: 4, icon: 'Layers' }
      ]
    },
    {
      id: 'm-berita',
      label: 'Berita',
      line1: 'Berita',
      line2: 'Berita & agenda kegiatan',
      url: 'berita',
      order: 5,
      icon: 'Newspaper',
      isVisible: true,
      isExternal: false
    },
    {
      id: 'm-laboratorium',
      label: 'Laboratorium',
      line1: 'Laboratorium',
      line2: 'Fasilitas riset & lab komputer',
      url: 'laboratorium',
      order: 6,
      icon: 'FlaskConical',
      isVisible: true,
      isExternal: false
    },
    {
      id: 'm-kontak',
      label: 'Kontak',
      line1: 'Kontak',
      line2: 'Kontak & lokasi kampus',
      url: 'kontak',
      order: 7,
      icon: 'PhoneCall',
      isVisible: true,
      isExternal: false
    }
  ];

  for (const item of menuItems) {
    const { children, ...parentData } = item;
    await prisma.menuItem.upsert({
      where: { id: parentData.id },
      update: parentData,
      create: parentData,
    });

    if (children && children.length > 0) {
      for (const child of children) {
        await prisma.menuItem.upsert({
          where: { id: child.id },
          update: { ...child, parentId: parentData.id },
          create: { ...child, parentId: parentData.id },
        });
      }
    }
  }

  console.log('✅ ALL Menu Items & Custom Pages 100% Saved & Synced to TiDB Cloud Database!');
}

main().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
}).finally(() => prisma.$disconnect());
