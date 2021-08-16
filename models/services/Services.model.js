const mongoose          = require("mongoose")
const Schema            = mongoose.Schema


//SCHEMA

const servicesSchema        = new Schema({
    
    name: String,
    image: String,
    bodily: [{
        type: Schema.Types.ObjectId,
        ref: "Bodily"
    }],
    facials: [{
        type: Schema.Types.ObjectId,
        ref: "Facials"
    }],
    giftcard: [{
        type: Schema.Types.ObjectId,
        ref: "Giftcard"
    }],
    massage: [{
        type: Schema.Types.ObjectId,
        ref: "Massage"
    }],
    membership: [{
        type: Schema.Types.ObjectId,
        ref: "Membership"
    }],
    packs: [{
        type: Schema.Types.ObjectId,
        ref: "Packs"
    }],
   

},

{    
    timestamps:true,
   
})

//MODELO

const Services = mongoose.model("Services", servicesSchema)

//EXPORTACIÓN

module.exports = Services