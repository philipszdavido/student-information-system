"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./../models/student");
const cloudinary = require("cloudinary");
const multipart = require("connect-multiparty");
const multipartWare = multipart();
exports.default = {
    create(req, res, next) {
        cloudinary.uploader.upload(req.files.image.path, (result) => {
            (new student_1.default(Object.assign({ url: result.url }, req.body))).save((err, newStudent) => {
                const cloud_res = {
                    url: result.url
                };
                const newS = newStudent.toObject();
                console.log(Object.assign({ url: result.url }, req.body));
                if (err)
                    res.send(err);
                else if (!newStudent)
                    res.send(400);
                else
                    res.send(Object.assign({}, newS, cloud_res));
                next();
            });
        }, {
            resource_type: 'image',
            eager: [
                { effect: 'sepia' }
            ]
        });
    },
    findAll(req, res, next) {
        student_1.default.find((eerr, data) => {
            if (eerr) {
                res.send(eerr);
            }
            else {
                res.send(data);
            }
            next();
        });
    },
    deleteStudent(req, res, next) {
        student_1.default.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                res.send(err);
            else
                res.send(204);
            next();
        });
    },
    updateStudent(req, res, next) {
        student_1.default.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
            if (err)
                res.send(err);
            else if (!updatedStudent)
                res.send(400);
            else
                res.send(updatedStudent);
            next();
        });
    },
    getStudent(req, res, next) {
        student_1.default.findById(req.params.id, (err, student) => {
            if (err)
                res.send(err);
            else if (!student)
                res.send(404);
            else
                res.send(student);
            next();
        });
    }
};
