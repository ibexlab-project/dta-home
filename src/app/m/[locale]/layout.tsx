import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "../../globals.css";
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
  title: "DTA Mobile - Digital Assets, Real-World Privileges",
  description: "Mobile experience for DTA with optimized layout and content",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default async function MobileLocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = locale === "th" ? "th" : "en";

  return (
    <html lang={lang} className="mobile-html">
      <body
        className={clsx(
          inter.variable,
          notoSansThai.variable,
          locale === "th" ? "font-noto-sans-thai" : "font-inter",
          "mobile-body antialiased min-h-screen bg-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}

