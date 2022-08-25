const express = require('express');
const session = require('express-session');
const { createServer } = require('http');
const passport = require('passport')
const fs = require('fs');
const mongoose = require('mongoose');

const { HTTP_HOST, HTTP_PORT, MONGO_URL } = require('./config');

if (!fs.existsSync('storage')) {
    fs.mkdirSync('storage');
}

const app = express()

app.use(express.json());


async function start() {
    try {
      const server = createServer(app);
      await mongoose.connect(MONGO_URL);
      server.listen(HTTP_PORT, () => {
        console.log(`Server: http://${HTTP_HOST}:${HTTP_PORT}`);
      })
    } catch (error) {
      console.error(error);
    }
}

start();