import { PlusIconAdmin } from "@/svg/PlusIconAdmin";
import { ThreeDotsIcon } from "@/svg/ThreeDotsIcon";
import CreateCategoryButton from "./CreateCategoryButton";
import CreateFoodButton from "./CreateFoodButton";

export const AdminMain = () => {
  return (
    <div className="w-full flex justify-center mt-[120px] mb-[300px]">
      <div className="w-[1200px] flex gap-8">
        <div className="w-[402px] flex flex-col gap-[40px]">
          <p className="text-[22px] font-[700] leading-[33px]">Food Menu</p>
          <div className="flex flex-col gap-[26px]">
            <div className="flex justify-between px-4 py-2 border border-[#D6D8DB] rounded-lg">
              <button className="text-[18px] font-[500] leading-[27px] ">
                Breakfest
              </button>
              <ThreeDotsIcon />
            </div>
            <CreateCategoryButton />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between py-4 w-[894px]">
            <p className="text-[22px] font-[700] leading-[33px]">Breakfest</p>
            <CreateFoodButton />
          </div>
          <div className="relative w-[282px]">
            <button className="absolute z-10 w-[166px] h-[40px] px-16 py-2 rounded-[100px] text-[20px] font-[590] leading-[23.87px] bg-white right-[58px] top-[73px]">
              Edit
            </button>
            <button className="absolute z-1 w-[282px] h-[256px] flex flex-col gap-[14px] border-none items-start">
              <img
                className="!w-[282px] !h-[186px] !rounded-[16px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s"
                alt=""
              />

              <div className="!flex !flex-col !gap-1 !items-start">
                <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
                  name
                </p>
                <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
                  price₮
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
