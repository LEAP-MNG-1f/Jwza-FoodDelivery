import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  try {
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
  } catch (error) {
    response.json({ success: false });
  }
};
const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find().populate("userId").populate("foodIds");

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteOrder = async (request, response) => {
  try {
    const result = await Order.findByIdAndRemove({
      _id: "",
    });

    response.json({
      success: Food,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateOrder = async (request, response) => {
  try {
    const result = await Order.findByIdAndUpdate({
      _id: "",
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllOrders, createOrder, deleteOrder, updateOrder };
