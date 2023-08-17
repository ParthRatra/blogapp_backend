const Post = require('../models/postmodel')


exports.createposting=async(req,res)=>{
    try{
        // phele fetch kro models se
        const {user,title,body}=req.body
        // data base mai naya object bn gya 
        const nyapost=new Post({
            user,title,body
        })
        // data base mai vo save hogya

        //dekh object ke sath create kr rhe  hai toh .create use hoga and but hm phele upr project bn liye toh .save use kr rhe hai
        const saveitpost=await nyapost.save()
        res.json({
            post: saveitpost,
            
        });


    }
    catch(error){
        return res.status(400).json({
            error:"error while creacting an object"
        })
    }
}



// export all posts

 
