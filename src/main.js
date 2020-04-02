const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require("dotenv-safe").config()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(5000, () => {
    console.log('App listening on port 5000')
})