import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'), { flags: 'a' }
)

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('combined', { stream: accessLogStream }))

export default app
