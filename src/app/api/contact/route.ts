import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nama, Email, dan Pesan wajib diisi.' }, { status: 400 });
    }

    const timestamp = Date.now();
    const msgId = `msg_${timestamp}`;
    const messageData = {
      id: msgId,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      subject: subject || 'Informasi FTI UPA',
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    // Store in Prisma SiteData table
    await prisma.siteData.create({
      data: {
        key: `contact_msg_${timestamp}`,
        value: JSON.stringify(messageData)
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil dikirim dan disimpan di database sekretariat FTI UPA.',
      data: messageData
    });
  } catch (err: any) {
    console.error('Contact Submission API Error:', err);
    return NextResponse.json({ error: err.message || 'Gagal menyimpan pesan.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.siteData.findMany({
      where: { key: { startsWith: 'contact_msg_' } },
      orderBy: { createdAt: 'desc' }
    });

    const parsedMessages = messages.map(m => {
      try {
        return JSON.parse(m.value);
      } catch {
        return { key: m.key, value: m.value };
      }
    });

    return NextResponse.json(parsedMessages);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
