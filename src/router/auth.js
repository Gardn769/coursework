const { Router } = require('express');
const router = Router();
const passport = require("passport");
const userModule = require( '../modules/user.js');

router
.post('/signup',
async (req, res) => {
  try {
    const newUser = await userModule.create(req.body);
    return res.json({
      data: newUser,
      status: 'ok',
    });
  } catch (error) {
    return res.json({
      error,
      status: 'error',
    });
  }
})

.post('/signin',
passport.authenticate('signin'),
(req, res) => {
  return res.json({
    data: req.user,
    status: 'ok',
  })
});

module.exports = router
