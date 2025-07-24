import express from "express"
import { logger } from "./utils/middleRwer.js"
import configRoutes from "./routes/configRoutes.js"

const app = express()
const port =process.env.PORT || 5000

app.use(express.json())
app.use(logger)

configRoutes(app)

app.listen(port, () => {
    console.log(`The server ${port} is app`);
})