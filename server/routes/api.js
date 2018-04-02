const Favorite = require('mongoose').model('Favorite');
const User = require('mongoose').model('User');
const express = require('express');
const router = express.Router();

router.get('/favorites', function(req, res, next) {
  var user = res.locals.user;
  User
    .findOne({ _id: user._id })
    .populate('favorites')
    .exec((err, data) => {
      if (err) { return console.log(err) };
      res.json(data.favorites)
    })
});

router.post('/favorites', function(req, res, next) {

  var user = res.locals.user;
  console.log(`User: ${user}`)

  var favorite = new Favorite({
    title: req.body.title,
    poster: req.body.poster,
    imdbID: req.body.imdbID,
    id: req.body.id

  })
  favorite.save(function(err) {
    if (err) { return next(err)}

    user.favorites.push(favorite)

    user.save(function(err) {
      if (err) { return next(err)}

      console.log('Favorite Saved to: ', user.name)

      res.status(200).json(favorite)
    })
  })
})

router.delete('/favorites', function(req, res, next) {
  var user = res.locals.user

  Favorite.findById(req.body.id, function(err, favorite) {
    if (err) { return next(err) }
    user.favorites.remove(favorite._id)
    user.save(function(err) {
        favorite.remove();
        res.json({"success": "Deleted successfully"})
    });
  })
})

module.exports = router;
