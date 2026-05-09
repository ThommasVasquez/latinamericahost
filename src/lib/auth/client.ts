import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "https://ep-ancient-shape-aqs5yzyx.neonauth.c-8.us-east-1.aws.neon.tech/neondb/auth",
  plugins: [
    emailOTPClient(),
  ],
});
