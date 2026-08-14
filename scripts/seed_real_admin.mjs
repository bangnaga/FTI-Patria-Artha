import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const existingUsers = await prisma.user.findMany();
  console.log('Current DB Users count:', existingUsers.length);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@patria-artha.ac.id' },
    update: {
      name: 'Admin FTI Patria Artha',
      password: 'AdminFTI2026!',
      role: 'Superadmin',
      status: 'active'
    },
    create: {
      id: 'admin-fti-main',
      name: 'Admin FTI Patria Artha',
      email: 'admin@patria-artha.ac.id',
      password: 'AdminFTI2026!',
      role: 'Superadmin',
      status: 'active'
    }
  });

  console.log('Real Admin created/updated in DB:', admin);
}

main().catch(console.error).finally(() => prisma.$disconnect());
