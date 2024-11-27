import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({});

  response.json({
    success: true,
    data: result,
  });
};
const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId", "foods");

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
