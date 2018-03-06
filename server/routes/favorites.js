const Favorite = require('mongoose').model('Favorite');
const User = require('mongoose').model('User');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  Favorite.find({})
    .then((favorites) => {
      res.json(favorites)
    })
    .catch((err) => {
      console.log(err)
    })
});

router.post('/', function(req, res, next) {

  var user = res.locals.user;
  console.log(`User: ${user}`)

  var favorite = new Favorite({
    title: req.body.title,
    poster: req.body.poster,

  })

  user.favorites.push(favorite)

  user.save(function(err) {
    if (err) { return next(err)}

    console.log('Favorite Saved to: ', user.name)

    res.status(200).json(favorite)
  })


})

module.exports = router;
