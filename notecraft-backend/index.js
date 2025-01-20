const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', require('./Routes/auth'));

app.use('/api/note', require('./Routes/note'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000');
})
