import express from "express";

const server = express();
const PORT = 8000;

server.get(`/`, (request, response) => {
  response.send("hello get huselt irlee");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} sever ajillaa`);
});
