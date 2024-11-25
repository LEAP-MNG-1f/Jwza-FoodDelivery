import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  ingredient: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export const Food = new mongoose.model("Food", foodSchema);
