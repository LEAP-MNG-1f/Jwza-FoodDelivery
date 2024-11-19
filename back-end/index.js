import express from "express";
import cors from "cors";

import { v2 as cloudinary } from "cloudinary";

const server = express();

const PORT = 8000;
server.use(cors());

server.get(`/`, (request, response) => {
  response.json(["Billy", "Dashka"]);
});

server.post(`/assets`, async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: "dvsck0zho",
      api_key: 327674241176249,
      api_secret: "5xUa4tY2UTewezjBNF_Hz-Efuu8",
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
