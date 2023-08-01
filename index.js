// instance create hua ya bol skte server create hogya 
const express =require("express");
const app =express()
// is se env file mai jo configuration haina use process vale mai load kr deta tha
require("dotenv").config()

const PORT=process.env.PORT || 4000

// middleware
// Middleware
// body mai se json parse/fetch krne mai help krta
app.use(express.json());



// routes ko connect kro
const blog = require("./routes/blog");
app.use("/api/v1", blog);


// db connectwith db
const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`)
})


// default route add krdiya 

app.get("/",(req,res)=>{
    res.send(`<h1>this is my homepage</h1>`)
})





// indexfile mai chaiye hota 

// server create by express
// dotenv.config
// middleware
// import route
// db fetch krlo
// listen
// put,get,post,delete apne hisab se