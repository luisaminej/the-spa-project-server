const Massage = require('./../../models/services/Massage.model')


exports.getMassage = async (req, res) => {

    try {
        const massage = await Massage.find({})

        res.json(massage)

    } catch (error) {

    }
}

exports.createMassage = async (req, res) => {

    const { name, image, pricelist, price } = req.body

    try {
        const response = await Massage.create({ name, image, pricelist, price })
        res.json(response)

    } catch (e) {

    }

}

exports.updateMassage = async (req, res) => {

    const { massageId, name, image, pricelist, price } = req.body

    try {
        const response = await Massage.findByIdAndUpdate(massageId, { name, image, pricelist, price }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteMassage = async (req, res) => {

    const { massageId } = req.body

    try {
        const response = await Massage.findOneAndRemove({_id: massageId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}