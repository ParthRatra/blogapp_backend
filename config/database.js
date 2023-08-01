// /yh fix hoti file hr app mai yh connection ensure nodejs and mongodb mai

const mongoose=require('mongoose');


// is se kya hoga jo .env file mai likha hoga vo fetch hojaega idhr
// is se env file mai jo configuration haina use process vale mai load kr deta tha
require('dotenv').config()

const dBconnect=()=>{
    // aise read thodi krega .env file ko apko install krna pdega npm i dotenv
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
        console.log(err.message)
        process.exit(1)
    })
}
module.exports=dBconnect