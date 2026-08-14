import { PrismaClient } from '@prisma/client';

const dbUrl = 'mysql://2dHXUj13bicUVjS.root:95txJcLPdTv47xHX@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/fti_upa?sslaccept=strict&sslmode=require';

const prisma = new PrismaClient({
  datasourceUrl: dbUrl,
});

const newTestimonials = [
  // --- TEKNIK INFORMATIKA (2 Testimoni) ---
  {
    id: 'alum-tif-01',
    name: 'Rizky Ramadhan, S.Kom.',
    gradYear: 2021,
    role: 'Senior AI & Software Engineer (Alumni S1 Teknik Informatika UPA)',
    company: 'GoTo Group (Tokopedia/Gojek)',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    quote: 'Kurikulum berbasis riset dan fasilitas Lab AI & Cyber Security di Teknik Informatika Universitas Patria Artha memberikan fondasi sangat kuat dalam pemodelan Machine Learning, Cloud Architecture, dan pengolahan Big Data skala industri.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-tif-02',
    name: 'Siti Sarah Fitriani, S.Kom.',
    gradYear: 2022,
    role: 'Lead Cyber Security Analyst (Alumni S1 Teknik Informatika UPA)',
    company: 'Bank Central Asia (BCA)',
    companyLogo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300',
    quote: 'Praktikum intensif di Lab Komputer UPA membuat saya terbiasa dengan skenario penanganan insiden siber riil. Pembelajaran arsitektur perangkat lunak dan etika peretasan di UPA membuat karir saya melesat pesat.',
    linkedinUrl: 'https://linkedin.com'
  },

  // --- TEKNIK ELEKTRO (2 Testimoni) ---
  {
    id: 'alum-te-01',
    name: 'Bagus Kurniawan, S.T.',
    gradYear: 2022,
    role: 'IoT & Automation Engineer (Alumni S1 Teknik Elektro UPA)',
    company: 'PT Schneider Electric Indonesia',
    companyLogo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    quote: 'Teknik Elektro Universitas Patria Artha memberikan bimbingan praktis langsung dalam perancangan mikrokontroler, IoT, dan sistem kontrol cerdas. Keterampilan riset terapan di UPA mempercepat kesiapan kami terjun di industri otomatisasi.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-te-02',
    name: 'Dian Pertiwi, S.T.',
    gradYear: 2023,
    role: 'Power System & Automation Specialist (Alumni S1 Teknik Elektro UPA)',
    company: 'PT PLN (Persero) Transmisi',
    companyLogo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    quote: 'Kuliah di Teknik Elektro Universitas Patria Artha sangat berkesan. Penguasaan instrumen daya, sistem kendali linear, serta pengerjaan proyek laboratorium terpadu menjadi modal berharga bekerja di BUMN sektor ketenagalistrikan.',
    linkedinUrl: 'https://linkedin.com'
  },

  // --- TEKNIK MESIN (2 Testimoni) ---
  {
    id: 'alum-tm-01',
    name: 'Andi Pratama, S.T.',
    gradYear: 2022,
    role: 'Design & Mechanical Reliability Engineer (Alumni S1 Teknik Mesin UPA)',
    company: 'PT Pertamina Heavy Industry',
    companyLogo: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    quote: 'Studi S1 Teknik Mesin Universitas Patria Artha membekali saya dengan pemahaman mendalam tentang mekanika bahan, simulasi CAD/CAM, dan analisis dinamika fluida. Praktikum di Lab Uji Material UPA sangat relevan dengan industri manufaktur & energi.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 'alum-tm-02',
    name: 'Fikri Syahputra, S.T.',
    gradYear: 2023,
    role: 'Automotive Maintenance Lead (Alumni S1 Teknik Mesin UPA)',
    company: 'PT Astra Heavy Machinery',
    companyLogo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=100',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    quote: 'Pengalaman belajar di Teknik Mesin Universitas Patria Artha sangat luar biasa. Para dosen yang berpengalaman di bidang mesin termal dan manufaktur presisi membentuk mental keinsinyuran yang tangguh dan siap kerja.',
    linkedinUrl: 'https://linkedin.com'
  }
];

async function run() {
  console.log('🧹 Clearing old testimonials from DB...');
  await prisma.alumniTestimonial.deleteMany({});
  console.log('✨ Inserting 6 new UPA testimonials (2 per study program)...');
  for (const item of newTestimonials) {
    await prisma.alumniTestimonial.create({ data: item });
    console.log(`  + Added: ${item.name} (${item.role})`);
  }
  console.log('✅ Database sync complete!');
  await prisma.$disconnect();
}

run().catch(err => {
  console.error('❌ Error resyncing testimonials:', err);
  process.exit(1);
});
