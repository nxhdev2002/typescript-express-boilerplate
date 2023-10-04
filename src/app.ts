import userRouters from '@/routes/UserRoute'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import morgan from 'morgan'
import path from 'path'
import catchError from '@/middlewares/catchError'
import { isAuthenticatedUser } from '@/middlewares/auth'

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/access.log'), { flags: 'a' }
)

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('combined', { stream: accessLogStream }))

/// routes
app.use('/api/v1/users', isAuthenticatedUser, userRouters)

app.use(catchError)
export default app
