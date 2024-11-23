import { InvisibleIcon } from "@/svg/InvisibleIcon";

export const SignUp = () => {
  return (
    <div className="w-full flex justify-center mt-[140px] mb-[180px]">
      <div className="w-[448px] h-[549px] p-8 flex flex-col gap-[48px] items-center">
        <p className="text-[28px] font-[700] leading-[33.41px] ">Бүртгүүлэх</p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[400] leading-[16.71px]">Нэр </p>
            <input
              className="px-4 py-2 rounded-[4px] border text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
              placeholder="Нэрээ оруулна уу"
              type="text"
            />
          </div>
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
                placeholder="Нууц үгээ оруулна уу"
                type="text"
              />
              <InvisibleIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[400] leading-[16.71px]">
              Нууц үг давтах
            </p>
            <div className="flex justify-between bg-[#F7F7F8] border px-4 py-2 ">
              <input
                className="w-[400px] rounded-[4px]  text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
                placeholder="Нууц үгээ оруулна уу"
                type="text"
              />
              <InvisibleIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <p className="text-[14px] font-[400] leading-[16.71px]">
              Үйлчилгээний нөхцөл зөвшөөрөх
            </p>
          </div>
          <button className="w-full px-4 py-2 rounded-[4px] text-[16px] font-[400] leading-[19.09px] text-[#1C20243D] bg-[#EEEFF2]">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
