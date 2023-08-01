// import model
const Post=require("../models/postmodel")
const comment=require("../models/commentmodel")

//business logic
exports.createcomment=async(req,res)=>{
    try{
        // hme comment ke liye kya chaiye hoga postid ko user ko 
        const{post,user,body}=req.body;
        // dekh Post.create bhi kr skte hm Post.save bhi krskte 
        // here we will use .save
        // toh phele isme object bnana hoga
        // comment module se arha hai
        const nyacomment=new comment({
            post,user,body
        });

        // save the new comment into the database (nyi comment banakr database mai store krdiya) jaise hi new comment bna hai uski id bani hogi vo hm comments mai daldenge savedcomments._id ._id ka mtlb compass mai aisa hi likha hota na that's why

        const savedcomment = await nyacomment.save();


        // ab mai add krunga na comment toh ab muje kya krna ki ki post vali id dhundhni hai uske then uske comment vale array mai mai update krdunga comment
        // mai post ke collection mai jaunga fir post ki id pr comment hua hai use search krunga 
        // fir uske comment wale array ko update krdunga
        // hme comment vala array update krna na
        // findByIdAndUpdate mai postid vale mai jana chata hu toh aise jaise post dala hai na 
        // uske according search hojaega


        // {$push}  meaning hota ki mai push kr rha $pull ka mtlb hota ki mai pull kr rha
        // aisa hai postvale model mai 
        // comments:[{
        //     id:mongoose.Schema.Types.ObjectId,
        //     ref:"comment"
        // }]

        // const{post,user,description}=req.body 
        // post ki id se Post object hai fetch krke lao
        // Post.findByIdAndUpdate aise ab findbyId vala kaam hogaya ab hmko update krna 
        // vo {$push:{comments:savedcomment}}  iska mtlb push vale array ke andr yh new id insert krunga
        // new true mention krdiya itmeans ab kya hoga agr yh  nhi kiya toh new wala nhi show hoga jo ise upr tha vohi bhej dega updated nhi likhege toh purana vala return krega
// updatedpost means comment ke sath
        const updatedpost=await Post.findByIdAndUpdate(post,{$push:{comments:savedcomment._id}} ,{new:true} )
        // agr yh nhi likhege toh jo append hui hai id new message ki vo ajaegi toh muje message dekhna uske liye hota
        .populate("comments") 
        // fir exec krdiya 
        .exec();


        // agr mai populate nhi krta toh yh hota id insert hoti
        // {
        //     "post": {
        //         "likes": [],
        //         "_id": "64c927eb5947fffe78f8901e",
        //         "title": "dummy project",
        //         "body": "ndajsn",
        //         "comments": [
        //             "64c928049eea6d02df7d9f51",
        //             "64c9283c9eea6d02df7d9f55",

        res.json({
            post: updatedpost,
            
        });

    }
    catch(err){
        return res.status(500).json(
            {
                error:"error while creating object", 
            }
        )
    }
}

