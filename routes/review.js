const mongoose = require("mongoose")
const User = require('../models/User.model');
const Review = require('../models/Review.model');
const Wine = require('../models/Wine.model')
const router = require('express').Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");

// GET to show review form
router.get('/create/:wineId', (req, res) => {
    const { wineId } = req.params;
    res.status(200).json('reviews/new-review', { wineId });
  });
  
  // POST to pubslish a review
  router.post('/create',  async (req, res) => {
    const { comment, wineId } = req.body;
    const foundWine = await Wine.findById(wineId);
      Review.create({ comment })
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
           console.log(res.status(200)) 
        })
        .catch((err) => {
          console.log(err);})

  });
  
  module.exports = router;