'use strict';

const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const genresRoutes = require('./routes/genres.routes');
const customerRoutes = require('./routes/customer.routes');
const movieRoutes = require('./routes/movie.routes');
const rentalRoutes = require('./routes/rental.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb://localhost/vidly',
  { useNewUrlParser: true }
);

app.use(express.json());

app.use('/api/genres', genresRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
