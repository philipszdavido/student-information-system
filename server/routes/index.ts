import studentRoutes from './../routes/student.route'
import { Router } from 'express'

const routes = (router: Router) => {
    studentRoutes(router)
}

export default routes