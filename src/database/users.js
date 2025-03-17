import bcrypt from 'bcrypt'
import { Sequelize, Model, DataTypes } from '@sequelize/core'
import { SqliteDialect } from '@sequelize/sqlite3'

const sequelize = new Sequelize(
  {
    storage: 'src/database/database.sqlite',
    dialect: SqliteDialect,
    pool: { max: 1, idle: Infinity, maxUses: Infinity }
  }
)

class User extends Model {}

User.init({
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
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    }
  }
})

export default User
