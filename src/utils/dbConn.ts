import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.SQL_DATABASE as string,
  process.env.SQL_USERNAME as string,
  process.env.SQL_PASSWORD as string,
  {
    host: process.env.SQL_ADDRESS,
    dialect: 'mysql'
  })

export default sequelize
