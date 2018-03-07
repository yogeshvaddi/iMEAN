const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  // username: {
  //   type: String,
  //   required: true
  // },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String
  },
  image: {
    type: String
  },
  socialToken: {
    type: String
  },
  loginType: {
    type: String
  },
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callBack) => {
  User.findById(id, callBack);
}

module.exports.getUserByEmail = (email, loginType, callBack) => {
  const query = { email: email, loginType: loginType };
  User.findOne(query, callBack);
}

module.exports.checkDuplicateEmail = (email, loginType, callBack) => {

  let query = loginType === "Through Sign Up" ? { email: email } :{ email: email, loginType: loginType };
  User.findOne(query, callBack);
  
}

module.exports.updateProfileById = (user, callBack) => {
  const query = { _id: user.id };

  // if (user.loginType != "Through Sign Up") {
  //   const newValues = { $set: { name: user.name, email: user.email, loginType: user.loginType, socialToken: user.socialToken, image: user.image, password: user.password } };
  //   //console.log(newValues);
  //   User.updateOne(query, newValues, callBack);
  // }
  // else {
    const newValues = { $set: { name: user.name, mobile: user.mobile, email: user.email } };
    User.updateOne(query, newValues, callBack);
  //}
}
module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      newUser.save(callback);
    })
  });
}

module.exports.comparePassword = (candidatePassword, hash, callBack) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callBack(null, isMatch);
  });
}