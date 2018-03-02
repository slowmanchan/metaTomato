const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);

  //plug in the promise lib
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection broken: ${err}`);
    process.exit(1);
  })

  //load models
  require('./user');
}
