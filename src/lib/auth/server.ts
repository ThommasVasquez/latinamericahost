import { createNeonAuth } from '@neondatabase/auth/next/server';
import { emailOTP } from "better-auth/plugins";

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
  },
  plugins: [
    emailOTP(),
  ],
});
