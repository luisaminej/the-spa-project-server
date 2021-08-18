const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const packsSchema        = new Schema({
    
    services: { type: Schema.Types.ObjectId, ref: "Services" },
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

const Packs = mongoose.model("Packs", packsSchema)

//EXPORTACIÓN

module.exports = Packs