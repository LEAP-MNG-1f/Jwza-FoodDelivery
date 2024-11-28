import express from "express";
import {
  createFood,
  getAllFoods,
  deleteFood,
  updateFood,
  getCategorizedFoods,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.get("/categorized", getCategorizedFoods);
foodRouter.post("/foods", createFood);
foodRouter.delete("/foods", deleteFood);
foodRouter.put("/foods", updateFood);

export default foodRouter;
