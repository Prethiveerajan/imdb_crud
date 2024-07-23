const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    imdbId: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    runtime: {
        required: true,
        type: String
    },
    director: {
        required: true,
        type: String
    },
    actors: {
        required: true,
        type: String
    },
    plot: {
        required: true,
        type: String
    },
    images: {
        required: true,
        type: [String]
    },
    imdbRating: {
        type: String
    }
});

module.exports = mongoose.model('Imdb', movieSchema);
