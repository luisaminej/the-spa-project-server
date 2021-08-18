const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const membershipSchema        = new Schema({
    
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

const Membership = mongoose.model("Membership", membershipSchema)

//EXPORTACIÓN

module.exports = Membership