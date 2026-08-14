import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;
    
    const cookieHeader = request.headers.get('cookie');
    let cookieToken = null;
    if (cookieHeader) {
      const match = cookieHeader.match(/fti_auth_token=([^;]+)/);
      if (match) cookieToken = match[1];
    }

    const token = bearerToken || cookieToken;

    if (token) {
      try {
        await prisma.siteData.delete({
          where: { key: `session_${token}` }
        });
      } catch {
        // ignore if already deleted
      }
    }

    const response = NextResponse.json({ success: true, message: 'Logged out successfully' });

    // Clear HTTP-only cookie
    response.cookies.set('fti_auth_token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
