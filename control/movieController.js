const model = require('../models');


const createMovie = async (req, res) => {
    const data = new model({
        imdbId: req.body.imdbId,
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        runtime: req.body.runtime,
        director: req.body.director,
        actors: req.body.actors,
        plot: req.body.plot,
        images: req.body.images,
        imdbRating: req.body.imdbRating
    });

    try {
        const dataToSave = await data.save();
        res.status(201).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getMovieByimdb = async (req, res) => {
    try {
        const movie = await model.findOne({ imdbId: req.params.imdbId });
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Handler to get a movie by MongoDB _id
const getMovieById = async (req, res) => {
    try {
        const movie = await model.findById(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Handler to get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await model.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Handler to update a movie by MongoDB _id
const updateMovie = async (req, res) => {
    try {
        const result = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteMovie = async (req, res) => {
    try{
        const movie = await model.findByIdAndDelete(req.params.id)
        res.json({message:"sucessfully deleted using Id"});


    }
    catch{
        res.json({ message: 'Movie not found'  });

    }
}
module.exports = {
    createMovie,
    getAllMovies,
    getMovieByimdb,
    getMovieById,
    updateMovie,
    deleteMovie
};
