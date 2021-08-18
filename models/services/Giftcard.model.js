const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const giftcardSchema        = new Schema({
    
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

const Giftcard = mongoose.model("Giftcard", giftcardSchema)

//EXPORTACIÓN

module.exports = Giftcard