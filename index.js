
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

app.use('/api/products', require('./routes/products/products'))
app.use('/api/services', require('./routes/services/services'))








app.use('/api/products/body', require('./routes/products/body'))
app.use('/api/products/face', require('./routes/products/face'))


app.use('/api/services/bodily', require('./routes/services/bodily'))
app.use('/api/services/facials', require('./routes/services/facials'))
app.use('/api/services/giftcard', require('./routes/services/giftcard'))
app.use('/api/services/facials', require('./routes/services/facials'))
app.use('/api/services/membership', require('./routes/services/membership'))
app.use('/api/services/packs', require('./routes/services/packs'))


app.get("/", (req, res) => {
    res.send("Hola!")
})



app.listen(process.env.PORT, () => {
    console.log("Estamos conectados al servidor")
})