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
  sequelize,
  tableName: 'lists', // Especifica el nombre explícito de la tabla en la base de datos
  timestamps: true // Agrega createdAt y updatedAt automáticamente
}
)

// Relaciones
Lists.belongsTo(User, {
  foreignKey: {
    name: 'id_user',
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
})

Lists.belongsTo(Media, {
  foreignKey: {
    name: 'id_media',
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
})

export default Lists
