const Post = require('../models/postmodel')

exports.getallpost=async(req,res)=>{
    try{
        // fetch all items from database
            // koi parameter nhi hai toh empty object pass krdo because hm sare ke sare fetch krna chate hai items ko
        // const allpost =await Post.find({}) idhr tk thik hai nut usme comment bhi haina agr hmne aise hi managa liya toh problem aegi id show hogi comment mai
        // {
        //     "success": true,
        //     "data": [
        //         {
        //             "likes": [],
        //             "_id": "64c927eb5947fffe78f8901e",
        //             "title": "dummy project",
        //             "body": "ndajsn",
        //             "comments": [
        //                 "64c928049eea6d02df7d9f51",
        //                 "64c9283c9eea6d02df7d9f55",
        //                 "64c92890fcc834c8b063ebf9",
        //                 "64c928a1fcc834c8b063ebfd",
        //                 "64c928b1fcc834c8b063ec01",
        //                 "64c928bdd3dd00e3eebf4692",
        //                 "64c928ef6a7ea1798fc7acca",
        //                 "64c928fa0b3b4f2588823610",
        //                 "64c949dbe5da6e0abce626b2",
        //                 "64c949e9e5da6e0abce626b6",
        //                 "64c94c6df104bcf8507dce51"
        //             ]
        //         },
        //         {
        //             "_id": "64c951945d02d6c8456cb79a",
        //             "title": "tera mukhra",
        //             "body": "bdsfkfsdajkfsnkjfsdabkjasf",
        //             "user": "kya baat hai",
        //             "likes": [],
        //             "comments": [],
        //             "__v": 0
        //         }
        //     ]
        // }

        // but i want post mai comments bhi aye. idhr jidhr jidhr dala tha toh isliiye changes kro
        // const allpost =await Post.find({}).populate("comments").exec()

//         "success": true,
//     "data": [
//         {
//             "likes": [],
//             "_id": "64c927eb5947fffe78f8901e",
//             "title": "dummy project",
//             "body": "ndajsn",
//             "comments": [
//                 {
//                     "_id": "64c9283c9eea6d02df7d9f55",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpal",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c92890fcc834c8b063ebf9",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpal",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c928a1fcc834c8b063ebfd",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalfdd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c928b1fcc834c8b063ec01",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c928bdd3dd00e3eebf4692",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c928ef6a7ea1798fc7acca",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c928fa0b3b4f2588823610",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c949dbe5da6e0abce626b2",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is second comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c949e9e5da6e0abce626b6",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is secondefdmirefjref comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 },
//                 {
//                     "_id": "64c94c6df104bcf8507dce51",
//                     "post": "64c927eb5947fffe78f8901e",
//                     "body": "this is secondefdmirefjref comment",
//                     "user": "abirpalffddddd",
//                     "__v": 0
//                 }
//             ]
//         },
//         {
//             "_id": "64c951945d02d6c8456cb79a",
//             "title": "tera mukhra",
//             "body": "bdsfkfsdajkfsnkjfsdabkjasf",
//             "user": "kya baat hai",
//             "likes": [],
//             "comments": [],
//             "__v": 0
//         }
//     ]
// }


// aise hi like populate krdo data ajega usme bhi
const allpost =await Post.find({}).populate("comments").populate("likes").exec()



        res.status(200).json({
            success:true,
            data:allpost,
        })
    }
    catch(error){
        console.log(err)
                console.err(err)

        res.status(500).json({
            success:false,
            data:"interal server error",
                    err:err.message

        })
    }
}