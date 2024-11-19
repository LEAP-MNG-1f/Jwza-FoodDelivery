import { Facebook } from "@/svg/Facebook";
import { Instagram } from "@/svg/Instagram";
import { LogoWhite } from "@/svg/LogoWhite";
import { Twitter } from "@/svg/Twitter";

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
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Нүүр
          </button>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Холбоо барих
          </button>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Хоолны цэс
          </button>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Үйлчилгээний нөхцөл
          </button>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Хүргэлтийн бүс
          </button>
          <button className="text-[16px] font-[590] leading-[19.09px] text-white border-b border-b-white">
            Нууцлалын бодлого
          </button>
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
