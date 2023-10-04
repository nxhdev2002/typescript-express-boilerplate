import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('database_development', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
