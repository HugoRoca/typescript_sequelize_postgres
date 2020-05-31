import { Sequelize } from "sequelize"
import yenv from "yenv"

const env = yenv()
const {
  HOST,
  DATABASE_NAME,
  USERNAME,
  PASSWORD,
  DIALECT,
} = env.DATABASE.POSTGRESQL

const config = {
  host: HOST,
  dialect: DIALECT,
  define: {
    createdAt: "date_created",
    updatedAt: "date_last_updated",
  },
}

let sequelize
if (env.NODE_ENV === "production") {
  sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
    ...config,
    dialectOptions: {
      ssl: true,
      native: true,
    },
    logging: true
  })
} else {
  sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, config)
}

const db = {}

