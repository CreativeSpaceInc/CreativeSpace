// config.passport.js
const passport = require('passport');
const LocalStrategy    = require('passport-local').Strategy;
const User = require('../models/artist');

const myLocalConfig = (passport) => {

    // passport session setup
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // LOCAL LOGIN
    passport.use('local-login', new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, username, password, done) {
            if (username)
                username = username.toLowerCase();

            // asynchronous
            process.nextTick(function() {
                User.findOne({ 'local.username': username }, function(err, user) {
                    if (err)
                        return done(err);

                    if (!user)
                        return done(null, false);

                    if (!user.validPassword(password))
                        return done(null, false);

                    // all is well, return user
                    else
                        return done(null, user);
                });
            });

        }));


    // LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            // displaynameField: 'displayname',
            passwordField: 'password',
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, username, password, done) {
            if (username)
                username = username.toLowerCase();
            // asynchronous
            process.nextTick(function() {
                // if the user is not already logged in:
                if (!req.user) {
                    User.findOne({ 'local.username' :  username }, function(err, user) {
                        if (err)
                            return done(err);
                // check to see if there's a user with that username
                        if (user) {
                            return done(null, false);
                        } else {
                // create the user
                            var newUser = new User();
                            newUser.local.username = username;
                            newUser.local.password = newUser.generateHash(password);

                            newUser.save(function(err) {
                                if (err)
                                    return done(err);

                                return done(null, newUser);
                            });
                        }
                    });
                    // if the user is logged in but has no local account...
                } else if ( !req.user.local.username ) {
                    // ...presumably they're trying to connect a local account
                    // BUT let's check if the username used to connect a local account is being used by another user
                    User.findOne({ 'local.username' :  username }, function(err, user) {
                        if (err)
                            return done(err);

                        if (user) {
                            return done(null, false);
                            // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                        } else {
                            var user = req.user;
                            user.local.username = username;
                            user.local.password = user.generateHash(password);
                            user.save(function (err) {
                                if (err)
                                    return done(err);

                                return done(null,user);
                            });
                        }
                    });
                } else {
                    // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                    return done(null, req.user);
                }

            });

        }));
};

module.exports = myLocalConfig;
