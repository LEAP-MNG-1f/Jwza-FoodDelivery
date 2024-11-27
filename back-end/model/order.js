import mongoose from "mongoose";

const processEnum = {
  values: ["Progress", "Delivered", "Waiting", "Active"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
    default: "Progress",
  },
  createdAt: {
    type: Date,
    deafault: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
});

export const Order = new mongoose.model("Order", orderSchema);
