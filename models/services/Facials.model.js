const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const facialsSchema        = new Schema({
    
    services: { type: Schema.Types.ObjectId, ref: "Services" },
    name: String,
    image: String,
    pricelist: String,
    price: String,
    slug: String,
    description: String,
    details: String

    
    
   

},

{    
    timestamps:true,
   
})

//MODELO

const Facials = mongoose.model("Facials", facialsSchema)

//EXPORTACIÓN

module.exports = Facials