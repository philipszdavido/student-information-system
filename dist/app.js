"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const path = require("path");
const chalk = require("chalk");
const index_1 = require("./routes/index");
const cloudinary = require("cloudinary");
const cors = require("cors");
const multipart = require("connect-multiparty");
const app = express();
const router = express.Router();
const multipartWare = multipart();
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({
    extended: true
}));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.use((err, request, response, next) => {
    response.status(err.status || 500);
    response.json({
        error: "Server error"
    });
});
cloudinary.config({
    cloud_name: 'chidumennamdi',
    api_key: '392481138676646',
    api_secret: '6vN978wHnfEr21pKrysWuu7_0UI'
});
index_1.default(router);
app.use('/api', router);
let port = process.env.PORT || 3003;
const server = app.listen(port);
exports.server = server;
console.log(chalk.blue(`App started on port ${port}`));
