"use client";

import HomePage from "@/components/pages/HomePage";
import MenuPage from "@/components/pages/MenuPage";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export default function Home() {
  const MockData = [
    {
      _id: "1",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwcNFoNWXoJ4khYIgrYGc98xBxAbMZiz85Q&s",
      ingredient: "dsd",
      price: 1000,
    },
    {
      _id: "2",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIHO1CUN98drcLnuFJTmD3Vx1pGgf0alExg&s",
      ingredient: "dsd",
      price: 1000,
    },
    {
      _id: "3",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehobQBbx8nrvfZxWtzLXOneVuPCrdx2YDUg&s",
      ingredient: "dsd",
      price: 1000,
    },
    {
      _id: "4",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGro_fmqKHFPhFVp57xdW-FzjlyLDMpSnv_w&s",
      ingredient: "dsd",
      price: 1000,
    },
  ];

  return (
    <div>
      {/* <HomePage foods={MockData} /> */}
      <MenuPage foods={MockData} />
    </div>
  );
}
