import express from 'express'
import cors from 'cors'
import { readdirSync } from 'fs'
import mongoose from 'mongoose'
const morgan = require('morgan')
import dotenv from 'dotenv'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

const csrfProtection = csrf({ cookie: true })

dotenv.config()

// create express app
const app = express()

// db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('**DB CONNECTED**'))
.catch((err) => console.log('DB CONNECTION ERR => ', err))


// apply middlewates
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

// route
readdirSync('./routes').map(r => (
  app.use('/api', require(`./routes/${r}`))
))

//csrf
app.use(csrfProtection)

app.get('/api/csrf-token', (req, res)  => {
  res.json({ csrfToken: req.csrfToken() })
})

// port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))