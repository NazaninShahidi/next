import AllProduct from "@/components/all-product";
import Banner from "@/components/banner";
import BestSelling from "@/components/best-selling";
import Collection from "@/components/collections";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Collection />
      <BestSelling />
      <Banner />
      <AllProduct />
    </main>
  );
}
