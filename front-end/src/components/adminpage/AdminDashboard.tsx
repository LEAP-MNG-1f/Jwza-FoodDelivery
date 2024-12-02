import { ThreeDotsIcon } from "@/svg/ThreeDotsIcon";
import { useOrderContext } from "../context/OrderContext";

export const AdminDashboard = () => {
  const { orders } = useOrderContext();

  return (
    <div className="w-full h-full flex justify-center mt-[89px] bg-[#F7F7F8] ">
      <div className="w-[1024px]  rounded-xl border border-[#ECEDF0] mt-[30px]">
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
        {orders?.map((order) => {
          return (
            <div
              key={order?._id}
              className="flex bg-white  border-b border-b-[#ECEDF0] mt-3"
            >
              <div className="flex flex-col gap-1">
                {order.foodIds.map((foods) => {
                  return (
                    <div
                      key={foods._id}
                      className="w-[229.67px] px-6 py-4 flex gap-2"
                    >
                      <img
                        className="w-[40px] h-[40px] rounded-[4px]"
                        src={foods?.image}
                        alt=""
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-[14px] font-[600] leading-[16px]">
                          Order Number {order?.orderNumber}
                        </p>
                        <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
                          {foods?.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-[140px] px-6 py-4 flex flex-col justify-center gap-1">
                <p className="text-[14px] font-[600] leading-[16px]">
                  {order.phoneNumber}
                </p>
                <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
                  {order?.userId?.name}
                </p>
              </div>

              <div className="w-[229.67px] px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-[600] leading-[16px]">
                    {order?.totalPrice}₮
                  </p>
                  <p className="text-[14px] font-[400] leading-[20px] text-[#3F4145]">
                    {order?.createdAt}
                  </p>
                </div>
                <p className="w-[44px] h-[24px] px-5 py-3 flex justify-center items-center rounded-xl bg-[#C1E6CF] text-[14px] font-[400] leading-[20px] text-[#0A4E22]">
                  {order?.paymentType}
                </p>
              </div>
              <p className="w-[229.67px] px-6 py-4 text-[14px] font-[400] leading-[20px] flex items-center">
                {order?.district},{order?.khoroo},{order?.apartment},
                {order?.information}
              </p>
              <div className="w-[127px] px-6 py-4 flex justify-between items-center">
                <p className="px-2 py-1 text-[14px] font-[400] leading-[20px] flex justify-center items-center rounded-xl bg-[#FDF4B6]">
                  {order?.process}
                </p>
              </div>
              <button className="w-[68px] p-4">
                <ThreeDotsIcon />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
