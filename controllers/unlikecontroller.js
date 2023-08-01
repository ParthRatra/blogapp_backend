
const Post =require("../models/postmodel")
const Like=require("../models/likemodel")


// like a post
exports.unlikekrna=async(req,res)=>{
    try{
        const {post,like}=req.body
       
        // iddhr do logo ki arhi hai id dekh likes ki aur post ki bhi id arhi hai
        
        // {
            // pheli vali like ki hai post vali jis post pr kri like
            // _id is trh ka format apne app bnta 
        //     "_id": {
        //       "$oid": "64c95e729564ee435e6829e0"
        //     },
        //     "post": {
        //       "$oid": "64c951945d02d6c8456cb79a"
        //     },
        //     "user": "ndsfiodfas",
        //     "__v": 0
        //   }


        // hm delete do trh se kr skte hai like id se jaise hi id mili like vali  toh delete krdo nhi toh combination of postid and like id se usko yh nhi krskte post se delete nhi skte akele nhi toh yh hoskta na
        // ek post mai toh khi sare like hoskte toh hme konsa pta konsa like htana
        const deletedlike= await Like.findOneAndDelete({post:post,_id:like})
        const updatedpost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedlike._id}},{new:true})
        

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