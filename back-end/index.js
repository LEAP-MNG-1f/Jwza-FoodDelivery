import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import bodyParser from "body-parser";

const server = express();
const PORT = process.env.PORT || 8000;
dotenv.config();

server.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_API);

server.use(cors());
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);

dotenv.config();

// server.post(`/assets`, async (request, response) => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
//     const result = await cloudinary.uploader.upload("./assets/Soupred.png");
//     response.json(result);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} sever ajillaa`);
});
