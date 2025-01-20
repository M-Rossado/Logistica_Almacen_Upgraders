const express = require('express');
require("dotenv").config();

const connectDB = require('./src/utils/db_sportevent');
connectDB();

const routes = require('./src/api/routers/routes')

const cloudinary = require('cloudinary').v2
// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});


const server = express();
server.use(express.json());

const PORT = process.env.PORT;
server.listen(PORT, () =>{
    console.log(`server running port http://localhost:${PORT}`);
});

server.use('/', routes);
