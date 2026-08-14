import { PrismaClient } from './generated/client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ override: true });

let dbUrl = process.env.DATABASE_URL;

// If process.env.DATABASE_URL contains <PASSWORD> or is missing or isn't pointing to real credentials
if (!dbUrl || dbUrl.includes('<PASSWORD>')) {
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      const match = envContent.match(/DATABASE_URL=["']?([^"'\n\r]+)["']?/);
      if (match && match[1] && !match[1].includes('<PASSWORD>')) {
        dbUrl = match[1];
      }
    }
  } catch (_e) {
    // fallback
  }
}

if (!dbUrl || dbUrl.includes('<PASSWORD>') || !dbUrl.includes('tidbcloud.com')) {
  dbUrl = 'mysql://2dHXUj13bicUVjS.root:95txJcLPdTv47xHX@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/fti_upa?sslaccept=strict&sslmode=require';
}

if (dbUrl.includes('tidbcloud.com') && !dbUrl.includes('sslaccept=')) {
  const separator = dbUrl.includes('?') ? '&' : '?';
  dbUrl = `${dbUrl}${separator}sslaccept=strict&sslmode=require`;
} else if (dbUrl.includes('tidbcloud.com') && !dbUrl.includes('sslmode=')) {
  dbUrl = `${dbUrl}&sslmode=require`;
}

process.env.DATABASE_URL = dbUrl;

export const prisma = new PrismaClient({
  datasourceUrl: dbUrl,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export default prisma;



