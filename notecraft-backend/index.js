const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();

app.use(express.json());

app.use('/api/auth', require('./Routes/auth'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000');
})