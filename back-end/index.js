import express from "express";
import cors from "cors";

const server = express();
const PORT = 8000;
server.use(cors());

server.get(`/`, (request, response) => {
  response.json(["Billy", "Dashka"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} sever ajillaa`);
});
