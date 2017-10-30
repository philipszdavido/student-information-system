"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/student-info-system";
const db = mongoose.connect(url, {
    useMongoClient: true
});
var StudentSchema = new Schema({
    name: String,
    course: String,
    level: String,
    url: String
});
exports.default = mongoose.model('Student', StudentSchema);
