const Face = require('./../../models/products/Face.model')


exports.getFace = async (req, res) => {

    try {
        const face = await Face.find({})

        res.json(face)

    } catch (error) {

    }
}

exports.createFace = async (req, res) => {

    const { name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Face.create({ name, image, pricelist, price, slug, description, details })
        res.json(response)

    } catch (e) {

    }

}

exports.updateFace = async (req, res) => {

    const { faceId, name, image, pricelist, price } = req.body

    try {
        const response = await Face.findByIdAndUpdate(faceId, { name, image, pricelist, price, slug, description, details }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteFace = async (req, res) => {

    const { faceId } = req.body

    try {
        const response = await Face.findOneAndRemove({_id: faceId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}