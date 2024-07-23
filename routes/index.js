const express = require('express');
const router = express.Router();
const { createMovie, getAllMovies, getMovieByimdb, getMovieById, updateMovie ,deleteMovie} = require('../controllers/movieController');


router.post('/movie', createMovie);


router.get('/movie/imdb/:imdbId', getMovieByimdb);


router.get('/movie/:id', getMovieById);


router.get('/movies', getAllMovies);


router.put('/movie/:id', updateMovie);

router.delete('/movie/:id', deleteMovie);

module.exports = router;
