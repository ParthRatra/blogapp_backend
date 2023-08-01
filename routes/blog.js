const express=require ("express")


// router import kro
const router =express.Router();


// import controlers

const {createcomment}=require("../controllers/Commentcontroller")

// mapping create
router.post("/comments/create",createcomment)

// agr staring mai kuch post nhi hogi toh post null dikhaega post toh uske like ek dummy post daldo nhi toh 
// bina post ke kaise insert krege
// {
//    
//     "title": "dummy project",
//     "body": "ndajsn",
// 
//   }

// "yh object bna "
// _id
// 64c927eb5947fffe78f8901e
// title
// "dummy project"
// body
// "ndajsn"


// http://localhost:3000/api/v1/comments/create
// id post id mai insert krdi fo yh find kre yh and yh insert krde usme yh
// {
//     "post":"64c927eb5947fffe78f8901e",
//     "user":"abirpalffddddd",
//     "body":"this is second comment"
// }


// toh fir aise dikhne lgi post 
// "post": {
    // like abhi empty array hai
//     "likes": [],
//     "_id": "64c927eb5947fffe78f8901e",
//     "title": "dummy project",
//     "body": "ndajsn",
//     "comments":[ {
//         "_id": "64c949e9e5da6e0abce626b6",
//         "post": "64c927eb5947fffe78f8901e",
//         "body": "this is secondefdmirefjref comment",
//         "user": "abirpalffddddd",
//         "__v": 0
//     }
// ]
// }
// }
 


// ab is se id aegi then nhi toh bina post ke koi comment kaise dalunga  





// new post ka route 
const {createposting}=require('../controllers/Postcontroller')

// /mapping create kro
// /posts/create idhr toh kuch bhi daldo
router.post("/posts/create",createposting)





// aisa dikehga
// http://localhost:3000/api/v1/posts/create
// {
//     "user":"kya baat hai",
//     "title":"tera mukhra",
//     "body":"bdsfkfsdajkfsnkjfsdabkjasf"
// }

// {
//     "post": {
//         "title": "tera mukhra",
//         "body": "bdsfkfsdajkfsnkjfsdabkjasf",
//         "user": "kya baat hai",
//         "likes": [],
//         "comments": [],
//         "_id": "64c951945d02d6c8456cb79a",
//         "__v": 0
//     }
// }


const {getallpost}=require('../controllers/Allpostcontroller')
// /get/posts kuch bhi likh do
router.get("/getall/posts",getallpost)











// like vala add up kro 

const {likekrna}=require("../controllers/likescontroller")
router.post('/posts/likes',likekrna)
// http://localhost:3000/api/v1/posts/likes





// delete kro like

const {unlikekrna}=require('../controllers/unlikecontroller')
router.post("/delete/like",unlikekrna)


// kuch aisa tha phele fir delete krege hm
// _id means like
// {
//     "post": {
//         "_id": "64c96e800660242f4ce83751",
//         "title": "koi mil gya",
//         "body": "mai tera diwana pan hai nsdfodfsoa jkabndsfkjbndfsabjkdfasbkafsdb",
//         "user": "parth ratra",
//         "likes": [
//             {
//                 "_id": "64c9748031851278aee49ce9",
//                 "post": "64c96e800660242f4ce83751",
//                 "user": "partthrmkfm",
//                 "__v": 0
//             },
//             {
//                 "_id": "64c977eef18c0bd519855933",
//                 "post": "64c96e800660242f4ce83751",
//                 "user": "kuch sala baad yara",
//                 "__v": 0
//             }
//         ],
//         "comments": [],
//         "__v": 0
//     }
// }


// mai chata 64c9748031851278aee49ce9 like id ko delte kru toh mai

// {
//     "post":"64c96e800660242f4ce83751",
//   "like":"64c9748031851278aee49ce9"
// }

// yh output agya delete hogya 51 vali post se delete krdo ce9

// {
//     "post": {
//         "_id": "64c96e800660242f4ce83751",
//         "title": "koi mil gya",
//         "body": "mai tera diwana pan hai nsdfodfsoa jkabndsfkjbndfsabjkdfasbkafsdb",
//         "user": "parth ratra",
//         "likes": [
//             "64c977eef18c0bd519855933"
//         ],
//         "comments": [],
//         "__v": 0
//     }
// }






module.exports=router







// yh is page mai ata hai 
// mapping create





// export



// route mai chaiye hota
// models import
// mapping create
// export krna