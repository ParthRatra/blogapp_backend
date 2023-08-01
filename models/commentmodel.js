const mongoose=require("mongoose")
// comment model mai hoga kis post pe comment krna uska reference kya comment krna konse user ne kiya
const commentschema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"

    },
    body:{
        type:String,
        required:true

    },
    user:{
        type:String,
        required:true
    }

})

// epxorts

module.exports=mongoose.model("comment",commentschema)