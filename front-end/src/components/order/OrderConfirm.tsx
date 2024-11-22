import { BlueCircle } from "@/svg/BlueCircle";
import { FoodHomePageProps, FoodType } from "../HomePage/BodyHomePage";

export const OrderConfirm = ({ foods }: FoodHomePageProps) => {
  return (
    <div className="w-[432px] flex flex-col  gap-[15px]">
      <div className="w-full h-[100px] flex gap-4 px-6 py-4">
        <BlueCircle />
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-[400] leading-[16.71px] text-[#8B8E95]">
            Алхам 2
          </p>
          <p className="text-[20px] font-[400] leading-[23.87px] ">
            Захиалга баталгаажуулах
          </p>
          <p className="text-[16px] font-[400] leading-[19.09px] text-[#0468C8]">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="w-full h-[612px] p-6 flex flex-col justify-between shadow-xl">
        {foods.map((food) => {
          return (
            <div
              key={food._id}
              className="flex gap-4 p-4 border-t border-t-[#D6D8DB] border-b border-b-[#D6D8DB]"
            >
              <img className="w-[184px] h-[121px]" src={food.img_url} alt="" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[18px] font-[600] leading-[27px]">
                    {food.name}
                  </p>
                  <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                    {food.price}₮
                  </p>
                </div>

                <p className="text-[16px] font-[400] leading-[19.09px] text-[#767676]">
                  {food.ingredient}
                </p>
              </div>
            </div>
          );
        })}
        <div className=" flex gap-[10px]">
          <div className="w-[187px] flex flex-col">
            <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
              Нийт төлөх дүн
            </p>
            <p className="text-[18px] font-[700] leading-[27px]">Тоо ₮</p>
          </div>
          <button className="w-[187px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#EEEFF2] text-[#1C20243D] px-4 py-2 flex justify-center items-center">
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};
