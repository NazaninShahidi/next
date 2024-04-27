import Table from "@/components/ui/table";
import Image from "next/image";

function Cryptocurrencies() {
  const headers = [
    "NAME",
    "Latest Price (Toman)",
    "24h Change",
    "24h Turnover",
    "Weekly Chart",
    "TRADE",
  ];

  const data = [
    [
      "1",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/Bitcoin.png"
          alt="bitcion"
          width={44}
          height={44}
        />
        <span>Bitcoin</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>BTC</span>
      </div>,
      "$56,623.54",
      <span className="text-[#00D419]">+1.41%</span>,
      "BTC 10.129966",
      <Image
        src="/image/chart/chart-state 2.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "2",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/Ethereum.png"
          alt="Ethereum"
          width={44}
          height={44}
        />
        <span>Ethereum</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>ETH</span>
      </div>,
      "$4,267.90",
      <span className="text-[#00D419]">+2.22%</span>,
      "ETH 91.26746",
      <Image
        src="/image/chart/chart-state3.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "3",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/Binance.png"
          alt="Binance"
          width={44}
          height={44}
        />
        <span>Binance</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>BNB</span>
      </div>,
      "$587.74",
      <span className="text-[#00D419]">+0.82%</span>,
      "BNB 91.26746",
      <Image
        src="/image/chart/chart-state.png"
        alt="chart-state"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "4",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/Tether.png"
          alt="Tether"
          width={44}
          height={44}
        />
        <span>Tether</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>USDT</span>
      </div>,
      "$0.9998",
      <span className="text-[#00D419]">+-0.03%</span>,
      "USDT 91.26746",
      <Image
        src="/image/chart/chart-state4.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "5",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/Solana.png"
          alt="Solana"
          width={44}
          height={44}
        />
        <span>Solana</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>SOL</span>
      </div>,
      "$213.67",
      <span className="text-[#FF1E00]">-0.53%</span>,
      "SQL 91.26746",
      <Image
        src="/image/chart/chart-state5.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "6",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image
          src="/image/coins/XRP.png"
          alt="bitcion"
          width={44}
          height={44}
        />
        <span>XRP</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>XRP</span>
      </div>,
      "$1.04",
      <span className="text-[#FF1E00]">-0.44%</span>,
      "XRP 91.26746",
      <Image
        src="/image/chart/chart-state5.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
    [
      "7",
      <div className="flex flex-row items-center justify-between space-x-2">
        <Image src="/image/coins/USD.png" alt="USD" width={44} height={44} />
        <span>USD Coin</span>
        <div className="w-[1px] h-[24px] bg-[#403A3A] mx-2"></div>
        <span>USDC</span>
      </div>,
      "$1.00",
      <span className="text-[#FF1E00]">-0.03%</span>,
      "USDC 91.26746",
      <Image
        src="/image/chart/chart-state7.png"
        alt="bitcion"
        width={76}
        height={44}
      />,
      <button className="text-[16px] text-center font-semibold text-white bg-[#0E7BF8] w-[93px]  rounded-lg px-1 py-3">
        Trade
      </button>,
    ],
  ];
  return (
    <div>
      <Table headers={headers} data={data} showNo={true} />
      <div className=" py-5">
        <a
          href="#"
          className="text-[#F88B0E] text-lin font-semibold text-[17px] underline"
        >
          See All Coins
        </a>
      </div>
    </div>
  );
}

export default Cryptocurrencies;
