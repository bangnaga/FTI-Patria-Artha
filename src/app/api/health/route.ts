import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';

export async function GET() {
  try {
    const newsCount = await prisma.news.count();
    const lecturersCount = await prisma.lecturer.count();
    const studyProgramsCount = await prisma.studyProgram.count();
    const coursesCount = await prisma.course.count();

    return NextResponse.json({
      status: "ok",
      database: "MySQL / TiDB Cloud (via Prisma ORM)",
      orm: "Prisma v6",
      app: "Portal Fakultas Teknik & Informatika Universitas Patria Artha",
      dbStats: {
        news: newsCount,
        lecturers: lecturersCount,
        studyPrograms: studyProgramsCount,
        courses: coursesCount,
      },
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "error",
      message: "Database connection failed",
      error: err.message
    }, { status: 500 });
  }
}
