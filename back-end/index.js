import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

const server = express();
dotenv.config();
const PORT = 8000;
server.use(cors());

server.get(`/`, (request, response) => {
  response.json(["Billy", "Dashka"]);
});

server.post(`/assets`, async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const result = await cloudinary.uploader.upload("./assets/Soupred.png");
    response.json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} sever ajillaa`);
});
