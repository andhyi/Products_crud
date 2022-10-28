const uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = async () => {
    const data = await Products.findAll() //? traer todos los productos
    return data
}


// getAllProducts()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))



const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
   
    return newProduct
}

// createProduct({
//     name: 'pan',
//     category: 'ass',
//     price: 120,
//     isAvailable: false
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))




const getProductById = async (id) => {
    const data = await Product.findOne({
        where: {
            id: id
        }
    });
    //? select *from products where id= id
    return data
}

// getProductById('328cc54e-e83c-44f9-85ca-61eee30f38d7')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const editProducts = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id: id
        }
    })
    return response
}

// editProducts('19002ba5-fc4d-4ced-8afa-85dfa82e4e68',{ name: 'arroz', category: 'abarrotes', price: 180})
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const deleteProduct = async (id) => {
    const data = await Product.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    editProducts,
    deleteProduct
}