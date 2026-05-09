import { createNeonAuth } from '@neondatabase/auth/next/server';

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL || "https://ep-ancient-shape-aqs5yzyx.neonauth.c-8.us-east-1.aws.neon.tech/neondb/auth",
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET || "grIrD1fhwQ1Rq+XE8w8aogO/z7EmZuvO3wjB8lGrAdo=",
  },
});
