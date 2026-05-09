'use client';

import { createAuthClient } from '@neondatabase/auth/next';
import { emailOTPClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [
    emailOTPClient(),
  ],
});
