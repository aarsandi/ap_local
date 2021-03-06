require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`app running at port : ${port}`)
})
