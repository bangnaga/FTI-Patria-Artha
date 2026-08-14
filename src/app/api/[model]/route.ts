import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';
import { defaultCustomPages } from '../../../data/defaultCustomPages';

const modelMap: Record<string, string> = {
  'news': 'news',
  'lecturers': 'lecturer',
  'study-programs': 'studyProgram',
  'courses': 'course',
  'student-org': 'studentOrg',
  'media': 'mediaFile',
  'media-files': 'mediaFile',
  'media-folders': 'mediaFolder',
  'menus': 'menuItem',
  'laboratories': 'laboratory',
  'research-groups': 'researchGroup',
  'publications': 'publication',
  'innovation-products': 'innovationProduct',
  'student-achievements': 'studentAchievement',
  'alumni-testimonials': 'alumniTestimonial',
  'job-vacancies': 'jobVacancy',
  'pmb-tracks': 'pMBTrack',
  'academic-calendar': 'academicCalendarItem',
  'faqs': 'fAQItem',
  'quick-links': 'quickLink',
  'users': 'user',
};

export async function GET(request: Request, context: { params: Promise<{ model: string }> }) {
  const params = await context.params;
  const modelName = modelMap[params.model];
  if (!modelName) {
    if (params.model === 'custom-pages') {
      try {
        let pages = await prisma.siteData.findMany({
          where: { key: { startsWith: 'page_' } }
        });

        // Always ensure subpages in database don't contain unwanted legacy HeroBlock
        await Promise.all(
          pages.map(async (p) => {
            try {
              const val = JSON.parse(p.value);
              const slug = val?.slug || '';
              if (slug !== 'beranda' && slug !== 'home' && slug !== 'hero' && val?.content?.content && Array.isArray(val.content.content)) {
                const hasHero = val.content.content.some((b: any) => b && b.type === 'HeroBlock');
                if (hasHero) {
                  val.content.content = val.content.content.filter((b: any) => b && b.type !== 'HeroBlock');
                  await prisma.siteData.update({
                    where: { key: p.key },
                    data: { value: JSON.stringify(val) }
                  });
                }
              }
            } catch {
              // ignore
            }
          })
        );

        const existingKeys = new Set(pages.map(p => p.key));
        const missingDefaults = defaultCustomPages.filter(dp => !existingKeys.has(`page_${dp.id}`));

        if (missingDefaults.length > 0) {
          try {
            await Promise.all(
              missingDefaults.map(dp =>
                prisma.siteData.upsert({
                  where: { key: `page_${dp.id}` },
                  update: {},
                  create: {
                    key: `page_${dp.id}`,
                    value: JSON.stringify(dp)
                  }
                })
              )
            );
          } catch (seedErr) {
            console.warn('Auto-seed missing custom pages failed:', seedErr);
          }
        }

        pages = await prisma.siteData.findMany({
          where: { key: { startsWith: 'page_' } }
        });

        const parsed = pages.map(p => ({
          id: p.key.replace('page_', ''),
          ...JSON.parse(p.value)
        }));
        return NextResponse.json(parsed);
      } catch (e) {
        return NextResponse.json(defaultCustomPages);
      }
    }
    return NextResponse.json({ error: 'Model not found' }, { status: 404 });
  }

  try {
    // @ts-ignore
    const data = await prisma[modelName].findMany();
    
    // Auto-parse JSON strings for frontend
    const parsedData = data.map((item: any) => {
      const parsedItem = { ...item };
      for (const key in parsedItem) {
        if (typeof parsedItem[key] === 'string' && (parsedItem[key].startsWith('[') || parsedItem[key].startsWith('{'))) {
          try {
            parsedItem[key] = JSON.parse(parsedItem[key]);
          } catch {
            // ignore
          }
        }
      }
      return parsedItem;
    });

    return NextResponse.json(parsedData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request, context: { params: Promise<{ model: string }> }) {
  const params = await context.params;
  const modelName = modelMap[params.model];
  const body = await request.json();

  if (!modelName) {
    if (params.model === 'custom-pages') {
      try {
        const id = body.id || Date.now().toString();
        const saved = await prisma.siteData.upsert({
          where: { key: `page_${id}` },
          update: { value: JSON.stringify(body) },
          create: { key: `page_${id}`, value: JSON.stringify(body) }
        });
        return NextResponse.json({ id, ...JSON.parse(saved.value) });
      } catch (e) {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
      }
    }
    return NextResponse.json({ error: 'Model not found' }, { status: 404 });
  }

  try {
    const dataToSave = { ...body };
    // Remove auto-generated and primary key fields that Prisma manages
    delete dataToSave.id;
    delete dataToSave.createdAt;
    delete dataToSave.updatedAt;

    for (const key in dataToSave) {
      if (Array.isArray(dataToSave[key]) || (typeof dataToSave[key] === 'object' && dataToSave[key] !== null)) {
        dataToSave[key] = JSON.stringify(dataToSave[key]);
      }
    }

    if (params.model === 'users' && dataToSave.email) {
      const targetEmail = String(dataToSave.email).trim().toLowerCase();
      const existingUser = await prisma.user.findFirst({
        where: { email: targetEmail }
      });
      if (existingUser) {
        return NextResponse.json({
          error: `Alamat email '${targetEmail}' sudah terdaftar pada pengguna '${existingUser.name}'. Harap gunakan alamat email yang lain.`
        }, { status: 400 });
      }
    }

    // @ts-ignore
    const created = await prisma[modelName].create({ data: dataToSave });
    return NextResponse.json(created);
  } catch (error: any) {
    if (error.code === 'P2002' || error.message?.includes('Unique constraint') || error.message?.includes('User_email_key')) {
      return NextResponse.json({ error: 'Alamat email tersebut sudah terdaftar di database.' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message || 'Gagal menyimpan data ke database' }, { status: 500 });
  }
}
