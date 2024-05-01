function Hero() {
  return (
    <div className="w-full h-[607px] rounded-[10px] overflow-hidden hero-section bg-cover bg-[50%_50%]">
      <div className="flex flex-col justify-center items-center space-y-3 h-[607px] bg-[#65360d9e]">
        <p className=" [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e7e7e7] text-[48px] text-center tracking-[0] leading-[normal]">
          Enhance Your House Beauty <br />
          with Wood Furniture
        </p>
        <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#b1b1b1] text-[24px] text-center tracking-[0] leading-[normal]">
          Upgrade your home&#39;s aesthetic appeal with our
          <br />
          exquisite collection of wood furniture
        </p>

        <div className="flex w-[165px] items-center justify-center gap-[10px] p-[10px]  bg-white rounded-[5px]">
          <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
