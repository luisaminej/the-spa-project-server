const mongoose          = require("mongoose")
const Schema            = mongoose.Schema


//SCHEMA

const productsSchema        = new Schema({
    
    name: String,
    image: String,
    body: [{
        type: Schema.Types.ObjectId,
        ref: "Body"
    }],
    face: [{
        type: Schema.Types.ObjectId,
        ref: "Face"
    }],

},

{    
    timestamps:true,
   
})

//MODELO

const Products = mongoose.model("Products", productsSchema)

//EXPORTACIÓN

module.exports = Products