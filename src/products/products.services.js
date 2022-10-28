const productsControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
const postProduct = (req, res) => {
    const {name, category, price, isAvailable} = req.body;
    if(data.name && data.category && data.price && data.isAvailable){
        productsControllers.createProduct(data)
            .then(response => {
                
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })

    } else {
        res.status(400).json({message: 'Missing Data' })
    }

}

const getProductById = (req, res) => {
    const id = req.params.id;

    productsControllers.getProductById(id)

        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID'}) 
            }
        })
        .catch(err => {
           
            res.status(404).json({mesagge: 'Missing data'})
        })
}


const patchProduct = (req, res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body;
    productsControllers.editProducts(id, {name, category, price, risAvailable})
    .then ((response) => {
        
        if(response[0]){
             res.status(200).json ({
            mesagge: `Product with id: ${id}, edited succesfull!`
        })
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
       
    })
    .catch(error => {
        res.status(400).json({message: error.message})
    })
}


const deleteProduct = (req, res) => {
    const id = req.params.id
    productsControllers.deleteProduct(id)
    .then((response) => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })

}


module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    patchProduct,
    deleteProduct
   }

