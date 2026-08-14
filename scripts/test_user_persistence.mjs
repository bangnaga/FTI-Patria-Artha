import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log('All DB Users:', users);
}

main().catch(console.error).finally(() => prisma.$disconnect());
