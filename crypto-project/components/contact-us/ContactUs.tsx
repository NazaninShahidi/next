function ContactUs() {
  return (
    <div className="flex flex-col  justify-center items-center gap-[100px]  p-2 my-9 md:gap-[120px] md:mx-auto md:my-8 md:flex-row  md:space-x-7 md:w-[1200px] md:h-[432px]">
      <div className="flex flex-col items-start p-3  gap-[28px] md:p-0 md:w-[665px] md:h-[247px]">
        <h4 className="font-[500] text-3xl text-[#ECF1F0]  md:text-[40px]">
          Contact Us
        </h4>
        <p className="text-[#A5A3A8] p-2 text-[18px] font-[400] text-justify md:text-[24px] md:w-[665px] md:h-[93px] md:p-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          pariatur nulla accusantium alias. Obcaecati harum ut minus
          necessitatibus repellendus eligendi?
        </p>
        <a
          href="#"
          className=" rounded-sm px-5 py-2 border border-[#F88B0E] text-center md:w-[159px] md:h-[50px]"
        >
          {" "}
          <span className="md:text-[22px] font-[500] text-[#ECF1F0]">
            Learn More
          </span>
        </a>
      </div>
      <div className="flex flex-col items-end p-6 gap-6 bg-[#ffffff0d] rounded-md md:w-[415px] md:h-[432px] ">
        <div className="flex flex-row justify-between items-center p-0 gap-[69px] text-white mx-auto font-semibold text-2xl">
          <h5>Contact Us</h5>
        </div>
        <form className="flex flex-col justify-center p-0 gap-4 md:w-[366px] md:h-[250px]">
          <div className="w-[366px] h-[50px] flex flex-row justify-center items-center px-[10px]   rounded-md bg-[#ffffff0d]">
            <label
              htmlFor="email"
              className="flex items-center text-[#71747F] w-[48px]  text-[16px] font-[600] mx-1"
            >
              name
            </label>
            <div className="w-[1px] h-[50px] bg-[#434344]"></div>
            <input
              type="text"
              className="w-[318px] bg-transparent text-[#71747F] text-[16px] font-semibold h-[40px]  active:outline-none focus:outline-none mx-2 "
              id="name"
            />
          </div>
          <div className="w-[366px] h-[50px] flex flex-row justify-center items-center px-[10px]   rounded-md bg-[#ffffff0d]">
            <label
              htmlFor="email"
              className="flex items-center text-[#71747F] w-[48px]  text-[16px] font-[600] mx-1"
            >
              email
            </label>
            <div className="w-[1px] h-[50px] bg-[#434344]"></div>
            <input
              type="text"
              className="w-[318px] bg-transparent text-[#71747F] text-[16px] font-semibold h-[40px]  active:outline-none focus:outline-none mx-2 "
              id="email"
            />
          </div>

          <div>
            <button className="bg-[#00D419]  border-2 border-[#00D419] rounded-md py-[10px] px-[27px] w-full text-white font-medium shadow-md ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
