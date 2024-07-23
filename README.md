```markdown
# IMDB CRUD Application

This project is a Node.js application using Express and Mongoose to manage a movie database. It provides an API to perform CRUD (Create, Read, Update, Delete) operations on movie data in a MongoDB database.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Notes](#notes)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Prethiveerajan/imdb_crud.git
   cd imdb_crud
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file** in the root directory of the project:

   ```plaintext
   PORT=8000
   DB_URL=mongodb+srv://username:password@cluster.mongodb.net/Imdb
   ```

   Replace `username`, `password`, and `cluster` with your MongoDB credentials.

2. **Database and Collection**:

   The application is configured to use the MongoDB database named `Imdb`. The collection for movie data is named `Imdb`.

## Running the Application

To start the server, run:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 8000). You can access the API at `http://localhost:8000`.

## API Endpoints

### `POST /api/movie`

**Description:** Add a new movie to the database.

**Request Body:**

```json
{
  "imdbId": "string",
  "title": "string",
  "year": "string",
  "genre": "string",
  "runtime": "string",
  "director": "string",
  "actors": "string",
  "plot": "string",
  "images": ["string"],
  "imdbRating": "string"
}
```

**Response:**

- **Status 201:** Movie successfully added.
- **Status 400:** Error adding movie.

**Example Request:**

```bash
curl -X POST http://localhost:8000/api/movie -H "Content-Type: application/json" -d '{
  "imdbId": "tt1234567",
  "title": "Example Movie",
  "year": "2024",
  "genre": "Drama",
  "runtime": "120 min",
  "director": "John Doe",
  "actors": "Jane Doe, John Smith",
  "plot": "An example plot",
  "images": ["image1.jpg", "image2.jpg"],
  "imdbRating": "8.5"
}'
```

### `GET /api/movie/imdb/:imdbId`

**Description:** Get a movie by its IMDb ID.

**Response:**

- **Status 200:** Returns the movie data.
- **Status 404:** Movie not found.
- **Status 500:** Server error.

**Example Request:**

```bash
curl -X GET http://localhost:8000/api/movie/imdb/tt1234567
```

### `GET /api/movie/:id`

**Description:** Get a movie by its MongoDB `_id`.

**Response:**

- **Status 200:** Returns the movie data.
- **Status 404:** Movie not found.
- **Status 500:** Server error.

**Example Request:**

```bash
curl -X GET http://localhost:8000/api/movie/60c72b2f4f1a2c001c8e4f02
```

### `GET /api/movies`

**Description:** Get all movies in the database.

**Response:**

- **Status 200:** Returns a list of movies.
- **Status 500:** Server error.

**Example Request:**

```bash
curl -X GET http://localhost:8000/api/movies
```

### `PUT /api/movie/:id`

**Description:** Update a movie by its MongoDB `_id`.

**Request Body:**

```json
{
  "title": "Updated Movie Title",
  "year": "2025",
  "genre": "Comedy",
  "runtime": "130 min",
  "director": "Jane Doe",
  "actors": "John Doe, Jane Smith",
  "plot": "Updated plot description",
  "images": ["updated_image1.jpg"],
  "imdbRating": "9.0"
}
```

**Response:**

- **Status 200:** Movie successfully updated.
- **Status 404:** Movie not found.
- **Status 500:** Server error.

**Example Request:**

```bash
curl -X PUT http://localhost:8000/api/movie/60c72b2f4f1a2c001c8e4f02 -H "Content-Type: application/json" -d '{
  "title": "Updated Movie Title",
  "year": "2025",
  "genre": "Comedy",
  "runtime": "130 min",
  "director": "Jane Doe",
  "actors": "John Doe, Jane Smith",
  "plot": "Updated plot description",
  "images": ["updated_image1.jpg"],
  "imdbRating": "9.0"
}'
```

## Database Schema

The movie data is stored in the `Imdb` collection with the following schema:

```javascript
const dataschem = new mongoose.Schema({
    imdbId: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: String, required: true },
    runtime: { type: String, required: true },
    director: { type: String, required: true },
    actors: { type: String, required: true },
    plot: { type: String, required: true },
    images: { type: [String], required: true },
    imdbRating: { type: String }
}, { collection: 'Imdb' });
```

## Notes

- Ensure your MongoDB Atlas connection string is correct in the `.env` file.
- The application uses Mongoose to handle interactions with MongoDB.
- The collection name is case-sensitive and is set to `Imdb`.

Feel free to modify or extend the functionality as needed!

```

This `README.md` provides comprehensive documentation for setting up, configuring, running, and using your `imdb_crud` application. Make sure to replace placeholders with your actual values.
