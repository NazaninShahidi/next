import Table from "@/components/ui/table";
import Image from "next/image";

function MoneyExchange() {
  const headers = ["NAME", "Description", "Buy from us", "Sell to us"];
  const data = [
    [
      "1",
      "Pound",
      "Amounts less than one thousand pounds include 10 pounds and amounts less than three hundred pounds include 15 pounds charge.",
      <button className="text-[16px] text-center font-semibold text-white bg-[#00D419] w-[93px]  rounded-lg px-1 py-2">
        Buy
      </button>,
      <button className="text-[16px] text-center font-semibold text-white bg-[#FF1E00] w-[93px]  rounded-lg px-1 py-2">
        Sell
      </button>,
    ],
    [
      "2",
      "Pounds of cash",
      "Amounts less than a thousand pounds include a £10 charge",
      <button className="text-[16px] text-center font-semibold text-white bg-[#00D419] w-[93px]  rounded-lg px-1 py-2">
        Buy
      </button>,
      <button className="text-[16px] text-center font-semibold text-white bg-[#FF1E00] w-[93px]  rounded-lg px-1 py-2">
        Sell
      </button>,
    ],
    [
      "3",
      "euro",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      <button className="text-[16px] text-center font-semibold text-white bg-[#00D419] w-[93px]  rounded-lg px-1 py-2">
        Buy
      </button>,
      <button className="text-[16px] text-center font-semibold text-white bg-[#FF1E00] w-[93px]  rounded-lg px-1 py-2">
        Sell
      </button>,
    ],
    [
      "4",
      "U.S. dollar",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      <button className="text-[16px] text-center font-semibold text-white bg-[#00D419] w-[93px]  rounded-lg px-1 py-2">
        Buy
      </button>,
      <button className="text-[16px] text-center font-semibold text-white bg-[#FF1E00] w-[93px]  rounded-lg px-1 py-2">
        Sell
      </button>,
    ],
    [
      "5",
      "Canadian Dollar",
      "consectetur adipiscing elit, sed do eiusmod",
      <button className="text-[16px] text-center font-semibold text-white bg-[#00D419] w-[93px]  rounded-lg px-1 py-2">
        Buy
      </button>,
      <button className="text-[16px] text-center font-semibold text-white bg-[#FF1E00] w-[93px]  rounded-lg px-1 py-2">
        Sell
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
          See All money
        </a>
      </div>
    </div>
  );
}

export default MoneyExchange;
