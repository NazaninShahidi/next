export const dynamic = "force-dynamic"; // defaults to auto
import data from "@/data/data.json";
import { NextResponse } from "next/server";

interface Product {
  id: string;
  title: string;
  image: string;
  star: number;
  price: string;
  isBestSelling: boolean;
}

export async function GET() {
  const AllData = data.filter((i: Product) => i.isBestSelling);
  const response = NextResponse.json(AllData);
  return response;
}
