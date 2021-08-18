const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const bodilySchema        = new Schema({
    
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

const Bodily = mongoose.model("Bodily", bodilySchema)

//EXPORTACIÓN

module.exports = Bodily