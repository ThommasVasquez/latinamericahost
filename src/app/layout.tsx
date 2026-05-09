import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latin Host Inc | Hosting de Alta Performance & Dominios",
  description: "La mejor plataforma para alojar tus sitios estáticos y dinámicos. Registro de dominios con la mejor velocidad y soporte.",
  keywords: ["hosting", "dominios", "latin host", "servidores", "hosting estatico", "hosting dinamico"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
