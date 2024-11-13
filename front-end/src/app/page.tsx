"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}`);
      console.log(response);

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Food Delivery project</p>
        <p>{data}</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
