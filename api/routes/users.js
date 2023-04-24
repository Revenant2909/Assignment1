const router = require("express").Router();
const User = require("../models/User");

//---------------------------------------------------------
//QUERY TO GET ALL USERS                                                         //WORKING PROPERLY
//---------------------------------------------------------

router.get("/",async (req,res)=>{
    const{} = req.query;
        try {
            const myData = await User
            .find(req.query);
            res.status(200).json({myData});
        } 
        catch (err) {
            res.status(500).json(err);
        }
});
//---------------------------------------------------------
// Q:1 QUERY FOR INCOME LESS THAN 5 AND CAR BMW OR MERCEDES                     //WORKING PROPERLY
//---------------------------------------------------------

// router.get("/",async (req,res)=>{
//     const{} = req.query;
//         try {
//             const myData = await User
//             // .find({income: {$lt: 5}, car: {$in: ["BMW", "Mercedes-Benz"]}});
//             .find({income: { $lt: "$5.00" }, car: {$in: ["BMW", "Mercedes-Benz"]}});
//             res.status(200).json({myData});
//         } 
//         catch (err) {
//             res.status(500).json(err);
//         }
// });
//---------------------------------------------------------
//Q:2 QUERY TO GET MALES WITH PHONE PRICE GREATER THAN                          //WORKING PROPERLY
//---------------------------------------------------------
// router.get("/",async (req,res)=>{
//     const{} = req.query;
//         try {
//             const myData = await User
//             // .find({ $and: [ { gender: "Male" }, { phone_price: {$gt: 10000}} ] });
//             // .find({gender: "Male", phone_price: {$gt: 10000}});
//             .find({ gender: "Male", "phone_price": {$regex: /[1-9][0-9]{4,}/}});
//             res.status(200).json({myData});
//         } 
//         catch (err) {
//             res.status(500).json(err);
//         }
// });
//---------------------------------------------------------
//Q:3 QUERY FOR LAST NAME STARTS WITH 'M' AND QUOTE LENGTH                      //WORKING PROPERLY
//    GREATER THAN 15 AND EMAIL INCLUDES LAST NAME               
//---------------------------------------------------------
// router.get("/",async (req,res)=>{
//     const{} = req.query;
//         try {
//             const myData = await User
//             .find({
//                 last_name: /^M/,
//                 $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] },
//                 email: { $regex: new RegExp(`${"M"}[^@]*@`, "i") }
//               })
//             res.status(200).json({myData});
//         } 
//         catch (err) {
//             res.status(500).json(err);
//         }
// });
//---------------------------------------------------------
//Q:4 Users which have a car of brand “BMW”, Mercedes-Benz or                      //WORKING PROPERLY
//    “Audi” and whose email does not include any digit.
//---------------------------------------------------------

// router.get("/",async (req,res)=>{
//     const{} = req.query;
//         try {
//             const myData = await User
//             .find({car: {$in: ["BMW", "Mercedes-Benz", "Audi"]}, email: {$not: /\d/}});
//             res.status(200).json({myData});
//         } 
//         catch (err) {
//             res.status(500).json(err);
//         }
// });

//---------------------------------------------------------
//Q:5 Show the data of top 10 cities which have the highest
//    number of users and their average income.
//---------------------------------------------------------
// router.get("/",async (req,res)=>{
//     const{} = req.query;
//         try {
//             const myData = await User
//             .aggregate([
//                 // Convert the income field to a number
//                 { $addFields: { incomeNumber: { $toDouble: { $substr: ['$income', 1, -1] } } } },
//                 // Group by city and calculate the total number of users and the average income for each city
//                 {
//                   $group: {
//                     _id: '$city',
//                     totalUsers: { $sum: 1 },
//                     averageIncome: { $avg: '$incomeNumber' }
//                   }
//                 },
//                 // Sort the results by the number of users in descending order
//                 { $sort: { totalUsers: -1 } },
//                 // Limit the results to the top 10 cities
//                 { $limit: 10 }
//               ])
//               .then(results => {
//                 console.log(results);
//                 res.status(200).json({results});
//               })
//         } 
//         catch (err) {
//             res.status(500).json(err);
//         }
// });




    


module.exports = router;