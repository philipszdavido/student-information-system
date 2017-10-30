import * as mongoose from 'mongoose'
var Schema = mongoose.Schema
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/student-info-system"

const db: mongoose.MongooseThenable = mongoose.connect(url, {
    useMongoClient: true
})

var StudentSchema = new Schema({
    name: String,
    course: String,
    level: String,
    url: String
})
export default mongoose.model('Student', StudentSchema)