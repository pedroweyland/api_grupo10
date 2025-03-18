import { Model, DataTypes } from '@sequelize/core'
import sequelize from './sequelize.js'
import User from './users.js'
import Media from './media.js'

class Lists extends Model {}

Lists.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  },
  id_media: {
    type: DataTypes.INTEGER,
    references: {
      model: Media,
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('favorite', 'watchlist'),
    allowNull: false
  }

}, {
  sequelize
})

export default Lists
