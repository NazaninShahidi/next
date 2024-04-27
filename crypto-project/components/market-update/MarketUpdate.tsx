"use client";
import React, { useState } from "react";
import Cryptocurrencies from "./tabs/Cryptocurrencies";
import MoneyExchange from "./tabs/MoneyExchange";

function MarketUpdate() {
  const [activeTab, setActiveTab] = useState("cryptocurrencies");

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="flex flex-col p-5 items-start md:p-0 gap-8 md:w-[1200px] md:h-[770px] mx-auto mt-12">
      <div className="w-full">
        <h3 className="font-bold text-4xl text-[#ECF1F0] my-5">
          Market Update
        </h3>
        <div className="flex flex-col items-start p-0 gap-6">
          <p className="text-[#B6B6B6] text-[18px] font-medium">
            current price of cryptocurrencies
          </p>
          <div className="flex flex-col-reverse justify-between  w-full md:flex-row">
            <div className="flex flex-row items-center gap-3 my-5 md:my-0 ">
              <button
                className={`flex flex-row items-center justify-center px-[10px] py-[12px] gap-[10px] w-[164px] h-[44px] rounded-lg text-[16px] font-bold  ${
                  activeTab === "cryptocurrencies"
                    ? "custom-box-shadow  bg-[#F88B0E] text-white"
                    : "bg-[#ffffff0d] border border-[#ffffff0d] custom-box-shadow-1 text-[#B6B6B6]"
                } `}
                onClick={(e) => handleClick(e, "cryptocurrencies")}
              >
                cryptocurrencies
              </button>

              <button
                className={`flex flex-row items-center justify-center px-[10px] py-[12px] gap-[10px] w-[164px] h-[44px] rounded-lg text-[16px] font-bold  ${
                  activeTab === "money exchange"
                    ? "custom-box-shadow  bg-[#F88B0E] text-white"
                    : "bg-[#ffffff0d] border border-[#ffffff0d] custom-box-shadow-1 text-[#B6B6B6]"
                } `}
                onClick={(e) => handleClick(e, "money exchange")}
              >
                money exchange
              </button>
            </div>

            <div className="flex flex-col justify-center items-start gap-3 w-[282px] h-[44px]  rounded-lg bg-[#f88b0e29] border border-[#ffffff1a]">
              <input
                type="text"
                className="w-full bg-[#f88b0e29] h-[44px] focus:outline-none text-[#B6B6B6] px-3 text-[16px]"
                placeholder="Search Coin"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-label="cryptocurrencies"
        className={`${
          activeTab === "cryptocurrencies" ? "block" : "hidden"
        } text-white w-full`}
      >
        <Cryptocurrencies />
      </div>
      <div
        aria-label="money exchange"
        className={`${
          activeTab === "money exchange" ? "block" : "hidden"
        } text-white w-full`}
      >
        <MoneyExchange />
      </div>
    </div>
  );
}

export default MarketUpdate;
