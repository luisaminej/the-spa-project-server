const Facials = require('./../../models/services/Facials.model')


exports.getFacials = async (req, res) => {

    try {
        const facials = await Facials.find({})

        res.json(facials)

    } catch (error) {

    }
}

exports.createFacials = async (req, res) => {

    const { name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Facials.create({ name, image, pricelist, price, slug, description, details })
        res.json(response)

    } catch (e) {

    }

}

exports.updateFacials = async (req, res) => {

    const { facialsId, name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Facials.findByIdAndUpdate(facialsId, { name, image, pricelist, price, slug, description, details }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteFacials = async (req, res) => {

    const { facialsId } = req.body

    try {
        const response = await Facials.findOneAndRemove({_id: facialsId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}