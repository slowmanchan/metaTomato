var express = require('express');
var router = express.Router();

router.get('/favorites', function(req, res, next) {
  res.send('favorites');
});

module.exports = router;
