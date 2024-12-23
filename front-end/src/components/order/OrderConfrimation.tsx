import { BlueCircle } from "@/svg/BlueCircle";
import { LocationIcon } from "@/svg/LocationIcon";
import { useCategorizedFoodContext } from "../context/CategorizedFoodsContext";
import { useFormik } from "formik";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useOrderContext } from "../context/OrderContext";
import CheckOutButton from "./CheckOutButton";
import { useEffect, useState } from "react";
import { GreenCircle } from "@/svg/GreenCircle";

type TOrderedFood = {
  userId: string;
  orderNumber: number;
  foodIds: string[];
  totalPrice: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  information: string;
  paymentType: string;
};

export const OrderConfirmation = () => {
  const { setOrders } = useOrderContext();
  const { cartFoods, totalPrice } = useCategorizedFoodContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const foodsIdArray = cartFoods.map((food) => food._id);

  const loginUserId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  console.log(loginUserId);

  const formik = useFormik<TOrderedFood>({
    initialValues: {
      userId: loginUserId || ``,
      orderNumber: Math.floor(Math.random() * 10000),
      foodIds: foodsIdArray,
      totalPrice: "",
      district: "",
      khoroo: "",
      apartment: "",
      phoneNumber: "",
      information: "",
      paymentType: "",
    },

    onSubmit: async (values) => {
      const orderRequestData = {
        ...values,
        totalPrice: totalPrice?.toString(),
      };

      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderRequestData),
        });
        const data = await response.json();
        if (data?.success) {
          setOrders((prevOrders) => [...prevOrders, data?.data]);
          setIsOpen(true);
          setIsSuccess(true);
        } else {
          alert("Захиалга амжилтгүй боллоо. Мэдээллийг бүрэн оруулна уу");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const getInputClass = (value: string) =>
    value ? "bg-[#18BA51] text-white" : "bg-[#F7F7F8]";

  useEffect(() => {
    const isAllFieldsFilled =
      formik.values.district !== "" &&
      formik.values.khoroo !== "" &&
      formik.values.apartment !== "" &&
      formik.values.information !== "" &&
      formik.values.phoneNumber !== "" &&
      formik.values.paymentType !== "";

    if (isAllFieldsFilled) {
      setIsFilled(true);
    }
  }, [
    formik.values.district,
    formik.values.khoroo,
    formik.values.apartment,
    formik.values.information,
    formik.values.phoneNumber,
    formik.values.paymentType,
  ]);

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div className="w-[1200px] flex justify-between">
        <div className="w-[432px] flex flex-col gap-[15px]">
          <div className="w-full h-[100px] flex gap-4 px-6 py-4">
            {isFilled ? <GreenCircle /> : <BlueCircle />}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#8B8E95]">
                Алхам 1
              </p>
              <p className="text-[20px] font-[400] leading-[23.87px] ">
                Хаягийн мэдээлэл оруулах
              </p>
              <p
                className={`text-[16px] font-[400] leading-[19.09px]  ${
                  isFilled ? "text-[#18BA51]" : "text-[#0468C8]"
                }`}
              >
                {isFilled ? "Оруулсан" : "Хүлээгдэж байна"}
              </p>
            </div>
          </div>
          <div className="w-full h-[612px] flex flex-col gap-10 p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              <p className="text-[14px] font-[400] leading-[16.71px]">
                Хаяг аа оруулна уу
              </p>
              <div
                className={`w-[384px] h-[48px] flex gap-2 px-4 py-2 justify-center items-center rounded-1 ${getInputClass(
                  formik.values.district
                )} `}
              >
                <LocationIcon color={isFilled} />
                <select
                  onChange={formik.handleChange}
                  className={`w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] ${getInputClass(
                    formik.values.district
                  )} outline-none`}
                  name="district"
                  value={formik.values.district}
                >
                  <option value="">Дүүрэг сонгоно уу</option>
                  <option value="БЗД">Баянзүрх дүүрэг</option>
                  <option value="ХУД">Хан-Уул дүүрэг</option>
                  <option value="БГД">Баянгол дүүрэг</option>
                  <option value="СХД">Сонгинохайрхан дүүрэг</option>
                  <option value="ЧД">Чингэлтэй дүүрэг</option>
                </select>
              </div>
              <div
                className={`w-[384px] h-[48px] flex gap-2 px-4 py-2 justify-center items-center rounded-1 ${getInputClass(
                  formik.values.khoroo
                )} `}
              >
                <LocationIcon color={isFilled} />
                <select
                  onChange={formik.handleChange}
                  className={`w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] ${getInputClass(
                    formik.values.khoroo
                  )} outline-none`}
                  name="khoroo"
                  id="khoroo"
                  value={formik.values.khoroo}
                >
                  <option value="">Хороо сонгоно уу</option>
                  <option value="1-r khoroo">1-р хороо</option>
                  <option value="2-r khoroo">2-р хороо</option>
                  <option value="3-r khoroo">3-р хороо</option>
                  <option value="4-r khoroo">4-р хороо</option>
                  <option value="5-r khoroo">5-р хороо</option>
                  <option value="6-r khoroo">6-р хороо</option>
                  <option value="7-r khoroo">7-р хороо</option>
                </select>
              </div>
              <div
                className={`w-[384px] h-[48px] flex gap-2 px-4 py-2 justify-center items-center rounded-1 ${getInputClass(
                  formik.values.apartment
                )} `}
              >
                <LocationIcon color={isFilled} />
                <select
                  onChange={formik.handleChange}
                  className={`w-[320px] text-[16px] font-[400] leading-[19.09px] text-[#8B8E95] ${getInputClass(
                    formik.values.apartment
                  )} outline-none`}
                  name="apartment"
                  id="apartment"
                  value={formik.values.apartment}
                >
                  <option value="">Байр гудамж сонгоно уу</option>
                  <option value="Нархан хотхон">Нархан хотхон</option>
                  <option value="26-р байр">26-р байр</option>
                  <option value="Хоймор хотхон">Хоймор хотхон</option>
                  <option value="45-р байр">45-р байр</option>
                  <option value="Зайсан хотхон">Зайсан хотхон</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-[400] leading-[16.71px] ">
                  Нэмэлт мэдээлэл
                </p>
                <textarea
                  className="h-[112px] px-4 py-2 text-[#333333] bg-[#F7F7F8]"
                  name="information"
                  onChange={formik.handleChange}
                  value={formik.values.information}
                  id="information"
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
                  className="px-4 py-2 text-[#333333] bg-[#F7F7F8]"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-[400] leading-[16.71px] ">
                  Төлбөр төлөх
                </p>
                <div className="flex gap-[33px]">
                  <div className="flex gap-2 w-[175.5px]">
                    <input
                      type="checkbox"
                      name="paymentType"
                      value="Cash"
                      checked={formik.values.paymentType === "Cash"}
                      onChange={() =>
                        formik.setFieldValue("paymentType", "Cash")
                      }
                    />
                    <p className="text-[16px] font-[400] leading-[19.09px] text-[#8B8E95]">
                      Бэлнээр
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="paymentType"
                      value="Card"
                      checked={formik.values.paymentType === "Card"}
                      onChange={() =>
                        formik.setFieldValue("paymentType", "Card")
                      }
                    />
                    <p className="text-[16px] font-[400] leading-[19.09px] text-[#8B8E95]">
                      Картаар
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[432px] flex flex-col  gap-[15px]">
          <div className="w-full h-[100px] flex gap-4 px-6 py-4">
            {isSuccess ? <GreenCircle /> : <BlueCircle />}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#8B8E95]">
                Алхам 2
              </p>
              <p className="text-[20px] font-[400] leading-[23.87px] ">
                Захиалга баталгаажуулах
              </p>
              <p
                className={`text-[16px] font-[400] leading-[19.09px]  ${
                  isSuccess ? "text-[#18BA51]" : "text-[#0468C8]"
                }`}
              >
                {isSuccess ? "Захиалсан" : "Хүлээгдэж байна"}
              </p>
            </div>
          </div>
          <div className="w-full h-[612px] p-6 flex flex-col justify-between shadow-xl overflow-auto">
            {cartFoods?.map((food) => {
              return (
                <div
                  key={food._id}
                  className="w-[384px] flex gap-4 p-4 border-t border-t-[#D6D8DB] border-b border-b-[#D6D8DB]"
                >
                  <img className="w-[50%] h-[121px]" src={food.image} alt="" />
                  <div className="w-[50%] flex flex-col gap-2">
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
            <div className=" flex gap-[10px] sticky bottom-0">
              <div className="w-[187px] flex flex-col">
                <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
                  Нийт төлөх дүн
                </p>
                <p className="text-[18px] font-[700] leading-[27px]">
                  {totalPrice} ₮
                </p>
              </div>

              <CheckOutButton
                open={isOpen}
                setOpen={setIsOpen}
                isFilled={isFilled}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
