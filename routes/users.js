var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = require("../models/User.model")
const Service = require("../services/service")
const bcrypt = require('bcrypt')
const saltRound = 10;

/* GET list of Users. */
router.get('/all-users', (req, res)=> {
  User.find().then((users)=>
  res.json({ title: 'Express', users})
  )
});

/* Fill all the Users CRUD Routes */
//User Create route
router.post('/create-user', (req, res)=> {
  const {username, email, password} = req.body;
  const salt = bcrypt.genSaltSync(saltRound);
  const hashPassword = bcrypt.hashSync(password, salt);

  User.create({username, email, password: hashPassword})
  .then((newUser)=>
  res.json({newUser})
).catch(error => console.log(error))

});

//Get user by specific id
router.get('/user/:userId', (req, res, next) => {
  const {userId} = req.params
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  User.findById(userId)
  .then(user => res.status(200).json(user))
  .catch(error => res.json(error))
})

//Put route to update a specific user
router.put('/user/:userId', (req, res, next) => {
  const { userId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch(error => res.json(error));
});

//Deletes a specified user by id 
router.delete('/user/:userId', (req, res, next) => {
  const { userId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndRemove(userId)
    .then(() => res.json({ message: `User with ${userId} is removed successfully.` }))
    .catch(error => res.json(error));
})


module.exports = router;
