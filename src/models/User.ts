
import sequelize from '@/utils/dbConn';
import { Sequelize, DataTypes, Model } from 'sequelize';
import jwt from 'jsonwebtoken'
class User extends Model {
  declare id: number
  getJwtToken() {
    return jwt.sign({
      id: this.id,
    }, process.env.JWT_SECRET!)
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User'
});



export default User;