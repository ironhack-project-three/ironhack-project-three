var express = require("express");
var router = express.Router();
const { Types } = require('mongoose');
const User = require("../models/User.model");
const Wine = require("../models/Wine.model");
const Service = require("../services/service");

router.get("/all-wine", async (req, res) => {
  try {
    const wines = await Wine.find().limit(100)
    res.json({ wines })
    console.log(`Found ${wines.length} wines`)
  } catch (err) {

  }
});

router.get("/top-wine", async (req, res) => {
  try {
    const winesArr = await Wine.find().limit(400)
    const winesTop =  winesArr.filter(wine => {if(wine.points >= 95){return wine}})
    
    res.json({ winesTop })
  } catch (err) {

  }
});


router.get("/search", async (req, res) => {

  try{
    const wines = await Wine.find({ 'title': { $regex: req.query.q || "", $options: 'i' } }).limit(100).exec()
    res.json({ wines });
    console.log(`Search found ${wines.length} wines`)
  }catch (err){
    console.log("Line 19 error wine.js", err)
}
});

router.post("/create-wine", (req, res) => {
  const {
    points,
    title,
    description,
    taster_name,
    taster_twitter_handle,
    price,
    designation,
    variety,
    region_1,
    region_2,
    province,
    country,
    winery,
  } = req.body;

  Wine.create({
    points,
    title,
    description,
    taster_name,
    taster_twitter_handle,
    price,
    designation,
    variety,
    region_1,
    region_2,
    province,
    country,
    winery,
  })
    .then((newWine) => res.json({ newWine }))
    .catch((error) => console.log(error));
});

//Get wine by specific id
router.get("/wine/:wineId", async (req, res, next) => {
 
  const { wineId } = req.params;
  if (!Types.ObjectId.isValid(wineId)) {
  
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  try {
    const wine = await Wine.findById(wineId)
    .populate({
			path: 'reviews',
			populate: {
				path: 'user'
			}
		})
   
    if (!wine) {
      res.status(404).json({message: `Wine not found: ${wineId}`});
      return
    }
   
    res.status(200).json(wine);
  
  } catch (error) {

    res.status(500).json(error);
  }
});

//Put route to update a specific wine
router.put("/wine/:wineId", (req, res) => {
 
  const  {wineId}  = req.params

  let {
    points,
    title,
    description,
    taster_name,
    taster_twitter_handle,
    price,
    designation,
    variety,
    region_1,
    region_2,
    province,
    country,
    winery,
  } = req.body;
  Wine.findByIdAndUpdate(
    wineId,
    {
      points,
      title,
      description,
      taster_name,
      taster_twitter_handle,
      price,
      designation,
      variety,
      region_1,
      region_2,
      province,
      country,
      winery,
    },
    { new: true }
  )
    .then(updatedWine => res.status(200).json(updatedWine))
    .catch((error) => res.json(error));
});

//Deletes a specified wine by id
router.delete("/wine/:wineId", (req, res, next) => {
  const { wineId } = req.params;

  Wine.findByIdAndRemove(wineId)
    .then(() =>
      res.json({ message: `Wine with ${wineId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});



module.exports = router;
