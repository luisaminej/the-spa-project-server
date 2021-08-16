const Packs = require('../../models/services/Packs.model')


exports.getPacks = async (req, res) => {

    try {
        const packs = await Packs.find({})

        res.json(packs)

    } catch (error) {

    }
}

exports.createPacks = async (req, res) => {

    const { name, image, pricelist, price } = req.body

    try {
        const response = await Packs.create({ name, image, pricelist, price })
        res.json(response)

    } catch (e) {

    }

}

exports.updatePacks = async (req, res) => {

    const { packsId, name, image, pricelist, price } = req.body

    try {
        const response = await Packs.findByIdAndUpdate(packsId, { name, image, pricelist, price }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deletePacks = async (req, res) => {

    const { packsId } = req.body

    try {
        const response = await packs.findOneAndRemove({_id: packsId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}