function Banner() {
  return (
    <div className="banner-section relative w-full h-[394px] rounded-[10px] overflow-hidden my-5 bg-[100%_100%]">
      <p className="absolute top-[117px] left-[81px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[36px] tracking-[0] leading-[normal]">
        Transform Your Home <br />
        with Furniture
      </p>
      <div className="flex w-[175px] items-center justify-center gap-[10px] p-[10px] absolute top-[227px] left-[81px] bg-white rounded-[5px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Banner;
