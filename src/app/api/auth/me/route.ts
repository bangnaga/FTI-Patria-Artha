import { NextResponse } from 'next/server';
import { prisma } from '../../../../db/prisma';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;
    
    // Check cookie header if bearer header is missing
    const cookieHeader = request.headers.get('cookie');
    let cookieToken = null;
    if (cookieHeader) {
      const match = cookieHeader.match(/fti_auth_token=([^;]+)/);
      if (match) cookieToken = match[1];
    }

    const token = bearerToken || cookieToken;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }

    const sessionRecord = await prisma.siteData.findUnique({
      where: { key: `session_${token}` }
    });

    if (!sessionRecord) {
      return NextResponse.json({ error: 'Unauthorized: Invalid or expired session' }, { status: 401 });
    }

    const sessionData = JSON.parse(sessionRecord.value);

    return NextResponse.json({
      authenticated: true,
      user: {
        id: sessionData.userId,
        name: sessionData.name,
        email: sessionData.email,
        role: sessionData.role
      }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
