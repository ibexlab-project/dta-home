import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DTA - Digital Assets, Real-World Privileges",
  description: "DTA offers a three-layer infrastructure for digital assets and real-world privileges",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = locale === 'th' ? 'th' : 'en';
  
  return (
    <html lang={lang}>
      <body
        className={clsx(
          inter.variable,
          "font-sans antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}

