const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add more fields as needed, e.g. email, age, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;