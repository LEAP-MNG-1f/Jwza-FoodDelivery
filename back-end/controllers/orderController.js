import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const {
    userId,
    orderNumber,
    foodIds,
    totalPrice,
    district,
    khoroo,
    apartment,
    phoneNumber,
    information,
    paymentType,
  } = request.body;

  const result = await Order.create({
    userId: userId,
    orderNumber: orderNumber,
    foodIds: foodIds,
    totalPrice: totalPrice,
    district: district,
    khoroo: khoroo,
    apartment: apartment,
    information: information,
    phoneNumber: phoneNumber,
    paymentType: paymentType,
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId").populate("foodIds");

  response.json({
    success: true,
    data: result,
  });
};
const deleteOrder = async (request, response) => {
  const result = await Order.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: Food,
    data: result,
  });
};
const updateOrder = async (request, response) => {
  const result = await Order.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllOrders, createOrder, deleteOrder, updateOrder };
