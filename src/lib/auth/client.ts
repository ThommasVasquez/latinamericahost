'use client';

import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  // En el navegador usa la ruta relativa al proxy. 
  // Durante el build (SSR), usa una URL absoluta para evitar errores de validación.
  baseURL: typeof window !== 'undefined' 
    ? window.location.origin + "/api/auth" 
    : "http://localhost:3001/api/auth",
  plugins: [
    emailOTPClient(),
  ],
});
