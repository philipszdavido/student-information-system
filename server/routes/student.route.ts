import studentsController from './../controllers/students.controller'
import { Router } from 'express'
import * as multipart from 'connect-multiparty'
const multipartWare = multipart()

const studentRoutes = (router: Router) => {
    router
        .route('/students')
        .get(studentsController.findAll)

    router
        .route('/students')
        .post(multipartWare, studentsController.create)

    router
        .route('/students/:id')
        .put(studentsController.updateStudent)

    router
        .route('/students/:id')
        .delete(studentsController.deleteStudent)

    router
        .route('/students/:id')
        .get(studentsController.getStudent)
}
export default studentRoutes