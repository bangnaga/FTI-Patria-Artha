import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'File wajib diunggah.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Target upload directory: public/uploads
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const originalName = file.name || 'unnamed-file';
    const ext = path.extname(originalName) || '';
    const safeBaseName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueFileName = `${safeBaseName}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}${ext}`;
    const destinationPath = path.join(uploadDir, uniqueFileName);

    // Write file to disk
    fs.writeFileSync(destinationPath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    // Create DB Record in Prisma MediaFile table
    const mediaRecord = await prisma.mediaFile.create({
      data: {
        fileName: uniqueFileName,
        originalName: originalName,
        sizeBytes: file.size,
        type: file.type || 'application/octet-stream',
        url: publicUrl,
        uploadedAt: new Date().toISOString().replace('T', ' ').slice(0, 19)
      }
    });

    return NextResponse.json(mediaRecord);
  } catch (err: any) {
    console.error('Media Upload API Error:', err);
    return NextResponse.json({ error: err.message || 'Gagal mengunggah berkas.' }, { status: 500 });
  }
}
