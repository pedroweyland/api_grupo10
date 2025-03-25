import bcrypt from 'bcrypt'
import { Model, DataTypes } from '@sequelize/core'
import sequelize from './sequelize.js'

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    }
  }
})

export default Users
