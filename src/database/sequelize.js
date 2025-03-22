import { Sequelize } from '@sequelize/core'
import { SqliteDialect } from '@sequelize/sqlite3'

const sequelize = new Sequelize(
  {
    storage: 'src/database/database.sqlite',
    dialect: SqliteDialect,
    pool: { max: 1, idle: Infinity, maxUses: Infinity }
  }
)

// Habilita las claves foráneas
await sequelize.query('PRAGMA foreign_keys = ON;')

export default sequelize
