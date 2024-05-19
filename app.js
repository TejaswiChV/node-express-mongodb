// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const db = require('./models/db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});