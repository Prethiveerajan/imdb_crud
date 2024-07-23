const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');

dotenv.config();

const Port = process.env.PORT || 3000;  
const db_url = process.env.DB_URL;


mongoose.connect(db_url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

// Routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Welcome to The Imdb Database!');
});

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
