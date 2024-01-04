const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()
const app = express();

app.use(express.static('./public')) // middleware to connect static items

app.use(express.json())  // middleware to make it possible to read json in req body
app.use('/api/v1/tasks', tasks)  // handle routes

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {   // check for db connection and then reun server
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("server is running.."))
    } catch (error) {
        console.log(error)
    }
}

start()

