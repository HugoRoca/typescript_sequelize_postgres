import express from "express"
import { sequelize } from "./database"
import yenv from "yenv"

const app = express()
const env = yenv()

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected!")
    app.listen(env.PORT, () => console.log(`Server is running`))
  })
  .catch(console.log)
