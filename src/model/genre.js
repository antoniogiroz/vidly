'use strict';

const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;