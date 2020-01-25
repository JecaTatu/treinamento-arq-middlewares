const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String, required: true, unique: true, trim: true,
  },
  password: {
    type: String, required: true,
  },
  name: {
    type: String, required: true, trim: true,
  },
  role: {
    type: String,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;