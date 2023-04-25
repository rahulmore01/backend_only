
// these are the fuctions/actions created to give responce on the route
const getAllProducts = async (req,res)=>{
    res.status(200).json({msg:"we are in getAllProducts"})
}
const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({msg:"we are in getAllProductsTesting"})
}
module.exports = {getAllProducts,getAllProductsTesting}