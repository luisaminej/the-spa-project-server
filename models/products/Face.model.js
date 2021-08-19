const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const faceSchema        = new Schema({
    
    products: { type: Schema.Types.ObjectId, ref: "Products" },
    name: String,
    image: String,
    pricelist: String,
    price: String,
    slug: String,
    description: String,
    details1: String,
    details2: String,
    details3: String,
    details4: String

    
    
   

},

{    
    timestamps:true,
   
})

//MODELO

const Face = mongoose.model("Face", faceSchema)

//EXPORTACIÓN

module.exports = Face