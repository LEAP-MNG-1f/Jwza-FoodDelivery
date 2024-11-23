import { InvisibleIcon } from "@/svg/InvisibleIcon";

export const Login = () => {
  return (
    <div className="w-full flex justify-center mt-[140px] mb-[180px]">
      <div className="w-[448px] h-[549px] p-8 flex flex-col gap-[48px] items-center">
        <p className="text-[28px] font-[700] leading-[33.41px] ">Нэвтрэх</p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[400] leading-[16.71px]">Имэйл </p>
            <input
              className="px-4 py-2 rounded-[4px] border text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
              placeholder="Имэйл хаягаа оруулна уу"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[400] leading-[16.71px]">Нууц үг</p>
            <div className="flex justify-between bg-[#F7F7F8] border px-4 py-2 ">
              <input
                className="w-[400px] rounded-[4px]  text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
                placeholder="Нууц үг"
                type="text"
              />
              <InvisibleIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <button className="w-full px-4 py-2 rounded-[4px] text-[16px] font-[400] leading-[19.09px] text-[#1C20243D] bg-[#EEEFF2]">
            Нэвтрэх
          </button>
          <p className="text-[14px] font-[400] leading-[16.71px]">Эсвэл</p>
          <button className="w-full px-4 py-2 rounded-[4px] text-[16px] font-[400] leading-[19.09px] border border-[#18BA51]">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
