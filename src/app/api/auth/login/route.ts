import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username dan password wajib diisi.' }, { status: 400 });
    }

    const cleanUsername = username.trim();

    // Check DB for matching user by email or name
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: cleanUsername },
          { name: { contains: cleanUsername } },
          { email: { startsWith: cleanUsername } }
        ]
      }
    });

    if (!user) {
      return NextResponse.json({ error: `Pengguna '${cleanUsername}' tidak ditemukan di database.` }, { status: 401 });
    }

    // Verify password matching
    const storedPassword = (user as any).password || 'admin*123';
    const isPasswordCorrect = (password === storedPassword);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: 'Kata sandi / password tidak sesuai!' }, { status: 401 });
    }

    // Generate secure random session token
    const token = crypto.randomBytes(32).toString('hex');
    const sessionData = {
      token,
      userId: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: new Date().toISOString()
    };

    // Store session token in DB SiteData
    await prisma.siteData.upsert({
      where: { key: `session_${token}` },
      update: { value: JSON.stringify(sessionData) },
      create: { key: `session_${token}`, value: JSON.stringify(sessionData) }
    });

    const response = NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isDefaultPassword: password === 'admin*123'
      }
    });

    // Set secure HTTP-only cookie
    response.cookies.set('fti_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Auth Error' }, { status: 500 });
  }
}
