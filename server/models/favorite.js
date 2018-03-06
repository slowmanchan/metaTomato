const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new mongoose.Schema({
  title: String,
  poster: String
});

module.exports = mongoose.model('Favorite', FavoriteSchema)
