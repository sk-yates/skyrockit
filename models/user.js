const { application } = require('express');
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  company:     { type: String, required: true },
  title:       { type: String, required: true },
  notes:       { type: String },
  postingLink: { type: String },
  status: {
    type: String,
    enum: ["intrested", "applied", "interviewing", "accepted", "rejected"],
  }
});

const userSchema = mongoose.Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true, },
  applications: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
