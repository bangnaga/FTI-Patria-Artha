import { prisma } from './prisma';
import { 
  NEWS_DATA, 
  LECTURERS_DATA, 
  STUDY_PROGRAMS_DATA, 
  COURSES_DATA, 
  DEFAULT_MENU_ITEMS,
  STUDENT_ORG_DATA,
  LABORATORIES_DATA,
  RESEARCH_GROUPS,
  PUBLICATIONS_DATA,
  INNOVATION_PRODUCTS,
  STUDENT_ACHIEVEMENTS,
  ALUMNI_TESTIMONIALS,
  JOB_VACANCIES,
  PMB_TRACKS,
  ACADEMIC_CALENDAR_DATA,
  FAQ_DATA,
  QUICK_LINKS,
  PRODI_STATS,
  VISI_MISI_DATA,
  ACCREDITATION_DATA,
  DEFAULT_MEDIA
} from '../data/mockData';
import { slugify } from '../utils/slugify';

export async function seedDatabaseIfEmpty() {
  try {
    // 1. Seed & Update News Data with Slugs
    console.log('🌱 Seeding & updating News data with clean slugs...');
    for (const news of NEWS_DATA) {
      const generatedSlug = news.slug || slugify(news.title) || news.id;
      const data = {
        title: news.title,
        slug: generatedSlug,
        category: news.category,
        date: news.date,
        author: news.author,
        thumbnail: news.thumbnail,
        summary: news.summary,
        content: news.content,
        tags: JSON.stringify(news.tags || []),
        featured: Boolean(news.featured),
      };
      await prisma.news.upsert({
        where: { id: news.id },
        update: data,
        create: { id: news.id, ...data },
      });
    }

    // 2. Seed Lecturers
    console.log('🌱 Seeding & updating Lecturers data with default profile photos...');
    for (const lec of LECTURERS_DATA) {
      const data = {
        name: lec.name,
        nidn: lec.nidn,
        title: lec.title,
        photo: lec.photo || '/uploads/noface-1787027055368-je087.jpg',
        expertise: JSON.stringify(lec.expertise || []),
        expertiseTags: JSON.stringify(lec.expertiseTags || []),
        email: lec.email,
        lab: lec.lab,
        education: JSON.stringify(lec.education || []),
        googleScholar: lec.googleScholar || null,
        scopus: lec.scopus || null,
        sinta: lec.sinta || null,
        orcid: lec.orcid || null,
        researchGate: lec.researchGate || null,
        coursesTaught: JSON.stringify(lec.coursesTaught || []),
        publicationsCount: lec.publicationsCount || 0,
        studyProgram: lec.studyProgram || 'Informatika',
      };
      await prisma.lecturer.upsert({
        where: { id: lec.id },
        update: data,
        create: { id: lec.id, ...data },
      });
    }

    // 3. Seed Study Programs
    const spCount = await prisma.studyProgram.count();
    if (spCount === 0) {
      console.log('🌱 Seeding initial Study Programs data into DB...');
      for (const sp of STUDY_PROGRAMS_DATA) {
        const data = {
          code: sp.code,
          name: sp.name,
          degree: sp.degree,
          accreditation: sp.accreditation,
          headOfProgram: sp.headOfProgram,
          headOfProdi: sp.headOfProdi || null,
          description: sp.description,
          totalSks: sp.totalSks,
          activeStudents: sp.activeStudents,
          capacity: sp.capacity,
          vision: sp.vision,
          logoUrl: sp.logoUrl || null,
        };
        await prisma.studyProgram.upsert({
          where: { id: sp.id },
          update: data,
          create: { id: sp.id, ...data },
        });
      }
    }

    // 4. Seed Courses (Always refresh with full 168 courses from curriculum table)
    console.log('🌱 Seeding fresh 168 Kurikulum Courses into DB...');
    await prisma.course.deleteMany({});
    for (const course of COURSES_DATA) {
      const data = {
        code: course.code,
        name: course.name,
        sks: course.sks,
        semester: course.semester,
        category: course.category,
        specialization: course.specialization || null,
        studyProgram: course.studyProgram || 'Teknik Informatika',
        description: course.description || `Mata kuliah ${course.name}`,
        prerequisites: JSON.stringify(course.prerequisites || []),
        syllabusTopic: JSON.stringify(course.syllabusTopic || []),
        rpsUrl: course.rpsUrl || null,
      };
      await prisma.course.upsert({
        where: { id: course.id },
        update: data,
        create: { id: course.id, ...data },
      });
    }

    // 5. Seed Student Organization
    const orgCount = await prisma.studentOrg.count();
    if (orgCount === 0) {
      console.log('🌱 Seeding initial Student Organization data into DB...');
      const orgData = {
        name: STUDENT_ORG_DATA.name,
        abbreviation: STUDENT_ORG_DATA.abbreviation,
        logo: STUDENT_ORG_DATA.logo,
        description: STUDENT_ORG_DATA.description,
        cabinetName: STUDENT_ORG_DATA.cabinetName,
        cabinetYear: STUDENT_ORG_DATA.cabinetYear,
        leaderName: STUDENT_ORG_DATA.leaderName,
        leaderPhoto: STUDENT_ORG_DATA.leaderPhoto,
        viceLeaderName: STUDENT_ORG_DATA.viceLeaderName,
        divisions: JSON.stringify(STUDENT_ORG_DATA.divisions || []),
        upcomingEvents: JSON.stringify(STUDENT_ORG_DATA.upcomingEvents || []),
      };
      await prisma.studentOrg.upsert({
        where: { id: 'default_org' },
        update: orgData,
        create: { id: 'default_org', ...orgData },
      });
    }

    // 6. Seed Users (Admin & Penulis Berita)
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      console.log('🌱 Seeding initial Users (Admin & Penulis Berita) into DB...');
      await prisma.user.upsert({
        where: { id: 'admin_1' },
        update: {
          name: 'Dr. Ahmad Fauzi (Admin FTI)',
          email: 'admin.fti@patria-artha.ac.id',
          role: 'superadmin',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
        },
        create: {
          id: 'admin_1',
          name: 'Dr. Ahmad Fauzi (Admin FTI)',
          email: 'admin.fti@patria-artha.ac.id',
          role: 'superadmin',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
        },
      });

      await prisma.user.upsert({
        where: { id: 'editor_1' },
        update: {
          name: 'Rina Melati (Penulis Berita)',
          email: 'rina.penulis@patria-artha.ac.id',
          role: 'editor',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
        },
        create: {
          id: 'editor_1',
          name: 'Rina Melati (Penulis Berita)',
          email: 'rina.penulis@patria-artha.ac.id',
          role: 'editor',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
        },
      });
    }

    // 7. Seed Navigation Menu Items
    const menuCount = await prisma.menuItem.count();
    if (menuCount === 0) {
      console.log('🌱 Seeding initial Menu Items into DB...');
      for (const m of DEFAULT_MENU_ITEMS) {
        const data = {
          label: m.label,
          line1: m.line1 || m.label,
          line2: m.line2 || null,
          icon: m.icon || null,
          url: m.url,
          isExternal: Boolean(m.isExternal),
          isVisible: Boolean(m.isVisible),
          badge: m.badge || null,
          order: m.order,
          childrenData: m.children ? JSON.stringify(m.children) : null,
        };
        await prisma.menuItem.upsert({
          where: { id: m.id },
          update: data,
          create: { id: m.id, ...data },
        });
      }
    }

    // 8. Seed Laboratories
    const labCount = await prisma.laboratory.count();
    if (labCount === 0) {
      console.log('🌱 Seeding initial Laboratories data into DB...');
      for (const lab of LABORATORIES_DATA) {
        const data = {
          code: lab.code,
          name: lab.name,
          shortDesc: lab.shortDesc,
          headOfLab: lab.headOfLab,
          headPhoto: lab.headPhoto,
          labAssistants: JSON.stringify(lab.labAssistants || []),
          image: lab.image,
          location: lab.location,
          capacity: lab.capacity,
          specifications: JSON.stringify(lab.specifications || []),
          equipmentList: JSON.stringify(lab.equipmentList || []),
          softwareInstalled: JSON.stringify(lab.softwareInstalled || []),
          virtualTour360Url: lab.virtualTour360Url || null,
        };
        await prisma.laboratory.upsert({
          where: { id: lab.id },
          update: data,
          create: { id: lab.id, ...data },
        });
      }
    }

    // 9. Seed Research Groups
    const rgCount = await prisma.researchGroup.count();
    if (rgCount === 0) {
      console.log('🌱 Seeding initial Research Groups data into DB...');
      for (const rg of RESEARCH_GROUPS) {
        const data = {
          name: rg.name,
          code: rg.code,
          leadLecturer: rg.leadLecturer,
          membersCount: rg.membersCount,
          description: rg.description,
          topics: JSON.stringify(rg.topics || []),
        };
        await prisma.researchGroup.upsert({
          where: { id: rg.id },
          update: data,
          create: { id: rg.id, ...data },
        });
      }
    }

    // 10. Seed Publications
    const pubCount = await prisma.publication.count();
    if (pubCount === 0) {
      console.log('🌱 Seeding initial Publications data into DB...');
      for (const pub of PUBLICATIONS_DATA) {
        const data = {
          title: pub.title,
          authors: JSON.stringify(pub.authors || []),
          year: pub.year,
          publisher: pub.publisher,
          type: pub.type,
          pdfUrl: pub.pdfUrl || null,
          doi: pub.doi || null,
          specialization: pub.specialization,
        };
        await prisma.publication.upsert({
          where: { id: pub.id },
          update: data,
          create: { id: pub.id, ...data },
        });
      }
    }

    // 11. Seed Innovation Products
    const ipCount = await prisma.innovationProduct.count();
    if (ipCount === 0) {
      console.log('🌱 Seeding initial Innovation Products data into DB...');
      for (const ip of INNOVATION_PRODUCTS) {
        const data = {
          title: ip.title,
          developer: ip.developer,
          category: ip.category,
          year: ip.year,
          thumbnail: ip.thumbnail,
          description: ip.description,
          techStack: JSON.stringify(ip.techStack || []),
          demoUrl: ip.demoUrl || null,
          githubUrl: ip.githubUrl || null,
          award: ip.award || null,
        };
        await prisma.innovationProduct.upsert({
          where: { id: ip.id },
          update: data,
          create: { id: ip.id, ...data },
        });
      }
    }

    // 12. Seed Student Achievements
    const saCount = await prisma.studentAchievement.count();
    if (saCount === 0) {
      console.log('🌱 Seeding initial Student Achievements data into DB...');
      for (const sa of STUDENT_ACHIEVEMENTS) {
        const data = {
          competition: sa.competition,
          title: sa.title,
          rank: sa.rank,
          level: sa.level,
          year: sa.year,
          studentNames: JSON.stringify(sa.studentNames || []),
          mentorLecturer: sa.mentorLecturer,
          image: sa.image,
        };
        await prisma.studentAchievement.upsert({
          where: { id: sa.id },
          update: data,
          create: { id: sa.id, ...data },
        });
      }
    }

    // 13. Seed Alumni Testimonials (Always refresh with 6 UPA prodi testimonials)
    console.log('🌱 Seeding fresh 6 Alumni Testimonials for UPA (TIF, TE, TM) into DB...');
    await prisma.alumniTestimonial.deleteMany({});
    for (const at of ALUMNI_TESTIMONIALS) {
      await prisma.alumniTestimonial.create({
        data: {
          id: at.id,
          name: at.name,
          gradYear: at.gradYear,
          role: at.role,
          company: at.company,
          companyLogo: at.companyLogo,
          photo: at.photo || '/uploads/noface-1787027055368-je087.jpg',
          quote: at.quote,
          linkedinUrl: at.linkedinUrl || null,
        },
      });
    }

    // 14. Seed Job Vacancies
    const jvCount = await prisma.jobVacancy.count();
    if (jvCount === 0) {
      console.log('🌱 Seeding initial Job Vacancies data into DB...');
      for (const jv of JOB_VACANCIES) {
        const data = {
          title: jv.title,
          company: jv.company,
          logo: jv.logo,
          location: jv.location,
          type: jv.type,
          specialization: jv.specialization,
          postedDate: jv.postedDate,
          applyDeadline: jv.applyDeadline,
          requirements: JSON.stringify(jv.requirements || []),
          applyLink: jv.applyLink,
        };
        await prisma.jobVacancy.upsert({
          where: { id: jv.id },
          update: data,
          create: { id: jv.id, ...data },
        });
      }
    }

    // 15. Seed PMB Tracks
    const pmbCount = await prisma.pMBTrack.count();
    if (pmbCount === 0) {
      console.log('🌱 Seeding initial PMB Tracks data into DB...');
      for (const pmb of PMB_TRACKS) {
        const data = {
          name: pmb.name,
          code: pmb.code,
          description: pmb.description,
          capacity: pmb.capacity,
          period: pmb.period,
          requirements: JSON.stringify(pmb.requirements || []),
          benefits: JSON.stringify(pmb.benefits || []),
          feeEstimate: pmb.feeEstimate,
        };
        await prisma.pMBTrack.upsert({
          where: { id: pmb.id },
          update: data,
          create: { id: pmb.id, ...data },
        });
      }
    }

    // 16. Seed Academic Calendar
    const calCount = await prisma.academicCalendarItem.count();
    if (calCount === 0) {
      console.log('🌱 Seeding initial Academic Calendar data into DB...');
      for (const cal of ACADEMIC_CALENDAR_DATA) {
        const data = {
          title: cal.title,
          startDate: cal.startDate,
          endDate: cal.endDate,
          category: cal.category,
          semester: cal.semester,
        };
        await prisma.academicCalendarItem.upsert({
          where: { id: cal.id },
          update: data,
          create: { id: cal.id, ...data },
        });
      }
    }

    // 17. Seed FAQ Data
    const faqCount = await prisma.fAQItem.count();
    if (faqCount === 0) {
      console.log('🌱 Seeding initial FAQ data into DB...');
      for (const faq of FAQ_DATA) {
        const data = {
          category: faq.category,
          question: faq.question,
          answer: faq.answer,
        };
        await prisma.fAQItem.upsert({
          where: { id: faq.id },
          update: data,
          create: { id: faq.id, ...data },
        });
      }
    }

    // 18. Seed Quick Links
    const qlCount = await prisma.quickLink.count();
    if (qlCount === 0) {
      console.log('🌱 Seeding initial Quick Links data into DB...');
      for (const ql of QUICK_LINKS) {
        await prisma.quickLink.create({
          data: {
            name: ql.name,
            desc: ql.desc,
            url: ql.url,
            iconName: ql.iconName,
            badge: ql.badge || null,
          },
        });
      }
    }

    // 19. Seed Site Data (PRODI_STATS, VISI_MISI, ACCREDITATION)
    console.log('🌱 Seeding initial Site Data into DB...');
    await prisma.siteData.upsert({
      where: { key: 'PRODI_STATS' },
      update: { value: JSON.stringify(PRODI_STATS) },
      create: { key: 'PRODI_STATS', value: JSON.stringify(PRODI_STATS) },
    });
    await prisma.siteData.upsert({
      where: { key: 'VISI_MISI_DATA' },
      update: { value: JSON.stringify(VISI_MISI_DATA) },
      create: { key: 'VISI_MISI_DATA', value: JSON.stringify(VISI_MISI_DATA) },
    });
    await prisma.siteData.upsert({
      where: { key: 'ACCREDITATION_DATA' },
      update: { value: JSON.stringify(ACCREDITATION_DATA) },
      create: { key: 'ACCREDITATION_DATA', value: JSON.stringify(ACCREDITATION_DATA) },
    });

    // 20. Seed Media Files
    const mediaCount = await prisma.mediaFile.count();
    if (mediaCount === 0) {
      console.log('🌱 Seeding initial Media Files into DB...');
      for (const m of DEFAULT_MEDIA) {
        const data = {
          fileName: m.fileName,
          originalName: m.originalName,
          sizeBytes: m.sizeBytes,
          type: m.type,
          url: m.url,
          uploadedAt: m.uploadedAt,
          dimensions: m.dimensions ? JSON.stringify(m.dimensions) : null,
        };
        await prisma.mediaFile.upsert({
          where: { id: m.id },
          update: data,
          create: { id: m.id, ...data },
        });
      }
    }

    console.log('✅ MySQL/TiDB Database sync & seed check completed successfully!');
  } catch (error) {
    console.error('⚠️ Database seed check encountered an error:', error);
  }
}
