const mongoose = require("mongoose")
const User = require('../models/User.model');
const Review = require('../models/Review.model');
const Wine = require('../models/Wine.model')
const router = require('express').Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");

// GET to show review form
// router.get('/create/:wineId', (req, res) => {
//     const { wineId } = req.params;
//     res.status(200).json({ wineId })
//     .then(()=>{
//       Review.create({ comment })
//         .then((createdReview) => {
//           return Wine.findByIdAndUpdate(
//             wineId,
//             {
//               $push: { reviews: createdReview._id },
//             },
//             {
//               new: true,
//             }
//           );
//         })
//         .then(()=>{
//             console.log(res.status(200)) 
//         })
//         .catch((err) => {
//           console.log(err);})

//     })
//   });
  
  // POST to pubslish a review
  router.post('/create',  async (req, res) => {
    const {user, comment, wineId } = req.body;
    const foundWine = await Wine.findById(wineId);
    console.log(foundWine)
      Review.create({ user ,comment })
        .then((createdReview) => {
          return Wine.findByIdAndUpdate(
            wineId,
            {
              $push: { reviews: createdReview._id },
            },
            {
              new: true,
            }
          );
        })
        .then(()=>{
            console.log("review saved to database!") 
        })
        .catch((err) => {
          console.log(err);})

  });


  router.put("/add-wine-review/:wineId", (req, res) => {
      const {wineId} = req.params
      console.log(wineId)
  })
  
  module.exports = router;