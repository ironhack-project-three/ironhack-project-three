var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Image = require("../models/Image.model")
const axios = require('axios')
router.post('/images', (req,res)=>{

  axios({
    method: "get",
    url: `https://api.unsplash.com/search/photos?page=1&query=wine&client_id=${process.env.UNSPLASH_KEY}`
  })
  .then(
    
    wineImage => res.status(200).json(wineImage.data.results)
  )
  .catch(err => console.log(err))
})

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
module.exports = router;
