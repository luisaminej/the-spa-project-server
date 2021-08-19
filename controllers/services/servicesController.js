
const Bodily = require('../../models/services/Bodily.model')
const Facials = require('../../models/services/Facials.model')
const Giftcard = require('../../models/services/Giftcard.model')
const Massage = require('../../models/services/Massage.model')
const Membership = require('../../models/services/Membership.model')
const Packs = require('../../models/services/Packs.model')



exports.getServices = async (req, res) => {

    try {
        const bodily = await Bodily.find({})
        const facials = await Facials.find({})
        const giftcard = await Giftcard.find({})
        const massage = await Massage.find({})
        const membership = await Membership.find({})
        const packs = await Packs.find({})


      

        res.json({ bodily, facials, giftcard, massage, membership, packs })


    } catch (error) {

    }
}

exports.getService = async (req, res) => {
    console.log("hola")

    const {singleService} = req.params
    try {
        const bodily = await Bodily.find({slug: singleService})
        const facials = await Facials.find({slug: singleService})
        const giftcard = await Giftcard.find({slug: singleService})
        const massage = await Massage.find({slug: singleService})
        const membership = await Membership.find({slug: singleService})
        const packs = await Packs.find({slug: singleService})
     

        const result = [...bodily,...facials,...giftcard,...massage,...membership,...packs]
        console.log("resultado", result)

        res.json(result)

    } catch (error) {

    }
}
