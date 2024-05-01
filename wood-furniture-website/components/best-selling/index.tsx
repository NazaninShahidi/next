"use client";
import { useEffect, useState } from "react";
import Card from "../ui/card";

interface Product {
  id: string;
  title: string;
  image: string;
  star: number;
  price: string;
  isBestSelling: boolean;
}

function BestSelling() {
  const [bestSellingData, setBestSellingData] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("api/best", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        setBestSellingData(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-4">
      <h5 className="text-center font-medium leading-8 text-2xl font-Montserrat p-2 my-3">
        Best Selling Item
      </h5>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {bestSellingData.map((data) => {
          return <Card key={data.id} product={data} />;
        })}
      </div>
    </div>
  );
}

export default BestSelling;
