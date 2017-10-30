import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";
import * as path from "path";
import * as chalk from 'chalk'
import routes from './routes/index'
import * as cloudinary from 'cloudinary'
import * as cors from 'cors'
import * as multipart from 'connect-multiparty'

const app: express.Application = express();
const router = express.Router()
const multipartWare = multipart()
app.use(cors())
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use('/static',express.static(path.join(__dirname,'static')))
app.get("/", (request: express.Request, response: express.Response) => {
    response.sendFile(path.join(__dirname,'index.html'))
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
});
cloudinary.config({
    cloud_name: 'chidumennamdi',
    api_key: '392481138676646',
    api_secret: '6vN978wHnfEr21pKrysWuu7_0UI'
})

routes(router)
app.use('/api', router)
let port = process.env.PORT || 3003
const server: http.Server = app.listen(port);
console.log(chalk.blue(`App started on port ${port}`))
export { server };