import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';
import { defaultCustomPages } from '../../../../data/defaultCustomPages';

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

export async function GET(request: Request, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;

  if (params.model === 'custom-pages') {
    try {
      let page = await prisma.siteData.findUnique({
        where: { key: `page_${params.id}` }
      });
      if (!page) {
        const allPages = await prisma.siteData.findMany({ where: { key: { startsWith: 'page_' } } });
        const found = allPages.find(p => {
          try {
            const data = JSON.parse(p.value);
            return data.slug === params.id || data.id === params.id;
          } catch {
            return false;
          }
        });
        if (found) page = found;
      }
      if (!page) {
        const defaultPage = defaultCustomPages.find(dp => dp.slug === params.id || dp.id === params.id);
        if (defaultPage) return NextResponse.json(defaultPage);
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }
      return NextResponse.json({ id: params.id, ...JSON.parse(page.value) });
    } catch (e) {
      const defaultPage = defaultCustomPages.find(dp => dp.slug === params.id || dp.id === params.id);
      if (defaultPage) return NextResponse.json(defaultPage);
      return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
  }

  const modelName = modelMap[params.model];
  if (!modelName) return NextResponse.json({ error: 'Model not found' }, { status: 404 });

  try {
    // @ts-ignore
    const data = await prisma[modelName].findUnique({ where: { id: params.id } });
    
    if (data) {
      for (const key in data) {
        if (typeof data[key] === 'string' && (data[key].startsWith('[') || data[key].startsWith('{'))) {
          try {
            data[key] = JSON.parse(data[key]);
          } catch {
            // ignore
          }
        }
      }
    }

    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;
  const body = await request.json();

  if (params.model === 'custom-pages') {
    try {
      const saved = await prisma.siteData.upsert({
        where: { key: `page_${params.id}` },
        update: { value: JSON.stringify(body) },
        create: { key: `page_${params.id}`, value: JSON.stringify(body) }
      });
      return NextResponse.json({ id: params.id, ...JSON.parse(saved.value) });
    } catch (e) {
      return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
  }

  const modelName = modelMap[params.model];
  if (!modelName) return NextResponse.json({ error: 'Model not found' }, { status: 404 });

  try {
    const dataToSave = { ...body };
    // Remove primary key and auto timestamp fields from update payload
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
        where: {
          email: targetEmail,
          NOT: { id: params.id }
        }
      });
      if (existingUser) {
        return NextResponse.json({
          error: `Alamat email '${targetEmail}' sudah terdaftar pada pengguna '${existingUser.name}'. Harap gunakan alamat email yang lain.`
        }, { status: 400 });
      }
    }

    // @ts-ignore
    const updated = await prisma[modelName].update({
      where: { id: params.id },
      data: dataToSave
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;

  if (params.model === 'custom-pages') {
    try {
      await prisma.siteData.delete({ where: { key: `page_${params.id}` } });
      return NextResponse.json({ success: true });
    } catch (e) {
      return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
  }

  const modelName = modelMap[params.model];
  if (!modelName) return NextResponse.json({ error: 'Model not found' }, { status: 404 });

  try {
    // @ts-ignore
    await prisma[modelName].delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
