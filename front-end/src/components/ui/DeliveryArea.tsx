import { PlusIcon } from "@/svg/PlusIcon";

export const DeliveryArea = () => {
  return (
    <div className="flex justify-center mt-[109px] mb-[60px]">
      <div className="flex flex-col justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10695.928318820452!2d106.9093603!3d47.9173842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924423920d8d%3A0x458ba9ebf806cbfd!2sSukhbaatar%20Square%2C%20Ulaanbaatar!5e0!3m2!1sen!2smn!4v1732291755320!5m2!1sen!2smn"
          width="1200"
          height="616"
          loading="lazy"
        ></iframe>
        <div className="flex py-4 items-center gap-2 mt-7">
          <PlusIcon />
          <p className="text-[22px] font-[700] leading-[33px]">
            Хүргэлтийн бүс дэх хаягууд
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <div className="p-6 w-[588px] h-[388px] rounded-2xl shadow-2xl gap-4 flex flex-col">
            <p className="py-4 border-b border-b-[#18BA51] text-[20px] font-[590] leading-[23.87px]">
              А бүс
            </p>
            <div className="flex gap-4">
              <div className="w-[262px] flex flex-col gap-4 text-[16px] font-[400] leading-[19.09px]">
                <p>Нархан хотхон</p>
                <p>26-р байр</p>
                <p>26-р байр</p>
                <p>45-р байр</p>
                <p>3-р байр</p>
                <p>Хоймор хотхон </p>
                <p>Хоймор хотхон </p>
              </div>
              <div className="w-[262px] flex flex-col gap-4 text-[16px] font-[400] leading-[19.09px]">
                <p>Нархан хотхон</p>
                <p>26-р байр</p>
                <p>26-р байр</p>
                <p>45-р байр</p>
                <p>3-р байр</p>
                <p>Хоймор хотхон </p>
                <p>Хоймор хотхон </p>
              </div>
            </div>
          </div>
          <div className="p-6 w-[588px] h-[388px] rounded-2xl shadow-2xl gap-4 flex flex-col">
            <p className="py-4 border-b border-b-[#18BA51] text-[20px] font-[590] leading-[23.87px]">
              Б бүс
            </p>
            <div className="flex gap-4">
              <div className="w-[262px] flex flex-col gap-4 text-[16px] font-[400] leading-[19.09px]">
                <p>Нархан хотхон</p>
                <p>26-р байр</p>
                <p>26-р байр</p>
                <p>45-р байр</p>
                <p>3-р байр</p>
                <p>Хоймор хотхон </p>
                <p>Хоймор хотхон </p>
              </div>
              <div className="w-[262px] flex flex-col gap-4 text-[16px] font-[400] leading-[19.09px]">
                <p>Нархан хотхон</p>
                <p>26-р байр</p>
                <p>26-р байр</p>
                <p>45-р байр</p>
                <p>3-р байр</p>
                <p>Хоймор хотхон </p>
                <p>Хоймор хотхон </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
