import { createNeonAuth } from '@neondatabase/auth/next/server';

// Hack para Cloudflare: Sincronizar variables de entorno
if (typeof process !== 'undefined') {
  if (!process.env.DATABASE_URL && process.env.NEON_DATABASE_URL) {
    process.env.DATABASE_URL = process.env.NEON_DATABASE_URL;
  }
  // La URL base para Better Auth debe ser la de tu dominio real
  process.env.BETTER_AUTH_URL = "https://latinamericahost.pages.dev/api/auth";
}

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL || "https://ep-ancient-shape-aqs5yzyx.neonauth.c-8.us-east-1.aws.neon.tech/neondb/auth",
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET || "grIrD1fhwQ1Rq+XE8w8aogO/z7EmZuvO3wjB8lGrAdo=",
  },
});
