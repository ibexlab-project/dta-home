import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansThai = Noto_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "DTA - Digital Assets, Real-World Privileges",
  description: "DTA offers a three-layer infrastructure for digital assets and real-world privileges",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0.26,
  minimumScale: 0.1,
  maximumScale: 5,
  userScalable: true,
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
          notoSansThai.variable,
          locale === 'th' ? "font-noto-sans-thai" : "font-inter",
          "antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}

