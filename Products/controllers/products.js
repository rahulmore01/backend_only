const Product = require("../models/product.js")
// these are the fuctions/actions created to give responce on the route
const getAllProducts = async (req,res)=>{
    const myData = await Product.find({});//{} means all data & await because its coming from database as a promise

    // now ask for response to the server mongodb and serve it as a json in the backend on a path
    res.status(200).json({myData})
    // res.status(200).json({msg:"we are in getAllProducts"})//old file
}
const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({msg:"we are in getAllProductsTesting"})
}
module.exports = {getAllProducts,getAllProductsTesting}
