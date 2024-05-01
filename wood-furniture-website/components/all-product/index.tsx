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

function AllProduct() {
  const [allData, setAllData] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("api/all", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        setAllData(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {allData.map((data) => {
          return <Card key={data.id} product={data} />;
        })}
      </div>
    </div>
  );
}

export default AllProduct;
