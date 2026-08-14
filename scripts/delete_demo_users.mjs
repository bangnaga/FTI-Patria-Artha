import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log('Current DB Users before deletion:', users);

  const deleted = await prisma.user.deleteMany({
    where: {
      OR: [
        { email: { contains: 'admin' } },
        { email: { contains: 'operator' } },
        { name: { contains: 'Demo' } },
        { name: { contains: 'Admin Utama' } },
        { name: { contains: 'Operator' } },
        { name: { contains: 'Ahmad Fauzi' } }
      ]
    }
  });

  console.log('Deleted demo users count:', deleted.count);
  const remaining = await prisma.user.findMany();
  console.log('Remaining DB Users:', remaining);
}

main().catch(console.error).finally(() => prisma.$disconnect());
