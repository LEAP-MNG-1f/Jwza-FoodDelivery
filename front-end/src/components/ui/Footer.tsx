import { Facebook } from "@/svg/Facebook";
import { Instagram } from "@/svg/Instagram";
import { LogoWhite } from "@/svg/LogoWhite";
import { Twitter } from "@/svg/Twitter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      style={{
        background: "url('./HeroBgImage.png'), #18BA51",
      }}
      className="w-full h-[545px] flex justify-center"
    >
      <div className="w-[1200px] flex flex-col items-center justify-center gap-[40px]">
        <div className="flex gap-2">
          <LogoWhite />
          <p className="flex items-center text-[20px] font-[700] leading-[30px] text-white">
            Food Delivery
          </p>
        </div>
        <div className="w-full flex justify-between">
          <Link
            href={"./"}
            className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white"
          >
            Нүүр
          </Link>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Холбоо барих
          </button>
          <Link
            href={"menu"}
            className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white"
          >
            Хоолны цэс
          </Link>
          <Link
            href={"condition-of-use"}
            className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white"
          >
            Үйлчилгээний нөхцөл
          </Link>
          <Link
            href={"delivery-area"}
            className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white"
          >
            Хүргэлтийн бүс
          </Link>
          <Link
            href={"privacy-notice"}
            className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white"
          >
            Нууцлалын бодлого
          </Link>
        </div>
        <div className="flex gap-[18px] items-center">
          <button>
            <Facebook />
          </button>
          <button>
            <Instagram />
          </button>
          <button>
            <Twitter />
          </button>
        </div>
        <p className="w-full border-b border-b-white"></p>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[16px] font-[400] leading-[19.09px] text-white">
            © 2024 Pinecone Foods LLC{" "}
          </p>
          <p className="text-[16px] font-[400] leading-[19.09px] text-white">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </div>
  );
};
