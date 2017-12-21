const router = require('express').Router();
const passport = require('passport');
// in the app.js file, add this require statement:
// const authRoutes = require('./routes/auth-routes');

// also in the app.js filen to set up routes path:
// app.use("/auth", authRoutes)

//auth login
router.get('./login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('./logout', (req, res)=> {
  // hand with passports
  res.send('logging out');
})


// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect back to with the access code
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback URI');
});

module.exports = router;
