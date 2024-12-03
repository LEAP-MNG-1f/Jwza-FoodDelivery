import express from "express";
import {
  createUser,
  getAllUsers,
  userExist,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", createUser);
userRouter.post("/users/login", userExist);

export default userRouter;
