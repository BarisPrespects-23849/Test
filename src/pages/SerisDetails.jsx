import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SeriesDetails() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        if (!response.ok) throw new Error("Series not found");
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error("Error fetching series details:", error);
      }
    };

    fetchSeries();
  }, [id]);

  if (!series) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold">{series.name}</h1>
      <p className="text-lg text-gray-400 mt-2">Seasons: {series.number_of_seasons} | Episodes: {series.number_of_episodes}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
        alt={series.name}
        className="mx-auto mt-4 rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">{series.overview}</p>
    </div>
  );
}

export default SeriesDetails;
