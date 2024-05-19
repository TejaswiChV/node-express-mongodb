// models/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-app', {  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;