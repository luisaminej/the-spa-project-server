
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


exports.getProduct = async (req, res) => {
console.log("hola")

const {singleProduct} = req.params
    try {
        const body = await Body.find({slug:singleProduct})
        const face = await Face.find({slug:singleProduct})
        console.log(body)

        const result = [...body,...face]
        console.log("resultado", result)

        res.json(result)

    } catch (error) {

    }
}
