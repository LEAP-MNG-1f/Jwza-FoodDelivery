import express from "express";
import {
  createCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategory);
categoryRouter.post("/categories", createCategory);
categoryRouter.delete("/categories", deleteCategory);
categoryRouter.put("/categories", updateCategory);

export default categoryRouter;
