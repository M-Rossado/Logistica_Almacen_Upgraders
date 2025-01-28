const cors = require('cors');
const express = require("express");
server.use(cors({
    origin: '*'
  }))
require("dotenv").config(); // configuro mi servidor para usar variable de entorno

const router = require("./src/api/routers/routes");

const server = express();
server.use(express.json());

const PORT = process.env.PORT;

server.use("/", router);
server.listen(process.env.PORT, ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

