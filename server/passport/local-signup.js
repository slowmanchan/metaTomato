const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */

// username and password found in request body (this is what
// passport uses by default) we pass an object as first arg(to change the defaults)
// normally usernameField would be username but we want users to sign in with 'email'
// passReqToCallback = true so we can read other params in the POST body
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  })
})
