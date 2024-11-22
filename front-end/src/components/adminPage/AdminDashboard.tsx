import { ThreeDotsIcon } from "@/svg/ThreeDotsIcon";

export const AdminDashboard = () => {
  return (
    <div className="w-full flex justify-center mt-[89px] bg-[#F7F7F8]">
      <div className="w-[1024px] rounded-xl border border-[#ECEDF0]">
        <div className="w-[1024px] h-[76px]  bg-white rounded-t-xl">
          <p className="h-[56px] text-[20px]  font-[700] leading-[28px] px-5 pt-6">
            Admin dashboard
          </p>
        </div>
        <div className="w-full flex flex-col ">
          <div className="h-[44px] flex items-center border-b border-b-[#ECEDF0] text-[12px] font-[600] leading-[16px]">
            <p className="w-[229.67px] px-6 py-4 ">Order name</p>
            <p className="w-[140px] px-6 py-4 ">Buyer info</p>
            <p className="w-[229.67px] px-6 py-4 ">Payment</p>
            <p className="w-[229.67px] px-6 py-4 ">Address</p>
            <p className="w-[127px] px-6 py-4 ">Delivery state</p>
          </div>
        </div>
        <div className="flex bg-white h-[72px] border-b border-b-[#ECEDF0]">
          <div className="w-[229.67px] px-6 py-4 flex gap-2">
            <img
              className="w-[40px] h-[40px] rounded-[4px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwcNFoNWXoJ4khYIgrYGc98xBxAbMZiz85Q&s"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-[14px] font-[600] leading-[16px]">#23790</p>
              <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
                Breakfast
              </p>
            </div>
          </div>
          <div className="w-[140px] px-6 py-4 flex flex-col justify-center">
            <p className="text-[14px] font-[600] leading-[16px]">89443125</p>
            <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
              Boldoo
            </p>
          </div>

          <div className="w-[229.67px] px-6 py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[14px] font-[600] leading-[16px]">24500₮</p>
              <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
                2024/09/17 17:40
              </p>
            </div>
            <p className="w-[44px] h-[24px] flex justify-center items-center rounded-xl bg-[#C1E6CF] text-[14px] font-[400] leading-[20px] text-[#0A4E22]">
              Paid
            </p>
          </div>
          <p className="w-[229.67px] px-6 py-4 text-[14px] font-[400] leading-[20px] flex items-center">
            БЗД, 2-р хороо, Нархан хотхон, 2-р орц, 5 - 63тоот
          </p>
          <div className="w-[127px] px-6 py-4 flex justify-between items-center">
            <p className="px-2 py-1 text-[14px] font-[400] leading-[20px] flex justify-center items-center rounded-xl bg-[#FDF4B6]">
              Progress
            </p>
          </div>
          <button className="w-[68px] p-4">
            <ThreeDotsIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
