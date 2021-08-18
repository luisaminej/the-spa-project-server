
const Bodily =require('../../models/services/Bodily.model')
const Facials =require('../../models/services/Facials.model')
const Giftcard =require('../../models/services/Giftcard.model')
const Massage =require('../../models/services/Massage.model')
const Membership =require('../../models/services/Membership.model')
const Packs =require('../../models/services/Packs.model')



exports.getServices= async (req, res) => {

    try {
        const bodily = await Bodily.find({})
        const facials = await Facials.find({})
        const giftcard = await Giftcard.find({})
        const massage = await Massage.find({})
        const membership = await Membership.find({})
        const packs = await Packs.find({})
        

        console.log(bodily,
            facials,
            giftcard,
            massage,
            membership,
            packs)

        res.json({bodily, facials, giftcard, massage, membership, packs})


    } catch (error) {

    }
}
