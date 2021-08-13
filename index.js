
const express = require("express")
const cors = require('cors')

const conectarDB = require('./config/db')

const app = express()

require('dotenv').config()


conectarDB()

app.use(cors())

app.use(express.json({extended: true}))



app.use("/api/users", require('./routes/users'))
app.use("/api/auth", require('./routes/auth'))

app.get("/", (req, res) => {
    res.send("Hola!")
})



app.listen(process.env.PORT, () => {
    console.log("Estamos conectados al servidor")
})