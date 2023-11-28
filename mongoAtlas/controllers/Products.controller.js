const getAllProduct = async(req,resp)=>{
    await resp.status(200).json({message:"get all products successfully"})
}


module.exports={getAllProduct}