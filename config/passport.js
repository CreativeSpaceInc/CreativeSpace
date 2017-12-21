// config.passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/artist');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });




    // LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, username, password, done) {
          User.findOne({ 'username': username }, function(err, user){
            if(err){
              return done(err);
            }

            if(user){
              return done(null, false);
            }

            var newUser = new User();
            newUser.username = req.body.username;
            newUser.displayname = req.body.displayname;
            newUser.password = newUser.encryptPassword(req.body.password);

            newUser.save(function(err){
              if(err){
                return done(err);
              }

              return done(null, newUser);
            })
          })
        }));
