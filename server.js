//1 require express
const express = require('express');

//2 create an instance of express
const app = express();

//3 body-parser middleware
app.use(express.json());

//4 require dotenv
require('dotenv').config();

//5 port
const PORT = process.env.PORT || 5002;

//6 listen to the server
app.listen(PORT, (err)=>{
    err?console.log(err)
    :console.log(`the Server is running at http://127.0.0.1:${PORT}`)
})

//7 connection to BD
const connect = require('./connectDB/connectDB')

connect()