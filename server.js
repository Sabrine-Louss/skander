const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const cors = require("cors")

app.use(cors())

app.use("/api" , require("./routes/userRoutes"))
app.use("/api/task" , require("./routes/taskRoutes"))

const connectDb = require ("./config/connectDb")
connectDb()

const port = process.env.PORT || 8081
app.listen(port , ()=> console.log("my server is running on port: " , port))