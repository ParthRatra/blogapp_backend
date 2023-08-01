
const Post =require("../models/postmodel")
const like=require("../models/likemodel")


// like a post
exports.likekrna=async(req,res)=>{
    try{
        const {post,user}=req.body
        const newlike= new like({
            post,user
        })
        const savedlike = await newlike.save();
// updated post like ke sath phele toh hme post dhundhni pdegi na 
// savedlike ki id bnegi hogi object bna hai vo push kro
        const updatedpost = await Post.findByIdAndUpdate(post,{$push:{likes:savedlike._id}} ,{new:true} )
        .populate("likes")
        .exec()

        res.status(200).json({
            post:updatedpost
        })
    }
    catch(error)
    {
        return res.status(400).json({
            error:"error while creacting an object"
        })
    }
}