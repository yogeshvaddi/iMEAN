const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
    loginType: req.body.loginType,
    socialToken: req.body.socialToken,
    image: req.body.image
  });
  if (newUser.loginType == "Through Google" || newUser.loginType == "Through Facebook") {
    newUser.password = "SocialPassword";
  }

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({
        success: true, msg: 'User Registered',
        email: user.email, loginType: user.loginType,
      });
    }
  });
});

// Authenticate

router.post('/authenticate', (req, res, next) => {
  let email = req.body.email;
  let password;
  if (req.body.loginType == "Through Google" || req.body.loginType == "Through Facebook") {
    password = "SocialPassword";
  }
  else {
    password = req.body.password;
  }
  let loginType = req.body.loginType;
  User.getUserByEmail(email, loginType, (err, user) => {

    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }
    User.comparePassword(password, user.password, (err, isMatch) => {

      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 Week
        });

        res.json({
          success: true, token: 'JWT ' + token,
          user: { mobile: user.mobile, email: user.email, loginType: user.loginType, id: user._id }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

// Profile
router.post('/profile', (req, res, next) => {
  let userID = req.body.id;
  console.log(userID);
  User.getUserById(userID, (err, user) => {
    if (err) throw err;
    if (user) {
      res.send({ user: user });
    }
    else {
      res.send({ user: user });
    }
  });
});

// checkDuplicateEmail
router.post('/checkDuplicateEmail', (req, res, next) => {
  let email = req.body.email;
  let loginType = req.body.loginType;
  User.checkDuplicateEmail(email, loginType, (err, user) => {
    if (err) throw err;
    if (user) {
      res.send({ userEmail: user.email, loginType: user.loginType, user: user });
    }
    else {
      res.send({ userEmail: "CAN TAKE" });
    }
  })
});

// updateProfile
router.put('/updateProfile', (req, res, next) => {
  User.updateProfileById(req.body, (err, user) => {
    if (err) throw err;
    if (user) {
      res.send(user);
    }
  });
});

module.exports = router;