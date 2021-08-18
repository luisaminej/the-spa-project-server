const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const bodySchema        = new Schema({
    
    products: { type: Schema.Types.ObjectId, ref: "Products" },
    name: String,
    image: String,
    pricelist: String,
    price: String,
    slug: String

    
    
   

},

{    
    timestamps:true,
   
})

//MODELO

const Body = mongoose.model("Body", bodySchema)

//EXPORTACIÓN

module.exports = Body