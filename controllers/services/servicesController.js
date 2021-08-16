const Services = require('./../../models/services/Services.model')


exports.getServices = async (req, res) => {
    
    try {
        const services = await Services.find({})


        console.log(services)

        res.json(services)

    } catch (error) {
        
    }


    
}