import type { Metadata } from "next";
import { Poppins, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
          poppins.variable,
          notoSansThai.variable,
          locale === 'th' ? "font-noto-sans-thai" : "font-poppins",
          "antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}

