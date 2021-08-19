const Membership = require('./../../models/services/Membership.model')


exports.getMembership = async (req, res) => {

    try {
        const membership = await Membership.find({})

        res.json(membership)

    } catch (error) {

    }
}

exports.createMembership = async (req, res) => {

    const { name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Membership.create({ name, image, pricelist, price, slug, description, details })
        res.json(response)

    } catch (e) {

    }

}

exports.updateMembership = async (req, res) => {

    const { membershipId, name, image, pricelist, price, slug, description, details } = req.body

    try {
        const response = await Membership.findByIdAndUpdate(membershipId, { name, image, pricelist, price, slug, description, details }, { new: true })

        
        res.json(response)

    } catch (error) {

    }

}

exports.deleteMembership = async (req, res) => {

    const { membershipId } = req.body

    try {
        const response = await Membership.findOneAndRemove({_id: membershipId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }



}