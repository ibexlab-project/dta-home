import Image from "next/image";

const partnerLogos = [
  { src: "/images/partners/partner_1.png", alt: "Partner 1" },
  { src: "/images/partners/partner_2.png", alt: "Partner 2" },
  { src: "/images/partners/partner_3.png", alt: "Partner 3" },
];

export function MobilePartners() {
  return (
    <section className="px-4 pb-8">
      <h2 className="mb-3 text-lg font-semibold text-[#0F172A]">Partners</h2>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {partnerLogos.map((logo, idx) => (
          <div
            key={idx}
            className="min-w-[160px] flex-shrink-0 rounded-xl border border-[#E5E7EB] bg-white p-3 flex items-center justify-center"
            style={{ height: "120px" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

