const { Sequelize, Model } = require('sequelize')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('movies_project', 'root', `${process.env.PASSWORD_ROOT}`, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

class User extends Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  address: {
    type: Sequelize.STRING,
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

module.exports = {
  User
}
