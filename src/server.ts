import express from "express"
import yenv from "yenv"

const app = express()
const env = yenv()

app.listen(env.PORT, () => console.log(`Server is running`))