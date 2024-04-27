import Banner from "@/components/Banner";
import InfoSection from "@/components/InfoSection";
import ContactUs from "@/components/contact-us/ContactUs";
import MarketUpdate from "@/components/market-update/MarketUpdate";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/image/vector-1.png"
        alt="hero-section"
        width={1550}
        height={72.83}
        className="my-5"
      />
      <InfoSection />
      <Image
        src="/image/vector-2.png"
        alt="hero-section"
        width={1550}
        height={72.83}
      />
      <MarketUpdate />
      <Banner />
      <ContactUs />
      <Image
        src="/image/vector-3.png"
        alt="hero-section"
        width={1550}
        height={72.83}
      />
    </div>
  );
}
