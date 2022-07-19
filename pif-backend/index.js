import './db/connection.js'
import itemRoutes from './routes/itemRoutes.js'
import express from 'express'
const PORT = 3000
import morgan from 'morgan'
const app = express()

import cors from 'cors'

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json ('Welcome Plant Friend')
})

app.use('/item', itemRoutes)


app.listen(PORT, () => {
    console.log('Your connection hast bloomed', PORT)
})
