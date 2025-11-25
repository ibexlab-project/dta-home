import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { ThaiPremiumTourismSection } from "@/components/sections/ThaiPremiumTourismSection";
import { TechArchitectureSection } from "@/components/sections/TechArchitectureSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { PartnerNetworkSection } from "@/components/sections/PartnerNetworkSection";
import { MediaRoomSection } from "@/components/sections/MediaRoomSection";
import { BottomCTASection } from "@/components/sections/BottomCTASection";
import type { Locale } from "@/lib/get-translations";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'th' ? 'th' : 'en') as Locale;

  // Media cards (날짜는 번역에 포함되지 않으므로 별도 처리)
  const mediaCards = locale === 'th' ? [
    {
      image: "/images/media/media-mou-signing.png",
      date: "27 พฤศจิกายน 2024",
      title: "DTA ลงนาม MOU กับการท่องเที่ยวแห่งประเทศไทยเพื่อดึงดูดนักท่องเที่ยวพรีเมียม",
      description: "",
      imageAlt: "พิธีลงนาม MOU กับการท่องเที่ยวแห่งประเทศไทย"
    },
    {
      image: "/images/media/media-simx-launch.png",
      date: "06 ตุลาคม 2024",
      title: "SIMX เปิดตัวสำเร็จบน Base L2 Mainnet",
      description: "",
      imageAlt: "การเปิดตัว SiMX บน Base L2 Mainnet"
    },
    {
      image: "/images/media/media-pilot-trust.png",
      date: "15 กันยายน 2024",
      title: "DTA สร้างความไว้วางใจให้พันธมิตรด้วยระบบชำระเงินที่ขับเคลื่อนด้วย DBOS",
      description: "",
      imageAlt: "DTA pilot trust พร้อมระบบชำระเงิน USDC"
    }
  ] : [
    {
      image: "/images/media/media-mou-signing.png",
      date: "27 November 2024",
      title: "DTA Signs MOU with Tourism Authority of Thailand to Attract Premium Tourists",
      description: "",
      imageAlt: "MOU signing ceremony with Tourism Authority of Thailand"
    },
    {
      image: "/images/media/media-simx-launch.png",
      date: "06 October 2024",
      title: "SIMX Successfully Launches on Base L2 Mainnet",
      description: "",
      imageAlt: "SiMX launch on Base L2 Mainnet"
    },
    {
      image: "/images/media/media-pilot-trust.png",
      date: "15 September 2024",
      title: "DTA Ensures Partner Trust with DBOS-Powered Settlement System",
      description: "",
      imageAlt: "DTA pilot trust with USDC settlement system"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header locale={locale} />
      <main className="flex-1 w-full">
        <HeroSection locale={locale} />
        <InfrastructureSection locale={locale} />
        <ThaiPremiumTourismSection locale={locale} />
        <TechArchitectureSection locale={locale} />
        <RoadmapSection locale={locale} />
        <PartnerNetworkSection locale={locale} />
        <MediaRoomSection locale={locale} mediaCards={mediaCards} />
        <BottomCTASection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

