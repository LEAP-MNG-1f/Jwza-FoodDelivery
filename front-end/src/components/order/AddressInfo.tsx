import { BlueCircle } from "@/svg/BlueCircle";

import { LocationIcon } from "@/svg/LocationIcon";

export const AddressInfo = () => {
  return (
    <div className="w-[432px] flex flex-col mt-[200px] shadow-xl ml-[100px]">
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
          <div className="w-[384px] h-[48px] flex gap-2 bg-[#F7F7F8] px-4 py-2 justify-center items-center rounded-1">
            <LocationIcon />
            <select
              className="w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] bg-[#F7F7F8]"
              name=""
              id=""
            >
              <option value="">Дүүрэг сонгоно уу</option>
              <option value="">Баянзүрх дүүрэг</option>
              <option value="">Хан-Уул дүүрэг</option>
              <option value="">Баянгол дүүрэг</option>
              <option value="">Сонгинохайрхан дүүрэг</option>
              <option value="">Чингэлтэй дүүрэг</option>
            </select>
          </div>
          <div className="w-[384px] h-[48px] flex gap-2 bg-[#F7F7F8] px-4 py-2 justify-center items-center rounded-1">
            <LocationIcon />
            <select
              className="w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] bg-[#F7F7F8]"
              name=""
              id=""
            >
              <option value="">Хороо сонгоно уу</option>
              <option value="">1-р хороо</option>
              <option value="">2-р хороо</option>
              <option value="">3-р хороо</option>
              <option value="">4-р хороо</option>
              <option value="">5-р хороо</option>
              <option value="">6-р хороо</option>
              <option value="">7-р хороо</option>
            </select>
          </div>
          <div className="w-[384px] h-[48px] flex gap-2 bg-[#F7F7F8] px-4 py-2 justify-center items-center rounded-1">
            <LocationIcon />
            <select
              className="w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] bg-[#F7F7F8]"
              name=""
              id=""
            >
              <option value="">Байр гудамж сонгоно уу</option>
              <option value="">Нархан хотхон</option>
              <option value="">26-р байр</option>
              <option value="">Хоймор хотхон</option>
              <option value="">45-р байр</option>
              <option value="">Зайсан хотхон</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-[400] leading-[16.71px] ">
              Нэмэлт мэдээлэл
            </p>
            <textarea
              className="h-[112px] px-4 py-2 text-[#F7F7F8] bg-[#F7F7F8]"
              name=""
              id=""
              placeholder="Орц, давхар, орцны код ..."
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-[400] leading-[16.71px] ">
              Утасны дугаар
            </p>
            <input
              type="text"
              placeholder="Утасны дугаараа оруулна уу"
              className=" px-4 py-2 text-[#F7F7F8] bg-[#F7F7F8]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-[400] leading-[16.71px] ">
              Төлбөр төлөх
            </p>
            <div className="flex gap-[33px]">
              <div className="flex gap-2 w-[175.5px]">
                <input type="checkbox" />
                <p className="text-[16px] font-[400] leading-[19.09px] text-[#8B8E95]">
                  Бэлнээр
                </p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-[16px] font-[400] leading-[19.09px] text-[#8B8E95]">
                  Картаар
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
