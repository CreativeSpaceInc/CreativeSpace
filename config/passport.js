const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Artist = require('../models/artist');

passport.serializeUser(function(artist, done){
  done(null, artist.id);
});

passport.deserializeUser(function(id, done){
  Artist.findById(id, function(err, artist){
    done(err, artist);
  });
});

// SIGNUP
passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, username, password, done){

    Artist.findOne({'username': username}, function(err, artist){
      if(err){
        return done(err);
      }

      if(artist){
        return done(null, false);
      }

      var newArtist = new Artist();
      newArtist.username = req.body.username;
      newArtist.displayname = req.body.displayname;
      newArtist.password = newArtist.encryptPassword(req.body.password);

      newArtist.save(function(err){
        if(err){
          return done(err);
        }

        return done(null, newArtist);
      })
    })
}));

// LOGIN
passport.use('local.login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, username, password, done){
    Artist.findOne({'username': username}, function(err, artist){
      if(err){
        return done(err);
      }

      if(!artist){
        console.log('Artist not found.');
        return done(null, false);
      }

      if(!artist.validPassword(req.body.password)){
        console.log('Login failed.');
        return done(null, false);
      };

      return done(null, artist);

    })
}));
