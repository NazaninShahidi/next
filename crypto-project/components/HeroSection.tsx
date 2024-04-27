import Image from "next/image";

function HeroSection() {
  return (
    <div className=" flex flex-col gap-2  p-0 items-center justify-center mt-10 text-white md:gap-[90px] md:flex-row">
      <div className="flex items-center w-[400px] h-[100px] md:w-[660px] md:h-[246px]  ">
        <h1 className="text-2xl  p-5 font-bold text-[#ECF1F0] md:text-5xl md:p-0">
          The best place to buy and sell{" "}
          <span className="text-[#F88B0E]">cryptocurrency</span> and{" "}
          <span className="text-[#F88B0E]">money exchange</span> assets
        </h1>
      </div>

      <Image
        src="/image/buy-sell.png"
        alt="hero-section"
        width={300}
        height={300}
      />
    </div>
  );
}

export default HeroSection;
