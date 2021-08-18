
const Body =require('../../models/products/Body.model')
const Face =require('../../models/products/Face.model')



exports.getProducts= async (req, res) => {

    try {
        const body = await Body.find({})
        const face = await Face.find({})

        console.log(body, face)

        res.json({body, face})


    } catch (error) {

    }
}
