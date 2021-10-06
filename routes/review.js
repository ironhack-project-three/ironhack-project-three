const mongoose = require("mongoose")
const User = require('../models/User.model');
const Review = require('../models/Review.model');
const Wine = require('../models/Wine.model')
const router = require('express').Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");

// // PUT  /api/reviews/:reviewId  - Updates a specific review by id
router.put("/edit/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  const { comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Review.findByIdAndUpdate(
    reviewId,
    {
      comment
    },
    {
      new: true,
    }
  )
    .then((updatedReview) => res.json(updatedReview))
    .catch((err) => {
      console.log("Review not updated: ", err);
      res.json(err);
    });
});

//  DELETE /api/reviews/:reviewId  - Deletes a specific review by id
router.delete("/delete/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Review.findByIdAndRemove(reviewId)
    .then(() =>
      res.json({ message: `Wine with ${reviewId} is removed successfully.` })
    )
    .catch((err) => {
      console.log("Review not deleted: ", err);
      res.json(err);
    });
});

//  GET /api/reviews/:reviewId  - Retrieves a specific review by id
router.get("/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({
      message: "Specified id is not valid",
    });
    return;
  }

  Review.findById(reviewId)
    .then((review) => res.status(200).json(review))
    .catch((error) => res.json(error));
});

//  POST /review/create  -  Creates a new review
router.post("/create", isAuthenticated, (req, res, next) => {
  const { comment, wineId } = req.body;


  Review.create({
    user: req.payload._id,
    comment
  })
    .then((newReview) => {
      return Wine.findByIdAndUpdate(wineId, {
        $push: {
          reviews: {
            $each: [newReview._id],
            $position: 0,
          },
        },

      })
    })
    
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log("Review not created: ", err);
      res.json(err);
    });
});



  
  module.exports = router;