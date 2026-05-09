import { createNeonAuth } from '@neondatabase/auth/next/server';

// Hack para Cloudflare: Si DATABASE_URL está reservado, usamos NEON_DATABASE_URL
if (!process.env.DATABASE_URL && process.env.NEON_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.NEON_DATABASE_URL;
}

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL || "https://ep-ancient-shape-aqs5yzyx.neonauth.c-8.us-east-1.aws.neon.tech/neondb",
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET || "grIrD1fhwQ1Rq+XE8w8aogO/z7EmZuvO3wjB8lGrAdo=",
  },
});
