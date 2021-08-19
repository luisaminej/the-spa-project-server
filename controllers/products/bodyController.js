const Body = require('./../../models/products/Body.model')


exports.getBody = async (req, res) => {

    try {
        const body = await Body.find({})

        res.json(body)

    } catch (error) {

    }
}

exports.createBody = async (req, res) => {

    const { name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Body.create({ name, image, pricelist, price, slug, description, details })
        res.json(response)

    } catch (e) {

    }

}

exports.updateBody = async (req, res) => {

    const { bodyId, name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Body.findByIdAndUpdate(bodyId, { name, image, pricelist, price, slug, description, details }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteBody = async (req, res) => {

    const { bodyId } = req.body

    try {
        const response = await Body.findOneAndRemove({_id: bodyId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}