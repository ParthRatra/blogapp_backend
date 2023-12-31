const mongoose=require("mongoose")

// route handler

const postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }]

})


module.exports=mongoose.model("Post",postschema)
