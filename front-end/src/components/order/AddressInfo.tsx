import { BlueCircle } from "@/svg/BlueCircle";
import { LocationIcon } from "@/svg/LocationIcon";

export const AddressInfo = () => {
  return (
    <div className="w-[432px] flex flex-col mt-[200px]">
      <div className="w-full h-[100px] flex gap-4 px-6 py-4">
        <BlueCircle />
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-[400] leading-[16.71px] text-[#8B8E95]">
            Алхам 1
          </p>
          <p className="text-[20px] font-[400] leading-[23.87px] ">
            Хаягийн мэдээлэл оруулах
          </p>
          <p className="text-[16px] font-[400] leading-[19.09px] text-[#0468C8]">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-6">
        <div className="flex flex-col gap-4">
          <p className="text-[14px] font-[400] leading-[16.71px]">
            Хаяг аа оруулна уу
          </p>
          <div className="flex">
            <LocationIcon />
            <select name="" id="">
              <option value="">Дүүрэг сонгоно уу</option>
              <option value="">Баянзүрх дүүрэг</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
