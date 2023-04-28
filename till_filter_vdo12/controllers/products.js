// these are the fuctions/actions created to give responce on the route
const Product = require("../models/product.js")

const getAllProducts = async (req,res)=>{

    const {company, name, featured} =req.query;
    const queryObject = {};

    if(company){
        queryObject.company=company;
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(name){
        queryObject.name={$regex:name, $options:"i"};
    }

    const myData = await Product.find(queryObject);  //to avaoid the querry problem
    // const myData = await Product.find(req.query);  //req.query means find the data with the url query
    // const myData = await Product.find({});  //{} means all data & await because its coming from database as a promise

    // now ask for response to the server mongodb and serve it as a json in the backend on a path
    res.status(200).json({myData})
    // res.status(200).json({msg:"we are in getAllProducts"})//old file
}
// function for testing same in postman
const getAllProductsTesting = async (req,res)=>{
    const myData = await Product.find(req.query);
    res.status(200).json({myData})
}
module.exports = {getAllProducts,getAllProductsTesting}