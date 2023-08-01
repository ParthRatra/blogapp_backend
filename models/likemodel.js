const mongoose=require("mongoose")


// yh ek route handler hai
const likeschema= new mongoose.Schema({
    // kis post mai like kiya hai 
 post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
 },
//  ki ne like kiya hai vo store ho jata 
    user:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("like",likeschema)