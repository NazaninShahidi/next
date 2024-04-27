import Image from "next/image";

function Footer() {
  return (
    <div className=" flex  flex-col md:gap-20  items-center footer-bg   md:h-[458px] py-[80px] text-white">
      <div className="my-3 w-full md:relative  md:w-[1200px]  md:h-[152px] md:space-x-5 md:my-0">
        {" "}
        <div className="flex justify-center pb-6 gap-2  rounded-none opacity-70 mb-2 md:mb-0 md:absolute md:w-[68px]   md:h-[28px] md:left-0 md:top-0  md:flex-row  md:items-start  ">
          <h5 className="text-white font-bold text-[24px]  leading-5">LOGO</h5>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-start p-0  md:absolute md:w-[778px] md:h-[152px] md:left-[422px] md:top-0  md:gap-[120px] ">
          <div className="flex flex-col items-center ">
            <div className=" md:pb-6 gap-2 mix-blend-normal rounded-none opacity-70">
              <h4 className=" tracking-[0.65px] font-[400] text-[13px] uppercase leading-1">
                About
              </h4>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3  md:h-[112px] left-0 top-[40px] rounded-none mix-blend-normal">
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  News
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  About
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Careers
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Masthead
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center ">
            <div className=" flex flex-row  items-start  pb-6 gap-2 mix-blend-normal rounded-none opacity-70">
              <h4 className="flex items-center tracking-[0.65px] font-[400] text-[13px] uppercase leading-1">
                Stay Updated
              </h4>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3  md:h-[112px] left-0 top-[40px] rounded-none mix-blend-normal">
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Follow
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Events
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Studios
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Newsletters
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center ">
            <div className=" flex flex-row  items-start  pb-6 gap-2 mix-blend-normal rounded-none opacity-70">
              <h4 className="flex items-center tracking-[0.65px] font-[400] text-[13px] uppercase leading-1">
                Get in Touch
              </h4>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3  md:h-[112px] left-0 top-[40px] rounded-none mix-blend-normal">
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Sitemap
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Advertise
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Contact Us
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Accessibility Help
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center ">
            <div className=" flex flex-row  items-start  pb-6 gap-2 mix-blend-normal rounded-none opacity-70">
              <h4 className="flex items-center tracking-[0.65px] font-[400] text-[13px] uppercase leading-1">
                The Fine Print
              </h4>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3  md:h-[112px] left-0 top-[40px] rounded-none mix-blend-normal">
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Privacy
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Licenses
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Ethics Policy
                </a>
              </li>
              <li className="flex flex-row items-center">
                <a className="font-[400] text-[16px] leading-[28px]" href="#">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-full md:h-[66px] ">
        <div className="  h-[1px]  bg-gradient-to-r from-[#2E6357] via-[#3FA58E] to-[#847CFB]"></div>
        <div className="flex flex-col items-center  md:flex-row justify-between md:items-start py-5 md:px-24 md:py-0 rounded-none mix-blend-normal">
          <div className="flex items-center  md:h-[64px]  mix-blend-normal rounded-none">
            <p className="  font-normal text-base">
              Copyright © 2024 Scout. All rights reserved.
            </p>
          </div>
          <div className="w-[168px] h-[64px] flex flex-row items-center  mix-blend-normal  ">
            <div className="flex items-center justify-center w-1/3 md:border-x h-[64px]">
              <Image
                src="/image/icon/logo.png"
                alt="logo"
                width={24}
                height={24}
              />
            </div>
            <div className="flex items-center justify-center w-1/3 md:border-x h-[64px]">
              <Image
                src="/image/icon/t.png"
                alt="logo"
                width={24}
                height={24}
              />
            </div>
            <div className=" flex items-center justify-center w-1/3 md:border-x h-[64px]">
              <Image
                src="/image/icon/insta.png"
                alt="logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:h-[1px]  bg-gradient-to-r from-[#2E6357] via-[#3FA58E] to-[#847CFB]"></div>
      </div>
    </div>
  );
}

export default Footer;
