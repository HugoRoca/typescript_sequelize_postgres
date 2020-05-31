import { Sequelize } from "sequelize-typescript"
import yenv from "yenv"

const env = yenv()
const {
  HOST,
  DATABASE_NAME,
  USERNAME,
  PASSWORD,
  DIALECT,
} = env.DATABASE.POSTGRESQL

let config = {
  host: HOST,
  dialect: DIALECT,
  define: {
    createdAt: "date_created",
    updatedAt: "date_last_updated",
  },
  models: [__dirname + '/models'],
}

if (env.NODE_ENV === "production") {
  const config_prd = {
    ...config,
    dialectOptions: {
      ssl: true,
      native: true,
    },
    logging: true,
  }
  config = config_prd
}

export const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, config)
