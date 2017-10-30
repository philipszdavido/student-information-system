"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_controller_1 = require("./../controllers/students.controller");
const multipart = require("connect-multiparty");
const multipartWare = multipart();
const studentRoutes = (router) => {
    router
        .route('/students')
        .get(students_controller_1.default.findAll);
    router
        .route('/students')
        .post(multipartWare, students_controller_1.default.create);
    router
        .route('/students/:id')
        .put(students_controller_1.default.updateStudent);
    router
        .route('/students/:id')
        .delete(students_controller_1.default.deleteStudent);
    router
        .route('/students/:id')
        .get(students_controller_1.default.getStudent);
};
exports.default = studentRoutes;
