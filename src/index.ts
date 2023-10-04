import { configDotenv } from 'dotenv'
import app from '@/app'

process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.stack}`)
  process.exit(1)
})

configDotenv()

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
})

process.on('unhandledRejection', (err: Error) => {
  console.log(`ERROR: ${err.message}`)
  server.close(() => {
    process.exit(1)
  })
})
