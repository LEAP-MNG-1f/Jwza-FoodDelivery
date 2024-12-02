import mongoose from "mongoose";

const processEnum = {
  values: ["Progress", "Delivered", "Waiting", "Active"],
};

const paymentEnum = {
  values: ["Card", "Cash"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
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
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: paymentEnum,
  },
});

export const Order = mongoose.model("Order", orderSchema);
