import { PrismaClient } from '../src/db/generated/client/index.js';
const prisma = new PrismaClient();

async function main() {
  const testPayload = {
    name: 'Test Editor',
    email: 'editor@local.lan',
    password: 'editor*123',
    role: 'Editor',
    status: 'active',
    avatar: ''
  };

  const created = await prisma.user.upsert({
    where: { email: testPayload.email },
    update: testPayload,
    create: testPayload
  });
  console.log('Successfully created/upserted user in DB:', created);
}

main().catch(console.error).finally(() => prisma.$disconnect());
