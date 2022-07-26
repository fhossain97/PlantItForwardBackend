const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    isAdmin: Boolean,
    name: String,
    password: String,
    receipts: []
})

const User = mongoose.model('User', userSchema)

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
})

module.exports = User