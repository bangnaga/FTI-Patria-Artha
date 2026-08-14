import { PrismaClient } from '../src/db/generated/client/index.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Syncing & Seeding CustomPages to TiDB Cloud Database...');

  // Read defaultCustomPages.ts content
  const tsContent = fs.readFileSync(path.join(process.cwd(), 'src/data/defaultCustomPages.ts'), 'utf-8');
  
  // Extract defaultCustomPages array string
  const jsonStart = tsContent.indexOf('export const defaultCustomPages: CustomPageItem[] = ');
  if (jsonStart === -1) {
    throw new Error('Could not find defaultCustomPages in file');
  }

  const rawArrayCode = tsContent.slice(jsonStart + 'export const defaultCustomPages: CustomPageItem[] = '.length).trim();
  // Safe evaluation
  const defaultCustomPages = eval(`(function(){ return ${rawArrayCode}; })()`);

  for (const page of defaultCustomPages) {
    const contentStr = typeof page.content === 'string' ? page.content : JSON.stringify(page.content);
    await prisma.customPage.upsert({
      where: { id: page.id },
      update: {
        title: page.title,
        slug: page.slug,
        published: page.published,
        views: page.views || 0,
        content: contentStr,
      },
      create: {
        id: page.id,
        title: page.title,
        slug: page.slug,
        published: page.published,
        views: page.views || 0,
        content: contentStr,
      },
    });
  }

  console.log(`✅ ${defaultCustomPages.length} CustomPages successfully saved & synced to TiDB Cloud Database!`);
}

main().catch(err => {
  console.error('Seed CustomPages error:', err);
  process.exit(1);
}).finally(() => prisma.$disconnect());
