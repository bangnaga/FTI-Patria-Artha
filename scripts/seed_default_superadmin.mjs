import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@local.lan' },
    update: {
      name: 'Admin FTI',
      password: 'admin*123',
      role: 'Superadmin',
      status: 'active'
    },
    create: {
      id: 'admin-superadmin-main',
      name: 'Admin FTI',
      email: 'admin@local.lan',
      password: 'admin*123',
      role: 'Superadmin',
      status: 'active'
    }
  });

  console.log('Default Superadmin successfully created/updated in DB:', admin);
}

main().catch(console.error).finally(() => prisma.$disconnect());
