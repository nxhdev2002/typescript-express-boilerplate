/* eslint-disable import/first */
import { configDotenv } from 'dotenv'
configDotenv()

import app from '@/app'
import sequelize from '@/utils/dbConn'

process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.stack}`)
  process.exit(1)
})

sequelize.authenticate().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    )
  })
}).catch((err) => {
  console.log(err)
})
