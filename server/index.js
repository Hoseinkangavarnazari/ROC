const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');

let users = require('./api/routes/users');
let externalRoutes = require('./routes/externalRoutes');

app = express();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: '418161668263-oikt9360et5eqvs5tvec0ht10ijt97ov.apps.googleusercontent.com',
  clientSecret: '1sv9cpPaGyO3xIjwkoO2T5CF',
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done)=>{

  // console.log(profile.email);
  process.nextTick(function() {
    users.googAuth(accessToken, profile.id, profile.name, profile.emails[0].value, done);
  })

}));
app.use(passport.initialize());


//using Body-Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email']
}))

  // the callback after google has authenticated the user
app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/',
        failureRedirect : '/'
}));

//app.get('/auth/google/callback', passport.authenticate('google'))


app.use('/externalRoutes', externalRoutes);
app.use('/users', users);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });


const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Dev app listening on port ${PORT}!`);
});

