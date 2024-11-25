import express from "express";
import {
  createOrder,
  getAllOrders,
  deleteOrder,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);
orderRouter.delete("/orders", deleteOrder);
orderRouter.put("/orders", updateOrder);

export default orderRouter;
