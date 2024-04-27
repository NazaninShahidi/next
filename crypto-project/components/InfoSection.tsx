import Image from "next/image";

function InfoSection() {
  return (
    <div className="flex  flex-col items-center  gap-[72px] py-10 my-12 info-section  text-white mx-auto">
      <div className="flex flex-col items-center space-y-7 md:flex-row  md:space-x-7">
        <Image
          src="/image/exchange.png"
          alt="exchange"
          width={300}
          height={300}
        />
        <div className="flex flex-col items-start p-5 gap-[15px]  md:p-0  md:w-[665px] md:h-[247px]">
          <h5 className="font-[500] text-2xl  md:text-[30px] text-[#ECF1F0] ">
            buying and selling{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#F88B0E] to-[#8B0EF8]">
              digital currency
            </span>
          </h5>
          <p className="text-[#A5A3A8] font-[400] text-justify md:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            pariatur nulla accusantium alias. Obcaecati harum ut minus
            necessitatibus repellendus eligendi?
          </p>
          <a
            href="#"
            className=" rounded-sm px-5 py-2 border border-[#F88B0E] text-center md:w-[159px] md:h-[50px]"
          >
            {" "}
            <span className="md:text-[20px] font-[500] text-[#ECF1F0]">
              Learn More
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center space-y-7 md:flex-row  md:space-x-7">
        <div className="flex flex-col items-start p-5 gap-[15px] md:p-0  md:w-[665px] md:h-[247px]">
          <h5 className="font-[500] text-2xl  md:text-[30px] text-[#ECF1F0] ">
            buying and selling
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#F88B0E] to-[#8B0EF8]">
              Trading XChange
            </span>
          </h5>
          <p className="text-[#A5A3A8] font-[400] text-justify md:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            pariatur nulla accusantium alias. Obcaecati harum ut minus
            necessitatibus repellendus eligendi?
          </p>
          <a
            href="#"
            className=" rounded-sm px-5 py-2 border border-[#F88B0E] text-center md:w-[159px] md:h-[50px]"
          >
            {" "}
            <span className="md:text-[20px] font-[500] text-[#ECF1F0]">
              Learn More
            </span>
          </a>
        </div>
        <Image
          src="/image/exchange.png"
          alt="exchange"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default InfoSection;
