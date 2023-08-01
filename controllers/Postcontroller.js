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

 