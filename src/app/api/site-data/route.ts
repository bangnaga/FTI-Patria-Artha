import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';

export async function GET() {
  try {
    const data = await prisma.siteData.findMany();
    // Convert array of {key, value} to a single object { [key]: parsedValue }
    const result: Record<string, any> = {};
    for (const item of data) {
      if (!item.key.startsWith('page_')) {
        try {
          result[item.key] = JSON.parse(item.value);
        } catch {
          result[item.key] = item.value;
        }
      }
    }
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { key, value } = body;
    if (!key) return NextResponse.json({ error: 'Key is required' }, { status: 400 });

    const valString = typeof value === 'string' ? value : JSON.stringify(value);
    
    const saved = await prisma.siteData.upsert({
      where: { key },
      update: { value: valString },
      create: { key, value: valString }
    });
    
    return NextResponse.json(saved);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
