import FoodDelgerengui from "../MenuPage/FoodDelgerengui";
import { FoodType } from "./BodyHomePage";

export const FoodCard = ({ img_url, name, price }: FoodType) => {
  return (
    <div className="w-[282px] h-[256px] flex flex-col gap-[14px]">
      <div>
        <FoodDelgerengui />
        {/* <img
          className="w-[282px] h-[186px] rounded-[16px]"
          src={img_url}
          alt=""
        /> */}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[18px] font-[600] leading-[27px]">{name}</p>
        <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
          {price}
        </p>
      </div>
    </div>
  );
};
