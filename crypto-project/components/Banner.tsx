import Image from "next/image";

function Banner() {
  return (
    <div className="banner-section  p-2 md:h-[613px] md:w-[1320px] flex items-center relative shadow-lg md:p-0">
      <div className="flex flex-col items-center  md:space-x-7 md:h-[380px] md:w-[1320px] md:absolute md:top-[200px] md:left-[120px] md:flex-row rounded-full ">
        <Image
          src="/image/exchange-2.png"
          alt="exchange"
          width={350}
          height={350}
          className="banner-img"
        />
        <div className="md:w-[665px] p-2 md:p-0">
          <h4 className="font-[500] text-[25px] md:text-[30px] text-[#FFFFFF] ">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="text-[#A5A3A8] text-[18px] font-[400] text-justify md:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            pariatur nulla accusantium alias. Obcaecati harum ut minus
            necessitatibus repellendus eligendi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
