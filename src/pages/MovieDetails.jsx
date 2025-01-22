import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        if (!response.ok) throw new Error("Movie not found");
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <p className="text-lg text-gray-400 mt-2">{movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mx-auto mt-4 rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
