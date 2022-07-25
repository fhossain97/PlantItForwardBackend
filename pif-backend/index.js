const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 8000
const cors = require('cors')
const itemRoutes = require('./routes/itemRoutes')
const userRoutes = require('./routes/userRoutes')
const multer = require('multer')

require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))


app.use('/item', itemRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.json ('Welcome Plant Friend')
})


app.listen(PORT, () => {
    console.log('Your connection bloomed 🌱🪴 🌺 on', PORT)
})
