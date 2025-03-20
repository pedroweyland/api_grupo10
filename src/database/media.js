import { Model, DataTypes } from '@sequelize/core'
import sequelize from './sequelize.js'

class Media extends Model {}

Media.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.ENUM('movie', 'serie'),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  original_title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  poster_path: {
    type: DataTypes.STRING,
    allowNull: true
  },
  vote_average: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  sequelize
}
)

export default Media
