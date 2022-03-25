const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const dotenv = require('dotenv');
const colors = require('colors');
const uuid = require('uuid');
const dialogflow = require("@google-cloud/dialogflow");
dotenv.config({ path: "./config/config.env" });

const PORT =  process.env.PORT || 3000;
const app = express();

app.listen(PORT, ()=>{
  console.log(`listening on Port:${PORT} And URL: http://localhost:${PORT}`.yellow.bold);
});
