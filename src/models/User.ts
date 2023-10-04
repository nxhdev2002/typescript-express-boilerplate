
import sequelize from '@/utils/dbConn';
import { Sequelize, DataTypes, Model } from 'sequelize';

class User extends Model {}
User.init({
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