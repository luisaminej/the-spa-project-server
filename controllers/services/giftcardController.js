const Giftcard = require('./../../models/services/Giftcard.model')


exports.getGiftcard = async (req, res) => {

    try {
        const giftcard = await Giftcard.find({})

        res.json(giftcard)

    } catch (error) {

    }
}

exports.createGiftcard = async (req, res) => {

    const { name, image, pricelist, price } = req.body

    try {
        const response = await Giftcard.create({ name, image, pricelist, price })
        res.json(response)

    } catch (e) {

    }

}

exports.updateGiftcard = async (req, res) => {

    const { giftcardId, name, image, pricelist, price } = req.body

    try {
        const response = await Giftcard.findByIdAndUpdate(giftcardId, { name, image, pricelist, price }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteGiftcard = async (req, res) => {

    const { giftcardId } = req.body

    try {
        const response = await Giftcard.findOneAndRemove({_id: giftcardId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}