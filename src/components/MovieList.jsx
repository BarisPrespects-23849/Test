import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(setMovies);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="block bg-gray-800 p-4 rounded-lg hover:scale-105 transition">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
