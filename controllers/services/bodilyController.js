const Bodily = require('./../../models/services/Bodily.model')


exports.getBodily = async (req, res) => {

    try {
        const bodily = await Bodily.find({})

        res.json(bodily)

    } catch (error) {

    }
}

exports.createBodily = async (req, res) => {

    const { name, image, pricelist, price } = req.body

    try {
        const response = await Bodily.create({ name, image, pricelist, price })
        res.json(response)

    } catch (e) {

    }

}

exports.updateBodily = async (req, res) => {

    const { bodilyId, name, image, pricelist, price } = req.body

    try {
        const response = await Bodily.findByIdAndUpdate(bodilyId, { name, image, pricelist, price }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteBodily = async (req, res) => {

    const { bodilyId } = req.body

    try {
        const response = await Bodily.findOneAndRemove({_id: bodilyId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}