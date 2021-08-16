const Products = require('./../../models/products/Products.model')


exports.getProducts = async (req, res) => {
    
    try {
        const products = await Products.find({})


        console.log(products)

        res.json(products)

    } catch (error) {
        
    }


    
}